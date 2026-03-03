# Livebolt Landing Page

이 리포지토리는 반도체 커리어 플랫폼 **Livebolt**의 단일 페이지 마케팅 사이트입니다. Hero, Jobs, Insights, Newsletter, Community, Footer 등 섹션과 UI 스타일이 모두 포함되어 있어 GitHub Pages로 바로 배포할 수 있습니다.

## 배포 방법
1. 이 폴더를 GitHub 리포지토리로 초기화하거나 기존 리포지토리로 추가합니다 (`git init`, `git add .`, `git commit`).
2. GitHub에서 리포지토리를 만든 후 `git remote add origin ...`과 `git push`로 업로드합니다.
3. GitHub 리포지토리의 Settings > Pages에서 **branch**를 `main`(또는 사용하는 브랜치)으로, **root**를 `/`로 설정합니다.
4. `index.html`을 커밋한 상태에서 따로 빌드 없이 바로 라이브됩니다.

## 참고
- 폰트는 Google Fonts `Inter`를 사용하며, CSS는 인라인 `<style>`에 작성돼 있어 추가 설정 없이 작동합니다.
- 필요한 경우 `index.html`을 수정하여 콘텐츠나 링크를 업데이트하세요.
- **공통 네비게이션 지침**: 모든 페이지에 붙는 `<nav>`은 주요 링크와 더불어 `연봉계산기`, `이벤트`, `기업서비스`처럼 준비중 항목을 `nav-disabled` 클래스 + `nav-badge`(`badge-soon`)로 감싼 상태로 유지해야 합니다. 이렇게 해야 “준비중” 배지가 항상 표시되고, 사용자에게 비활성화된 링크라는 힌트를 줍니다. 새로운 페이지를 만들 때는 기존 `<nav>` 블록을 복사하거나 partial/template로 추출해 동일한 구조를 재사용하세요.
