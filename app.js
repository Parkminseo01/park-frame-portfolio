'use strict';
const categories={corporate:'기업·교육',brand:'광고·브랜드',social:'유튜브·SNS'};
const works=[
 {id:6,title:'현장에서 만나는 안전',subtitle:'포스코이앤씨 · 안전 부동산 콘셉 영상',categories:['corporate'],duration:'06:50',format:'가로형 · 3840 × 2160',summary:'대화와 현장 방문, 체험 장면으로 안전 활동을 소개하는 기업 영상.',description:"포스코이앤씨의 건설 현장 안전 활동을 소개하는 기업 콘텐츠입니다. 코스믹블랙 재직 당시 현장 촬영을 보조하고, 기존 기획과 제공된 PSD 디자인을 바탕으로 영상 편집을 단독으로 담당했습니다."},
 {id:4,title:'iPhone 15 Pro 제품 영상',subtitle:'제품 디테일과 타이포그래피',categories:['brand'],duration:'00:55',format:'가로형 · 1920 × 1080',summary:'어두운 배경과 금속성 질감, 다양한 제품 각도로 구성한 광고 형식의 영상.',description:"iPhone 15 Pro의 형태와 표면 질감을 시각화한 개인 3D 제품 필름입니다. Cinema 4D·Octane Renderer로 제품 장면을 제작하고, After Effects·Premiere Pro로 후반 작업과 편집을 단독으로 진행했습니다."},
 {id:1,title:'해상풍력, 타이포로 만나다',subtitle:'IU-GJ · 해상풍력발전기 샘플',categories:['social'],duration:'00:43',format:'가로형 · 1920 × 1080',summary:'큰 한글 타이포와 이미지, 해시태그를 활용한 SNS형 샘플 영상.',description:"해상풍력 콘텐츠를 예고편 형식으로 전달하는 외주 프로젝트입니다. 제공된 디자인과 스토리보드를 바탕으로 타이포그래피와 이미지 전환을 활용한 영상 편집을 담당했습니다."},
 {id:7,title:'프로젝트 위기극복 사례',subtitle:'포스코이앤씨 · 방글라데시 마타바리 프로젝트',categories:['corporate'],duration:'05:50',format:'가로형 · 1920 × 1080',summary:'자재 유실 위기부터 대응과 공사 성과까지, 문제 해결 과정을 소개하는 사례 영상.',description:"방글라데시 마타바리 프로젝트의 위기 상황과 대응 과정을 전달하는 기업 사례 콘텐츠입니다. 제공된 대본·스토리보드·PSD 디자인에 기반해 영상 편집을 전담했습니다."},
 {id:2,title:'데이터 분석 도구를 이해하는 시간',subtitle:'자우미디어 · 알쏭달쏭 데이터 분석 도구, 모두 담았어!',categories:['corporate'],duration:'08:27',format:'가로형 · 1920 × 1080',summary:'강사 화면과 개념 그래픽으로 데이터베이스의 특징을 설명하는 교육 영상.',description:"강사의 설명과 개념 그래픽으로 데이터 분석 도구를 소개하는 교육 콘텐츠입니다. 제공된 대본·스토리보드·PSD 디자인을 바탕으로 영상 편집을 전담했습니다."},
 {id:8,title:'알폼의 구조와 시공 과정',subtitle:'포스코이앤씨 · 마인드셋 알폼',categories:['corporate'],duration:'13:26',format:'가로형 · 1920 × 1080',summary:'주요 부재부터 설치·마감·해체까지, 공정을 도식으로 풀어낸 기술 교육 영상.',description:"알폼의 주요 부재와 시공 과정을 설명하는 기술 교육 콘텐츠입니다. 제공된 대본·스토리보드·PSD 디자인을 바탕으로 공정 설명을 영상으로 편집했습니다."},
 {id:3,title:'제품 클로즈업 · 17초',subtitle:'가로형 숏폼',categories:['brand','social'],duration:'00:17',format:'가로형 · 1920 × 1080',summary:'제품 실루엣과 디테일, 짧은 문구로 구성한 17초 제품 영상.',description:"제품의 실루엣과 디테일을 17초 안에 담은 개인 3D 제품 숏폼입니다. 독립적으로 제작한 프로젝트로, 3D 장면 제작부터 후반 편집까지 단독으로 진행했습니다."},
 {id:5,title:'제품 티저 · 세로형',subtitle:'8초 티저',categories:['brand','social'],duration:'00:08',format:'세로형 · 1080 × 1920',portrait:true,summary:'제품 디테일과 간결한 문구를 담은 짧은 세로형 티저.',description:"제품의 디테일과 간결한 타이포그래피로 구성한 8초 분량의 개인 3D 제품 티저입니다. 세로형 화면을 전제로 제작한 독립 프로젝트이며, 3D 제작과 영상 편집을 단독으로 담당했습니다."}
];
works.forEach(work=>{
 work.tools=['Premiere Pro','After Effects'];
 work.production=null;work.role=null;work.collaboration=null;work.sources=null;
});
Object.assign(works.find(work=>work.id===6),{
 production:'포스코이앤씨 의뢰 · 코스믹블랙 제작',
 role:'공사현장 촬영 보조 · 영상 편집 단독 담당',
 collaboration:'기존 기획을 바탕으로 촬영 현장에서 PD·작가와 편집 방향 협의',
 sources:'제공받은 PSD 디자인 활용'
});
// Confirmed by the portfolio owner on 2026-10-20.
[8,7,2].forEach(id=>Object.assign(works.find(work=>work.id===id),{
 production:'코스믹블랙 재직 중 진행한 수주 작업',
 role:'영상 편집 전담',
 sources:'제공받은 대본 · 스토리보드 · PSD 디자인 활용'
}));
[4,3,5].forEach(id=>Object.assign(works.find(work=>work.id===id),{
 production:'독립 개인 프로젝트',
 role:'3D 제품 영상 제작 · 영상 편집',
 collaboration:'개인 단독 작업',
 tools:['Premiere Pro','After Effects','Cinema 4D','Octane Renderer']
}));
Object.assign(works.find(work=>work.id===1),{
 production:'해상풍력 콘텐츠 예고편 · 외주 작업',
 role:'제공된 디자인·스토리보드를 바탕으로 영상 편집',
 sources:'제공받은 디자인 · 스토리보드 활용',
 description:"해상풍력 콘텐츠를 예고편 형식으로 전달하는 외주 프로젝트입니다. 제공된 디자인과 스토리보드를 바탕으로 타이포그래피와 이미지 전환을 활용한 영상 편집을 담당했습니다."
});
// Portfolio descriptions reflect owner-confirmed responsibilities; no performance claims.
const projectCopy={
 "6": {
  "description": "포스코이앤씨의 건설 현장 안전 활동을 소개하는 기업 콘텐츠입니다. 코스믹블랙 재직 당시 현장 촬영을 보조하고, 기존 기획과 제공된 PSD 디자인을 바탕으로 영상 편집을 단독으로 담당했습니다.",
  "role": "현장 촬영 보조 · 영상 편집 전담",
  "collaboration": "촬영 현장에서 PD·작가와 편집 방향 협의",
  "process": "현장 촬영 보조와 편집을 연계하며, 기획 의도가 화면에 일관되게 전달되도록 작업했습니다."
 },
 "2": {
  "description": "강사의 설명과 개념 그래픽으로 데이터 분석 도구를 소개하는 교육 콘텐츠입니다. 제공된 대본·스토리보드·PSD 디자인을 바탕으로 영상 편집을 전담했습니다.",
  "role": "제공 스토리보드·PSD 기반 영상 편집 전담",
  "collaboration": "스토리보드 작가와 편집 내용 조율",
  "process": "설명 내용을 따라가기 쉽도록 자막과 그래픽의 가독성을 우선했습니다. 작가와 소통하며 정해진 납기 안에서 편집을 진행했습니다."
 },
 "7": {
  "description": "방글라데시 마타바리 프로젝트의 위기 상황과 대응 과정을 전달하는 기업 사례 콘텐츠입니다. 제공된 대본·스토리보드·PSD 디자인에 기반해 영상 편집을 전담했습니다.",
  "role": "제공 스토리보드·PSD 기반 영상 편집 전담",
  "collaboration": "스토리보드 작가와 편집 내용 조율",
  "process": "위기 상황과 대응 내용의 흐름을 이해하기 쉽게 전달하는 데 중점을 두었습니다. 작가와 편집 내용을 조율하며 가독성과 납기를 함께 고려했습니다."
 },
 "8": {
  "description": "알폼의 주요 부재와 시공 과정을 설명하는 기술 교육 콘텐츠입니다. 제공된 대본·스토리보드·PSD 디자인을 바탕으로 공정 설명을 영상으로 편집했습니다.",
  "role": "제공 스토리보드·PSD 기반 영상 편집 전담",
  "collaboration": "스토리보드 작가와 편집 내용 조율",
  "process": "부재와 공정에 관한 설명을 읽고 따라가기 쉽도록 가독성에 중점을 두었습니다. 작가와 소통하며 기술 교육 콘텐츠의 편집을 진행했습니다."
 },
 "4": {
  "description": "iPhone 15 Pro의 형태와 표면 질감을 시각화한 개인 3D 제품 필름입니다. Cinema 4D·Octane Renderer로 제품 장면을 제작하고, After Effects·Premiere Pro로 후반 작업과 편집을 단독으로 진행했습니다.",
  "role": "3D 제품 장면 제작 · 모션그래픽 · 영상 편집",
  "production": "개인 창작 · 3D 제품 필름",
  "process": "재질과 조명, 카메라 연출로 제품의 디테일을 표현하고 타이포그래피와 편집으로 장면을 연결했습니다."
 },
 "3": {
  "description": "제품의 실루엣과 디테일을 17초 안에 담은 개인 3D 제품 숏폼입니다. 독립적으로 제작한 프로젝트로, 3D 장면 제작부터 후반 편집까지 단독으로 진행했습니다.",
  "role": "3D 제품 장면 제작 · 모션그래픽 · 영상 편집",
  "production": "개인 창작 · 가로형 제품 숏폼",
  "process": "후면·카메라·측면 등 제품의 특징을 짧은 컷으로 구성하고, 제품명과 타이포그래피로 마무리했습니다."
 },
 "5": {
  "description": "제품의 디테일과 간결한 타이포그래피로 구성한 8초 분량의 개인 3D 제품 티저입니다. 세로형 화면을 전제로 제작한 독립 프로젝트이며, 3D 제작과 영상 편집을 단독으로 담당했습니다.",
  "role": "3D 제품 장면 제작 · 모션그래픽 · 영상 편집",
  "production": "개인 창작 · 세로형 제품 티저",
  "process": "짧은 러닝타임 안에서 제품 디테일과 제품명·로고가 순차적으로 드러나도록 세로 화면을 구성했습니다."
 },
 "1": {
  "description": "해상풍력 콘텐츠를 예고편 형식으로 전달하는 외주 프로젝트입니다. 제공된 디자인과 스토리보드를 바탕으로 타이포그래피와 이미지 전환을 활용한 영상 편집을 담당했습니다.",
  "role": "제공 디자인·스토리보드 기반 영상 편집",
  "process": "강조 타이포그래피와 이미지, 해시태그를 연결해 짧은 예고편의 메시지와 화면 리듬을 구성했습니다."
 }
};
works.forEach(work=>Object.assign(work,projectCopy[work.id]));
const scenePoints={
 6:[{time:50,label:'대화 장면'},{time:110,label:'현장 안전표지'},{time:150,label:'안전 자료 소개'}],
 2:[{time:90,label:'강사와 설명 그래픽'},{time:160,label:'유형별 키워드'},{time:200,label:'개념 타이포그래피'}],
 7:[{time:60,label:'위기 상황 설명'},{time:120,label:'대응 방안 도식'},{time:180,label:'단계별 대응 과정'}],
 8:[{time:250,label:'장점 정리'},{time:380,label:'부재 도면 설명'},{time:450,label:'슬래브 패널 설명'}]
};
let pendingScene=null;
function sceneTime(t){return String(Math.floor(t/60)).padStart(2,'0')+':'+String(t%60).padStart(2,'0');}
function renderScenes(id){
 const box=document.querySelector('#scene-shortcuts');const points=scenePoints[id]||[];
 box.hidden=!points.length;
 box.innerHTML=points.length?'<p>대표 장면 <span>선택한 시점으로 이동</span></p><div>'+[{time:0,label:'처음부터'},...points].map(point=>`<button type="button" data-scene="${point.time}"><span>${sceneTime(point.time)}</span>${point.label}</button>`).join('')+'</div>':'';
}
function seekScene(time){
 if(!currentId||![0,...(scenePoints[currentId]||[]).map(p=>p.time)].includes(time))return;
 if(player.readyState<1){pendingScene={id:currentId,time};return;}
 pendingScene=null;player.pause();player.currentTime=Number.isFinite(player.duration)?Math.min(time,Math.max(0,player.duration-.1)):time;
 status.textContent=sceneTime(time)+' 위치로 이동했습니다. 재생 버튼으로 시청하세요.';
}
function projectDetails(work){
 const rows=[['제작 구분',work.production],['담당 범위',work.role],['협업 방식',work.collaboration],['제공 자료',work.sources],['표현·편집 방향',work.process],['사용 툴',work.tools.join(' · ')]];
 return rows.filter(([,value])=>value).map(([label,value])=>`<div class="project-credit"><dt>${label}</dt><dd>${value}</dd></div>`).join('');
}
const grid=document.querySelector('#work-grid');
grid.innerHTML=works.map((work,index)=>`<article class="work-card" data-work-id="${work.id}"><button class="card-button open-work" data-work="${work.id}" aria-label="${work.title} 작품 열기"><div class="card-image ${work.portrait?'portrait':''}"><img src="assets/work-${work.id}.jpg" alt="${work.title} 영상의 대표 장면" loading="lazy"><span class="card-watch" aria-hidden="true">▶ 영상 보기</span><span class="card-duration">${work.duration}</span></div><div class="card-topline"><div class="card-tags">${work.categories.map(cat=>`<span>${categories[cat]}</span>`).join('')}</div></div><p class="card-project-label">${work.subtitle}</p><p class="card-credit">${[4,3,5].includes(work.id)?"개인 작업 · 3D 제품 영상":work.id===6?"회사 작업 · 촬영 보조·단독 편집":work.id===1?"외주 작업 · 영상 편집":"회사 작업 · 영상 편집 전담"}</p><div class="card-title-row"><h3>${work.title}</h3><span class="card-arrow" aria-hidden="true">↗</span></div></button></article>`).join('');
const portfolioViews={
 all:{order:[6,4,2,7,8,1,3,5],featured:[6,4,2],headline:'정보는 명확하게.<br>장면은 <span class="accent">인상 깊게.</span>',intro:'기업·교육 영상 편집 실무 경험을 바탕으로, 3D 제품 영상까지 제작합니다.',caption:'촬영 보조 · 단독 편집',heading:'작품'},
 corporate:{order:[2,8,7,6],featured:[2,8,7],headline:'복잡한 정보도<br><span class="accent">이해하기 쉽게.</span>',intro:'제공된 대본·디자인을 바탕으로 편집한 기업·교육 영상',caption:'교육 콘텐츠 · 영상 편집 전담',heading:'기업·교육 작품'},
 brand:{order:[4,3,5],featured:[4,3,5],headline:'제품의 디테일을<br><span class="accent">인상 깊게.</span>',intro:'Cinema 4D · Octane Renderer를 활용한 개인 제품 영상',caption:'개인 작업 · 3D 제품 영상',heading:'광고·브랜드 작품'},
 social:{order:[1,3,5],featured:[1,3,5],headline:'짧은 장면에<br><span class="accent">분명한 인상을.</span>',intro:'타이포그래피 예고편과 짧은 제품 영상',caption:'외주 예고편 · 영상 편집',heading:'유튜브·SNS 작품'}
};
function workImage(id){return `assets/work-${id}.jpg`;}
function updatePortfolioView(){
 const view=portfolioViews[selectedCategory];
 document.querySelector('#hero-title').innerHTML=view.headline;
 document.querySelector('.hero-description').textContent=view.intro;
 const main=works.find(work=>work.id===view.featured[0]);const mainButton=document.querySelector('.hero-main');
 mainButton.dataset.work=String(main.id);mainButton.setAttribute('aria-label',main.title+' 작품 열기');
 document.querySelector('.hero-main img').src=workImage(main.id);document.querySelector('.hero-main img').alt=main.title+' 영상의 대표 장면';
 document.querySelector('#hero-film-title').textContent=main.title;document.querySelector('#hero-film-subtitle').textContent=view.caption;
 document.querySelectorAll('.hero-strip button').forEach((button,index)=>{
  const work=works.find(item=>item.id===view.featured[index+1]);button.dataset.work=String(work.id);button.setAttribute('aria-label',work.title+' 작품 열기');
  const image=button.querySelector('img');image.src=workImage(work.id);image.alt=work.title+' 영상의 대표 장면';button.querySelector('span').textContent=work.title+' ↗';
 });
 const list=visibleWorks();document.querySelector('#works-title').innerHTML=view.heading+'<span class="heading-count">'+String(list.length).padStart(2,'0')+'</span>';
 if(typeof grid.appendChild==='function'){
  const cards=Array.from(document.querySelectorAll('.work-card'));
  [...list,...works.filter(work=>!list.includes(work))].forEach(work=>{const card=cards.find(item=>Number(item.dataset.workId)===work.id);if(card)grid.appendChild(card);});
 }
}
let selectedCategory='all';let currentId=null;let opener=null;
const dialog=document.querySelector('#work-dialog');const player=document.querySelector('#player');const status=document.querySelector('#video-status');
function visibleWorks(){return portfolioViews[selectedCategory].order.map(id=>works.find(work=>work.id===id));}
function setFilter(category){if(!portfolioViews[category])return;selectedCategory=category;document.querySelectorAll('.filter').forEach(button=>{const active=button.dataset.category===category;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});const visible=visibleWorks();document.querySelectorAll('.work-card').forEach(card=>{card.hidden=!visible.some(work=>work.id===Number(card.dataset.workId));});document.querySelector('#filter-result').textContent=`${category==='all'?'전체':categories[category]} · ${visible.length}개 작품`;updatePortfolioView();}
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>setFilter(button.dataset.category)));
function openWork(id){const work=works.find(item=>item.id===id);if(!work)return;currentId=id;pendingScene=null;renderScenes(id);player.pause();player.classList.toggle('portrait',!!work.portrait);player.poster=`assets/work-${id}.jpg`;status.textContent='' ;prepareStream(id);player.setAttribute('aria-label',work.title+' 전체 영상');document.querySelector('#dialog-title').textContent=work.title;document.querySelector('#dialog-subtitle').textContent=work.subtitle;document.querySelector('#dialog-categories').textContent=work.categories.map(cat=>categories[cat]).join(' / ');document.querySelector('#dialog-description').textContent=work.description;document.querySelector('#project-info').innerHTML=projectDetails(work);const list=visibleWorks();const index=list.findIndex(item=>item.id===id);document.querySelector('#previous-work').disabled=index<=0;document.querySelector('#next-work').disabled=index<0||index===list.length-1;document.querySelector('#dialog-position').textContent=index>=0?`${String(index+1).padStart(2,'0')} / ${String(list.length).padStart(2,'0')}`:'';if(!dialog.open){opener=document.activeElement;dialog.showModal();document.body.classList.add('dialog-open');}dialog.scrollTop=0;}
document.querySelectorAll('.open-work').forEach(button=>button.addEventListener('click',()=>openWork(Number(button.dataset.work))));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{if(activeStream){activeStream.destroy();activeStream=null;}pendingScene=null;player.pause();player.removeAttribute('src');player.load();document.body.classList.remove('dialog-open');if(opener&&opener.isConnected)opener.focus();});
function adjacent(delta){const list=visibleWorks();const index=list.findIndex(work=>work.id===currentId);if(list[index+delta])openWork(list[index+delta].id);}
document.querySelector('#previous-work').addEventListener('click',()=>adjacent(-1));document.querySelector('#next-work').addEventListener('click',()=>adjacent(1));
player.addEventListener('error',()=>{if(!player.getAttribute('src'))return;status.textContent='영상을 불러오지 못했습니다. 작품을 닫고 다시 열어 주세요. 문제가 계속되면 아래 이메일로 문의해 주세요.';});

