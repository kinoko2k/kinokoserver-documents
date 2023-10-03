import os
import requests
import json

# GitHub ActionsからSecretを取得
webhook_url = os.environ['DISCORD_WEBHOOK_SECRET']

# 以前のスクリプトの残りの部分をそのまま使用
# GitHub Actionsから渡される環境変数を取得
repository_name = os.environ['GITHUB_REPOSITORY']
branch_name = os.environ['GITHUB_REF']
run_number = os.environ['GITHUB_RUN_NUMBER']
workflow_status = os.environ['GITHUB_RUN_CONCLUSION']
commit_message = os.environ['GITHUB_EVENT_PATH']

# GitHubのコミットSHAを取得
github_sha = os.environ['GITHUB_SHA']

# GitHub APIを使用してコミットメッセージを取得
api_url = f"https://api.github.com/repos/{repository_name}/commits/{github_sha}"
response = requests.get(api_url)
commit_info = response.json()
commit_message = commit_info['commit']['message']

# Embedメッセージを作成
embed_data = {
    "title": f"KinokoServer/documents",
    "fields": [
        {"name": "Branch", "value": f"{branch_name}", "inline": True},
        {"name": "Run", "value": f"{run_number}", "inline": True},
        {"name": "Status", "value": f"{workflow_status}", "inline": True},
        {"name": "Changes", "value": f"```{commit_message}```", "inline": False},
    ],
    "color": 65280 if workflow_status == "success" else 16711680
}

payload = {
    "embeds": [embed_data]
}

# Discord WebhookにEmbedメッセージを送信
headers = {'Content-Type': 'application/json'}
response = requests.post(webhook_url, data=json.dumps(payload), headers=headers)

# レスポンスを表示（デバッグ用）
print(response.text)
