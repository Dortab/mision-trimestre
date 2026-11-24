/* Entrada: el tripulante escribe su nombre y elige su grado. Todo se guarda en este dispositivo. */
(()=>{
const el=(t,a={},...k)=>{const e=document.createElement(t);for(const x in a){if(x==='cls')e.className=a[x];else if(x.startsWith('on'))e.addEventListener(x.slice(2),a[x]);else e.setAttribute(x,a[x])}k.flat().forEach(c=>c!=null&&e.append(c));return e};
const perfil=leerPerfil();
const limpiar=t=>t.replace(/[<>{}]/g,'').replace(/\s+/g,' ').trim().slice(0,20);
const input=document.getElementById('nombre-in');
input.value=perfil.nombre||'';
input.addEventListener('input',()=>{perfil.nombre=limpiar(input.value);guardarPerfil(perfil)});
input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();document.querySelector('.grados a.mundo')?.focus()}});

const entrar=g=>{perfil.nombre=limpiar(input.value);perfil.grado=g;guardarPerfil(perfil)};

/* Quien ya eligió grado ve un atajo para seguir donde se quedó. */
const previo=GRADOS[perfil.grado]&&GRADOS[perfil.grado].activo?+perfil.grado:0;
if(previo){
  const c=document.getElementById('continuar');
  const nom=(perfil.nombre||'').trim();
  c.append(el('p',{},nom?`¡Hola de nuevo, ${nom}!`:'¡Hola de nuevo, tripulante!'),
    el('div',{cls:'row acciones'},el('a',{cls:'cta',href:'base.html',onclick:()=>entrar(previo)},`Seguir en ${GRADOS[previo].corto} de primaria`)));
  c.hidden=false;
}

document.getElementById('grados').replaceChildren(...Object.entries(GRADOS).map(([n,g],i)=>{
  n=+n;
  const dentro=[el('span',{cls:'mundo-n'},'Primaria'),el('h3',{},g.corto),el('p',{},g.lema),
    el('span',{cls:'estado'},g.activo?(n===previo?'Aquí vas':'Entrar'):'Próximamente')];
  return g.activo
    ?el('a',{cls:'mundo','data-w':String(i),href:'base.html','aria-label':`Entrar a ${g.nombre}`,onclick:()=>entrar(n)},...dentro)
    :el('div',{cls:'mundo proximo','data-w':String(i),'aria-disabled':'true','aria-label':`${g.nombre}: próximamente`},...dentro);
}));
})();
