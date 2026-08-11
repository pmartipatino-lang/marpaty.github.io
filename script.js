function openM(src,title){
 const m=document.getElementById('modal');
 document.getElementById('modalImg').src=src;
 document.getElementById('modalTitle').textContent=title||'';
 m.style.display='block';
}
function cerrarM(){document.getElementById('modal').style.display='none';}
let nieveON=false;
function toggleNieve(){
 const btn=document.getElementById('btnNieve');
 const snow=document.getElementById('snow');
 if(!btn||!snow) return;
 if(nieveON){
   nieveON=false;
   btn.textContent='❄️ Activar Nieve';
   btn.classList.remove('activo');
   snow.innerHTML='';
   return;
 }
 nieveON=true;
 btn.textContent='❄️ Desactivar Nieve';
 btn.classList.add('activo');
 snow.innerHTML='';
 for(let i=0;i<15;i++){
   const c=document.createElement('div');
   c.className='copo';
   c.textContent='❄';
   c.style.left=(Math.random()*100)+'vw';
   c.style.animationDuration=(5+Math.random()*5)+'s';
   c.style.animationDelay=(Math.random()*3)+'s';
   c.style.fontSize=(12+Math.random()*10)+'px';
   snow.appendChild(c);
 }
}
function activarNieve(){ toggleNieve(); }
document.addEventListener('DOMContentLoaded',()=>{
 const btns=document.querySelectorAll('.nav button');
 const secs=document.querySelectorAll('.seccion');
 btns.forEach(b=>{
  b.addEventListener('click',()=>{
   btns.forEach(x=>x.classList.remove('active')); b.classList.add('active');
   const f=b.dataset.f;
   if(f==='todos') secs.forEach(s=>s.style.display='');
   else secs.forEach(s=>{s.style.display = s.dataset.cat===f ? '' : 'none';});
  });
 });
});
