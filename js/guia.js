/* Página de la guía: mundos, lecciones y apertura de retos. */
let openId=null,paso='aprende',temaActual=0;
const m=/^#mundo([1-5])$/.exec(location.hash);
if(m){S.world=+m[1]-1;save()}

function toast(t){const e=$('toast');e.textContent=t;e.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>e.hidden=true,3500)}

/* Aplica un cambio de puntos, actualiza el contador y avisa si se abrió un cofre. */
function sumarXP(cambio){
  const a=xp();cambio();save();const b=xp();renderHud();
  if(b>a){const e=$('xp-mas');e.textContent=`+${b-a}`;e.classList.remove('sube');void e.offsetWidth;e.classList.add('sube')}
  const c=Math.floor(b/500);
  if(c>Math.floor(a/500)){toast(`Abriste un cofre: ${S.rewards[c-1]}`);return true}
  return false;
}
const sello=r=>S.done[r.id]?'Ganado':(S.pts[r.id]?`${S.pts[r.id]} de 100 XP`:'100 XP');
/* Cada acierto reparte los 100 XP del reto. Repetirlo solo suma si se supera la mejor marca. */
function acierto(r,ok,n){
  const p=Math.round(100*ok/n);
  if(S.done[r.id]||p<=(S.pts[r.id]||0))return;
  sumarXP(()=>{S.pts[r.id]=p});
  document.querySelector(`[data-reto="${r.id}"] .badge`).textContent=sello(r);
}
function renderHud(){
  const x=xp();$('xp').textContent=x;$('xp-total').textContent=TOTAL_XP;$('bar').style.width=(x/TOTAL_XP*100)+'%';
  $('xp-next').textContent=x>=TOTAL_XP?'Misión completa':`Faltan ${500-(x%500)} XP para el siguiente cofre`;
  $('board').replaceChildren(...WORLDS.map((w,i)=>{
    const d=w.retos.filter(r=>S.done[r.id]).length;
    return h('button',{cls:'st','data-w':i,'aria-current':i===S.world?'true':'false',onclick:()=>{S.world=i;inicioMundo();save();try{location.hash='mundo'+(i+1)}catch(e){}renderHud();renderWorld();window.scrollTo(0,$('board').offsetTop-document.querySelector('.barra').offsetHeight)}},
      h('span',{cls:'n'},`Mundo ${i+1}`),h('span',{cls:'name'},w.name),h('span',{cls:'prog'},`${d} de ${w.retos.length} retos`))}));
}
const lecciones=()=>TEMAS[S.world].map((t,i)=>({...t,id:temaId(S.world,i)}));
function inicioMundo(){
  paso='aprende';openId=null;ex=null;
  temaActual=Math.max(0,lecciones().findIndex(t=>!S.tem[t.id]));
}
function renderWorld(){
  const w=WORLDS[S.world];
  $('world').replaceChildren(h('div',{'data-w':S.world},
    h('section',{cls:'world-head'},h('p',{cls:'eyebrow',style:'color:inherit'},w.sub),h('h2',{},`Mundo ${S.world+1}: ${w.name}`),h('p',{},w.lead)),
    h('div',{cls:'etapas',id:'etapas'}),
    h('div',{cls:'contenido',id:'contenido'})));
  renderPaso();
}
function renderPaso(){
  stop();
  $('etapas').replaceChildren(...[['aprende','1. Explicación'],['preguntas','2. Preguntas'],['examen','3. Examen']].map(([k,l])=>
    h('button',{cls:'etapa','aria-current':paso===k?'true':'false',onclick:()=>{cambiarPaso(k)}},l)));
  if(paso==='aprende')renderLeccion();
  else if(paso==='examen')renderExamen();
  else{$('contenido').replaceChildren(h('div',{cls:'col',id:'retos'}));renderRetos()}
}
function cambiarPaso(k){
  paso=k;
  if(k==='preguntas'&&!openId){const w=WORLDS[S.world],f=w.retos.find(r=>!S.done[r.id]);openId=(f||w.retos[0]).id}
  renderPaso();arriba();
}
function arriba(){$('etapas').scrollIntoView({block:'start'})}
function irTema(i){temaActual=i;renderLeccion();arriba()}
function renderLeccion(){
  const lista=lecciones(),t=lista[temaActual];
  const numeros=lista.map((x,i)=>h('button',{cls:'num'+(S.tem[x.id]?' hecho':''),'aria-current':i===temaActual?'true':'false','aria-label':`Tema ${i+1}: ${x.t}`,onclick:()=>irTema(i)},String(i+1)));
  const check=h('input',{id:t.id,type:'checkbox'});check.checked=!!S.tem[t.id];
  check.addEventListener('change',()=>{S.tem[t.id]=check.checked;save();numeros[temaActual].classList.toggle('hecho',check.checked)});
  const ultimo=temaActual===lista.length-1;
  $('contenido').replaceChildren(
    h('div',{cls:'nums'},numeros),
    h('article',{cls:'leccion'},
      h('p',{cls:'count'},t.nota?'Nota del temario':`Tema ${temaActual+1} de ${lista.length}`),
      h('h3',{},t.t),
      t.e.map(p=>h('p',{html:p})),
      h('section',{cls:'ejemplos'},h('h4',{},'Ejemplos'),h('ul',{},t.x.map(x=>h('li',{html:x})))),
      h('p',{cls:'clave',html:`<b>Lo más importante:</b> ${t.k}`}),
      h('label',{cls:'check',for:t.id},check,'Ya puedo explicarlo con mis palabras'),
      h('div',{cls:'row'},h('span',{cls:'intro'},'Practica este tema:'),t.r.map(id=>h('button',{cls:'btn small',onclick:()=>practicar(id)},`Reto ${numero(id)}`)))),
    h('div',{cls:'row nav-tema'},
      temaActual>0?h('button',{cls:'btn',onclick:()=>irTema(temaActual-1)},'Tema anterior'):null,
      ultimo?h('button',{cls:'btn main',onclick:()=>cambiarPaso('preguntas')},'Ya estudié: ir a las preguntas'):h('button',{cls:'btn main',onclick:()=>irTema(temaActual+1)},'Siguiente tema')));
}
function numero(id){return `${S.world+1}.${WORLDS[S.world].retos.findIndex(r=>r.id===id)+1}`}
function practicar(id){paso='preguntas';openId=id;renderPaso();document.querySelector(`[data-reto="${id}"]`).scrollIntoView({block:'start'})}
function repasar(id){paso='aprende';temaActual=Math.max(0,lecciones().findIndex(t=>t.r.includes(id)));renderPaso();arriba()}
function renderRetos(){
  stop();
  const w=WORLDS[S.world],list=$('retos');
  list.replaceChildren(h('h3',{},'Preguntas y retos'));
  w.retos.forEach((r,i)=>{
    const body=h('div',{cls:'reto-b'});
    const card=h('article',{cls:'reto','data-reto':r.id},
      h('button',{cls:'reto-h','aria-expanded':openId===r.id?'true':'false',onclick:()=>{openId=openId===r.id?'__':r.id;renderRetos()}},
        h('span',{},`${S.world+1}.${i+1} ${r.t}`),
        h('span',{cls:'badge'+(S.done[r.id]?' won':'')},sello(r))));
    list.append(card);
    if(openId===r.id){card.append(body);play(r,body,w)}
  });
  list.append(h('div',{cls:'row'},h('button',{cls:'btn main',onclick:()=>cambiarPaso('examen')},'Ya practiqué: ir al examen')));
}
function play(r,box,w){
  stop();stop=()=>{};
  const go={quiz,tf,match,order,maya,mosaic,home,chart}[r.k];
  const end=(pass,msg)=>{
    stop();
    box.replaceChildren();
    const first=pass&&!S.done[r.id];
    if(first&&!sumarXP(()=>{S.done[r.id]=true})&&$('toast').hidden)toast('Reto superado');
    const idx=w.retos.indexOf(r),next=w.retos.slice(idx+1).find(q=>!S.done[q.id]);
    box.append(h('div',{cls:'result',role:'status'},
      h('strong',{},pass?(first?'Reto superado. Ya tienes sus 100 XP':'Reto superado otra vez'):'Casi lo logras'),
      h('p',{},pass||S.done[r.id]?msg:`${msg} Llevas ${S.pts[r.id]||0} de 100 XP en este reto.`),
      h('div',{cls:'row'},
        pass&&next?h('button',{cls:'btn main',onclick:()=>{practicar(next.id)}},'Siguiente reto'):null,
        h('button',{cls:'btn',onclick:()=>{openId=r.id;renderRetos()}},pass?'Jugar de nuevo':'Intentar de nuevo'),
        pass?null:h('button',{cls:'btn',onclick:()=>repasar(r.id)},'Repasar la explicación'))));
    if(S.done[r.id]){const b=box.parentNode.querySelector('.badge');b.textContent='Ganado';b.classList.add('won')}
  };
  go(r,box,end);
}
/* Convierte un texto corrido en tabla y gráfica de barras. */
function chart(r,box,end){
  const fb=h('div',{cls:'fb','aria-live':'polite'});
  const inputs=r.rows.map((f,i)=>{const n=h('input',{id:`${r.id}-v${i}`,type:'number',min:'0',inputmode:'numeric'});return n});
  const max=Math.max(...r.rows.map(f=>f[1]));
  const tabla=h('table',{cls:'tabla'},h('tr',{},h('th',{},'Deporte'),h('th',{},'Votos')),r.rows.map((f,i)=>h('tr',{},h('td',{},h('label',{for:`${r.id}-v${i}`},f[0])),h('td',{},inputs[i]))));
  const grafica=()=>h('div',{cls:'bars'},r.rows.map(f=>h('div',{cls:'bar-row'},h('span',{},f[0]),h('i',{style:`width:${f[1]/max*100}%`}),h('b',{},f[1]))));
  box.replaceChildren(h('p',{cls:'stem'},'Pasa este texto a una tabla.'),h('p',{cls:'clue'},r.texto),tabla,fb,
    h('div',{cls:'row'},h('button',{cls:'btn main',onclick:()=>{
      if(!r.rows.every((f,i)=>Number(inputs[i].value)===f[1])||inputs.some(n=>n.value==='')){fb.className='fb n';fb.textContent='Algún dato no coincide con el texto. Léelo otra vez.';return}
      box.replaceChildren(h('p',{cls:'stem'},'Con tu tabla se puede hacer esta gráfica.'),grafica(),h('div',{cls:'row'},h('button',{cls:'btn main',onclick:()=>quiz(r,box,end)},'Continuar')));
    }},'Revisar')));
}
inicioMundo();renderHud();renderWorld();