// Motion enhances the page; content and navigation do not depend on it.
(()=>{
 if(!document.documentElement||typeof window.matchMedia!=='function')return;
 const html=document.documentElement;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const finePointer=window.matchMedia('(hover: hover) and (pointer: fine)');
 const motionOff=()=>reduced.matches;
 function updateMotion(){html.dataset.motion=reduced.matches?'off':'on';}
 reduced.addEventListener?.('change',updateMotion);updateMotion();
 const themeButton=document.querySelector('#theme-toggle');
 const systemTheme=window.matchMedia('(prefers-color-scheme: light)');
 let savedTheme=null;
 try{savedTheme=localStorage.getItem('park-frame-theme');}catch{}
 function applyTheme(theme){
  const light=theme==='light';html.dataset.theme=light?'light':'dark';html.style.colorScheme=html.dataset.theme;
  themeButton.setAttribute('aria-pressed',String(light));
  themeButton.setAttribute('aria-label',light?'다크 모드로 전환':'라이트 모드로 전환');
  themeButton.querySelector('.theme-label').textContent=light?'다크 모드':'라이트 모드';
  themeButton.querySelector('.theme-icon').textContent=light?'☾':'☀';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content',light?'#f4f3ee':'#10191e');
 }
 applyTheme(savedTheme==='light'||savedTheme==='dark'?savedTheme:(systemTheme.matches?'light':'dark'));
 themeButton.addEventListener('click',()=>{savedTheme=html.dataset.theme==='light'?'dark':'light';applyTheme(savedTheme);try{localStorage.setItem('park-frame-theme',savedTheme);}catch{}});
 systemTheme.addEventListener?.('change',()=>{if(savedTheme!=='light'&&savedTheme!=='dark')applyTheme(systemTheme.matches?'light':'dark');});
 if('IntersectionObserver' in window){
  const navObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.header nav a').forEach(link=>{if(link.getAttribute('href')==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -60% 0px',threshold:0});
  document.querySelectorAll('#works,#about,#journey,#contact').forEach(section=>navObserver.observe(section));
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.08,rootMargin:'0px 0px 35px 0px'});
  document.querySelectorAll('.section-heading,.filter-row,.work-card,.about-layout,.timeline-column,.credentials,.contact-layout,.footer').forEach((element,index)=>{element.style.setProperty('--reveal-delay',element.classList.contains('work-card')?`${index%2*75}ms`:'0ms');element.classList.add('reveal-ready');observer.observe(element);});
  document.addEventListener('focusin',event=>{event.target.closest?.('.reveal-ready')?.classList.add('is-visible');});
 }
 let scrollFrame=0;
 function updateScroll(){
  scrollFrame=0;const extent=html.scrollHeight-window.innerHeight;
  html.style.setProperty('--scroll-progress',String(extent>0?Math.min(1,Math.max(0,window.scrollY/extent)):0));
  html.classList.toggle('page-scrolled',window.scrollY>35);
  const timeline=document.querySelector('.career-timeline');
  if(typeof timeline?.getBoundingClientRect==='function'){
   const rect=timeline.getBoundingClientRect();const progress=Math.min(1,Math.max(0,(window.innerHeight*.64-rect.top)/Math.max(1,rect.height)));
   timeline.style.setProperty('--journey-progress',String(progress));
   timeline.querySelectorAll('li').forEach(item=>item.classList.toggle('is-past',item.getBoundingClientRect().top<window.innerHeight*.64));
  }
 }
 function scheduleScroll(){if(!scrollFrame)scrollFrame=requestAnimationFrame(updateScroll);}
 window.addEventListener('scroll',scheduleScroll,{passive:true});window.addEventListener('resize',scheduleScroll,{passive:true});updateScroll();
 const hero=document.querySelector('.hero-main');let pointerFrame=0;
 hero.addEventListener('pointermove',event=>{
  if(motionOff()||!finePointer.matches||pointerFrame)return;
  pointerFrame=requestAnimationFrame(()=>{pointerFrame=0;const box=hero.getBoundingClientRect();hero.style.setProperty('--tilt-y',`${((event.clientX-box.left)/box.width-.5)*3}deg`);hero.style.setProperty('--tilt-x',`${((event.clientY-box.top)/box.height-.5)*-3}deg`);});
 });
 hero.addEventListener('pointerleave',()=>{if(pointerFrame)cancelAnimationFrame(pointerFrame);pointerFrame=0;hero.style.setProperty('--tilt-x','0deg');hero.style.setProperty('--tilt-y','0deg');});
 document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  if(motionOff())return;
  document.querySelectorAll('.work-card:not([hidden])').forEach((card,index)=>{
   card.classList.add('is-visible');
   if(typeof card.animate==='function')card.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:360,delay:Math.min(index,3)*45,easing:'cubic-bezier(.2,.7,.2,1)',fill:'backwards'});
  });scheduleScroll();
 }));
 document.addEventListener('visibilitychange',()=>{html.dataset.tabHidden=String(document.hidden);});
})();

