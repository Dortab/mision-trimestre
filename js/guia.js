/* Página de la guía: mundos, lecciones y apertura de retos. */
let openId=null;
const m=/^#mundo([1-5])$/.exec(location.hash);
if(m){S.world=+m[1]-1;save()}

function toast(t){const e=$('toast');e.textContent=t;e.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>e.hidden=true,3500)}

function renderHud(){
  const x=xp();$('xp').textContent=x;$('xp-total').textContent=TOTAL_XP;$('bar').style.width=(x/TOTAL_XP*100)+'%';
  $('xp-next').textContent=x>=TOTAL_XP?'Misión completa':`Faltan ${500-(x%500)} XP para el siguiente cofre`;
  $('board').replaceChildren(...WORLDS.map((w,i)=>{
    const d=w.retos.filter(r=>S.done[r.id]).length;
    return h('button',{cls:'st','data-w':i,'aria-current':i===S.world?'true':'false',onclick:()=>{S.world=i;openId=null;save();try{location.hash='mundo'+(i+1)}catch(e){}renderHud();renderWorld();window.scrollTo(0,$('board').offsetTop)}},
      h('span',{cls:'n'},`Mundo ${i+1}`),h('span',{cls:'name'},w.name),h('span',{cls:'prog'},`${d} de ${w.retos.length} retos`))}));
}
function renderWorld(){
  stop();
  const w=WORLDS[S.world],retos=h('div',{cls:'col',id:'retos'});
  if(!openId){const f=w.retos.find(r=>!S.done[r.id]);openId=(f||w.retos[0]).id}
  const lista=TEMAS[S.world].map((t,i)=>({...t,id:temaId(S.world,i)}));
  const primero=(lista.find(t=>!S.tem[t.id])||lista[0]).id;
  const cuenta=h('p',{cls:'count'});
  const contar=()=>{const c=temasDe(S.world);cuenta.textContent=`${c.filter(t=>S.tem[t.id]).length} de ${c.length} temas dominados`};
  contar();
  $('world').replaceChildren(h('div',{'data-w':S.world},
    h('section',{cls:'world-head'},h('p',{cls:'eyebrow',style:'color:inherit'},w.sub),h('h2',{},`Mundo ${S.world+1}: ${w.name}`),h('p',{},w.lead)),
    h('div',{cls:'layout'},
      h('div',{cls:'col'},h('h3',{},'Aprende'),cuenta,...lista.map(t=>tema(t,t.id===primero,contar))),
      retos)));
  renderRetos();
}
function tema(t,abierto,contar){
  const check=h('input',{id:t.id,type:'checkbox'});check.checked=!!S.tem[t.id];
  const sello=h('span',{cls:'badge'+(S.tem[t.id]?' won':'')},S.tem[t.id]?'Dominado':(t.nota?'Nota':'Tema'));
  check.addEventListener('change',()=>{S.tem[t.id]=check.checked;save();sello.textContent=check.checked?'Dominado':(t.nota?'Nota':'Tema');sello.classList.toggle('won',check.checked);contar()});
  const d=h('details',{cls:'tema'},h('summary',{},h('span',{},t.t),sello),
    h('div',{cls:'tema-b'},h('p',{html:t.e}),h('p',{cls:'ej',html:`<b>Ejemplo.</b> ${t.x}`}),h('p',{cls:'clave',html:`<b>Clave.</b> ${t.k}`}),
      h('div',{cls:'row'},t.r.map(id=>h('button',{cls:'btn small',onclick:()=>practicar(id)},`Practicar ${numero(id)}`))),
      h('label',{cls:'check',for:t.id},check,'Ya puedo explicarlo con mis palabras')));
  d.open=abierto;
  return d;
}
function numero(id){return `${S.world+1}.${WORLDS[S.world].retos.findIndex(r=>r.id===id)+1}`}
function practicar(id){openId=id;renderRetos();document.querySelector(`[data-reto="${id}"]`).scrollIntoView({block:'start'})}
function renderRetos(){
  stop();
  const w=WORLDS[S.world],list=$('retos');
  list.replaceChildren(h('h3',{},'Juega'));
  w.retos.forEach((r,i)=>{
    const body=h('div',{cls:'reto-b'});
    const card=h('article',{cls:'reto','data-reto':r.id},
      h('button',{cls:'reto-h','aria-expanded':openId===r.id?'true':'false',onclick:()=>{openId=openId===r.id?'__':r.id;renderRetos()}},
        h('span',{},`${S.world+1}.${i+1} ${r.t}`),
        h('span',{cls:'badge'+(S.done[r.id]?' won':'')},S.done[r.id]?'Ganado':'100 XP')));
    list.append(card);
    if(openId===r.id){card.append(body);play(r,body,w)}
  });
}
function play(r,box,w){
  stop();stop=()=>{};
  const go={quiz,tf,match,order,maya,mosaic,home,chart}[r.k];
  const end=(pass,msg)=>{
    stop();
    box.replaceChildren();
    const first=pass&&!S.done[r.id];
    if(first){S.done[r.id]=true;save();const x=xp();renderHud();toast(x%500===0?`Abriste un cofre: ${S.rewards[x/500-1]}`:'Ganaste 100 XP')}
    const idx=w.retos.indexOf(r),next=w.retos.slice(idx+1).find(q=>!S.done[q.id]);
    box.append(h('div',{cls:'result',role:'status'},
      h('strong',{},pass?(first?'Reto superado. +100 XP':'Reto superado otra vez'):'Casi lo logras'),
      h('p',{},msg),
      h('div',{cls:'row'},
        pass&&next?h('button',{cls:'btn main',onclick:()=>{practicar(next.id)}},'Siguiente reto'):null,
        h('button',{cls:'btn',onclick:()=>{openId=r.id;renderRetos()}},pass?'Jugar de nuevo':'Intentar de nuevo'))));
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
renderHud();renderWorld();
