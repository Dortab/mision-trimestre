const F=(a,b,w)=>`${w?w+' ':''}<span class="fr" role="img" aria-label="${a} sobre ${b}"><i>${a}</i><i>${b}</i></span>`;
const G=s=>`<span class="glyph">${s}</span>`;
const PACK=`<div class="pack"><div><h4>Cereal Crujín</h4>Contenido neto: 300 g<br>Porción: 30 g<br><b>Consumir preferentemente antes de: 15 MAR 2027</b>
<table><tr><td>Por porción (30 g)</td><td></td></tr><tr><td>Contenido energético</td><td>118 kcal</td></tr><tr><td>Proteínas</td><td>2 g</td></tr><tr><td>Azúcares</td><td>9 g</td></tr><tr><td>Sodio</td><td>180 mg</td></tr></table></div>
<div class="seals"><div class="seal">EXCESO<br>AZÚCARES</div><div class="seal">EXCESO<br>SODIO</div></div></div>`;

/* En cada pregunta, la primera opción de o[] es la correcta; se revuelven al mostrarlas. */
const WORLDS=[
{name:'Ciencias',sub:'Pensamiento científico',lead:'Tu cuerpo es una fortaleza. Aprende cómo se defiende y cómo cuidarlo.',
retos:[
{id:'c1',t:'La fortaleza inmunológica',k:'quiz',q:[
{s:'¿Qué hacen los leucocitos?',o:['Detectan y combaten a los invasores','Llevan oxígeno a los músculos','Digieren los alimentos'],y:'Los leucocitos, o glóbulos blancos, son los soldados del sistema inmunitario.'},
{s:'¿Qué produce tu cuerpo para atacar a un antígeno?',o:['Anticuerpos','Vitaminas','Hormonas'],y:'Cada anticuerpo está hecho para reconocer un antígeno específico.'},
{s:'¿Cómo funciona una vacuna?',o:['Entrena a tus defensas antes de que te enfermes','Mata al virus cuando ya estás grave','Sustituye a los glóbulos blancos'],y:'La vacuna enseña a tu cuerpo a reconocer al microbio.'},
{s:'¿Cuál acción cuida mejor tu sistema inmunológico?',o:['Dormir bien y comer frutas y verduras','Desvelarte y tomar refresco','No lavarte las manos para acostumbrarte a los microbios'],y:'El descanso, la buena comida y la higiene mantienen fuertes tus defensas.'}]},
{id:'c2',t:'Falso o verdadero exprés',k:'tf',q:[
{s:'Las vacunas curan a una persona muy grave.',v:false,y:'Previenen y entrenan a las defensas.'},
{s:'Las enfermedades contagiosas solo viajan por el aire.',v:false,y:'También por agua o alimentos, contacto directo o mosquitos.'},
{s:'La obesidad y la desnutrición se relacionan con la alimentación.',v:true,y:'Una es por exceso y la otra por falta de nutrientes.'},
{s:'Lavarte las manos ayuda a evitar contagios.',v:true,y:'Es una de las medidas más sencillas y efectivas.'},
{s:'Los mosquitos pueden transmitir enfermedades.',v:true,y:'Por eso se les llama vectores. El dengue es un ejemplo.'},
{s:'Los glóbulos blancos forman parte de tus defensas.',v:true,y:'Son la base del sistema inmunitario.'}]},
{id:'c3',t:'Mapa de prevención',k:'match',intro:'Toca un tema y luego la medida que lo previene.',p:[
['Embarazo en la adolescencia','Información y un proyecto de vida'],
['Infecciones de transmisión sexual','Abstinencia o métodos de barrera'],
['Consumo de drogas','Comunicación en casa y saber decir NO'],
['Violencia sexual','Decir NO y avisar a un adulto de confianza'],
['Enfermedades por alimentación','Dieta variada y actividad física'],
['Enfermedades contagiosas','Vacunas e higiene']]}]},

{name:'Lenguajes',sub:'Contar, argumentar y leer el mundo',lead:'Conviértete en detective de textos y gana cada debate.',
retos:[
{id:'l1',t:'Detectives del texto',k:'match',intro:'Une cada tipo de texto con su pista.',p:[
['Autobiografía','Narra la propia vida en primera persona'],
['Texto explicativo','Detalla causas y efectos de un fenómeno'],
['Resumen','Rescata solo las ideas principales'],
['Infografía','Texto discontinuo con imágenes y datos'],
['Reglamento','Dicta normas con verbos como «respetar» o «deberá»'],
['Reseña','Resume una obra y da una opinión fundamentada']]},
{id:'l2',t:'Adverbios y nexos',k:'quiz',q:[
{s:'En «Ayer llegué tarde», ¿qué indica <b>ayer</b>?',o:['Tiempo','Lugar','Cantidad'],y:'Ayer es un adverbio de tiempo.'},
{s:'¿Cuál es una frase adverbial de modo?',o:['Con alegría','Hace cinco años','En mi casa'],y:'Con alegría dice cómo pasó algo.'},
{s:'Elige el nexo: «Llovió mucho; ___, se canceló el partido.»',o:['por lo tanto','sin embargo','además'],y:'Por lo tanto introduce una consecuencia.'},
{s:'Elige el nexo: «Estudié poco; ___, aprobé el examen.»',o:['sin embargo','por lo tanto','en primer lugar'],y:'Sin embargo marca una idea contraria.'},
{s:'¿Cuál frase narra un suceso autobiográfico?',o:['Cuando cumplí ocho años, me mudé a Puebla.','Puebla es un estado de México.','Jacob se mudó a Puebla.'],y:'La autobiografía se escribe en primera persona.'}]},
{id:'l3',t:'Mi línea de vida',k:'order',intro:'Toca los sucesos en orden, del más antiguo al más reciente. Fíjate en las frases de tiempo.',rounds:[['Nací en un día de lluvia.','A los cinco años entré a la primaria.','Hace dos años me cambié de escuela.','Hoy estoy en sexto grado.','El próximo año entraré a la secundaria.']]},
{id:'l4',t:'El juicio de la etiqueta',k:'quiz',intro:PACK,q:[
{s:'¿Hasta qué fecha se recomienda consumirlo?',o:['15 de marzo de 2027','30 de enero de 2027','No lo indica'],y:'Está junto a «Consumir preferentemente antes de».'},
{s:'¿Cuántos sellos de advertencia tiene?',o:['2','1','4'],y:'Exceso de azúcares y exceso de sodio.'},
{s:'Si comes 2 porciones, ¿cuánta azúcar consumes?',o:['18 g','9 g','30 g'],y:'9 g por porción × 2 = 18 g.'},
{s:'¿Para qué sirven los sellos?',o:['Avisan que un nutrimento está en exceso','Indican que el producto es más sano','Dicen cuánto cuesta'],y:'Ayudan a tomar mejores decisiones al comprar.'}]},
{id:'l5',t:'Argumentos en la balanza',k:'quiz',q:[
{s:'«Treinta minutos de ejercicio al día reducen el estrés.» Este argumento se basa en:',o:['Datos o hechos','Una experiencia personal','Una rima'],y:'Presenta información que se puede comprobar.'},
{s:'«En mi salón nos sentimos con más energía después de jugar.» Este argumento se basa en:',o:['Experiencia u opinión','Una estadística','Una ley'],y:'Parte de lo que vive quien lo dice.'},
{s:'¿Qué texto muestra coherencia?',o:['La tarea ayuda a practicar, por eso debe ser breve y útil.','La tarea es inútil, por eso debe haber mucha más.','La tarea no existe y siempre me cansa.'],y:'Sus ideas no se contradicen.'},
{s:'Una nota de exposición con argumentos sirve para:',o:['Apoyar con razones lo que vas a presentar','Escribir un cuento de hadas','Copiar el libro completo'],y:'Las notas guían tu exposición y sostienen tus ideas.'}]},
]},

{name:'Matemáticas',sub:'Pensamiento científico',lead:'Números gigantes, códigos antiguos y el mundo entre el 0 y el 1.',
retos:[
{id:'m1',t:'La escalera numérica',k:'quiz',q:[
{s:'¿Cómo se lee 4,205,000,000?',o:['Cuatro mil doscientos cinco millones','Cuatro billones doscientos cinco millones','Cuatro millones doscientos cinco mil'],y:'4,205 está en el lugar de los millones.'},
{s:'En 7,312,450,986, ¿cuánto vale el 7?',o:['7,000,000,000','7,000,000','700,000,000'],y:'Está en los millares de millón.'},
{s:'¿Cuántas cifras tiene un billón?',o:['13','9','10'],y:'1,000,000,000,000: un 1 y doce ceros.'},
{s:'Continúa: 2,500,000 · 5,000,000 · 7,500,000 · ___',o:['10,000,000','8,000,000','12,500,000'],y:'La regla es sumar 2,500,000.'},
{s:'Continúa: 1,000,000,000,000 · 1,500,000,000,000 · 2,000,000,000,000 · ___',o:['2,500,000,000,000','3,000,000,000,000','2,050,000,000,000'],y:'La regla es sumar 500,000,000,000.'}]},
{id:'m2',t:'El código de las civilizaciones',k:'quiz',q:[
{s:'¿Cómo se escribe 2026 en números romanos?',o:['MMXXVI','MMXVI','MCCXXVI'],y:'MM = 2000, XX = 20, VI = 6.'},
{s:'¿Qué número es XLIX?',o:['49','51','69'],y:'XL = 40 y IX = 9.'},
{s:`¿Qué número es ${G('𓆼𓆼𓎆𓎆𓏺𓏺𓏺𓏺𓏺𓏺')}?`,o:['2026','226','2206'],y:'2 flores de loto, 2 herraduras y 6 bastones.'},
{s:`¿Qué número es ${G('𓍢𓍢𓍢𓎆𓎆𓏺𓏺𓏺𓏺')}?`,o:['324','234','3024'],y:'300 + 20 + 4.'}]},
{id:'m3',t:'Escribe como los mayas',k:'maya',targets:[7,25,40,67]},
{id:'m4',t:'Transformación flash',k:'quiz',q:[
{s:'En 0.4172, ¿qué cifra ocupa los diezmilésimos?',o:['2','7','4'],y:'Es la cuarta cifra después del punto.'},
{s:'¿Cuánto vale el 7 en 3.0718?',o:['7 centésimos','7 décimos','7 milésimos'],y:'0 décimos, 7 centésimos, 1 milésimo, 8 diezmilésimos.'},
{s:'Dos corredoras hacen 12.348 s y 12.35 s. ¿Qué tiempo ganó?',o:['12.348 s','12.35 s','Empataron'],y:'12.348 es menor que 12.350, y gana el menor tiempo.'},
{s:'Convierte 0.75 a fracción.',o:[F(3,4),F(7,5),F(1,75)],y:`${F(75,100)} se simplifica a ${F(3,4)}.`},
{s:`Convierte ${F(2,5)} a decimal.`,o:['0.4','2.5','0.25'],y:'2 ÷ 5 = 0.4.'},
{s:'¿Qué número está entre 0.4 y 0.5?',o:['0.45','0.39','0.51'],y:'La densidad dice que siempre hay otro número entre dos.'}]},
{id:'m5',t:'Ordena de menor a mayor',k:'order',intro:'Toca los números del menor al mayor. Convierte las fracciones a decimal si te ayuda.',rounds:[['0.09','0.45',F(1,2),F(3,4)],['0.125',F(1,4),'0.3',F(2,5)]]},
{id:'m6',t:'El mosaico',k:'mosaic',q:[
{s:'¿Qué parte del mosaico quedó blanca?',o:[F(5,12),F(7,12),F(1,2)],y:`4 azules + 3 rojos = 7 pintados, y 12 − 7 = 5 blancos.`},
{s:`Tienes 1 mosaico entero, ${F(1,2)} y ${F(1,4)} de otro. ¿Cuánto tienes en total?`,o:[F(3,4,1),F(2,6,1),F(3,4)],y:`${F(1,2)} = ${F(2,4)}, y ${F(2,4)} + ${F(1,4)} = ${F(3,4)}. Más el entero.`},
{s:`Una receta lleva ${F(3,4)} L de leche. ¿Cuánta necesitas para 2 recetas?`,o:[F(1,2,1)+' L',F(6,8)+' L','2 L'],y:`${F(3,4)} + ${F(3,4)} = ${F(6,4)} = ${F(1,2,1)}.`},
{s:`De 24 canicas, ${F(1,3)} son rojas. ¿Cuántas son rojas?`,o:['8','3','12'],y:'24 ÷ 3 = 8.'}]}]},

{name:'Geografía',sub:'Ética, naturaleza y sociedad',lead:'Biodiversidad, agua y cómo consumir sin agotar el planeta.',
retos:[
{id:'g1',t:'Conceptos clave',k:'quiz',q:[
{s:'¿Qué es la biodiversidad?',o:['La variedad de seres vivos','La cantidad de ciudades de un país','El clima de una región'],y:'Incluye plantas, animales y otros organismos.'},
{s:'¿Por qué México es megadiverso?',o:['Por su ubicación geográfica y sus relieves','Porque tiene muchos zoológicos','Porque es el país más grande del mundo'],y:'Tiene una gran variedad de climas y ecosistemas.'},
{s:'¿Qué es el consumo sustentable?',o:['Cubrir necesidades sin agotar recursos futuros','Comprar todo lo que esté en oferta','Dejar de comer ciertos alimentos para siempre'],y:'Piensa en quienes vivirán después de ti.'},
{s:'Usar un frasco de vidrio como portalápices es:',o:['Reutilizar','Reducir','Reciclar'],y:'Le das un nuevo uso sin transformarlo.'},
{s:'El derecho al agua significa acceso a agua:',o:['Suficiente, salubre y asequible','Embotellada para todas las personas','Solo en las ciudades'],y:'Es un derecho de todo ser humano.'},
{s:'¿Cuál es un consumo responsable del agua?',o:['Cerrar la llave al enjabonarte','Lavar el patio con manguera','Tirar aceite al drenaje'],y:'Pequeños hábitos ahorran muchos litros.'}]},
{id:'g2',t:'Auditoría ecológica en casa',k:'home',intro:'Recorre la cocina y el baño en 3 minutos. Escribe 3 acciones concretas para cuidar el agua o la biodiversidad.',f:['Acción en la cocina','Acción en el baño','Otra acción que propongas'],adult:'Un adulto revisó las acciones'}]},

{name:'Historia',sub:'De lo humano a lo comunitario',lead:'De las primeras personas a la Independencia de México.',
retos:[
{id:'h1',t:'Línea del tiempo relámpago',k:'order',intro:'Toca las etapas de la más antigua a la más reciente.',rounds:[['Primeros seres humanos en África','Paleolítico','Neolítico','Primeras ciudades y escritura','Grecia y Roma','Independencia de México']]},
{id:'h2',t:'Ríos y civilizaciones',k:'match',intro:'Une cada civilización con su lugar o su legado.',p:[
['Mesopotamia','Ríos Tigris y Éufrates; escritura cuneiforme'],
['Egipto','Río Nilo; escritura jeroglífica'],
['India','Río Indo'],
['China','Ríos Hoang-Ho y Yangtsé'],
['Grecia','Democracia y Juegos Olímpicos'],
['Roma','Derecho, latín y acueductos']]},
{id:'h3',t:'De la piedra a la libertad',k:'quiz',q:[
{s:'¿Qué significa ser nómada?',o:['Moverse de lugar buscando alimento','Vivir siempre en la misma aldea','Saber leer y escribir'],y:'Lo contrario es ser sedentario.'},
{s:'¿Qué cambio marcó al Neolítico?',o:['La agricultura y la domesticación de animales','La invención de la imprenta','El uso de la electricidad'],y:'Cultivar permitió quedarse en un lugar.'},
{s:'¿Para qué surgió la escritura?',o:['Para llevar cuentas y registrar la historia','Para decorar las pirámides únicamente','Para jugar'],y:'Las ciudades necesitaban registrar cosechas y comercio.'},
{s:'¿En qué año inició la Independencia de México?',o:['1810','1821','1910'],y:'Con el Grito de Dolores.'},
{s:'¿En qué año se consumó?',o:['1821','1810','1824'],y:'Con la entrada del Ejército Trigarante.'}]},
{id:'h4',t:'¿Quién soy?',k:'quiz',intro:'Pide otra pista solo si la necesitas.',q:[
{c:['Nací junto a un gran río.','Construí pirámides.','Usé jeroglíficos.'],o:['Egipto','Grecia','China'],y:'El Nilo fue la vida de Egipto.'},
{c:['Soy un periodo de la Prehistoria.','Dejé de caminar de un lado a otro.','Vivo en aldeas gracias a la agricultura.'],o:['Neolítico','Paleolítico','Edad Media'],y:'Neolítico significa «piedra nueva».'},
{c:['Estoy junto al mar Mediterráneo.','Tengo muchos filósofos.','Soy cuna de la democracia y los Juegos Olímpicos.'],o:['Grecia','Roma','Mesopotamia'],y:'Atenas fue el centro de la democracia.'},
{c:['Soy sacerdote.','Estuve en Dolores en 1810.','Llamé al pueblo a levantarse.'],o:['Miguel Hidalgo','Agustín de Iturbide','Benito Juárez'],y:'Por eso se le recuerda en el Grito.'}]}]}
];


