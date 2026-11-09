const score=(ok,n,end)=>end(ok/n>=.7,`Acertaste ${ok} de ${n}. ${ok===n?'Puntaje perfecto.':ok/n>=.7?'Repasa las que fallaste.':`Necesitas al menos ${Math.ceil(n*.7)}. Lee otra vez el repaso.`}`);
function fbk(el,good,head,why){el.className='fb '+(good?'y':'n');el.replaceChildren(head,h('span',{html:why}))}

function quiz(r,box,end){
  let i=0,ok=0,puntos=0;
  const next=()=>{
    if(i>=r.q.length)return score(ok,r.q.length,end);
    const q=r.q[i],fb=h('div',{cls:'fb','aria-live':'polite'}),nav=h('div',{cls:'row'});
    const stems=[];let shown=1;
    if(q.c){const cl=h('div',{cls:'opts'});const add=()=>cl.append(h('p',{cls:'clue'},q.c[shown-1]));add();
      const more=h('button',{cls:'btn small',onclick:()=>{shown++;add();if(shown>=q.c.length)more.remove()}},'Otra pista');stems.push(cl,h('div',{cls:'row'},more));nav.dataset.more='1';q._more=more}
    else stems.push(h('p',{cls:'stem',html:q.s}));
    const btns=shuffle(q.o.map((t,n)=>({t,good:n===0}))).map(o=>{const b=h('button',{cls:'opt',html:o.t,onclick:()=>pick(o,b)});b._g=o.good;return b});
    /* Primer error: pista y otro intento. Segundo error: respuesta y explicación. */
    let errores=0;
    const cerrar=()=>{btns.forEach(x=>{x.disabled=true;if(x._g)x.classList.add('good')});if(q._more)q._more.remove();
      i++;nav.append(h('button',{cls:'btn main',onclick:next},i>=r.q.length?'Ver resultado':'Siguiente'));nav.lastChild.focus({preventScroll:true})};
    const pick=(o,b)=>{
      if(o.good){
        ok++;puntos+=errores?.5:1;cuenta.textContent=etiqueta();acierto(r,puntos,r.q.length,q,errores?.5:1);
        if(!errores){marcarFalla(r,q,false);fbk(fb,true,'Correcto.',q.y)}
        else fbk(fb,true,'Ahora sí. Al segundo intento suma la mitad de los puntos.',q.y);
        return cerrar();
      }
      b.classList.add('bad');b.disabled=true;
      if(!errores++){
        marcarFalla(r,q,true);
        if(q._more)while(q._more.isConnected)q._more.click();
        fbk(fb,false,'Todavía no. Inténtalo otra vez.',q.p||'Lee con calma todas las pistas.');
        ligaTema(fb,q);
        return;
      }
      fbk(fb,false,'Esa tampoco era.',`${q.y} ${recordatorio(q)}`);
      ligaTema(fb,q);
      cerrar();
    };
    const etiqueta=()=>`Pregunta ${i+1} de ${r.q.length} · Aciertos: ${ok}`,cuenta=h('p',{cls:'count'},etiqueta());
    box.replaceChildren(...(r.intro?[h('div',{cls:'intro',html:r.intro})]:[]),cuenta,...stems,h('div',{cls:'opts'},btns),fb,nav);
  };
  next();
}
function tf(r,box,end){
  const c=h('input',{id:'conreloj',type:'checkbox',onchange:e=>{S.conReloj=e.target.checked;save()}});c.checked=S.conReloj;
  box.replaceChildren(h('p',{cls:'intro'},'Lee cada frase con calma y decide si es verdadera o falsa.'),h('label',{cls:'check',for:'conreloj'},c,'Quiero un reto extra: 5 segundos por frase'),h('div',{cls:'row'},h('button',{cls:'btn main',onclick:run},'Empezar')));
  function run(){
    let i=0,ok=0;
    const next=()=>{
      if(i>=r.q.length)return score(ok,r.q.length,end);
      const q=r.q[i],fb=h('div',{cls:'fb','aria-live':'polite'}),nav=h('div',{cls:'row'});
      let t;
      const ans=v=>{clearTimeout(t);stop=()=>{};bar&&bar.remove();[bv,bf].forEach(b=>{b.disabled=true});(q.v?bv:bf).classList.add('good');
        const good=v===q.v;if(good){ok++;cuenta.textContent=etiqueta();acierto(r,ok,r.q.length)}else if(v!==null)(v?bv:bf).classList.add('bad');
        marcarFalla(r,q,!good);
        fbk(fb,good,good?'Correcto.':(v===null?'Se acabó el tiempo.':'Esa no era.'),`${q.v?'Es verdadero.':'Es falso.'} ${q.y}${good?'':' '+recordatorio(q)}`);
        if(!good)ligaTema(fb,q);
        i++;nav.append(h('button',{cls:'btn main',onclick:next},i>=r.q.length?'Ver resultado':'Siguiente'));nav.lastChild.focus({preventScroll:true})};
      const bv=h('button',{cls:'opt',onclick:()=>ans(true)},'Verdadero'),bf=h('button',{cls:'opt',onclick:()=>ans(false)},'Falso');
      const bar=S.conReloj?h('div',{cls:'clock'},h('i')):null;
      const etiqueta=()=>`Frase ${i+1} de ${r.q.length} · Aciertos: ${ok}`,cuenta=h('p',{cls:'count'},etiqueta());
      box.replaceChildren(cuenta,h('p',{cls:'stem'},q.s),bar,h('div',{cls:'opts'},bv,bf),fb,nav);
      if(S.conReloj){t=setTimeout(()=>ans(null),5000);stop=()=>clearTimeout(t)}
    };
    next();
  }
}
function match(r,box,end){
  let sel=null,miss=0,left=r.p.length;
  const fb=h('div',{cls:'fb','aria-live':'polite'});
  const L=shuffle(r.p).map(p=>{const b=h('button',{cls:'tag',onclick:()=>{if(sel)sel.classList.remove('sel');sel=b;b.classList.add('sel')}},p[0]);b._k=p[1];return b});
  const R=shuffle(r.p).map(p=>{const b=h('button',{cls:'tag',onclick:()=>{
    if(!sel){fb.className='fb n';fb.textContent='Primero toca un tema.';return}
    if(sel._k===p[1]){sel.classList.remove('sel');sel.classList.add('good');b.classList.add('good');sel.disabled=b.disabled=true;sel=null;fb.className='fb y';fb.textContent='Correcto.';
      left--;acierto(r,r.p.length-left,r.p.length);
      if(left===0)end(true,miss?`Lo completaste con ${miss} ${miss===1?'error':'errores'}.`:'Lo completaste sin errores.')}
    else{miss++;b.classList.add('bad');setTimeout(()=>b.classList.remove('bad'),500);fb.className='fb n';fb.textContent='Esa pareja no va. Intenta otra.'}}},p[1]);return b});
  box.replaceChildren(h('p',{cls:'intro'},r.intro),h('div',{cls:'match'},h('div',{},L),h('div',{},R)),fb);
}
function order(r,box,end){
  let round=0,miss=0;
  const start=()=>{
    if(round>=r.rounds.length)return end(true,miss?`Lo lograste con ${miss} ${miss===1?'intento fallido':'intentos fallidos'}.`:'Lo lograste a la primera.');
    const right=r.rounds[round];let picks=[];
    const pool=h('div',{cls:'pool'}),picked=h('div',{cls:'picked'}),fb=h('div',{cls:'fb','aria-live':'polite'}),act=h('div',{cls:'row'});
    const items=shuffle(right);
    const draw=(marks)=>{
      pool.replaceChildren(...items.filter(x=>!picks.includes(x)).map(x=>h('button',{cls:'tag',html:x,onclick:()=>{picks.push(x);fb.textContent='';draw()}})));
      picked.replaceChildren(...(picks.length?picks.map((x,i)=>h('button',{cls:'tag'+(marks?(x===right[i]?' good':' bad'):''),html:`${i+1}. ${x}`,'aria-label':`Quitar ${i+1}`,onclick:()=>{picks.splice(i,1);fb.textContent='';draw()}})):[h('em',{},'Aquí aparece tu orden.')]));
      act.replaceChildren(h('button',{cls:'btn main',onclick:check,...(picks.length<right.length?{disabled:''}:{})},'Revisar'),h('button',{cls:'btn',onclick:()=>{picks=[];fb.textContent='';draw()}},'Borrar'));
    };
    function check(){
      if(picks.every((x,i)=>x===right[i])){round++;acierto(r,round,r.rounds.length);start();return}
      miss++;draw(true);fb.className='fb n';fb.textContent='Las rojas están fuera de lugar. Tócalas para quitarlas y vuelve a intentarlo.';
    }
    draw();
    box.replaceChildren(h('p',{cls:'intro'},r.intro),...(r.rounds.length>1?[h('p',{cls:'count'},`Ronda ${round+1} de ${r.rounds.length}`)]:[]),pool,picked,fb,act);
  };
  start();
}
function shell(){return `<svg width="48" height="30" viewBox="0 0 48 30" role="img" aria-label="concha"><ellipse cx="24" cy="15" rx="22" ry="13" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M6 11 Q24 2 42 11 M4 17 Q24 10 44 17 M8 23 Q24 18 40 23" fill="none" stroke="currentColor" stroke-width="2"/></svg>`}
function glyphM(n){
  const g=h('div',{cls:'m-g'});
  if(n===0){g.innerHTML=shell();return g}
  const d=n%5,b=Math.floor(n/5);
  if(d)g.append(h('div',{cls:'m-dots'},Array.from({length:d},()=>h('i'))));
  for(let i=0;i<b;i++)g.append(h('div',{cls:'m-bar'}));
  return g;
}
function maya(r,box,end){
  let i=0;
  const next=()=>{
    if(i>=r.targets.length)return end(true,'Ya escribes como los mayas.');
    const t=r.targets[i];let v=[0,0];
    const fb=h('div',{cls:'fb','aria-live':'polite'}),wrap=h('div',{cls:'maya'});
    const add=(l,n)=>{if(v[l]+n>19){fb.className='fb n';fb.textContent='Cada nivel llega hasta 19. Usa el nivel de arriba.';return}v[l]+=n;fb.textContent='';draw()};
    const lvl=(l,label)=>h('div',{cls:'lvl'},glyphM(v[l]),h('div',{},h('small',{},label),h('div',{cls:'row'},
      h('button',{cls:'btn small',onclick:()=>add(l,1)},'Punto'),h('button',{cls:'btn small',onclick:()=>add(l,5)},'Raya'),h('button',{cls:'btn small',onclick:()=>{v[l]=0;fb.textContent='';draw()}},'Concha'))));
    const draw=()=>wrap.replaceChildren(lvl(0,'Segundo nivel (×20)'),lvl(1,'Primer nivel (×1)'));
    draw();
    box.replaceChildren(h('p',{cls:'count'},`Número ${i+1} de ${r.targets.length}`),h('p',{cls:'stem'},`Escribe el ${t} con números mayas.`),h('p',{cls:'intro'},'Cinco puntos se convierten en una raya.'),wrap,fb,
      h('div',{cls:'row'},h('button',{cls:'btn main',onclick:()=>{
        const val=v[0]*20+v[1];
        if(val===t){i++;acierto(r,i,r.targets.length);fb.className='fb y';fb.textContent='Correcto.';setTimeout(next,700)}
        else{fb.className='fb n';fb.textContent=`Tu número vale (${v[0]} × 20) + ${v[1]} = ${val}. Debe dar ${t}.`}
      }},'Revisar')));
  };
  next();
}
function mosaic(r,box,end){
  let tool='b';const cells=Array(12).fill('');
  const fb=h('div',{cls:'fb','aria-live':'polite'});
  const grid=h('div',{cls:'mosaic'});
  const paints=[['b','Azul'],['r','Rojo'],['','Borrar']].map(([k,l])=>{const b=h('button',{cls:'btn small paint','aria-pressed':k==='b'?'true':'false',onclick:()=>{tool=k;paints.forEach(p=>p.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed','true')}},l);return b});
  cells.forEach((_,i)=>{const b=h('button',{'aria-label':`Cuadrito ${i+1}`,onclick:()=>{cells[i]=tool;b.className=tool}});grid.append(b)});
  box.replaceChildren(h('p',{cls:'stem',html:`Pinta ${F(1,3)} de azul y ${F(1,4)} de rojo.`}),h('p',{cls:'intro'},'El mosaico tiene 12 cuadritos. Calcula cuántos corresponden a cada color.'),h('div',{cls:'row'},paints),grid,fb,
    h('div',{cls:'row'},h('button',{cls:'btn main',onclick:()=>{
      const b=cells.filter(c=>c==='b').length,red=cells.filter(c=>c==='r').length;
      if(b===4&&red===3)quiz(r,box,end);
      else{fb.className='fb n';fb.innerHTML=`Llevas ${b} azules y ${red} rojos. Pista: ${F(1,3)} de 12 es 12 ÷ 3.`}
    }},'Revisar')));
}
function home(r,box,end){
  const inputs=r.f.map((l,i)=>{const id=`${r.id}-${i}`;const inp=h('textarea',{id,rows:'2',oninput:e=>{S.fields[id]=e.target.value;save();sync()}});inp.value=S.fields[id]||'';return [h('div',{cls:'field'},h('label',{for:id},l),inp),inp]});
  const c=h('input',{id:r.id+'-ok',type:'checkbox',onchange:()=>sync()});
  const go=h('button',{cls:'btn main',onclick:()=>end(true,'Buen trabajo. Pon en práctica esas acciones esta semana.')},'Terminar reto');
  const sync=()=>{go.disabled=!(c.checked&&inputs.every(x=>x[1].value.trim()))};
  sync();
  box.replaceChildren(h('p',{cls:'intro'},r.intro),...inputs.map(x=>x[0]),h('label',{cls:'check',for:r.id+'-ok'},c,r.adult),h('div',{cls:'row'},go));
}

/* Pomodoro */
(function(){
  let left=600,t=null;
  const out=$('pomo-t'),go=$('pomo-go');
  if(!go)return;
  const paint=()=>out.textContent=String(Math.floor(left/60)).padStart(2,'0')+':'+String(left%60).padStart(2,'0');
  const halt=()=>{clearInterval(t);t=null};
  go.onclick=()=>{
    if(t){halt();go.textContent='Continuar';return}
    if(left===0)left=600;
    go.textContent='Pausar';
    t=setInterval(()=>{left--;paint();if(left<=0){halt();go.textContent='Iniciar 10 minutos';toast('Tiempo. Descansa 5 minutos.')}},1000);
  };
  $('pomo-re').onclick=()=>{halt();left=600;paint();go.textContent='Iniciar 10 minutos'};
})();

