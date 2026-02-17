#!/bin/bash
# Claude Code 권한 요청 시 Discord 알림

WEBHOOK_URL="${DISCORD_WEBHOOK_URL}"

# 웹훅 URL 미설정 시 종료
if [ -z "$WEBHOOK_URL" ]; then
  exit 0
fi

# stdin에서 이벤트 데이터 읽기
INPUT=$(cat)

# 도구명 추출 (grep 사용)
TOOL=$(echo "$INPUT" | grep -o '"tool_name":"[^"]*"' | cut -d'"' -f4)
if [ -z "$TOOL" ]; then
  TOOL="알 수 없는 도구"
fi

# Discord Embed 메시지 전송
curl -s -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d "{
    \"embeds\": [{
      \"title\": \"⚠️ Claude Code - 권한 요청\",
      \"description\": \"**${TOOL}** 도구 사용 권한을 요청하고 있습니다.\\n승인 또는 거부를 선택해주세요.\",
      \"color\": 16776960,
      \"footer\": {
        \"text\": \"Claude Code Notification\"
      }
    }]
  }" > /dev/null

exit 0