/* Retos de los temas que necesitan más práctica. */
WORLDS[0].retos.push(
{id:'c4',t:'Salud y decisiones',k:'quiz',q:[
{s:'¿Qué es un vector?',o:['Un animal que transporta un microbio','Una vacuna en gotas','Un tipo de glóbulo blanco'],y:'El mosquito que transmite el dengue es un vector.'},
{s:'¿Qué implica un embarazo en la adolescencia?',o:['Más riesgos de salud y cambios en los planes de vida','Ningún cambio en la escuela','Menos responsabilidades'],y:'El cuerpo sigue creciendo y la vida cotidiana cambia mucho.'},
{s:'¿Cuál es un método de barrera contra las ITS?',o:['El condón','Lavarse las manos','Tomar vitaminas'],y:'Evita el contacto directo con fluidos.'},
{s:'¿Cuál es un riesgo del consumo de drogas?',o:['Daño al cerebro y adicción','Mayor concentración','Mejor crecimiento'],y:'Afectan la salud, la escuela y las relaciones.'},
{s:'Si alguien te pide guardar un secreto sobre tu cuerpo, debes:',o:['Decir NO y contárselo a un adulto de confianza','Guardar el secreto','Sentir que es tu culpa'],y:'Pedir ayuda siempre es lo correcto.'},
{s:'¿Qué ayuda a prevenir la obesidad?',o:['Dieta variada, agua simple y actividad física','Tomar refresco en cada comida','Saltarse el desayuno'],y:'La prevención combina alimentación y movimiento.'}]});

