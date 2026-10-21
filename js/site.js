const P=f=>encodeURI('images/'+( /^(projects|achievements|certificates)\//.test(f)?'optimized/':'')+f);
const ach=[["تكريم","الطالب المثالي لعامين","حصلت على لقب الطالب المثالي لعامين متتاليين، تقديرًا للتميز في المشاركة والالتزام والأنشطة الطلابية.","الفوز بمسابقة الطالب المثالى.webp"],["مشاركة","استعراض إمكانيات الدولة","شاركت في استعراض إمكانيات أجهزة الدولة في مجابهة الأزمات بحضور الرئيس عبد الفتاح السيسي.","استعراض إمكانيات الدولة المصرية في مجابهة الأزمات.webp"],["إطلاق","تطبيق نادي نوعية","أطلقت تطبيقًا رقميًا يسهّل وصول طلاب التربية النوعية إلى المحتوى والخدمات التعليمية.","تطبيق نادى نوعية.webp"],["حضور","معرض التوظيف السنوي","شاركت في معرض التوظيف السنوي بكلية التربية النوعية للتعرّف على فرص العمل والتواصل مع المؤسسات.","معرض التوظيف.webp"],["مشاركة","برنامج العباقرة","شاركت في برنامج العباقرة مع الروائي عصام يوسف، ضمن تجربة معرفية تعزز روح التحدي والعمل الجماعي.","برنامج العباقرة.webp"]].map(a=>({t:a[0],n:a[1],d:a[2],i:'achievements/'+a[3]}));
const pr=[
["Abdo Mohamed","Portfolio · Branding","موقع شخصي لمدير تصميم ومصمم خطوط عربية في دبي، يعرض أعمال الهوية والخط العربي والتوجيه الفني.","Branding،Arabic Type،Art Direction","https://abdo-mohamed.vercel.app/","abdo-mohamed-portfolio.jpg"],
["تطبيق نادي نوعية","Android · Education","تطبيق تعليمي يجمع المحتوى والخدمات الرقمية لطلاب التربية النوعية.","Android،Education،Students","https://play.google.com/store/apps/details?id=com.naw3ia.club","naw3iaclub app.webp"],
["Bakr Magrabi","Website · Identity","موقع شخصي لعرض الهوية والأعمال وروابط التواصل.","Website،Identity،Portfolio","https://emamharb.github.io/Bakr-Magrabi/","bakrmagrabi.com.webp"],
["AyatShare","Design · Quran","موقع لإنشاء تصميمات بصرية للآيات القرآنية ومشاركتها.","Design،Quran،Visuals","https://ayatshare.vercel.app/","ayatpic.webp"],
["Friday Ice Cream","Store · Frontend","واجهة متجر رقمية لعرض المنتجات بتجربة مرئية مباشرة.","Store،Frontend،Products","https://friday-icecream.vercel.app","friday-icecream.vercel.app.webp"],
["HandSpeak","AI · Accessibility","منصة ويب تركّز على الوصول الرقمي والتواصل التفاعلي.","AI،Accessibility،Web","https://hand-speak-project.vercel.app/","handspeak.net.webp"],
["Prompt","AI · Creative Tools","منصة لأوامر الذكاء الاصطناعي وصناعة المحتوى الرقمي.","AI،Prompts،Creative","https://promptbase-project.vercel.app/","prompt.webp"],
["Print CV","Career · Web App","أداة لإنشاء وتحسين السير الذاتية بشكل سريع ومنظم.","Career،Web App،CV","https://printcv.vercel.app/","printcv.webp"],
["متحف ثلاثي الأبعاد","3D · Virtual Tour","تجربة افتراضية لعرض المحتوى التعليمي داخل مساحة ثلاثية الأبعاد.","3D،Virtual Tour،ArtSteps","https://www.artsteps.com/view/6570c86f0bc8f6bb163d4c6c","musum.webp"],
["مدونة نادي نوعية","Blog · EdTech","محتوى تعليمي وشروحات تقنية للطلاب والمعلمين.","Blog،Education،Tech","https://naw3ia-club.blogspot.com/","blog naw3ia.webp"],
["قناة Emam","YouTube · Learning","شروحات مرئية في التقنية وتكنولوجيا التعليم.","YouTube،Learning،EdTech","https://www.youtube.com/@emam.v1","yotube.webp"],
 ["Gold Emam","Data · Interface","واجهة ويب منظمة لعرض بيانات الذهب ومتابعتها.","Data،Interface،Gold","https://egyptgold.vercel.app/","gold.emam.website.webp"],
 ["Mina Onsy","Photography · Portfolio","موقع للمصور مينا أونسي لعرض أعمال تصوير حفلات الزفاف والفعاليات والبورتريه.","Photography،Weddings،Events","https://mina-onsy.vercel.app/","mina-onsy.webp"]];
const certs=[["تكنولوجيا التعليم","الذكاء الاصطناعي في التعليم","شهادة إتمام المستوى الثاني حول توظيف الذكاء الاصطناعي في التعليم وتطوير التعلّم.","AI in the Classroom Revolutionizing Teaching & Learning (Level 2).webp"],["تصميم تعليمي","تصميم محتوى Storyline 3","دورة في إنشاء المحتوى التعليمي التفاعلي، مقدمة من مركز الكفاءة للتعلم الإلكتروني بوزارة الاتصالات وتكنولوجيا المعلومات.","Articulate Storyline.webp"],["تطوير الويب","تصميم المواقع باستخدام HTML","إتمام دورة HTML لتصميم المواقع، معتمدة من منصة معارف.","html.webp"],["تكنولوجيا التعليم","أنظمة التصحيح الإلكتروني","حضور ندوة عن اختيار نظام تصحيح إلكتروني مناسب للاختبارات الورقية بالمؤسسات التعليمية.","شهادة تدريبية من Remark.webp"],["قواعد المعلومات","قواعد معلومات دار المنظومة","حضور ورشة تدريبية على استخدام قواعد معلومات دار المنظومة وبوابات بنك المعرفة المصري.","شهادة حضور ورشة عمل قواعد معلومات المنظومة.webp"],["الذكاء الاصطناعي","الذكاء الاصطناعي والمهارات الشخصية","ندوة إلكترونية عن توظيف الذكاء الاصطناعي في تطوير المهارات الشخصية.","AI in Soft Skills Development .webp"]];
const videos=[['rbupDC4oYw4','قياس الحرارة والرطوبة | Arduino'],['RN1WC9BxO08','حساس المسافة والإنذار | Arduino'],['U50ohdqNrFw','حساس الحركة والإنذار | Arduino'],['ABvvLnBOjB4','التحكم في الإضاءة بحساس الضوء'],['HrErBQK-0Oo','التحكم في مصباح بزر | Arduino'],['3B56UinLRaI','إدارة فرق العمل باستخدام Trello'],['paC-gSJ2us0','Shinywr'],['ejq75BnuEpE','أشكال سهلة للرسم في Illustrator'],['PZzo-YW1Qdc','إنشاء اختبار وعرض النتائج | Storyline'],['3FG3iKLCzHk','صفحة تسجيل اسم الطالب | Storyline'],['eIGd01CKuKg','إضافة الفيديو وأزرار التحكم | Storyline'],['CDZZxSX67HA','المشروع الخطي والتشعبي | Storyline'],['EdgiDZQEeXk','أساسيات بناء الدروس | Storyline'],['ECxGSS3fIwo','معاملات الارتباط | SPSS'],['YKx2o1fXnIE','الانحراف المعياري | SPSS'],['j44cepMwwBs','مقاييس النزعة المركزية | SPSS'],['rrbYpPyay_8','إدخال بيانات جدول مزدوج | SPSS'],['vQpqs5mLZVw','العمليات الحسابية | SPSS'],['kYdeFwrWHpU','اختيار وتقسيم البيانات | SPSS'],['tXN6baaCcDM','إعادة الترميز | SPSS'],['tAjJC_D6dBI','التحكم في شريط المهام | SPSS'],['b9OcTqiD9hA','شرح تطبيق نادي نوعية بلغة الإشارة']];
const $=s=>document.querySelector(s);
const img=(f,a,w=800,h=600)=>`<img loading="lazy" decoding="async" width="${w}" height="${h}" src="${P(f)}" alt="${a}">`;
$('#achGrid').innerHTML=ach.map(a=>`<article class="card" data-z="${P(a.i)}"><div class="im">${img(a.i,a.n)}</div><div class="bd"><span class="cat">${a.t}</span><h3>${a.n}</h3><p>${a.d}</p></div></article>`).join('');
const firstAchievement=$('#achGrid .card');
if(firstAchievement){firstAchievement.classList.add('is-visible');const firstImage=firstAchievement.querySelector('img');firstImage.loading='eager';firstImage.fetchPriority='high'}
$('#projGrid').innerHTML=pr.map(p=>`<article class="card"><div class="im">${img('projects/'+p[5],p[0],800,500)}</div><div class="bd"><span class="cat">${p[1]}</span><h3>${p[0]}</h3><p>${p[2]}</p><div class="tags">${p[3].split('،').map(t=>`<i>${t}</i>`).join('')}</div><a class="go" href="${p[4]}" target="_blank" rel="noopener">زيارة المشروع</a></div></article>`).join('');
$('#certGrid').innerHTML=certs.map(c=>`<article class="card"><div class="im" data-z="${P('certificates/'+c[3])}">${img('certificates/'+c[3],c[1])}</div><div class="bd"><span class="cat">${c[0]}</span><h3>${c[1]}</h3><p>${c[2]}</p></div></article>`).join('');
const videoMarkup=videos.map(([id,title])=>`<a class="video-card" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener" aria-label="شاهد: ${title}"><div class="video-thumb"><img loading="eager" fetchpriority="low" decoding="async" width="480" height="360" src="images/youtube-thumbnails/${id}.webp" alt=""><span class="video-play" aria-hidden="true">▶</span></div><span class="video-name">${title}</span></a>`).join('');
$('#videoTrack').innerHTML=`<div class="video-group">${videoMarkup}</div><div class="video-group" aria-hidden="true" inert>${videoMarkup}</div>`;
// Reveal content as it enters the viewport, with a static fallback.
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}
 }),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
 document.querySelectorAll('.head,.card,.pillars>div,.tools').forEach(el=>{
  const siblingIndex=[...el.parentElement.children].indexOf(el);
  el.classList.add('reveal');el.style.setProperty('--reveal-delay',`${Math.min(siblingIndex,4)*75}ms`);if(el!==firstAchievement)revealObserver.observe(el);
 });
}
// lightbox
const lb=$('#lb');
document.addEventListener('click',e=>{const z=e.target.closest('[data-z]');if(z){lb.querySelector('img').src=z.dataset.z;lb.classList.add('on');document.body.style.overflow='hidden'}else if(lb.classList.contains('on')){lb.classList.remove('on');document.body.style.overflow=''}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){lb.classList.remove('on');document.body.style.overflow=''}});
// mobile menu
const m=$('#menu'),n=$('#nav');
m.onclick=()=>{const o=n.classList.toggle('open');m.setAttribute('aria-expanded',o);m.setAttribute('aria-label',o?'إغلاق القائمة':'فتح القائمة')};
n.onclick=e=>{if(e.target.tagName==='A'){n.classList.remove('open');m.setAttribute('aria-expanded',false);m.setAttribute('aria-label','فتح القائمة')}};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&n.classList.contains('open')){n.classList.remove('open');m.setAttribute('aria-expanded','false');m.setAttribute('aria-label','فتح القائمة')}});
// Keep missing media visible as a neutral placeholder instead of a blank tile.
document.addEventListener('error',e=>{if(e.target.tagName==='IMG'){e.target.classList.add('image-missing')}},true);
// Discourage casual copying while keeping text selection and normal link use available.
document.querySelector('#copyrightYear').textContent=new Date().getFullYear();
// Let the site owner guide visitors through each section as they scroll.
const narrator=$('#scrollNarrator'),narratorText=$('#scrollNarratorText'),narratorImage=$('#scrollNarratorImage');
if(narrator&&narratorText&&narratorImage&&'IntersectionObserver' in window){
 const projectImage='images/me/portrait_2.jpg';
 const prefersReducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const transitionDuration=prefersReducedMotion?0:380;
 const wait=duration=>new Promise(resolve=>setTimeout(resolve,duration));
 const preloadImage=src=>new Promise(resolve=>{
  const image=new Image();image.onload=()=>resolve(true);image.onerror=()=>resolve(false);image.src=src;
  if(image.complete)resolve(image.naturalWidth>0);
 });
 const animateNarrator=()=>{if(prefersReducedMotion)return;narrator.classList.remove('is-changing');void narrator.offsetWidth;narrator.classList.add('is-changing')};
 const observedSections=new Map();
 let userHasScrolled=false,requestedNarration=null,narrationRevision=0,lastScrollY=window.scrollY,scrollDirection='down';
 const sectionByTrigger=new Map();
 const triggerDirectionByTarget=new Map();
 const triggerTypeByTarget=new Map();
 const sectionCheckpoints=[];
 const checkpointBySection=new Map();
 const getActiveSection=()=>{
  if(scrollDirection==='down'){
   const anchor=window.innerHeight;
   let current=null;
   for(const checkpoint of sectionCheckpoints){
    if(checkpoint.boundary.getBoundingClientRect().top<=anchor)current=checkpoint;
    else break;
   }
   if(!current)return null;
   const headerBottom=document.querySelector('header')?.getBoundingClientRect().bottom||0;
   const lastTargetPassed=current.section.id!=='contact'&&current.lastTarget&&current.lastTarget.getBoundingClientRect().bottom<=headerBottom;
   const ready=current.downTarget.getBoundingClientRect().top<=anchor&&!lastTargetPassed;
   return {section:current.section,type:ready?'show':'boundary'};
  }
  const enteringEdge='bottom';
  const anchor=window.innerHeight*.18;
  const trigger=[...observedSections.keys()].filter(target=>{
   const direction=triggerDirectionByTarget.get(target);
   if(direction&&direction!==scrollDirection)return false;
   if(scrollDirection==='up'&&direction==='up'){
    const checkpoint=checkpointBySection.get(sectionByTrigger.get(target));
    const headerBottom=document.querySelector('header')?.getBoundingClientRect().bottom||0;
    if(checkpoint?.nextBoundary&&checkpoint.nextBoundary.getBoundingClientRect().top<headerBottom)return false;
   }
   return true;
  }).sort((a,b)=>{
  return Math.abs(a.getBoundingClientRect()[enteringEdge]-anchor)-Math.abs(b.getBoundingClientRect()[enteringEdge]-anchor);
  })[0];
  return trigger?{section:sectionByTrigger.get(trigger),type:triggerTypeByTarget.get(trigger)}:null;
 };
 const updateNarration=async()=>{
  const trigger=getActiveSection();
  const active=trigger?.type==='boundary'?null:trigger?.section;
  if(!userHasScrolled||window.scrollY<=0){
   if(requestedNarration==='top')return;
   const previousNarration=requestedNarration;
   requestedNarration='top';const revision=++narrationRevision;
   const narratorWasActive=narrator.classList.contains('is-active');
   narrator.classList.remove('is-active','is-changing','is-avatar-left','is-side-left');
   const previousWasNarrator=previousNarration&&previousNarration!=='top'&&!previousNarration.classList.contains('videos');
   if(narratorWasActive||previousWasNarrator)await wait(transitionDuration);
   if(revision!==narrationRevision)return;
   narratorText.textContent='';
   return;
  }
  if(!active){
   if(requestedNarration&&requestedNarration!=='top'){
    requestedNarration=null;const revision=++narrationRevision;
    const narratorWasActive=narrator.classList.contains('is-active');
    narrator.classList.remove('is-active','is-changing');
    if(narratorWasActive)await wait(transitionDuration);
    if(revision!==narrationRevision)return;
    narratorText.textContent='';
    narrator.classList.remove('is-avatar-left','is-side-left');
   }
   return;
  }
  if(requestedNarration===active)return;
  const previousNarration=requestedNarration;
  requestedNarration=active;const revision=++narrationRevision;
  const isVideo=active.classList.contains('videos');
  const narratorWasActive=narrator.classList.contains('is-active');
  narrator.classList.remove('is-active','is-changing');
  if(isVideo){
   const previousWasNarrator=previousNarration&&previousNarration!=='top'&&!previousNarration.classList.contains('videos');
   if(narratorWasActive||previousWasNarrator)await wait(transitionDuration);
   if(revision!==narrationRevision)return;
   return;
  }
  const message=active.dataset.narration;
  const image=active.dataset.narrationImage;
  const imagePath=image?`images/me/${image}`:projectImage;
  const side=active.dataset.narrationSide;
  const transitionOut=narratorWasActive?wait(transitionDuration):Promise.resolve();
  const [imageLoaded]=await Promise.all([preloadImage(imagePath),transitionOut]);
  if(revision!==narrationRevision)return;
  const visibleImage=imageLoaded?imagePath:projectImage;
  if(visibleImage!==imagePath)await preloadImage(visibleImage);
  if(revision!==narrationRevision)return;
  narratorImage.src=visibleImage;
  narrator.classList.toggle('is-side-left',side==='left');
  narrator.classList.toggle('is-avatar-left',side==='left');
  narratorText.textContent=message;
  narrator.classList.add('is-active');
  animateNarrator();
 };
 const narrationObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>entry.isIntersecting?observedSections.set(entry.target,entry):observedSections.delete(entry.target));
  updateNarration();
 },{rootMargin:'0px',threshold:0});
 document.querySelectorAll('[data-narration]').forEach((section,index)=>{
  section.dataset.narrationSide=index%2?'left':'right';
  const downTrigger=section.dataset.narrationTrigger?section.querySelector(section.dataset.narrationTrigger):null;
  const downTarget=downTrigger||section;
  const boundaryTarget=section.querySelector('.head')||section;
  const upTrigger=section.dataset.narrationTriggerUp?section.querySelector(section.dataset.narrationTriggerUp):null;
  const upTarget=upTrigger||downTarget;
  const lastTarget=section.querySelector('.grid .card:last-child')||section.querySelector('.video-window')||section.querySelector('.tools')||section.querySelector('.pillars>div:last-child')||section.querySelector('.cta')||section.querySelector('.links a:last-child')||section;
  const checkpoint={section,boundary:boundaryTarget,downTarget,lastTarget,nextBoundary:null};
  sectionCheckpoints.push(checkpoint);
  checkpointBySection.set(section,checkpoint);
  sectionByTrigger.set(downTarget,section);
  triggerDirectionByTarget.set(downTarget,downTarget===upTarget?null:'down');
  triggerTypeByTarget.set(downTarget,'show');
  narrationObserver.observe(downTarget);
  if(downTrigger&&boundaryTarget!==downTarget){
   sectionByTrigger.set(boundaryTarget,section);
   triggerDirectionByTarget.set(boundaryTarget,'down');
   triggerTypeByTarget.set(boundaryTarget,'boundary');
   narrationObserver.observe(boundaryTarget);
  }
  if(upTarget!==downTarget&&upTarget!==boundaryTarget){
   sectionByTrigger.set(upTarget,section);
   triggerDirectionByTarget.set(upTarget,'up');
   triggerTypeByTarget.set(upTarget,'show');
   narrationObserver.observe(upTarget);
  }
 });
 sectionCheckpoints.forEach((checkpoint,index)=>{
  checkpoint.nextBoundary=sectionCheckpoints[index+1]?.boundary||null;
 });
 updateNarration();
 const respondToScroll=()=>{userHasScrolled=true;updateNarration()};
 window.addEventListener('wheel',e=>{if(e.deltaY){scrollDirection=e.deltaY>0?'down':'up';respondToScroll()}},{passive:true});
 window.addEventListener('touchmove',respondToScroll,{passive:true});
 window.addEventListener('scroll',()=>{const current=window.scrollY;if(current!==lastScrollY)scrollDirection=current>lastScrollY?'down':'up';lastScrollY=current;userHasScrolled=true;updateNarration()},{passive:true});
 window.addEventListener('keydown',e=>{if(['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(e.key))requestAnimationFrame(respondToScroll)});
}
document.addEventListener('contextmenu',e=>e.preventDefault());
document.addEventListener('dragstart',e=>{if(e.target.closest('img'))e.preventDefault()});
document.addEventListener('keydown',e=>{
 const key=e.key.toLowerCase(),mod=e.ctrlKey||e.metaKey;
 const blocked=(mod&&['s','u','p'].includes(key))||
  (mod&&e.shiftKey&&['i','j','c','k'].includes(key))||
  key==='f12'||key==='f1'||(mod&&e.altKey&&key==='i');
 if(blocked){
  e.preventDefault();e.stopPropagation();
 }
},true);

