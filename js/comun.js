/* Estado y utilidades que comparten la página de inicio y la guía. */
const KEY='mision-trimestre-v1';
const CHESTS=['Tiempo extra de juego','Elegir la cena','Armar un set','Plan especial en familia','Noche de película','Elegir el postre','Premio mayor'];
let S={done:{},pts:{},tem:{},rewards:CHESTS.slice(),fields:{},world:0,noClock:false};
try{const raw=localStorage.getItem(KEY);if(raw)S={...S,...JSON.parse(raw)}}catch(e){}
while(S.rewards.length<CHESTS.length)S.rewards.push(CHESTS[S.rewards.length]);
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};

function h(t,a={},...k){const e=document.createElement(t);for(const x in a){if(x==='html')e.innerHTML=a[x];else if(x==='cls')e.className=a[x];else if(x.startsWith('on'))e.addEventListener(x.slice(2),a[x]);else e.setAttribute(x,a[x])}k.flat().forEach(c=>c!=null&&e.append(c));return e}
const $=id=>document.getElementById(id);
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
/* Un reto superado vale 100 XP; uno sin terminar conserva lo que sumó con sus aciertos. */
const xp=()=>WORLDS.reduce((n,w)=>n+w.retos.reduce((m,r)=>m+(S.done[r.id]?100:(S.pts[r.id]||0)),0),0);
const TOTAL_XP=WORLDS.reduce((n,w)=>n+w.retos.length,0)*100;
const temaId=(w,i)=>`tema-${w}-${i}`;
const temasDe=w=>TEMAS[w].map((t,i)=>({...t,id:temaId(w,i)})).filter(t=>!t.nota);
const TOTAL_TEMAS=WORLDS.reduce((n,_,w)=>n+temasDe(w).length,0);
let stop=()=>{};
