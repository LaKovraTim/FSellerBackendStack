#!/bin/bash
curl -X POST https://messages-sandbox.nexmo.com/v0.1/messages \
-u '486bd59a:JSoP2php8ccyBXAa' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-d '{
    "from": { "type": "whatsapp", "number": "14157386170" },
    "to": { "type": "whatsapp", "number": "'"$PHONE"'" },
    "message": {
      "content": {
        "type": "text",
        "text": "'"$TEXT"'"
      }
    }
  }'