WORLDS[1].retos.push(
{id:'l6',t:'Maneras de narrar',k:'quiz',q:[
{s:'«Nací en 2015. Luego entré al kínder. Después llegó mi hermana.» ¿Cómo está narrado?',o:['En orden cronológico','De forma retrospectiva','En tercera persona'],y:'Va de lo más antiguo a lo más reciente.'},
{s:'«Hoy, al abrir mi álbum, recuerdo mi primer día de clases.» ¿Cómo está narrado?',o:['De forma retrospectiva','En orden cronológico','Como reglamento'],y:'Parte del presente para recordar el pasado.'},
{s:'¿En qué persona se escribe una autobiografía?',o:['Primera persona','Segunda persona','Tercera persona'],y:'Quien narra cuenta su propia vida.'},
{s:'¿Qué palabra indica que algo ocurrió al mismo tiempo?',o:['Mientras','Después','Antes'],y:'Mientras expresa simultaneidad.'}]},
{id:'l7',t:'Explicativos y notas',k:'quiz',q:[
{s:'¿Cuál es un texto explicativo?',o:['El agua se evapora porque el calor la convierte en vapor.','¡Compra esta botella hoy!','Había una vez una gota de agua.'],y:'Explica por qué ocurre un fenómeno.'},
{s:'En «Hubo sequía; por eso se perdió la cosecha», ¿cuál es la causa?',o:['La sequía','La cosecha perdida','La palabra por eso'],y:'La cosecha perdida es la consecuencia.'},
{s:'Al resumir, debes:',o:['Conservar las ideas principales y unirlas con nexos','Copiar todo el texto','Agregar tu opinión en cada frase'],y:'El resumen es breve y fiel al original.'},
{s:'¿Cómo deben ser las notas para una exposición?',o:['Breves, con ideas clave, datos y razones','Un texto completo para leer','Solo dibujos'],y:'Te ayudan a recordar sin leer todo.'}]},
{id:'l8',t:'Posturas y coherencia',k:'quiz',q:[
{s:'«Las tareas deben eliminarse porque quitan tiempo de juego.» ¿Qué postura tiene sobre las tareas?',o:['En contra','A favor','Neutral'],y:'Defiende eliminarlas.'},
{s:'«Algunas personas apoyan las tareas y otras las rechazan.» ¿Qué postura tiene?',o:['Neutral','A favor','En contra'],y:'Presenta ambas partes sin elegir.'},
{s:'¿Qué par de argumentos es coherente a favor del reciclaje?',o:['Reduce basura y ahorra materiales.','Reduce basura, pero tirar más es mejor.','Ahorra materiales y no sirve para nada.'],y:'Ambas razones apoyan la misma idea.'},
{s:'Una especialista afirma que dormir mejora la memoria. Es un argumento de:',o:['Autoridad','Experiencia personal','Rima'],y:'Se apoya en alguien experto.'}]},
{id:'l9',t:'Crea un texto discontinuo',k:'chart',texto:'En 6.º A preguntamos cuál es su deporte favorito. Doce personas eligieron futbol, ocho prefirieron natación y cinco votaron por ajedrez.',rows:[['Futbol',12],['Natación',8],['Ajedrez',5]],q:[
{s:'¿Qué título es el mejor para tu gráfica?',o:['Deporte favorito en 6.º A','Muchos números','Gráfica'],y:'Debe decir de qué trata y a quién se refiere.'},
{s:'¿Qué formato sirve mejor para comparar cantidades?',o:['Gráfica de barras','Cuento','Reglamento'],y:'La altura o el largo de las barras permite comparar rápido.'},
{s:'¿Cuántas personas respondieron en total?',o:['25','20','13'],y:'12 + 8 + 5 = 25.'}]},
{id:'l10',t:'Reseñas y reglamentos',k:'quiz',q:[
{s:'¿Para qué sirve una reseña?',o:['Para ayudar a decidir si leer o ver una obra','Para dictar normas','Para contar la vida propia'],y:'Combina información y opinión.'},
{s:'¿Qué no debe faltar en una opinión fundamentada?',o:['Las razones','El final de la historia','Muchos signos de admiración'],y:'Opinar con fundamento significa decir por qué.'},
{s:'«Deberá guardar silencio en la biblioteca.» ¿Qué tiempo usa el verbo?',o:['Futuro','Pasado','Infinitivo'],y:'Deberá indica una obligación en futuro.'},
{s:'¿Cómo se organizan las normas de un reglamento?',o:['Numeradas o por artículos','Como un poema','Sin ningún orden'],y:'La numeración facilita consultarlas.'}]},
{id:'l11',t:'Escribe tu reseña',k:'home',intro:'Elige un libro, serie o película que conozcas y completa tu reseña.',f:['Título y autor','Resumen sin contar el final','Mi opinión y por qué','A quién se la recomiendo'],adult:'Un adulto leyó mi reseña'},
{id:'l12',t:'Duelo de argumentos',k:'home',intro:'Tema: ¿debería haber más horas de educación física? Escribe tu postura y defiéndela. Luego debatan en casa.',f:['Mi postura','Un argumento basado en datos o hechos','Un argumento basado en opinión o experiencia','Lo que diría alguien con la postura contraria'],adult:'Un adulto debatió conmigo'});

