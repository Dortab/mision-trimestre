/* Trimestres del grado activo. Cada grado define T1_MUNDOS, T2_MUNDOS y T3_MUNDOS (lecciones)
   o, en el caso del 1.er trimestre de 6.º, WORLDS_T1, TEMAS_T1 y EXAMENES_T1 armados a mano.
   Aquí se elige el trimestre activo y se arman WORLDS, TEMAS y EXAMENES, que usa el resto de la app. */
const TRIMESTRES={};
if(typeof WORLDS_T1!=='undefined')TRIMESTRES[1]={worlds:WORLDS_T1,temas:TEMAS_T1,examenes:typeof EXAMENES_T1!=='undefined'?EXAMENES_T1:null};

/* Arma un trimestre a partir de sus lecciones.
   Cada lección: t título, c nombre corto, e párrafos, x ejemplos, k lo más importante,
   q preguntas de opción (la primera es la correcta), v falso o verdadero, ex preguntas de examen.
   Los retos se forman solos: uno de opción por cada 2 lecciones y uno de falso o verdadero por cada 4. */
/* Une nombres cortos: «Cocientes decimales y valores faltantes». Los nombres propios conservan su mayúscula. */
const PROPIOS=/^(México|SPARK)/;
const minus=c=>PROPIOS.test(c)?c:c.charAt(0).toLowerCase()+c.slice(1);
const unir=(ls,sep)=>ls.map((l,i)=>{const c=l.c||l.t;return i?minus(c):c}).join(sep);
function armarTrimestre(n,mundos){
  const worlds=[],temas=[],examenes=[];
  mundos.forEach((m,w)=>{
    const pre=`t${n}m${w}`,retos=[];
    for(let i=0;i<m.temas.length;i+=2){
      const ls=m.temas.slice(i,i+2);
      retos.push({id:`${pre}q${i/2+1}`,t:unir(ls,' y '),k:'quiz',
        q:ls.flatMap((l,j)=>(l.q||[]).map(q=>({...q,t:i+j})))});
    }
    for(let i=0;i<m.temas.length;i+=4){
      const ls=m.temas.slice(i,i+4),q=ls.flatMap((l,j)=>(l.v||[]).map(v=>({...v,t:i+j})));
      if(q.length)retos.push({id:`${pre}v${i/4+1}`,t:`Falso o verdadero: ${ls.map(l=>minus(l.c||l.t)).join(', ')}`,k:'tf',q});
    }
    worlds.push({name:m.name,sub:m.sub,lead:m.lead,retos});
    temas.push(m.temas.map(l=>({t:l.t,e:l.e,x:l.x,k:l.k,r:[]})));
    /* Si un mundo tiene pocas preguntas de examen, se completan con las de sus misiones para acercarse a 20. */
    const pocas=m.temas.reduce((n,l)=>n+(l.ex||[]).length,0)<20;
    examenes.push(m.temas.map(l=>[...(l.ex||[]),...(pocas?(l.q||[]).map(({s,o,y})=>({s,o,y})):[])]));
    retos.forEach(r=>r.q.forEach(q=>{const l=temas[w][q.t].r;if(!l.includes(r.id))l.push(r.id)}));
  });
  TRIMESTRES[n]={worlds,temas,examenes};
}
if(typeof T1_MUNDOS!=='undefined'&&!TRIMESTRES[1])armarTrimestre(1,T1_MUNDOS);
if(typeof T2_MUNDOS!=='undefined')armarTrimestre(2,T2_MUNDOS);
if(typeof T3_MUNDOS!=='undefined')armarTrimestre(3,T3_MUNDOS);

const NOMBRE_TRIM={1:'1.er trimestre',2:'2.º trimestre',3:'3.er trimestre'};
/* El trimestre activo se guarda junto con el avance del grado. Si no existe, se usa el primero disponible. */
const TRIM=(()=>{
  let t=0;
  try{t=+(JSON.parse(localStorage.getItem(KEY)||'{}').trim)||0}catch(e){}
  return TRIMESTRES[t]?t:+Object.keys(TRIMESTRES)[0];
})();
const WORLDS=TRIMESTRES[TRIM].worlds,TEMAS=TRIMESTRES[TRIM].temas,EXAMENES=TRIMESTRES[TRIM].examenes;
/* Nombre de la materia de un registro de la bitácora, aunque sea de otro trimestre. */
const mundoDe=(w,tr)=>{const d=TRIMESTRES[tr||1];return d&&d.worlds[w]?d.worlds[w].name:''};
