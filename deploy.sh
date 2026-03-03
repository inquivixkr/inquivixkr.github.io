#!/usr/bin/env bash
set -euo pipefail

# GitHub Pages 배포 helper (llm seed)
# 1) 필요한 파일이 커밋된 상태인지 확인
# 2) main 브랜치 기준으로 push

if [[ -n "$(git status --porcelain)" ]]; then
  echo "작업 디렉터리가 깨끗하지 않습니다. 먼저 git add/commit 해주세요."
  exit 1
fi

git push origin main