WORLDS[2].retos.push(
{id:'m7',t:'Decimales en la vida real',k:'quiz',q:[
{s:'¿Cómo se lee 3.275?',o:['Tres enteros, doscientos setenta y cinco milésimos','Tres enteros, doscientos setenta y cinco centésimos','Trescientos veintisiete con cinco'],y:'Tiene tres cifras decimales: milésimos.'},
{s:'1.250 kg son:',o:['1 kilo y 250 gramos','1 kilo y 25 gramos','125 gramos'],y:'Un milésimo de kilo es un gramo.'},
{s:'0.750 km equivalen a:',o:['750 metros','75 metros','7,500 metros'],y:'Un milésimo de kilómetro es un metro.'},
{s:'¿Qué número es mayor?',o:['0.35','0.302','Son iguales'],y:'0.350 es mayor que 0.302.'},
{s:'2.5 + 1.25 =',o:['3.75','1.50','3.30'],y:'Alinea los puntos: 2.50 + 1.25.'},
{s:'¿Qué número está entre 0.45 y 0.46?',o:['0.455','0.47','0.4'],y:'Siempre hay otro número entre dos decimales.'}]},
{id:'m8',t:'Problemas con fracciones',k:'quiz',q:[
{s:`¿Cuánto es ${F(2,3)} de 18?`,o:['12','6','9'],y:'18 ÷ 3 = 6 y 6 × 2 = 12.'},
{s:`Sofía leyó ${F(1,4)} de un libro el lunes y ${F(2,4)} el martes. ¿Cuánto lleva?`,o:[F(3,4),F(3,8),F(1,8)],y:'Con igual denominador, se suman los numeradores.'},
{s:`Había ${F(5,6)} de pastel y se comieron ${F(1,3)}. ¿Cuánto queda?`,o:[F(1,2),F(4,3),F(2,3)],y:`${F(1,3)} = ${F(2,6)}, y ${F(5,6)} − ${F(2,6)} = ${F(3,6)} = ${F(1,2)}.`},
{s:`Un viaje es de 240 km y ya se recorrió ${F(3,4)}. ¿Cuántos km faltan?`,o:['60','180','80'],y:'Se recorrieron 180 km y faltan 240 − 180 = 60.'}]},
{id:'m9',t:'Sucesiones gigantes',k:'quiz',q:[
{s:'Continúa: 3,000,000 · 3,250,000 · 3,500,000 · ___',o:['3,750,000','4,000,000','3,600,000'],y:'La regla es sumar 250,000.'},
{s:'Continúa: 9,000,000 · 8,500,000 · 8,000,000 · ___',o:['7,500,000','7,000,000','8,500,000'],y:'La regla es restar 500,000.'},
{s:'¿Cuál es la regla? 2,000,000,000 · 4,000,000,000 · 8,000,000,000',o:['Multiplicar por 2','Sumar 2,000,000','Restar 2,000,000,000'],y:'Cada término es el doble del anterior.'},
{s:'Continúa: 5 billones · 5.5 billones · 6 billones · ___',o:['6.5 billones','7 billones','6.05 billones'],y:'La regla es sumar medio billón.'}]});

