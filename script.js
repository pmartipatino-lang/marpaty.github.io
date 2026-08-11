function openM(src,title){
 const m=document.getElementById('modal');
 document.getElementById('modalImg').src=src;
 document.getElementById('modalTitle').textContent=title||'';
 m.style.display='block';
}
function cerrarM(){document.getElementById('modal').style.display='none';}
let nieveActiva=false;
let intervaloNieve=null;

function activarNieve(){
 const btn = document.getElementById('btnNieve');
 const cont = document.getElementById('snow');
 if(nieveActiva){
   // DESACTIVAR
   nieveActiva=false;
   btn.textContent='❄️ Activar Nieve';
   btn.classList.remove('activo');
   if(intervaloNieve) clearInterval(intervaloNieve);
   intervaloNieve=null;
   document.querySelectorAll('.copo').forEach(c=>c.remove());
   cont.innerHTML='';
   return;
 }
 // ACTIVAR
 nieveActiva=true;
 btn.textContent='☀️ Desactivar Nieve';
 btn.classList.add('activo');
 for(let i=0;i<45;i) setTimeout(()=>crearCopo(), i*120);
 intervaloNieve=setInterval(()=>{ if(nieveActiva && document.querySelectorAll('.copo').length<100) crearCopo(); }, 220);
}

function crearCopo(){
 if(!nieveActiva) return;
 const cont = document.getElementById('snow');
 const c=document.createElement('div'); c.className='copo'; 
 const simbolos=['❄','❅','❆'];
 c.textContent=simbolos[Math.floor(Math.random()*simbolos.length)];
 c.style.left=Math.random()*100+'vw'; 
 c.style.fontSize=(10+Math.random()*18)+'px';
 c.style.opacity=0.6+Math.random()*0.4; 
 c.style.animationDuration=(4+Math.random()*6)+'s';
 c.style.animationDelay=(Math.random()*1)+'s';
 cont.appendChild(c);
 setTimeout(()=>{c.remove();}, 10000);
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
