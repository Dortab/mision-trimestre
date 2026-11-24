/* Universo SPARK: grados disponibles, perfil del tripulante y grado activo.
   Cada grado vive en grados/<n>/ y se carga solo cuando se elige. Su avance se guarda aparte. */
const GRADOS={
  1:{nombre:'1.º de primaria',corto:'1.º',lema:'Leer, contar y conocer mi cuerpo',activo:true,archivos:['trimestre1','trimestre2','trimestre3'],
     fuente:()=>'Basada en el Programa Sintético de la Fase 3 de la SEP para 1.º de primaria.'},
  2:{nombre:'2.º de primaria',corto:'2.º',lema:'Escribir, sumar y cuidar mi entorno',activo:true,archivos:['trimestre1','trimestre2','trimestre3'],
     fuente:()=>'Basada en el Programa Sintético de la Fase 3 de la SEP para 2.º de primaria.'},
  3:{nombre:'3.º de primaria',corto:'3.º',lema:'Fracciones, ecosistemas y mi entidad',activo:true,
     archivos:['trimestre1','trimestre2','trimestre3'],
     fuente:()=>'Basada en el Programa Sintético de la Fase 4 de la SEP para 3.º de primaria.'},
  4:{nombre:'4.º de primaria',corto:'4.º',lema:'Decimales, nutrición y el mapa de México',activo:true,
     archivos:['trimestre1','trimestre2','trimestre3'],
     fuente:()=>'Basada en el Programa Sintético de la Fase 4 de la SEP para 4.º de primaria.'},
  5:{nombre:'5.º de primaria',corto:'5.º',lema:'Independencia, biodiversidad y porcentajes',activo:true,
     archivos:['trimestre1','trimestre2','trimestre3'],
     fuente:()=>'Basada en el Programa Sintético de la Fase 5 de la SEP para 5.º de primaria.'},
  6:{nombre:'6.º de primaria',corto:'6.º',lema:'Cuerpo humano, π, Revolución y democracia',activo:true,
     archivos:['datos','temas','examenes','practica','trimestre2','trimestre3'],
     fuente:t=>t===1?'Basada en el temario de evaluación del 1.er trimestre de 6.º.':
       'Basada en los libros de 6.º (Universo Luca y Nova) y en el Programa Sintético de la Fase 5 de la SEP.'}
};
const PERFIL_KEY='universo-spark';
const leerPerfil=()=>{try{return JSON.parse(localStorage.getItem(PERFIL_KEY)||'{}')||{}}catch(e){return{}}};
const guardarPerfil=p=>{try{localStorage.setItem(PERFIL_KEY,JSON.stringify(p))}catch(e){}};
const claveGrado=g=>`universo-spark-g${g}`;

/* Quien ya usaba la versión anterior (solo 6.º) conserva su avance y entra directo a 6.º */
(()=>{try{
  const viejo=localStorage.getItem('mision-trimestre-v1');
  if(viejo&&!localStorage.getItem(claveGrado(6))){
    localStorage.setItem(claveGrado(6),viejo);
    const p=leerPerfil();if(!p.grado){p.grado=6;guardarPerfil(p)}
  }
}catch(e){}})();

const PERFIL=leerPerfil();
const GRADO=GRADOS[PERFIL.grado]&&GRADOS[PERFIL.grado].activo?+PERFIL.grado:0;
const KEY=GRADO?claveGrado(GRADO):null;
/* 1.º y 2.º usan letra y botones más grandes, exámenes y retos más cortos y dibujos en las lecciones. */
const PEQUES=GRADO>0&&GRADO<=2;
if(PEQUES)document.documentElement.classList.add('peques');
/* La tipografía de jeroglíficos solo la usa 6.º; los demás grados no la descargan. */
if(GRADO===6){const l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Noto+Sans+Egyptian+Hieroglyphs&display=swap';document.head.append(l)}
/* Nombre para hablarle: el que escribió o «tripulante». */
const nombreTripulante=()=>(PERFIL.nombre||'').trim()||'tripulante';
const tieneNombre=()=>!!(PERFIL.nombre||'').trim();

/* Carga los datos del grado y luego el motor y la página, en orden.
   Sin grado elegido, regresa a la entrada. */
function cargar(...pagina){
  if(!GRADO){location.replace('index.html');return}
  const lista=[...GRADOS[GRADO].archivos.map(a=>`grados/${GRADO}/${a}.js`),'js/trimestre.js','js/comun.js',...pagina.map(p=>`js/${p}.js`)];
  lista.forEach(src=>{const s=document.createElement('script');s.src=src;s.async=false;document.body.append(s)});
}

/* Guarda una copia de la app en el celular para que abra rápido y funcione sin señal (ver sw.js). */
if('serviceWorker' in navigator&&location.protocol==='https:')
  addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
