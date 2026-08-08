
function abrirModal(src, titulo){
  const modal=document.getElementById('modalImagen');
  const img=document.getElementById('imgAmpliada');
  const t=document.getElementById('modalTitulo');
  img.src=src; if(t) t.textContent=titulo||'';
  modal.style.display='block';
}
function cerrarModal(){document.getElementById('modalImagen').style.display='none';}
let nieve=false;
function activarNieve(){
  if(nieve) return; nieve=true;
  for(let i=0;i<35;i++) setTimeout(crearCopo,i*120);
}
function crearCopo(){
  const c=document.createElement('div'); c.className='copo'; c.textContent='❄';
  c.style.left=Math.random()*100+'vw'; c.style.fontSize=(8+Math.random()*12)+'px';
  c.style.opacity=0.3+Math.random()*0.7; c.style.animationDuration=(3+Math.random()*4)+'s';
  document.body.appendChild(c);
  setTimeout(()=>{c.remove(); if(nieve) crearCopo();},6000);
}
document.addEventListener('DOMContentLoaded',()=>{
  const btns=document.querySelectorAll('.nav-btn');
  const sections=document.querySelectorAll('.catalogo-seccion');
  btns.forEach(b=>{
    b.addEventListener('click',()=>{
      btns.forEach(x=>x.classList.remove('active')); b.classList.add('active');
      const f=b.dataset.filter;
      if(f==='todos'){ sections.forEach(s=>s.style.display=''); }
      else { sections.forEach(s=>{
        if(s.dataset.category===f || f==='graduacion' && s.dataset.category==='graduacion' || s.classList.contains('featured') && f==='graduacion') s.style.display='';
        else if(s.dataset.category===f) s.style.display='';
        else if(f==='graduacion') { if(s.dataset.category!=='graduacion') s.style.display='none'; else s.style.display=''; }
        else s.style.display = s.dataset.category===f ? '' : 'none';
      });
      if(f!=='todos'){ const target=document.querySelector(`[data-category="${f}"]`); if(target) target.scrollIntoView({behavior:'smooth'}); }
      else window.scrollTo({top:0,behavior:'smooth'});
    });
  });
});
