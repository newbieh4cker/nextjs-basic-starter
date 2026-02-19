#!/usr/bin/env bash
# 민감한 파일(git에 올리면 안 되는 파일)이 Write/Edit 대상에 포함되면
# 즉시 차단하는 PreToolUse 훅

# stdin으로 JSON 입력을 받음
INPUT=$(cat)

# tool_name 추출
TOOL_NAME=$(echo "$INPUT" | python3 -c "import sys,json; print(json.load(sys.stdin).get('tool_name',''))" 2>/dev/null)

# Write, Edit 도구만 검사
if [[ "$TOOL_NAME" != "Write" && "$TOOL_NAME" != "Edit" ]]; then
  exit 0
fi

# 파일 경로 추출
FILE_PATH=$(echo "$INPUT" | python3 -c "
import sys, json
data = json.load(sys.stdin)
inp = data.get('tool_input', {})
print(inp.get('file_path', '') or inp.get('path', ''))
" 2>/dev/null)

if [[ -z "$FILE_PATH" ]]; then
  exit 0
fi

# 파일명만 추출 (경로에서)
FILENAME=$(basename "$FILE_PATH")
# 소문자로 변환
FILENAME_LOWER=$(echo "$FILENAME" | tr '[:upper:]' '[:lower:]')

# ── 차단 대상 패턴 목록 ──
# 정확한 파일명 매칭
BLOCKED_EXACT=(
  ".env"
  ".env.local"
  ".env.development"
  ".env.development.local"
  ".env.test"
  ".env.test.local"
  ".env.production"
  ".env.production.local"
  ".env.staging"
  ".env.backup"
  ".env.example"
  "credentials.json"
  "service-account.json"
  "serviceaccount.json"
  "secrets.json"
  "secrets.yaml"
  "secrets.yml"
  ".npmrc"
  ".pypirc"
  ".netrc"
  ".htpasswd"
  ".pgpass"
  "id_rsa"
  "id_rsa.pub"
  "id_ed25519"
  "id_ed25519.pub"
  "id_dsa"
  "id_ecdsa"
  "known_hosts"
  "authorized_keys"
  ".docker/config.json"
  "kubeconfig"
  ".kube/config"
  "token.json"
  "tokens.json"
  "firebase-adminsdk.json"
  "gcp-key.json"
  "aws-credentials"
)

# 패턴 매칭 (접두사/접미사)
BLOCKED_PATTERNS=(
  "*.pem"
  "*.key"
  "*.pfx"
  "*.p12"
  "*.jks"
  "*.keystore"
  "*.cert"
  "*.crt"
  "*.der"
  "*.cer"
)

# 정확한 파일명 체크
for BLOCKED in "${BLOCKED_EXACT[@]}"; do
  BLOCKED_LOWER=$(echo "$BLOCKED" | tr '[:upper:]' '[:lower:]')
  if [[ "$FILENAME_LOWER" == "$BLOCKED_LOWER" ]]; then
    echo "🚫 [보안 차단] 민감한 파일 감지: $FILENAME"
    echo ""
    echo "  대상 파일: $FILE_PATH"
    echo "  차단 사유: '$FILENAME'은(는) 비밀키/인증정보 등 민감한 데이터를 포함할 수 있는 파일입니다."
    echo "  이 파일은 git에 커밋되어서는 안 됩니다."
    echo ""
    echo "  💡 .env.example 등 템플릿 파일을 대신 사용하세요."
    exit 2
  fi
done

# 패턴 매칭 체크 (확장자 기반)
for PATTERN in "${BLOCKED_PATTERNS[@]}"; do
  # *.ext 형태의 패턴에서 확장자 추출
  EXT="${PATTERN#\*}"
  if [[ "$FILENAME_LOWER" == *"$EXT" ]]; then
    echo "🚫 [보안 차단] 민감한 파일 감지: $FILENAME"
    echo ""
    echo "  대상 파일: $FILE_PATH"
    echo "  차단 사유: '$EXT' 확장자는 인증서/비밀키 파일로, git에 포함되면 안 됩니다."
    echo ""
    echo "  💡 이 파일이 정말 필요하다면 .gitignore에 추가되어 있는지 확인하세요."
    exit 2
  fi
done

# .env 로 시작하는 모든 파일 추가 체크
if [[ "$FILENAME_LOWER" == .env* ]]; then
  echo "🚫 [보안 차단] 민감한 파일 감지: $FILENAME"
  echo ""
  echo "  대상 파일: $FILE_PATH"
  echo "  차단 사유: '.env'로 시작하는 파일은 환경변수/비밀정보를 포함할 수 있습니다."
  echo ""
  echo "  💡 .env.example 등 템플릿 파일을 대신 사용하세요."
  exit 2
fi

# 문제 없으면 통과
exit 0