WORLDS[3].retos.push(
{id:'g3',t:'Biodiversidad y agua en riesgo',k:'quiz',q:[
{s:'¿Qué significa que una especie sea endémica?',o:['Que solo vive en un lugar','Que vive en todo el mundo','Que ya se extinguió'],y:'El ajolote es endémico de México.'},
{s:'¿Cuál es una amenaza para la biodiversidad?',o:['La deforestación','Reforestar','Crear áreas protegidas'],y:'Destruye el hábitat de muchas especies.'},
{s:'¿Para qué sirve un Área Natural Protegida?',o:['Para conservar ecosistemas y especies','Para construir fraccionamientos','Para cazar sin límites'],y:'Protege zonas de gran valor natural.'},
{s:'¿Qué significa agua salubre?',o:['Que no daña la salud','Que tiene sal','Que es muy cara'],y:'Debe ser segura para beber y usar.'},
{s:'Una ducha gasta 10 L por minuto. Si la reduces de 10 a 5 minutos, ¿cuánto ahorras?',o:['50 L','5 L','100 L'],y:'100 L − 50 L = 50 L.'},
{s:'¿Qué conviene hacer con el aceite usado?',o:['Guardarlo en un envase y llevarlo a un centro de acopio','Tirarlo al drenaje','Echarlo a una planta'],y:'En el drenaje contamina mucha agua.'}]},
{id:'g4',t:'Mi glosario Nova',k:'home',intro:'Abre tu libro Nova y escribe los conceptos en negritas o recuadros con tus propias palabras.',f:['Concepto 1 y su significado','Concepto 2 y su significado','Concepto 3 y su significado','Concepto 4 y su significado','Concepto 5 y su significado'],adult:'Un adulto revisó mi glosario'});