const copyEmailButton=document.querySelector('#copy-email');
copyEmailButton.addEventListener('click',async()=>{
 const email='pms04270@naver.com';const feedback=document.querySelector('#contact-status');
 try{if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');await navigator.clipboard.writeText(email);feedback.textContent='이메일 주소를 복사했습니다.';}
 catch{const link=document.querySelector('#contact-email');const range=document.createRange();range.selectNodeContents(link.firstChild);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);feedback.textContent='이메일 주소를 선택했습니다. Ctrl+C 또는 기기의 복사 기능을 이용해 주세요.';}
});

setFilter('all');

// Use one measured offset, rather than compounding CSS scroll offsets.
(()=>{
 if(typeof window.addEventListener!=='function'||typeof document.getElementById!=='function')return;
 function navigateSection(hash,smooth){
  const target=document.getElementById(hash.slice(1));if(!target)return;
  const header=document.querySelector('.header');const selector=document.querySelector('.audience-selector');
  const pinned=getComputedStyle(header).position==='sticky'?header.getBoundingClientRect().height:0;
  const offset=pinned+selector.getBoundingClientRect().height+20;
  const top=hash==='#top'?0:Math.max(0,target.getBoundingClientRect().top+window.scrollY-offset);
  window.scrollTo({top,behavior:smooth&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches?'smooth':'instant'});
  target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
 }
 document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
  const hash=link.getAttribute('href');if(!hash||hash==='#')return;
  if(!document.getElementById(hash.slice(1)))return;
  event.preventDefault();try{history.replaceState(null,'',hash);}catch{}navigateSection(hash,true);
 }));
 window.addEventListener('load',()=>{if(location.hash)requestAnimationFrame(()=>navigateSection(location.hash,false));});
})();

 document.querySelector('#scene-shortcuts').addEventListener('click',event=>{const button=event.target.closest?.('button[data-scene]');if(button)seekScene(Number(button.dataset.scene));});
 player.addEventListener('loadedmetadata',()=>{const pending=pendingScene;pendingScene=null;if(pending&&pending.id===currentId)seekScene(pending.time);});

let activeStream=null;
function prepareStream(id){
 if(activeStream){activeStream.destroy();activeStream=null;}
 player.removeAttribute('src');player.load();
 const source=`media/${id}/index.m3u8`;
 if(player.canPlayType('application/vnd.apple.mpegurl')){player.src=source;player.load();}
 else if(window.Hls&&Hls.isSupported()){
  activeStream=new Hls({maxBufferLength:30});activeStream.loadSource(source);activeStream.attachMedia(player);
  activeStream.on(Hls.Events.ERROR,(_,data)=>{if(data.fatal)status.textContent='영상 연결을 확인해 주세요. 작품을 닫고 다시 열어 재시도할 수 있습니다.';});
 }else{status.textContent='현재 브라우저에서 영상 재생을 지원하지 않습니다. 최신 Chrome 또는 Safari에서 열어 주세요.';}
}
