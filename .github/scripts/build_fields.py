from pathlib import Path
import re,json,sys
root=Path(sys.argv[1]).resolve() if len(sys.argv)>1 else Path(__file__).resolve().parents[2]
base=(root/'index.html').read_text(encoding='utf8')
source=(root/'app.js').read_text(encoding='utf8')
fields={
'corporate':{'label':'기업·교육','en':'CORPORATE & EDUCATION','featured':[2,8,6],'count':4,'title':'데이터 분석 도구를 이해하는 시간','headline':'정보의 흐름을<br><span class="accent">명확하게.</span>','intro':'대본과 디자인을 바탕으로, 설명이 잘 전달되도록 편집한 기업·교육 영상입니다.','caption':'교육 콘텐츠 · 영상 편집 전담','profile':'코스믹블랙 영상편집팀에서 기업·교육 콘텐츠 편집을 전담했습니다. 제공된 대본·스토리보드·PSD를 바탕으로 작가·PD와 소통하며 가독성에 중점을 두었습니다.','experience':'코스믹블랙 영상편집팀 · 10개월','tags':['영상 편집 전담','제공 PSD 활용','현장 촬영 보조'],'default':'light'},
'brand':{'label':'광고·브랜드','en':'PRODUCT & BRAND FILM','featured':[4,3,5],'count':3,'title':'iPhone 15 Pro 제품 영상','headline':'제품의 디테일을<br><span class="accent">장면의 중심으로.</span>','intro':'Cinema 4D와 Octane Renderer로 제작한 세 편의 독립적인 개인 제품 영상입니다.','caption':'개인 단독 작업 · 3D 제품 영상','profile':'기업·교육 영상 편집 실무를 바탕으로, 개인 작업에서 3D 제품 표현을 확장하고 있습니다. Cinema 4D·Octane Renderer와 After Effects·Premiere Pro를 사용합니다.','experience':'개인 작업 · Cinema 4D / Octane Renderer','tags':['개인 단독 작업','3D 제품 영상','Octane Renderer'],'default':'dark'},
'social':{'label':'유튜브·SNS','en':'SHORT FORM & SOCIAL','featured':[5,1,3],'count':3,'title':'제품 티저 · 세로형','headline':'짧은 순간,<br><span class="accent">선명한 인상.</span>','intro':'타이포그래피 예고편부터 짧은 제품 영상까지, 가로·세로 화면에 담은 작업입니다.','caption':'개인 단독 작업 · 세로형 제품 티저','profile':'외주 타이포그래피 예고편과 개인 제품 숏폼을 작업했습니다. 외주 영상은 제공된 디자인·스토리보드로 편집하고, 개인 작업은 3D 제품 영상 제작과 편집을 단독으로 진행했습니다.','experience':'타이포그래피 예고편 · 개인 제품 숏폼','tags':['타이포그래피','제품 숏폼','가로·세로 영상'],'default':'dark'}
}
css='''
.edition-bar .shell{display:flex;align-items:center;justify-content:space-between;gap:18px;min-height:54px}.edition-bar strong{font-size:13px}.edition-bar p{margin:0;font-size:10px;letter-spacing:.14em;color:var(--muted)}.edition-bar .filter-row{display:contents}.edition-bar .filter-result{display:none}.edition-eyebrow{font-size:11px;letter-spacing:.16em;color:var(--muted);margin:0 0 18px}.edition-tags{display:flex;flex-wrap:wrap;gap:8px;margin:25px 0 0;padding:0;list-style:none}.edition-tags li{border:1px solid var(--line);border-radius:4px;font-size:11px;padding:5px 10px;color:var(--muted)}.header-cta{white-space:nowrap}
html[data-portfolio="corporate"]{--accent:#b8d8e9;--accent-ink:#19364b}html[data-portfolio="corporate"][data-theme="light"]{--accent:#285b7b;--accent-ink:#fff;--about:#e9eef0;--bg:#f6f7f6;--surface:#edf1f2;--raised:#e2eaed}.edition-corporate .hero{padding-block:64px}.edition-corporate .hero-main{aspect-ratio:16/10}.edition-corporate .hero-strip button{aspect-ratio:2.35}
html[data-portfolio="brand"]{--accent:#d4c9f1;--accent-ink:#302640}html[data-portfolio="brand"][data-theme="light"]{--accent:#61467b;--accent-ink:#fff}.edition-brand .hero{grid-template-columns:.9fr 1.2fr;padding-block:76px}.edition-brand .hero-main{aspect-ratio:16/10}.edition-brand .hero-strip button{aspect-ratio:2.65}.edition-brand .hero-copy h1{font-size:clamp(36px,4vw,62px)}
html[data-portfolio="social"]{--accent:#ffd2b4;--accent-ink:#402b22}html[data-portfolio="social"][data-theme="light"]{--accent:#94451f;--accent-ink:#fff}.edition-social .hero-visual{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,.85fr);align-items:center;gap:18px}.edition-social .hero-main{aspect-ratio:9/16;max-height:590px}.edition-social .hero-image-caption{padding:15px;display:block}.edition-social .film-watch{display:none}.edition-social .hero-strip{display:grid;grid-template-columns:1fr;gap:18px;margin:0}.edition-social .hero-strip button{aspect-ratio:1.15}.edition-social .hero-strip button>span{font-size:11px}.edition-social .hero-copy h1{font-size:clamp(38px,4.3vw,64px)}
@media(max-width:760px){.edition-bar .shell{min-height:48px;gap:10px}.edition-bar strong{font-size:12px}.edition-bar p{font-size:8px;letter-spacing:.05em}.edition-corporate .hero,.edition-brand .hero{grid-template-columns:1fr;padding-block:34px;gap:30px}.edition-brand .hero-copy h1,.edition-social .hero-copy h1{font-size:clamp(33px,8.3vw,52px)}.edition-eyebrow{font-size:9px;margin-bottom:14px;letter-spacing:.1em}.edition-tags{margin-top:20px;gap:6px}.edition-tags li{font-size:10px;padding:4px 8px}.edition-social .hero-visual{gap:12px}.edition-social .hero-main{max-height:470px}.edition-social .hero-strip{gap:12px}.edition-social .hero-main .hero-image-caption #hero-film-title{font-size:13px}.edition-social .hero-main .film-caption-sub{font-size:10px}.edition-social .hero-strip button>span{font-size:10px;padding:9px}.edition-social .hero-image-caption{padding:11px}}
'''
for edition,cfg in fields.items():
 page=base.replace('<html lang="ko">',f'<html lang="ko" data-portfolio="{edition}">').replace('<body>',f'<body class="edition-{edition}">')
 page=re.sub(r'<title>.*?</title>',f'<title>박민서 | {cfg["label"]} 포트폴리오 — PARK FRAME</title>',page)
 page=re.sub(r'(<meta name="description" content=")[^"]*(">)',lambda m:m[1]+cfg['intro']+m[2],page)
 page=page.replace('href="style.css"','href="../style.css"').replace('src="assets/','src="../assets/').replace('href="assets/','href="../assets/')
 page=page.replace('<script src="app.js" defer></script>','').replace('</head>','<style>'+css+'</style></head>')
 page=page.replace("(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark')",json.dumps(cfg['default']))
 start=page.index('    <div class="audience-selector"');end=page.index('    <section class="hero ',start)
 page=page[:start]+f'<div class="audience-selector edition-bar"><div class="shell"><div class="filter-row"><strong>{cfg["label"]} 포트폴리오</strong><p>{cfg["en"]}</p><span class="filter-result" id="filter-result" aria-live="polite" hidden></span></div></div></div>\n'+page[end:]
 page=page.replace('<p class="creator-name">',f'<p class="edition-eyebrow">{cfg["en"]}</p><p class="creator-name">')
 page=re.sub(r'(<h1 id="hero-title">).*?(</h1>)',lambda m:m[1]+cfg['headline']+m[2],page,flags=re.S)
 for cls,key in [('hero-description','intro'),('profile-introduction','profile'),('experience-label','experience')]:page=re.sub('(<p class="'+cls+'">).*?(</p>)',lambda m:m[1]+cfg[key]+m[2],page)
 page=page.replace('작품 둘러보기 <span',cfg['label']+' 작품 보기 <span')
 page=page.replace('</a>\n      </div>\n      <div class="hero-visual">','</a><ul class="edition-tags">'+''.join('<li>'+s+'</li>' for s in cfg['tags'])+'</ul>\n      </div>\n      <div class="hero-visual">',1)
 page=page.replace('영상 편집자 · PARK FRAME</span>','영상 편집자 · '+cfg['label']+'</span>')
 page=page.replace('data-work="6" aria-label="현장에서 만나는 안전 영상 열기"',f'data-work="{cfg["featured"][0]}" aria-label="{cfg["title"]} 영상 열기"',1)
 page=page.replace('src="../assets/work-6.jpg" alt="현장에서 만나는 안전 영상의 대표 장면"',f'src="../assets/work-{cfg["featured"][0]}.jpg" alt="{cfg["title"]} 영상의 대표 장면"',1)
 page=page.replace('id="hero-film-title">현장에서 만나는 안전','id="hero-film-title">'+cfg['title'],1).replace('id="hero-film-subtitle">촬영 보조 · 단독 편집','id="hero-film-subtitle">'+cfg['caption'],1)
 page=page.replace('작품<span class="heading-count">08</span>','작품<span class="heading-count">'+str(cfg['count']).zfill(2)+'</span>',1)
 js=source.replace("'use strict';","'use strict';\nconst edition="+json.dumps(edition)+";",1)
 js=js.replace('grid.innerHTML=works.map(',"grid.innerHTML=works.filter(work=>work.categories.includes(edition)).map(",1)
 js=js.replace("let selectedCategory='all'","let selectedCategory=edition",1).replace('function setFilter(category){','function setFilter(category){category=edition;',1).replace("setFilter('all');","setFilter(edition);",1)
 js=js.replace('if(!work)return;currentId=id;','if(!work||!work.categories.includes(edition))return;currentId=id;',1)
 js=js.replace('function workImage(id){','Object.assign(portfolioViews[edition],'+json.dumps({k:cfg[k] for k in ['headline','intro','caption','featured']},ensure_ascii=False)+');\nfunction workImage(id){',1)
 js=js.replace('`assets/work-','`../assets/work-').replace('src="assets/work-','src="../assets/work-').replace('`media/${id}/index.m3u8`','`../media/${id}/index.m3u8`')
 js=js.replace('work.categories.map(cat=>`<span>${categories[cat]}</span>`)','[edition].map(cat=>`<span>${categories[cat]}</span>`)')
 js=js.replace("(systemTheme.matches?'light':'dark')","("+json.dumps(cfg['default'])+")")
 assert '<script src="app.js"' not in page and 'grid.innerHTML=works.filter' in js and '../media/${id}' in js
 page=page.replace('</body>','<script>\n'+js+'\n</script></body>')
 dest=root/edition;dest.mkdir(exist_ok=True);(dest/'index.html').write_text(page,encoding='utf8')
 print(edition,cfg['count'],'works')