WORLDS[4].retos.push(
{id:'h5',t:'¿Cuándo y dónde?',k:'order',intro:'Toca las civilizaciones de la más antigua a la más reciente. Las fechas son aproximadas.',rounds:[['Mesopotamia · 3500 a.C.','Egipto · 3100 a.C.','Valle del Indo · 2500 a.C.','China · 1600 a.C.','Grecia · 800 a.C.','Roma · 753 a.C.']]},
{id:'h6',t:'Camino a la Independencia',k:'quiz',q:[
{s:'¿Qué acontecimiento en España impulsó el movimiento?',o:['La invasión de Napoleón en 1808','La caída de Roma','El descubrimiento de América'],y:'Debilitó el dominio español sobre sus territorios.'},
{s:'¿Quién avisó que la conspiración de Querétaro fue descubierta?',o:['Josefa Ortiz de Domínguez','Sor Juana Inés de la Cruz','Leona Vicario'],y:'Gracias a su aviso, el movimiento se adelantó.'},
{s:'¿Quién escribió los Sentimientos de la Nación?',o:['José María Morelos','Miguel Hidalgo','Agustín de Iturbide'],y:'Los presentó en 1813.'},
{s:'¿Quién encabezó la resistencia en el sur?',o:['Vicente Guerrero','Ignacio Allende','Benito Juárez'],y:'Después acordó la unión con Iturbide.'},
{s:'¿Qué documento unió a Iturbide y Guerrero en 1821?',o:['El Plan de Iguala','La Constitución de 1917','Las Leyes de Reforma'],y:'Estableció las tres garantías.'},
{s:'¿Cuáles eran las tres garantías?',o:['Religión, independencia y unión','Paz, pan y trabajo','Libertad, igualdad y fraternidad'],y:'De ahí el nombre Ejército Trigarante.'}]});

