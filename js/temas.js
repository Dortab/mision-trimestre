/* Lecciones: un elemento por cada tema del temario, en el mismo orden del PDF.
   t: tema, e: párrafos de la explicación, x: ejemplos, k: lo más importante, r: retos para practicarlo. */
const TEMAS=[
[
{t:'Características y funciones del sistema inmunitario',e:[
'Imagina que tu cuerpo es un castillo. Todos los días llegan enemigos muy pequeños que quieren entrar: virus y bacterias. El <b>sistema inmunitario</b> es el ejército que cuida ese castillo.',
'La primera muralla es tu <b>piel</b>. También ayudan los mocos y la saliva, que atrapan a muchos microbios. Si un enemigo logra pasar, entran en acción los soldados: los <b>glóbulos blancos</b>, también llamados <b>leucocitos</b>, que viajan por la sangre.',
'Cada microbio trae una especie de credencial en su superficie que se llama <b>antígeno</b>. Cuando los leucocitos la reconocen, fabrican <b>anticuerpos</b>, que son como armas hechas a la medida para ese enemigo. Lo mejor es que tu cuerpo guarda memoria: si el mismo microbio regresa, te defiendes más rápido.'],
x:['Cuando te raspas la rodilla, la herida se pone roja e hinchada. Eso pasa porque tus defensas llegaron a limpiar la zona.','La fiebre también es parte de la defensa: tu cuerpo sube la temperatura para que a los microbios les cueste trabajo multiplicarse.','Si ya te dio varicela, es muy difícil que te vuelva a dar, porque tu cuerpo recuerda a ese virus.'],k:'El antígeno es la credencial del enemigo. El anticuerpo es el arma que fabrica tu cuerpo.',r:['c1']},
{t:'Medidas de cuidado del sistema inmunológico',e:[
'Un ejército necesita descanso, comida y buen entrenamiento. A tus defensas les pasa lo mismo, y tú puedes ayudarlas con lo que haces cada día.',
'Mientras duermes, tu cuerpo se repara y fabrica defensas. A tu edad se recomienda dormir entre <b>9 y 11 horas</b>. La comida también cuenta: las frutas y verduras tienen vitaminas y minerales que tu cuerpo necesita.',
'También ayudan tomar agua simple, moverte todos los días, lavarte las manos, mantener tu cuarto ventilado y tener tus vacunas al día.'],
x:['Si te desvelas varios días seguidos jugando, es más fácil que te enfermes porque tus defensas no descansaron.','Lavarte las manos antes de comer evita que los microbios del balón o del celular lleguen a tu boca.','Cambiar un refresco por agua simple y agregar una fruta en tu lonche son cambios pequeños que sí ayudan.'],k:'Para cuidar tus defensas recuerda tres cosas: descanso, buena comida e higiene.',r:['c1','c2']},
{t:'Las vacunas',e:[
'Una vacuna es como un <b>simulacro</b>. En la escuela practican qué hacer en un temblor para saber reaccionar si ocurre uno de verdad. La vacuna hace algo parecido con tu cuerpo.',
'Le muestra a tus defensas un microbio debilitado, uno inactivo o solo un pedacito de él. Ese enemigo de práctica no puede enfermarte gravemente, pero tus leucocitos aprenden a reconocerlo y crean anticuerpos y memoria.',
'Por eso las vacunas se ponen <b>antes</b> de enfermarte. Además, cuando mucha gente está vacunada, a los microbios les cuesta trabajo pasar de una persona a otra, y así también se protege a quienes no pueden vacunarse, como los bebés muy pequeños.'],
x:['La vacuna contra el sarampión prepara a tu cuerpo por si ese virus llega algún día.','Después de una vacuna puedes sentir el brazo adolorido o un poco de cansancio. Es señal de que tus defensas están practicando.','Una persona que ya está muy enferma necesita atención médica; una vacuna no sustituye ese tratamiento.'],k:'Las vacunas previenen enfermedades. No sirven para curar a alguien que ya está grave.',r:['c1','c2']},
{t:'Transmisión de enfermedades',e:[
'Las enfermedades <b>contagiosas</b> pueden pasar de un ser vivo a otro. Los microbios usan distintos caminos para viajar, y si conoces el camino, sabes cómo bloquearlo.',
'Pueden viajar por el <b>aire</b>, en gotitas de tos o estornudos. También por <b>agua o alimentos contaminados</b>, por <b>contacto directo</b> con una persona o un objeto, y por <b>vectores</b>, que son animales que cargan al microbio de un lugar a otro, como los mosquitos.',
'No todas las enfermedades se contagian. La diabetes o la miopía, por ejemplo, no se pasan por estar cerca de alguien.'],
x:['Gripe: viaja por el aire. Se bloquea tapándote con el ángulo interno del brazo al toser.','Infección estomacal: viaja en comida o agua sucia. Se bloquea lavando alimentos y tomando agua limpia.','Dengue: lo transmite un mosquito. Se bloquea tirando el agua estancada de cubetas y llantas, donde nacen los mosquitos.'],k:'Las vías son aire, agua o alimentos, contacto directo y vectores.',r:['c2','c4']},
{t:'Implicaciones del embarazo en adolescentes',e:[
'En la adolescencia el cuerpo cambia y puede ser capaz de tener un bebé, pero eso no significa que ya esté listo. El cuerpo de una adolescente sigue creciendo y un embarazo puede traer más riesgos para su salud y para la del bebé.',
'También cambia la vida diaria. Cuidar a un bebé cuesta mucho dinero, tiempo y energía, y a veces quienes serán madre o padre dejan la escuela o el trabajo que querían.',
'Un <b>proyecto de vida</b> es pensar qué quieres estudiar, hacer y lograr. Tener información confiable y platicar con adultos de confianza ayuda a tomar buenas decisiones cuando llegue el momento.'],
x:['Salud: hay más riesgo de complicaciones durante el embarazo y el parto.','Escuela: puede ser muy difícil seguir estudiando y cuidar a un bebé al mismo tiempo.','Dinero y emociones: un bebé necesita comida, ropa y médico, y la situación puede causar mucha preocupación.'],k:'Las implicaciones son de salud, escolares, económicas y emocionales.',r:['c3','c4']},
{t:'Prevención de infecciones de transmisión sexual',e:[
'Las <b>infecciones de transmisión sexual (ITS)</b> son causadas por microbios que pasan de una persona a otra durante el contacto sexual. Algunas también pueden pasar por la sangre. Son un tema de salud y se puede hablar de ellas con respeto.',
'Algunas no dan molestias al principio, así que una persona puede tenerlas sin saberlo. Si no se atienden, pueden dañar gravemente la salud.',
'Se previenen con información correcta, con abstinencia, que significa no tener relaciones sexuales, y con <b>métodos de barrera</b> como el condón, que impide el contacto directo. También existe una vacuna contra el VPH.'],
x:['VPH: es un virus de transmisión sexual, y existe una vacuna que ayuda a prevenirlo.','VIH: es un virus que debilita el sistema inmunitario. Puede transmitirse por vía sexual o por sangre.','Si tienes una duda, lo mejor es preguntar a un adulto de confianza o a personal de salud y no creer lo primero que veas en internet.'],k:'La prevención es información, abstinencia, métodos de barrera y atención médica.',r:['c3','c4']},
{t:'Riesgos relacionados con el consumo de drogas y la violencia sexual',e:[
'Las <b>drogas</b> son sustancias que cambian cómo funciona el cerebro. El alcohol y el tabaco también lo son, y los vapeadores contienen sustancias dañinas. Tu cerebro sigue creciendo, por eso le afectan más. Pueden causar <b>adicción</b>, que es sentir que ya no puedes dejar de usarlas.',
'La <b>violencia sexual</b> ocurre cuando alguien toca, mira o pide cosas de tipo sexual sin permiso, o cuando involucra a una niña, niño o adolescente. Puede venir de un desconocido o de alguien conocido, también por internet.',
'Si eso pasa, <b>nunca es culpa de quien lo sufre</b>. Tu cuerpo es tuyo. Hay secretos que no se deben guardar, aunque te amenacen o te ofrezcan regalos: cuéntalo a un adulto de confianza, y si no te hace caso, busca a otro.'],
x:['Si alguien te ofrece un vape y dices «no, gracias, no me interesa», también estás cuidando tu cerebro.','Si un desconocido en un juego en línea te pide fotos o te pide no decirle a nadie, no respondas y avisa a un adulto.','Practica una frase corta para decir NO y piensa en dos adultos con los que puedas hablar.'],k:'Para protegerte: comunicación en casa, saber decir NO y pedir ayuda.',r:['c3','c4']},
{t:'Enfermedades relacionadas con la alimentación',e:[
'Tu cuerpo es como un coche: necesita el combustible correcto y en la cantidad adecuada. Cuando recibe demasiado o muy poco, se puede enfermar.',
'La <b>obesidad</b> es tener demasiada grasa en el cuerpo. Aumenta el riesgo de <b>diabetes</b> y de problemas del corazón. La <b>desnutrición</b> ocurre cuando el cuerpo no recibe los nutrientes que necesita, y afecta el crecimiento y las defensas.',
'La <b>anorexia</b> y la <b>bulimia</b> son trastornos de la conducta alimentaria: la persona siente un miedo muy fuerte a subir de peso y daña su salud. No son caprichos y necesitan ayuda de especialistas.'],
x:['Un refresco grande puede tener más azúcar de la recomendada para todo un día.','Un plato equilibrado tiene verduras y frutas, cereales, y leguminosas o alimentos de origen animal.','Burlarse del cuerpo de alguien puede lastimarle mucho. Comer bien es para estar sano, no para verse como alguien más.'],k:'Se previenen con dieta variada, agua simple y actividad física.',r:['c2','c3','c4']}
],
[
{t:'Sucesos y relaciones temporales en autobiografías',e:[
'Una <b>autobiografía</b> es la historia de tu vida contada por ti. Para que se entienda, quien lee necesita saber qué pasó primero y qué pasó después.',
'Las <b>relaciones temporales</b> indican si un suceso ocurrió <b>antes</b>, <b>al mismo tiempo</b> o <b>después</b> que otro. Para mostrarlo usamos palabras como: antes de, primero, mientras, al mismo tiempo, cuando, luego, después y finalmente.',
'Sin esas palabras, tu historia sería una lista de hechos sueltos. Con ellas, se convierte en un relato que se puede seguir.'],
x:['Antes: «<b>Antes de</b> mudarnos, vivía en Toluca».','Al mismo tiempo: «<b>Mientras</b> empacábamos, mi perro se escondió en una caja».','Después: «<b>Dos semanas después</b> conocí a mis nuevos amigos».'],k:'Busca las palabras que te dicen el orden de los sucesos.',r:['l3']},
{t:'Adverbios y frases adverbiales',e:[
'Un <b>adverbio</b> es una palabra que da más información sobre lo que pasa en una oración. Casi siempre acompaña al verbo y responde preguntas como ¿cuándo?, ¿dónde?, ¿cómo? o ¿cuánto?',
'Hay adverbios de <b>tiempo</b> (ayer, hoy, pronto), de <b>lugar</b> (aquí, cerca, afuera), de <b>modo</b> (bien, rápidamente) y de <b>cantidad</b> (mucho, poco, bastante).',
'Una <b>frase adverbial</b> hace el mismo trabajo, pero usa varias palabras, como «hace cinco años» o «con mucho cuidado». En una autobiografía sirven para decir cuándo y cómo ocurrieron las cosas.'],
x:['«Ayer jugué.» ¿Cuándo? Ayer: adverbio de tiempo.','«Corrí rápidamente.» ¿Cómo? Rápidamente: adverbio de modo.','«Hace cinco años aprendí a nadar con mucho miedo.» Hay dos frases adverbiales: una de tiempo y otra de modo.'],k:'Pregúntale al verbo: ¿cuándo?, ¿dónde?, ¿cómo?, ¿cuánto?',r:['l2']},
{t:'Distintas maneras de narrar sucesos autobiográficos',e:[
'Un mismo recuerdo se puede contar de varias maneras, como una película que puede empezar por el principio o por el final.',
'En el orden <b>cronológico</b> cuentas todo como ocurrió, de lo más antiguo a lo más reciente. En la forma <b>retrospectiva</b> empiezas en el presente y viajas al pasado con un recuerdo. También puedes elegir solo los <b>momentos importantes</b> de tu vida.',
'Puedes cambiar el orden, pero la autobiografía siempre se escribe en <b>primera persona</b>: yo nací, yo viví, yo sentí.'],
x:['Cronológico: «Nací en 2014. A los cinco años entré a la primaria. En cuarto me cambié de escuela».','Retrospectivo: «Hoy, al ver esta foto, recuerdo el primer día que llegué a esta escuela».','Momentos importantes: «Tres días cambiaron mi vida: cuando nació mi hermana, cuando me mudé y cuando gané el torneo».'],k:'Puede cambiar el orden, pero quien narra siempre dice «yo».',r:['l6']},
{t:'Textos explicativos',e:[
'Un <b>texto explicativo</b> sirve para que entiendas cómo funciona algo o por qué sucede. Es lo que encuentras en tu libro de ciencias o en una enciclopedia.',
'Da información real, sin intentar convencerte. Muchas veces presenta <b>causas</b> (por qué pasa algo) y <b>consecuencias</b> (qué pasa después). También define palabras difíciles y usa ejemplos, imágenes o esquemas.',
'Para reconocerlo, busca frases como: porque, debido a, por eso, como consecuencia y esto significa.'],
x:['«Los sismos ocurren porque las placas de la Tierra se mueven.» Esa es la causa.','«Como consecuencia, el suelo vibra.» Ese es el efecto.','Un texto que dice «¡Compra este casco!» no explica: intenta convencerte. Es publicidad.'],k:'Explican para informar, no para convencer.',r:['l1','l7']},
{t:'Nexos para organizar ideas en resúmenes',e:[
'Un <b>resumen</b> es decir lo más importante de un texto con menos palabras. Se quitan los detalles y se conservan las ideas principales.',
'Los <b>nexos</b> son como pegamento: unen esas ideas y muestran cómo se relacionan. Sin ellos, el resumen se oye cortado.',
'Para <b>agregar</b>: además, también. Para <b>contrastar</b>: sin embargo, pero. Para una <b>consecuencia</b>: por lo tanto, por eso. Para <b>terminar</b>: en conclusión, finalmente.'],
x:['Agregar: «Las abejas producen miel; <b>además</b>, polinizan las plantas».','Contrastar: «Son muy útiles; <b>sin embargo</b>, están en peligro».','Consecuencia: «Sin abejas hay menos frutos; <b>por lo tanto</b>, debemos protegerlas».'],k:'Ideas principales más nexos forman un buen resumen.',r:['l2','l7']},
{t:'Notas de exposición que contienen argumentos',e:[
'Cuando expones frente al grupo, no conviene leer un texto completo. Las <b>notas de exposición</b> son apuntes cortos, como un mapa que te recuerda por dónde ir.',
'Escribe el tema, las ideas principales, algún dato importante y tus <b>argumentos</b>, que son las razones que apoyan lo que dices. Usa palabras clave, no párrafos.',
'Puedes organizarlas en tarjetas: una para el inicio, otra para cada razón y otra para el cierre.'],
x:['Tarjeta 1: «Tema: recreo más largo. Saludo y por qué lo elegí».','Tarjeta 2: «Razón: moverse mejora la atención. Dato: encuesta en 6.º».','Tarjeta 3: «Cierre: propongo 10 minutos más. Preguntas».'],k:'Solo palabras clave, datos y razones, no párrafos completos.',r:['l7']},
{t:'Tipos de argumentos',e:[
'Un <b>argumento</b> es una razón que usas para apoyar lo que piensas. Si dices «quiero un perro», un argumento sería explicar por qué sería buena idea.',
'Hay varios tipos. Los de <b>datos o hechos</b> se pueden comprobar. Los de <b>autoridad</b> usan lo que dice una persona especialista. Los de <b>ejemplo</b> muestran un caso real. Los de <b>causa y efecto</b> explican qué provoca algo. Los de <b>experiencia u opinión</b> cuentan lo que tú has vivido o piensas.',
'Los mejores textos combinan varios tipos para convencer mejor.'],
x:['Datos: «El 70 % del grupo prefiere más horas de deporte».','Autoridad: «Una pediatra recomienda una hora de ejercicio al día».','Experiencia: «Yo me concentro mejor después de jugar».'],k:'Los datos se pueden comprobar. Las opiniones expresan lo que alguien piensa.',r:['l5','l12']},
{t:'Distintas posturas de textos argumentativos',e:[
'Una <b>postura</b> es el lado que eliges en un tema donde la gente no piensa igual. Es como responder: ¿tú qué opinas y por qué?',
'Un texto puede estar <b>a favor</b>, <b>en contra</b> o ser <b>neutral</b>, es decir, presentar las dos partes sin elegir ninguna.',
'Para encontrar la postura, pregúntate qué quiere lograr quien escribe. Conocer lo que piensan los demás te ayuda a responder mejor y a respetar otras ideas.'],
x:['A favor del uniforme: «Evita comparaciones por la ropa».','En contra: «No deja que cada quien se exprese».','Neutral: «Algunas personas lo apoyan por comodidad y otras lo rechazan por ser poco libre».'],k:'Pregúntate: ¿qué defiende quien escribió esto?',r:['l8','l12']},
{t:'Coherencia entre argumentos',e:[
'Algo es <b>coherente</b> cuando tiene sentido y sus partes encajan como piezas de un rompecabezas.',
'Tus argumentos son coherentes si todos apoyan la misma idea, tienen que ver con el tema y no se contradicen.',
'Después de escribir, lee cada razón y pregúntate: ¿esto ayuda a demostrar mi idea principal? Si la respuesta es no, cámbiala.'],
x:['Coherente: «Hay que cuidar el agua porque es escasa y todos la necesitamos».','Se contradice: «Hay que cuidar el agua, así que debemos lavar el coche todos los días».','No tiene relación: «Necesitamos más recreo porque mi color favorito es el azul».'],k:'Cada razón debe apoyar tu idea principal sin contradecir a las demás.',r:['l5','l8']},
{t:'Elaboración de textos discontinuos',e:[
'Un cuento se lee de corrido, de arriba abajo. Un <b>texto discontinuo</b> no: tus ojos saltan de un lugar a otro. Son las tablas, gráficas, infografías y mapas conceptuales.',
'Para hacer uno: 1) elige solo la información importante, 2) decide qué formato sirve mejor, 3) ponle un título claro, 4) escribe etiquetas para que se entienda cada parte.',
'Escoge el formato según lo que quieras mostrar: la <b>tabla</b> ordena datos, la <b>gráfica</b> compara cantidades, la <b>infografía</b> combina imágenes y datos, y el <b>mapa conceptual</b> relaciona ideas.'],
x:['«12 prefieren futbol y 8 natación» se puede pasar a una tabla o a una gráfica de barras.','Una infografía sobre el dengue tendría dibujos del mosquito, síntomas y cómo prevenirlo.','Un mapa conceptual pondría «Sistema inmunitario» arriba y líneas hacia «leucocitos» y «anticuerpos».'],k:'Una gráfica compara cantidades. Un mapa conceptual relaciona ideas.',r:['l1','l9']},
{t:'Análisis de etiquetas',e:[
'La etiqueta de un producto es como su credencial: te dice qué es y qué contiene. Saber leerla te ayuda a decidir qué comer.',
'Busca el <b>nombre</b>, la lista de <b>ingredientes</b>, el <b>contenido neto</b>, la <b>fecha de caducidad</b> y la <b>tabla nutrimental</b>, que dice cuánta azúcar, sodio o grasa tiene.',
'Los <b>sellos negros octagonales</b> avisan si tiene exceso de calorías, azúcares, grasas saturadas, grasas trans o sodio. Entre más sellos tiene un producto, más cuidado conviene tener.'],
x:['Una caja dice «porción: 30 g» y tiene 300 g. Eso significa que trae 10 porciones.','Si una porción tiene 9 g de azúcar y comes dos, consumes 18 g.','En los ingredientes, el primero de la lista es el que el producto tiene en mayor cantidad.'],k:'Antes de sacar cuentas, fíjate en el tamaño de la porción.',r:['l4']},
{t:'Utilidad de reseñas y cómo elaborarlas',e:[
'Antes de ver una película, seguro has preguntado: ¿está buena? Una <b>reseña</b> responde eso. Cuenta de qué trata una obra y da una opinión para ayudarte a decidir.',
'Para hacer una: 1) escribe el título y quién la hizo, 2) cuenta de qué trata <b>sin revelar el final</b>, 3) da tu opinión y <b>explica por qué</b>, 4) di a quién se la recomiendas.',
'Decir «está padre» no es suficiente. Una opinión fundamentada da razones: los personajes, la historia, el mensaje o lo que te hizo sentir.'],
x:['Resumen: «<i>El Principito</i> cuenta el viaje de un niño por varios planetas».','Opinión fundamentada: «Me gustó porque enseña el valor de la amistad».','Recomendación: «Se la recomiendo a quienes disfrutan las historias que te hacen pensar».'],k:'Una reseña tiene resumen y opinión con razones.',r:['l1','l10','l11']},
{t:'Características de la escritura de reglamentos',e:[
'Un <b>reglamento</b> dice qué se debe hacer y qué no en un lugar o actividad para que todos convivan bien. Lo encuentras en la escuela, en una alberca o en un juego.',
'Tiene título, normas numeradas o por artículos, derechos, obligaciones y sanciones, que son las consecuencias de no cumplir.',
'Usa un lenguaje claro y directo. Sus verbos suelen estar en <b>infinitivo</b> (respetar), <b>imperativo</b> (respeta) o <b>futuro</b> (deberá respetar).'],
x:['Infinitivo: «No correr en los pasillos».','Imperativo: «Guarda silencio en la biblioteca».','Futuro: «Artículo 3. Las y los alumnos deberán llegar a las 7:30».'],k:'Fíjate en la numeración y en la forma de los verbos.',r:['l1','l10']}
],
[
{t:'Números con más de nueve cifras',e:[
'Algunas cantidades son enormes, como la población del mundo o la distancia entre planetas. Para leerlas sin perderte, separa las cifras <b>de tres en tres, empezando por la derecha</b>.',
'Cada grupo tiene nombre: unidades, millares, millones, millares de millón y billones. Una <b>cifra</b> es cada dígito del número, y su valor depende del lugar donde esté.',
'En México, un <b>billón</b> es un millón de millones: un 1 seguido de 12 ceros. Tiene 13 cifras.'],
x:['8,000,000,000 se lee «ocho mil millones». Es más o menos la población mundial.','9,460,000,000,000 se lee «nueve billones cuatrocientos sesenta mil millones». Es parecido a los kilómetros que recorre la luz en un año.','En 7,312,450,986 el 7 vale 7,000,000,000, porque está en los millares de millón.'],k:'Separa de tres en tres desde la derecha y lee cada grupo.',r:['m1']},
{t:'Sucesiones numéricas con millones y billones',e:[
'Una <b>sucesión</b> es una fila de números que sigue una regla, como escalones siempre iguales.',
'Para descubrir la regla, compara dos números seguidos y calcula cuánto cambió. Revisa que ese cambio se repita con los demás. Después aplica la regla para encontrar el número que sigue.',
'Con números grandes, fíjate solo en la parte que cambia. Puedes pensar en «3 millones, 5 millones, 7 millones» para no perderte entre tantos ceros.'],
x:['1,000,000 · 3,000,000 · 5,000,000: la regla es sumar 2,000,000 y sigue 7,000,000.','9,000,000 · 8,500,000 · 8,000,000: la regla es restar 500,000 y sigue 7,500,000.','2 billones · 2.5 billones · 3 billones: la regla es sumar medio billón y sigue 3.5 billones.'],k:'Encuentra el cambio y comprueba que se repita.',r:['m9','m1']},
{t:'Sistema de numeración egipcio y romano',e:[
`Los <b>egipcios</b> dibujaban símbolos y sumaban todos sus valores. El orden no cambia el resultado. ${G('𓏺')} bastón = 1 · ${G('𓎆')} herradura = 10 · ${G('𓍢')} espiral = 100 · ${G('𓆼')} flor de loto = 1,000 · ${G('𓂭')} dedo = 10,000 · ${G('𓆐')} renacuajo = 100,000 · ${G('𓁨')} dios = 1,000,000.`,
'Los <b>romanos</b> usaban letras: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500 y M = 1,000.',
'Regla romana: si un número menor va <b>después</b> de uno mayor, se suma. Si va <b>antes</b>, se resta. I, X, C y M se pueden repetir hasta tres veces; V, L y D no se repiten.'],
x:[`${G('𓆼𓍢𓍢𓎆𓏺𓏺𓏺')} es 1,000 + 200 + 10 + 3 = 1,213.`,'XIV es 10 + 4 = 14. XC es 100 − 10 = 90.','MMXXVI es 2,000 + 20 + 6 = 2026.'],k:'El egipcio solo suma. El romano suma y resta.',r:['m2']},
{t:'Sistema de numeración maya',e:[
'Los mayas contaban de 20 en 20, tal vez porque tenemos 20 dedos entre manos y pies. Por eso se dice que usaban <b>base 20</b>.',
'Solo necesitaban tres símbolos: <b>punto = 1</b>, <b>raya = 5</b> y <b>concha = 0</b>. Cinco puntos se cambian por una raya.',
'Los números se escriben en <b>pisos</b> y se leen de abajo hacia arriba. Lo del primer piso se multiplica por 1, lo del segundo por 20 y lo del tercero por 400. Cada piso llega hasta 19; si te pasas, subes al siguiente.'],
x:['8 es una raya y tres puntos: 5 + 3.','25: en el segundo piso un punto (1 × 20 = 20) y en el primero una raya (5).','40: en el segundo piso dos puntos (2 × 20) y en el primero una concha (0).'],k:'Multiplica cada piso por su valor y luego suma.',r:['m3']},
{t:'Diezmilésimos y su valor posicional',e:[
'Imagina una barra de chocolate. Si la partes en 10 pedazos, cada uno es un <b>décimo</b>. Si cada décimo se parte otra vez en 10, obtienes <b>centésimos</b>. Luego vienen los <b>milésimos</b> y los <b>diezmilésimos</b>.',
'Un diezmilésimo es 1 de 10,000 partes iguales: un pedacito pequeñísimo. Se escribe 0.0001.',
`Después del punto, las posiciones son: décimos, centésimos, milésimos y diezmilésimos. Entonces, 0.0001 = ${F(1,'10,000')}.`],
x:['En 2.3456: 3 décimos, 4 centésimos, 5 milésimos y 6 diezmilésimos.','En 0.4172, el 2 está en los diezmilésimos.','En 3.0718, el 7 vale 7 centésimos, o sea 0.07.'],k:'Cuenta las posiciones empezando justo después del punto.',r:['m4']},
{t:'Cómo interpretar decimales hasta milésimos en diferentes contextos',e:[
'Los decimales están en todas partes: precios, básculas, medidas y carreras. Para entenderlos, pregúntate de qué unidad están hablando.',
'Un <b>milésimo</b> es una parte de mil. Por eso, un milésimo de kilogramo es 1 gramo, un milésimo de kilómetro es 1 metro y un milésimo de litro es 1 mililitro.',
'Los milésimos se usan cuando hace falta mucha precisión, como en las competencias, donde una diferencia muy pequeña decide quién gana.'],
x:['Dinero: en $23.50, los 50 centavos son la parte decimal.','Peso: 0.250 kg de jamón son 250 gramos.','Tiempo: en una carrera, 12.348 segundos es mejor que 12.350, porque se tardó menos.'],k:'Piensa en la unidad: mil gramos forman un kilo y mil metros, un kilómetro.',r:['m7','m4']},
{t:'Números racionales y su densidad',e:[
'Los <b>números racionales</b> son los que se pueden escribir como fracción, como la mitad, tres cuartos, o 0.25.',
'Tienen una propiedad curiosa llamada <b>densidad</b>: entre dos números racionales siempre hay otro. Y entre ese y el anterior hay otro más. ¡Nunca se acaban!',
'Una forma sencilla de encontrar uno es agregar una cifra decimal. También puedes sumar los dos números y dividir el resultado entre 2.'],
x:['Entre 0.4 y 0.5 están 0.41, 0.45 y 0.499.','Entre 0.45 y 0.46 está 0.455.',`Entre ${F(1,4)} y ${F(1,2)} está ${F(3,8)}, porque 0.25 &lt; 0.375 &lt; 0.5.`],k:'Entre dos decimales o fracciones siempre puedes encontrar otro número.',r:['m4','m7']},
{t:'Decimales',e:[
'Un número decimal tiene una <b>parte entera</b> y una <b>parte decimal</b>, separadas por un punto. En 4.75, el 4 es la parte entera y el 75 es la parte decimal.',
'Agregar ceros al final no cambia el valor: 0.5, 0.50 y 0.500 son iguales. Esto ayuda a compararlos: escribe ambos con la misma cantidad de cifras.',
'Para sumar o restar, coloca un número debajo del otro y <b>alinea los puntos</b>. Así sumas décimos con décimos y centésimos con centésimos.'],
x:['Comparar: 0.8 y 0.75 se escriben 0.80 y 0.75. Por eso 0.8 es mayor.','Sumar: 3.40 + 1.25 = 4.65.','Restar: pagas con $5.00 algo de $1.75 y te dan $3.25 de cambio.'],k:'Tener más cifras no significa valer más.',r:['m7']},
{t:'Conversión de números decimales a fraccionarios',e:[
'Un decimal y una fracción pueden representar exactamente lo mismo, como decir «mitad» o «0.5».',
'<b>De decimal a fracción:</b> escribe el número sin punto arriba. Abajo pon 1 con tantos ceros como cifras decimales haya. Después simplifica.',
'<b>De fracción a decimal:</b> divide el número de arriba entre el de abajo.'],
x:[`0.6 = ${F(6,10)} = ${F(3,5)}.`,`0.75 = ${F(75,100)} = ${F(3,4)}.`,`${F(3,8)} = 3 ÷ 8 = 0.375.`],k:'Hay tantos ceros abajo como cifras después del punto.',r:['m4']},
{t:'Sumando porciones y enteros de mosaicos',e:[
'Un mosaico es una figura dividida en partes iguales. Cada parte es una <b>porción</b>. El número de abajo de la fracción dice en cuántas partes está dividido.',
'Para sumar porciones, las partes deben ser del mismo tamaño. Si los denominadores son distintos, cámbialos por <b>fracciones equivalentes</b>, que valen lo mismo pero tienen el mismo denominador.',
`Si juntas partes suficientes para completar un mosaico, formas un <b>entero</b>. Por ejemplo, ${F(5,4)} es un entero y ${F(1,4)}.`],
x:[`En 12 cuadritos, ${F(1,3)} son 4 y ${F(1,4)} son 3. Pintaste 7 y quedan 5 blancos.`,`1 entero + ${F(1,2)} + ${F(1,4)} = 1 + ${F(2,4)} + ${F(1,4)} = ${F(3,4,1)}.`,`${F(1,2)} + ${F(3,4)} = ${F(2,4)} + ${F(3,4)} = ${F(5,4)} = ${F(1,4,1)}.`],k:'Antes de sumar, haz que todas las partes sean del mismo tamaño.',r:['m6']},
{t:'Ordenamiento de números decimales y fraccionarios',e:[
'Comparar 0.45 con un medio es como comparar precios en monedas distintas: primero debes pasarlos a la misma moneda.',
'Convierte todo a decimal dividiendo las fracciones. Luego escribe todos con la misma cantidad de cifras.',
'Compara primero los enteros, después los décimos, luego los centésimos, y sigue así hasta encontrar una diferencia.'],
x:[`0.09 &lt; 0.45 &lt; ${F(1,2)} &lt; ${F(3,4)}, porque ${F(1,2)} = 0.50 y ${F(3,4)} = 0.75.`,`0.125 &lt; ${F(1,4)} &lt; 0.3 &lt; ${F(2,5)}, porque ${F(1,4)} = 0.25 y ${F(2,5)} = 0.4.`,'0.09 es menor que 0.45, porque 0.09 tiene 0 décimos y 0.45 tiene 4.'],k:'Pasa todo a decimal y compara posición por posición.',r:['m5']},
{t:'Resolución de problemas con fracciones',e:[
'Para resolver un problema, no te lances a hacer cuentas. Primero lee con calma y pregúntate: ¿qué sé?, ¿qué me piden?, ¿qué operación necesito?',
'Para <b>sumar o restar</b> fracciones, necesitas el mismo denominador. Para calcular <b>una fracción de un número</b>, divide entre el número de abajo y multiplica por el de arriba.',
'Al terminar, comprueba si el resultado tiene sentido. Si te piden la mitad de 20, la respuesta no puede ser 50.'],
x:[`${F(2,3)} de 18: 18 ÷ 3 = 6 y 6 × 2 = 12.`,`${F(1,2)} + ${F(1,3)} = ${F(3,6)} + ${F(2,6)} = ${F(5,6)}.`,`Un viaje es de 240 km y se recorrió ${F(3,4)}: son 180 km y faltan 60.`],k:'Lee, elige la operación, resuelve y comprueba.',r:['m8','m6']}
],
[
{t:'El mundo y su biodiversidad',e:[
'<b>Biodiversidad</b> significa variedad de vida. Incluye todos los animales, plantas, hongos y microorganismos, además de los lugares donde viven, llamados <b>ecosistemas</b>.',
'Cuanto más cerca del ecuador, suele haber más especies, porque hay más calor y lluvia. Las selvas tropicales son de los lugares con más vida del planeta.',
'México es <b>megadiverso</b>: es uno de los pocos países que concentran una gran parte de las especies del mundo. Esto se debe a su ubicación y a su relieve, con montañas, costas, desiertos y selvas.'],
x:['Ecosistemas de México: selva de Chiapas, desierto de Sonora, arrecifes de Quintana Roo y bosques de Michoacán.','Una especie <b>endémica</b> solo vive en un lugar. El ajolote es endémico de México.','La vaquita marina solo vive en el norte del golfo de California.'],k:'México es megadiverso por su ubicación geográfica y su relieve.',r:['g1']},
{t:'Consumo sustentable',e:[
'Consumir es usar o comprar cosas. Todo lo que compras viene de algún recurso natural: agua, árboles, metales o petróleo.',
'El <b>consumo sustentable</b> significa cubrir lo que necesitamos hoy sin acabarnos los recursos que necesitarán las personas del futuro.',
'Una guía útil son las <b>3R</b>: <b>Reducir</b> es usar menos. <b>Reutilizar</b> es darle otro uso a algo. <b>Reciclar</b> es transformar un material para hacer algo nuevo. Antes de comprar, pregúntate: ¿de verdad lo necesito?'],
x:['Reducir: llevar tu botella en lugar de comprar una de plástico cada día.','Reutilizar: usar un frasco de vidrio como portalápices.','Reciclar: separar el papel y el vidrio para que se conviertan en nuevos productos.'],k:'Reducir va primero, porque lo mejor es no generar basura.',r:['g1','g2']},
{t:'Cuidado sustentable de la biodiversidad',e:[
'Las especies están en peligro cuando se destruye el lugar donde viven. Sus principales amenazas son la <b>deforestación</b>, la <b>contaminación</b>, la <b>caza ilegal</b> y las <b>especies invasoras</b>, que llegan a un lugar y afectan a las que ya vivían ahí.',
'Todos los seres vivos están conectados. Si desaparece una especie, otras que dependen de ella también se ven afectadas.',
'Para proteger la naturaleza existen las <b>Áreas Naturales Protegidas</b>, lugares donde se cuidan los ecosistemas. También se puede ayudar reforestando, no tirando basura y no comprando animales silvestres.'],
x:['La Reserva de la Biosfera de la Mariposa Monarca protege el bosque donde esta mariposa pasa el invierno.','Si se tala un bosque, los animales pierden casa y comida.','Comprar un loro silvestre como mascota fomenta su captura ilegal.'],k:'Si se destruye el hábitat, la especie queda en peligro.',r:['g3']},
{t:'Derecho al agua',e:[
'Sin agua no podemos vivir, por eso tener acceso a ella es un <b>derecho humano</b>: le corresponde a toda persona, sin importar dónde viva o cuánto dinero tenga.',
'El agua debe ser <b>suficiente</b>, que alcance para beber, cocinar y asearse. <b>Salubre</b>, que no dañe la salud. <b>Aceptable</b>, con olor, color y sabor adecuados. Y <b>asequible</b>, con un costo que la gente pueda pagar.',
'La ONU lo reconoció en 2010, y en México está en el <b>artículo 4.º de la Constitución</b>. El gobierno tiene que garantizarlo y nosotros debemos usar el agua con responsabilidad.'],
x:['Si en una comunidad el agua sale sucia, no se cumple que sea salubre.','Si una familia gasta casi todo su dinero en pipas, el agua no es asequible.','Si hay agua solo unas horas a la semana y no alcanza, no es suficiente.'],k:'Agua suficiente, salubre, aceptable y asequible para todas las personas.',r:['g1','g3']},
{t:'Consumo responsable del agua',e:[
'Parece que hay mucha agua en el planeta, pero casi toda es salada. Solo una parte muy pequeña es dulce y fácil de usar.',
'Por eso cada acción cuenta. Consumir con responsabilidad significa usar solo lo necesario y no contaminarla.',
'Puedes tomar duchas cortas, cerrar la llave mientras te enjabonas, avisar si hay fugas, reutilizar agua para las plantas y no tirar aceite ni basura al drenaje.'],
x:['Una regadera que gasta 10 litros por minuto usa 100 litros en 10 minutos y 50 en 5.','Cerrar la llave al lavarte los dientes evita tirar agua limpia.','El agua que usas para lavar frutas se puede aprovechar para regar plantas.'],k:'Da acciones concretas, no solo digas «cuidar el agua».',r:['g2','g3']},
{nota:true,t:'Conceptos clave del libro Nova',e:[
'Tu temario dice que debes estudiar todos los conceptos clave marcados en el libro <b>Nova Ética, naturaleza y sociedad</b>.',
'Busca en tu libro las palabras en negritas y los recuadros. Léelos con calma y pregúntate si podrías explicárselos a alguien más pequeño.',
'Escríbelos en tu glosario con tus propias palabras. No los copies: cuando los explicas a tu manera, los recuerdas mejor.'],
x:['Concepto: ecosistema. Con tus palabras: el lugar donde viven unos seres vivos y cómo se relacionan.','Concepto: recurso natural. Con tus palabras: algo de la naturaleza que usamos, como el agua o la madera.','Si no entiendes una palabra, pide que te ayuden a buscar un ejemplo.'],k:'Explica cada concepto con tus propias palabras.',r:['g4']}
],
[
{t:'Prehistoria',e:[
'La <b>Prehistoria</b> es la etapa más larga de la humanidad. Empieza con los primeros seres humanos y termina cuando se inventa la escritura.',
'Como en ese tiempo nadie escribía, la conocemos por los objetos que dejaron: herramientas, huesos, fogatas y pinturas en cuevas. Quienes estudian esos restos se llaman <b>arqueólogos</b>.',
'Se divide en periodos. Dos de los más importantes son el <b>Paleolítico</b> y el <b>Neolítico</b>.'],
x:['Las cuevas de Altamira, en España, tienen pinturas de bisontes hechas hace miles de años.','En Baja California, en México, también hay pinturas rupestres muy antiguas.','Una punta de piedra encontrada en una excavación nos dice cómo cazaban esas personas.'],k:'La invención de la escritura marca el fin de la Prehistoria.',r:['h3','h1']},
{t:'Independencia de México',e:[
'Durante 300 años, México fue la Nueva España y estaba gobernada por España. Había mucha desigualdad. Además, llegaron ideas de libertad y, en 1808, Napoleón invadió España. Todo eso impulsó el deseo de cambio.',
'<b>Inicio:</b> el 16 de septiembre de 1810, el cura Miguel Hidalgo llamó al pueblo en Dolores. Josefa Ortiz de Domínguez había avisado que la conspiración fue descubierta. <b>Organización:</b> José María Morelos escribió los <i>Sentimientos de la Nación</i>.',
'<b>Resistencia:</b> Vicente Guerrero siguió luchando en el sur. <b>Consumación:</b> Guerrero y Agustín de Iturbide se unieron con el Plan de Iguala, y el 27 de septiembre de 1821 el Ejército Trigarante entró a la Ciudad de México.'],
x:['Trigarante quiere decir «tres garantías»: religión, independencia y unión.','El Grito se recuerda cada año la noche del 15 de septiembre.','La lucha duró 11 años: de 1810 a 1821.'],k:'Inició el 16 de septiembre de 1810 y se consumó el 27 de septiembre de 1821.',r:['h3','h4','h6']},
{t:'Los primeros seres humanos',e:[
'Nuestra historia comenzó en <b>África</b>. Hace unos 300,000 años apareció el <i>Homo sapiens</i>, la especie a la que pertenecemos.',
'Eran <b>nómadas</b>: no tenían un hogar fijo y se movían siguiendo a los animales y buscando frutos. Vivían en grupos, porque juntos era más fácil sobrevivir.',
'Poco a poco se dispersaron por todo el planeta. Lo contrario de nómada es <b>sedentario</b>, alguien que se queda a vivir en un lugar.'],
x:['Si un grupo se acababa la comida de un valle, caminaba hacia otro.','Una teoría muy difundida dice que llegaron a América cruzando desde Asia durante la última glaciación.','Dominar el fuego les dio calor, luz, protección y comida cocida.'],k:'Surgieron en África y eran nómadas.',r:['h1','h3']},
{t:'La invención de la escritura y las primeras ciudades',e:[
'Cuando las personas aprendieron a cultivar, algunas veces sobraba comida. Ya no todos tenían que buscar alimento, así que surgieron otros oficios. Las aldeas crecieron y se convirtieron en <b>ciudades</b>, con gobernantes, sacerdotes y comerciantes.',
'Tanta actividad era difícil de recordar. ¿Quién debía qué? ¿Cuántos costales había? Por eso, hacia el 3500 a.C., en <b>Mesopotamia</b>, se inventó la escritura <b>cuneiforme</b>, hecha con marcas en forma de cuña sobre tablillas de barro.',
'En <b>Egipto</b> surgió la escritura <b>jeroglífica</b>, que usaba dibujos. Con la escritura termina la Prehistoria y comienza la Historia.'],
x:['Uruk, en Mesopotamia, fue una de las primeras ciudades del mundo.','Las primeras tablillas servían sobre todo para llevar cuentas, como una libreta de tienda.','Los escribas eran las personas que sabían escribir y tenían un trabajo muy importante.'],k:'Cuneiforme: Mesopotamia. Jeroglífica: Egipto.',r:['h3','h4']},
{t:'Ubicación temporal y espacial de las civilizaciones agrícolas de Oriente y del Mediterráneo',e:[
'Ubicar una civilización es responder dos preguntas: <b>¿dónde?</b> y <b>¿cuándo?</b> Las primeras crecieron junto a grandes ríos, porque necesitaban agua para sembrar.',
'<b>Oriente:</b> Mesopotamia, entre los ríos Tigris y Éufrates, donde hoy está Irak. Egipto, junto al Nilo. India, junto al Indo. China, junto al Hoang-Ho y al Yangtsé.',
'<b>Mediterráneo:</b> Grecia, que nos dejó la democracia, la filosofía y los Juegos Olímpicos, y Roma, que nos dejó el derecho, el latín y los acueductos. Aparecieron después que las de Oriente.'],
x:['Antes de Cristo los años cuentan al revés: el 3500 a.C. es más antiguo que el 800 a.C.','Orden aproximado: Mesopotamia, Egipto, Valle del Indo, China, Grecia y Roma.','Mesopotamia quiere decir «tierra entre ríos». ¡El nombre te dice dónde está!'],k:'Las de Oriente nacieron junto a ríos y son más antiguas que Grecia y Roma.',r:['h2','h5']},
{t:'Periodo Neolítico y Paleolítico',e:[
'<b>Paleolítico</b> significa «piedra antigua». Las personas eran nómadas, cazaban, pescaban y recolectaban. Hacían herramientas de <b>piedra tallada</b>, golpeando una piedra con otra, y aprendieron a usar el fuego.',
'<b>Neolítico</b> significa «piedra nueva». Aquí ocurrió un gran cambio: descubrieron la <b>agricultura</b> y la <b>domesticación de animales</b>. Como tenían que cuidar sus cultivos, se quedaron en un lugar y se volvieron <b>sedentarios</b>.',
'También aprendieron a pulir la piedra, a hacer cerámica y a tejer. Primero fue el Paleolítico y después el Neolítico.'],
x:['Paleolítico: seguir a una manada para conseguir comida.','Neolítico: sembrar trigo o maíz y esperar a la cosecha.','Domesticar es criar animales para que convivan con las personas, como ovejas, cabras o perros.'],k:'Paleolítico: nómadas y piedra tallada. Neolítico: agricultura y sedentarismo.',r:['h1','h3','h4']}
],
];
