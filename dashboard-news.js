const NEWS_SOURCE = 'news-data.json';

async function renderDashboardNews() {
  const container = document.getElementById('dashboardGrid');
  if (!container) return;

  container.innerHTML = '<p class="dashboard-loading">Livebolt AI가 하루 동안 수집한 최신 글로벌 반도체 뉴스를 정리하는 중입니다...</p>';

  try {
    const res = await fetch(NEWS_SOURCE, { cache: 'no-store' });
    if (!res.ok) throw new Error('news data not available');
    const entries = await res.json();

    if (!entries.length) {
      container.innerHTML = '<p class="dashboard-loading">오늘의 요약 뉴스가 아직 준비되지 않았습니다. 잠시 후 다시 확인해주세요.</p>';
      return;
    }

    container.innerHTML = '';
    entries.forEach(entry => {
      const card = document.createElement('article');
      card.className = 'dashboard-card';
      card.innerHTML = `
        <h4>${entry.title}</h4>
        <p>${entry.summary}</p>
        <p class="dashboard-meta">${entry.source} · ${new Date(entry.published).toLocaleDateString('ko-KR')}</p>
        <a href="${entry.url}" target="_blank" rel="noopener">원문 보기<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = `<p class="dashboard-loading">뉴스 대시보드를 불러오는 중 오류가 발생했습니다. ${err.message}</p>`;
  }
}

document.addEventListener('DOMContentLoaded', renderDashboardNews);
