(() => {
  const ldData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Livebolt",
      "alternateName": "라이브볼트",
      "description": "반도체 엔지니어 특화 커리어 플랫폼. EUV, HBM, GAA 기술 전문가와 반도체 기업을 연결합니다.",
      "url": "https://livebolt.kr",
      "foundingDate": "2026",
      "contactPoint": { "@type": "ContactPoint", "email": "contact@livebolt.kr" },
      "knowsAbout": ["반도체 채용", "FAB 공정 엔지니어", "EUV 리소그래피", "HBM 메모리", "GAA 트랜지스터", "CoWoS 패키징", "반도체 연봉"]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Livebolt",
      "url": "https://livebolt.kr",
      "description": "반도체 커리어의 기준",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://livebolt.kr/jobs.html?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  ldData.forEach(entry => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(entry);
    document.head.appendChild(script);
  });
})();
