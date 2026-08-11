function openM(src,title){
 const m=document.getElementById('modal');
 document.getElementById('modalImg').src=src;
 document.getElementById('modalTitle').textContent=title||'';
 m.style.display='block';
}
function cerrarM(){document.getElementById('modal').style.display='none';}
let nieve=false;
function activarNieve(){
 if(nieve) return; nieve=true;
 for(let i=0;i<40;i++) setTimeout(crear,i*100);
}
function crear(){
 const c=document.createElement('div'); c.className='copo'; c.textContent='â„';
 c.style.left=Math.random()*100+'vw'; c.style.fontSize=(8+Math.random()*14)+'px';
 c.style.opacity=0.5+Math.random()*0.5; c.style.animationDuration=(3+Math.random()*4)+'s';
 document.body.appendChild(c);
 setTimeout(()=>{c.remove(); if(nieve) crear();},6000);
}
document.addEventListener('DOMContentLoaded',()=>{
 const btns=document.querySelectorAll('.nav button');
 const secs=document.querySelectorAll('.seccion');
 btns.forEach(b=>{
  b.addEventListener('click',()=>{
   btns.forEach(x=>x.classList.remove('active')); b.classList.add('active');
   const f=b.dataset.f;
   if(f==='todos') secs.forEach(s=>s.style.display='');
   else secs.forEach(s=>{s.style.display = s.dataset.cat===f ? '' : 'none';});
   if(f!=='todos'){const t=document.querySelector(`[data-cat="${f}"]`); if(t) t.scrollIntoView({behavior:'smooth'});}
   else window.scrollTo({top:0,behavior:'smooth'});
  });
 });
});