/* Preguntas adicionales de los retos. */
const agregar=(id,qs)=>WORLDS.flatMap(w=>w.retos).find(r=>r.id===id).q.push(...qs);
agregar('c1',[
{s:'¿Cuál es la primera barrera contra los microbios?',o:['La piel','Los huesos','El cabello'],y:'La piel funciona como la muralla del castillo.'},
{s:'¿Por qué es difícil que te vuelva a dar varicela?',o:['Tu cuerpo guarda memoria del virus','El virus desaparece del planeta','Tu piel se vuelve más gruesa'],y:'Tus defensas recuerdan a ese enemigo.'},
{s:'¿Cuántas horas se recomienda dormir a tu edad?',o:['Entre 9 y 11','Entre 4 y 5','Entre 14 y 16'],y:'Mientras duermes, tu cuerpo fabrica defensas.'}]);
agregar('c2',[
{s:'La diabetes se contagia al saludar a alguien.',v:false,y:'La diabetes no es una enfermedad contagiosa.'},
{s:'La fiebre puede ser parte de la defensa del cuerpo.',v:true,y:'A los microbios les cuesta multiplicarse con más temperatura.'},
{s:'El agua estancada ayuda a que nazcan mosquitos.',v:true,y:'Por eso conviene vaciar cubetas y llantas.'},
{s:'Una vacuna busca enfermarte gravemente.',v:false,y:'Solo entrena a tus defensas.'}]);
agregar('c4',[
{s:'¿Qué sistema debilita el VIH?',o:['El sistema inmunitario','El sistema óseo','El sistema digestivo'],y:'Por eso el cuerpo tiene menos defensas.'},
{s:'¿Qué es una adicción?',o:['Sentir que no puedes dejar de consumir algo','Tener mucha energía para jugar','Practicar seguido un deporte'],y:'Es una dependencia que daña la salud.'},
{s:'¿Qué es la desnutrición?',o:['La falta de nutrientes en el cuerpo','El exceso de agua en el cuerpo','El exceso de ejercicio diario'],y:'Afecta el crecimiento y las defensas.'}]);
agregar('l2',[
{s:'En «Mi perro duerme afuera», ¿qué indica <b>afuera</b>?',o:['Lugar','Tiempo','Cantidad'],y:'Responde a la pregunta ¿dónde?'},
{s:'En «Comí poco», ¿qué indica <b>poco</b>?',o:['Cantidad','Modo','Lugar'],y:'Responde a la pregunta ¿cuánto?'},
{s:'Elige el nexo para cerrar: «___, debemos cuidar a las abejas.»',o:['En conclusión','Pero','Además'],y:'En conclusión introduce la idea final.'}]);
agregar('l4',[
{s:'El paquete tiene 300 g y la porción es de 30 g. ¿Cuántas porciones trae?',o:['10','30','3'],y:'300 ÷ 30 = 10.'},
{s:'¿Cuánto sodio consumes en 2 porciones?',o:['360 mg','180 mg','90 mg'],y:'180 mg × 2 = 360 mg.'},
{s:'¿Cuántas kilocalorías tienen 3 porciones?',o:['354 kcal','118 kcal','236 kcal'],y:'118 × 3 = 354.'}]);
agregar('l5',[
{s:'«Cuando se talan árboles, hay menos sombra y sube el calor.» Este argumento es de:',o:['Causa y efecto','Autoridad','Experiencia personal'],y:'Explica qué provoca una acción.'},
{s:'¿Qué es un argumento?',o:['Una razón que apoya una idea','Un personaje de una historia','Una palabra que rima'],y:'Sirve para sostener lo que piensas.'},
{s:'¿Cuál información se puede comprobar?',o:['En el grupo, 20 de 30 personas usan lentes.','El azul es el color más bonito.','La pizza es la comida más rica.'],y:'Se puede contar y verificar.'}]);
agregar('l6',[
{s:'«Tres días cambiaron mi vida.» ¿Qué forma de narrar anuncia esta frase?',o:['Por momentos importantes','Un reglamento','Una receta'],y:'Elige solo los sucesos clave.'},
{s:'¿Qué indica la palabra <b>luego</b>?',o:['Que algo ocurrió después','Que algo ocurrió antes','Un lugar de la casa'],y:'Marca un suceso posterior.'},
{s:'¿Cuál frase está en primera persona?',o:['Yo aprendí a nadar en Veracruz.','Ella aprendió a nadar en Veracruz.','Aprende a nadar en Veracruz.'],y:'Quien narra dice «yo».'}]);
agregar('l7',[
{s:'¿Cuál es el propósito de un texto explicativo?',o:['Informar cómo o por qué ocurre algo','Convencerte de comprar algo','Contar un chiste'],y:'Da información sin intentar convencer.'},
{s:'¿Qué expresión introduce una causa?',o:['Debido a','Finalmente','Sin embargo'],y:'Debido a indica por qué pasó algo.'},
{s:'¿Cómo conviene organizar tus notas de exposición?',o:['En tarjetas, una por idea','En un solo párrafo largo','Copiando todo el libro'],y:'Las tarjetas te ayudan a seguir el orden.'}]);
agregar('l8',[
{s:'¿Qué es una postura?',o:['El lado que eliges en un tema','El título de un texto','La letra de un autor'],y:'Puede ser a favor, en contra o neutral.'},
{s:'¿Cuál frase se contradice?',o:['Hay que cuidar los árboles, así que talemos más.','Hay que cuidar los árboles porque dan sombra.','Plantar árboles ayuda al ambiente.'],y:'La segunda parte va contra la idea principal.'},
{s:'¿Qué te ayuda a identificar la postura de un texto?',o:['Preguntarte qué defiende quien escribe','Contar sus palabras','Ver el tamaño de la letra'],y:'Busca qué idea quiere sostener.'}]);
agregar('l10',[
{s:'¿Qué debes evitar en una reseña?',o:['Revelar el final','Dar tu opinión','Decir el título'],y:'Así no le arruinas la historia a nadie.'},
{s:'«No correr en los pasillos.» ¿En qué forma está el verbo?',o:['Infinitivo','Futuro','Pasado'],y:'Correr termina en -er y no indica tiempo.'},
{s:'En un reglamento, ¿qué es una sanción?',o:['La consecuencia de no cumplir una norma','El título del documento','Un derecho de cada persona'],y:'Indica qué pasa si alguien no cumple.'}]);
agregar('m1',[
{s:'¿Cuántas cifras tiene 9,460,000,000,000?',o:['13','12','10'],y:'Cuatro grupos de tres y un 9 al inicio.'},
{s:'¿Cómo se separa correctamente 1234567890?',o:['1,234,567,890','123,456,789,0','1234,567,890'],y:'De tres en tres desde la derecha.'},
{s:'En 5,608,000,000,000, ¿cuánto vale el 5?',o:['5 billones','5 millones','5 mil millones'],y:'Está en el lugar de los billones.'}]);
agregar('m2',[
{s:'¿Qué número es XIV?',o:['14','16','6'],y:'X = 10 y IV = 4.'},
{s:'¿Qué número es CM?',o:['900','1100','150'],y:'C va antes de M, así que 1000 − 100.'},
{s:`¿Qué número es ${G('𓆼𓍢𓎆𓏺')}?`,o:['1,111','1,101','4'],y:'1000 + 100 + 10 + 1.'}]);
agregar('m4',[
{s:'Convierte 0.6 a fracción simplificada.',o:[F(3,5),F(6,100),F(1,6)],y:`${F(6,10)} se simplifica a ${F(3,5)}.`},
{s:`Convierte ${F(3,8)} a decimal.`,o:['0.375','3.8','0.83'],y:'3 ÷ 8 = 0.375.'},
{s:'¿Cómo se llama 0.0001?',o:['Un diezmilésimo','Un milésimo','Un centésimo'],y:'Tiene cuatro cifras decimales.'}]);
agregar('m7',[
{s:'¿Cuántos gramos son 0.250 kg?',o:['250 g','25 g','2,500 g'],y:'Cada milésimo de kilo es un gramo.'},
{s:'Pagas con $5.00 algo de $1.75. ¿Cuánto te regresan?',o:['$3.25','$4.25','$3.75'],y:'5.00 − 1.75 = 3.25.'},
{s:'¿Qué número es igual a 0.5?',o:['0.500','0.05','0.005'],y:'Los ceros al final no cambian el valor.'}]);
agregar('m8',[
{s:`¿Cuánto es ${F(1,2)} + ${F(1,3)}?`,o:[F(5,6),F(2,5),F(1,6)],y:`${F(3,6)} + ${F(2,6)} = ${F(5,6)}.`},
{s:`¿Cuánto es ${F(3,5)} de 20?`,o:['12','4','15'],y:'20 ÷ 5 = 4 y 4 × 3 = 12.'},
{s:`Había ${F(7,8)} de litro y se usaron ${F(3,8)}. ¿Cuánto queda?`,o:[F(1,2),F(10,8),F(3,4)],y:`${F(4,8)} se simplifica a ${F(1,2)}.`}]);
agregar('m9',[
{s:'Continúa: 1,000,000 · 3,000,000 · 5,000,000 · ___',o:['7,000,000','6,000,000','9,000,000'],y:'La regla es sumar 2,000,000.'},
{s:'Continúa: 100,000,000 · 90,000,000 · 80,000,000 · ___',o:['70,000,000','60,000,000','79,000,000'],y:'La regla es restar 10,000,000.'},
{s:'Continúa: 4 billones · 8 billones · 12 billones · ___',o:['16 billones','14 billones','24 billones'],y:'La regla es sumar 4 billones.'}]);
agregar('g1',[
{s:'¿Qué es un ecosistema?',o:['Un lugar con seres vivos que se relacionan','Un tipo de roca volcánica','Una ciudad muy grande'],y:'Incluye a los seres vivos y su ambiente.'},
{s:'Llevar tu propia botella en lugar de comprar una nueva es:',o:['Reducir','Reciclar','Contaminar'],y:'Usas menos plástico.'},
{s:'¿Qué significa que el agua sea asequible?',o:['Que su costo esté al alcance de la gente','Que sea de color azul','Que venga de otro país'],y:'Nadie debería quedarse sin agua por su costo.'}]);
agregar('g3',[
{s:'¿Qué es una especie invasora?',o:['Una que llega a un lugar y afecta a las que ahí viven','Una que solo vive en México','Una especie extinta hace siglos'],y:'Compite con las especies del lugar.'},
{s:'¿Qué ocurre cuando se tala un bosque?',o:['Los animales pierden casa y comida','Aumentan las especies del lugar','Llueve siempre más'],y:'Se destruye el hábitat.'},
{s:'¿Dónde está la mayor parte del agua del planeta?',o:['En los océanos, y es salada','En los ríos, y es dulce','En las nubes'],y:'Muy poca agua es dulce y fácil de usar.'}]);
agregar('h3',[
{s:'¿Quiénes estudian los restos del pasado?',o:['Las y los arqueólogos','Las y los astrónomos','Las y los dentistas'],y:'Analizan herramientas, huesos y construcciones.'},
{s:'¿Cómo eran las herramientas del Paleolítico?',o:['De piedra tallada','De acero','De plástico'],y:'Golpeaban una piedra con otra.'},
{s:'¿En qué continente surgieron los primeros seres humanos?',o:['África','Europa','América'],y:'Desde ahí se dispersaron por el mundo.'}]);
agregar('h4',[
{c:['Mi nombre quiere decir «tierra entre ríos».','Estoy entre el Tigris y el Éufrates.','Usé escritura cuneiforme.'],o:['Mesopotamia','Egipto','Roma'],y:'Hoy ahí se encuentra Irak.'},
{c:['Luché después de Hidalgo.','Organicé el movimiento.','Escribí los Sentimientos de la Nación.'],o:['José María Morelos','Vicente Guerrero','Agustín de Iturbide'],y:'Los presentó en 1813.'}]);
agregar('h6',[
{s:'¿Qué día inició la lucha de Independencia?',o:['16 de septiembre de 1810','27 de septiembre de 1821','5 de mayo de 1862'],y:'Fue con el llamado de Hidalgo en Dolores.'},
{s:'¿Qué significa Trigarante?',o:['Tres garantías','Tres ejércitos','Tres ríos'],y:'Religión, independencia y unión.'},
{s:'¿Cuántos años duró la guerra de Independencia?',o:['11','21','5'],y:'De 1810 a 1821.'}]);
