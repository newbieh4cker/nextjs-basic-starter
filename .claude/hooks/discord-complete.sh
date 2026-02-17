#!/bin/bash
# Claude Code 작업 완료 시 Discord 알림

WEBHOOK_URL="${DISCORD_WEBHOOK_URL}"

# 웹훅 URL 미설정 시 종료
if [ -z "$WEBHOOK_URL" ]; then
  exit 0
fi

# Discord Embed 메시지 전송
curl -s -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d @- > /dev/null <<'EOF'
{
  "embeds": [{
    "title": "✅ Claude Code - 작업 완료",
    "description": "Claude Code 작업이 완료되었습니다.",
    "color": 5763719,
    "footer": {
      "text": "Claude Code Notification"
    }
  }]
}
EOF

exit 0
