/* 이영경 포트폴리오 (2026 리뉴얼) */
(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  const SMOOTH=RM?'auto':'smooth';

  /* 새로고침 시 이전 스크롤 위치를 복원하지 않고 항상 맨 위에서 시작 */
  if('scrollRestoration' in history) history.scrollRestoration='manual';
  window.scrollTo(0,0);
  addEventListener('load',()=>window.scrollTo(0,0));
  addEventListener('beforeunload',()=>window.scrollTo(0,0));

  /* ---- 기존 작업 (data.js 기준, 링크는 실제 사이트) ---- */
  const P=[
    {id:1,t:"기업 브랜드 웹사이트 구축",g:"agency",role:"UI/UX 디자인 · 퍼블리싱",link:"https://sell-plus.co.kr/main/index.php",dom:"sell-plus.co.kr",img:"assets/images/pf-thumb-01.webp"},
    {id:2,t:"쇼핑몰 서비스 웹사이트 구축",g:"agency",role:"UI/UX 디자인 · 퍼블리싱",link:"https://site-doceramic.netlify.app/",dom:"doceramic · 복원 사이트",img:"assets/images/pf-thumb-02.webp"},
    {id:3,t:"자사 종합 제품 카탈로그 리뉴얼",g:"inhouse",role:"기획 · 편집 디자인",link:"https://drive.google.com/file/d/1QDbncsb1esRgaHLJToHpU_ajw8jZfZK3/view?usp=sharing",dom:"카탈로그 PDF",img:"assets/images/pf-thumb-03.webp"},
    {id:4,t:"제약사 브랜드 웹사이트 구축",g:"agency",role:"UI/UX 디자인 · 퍼블리싱",link:"https://www.nbkpharm.com/main/main.php",dom:"nbkpharm.com",img:"assets/images/pf-thumb-04.webp"},
    {id:5,t:"교육 웹사이트 리뉴얼",g:"agency",role:"UI/UX 디자인 · 퍼블리싱",link:"https://slitt.deafkorea.com/main/",dom:"slitt.deafkorea.com",img:"assets/images/pf-thumb-05.webp"},
    {id:6,t:"교육 플랫폼 웹사이트 구축",g:"agency",role:"UI/UX 디자인 · 퍼블리싱",link:"https://aiednet.kr/main/main.php",dom:"aiednet.kr",img:"assets/images/pf-thumb-06.webp"},
    {id:7,t:"자사 국문 웹사이트 리뉴얼",g:"inhouse",role:"UI/UX 디자인 · 퍼블리싱",link:"https://andamiro.com/kr/",dom:"andamiro.com/kr",img:"assets/images/pf-thumb-07.webp"},
    {id:8,t:"자사 글로벌 웹사이트 리뉴얼",g:"inhouse",role:"UI/UX 디자인 · 퍼블리싱",link:"https://andamiro.com/global/",dom:"andamiro.com/global",img:"assets/images/pf-thumb-08.webp"},
    {id:9,t:"Pump It Up 공식 웹사이트 리뉴얼",g:"inhouse",role:"UI/UX 디자인 · 퍼블리싱",link:"https://www.piugame.com/",dom:"piugame.com",img:"assets/images/pf-thumb-09.webp"},
    {id:10,t:"유학원 브랜드 웹사이트 구축",g:"agency",role:"서브페이지 UI/UX · 퍼블리싱",link:"https://www.yesuhak.com/main/",dom:"yesuhak.com",img:"assets/images/pf-thumb-10.webp"}
  ];
  const CAT={agency:"Web Agency",inhouse:"In-house"};

  /* ---- How I work: data.js의 실제 프로세스 ---- */
  const FLOW=[
    {t:"기업 브랜드 웹사이트 구축",s:["디자인 리서치 & UI 설계","디자인 시안 작업","퍼블리싱 및 개발 협업","반응형 및 최종 납품"]},
    {t:"자사 종합 제품 카탈로그 리뉴얼",s:["기획 & 콘텐츠 구성","디자인 방향 설정","편집 디자인 작업","번역 협업 & 최종 완성"]},
    {t:"Pump It Up 공식 웹사이트 리뉴얼",s:["벤치마킹 & 콘텐츠 기획","디자인 시안 작업","퍼블리싱 및 개발 협업","반응형 및 최종 완성"]}
  ];

  /* ---- 새 AI 작업 (AI Works 카드와 AI Lab 탭이 이 순서를 같이 씀) ----
     url: 사이트를 완성하면 주소를 넣으세요. 주소가 있는 작업에만 "사이트 보기" 버튼이 생깁니다.
     video: 카드 오른쪽 화면 녹화. frame:"browser"면 데스크톱 창 모양, 없으면 휴대폰 모양.
     lab: AI Lab 비교 이미지(before/after). wide는 가로형 데스크톱 화면이며 비교 영역 비율을 w:h에 맞춥니다.
     period: 작업 기간(카드의 Period 줄). GitHub 커밋 날짜와 어긋나지 않게.
     ai / me: AI Lab 설명 상자의 "AI가 맡은 일 / 내가 맡은 일" 목록입니다. */
  const AI=[
    {k:"moa",name:"모아놀자",en:"Web Platform",url:"https://dudrud0642-beep.github.io/kids_program_portfolio/",
     desc:"친구가 아이와 갈 프로그램을 찾으려고 도서관, 구청, 문화재단 사이트를 하나씩 들어가 보는 모습을 보고 시작했습니다. 흩어진 프로그램을 한 화면에서 볼 수 있도록 스크롤을 길게 내리는 페이지 대신 대시보드 형식으로 만들고, 흰 배경에 노란 포인트로 밝고 읽기 쉽게 잡았습니다. 기관 공식 공지에서 모은 실제 정보만 넣었고, 서울 25개 자치구의 공공예약 정보는 매일 아침 자동으로 갱신됩니다. 앞으로 다른 구의 도서관과 문화재단 소식까지 모아 실제 서비스로 운영할 계획입니다.",
     tools:["Cursor","Claude Code"],
     stack:["HTML","CSS","JavaScript","Open API","GitHub","Vercel"],
     period:"2026.10.13 – 10.19",
     video:{src:"assets/images/ai-moa-demo.mp4",poster:"assets/images/ai-moa-poster.jpg",frame:"browser",host:"dudrud0642-beep.github.io/kids_program_portfolio",label:"모아놀자 대시보드에서 프로그램을 찾아보는 화면 녹화"},
     lab:{before:"assets/images/ai-moa-v0-first.webp",after:"assets/images/ai-moa-final.webp",l:"AI 첫 결과 · 10/13",r:"완성 · 10/19",alt:"모아놀자 도봉구 대시보드 첫 화면",wide:true,w:1536,h:864},
     labDesc:"처음 결과는 샘플 데이터를 넣은 평범한 목록형 페이지라, 스크롤을 한참 내려야 하고 다른 사이트와 다른 점이 없었습니다. 그래서 지도와 요약 숫자, 2주 일정이 한 화면에 보이는 대시보드로 방향을 바꾸고, 기관 공지에서 모은 실제 프로그램으로 채웠습니다. 주색과 로고, 글자 굵기, 지도 표현도 하나씩 다시 정했고, 휴대폰과 태블릿에서도 편하게 쓰이는지 직접 써 보며 수정을 요청했습니다.",
     ai:["기관별 프로그램 수집과 데이터 정리","콘셉트에 맞춘 대시보드 디자인","HTML·CSS·JS 퍼블리싱","자동 갱신 기능 개발","반응형 점검과 오류 수정"],
     me:["서비스 아이디어와 기획","디자인 콘셉트와 대시보드 형식 결정","로고·주색·폰트 시안 선택","실제 기관 정보만 쓰는 데이터 기준","모바일·태블릿 사용성 검수와 수정 요청","최종 결과물 검수"]},
    {k:"simmons",name:"SIMMONS 사이트 리뉴얼",en:"Brand Website",url:"https://dudrud0642-beep.github.io/simmons_portfolio/",
     desc:"기존 SIMMONS 공식몰이 흰 배경이라, 블랙 콘셉트의 모던하고 심플한 느낌으로 리뉴얼 방향을 잡았습니다. 글이 잘 읽히고 깔끔해 보이는 것을 가장 먼저 생각했고, 제품을 소개하는 섹션은 화면을 넓게 써서 큼직하게 보여 주고 싶었습니다. 글로만 되어 있던 게시판과 매장 안내는 카드로 바꿔 보기 편하게 정리했습니다. SIMMONS를 주제로 한 비공식 리뉴얼 작업입니다.",
     tools:["Cursor","Claude Code","Codex"],
     stack:["HTML","CSS","JavaScript","GitHub","Vercel"],
     period:"2026.10.06 – 10.08",
     video:{src:"assets/images/ai-simmons-demo.mp4",poster:"assets/images/ai-simmons-poster.jpg",frame:"browser",host:"dudrud0642-beep.github.io/simmons_portfolio",label:"SIMMONS 리뉴얼 사이트를 위에서 아래로 내려 보는 화면 녹화"},
     lab:{before:"assets/images/ai-simmons-v0-art.jpg",after:"assets/images/ai-simmons-final.jpg",l:"AI 첫 버전 · 10/6",r:"피드백 반영 후 · 10/7",alt:"SIMMONS 리뉴얼 THE ART OF GOOD SLEEP 섹션",wide:true,w:1440,h:900},
     labDesc:"AI가 처음 만든 버전은 기본 구성은 갖췄지만, 화면이 비어 보이고 글자 크기와 여백이 제각각이었습니다. 섹션마다 디자인 방향을 정해 구성을 바꾸고, 제목 굵기와 폰트 크기, 여백, 반응형을 하나씩 짚어 가며 지금 모습으로 다듬었습니다. 비교 화면의 THE\u00a0ART\u00a0OF GOOD\u00a0SLEEP 섹션은 세 가지 기준이 한 화면에 보이도록 구성을 새로 잡은 부분입니다.",
     ai:["섹션 구성과 레이아웃 초안","방향에 맞춘 화면 디자인","HTML·CSS·JS 퍼블리싱","피드백 반영과 반응형 수정","이미지 압축과 코드 정리"],
     me:["콘셉트 결정과 프롬프트 작성","레퍼런스 리서치와 디자인 방향 설정","폭·여백·폰트 기준 수립과 디테일 검수","제품·공간 이미지 선정","디자인 수정 요청과 반복 피드백","최종 결과물 검수"]},
    {k:"sdetail",name:"SIMMONS 상세페이지",en:"Detail Page",url:"https://dudrud0642-beep.github.io/portfolio_detail_pages/simmons/",
     desc:"단순히 정보를 나열하는 상세페이지가 아니라, 디자인을 더해 제품이 더 돋보이는 상세페이지를 만들고 싶었습니다. 메인 리뉴얼 사이트의 분위기를 그대로 이어 가면서 큰 타이포와 넉넉한 여백으로 차분하고 고급스럽게 잡았습니다. 매트리스 구조는 한 겹씩 열어 보듯 단계별로 보여 주고, 모델명과 사양, 사진은 모두 실제 제품 기준으로 넣었습니다. SIMMONS를 주제로 한 비공식 작업입니다.",
     tools:["Cursor","Claude Code"],
     stack:["HTML","CSS","JavaScript","GitHub","Vercel"],
     period:"2026.10.08 – 10.13",
     video:{src:"assets/images/ai-sdetail-demo.mp4",poster:"assets/images/ai-sdetail-poster.jpg",frame:"browser",host:"dudrud0642-beep.github.io/portfolio_detail_pages/simmons",label:"SIMMONS 상세페이지를 둘러보는 화면 녹화"},
     lab:{before:"assets/images/ai-sdetail-official-pc.jpg",after:"assets/images/ai-sdetail-final-pc.jpg",l:"기존 상세페이지",r:"리디자인 · 10/13",alt:"SIMMONS 브리짓 상세페이지 스프링 구조 부분",wide:true,w:1440,h:900},
     labDesc:"기존 공식몰 상세페이지는 제품 사진과 설명 글이 전부라 브리짓만의 장점이 잘 보이지 않았습니다. 제품 소개부터 디자인 디테일, 매트리스 구조, 하룻밤 사용 흐름, 옵션과 제품 정보까지 스크롤을 따라 차례대로 읽히도록 상세페이지 전체를 다시 구성했습니다. 비교 화면은 같은 스프링 내용을 담은 부분입니다.",
     ai:["섹션 구성과 카피 초안","콘셉트에 맞춘 상세페이지 디자인","HTML·CSS·JS 퍼블리싱","매트리스 구조도 제작"],
     me:["기획과 요구사항 정리","문구 수정과 섹션 구성 통일","디자인 방향성과 콘셉트 결정","폰트 크기·가독성 검수와 디테일한 상세 작업","모바일 검수와 수정 요청","최종 결과물 검수"]},
    {k:"beplain",name:"비플레인 상세이미지",en:"Detail Image",url:"https://dudrud0642-beep.github.io/portfolio_detail_pages/beplain_mungbean_foam/html/",btn:"상세페이지 보기",
     desc:"공식 상세이미지의 문구와 수치는 그대로 두고, 완전히 다른 느낌의 상세이미지를 만드는 것이 목표였습니다. 아이보리와 세이지 톤으로 더 트렌디하게 바꾸고, 제품 이미지와 제품명, 꼭 알아야 할 내용이 한눈에 들어오도록 포인트를 줬습니다. 통이미지 상세는 AI가 문구와 수치를 읽지 못해서, 요즘은 AI 검색에 잡히도록 상세를 HTML로 만드는 추세입니다. 그래서 같은 디자인을 이미지가 아닌 HTML로 다시 만들었습니다. 비플레인을 주제로 한 비공식 리디자인 작업입니다.",
     tools:["Cursor","Claude Code"],
     stack:["HTML","CSS","GitHub","Vercel"],
     period:"2026.10.13 – 10.19",
     video:{src:"assets/images/ai-beplain-demo.mp4",poster:"assets/images/ai-beplain-poster.jpg",label:"비플레인 HTML 상세를 휴대폰 화면으로 내려 보는 녹화"},
     lab:{before:"assets/images/ai-beplain-ph-before.jpg",after:"assets/images/ai-beplain-ph-after.webp",l:"기존 상세이미지",r:"HTML 리디자인 · 10/19",alt:"비플레인 녹두 클렌징폼 약산성 pH 섹션",w:860,h:1540},
     labDesc:"기존 상세이미지는 내용은 충실하지만 그래프와 강조 문구가 흩어져 있고, 숫자와 그래프는 모두 멈춰 있는 이미지였습니다. 같은 문구와 수치를 카드 형태로 다시 정리하고, 판매 수치와 체크리스트, 그래프, pH처럼 움직이면 더 잘 이해되는 부분은 움직이도록 만들었습니다. 비교 화면은 HTML로 다시 만든 상세에서 pH 막대 위 표시가 녹두폼의 pH\u00a06으로 움직이는 약산성 부분입니다.",
     ai:["섹션 구성과 레이아웃 초안","콘셉트에 맞춘 상세이미지 디자인","그래프·움직임 시각 자료 제작","같은 디자인의 HTML 상세 변환"],
     me:["리디자인 제품 선정과 방향 결정","디자인 방향성과 콘셉트 결정","기획과 요구사항 정리","AI 검색을 위한 HTML 전환 결정","최종 결과물 검수"]},
    {k:"pet",name:"멍냥 환생 연구소",en:"Web Service",url:"https://pet-profile-five.vercel.app/",
     desc:"“우리 아이가 사람으로 태어난다면 어떤 사람이 될까?”라는 궁금증에서 시작한 재미 콘텐츠입니다. 질문 5개에 답하면 반려동물의 인간 프로필이 나옵니다. 크림 배경에 노란 포인트, 검정 대신 갈색 외곽선을 써서 부드럽고 귀여운 스티커 느낌으로 만들었습니다.",
     tools:["Claude Code"],
     stack:["Vue 3","Vite","GitHub","Vercel"],
     period:"2026.09.01",
     video:{src:"assets/images/ai-pet-demo.mp4",poster:"assets/images/ai-pet-landing.png",label:"멍냥 환생 연구소를 처음부터 결과까지 사용하는 화면 녹화"},
     lab:{before:"assets/images/ai-pet-wire-landing.png",after:"assets/images/ai-pet-landing.png",l:"기획서 와이어프레임",r:"완성 화면",alt:"멍냥 환생 연구소 첫 화면"},
     labDesc:"질문 흐름과 결과 카드 구성은 기획서로 먼저 정리했습니다. 비교 화면은 기획서에 글자로 그려 둔 와이어프레임과 완성된 첫 화면입니다. 와이어프레임의 구성은 살리면서, 캐릭터와 카드, 버튼은 정해 둔 스티커 느낌에 맞춰 피드백으로 다듬었습니다.",
     ai:["UI 명세서와 화면 설계 초안","콘셉트에 맞춘 화면 디자인","Vue 3 화면과 결과 카드 개발"],
     me:["서비스 콘셉트 기획","질문 흐름 결정","디자인 방향과 컬러 콘셉트 결정","설계안 검토와 수정 요청","최종 결과물 검수"]}
  ];


  /* ---------- GNB 활성 표시 ---------- */
  const navBtns=$$('.gnb button');
  const SECTIONS=['about','works','lab','index','design','contact'];
  const setActive=id=>navBtns.forEach(b=>{
    const on=b.dataset.scroll===id;
    b.classList.toggle('on',on);
    if(on) b.setAttribute('aria-current','true'); else b.removeAttribute('aria-current');
  });
  /* 클릭으로 이동하는 동안에는 지나가는 섹션 때문에 메뉴가 바뀌지 않도록 잠금 */
  let spyLock=false, lockTimer=0, spyTick=false;
  const lockSpy=()=>{spyLock=true;clearTimeout(lockTimer);lockTimer=setTimeout(()=>{spyLock=false},1200)};
  const spy=()=>{
    if(spyLock) return;
    const line=innerHeight*0.35; let cur=null;
    SECTIONS.forEach(id=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=line) cur=id});
    setActive(cur);
  };
  addEventListener('scroll',()=>{
    if(spyLock){clearTimeout(lockTimer);lockTimer=setTimeout(()=>{spyLock=false},160);return}
    if(spyTick) return; spyTick=true;
    requestAnimationFrame(()=>{spyTick=false;spy()});
  },{passive:true});
  addEventListener('load',spy);

  /* ---------- scroll / copy ---------- */
  document.addEventListener('click',e=>{
    const s=e.target.closest('[data-scroll]');
    if(s){
      e.preventDefault();
      const id=s.dataset.scroll, el=document.getElementById(id);
      setActive(id); lockSpy();
      if(el) el.scrollIntoView({behavior:SMOOTH,block:'start'});
    }
    const c=e.target.closest('[data-copy]');
    if(c){
      const old=c.textContent, done=()=>{c.textContent='복사됨';setTimeout(()=>c.textContent=old,1400)};
      const sel=()=>{const n=c.parentElement.querySelector('[data-copy-src]');if(!n)return;const r=document.createRange();r.selectNodeContents(n);const g=getSelection();g.removeAllRanges();g.addRange(r)};
      try{navigator.clipboard.writeText(c.dataset.copy).then(done,sel)}catch(err){sel()}
    }
  });

  /* ---------- How I work loop ---------- */
  const fSteps=$('#flowSteps'), fTitle=$('#flowTitle');
  const paint=(f,n)=>{fSteps.innerHTML=f.s.map((s,i)=>`<li class="${i<n?'on':''}">${s}</li>`).join('')};
  paint(FLOW[0],4);
  (async function loop(){
    if(RM) return;
    let i=0;
    for(;;){
      await sleep(2800);
      const cur=FLOW[i].t;
      for(let j=cur.length;j>=0;j--){fTitle.textContent=cur.slice(0,j);await sleep(22)}
      i=(i+1)%FLOW.length; const f=FLOW[i]; paint(f,0);
      await sleep(220);
      for(let j=1;j<=f.t.length;j++){fTitle.textContent=f.t.slice(0,j);await sleep(68)}
      for(let n=1;n<=4;n++){await sleep(430);paint(f,n)}
    }
  })();

  /* ---------- AI works stack ---------- */
  const visual=w=>{
    const v='<video src="'+w.video.src+'" poster="'+w.video.poster+'" muted loop playsinline preload="metadata" aria-label="'+w.video.label+'"></video>';
    return w.video.frame==='browser'
      ? '<div class="browser-video"><div class="bar" aria-hidden="true"><i></i><i></i><i></i><span>'+w.video.host+'</span></div>'+v+'</div>'
      : '<div class="phone-video">'+v+'</div>';
  };
  const keep=t=>t.replace(/ /g,'&nbsp;');
  const toolList=a=>a.map(keep).join('&nbsp;· ');
  const siteBtn=w=>w.url
    ? `<a class="btn-site" href="${w.url}" target="_blank" rel="noopener">${w.btn||'사이트 보기'} <span aria-hidden="true">↗</span></a>`
    : '';
  $('#stack').innerHTML=AI.map((w,i)=>`
    <article class="sc" style="--i:${i}">
      <div class="sc-t">
        <div class="sc-meta"><span class="eyebrow">${w.en}</span></div>
        <h3>${w.name}</h3>
        <p class="sc-desc">${w.desc}</p>
        ${(w.tools||w.stack)?'<dl class="sc-tools">'+(w.tools?'<div class="ai"><dt>AI</dt><dd>'+toolList(w.tools)+'</dd></div>':'')+(w.stack?'<div><dt>Stack</dt><dd>'+toolList(w.stack)+'</dd></div>':'')+(w.period?'<div><dt>Period</dt><dd>'+keep(w.period)+'</dd></div>':'')+'</dl>':''}
        <ol class="steps"><li><b>1</b>Prompt</li><li><b>2</b>Design</li><li><b>3</b>Code</li><li><b>4</b>Launch</li></ol>
        ${w.url?'<div class="sc-foot">'+siteBtn(w)+'</div>':''}
      </div>
      <div class="sc-v">${visual(w)}</div>
    </article>`).join('');

  /* 카드 높이를 CSS(--h)에 넘겨, 화면보다 큰 카드도 아래쪽까지 다 보이고 나서 고정되게 */
  const stackCards=$$('#stack .sc');
  const setH=c=>c.style.setProperty('--h',c.offsetHeight+'px');
  if('ResizeObserver' in window){const ro=new ResizeObserver(es=>es.forEach(e=>setH(e.target)));stackCards.forEach(c=>ro.observe(c))}
  else{const all=()=>stackCards.forEach(setH);all();addEventListener('resize',all)}

  /* 영상: 카드가 겹쳐 쌓이므로 맨 위에 보이는 카드의 영상 하나만 재생 (여러 개를 동시에 디코딩하면 버벅임)
     움직임 줄이기 설정이면 자동재생 대신 재생 버튼 */
  const vids=$$('.sc-v video');
  if(RM) vids.forEach(v=>{v.controls=true});
  else if(vids.length){
    const cards=stackCards;
    let vTick=false, inView=false;
    const pick=()=>{
      vTick=false;
      let top=null;
      if(inView){
        for(const c of cards){const r=c.getBoundingClientRect(); if(r.top<innerHeight*.6&&r.bottom>innerHeight*.25) top=c;}
      }
      cards.forEach(c=>{const v=c.querySelector('video');if(!v)return;
        if(c===top){if(v.paused)v.play().catch(()=>{v.controls=true})} else if(!v.paused) v.pause();});
    };
    const ask=()=>{if(!vTick){vTick=true;requestAnimationFrame(pick)}};
    if('IntersectionObserver' in window) new IntersectionObserver(es=>{inView=es[0].isIntersecting;ask()},{rootMargin:'0px'}).observe($('#works'));
    else inView=true;
    addEventListener('scroll',ask,{passive:true});
    addEventListener('resize',ask);
  }

  /* ---------- AI Lab ---------- */
  let cur=0;
  const seg=$('#seg');
  seg.innerHTML=AI.map((w,i)=>`<button type="button" role="tab" aria-selected="${i===0}" data-i="${i}">${w.name}</button>`).join('');
  function render(){
    const w=AI[cur];
    $$('button',seg).forEach((b,i)=>b.setAttribute('aria-selected',String(i===cur)));
    const shot=(src,alt)=>'<img class="lab-shot'+(w.lab.wide?' wide':'')+'" src="'+src+'" width="'+(w.lab.w||780)+'" height="'+(w.lab.h||1688)+'" loading="lazy" decoding="async" draggable="false" alt="'+alt+'">';
    $('#wire').innerHTML=shot(w.lab.before,w.lab.alt+' 이전 버전');
    $('#result').innerHTML=shot(w.lab.after,w.lab.alt+' 완성본');
    $('#lblL').textContent=w.lab.l;
    $('#lblR').textContent=w.lab.r;
    $('#cmp').style.aspectRatio=w.lab.wide?w.lab.w+' / '+w.lab.h:'';
    $('#memo').innerHTML=`
      <div class="sc-meta"><span class="eyebrow">${w.en}</span></div>
      <h3>${w.name}</h3>
      <p>${w.labDesc||w.desc}</p>
      <div class="mcols">
        <div class="me"><h4>내가 맡은 일</h4><ul>${w.me.map(x=>`<li>${x}</li>`).join('')}</ul></div>
        <div><h4>AI가 맡은 일</h4><ul>${w.ai.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      </div>
      ${siteBtn(w)}`;
  }
  seg.addEventListener('click',e=>{
    const b=e.target.closest('button');if(!b)return;
    const changed=cur!==+b.dataset.i;
    cur=+b.dataset.i;render();
    if(changed) setPos(50);
    if(seg.scrollWidth>seg.clientWidth) seg.scrollTo({left:Math.max(0,b.offsetLeft-(seg.clientWidth-b.offsetWidth)/2),behavior:SMOOTH});
  });
  render();

  const cmp=$('#cmp'), hd=$('#handle');
  let pos=50, drag=false;
  const setPos=p=>{pos=Math.max(0,Math.min(100,p));cmp.style.setProperty('--pos',pos+'%');hd.setAttribute('aria-valuenow',String(Math.round(pos)))};
  const fromEvt=e=>{const r=cmp.getBoundingClientRect();setPos((e.clientX-r.left)/r.width*100)};
  cmp.addEventListener('pointerdown',e=>{drag=true;try{cmp.setPointerCapture(e.pointerId)}catch(err){}fromEvt(e)});
  cmp.addEventListener('pointermove',e=>{if(drag)fromEvt(e)});
  ['pointerup','pointercancel'].forEach(t=>cmp.addEventListener(t,()=>{drag=false}));
  hd.addEventListener('keydown',e=>{
    const m={ArrowLeft:pos-5,ArrowRight:pos+5,Home:0,End:100};
    if(e.key in m){setPos(m[e.key]);e.preventDefault()}
  });

  /* ---------- Index (실제 사이트로 이동) ---------- */
  $('#rows').innerHTML=P.map(p=>`
    <a class="row" href="${p.link}" target="_blank" rel="noopener" data-img="${p.img}">
      <span class="no">${String(p.id).padStart(2,'0')}</span>
      <img class="mini" src="${p.img}" loading="lazy" decoding="async" alt="">
      <span class="tt"><b>${p.t}</b><small>${p.role}</small></span>
      <span class="role">${p.role}</span>
      <span class="cat">${CAT[p.g].toUpperCase()}</span>
      <span class="dom">${p.dom}</span>
      <span class="arr" aria-hidden="true">↗</span>
    </a>`).join('');
  const fl=$('#float');
  /* 썸네일을 미리 받아 두어 마우스를 올리는 즉시 보이게 */
  const preload=()=>P.forEach(p=>{const im=new Image();im.decoding='async';im.src=p.img});
  if(matchMedia('(hover:hover) and (pointer:fine)').matches){
    if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){io.disconnect();preload()}},{rootMargin:'800px 0px'});io.observe($('#index'))}
    else addEventListener('load',()=>setTimeout(preload,1500));
  }
  if(matchMedia('(hover:hover) and (pointer:fine)').matches){
    let tx=0,ty=0,cx=0,cy=0,raf=0,act=false;
    const step=()=>{cx+=(tx-cx)*(RM?1:.35);cy+=(ty-cy)*(RM?1:.35);fl.style.left=cx+'px';fl.style.top=cy+'px';raf=(act||Math.abs(tx-cx)>.5)?requestAnimationFrame(step):0};
    addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY},{passive:true});
    $$('.row').forEach(r=>{
      r.addEventListener('mouseenter',e=>{
        if(!fl.classList.contains('on')){cx=tx=e.clientX;cy=ty=e.clientY}
        if(fl.getAttribute('src')!==r.dataset.img) fl.src=r.dataset.img;
        fl.classList.add('on'); act=true; if(!raf) raf=requestAnimationFrame(step);
      });
      r.addEventListener('mouseleave',()=>{fl.classList.remove('on');act=false});
    });
  }
})();
