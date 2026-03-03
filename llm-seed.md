# Livebolt LLM Seed

## 목적
- Livebolt 웹 사이트의 모든 페이지에 일관된 LLM 메타/메타데이터/JSON-LD/알림 컴포넌트를 적용하여 검색엔진/LLM 크롤링과 규정 준수를 지원.
- AI 고지와 개인정보 관련 문구가 페이지 전체에 노출되어 신뢰성과 투명성을 확보.

## 포함 내용
1. **LLM 메타 태그**: `ai-content-*`, `ai-domain-expertise`, `ai-content-language`, `ai-data-freshness`, `ai-content-policy` 등 모든 페이지 `<head>`에 추가.
2. **JSON-LD 스크립트 (`llm-meta.js`)**: Organization + WebSite schema를 동적으로 삽입하여 중복 제거.
3. **AI 생성 콘텐츠 고지 (`.ai-notice`)**: 전체 페이지의 푸터나 로그인 카드에 추가.
4. **robots.txt**: 일반 크롤러 허용 + `LLMMetaBot`과 `LiveboltDataFetcher`에 대한 특정 정책.
5. **필요 페이지**: `index.html`, `index2.html`, `jobs.html`, `insights.html`, `salary.html`, `login.html` - 모두 위 요소를 포함.
6. **README 참고**: GitHub Pages 배포 가이드 포함.

## 배포 파일
- `llm-meta.js`: 브라우저 로딩 시 JSON-LD를 `document.head`에 삽입.
- `robots.txt`: LLM 크롤러 허용, `/private/` 제한, `Crawl-delay: 2`.
- `index.html`, `index2.html`, `jobs.html`, `insights.html`, `salary.html`, `login.html`: `<script defer src="llm-meta.js"></script>` 포함.
- `jobs.html`, `insights.html`, `salary.html`, `login.html`, `index.html` 등 푸터에 `.ai-notice` 내용 추가.

## 배포 방법
1. GitHub 리포지토리에 새 파일 (`llm-seed.md`, `llm-meta.js`, `robots.txt`)과 수정된 HTML들을 커밋.
2. `main` 브랜치 또는 GitHub Pages에 배포되는 브랜치에 푸시.
3. GitHub Pages 설정에서 `robots.txt`와 HTML/JS가 포함된 브랜치가 Pages로 제공되는지 확인.
4. `https://<your-org>.github.io/robots.txt`와 주요 페이지에서 AI 고지+JSON-LD가 삽입됐는지 확인.

## 주의
- 추후 페이지가 추가될 경우 위 구조를 복사(또는 partial 재사용)하여 `llm-meta.js`와 `.ai-notice`를 빠지지 않게 포함시켜야 함.
