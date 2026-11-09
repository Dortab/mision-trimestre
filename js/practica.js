/* Práctica: ubica cada pregunta en su tema, le agrega una pista y amplía los retos.
   PISTAS[reto] sigue el orden de r.q: [índice del tema, pista] o solo el índice. */
const PISTAS={
c1:[[0,'Piensa en los soldados que viajan por tu sangre.'],[0,'Busca la palabra que funciona como un arma hecha a la medida.'],[2,'Recuerda la comparación con un simulacro.'],[1,'Elige lo que ayudaría a un ejército a estar fuerte.'],[0,'Piensa en lo primero que encuentra un microbio afuera de tu cuerpo.'],[0,'Tus defensas tienen una habilidad parecida a recordar.'],[1,'Es más de lo que duerme un adulto y menos de lo que duerme un bebé.']],
c2:[2,3,7,1,3,0,3,0,3,2],
c4:[[3,'Piensa en un ser vivo que carga al microbio de un lugar a otro.'],[4,'Piensa en la salud y en los planes de vida.'],[5,'Busca algo que impida el contacto directo.'],[6,'Piensa en lo que le pasa al cerebro.'],[6,'Hay secretos que no se deben guardar.'],[7,'Elige lo que combine comida y movimiento.'],[5,'Piensa en las defensas del cuerpo.'],[6,'Piensa en alguien que ya no logra parar.'],[7,'El prefijo «des» indica falta de algo.']],
l2:[[1,'Pregúntale al verbo: ¿cuándo, dónde o cuánto?'],[1,'El modo responde a la pregunta ¿cómo?'],[4,'Una cosa provocó la otra.'],[4,'Lo segundo no era lo que se esperaba.'],[2,'Una autobiografía cuenta algo propio.'],[1,'Pregunta: ¿dónde duerme?'],[1,'Pregunta: ¿cuánto comí?'],[4,'Buscas un nexo para terminar.']],
l4:[[10,'Busca la frase «Consumir preferentemente antes de».'],[10,'Cuenta los octágonos negros.'],[10,'Multiplica lo de una porción por 2.'],[10,'Piensa en la palabra «advertencia».'],[10,'Divide el contenido neto entre la porción.'],[10,'Busca el sodio por porción y multiplica.'],[10,'Busca las kcal por porción y multiplica.']],
l5:[[6,'¿Se puede comprobar o medir?'],[6,'¿Quién lo vivió?'],[8,'Busca dos ideas que no choquen.'],[5,'Piensa en lo que necesitas recordar al exponer.'],[6,'Una cosa provoca otra.'],[6,'Piensa para qué lo usas en un debate.'],[6,'Elige algo que se pueda contar.']],
l6:[[2,'Mira si va de lo más antiguo a lo más reciente.'],[2,'Empieza con «hoy» y viaja al pasado.'],[2,'Piensa en quién cuenta la historia.'],[0,'Son dos cosas que pasan a la vez.'],[2,'Se eligen solo algunos días.'],[0,'Piensa en el orden de los sucesos.'],[2,'Busca la oración en la que alguien habla de sí.']],
l7:[[3,'Busca la que diga por qué ocurre algo.'],[3,'La causa ocurre primero.'],[4,'Un resumen usa menos palabras.'],[5,'Las notas son apuntes cortos.'],[3,'Piensa qué hace un libro de ciencias.'],[3,'Busca la expresión que responde ¿por qué?'],[5,'Una idea en cada apunte.']],
l8:[[7,'¿Quiere quitarlas o conservarlas?'],[7,'¿Elige algún lado?'],[8,'Las dos razones deben apoyar lo mismo.'],[6,'¿Quién da la información?'],[7,'Piensa en una discusión con dos bandos.'],[8,'Busca dónde la segunda parte va contra la primera.'],[7,'Piensa qué idea quiere sostener el texto.']],
l9:[[9,'El título dice de qué trata y de quién.'],[9,'Buscas comparar cantidades.'],[9,'Suma los tres votos.']],
l10:[[11,'Piensa en cuando preguntas si una película está buena.'],[11,'Fundamentar es decir por qué.'],[12,'Fíjate en la terminación del verbo.'],[12,'Piensa en artículo 1, artículo 2…'],[11,'No le arruines la sorpresa a nadie.'],[12,'El verbo termina en -ar, -er o -ir.'],[12,'Piensa en lo que pasa si alguien rompe una regla.']],
m1:[[0,'Separa por grupos y lee el grupo de los millones.'],[0,'Cuenta cuántos grupos hay a la derecha del 7.'],[0,'Es un 1 seguido de 12 ceros.'],[1,'Resta dos términos seguidos.'],[1,'Mira cuánto aumenta cada vez.'],[0,'Cuenta los grupos de tres y suma la cifra inicial.'],[0,'Empieza a separar desde la derecha.'],[0,'Cuenta cuántos grupos de tres hay después del 5.']],
m2:[[2,'M vale 1000 y X vale 10.'],[2,'Separa en XL y en IX.'],[2,'Suma flores de loto, herraduras y bastones.'],[2,'Cuenta espirales, herraduras y bastones.'],[2,'X vale 10 y después viene un número que resta.'],[2,'Un valor menor antes de uno mayor se resta.'],[2,'Hay uno de cada símbolo.']],
m4:[[4,'Cuenta cuatro lugares después del punto.'],[4,'Nombra cada posición: décimos, centésimos…'],[5,'En una carrera gana quien tarda menos.'],[8,'Escribe 75 sobre 100 y simplifica.'],[8,'Divide el número de arriba entre el de abajo.'],[6,'Busca un número mayor que 0.4 y menor que 0.5.'],[8,'Escribe 6 sobre 10 y simplifica.'],[8,'Divide 3 entre 8.'],[4,'Cuenta las cifras después del punto.']],
m7:[[7,'Tres cifras después del punto son milésimos.'],[5,'Un milésimo de kilo es un gramo.'],[5,'Un milésimo de kilómetro es un metro.'],[7,'Escribe ambos con tres cifras.'],[7,'Alinea los puntos.'],[6,'Agrega una cifra decimal.'],[5,'Mil gramos forman un kilo.'],[7,'Resta alineando los puntos.'],[7,'Los ceros al final no cambian el valor.']],
m8:[[11,'Divide entre 3 y multiplica por 2.'],[11,'Los denominadores ya son iguales.'],[11,'Convierte un tercio a sextos.'],[11,'Calcula primero lo recorrido.'],[11,'Convierte todo a sextos.'],[11,'Divide entre 5 y multiplica por 3.'],[11,'Los denominadores son iguales: resta los de arriba.']],
m9:[[1,'Resta dos términos seguidos.'],[1,'Aquí los números bajan.'],[1,'Compara cada número con el anterior.'],[1,'Piensa en medios billones.'],[1,'Mira cuánto aumenta cada vez.'],[1,'Aquí los números bajan de diez en diez millones.'],[1,'Mira cuántos billones aumenta.']],
m6:[[9,'Cuenta los cuadritos que no pintaste.'],[9,'Convierte un medio a cuartos.'],[11,'Suma tres cuartos dos veces.'],[11,'Divide 24 entre 3.']],
g1:[[0,'Piensa en la palabra «variedad».'],[0,'Piensa en dónde está México y cómo es su terreno.'],[1,'Piensa en el futuro.'],[1,'¿El objeto se transforma o solo cambia de uso?'],[3,'Busca las condiciones que debe cumplir el agua.'],[4,'Piensa en no desperdiciar.'],[0,'Piensa en seres vivos y su ambiente.'],[1,'Usas menos cosas nuevas.'],[3,'Piensa en su precio.']],
g3:[[0,'Piensa en «solo en un lugar».'],[2,'Busca lo que destruye hábitats.'],[2,'Su nombre incluye la palabra «protegida».'],[3,'Se parece a la palabra salud.'],[4,'Calcula 10 minutos y 5 minutos, y resta.'],[4,'El drenaje no es un basurero.'],[2,'Piensa en alguien que llega de otro lugar.'],[2,'Piensa en dónde viven los animales.'],[4,'Casi toda el agua no se puede beber.']],
h3:[[2,'¿Se quedaban o se movían?'],[5,'Piensa en sembrar.'],[3,'Las ciudades necesitaban llevar cuentas.'],[1,'Es el año del Grito de Dolores.'],[1,'Es el año en que entró el Ejército Trigarante.'],[0,'Excavan y estudian restos.'],[5,'Golpeaban una piedra con otra.'],[2,'Nuestra historia comenzó muy lejos de México.']],
h4:[4,5,4,1,4,1],
h6:[[1,'Francia invadió a España.'],[1,'Fue una mujer de Querétaro.'],[1,'Pertenece a la etapa de organización.'],[1,'Luchó en el sur.'],[1,'Lleva el nombre de una ciudad de Guerrero.'],[1,'Una de ellas es la independencia.'],[1,'Se recuerda cada septiembre con el Grito.'],[1,'Tri significa tres.'],[1,'Resta 1821 − 1810.']]
};
WORLDS.forEach(w=>w.retos.forEach(r=>(PISTAS[r.id]||[]).forEach((x,i)=>{[r.q[i].t,r.q[i].p]=[].concat(x)})));

agregar('c1',[
{t:1,p:'Tu cuerpo la necesita todos los días y no trae azúcar.',s:'¿Qué bebida ayuda más a tu cuerpo durante el día?',o:['Agua simple','Refresco','Bebida energética'],y:'El agua simple hidrata sin azúcar.'},
{t:1,p:'Piensa en qué pasa con el aire de un cuarto cerrado.',s:'¿Por qué ayuda ventilar tu cuarto?',o:['Porque hay menos microbios concentrados en el aire','Porque baja la luz del sol','Porque las paredes se limpian solas'],y:'El aire nuevo ayuda a dispersar los microbios.'},
{t:1,p:'No se apaga: aprovecha para trabajar.',s:'Mientras duermes, tu cuerpo:',o:['Se repara y fabrica defensas','Deja de funcionar','Pierde sus anticuerpos'],y:'Dormir bien es parte de cuidar tus defensas.'},
{t:2,p:'Recuerda para qué sirve practicar.',s:'¿Cuándo conviene recibir una vacuna?',o:['Antes de tener contacto con la enfermedad','Cuando ya estás muy grave','Solo cuando eres adulto'],y:'Así el cuerpo llega preparado.'},
{t:2,p:'Tus defensas se pusieron a trabajar.',s:'Después de una vacuna, un brazo adolorido suele ser:',o:['Una reacción común mientras las defensas practican','La señal de que falló la vacuna','La señal de una fractura'],y:'Normalmente pasa en poco tiempo.'},
{t:2,p:'Un simulacro prepara para algo que aún no ocurre.',s:'¿Por qué se compara una vacuna con un simulacro?',o:['Porque prepara sin el peligro real','Porque suena una alarma','Porque se hace en el patio'],y:'Tus defensas practican con un enemigo de prueba.'}]);
agregar('c4',[
{t:3,p:'Evita que las gotitas lleguen a otras personas o a tus manos.',s:'¿Cómo conviene cubrirte al estornudar?',o:['Con el ángulo interno del brazo','Con la mano y sin lavarla','Sin cubrirte'],y:'Tus manos quedan limpias para tocar cosas.'},
{t:4,p:'Cuidar a un bebé ocupa mucho tiempo.',s:'¿Qué puede pasar con los estudios durante un embarazo adolescente?',o:['Puede ser difícil continuarlos','Se terminan más rápido','No cambia absolutamente nada'],y:'Es difícil estudiar y cuidar a un bebé.'},
{t:4,p:'Piensa en lo que cuesta cuidar a alguien.',s:'¿Por qué un embarazo adolescente tiene implicaciones económicas?',o:['Porque un bebé necesita comida, ropa y médico','Porque las escuelas cobran menos','Porque baja el precio de la comida'],y:'Criar a un bebé cuesta mucho dinero.'},
{t:4,p:'Piensa en tus metas.',s:'¿Qué es un proyecto de vida?',o:['Pensar qué quieres estudiar, hacer y lograr','Una maqueta para Ciencias','Un programa de televisión'],y:'Te ayuda a tomar decisiones.'},
{t:4,p:'Busca a alguien que te cuide y sepa del tema.',s:'¿A quién conviene hacerle preguntas sobre sexualidad?',o:['A un adulto de confianza o a personal de salud','A un desconocido en internet','A nadie, para no incomodar'],y:'Así obtienes información confiable.'},
{t:4,p:'Es algo que se siente.',s:'¿Cuál es una implicación emocional de un embarazo adolescente?',o:['Sentir mucha preocupación','Crecer de estatura','Aprender otro idioma'],y:'La situación puede causar estrés y miedo.'},
{t:5,p:'Se relaciona con no hacer algo.',s:'En la prevención de ITS, ¿qué significa abstinencia?',o:['No tener relaciones sexuales','Tomar medicina todos los días','Usar guantes en la escuela'],y:'Es una forma de prevención.'},
{t:5,p:'Piensa en un líquido del cuerpo.',s:'Además del contacto sexual, ¿por qué vía pueden pasar algunas ITS?',o:['Por la sangre','Por saludar de mano','Por compartir un lápiz'],y:'Por eso no se comparten agujas.'},
{t:5,p:'Busca a alguien que estudió salud.',s:'¿Quién es una fuente confiable sobre las ITS?',o:['Personal de salud','Un video sin autor','Un rumor del salón'],y:'Tienen información comprobada.'},
{t:5,p:'No desaparecen por ignorarlas.',s:'¿Qué puede pasar si una ITS no se atiende?',o:['Puede dañar gravemente la salud','Siempre desaparece sola','Mejora las defensas'],y:'Por eso es importante acudir al médico.'},
{t:6,p:'Es legal para adultos, pero también afecta al cerebro.',s:'¿Cuál de estas sustancias también es una droga?',o:['El alcohol','El agua','La avena'],y:'El alcohol y el tabaco también lo son.'},
{t:6,p:'No te rindas si la primera persona no te escucha.',s:'Si un adulto de confianza no te hace caso, ¿qué debes hacer?',o:['Buscar a otro adulto de confianza','Guardar silencio','Pensar que no importa'],y:'Siempre mereces que te ayuden.'},
{t:6,p:'No des información a quien no conoces.',s:'Un desconocido en un juego te pide fotos. ¿Qué haces?',o:['No respondes y avisas a un adulto','Las mandas si te da premios','Lo guardas en secreto'],y:'Es una situación de riesgo.'},
{t:7,p:'Debe tener variedad.',s:'¿Qué contiene un plato equilibrado?',o:['Verduras y frutas, cereales y proteínas','Solo pan y refresco','Solo carne'],y:'La variedad da los nutrientes necesarios.'},
{t:7,p:'Piensa en qué necesita alguien que está creciendo.',s:'¿Qué afecta la desnutrición?',o:['El crecimiento y las defensas','El color de ojos','La letra con la que escribes'],y:'Faltan nutrientes para funcionar bien.'},
{t:7,p:'Piensa en cómo cuidar a un amigo.',s:'¿Qué hacer si alguien deja de comer por miedo a subir de peso?',o:['No burlarse y avisar a un adulto','Hacerle bromas para animarle','Decirle que coma todavía menos'],y:'Necesita apoyo de especialistas.'}]);

agregar('l2',[
{t:1,p:'Pregunta: ¿cómo hablé?',s:'En «Hablé despacio», ¿qué indica <b>despacio</b>?',o:['Modo','Lugar','Tiempo'],y:'Responde a la pregunta ¿cómo?'},
{t:1,p:'Busca la que responda ¿dónde?',s:'¿Cuál es una frase adverbial de lugar?',o:['Detrás de la casa','Hace dos días','Con mucha calma'],y:'Indica dónde ocurre algo.'},
{t:4,p:'La segunda idea va en dirección contraria.',s:'¿Qué relación expresa <b>sin embargo</b>?',o:['Contraste','Suma','Final'],y:'Presenta una idea contraria.'},
{t:4,p:'Lo segundo es consecuencia de lo primero.',s:'Elige el nexo: «Las ballenas son mamíferos; ___, respiran aire.»',o:['por eso','sin embargo','pero'],y:'Respirar aire es consecuencia de ser mamíferos.'}]);
agregar('l6',[
{t:0,p:'Busca la palabra «primero».',s:'«Primero desayuné y después me fui a la escuela.» ¿Qué pasó antes?',o:['Desayunar','Ir a la escuela','Ocurrieron al mismo tiempo'],y:'Primero indica el suceso inicial.'},
{t:0,p:'Si «ya habían salido», ¿cuál ocurrió antes?',s:'«Cuando llegué, ya habían salido.» ¿Qué ocurrió primero?',o:['Salieron','Llegué','Ocurrieron al mismo tiempo'],y:'Ya habían salido antes de que llegara.'},
{t:0,p:'Busca la que cierre una historia.',s:'¿Qué palabra indica el último suceso?',o:['Finalmente','Mientras','Antes de'],y:'Finalmente cierra una secuencia.'},
{t:0,p:'Piensa en qué ayudan a entender.',s:'¿Para qué sirven las relaciones temporales?',o:['Para ordenar los sucesos','Para describir colores','Para hacer rimas'],y:'Indican antes, durante y después.'}]);
agregar('l7',[
{t:3,p:'Piensa en quien lee y no conoce una palabra.',s:'¿Para qué sirve definir palabras difíciles en un texto explicativo?',o:['Para que se entienda mejor','Para hacerlo más largo','Para convencer de comprar'],y:'Ayuda a comprender el tema.'},
{t:3,p:'Busca el que cuente una historia inventada.',s:'¿Cuál NO es un texto explicativo?',o:['Había una vez un dragón dormilón.','La Luna cambia de fase al girar alrededor de la Tierra.','La lluvia se forma cuando el vapor se enfría.'],y:'El primero es un cuento.'},
{t:5,p:'Es la última parte de tu exposición.',s:'¿Qué conviene anotar para el cierre de una exposición?',o:['Tu propuesta o idea final','Una lista de compras','Tu número de teléfono'],y:'Ayuda a terminar con claridad.'},
{t:5,p:'Piensa en cómo se ve alguien que solo lee.',s:'¿Por qué conviene no leer un texto completo al exponer?',o:['Para hablar con naturalidad y ver a tu público','Porque leer está prohibido','Para terminar en un minuto'],y:'Las notas solo te orientan.'},
{t:5,p:'Busca la más corta y directa.',s:'¿Cuál está escrita como nota de exposición?',o:['Razón: moverse mejora la atención.','Buenos días a todas y todos, hoy quiero contarles con mucho gusto…','Había una vez un recreo muy corto.'],y:'Es breve y contiene una idea clave.'}]);
agregar('l8',[
{t:7,p:'¿Le gustan o no?',s:'«Los perros son las mejores mascotas.» ¿Qué postura tiene sobre los perros?',o:['A favor','En contra','Neutral'],y:'Los defiende.'},
{t:7,p:'Piensa en lo que ganas al escuchar a otros.',s:'¿Para qué sirve conocer otras posturas?',o:['Para responder mejor y respetar otras ideas','Para copiarlas sin pensar','Para cambiar de tema'],y:'Fortalece tus argumentos.'},
{t:8,p:'Busca la que hable de comer fruta.',s:'Idea: «Hay que comer fruta». ¿Qué razón es coherente?',o:['Aporta vitaminas.','El lunes llovió.','Mi tía canta bien.'],y:'Es la única relacionada con la idea.'},
{t:8,p:'No sirve dejar algo que no ayuda.',s:'¿Qué haces con una razón que no apoya tu idea principal?',o:['La cambias','La repites','La subrayas'],y:'Todas deben apoyar tu idea.'},
{t:8,p:'Compara la primera parte con la segunda.',s:'«Leer ayuda a aprender, así que debemos prohibirlo.» ¿Qué problema tiene?',o:['Se contradice','Tiene faltas de ortografía','Es demasiado corta'],y:'La conclusión va contra la razón.'}]);
agregar('l9',[
{t:9,p:'Tiene filas y columnas.',s:'¿Qué formato ordena datos en filas y columnas?',o:['Una tabla','Un cuento','Una carta'],y:'Facilita encontrar cada dato.'},
{t:9,p:'Antes de dibujar hay que decidir qué poner.',s:'¿Cuál es el primer paso para elaborar un texto discontinuo?',o:['Elegir la información importante','Colorear el fondo','Escribir el final'],y:'Después eliges el formato.'},
{t:9,p:'Tiene dibujos y datos.',s:'¿Qué formato combina imágenes y datos sobre un tema?',o:['Infografía','Reglamento','Autobiografía'],y:'Presenta información de forma visual.'}]);
agregar('l10',[
{t:11,p:'Es lo primero que necesita saber quien lee.',s:'¿Qué dato va al inicio de una reseña?',o:['El título y quién hizo la obra','El final de la historia','Tu dirección'],y:'Así se sabe de qué obra hablas.'},
{t:11,p:'Dice a quién le podría gustar.',s:'«Se la recomiendo a quienes aman los misterios.» ¿Qué parte de la reseña es?',o:['Recomendación','Resumen','Título'],y:'Cierra la reseña.'},
{t:11,p:'Debe contar de qué trata, pero no cómo acaba.',s:'¿Cuál resumen es adecuado para una reseña?',o:['Un niño encuentra un mapa y comienza un viaje.','Al final, descubre que todo fue un sueño.','La película dura dos horas.'],y:'No revela el final.'},
{t:12,p:'Piensa en una escuela sin reglas.',s:'¿Para qué sirve un reglamento?',o:['Para organizar la convivencia','Para contar una aventura','Para recomendar un libro'],y:'Dice qué se debe hacer y qué no.'},
{t:12,p:'El imperativo da una orden directa.',s:'¿Qué verbo está en imperativo?',o:['Levanta la mano.','Levantar la mano.','Levantó la mano.'],y:'Levanta es una orden directa.'}]);

agregar('m2',[
{t:3,p:'Es el símbolo alargado.',s:'En el sistema maya, ¿cuánto vale una raya?',o:['5','1','20'],y:'Cinco puntos equivalen a una raya.'},
{t:3,p:'Se encuentra en el mar.',s:'¿Qué símbolo maya representa el cero?',o:['La concha','El punto','La raya'],y:'Los mayas ya usaban el cero.'},
{t:3,p:'El primer piso es el de abajo.',s:'¿Cómo se leen los pisos de un número maya?',o:['De abajo hacia arriba','De arriba hacia abajo','De izquierda a derecha'],y:'El primer piso está abajo.'},
{t:3,p:'Recuerda la base de su sistema.',s:'¿Por cuánto se multiplica el segundo piso maya?',o:['20','10','5'],y:'Usaban base 20.'},
{t:3,p:'Cada raya vale 5.',s:'¿Qué número forman dos rayas y un punto?',o:['11','7','21'],y:'5 + 5 + 1 = 11.'},
{t:3,p:'El primer piso vale cero.',s:'En el segundo piso hay un punto y en el primero una concha. ¿Qué número es?',o:['20','1','10'],y:'(1 × 20) + 0 = 20.'}]);
agregar('m4',[
{t:4,p:'Es la cuarta cifra después del punto.',s:'En 5.6789, ¿qué cifra ocupa los diezmilésimos?',o:['9','6','8'],y:'6 décimos, 7 centésimos, 8 milésimos y 9 diezmilésimos.'},
{t:4,p:'Fíjate en el nombre: diez mil.',s:'Un diezmilésimo es una parte de:',o:['10,000 partes iguales','100 partes iguales','1,000 partes iguales'],y:'Es muy pequeño.'},
{t:4,p:'Los centésimos son la segunda posición.',s:'¿En qué número el 7 está en los centésimos?',o:['0.4712','0.7412','0.4172'],y:'4 décimos y 7 centésimos.'},
{t:8,p:'Escribe 125 sobre 1000 y simplifica.',s:'Convierte 0.125 a fracción simplificada.',o:[F(1,8),F(1,4),F(12,5)],y:`${F(125,1000)} se simplifica a ${F(1,8)}.`},
{t:8,p:'Divide 1 entre 2.',s:`Convierte ${F(1,2)} a decimal.`,o:['0.5','1.2','0.12'],y:'1 ÷ 2 = 0.5.'}]);
agregar('m6',[
{t:9,p:'Calcula cada color en cuadros.',s:`Un mosaico de 10 cuadros tiene ${F(1,2)} azul y ${F(1,5)} rojo. ¿Cuántos quedan blancos?`,o:['3','7','5'],y:'5 azules + 2 rojos = 7, y quedan 3.'},
{t:9,p:'Convierte un tercio a sextos.',s:`¿Cuánto es ${F(1,3)} + ${F(1,6)}?`,o:[F(1,2),F(2,9),F(2,6)],y:`${F(2,6)} + ${F(1,6)} = ${F(3,6)} = ${F(1,2)}.`},
{t:9,p:'Cuatro cuartos forman un entero.',s:`¿Cómo se escribe ${F(5,4)} con enteros y fracción?`,o:[F(1,4,1),F(5,4,1),F(4,5)],y:`${F(4,4)} es un entero y sobra ${F(1,4)}.`},
{t:9,p:'Piensa en sumar pedazos iguales.',s:'Para sumar porciones de un mosaico, las partes deben ser:',o:['Del mismo tamaño','De distinto color','Siempre cuadradas'],y:'Por eso se usan fracciones equivalentes.'}]);
agregar('m7',[
{t:5,p:'Un litro es de 1000 mL.',s:'¿Cuántos mililitros son 0.5 L?',o:['500 mL','50 mL','5 mL'],y:'La mitad de 1000 es 500.'},
{t:5,p:'Es la tercera cifra después del punto.',s:'Si la gasolina cuesta $23.459, ¿qué representa el 9?',o:['9 milésimos de peso','9 pesos','9 décimos de peso'],y:'Está en la tercera posición decimal.'},
{t:6,p:`Una mitad es 0.5 y un cuarto es 0.25.`,s:`¿Qué fracción está entre ${F(1,4)} y ${F(1,2)}?`,o:[F(3,8),F(3,4),F(1,8)],y:`${F(3,8)} = 0.375.`},
{t:6,p:'Agrega otra cifra decimal.',s:'¿Qué número está entre 0.7 y 0.71?',o:['0.705','0.72','0.69'],y:'0.700 < 0.705 < 0.710.'},
{t:6,p:'Piensa en que nunca se acaban.',s:'¿Qué significa la densidad de los números racionales?',o:['Que entre dos siempre hay otro','Que pesan mucho','Que todos terminan en cero'],y:'Siempre puedes encontrar otro número.'},
{t:6,p:'Es la mitad del camino.',s:'Para hallar un número entre dos, puedes sumarlos y dividir entre:',o:['2','10','100'],y:'Así obtienes el punto medio.'},
{t:7,p:'Es lo que está antes del punto.',s:'En 4.75, ¿cuál es la parte entera?',o:['4','75','7'],y:'Está antes del punto.'},
{t:10,p:'Compara primero los décimos.',s:'¿Cuál número es el menor?',o:['0.08','0.8','0.18'],y:'0.08 tiene 0 décimos.'},
{t:10,p:`${'Tres cuartos'} equivalen a 0.75.`,s:'¿Cuál número es el mayor?',o:[F(3,4),'0.7','0.65'],y:`${F(3,4)} = 0.75.`},
{t:10,p:'Un medio equivale a 0.5.',s:'¿Qué lista va de menor a mayor?',o:[`${F(1,2)}, 0.6, ${F(3,4)}`,`0.6, ${F(1,2)}, ${F(3,4)}`,`${F(3,4)}, 0.6, ${F(1,2)}`],y:'0.5 < 0.6 < 0.75.'},
{t:10,p:'Debes compararlos igual.',s:'¿Qué haces primero para comparar una fracción con un decimal?',o:['Pasarlos al mismo formato','Sumarlos','Escoger el más largo'],y:'Normalmente se convierten a decimal.'},
{t:10,p:'Escribe ambos con tres cifras.',s:'¿Cuál es mayor?',o:['0.35','0.305','Son iguales'],y:'0.350 es mayor que 0.305.'},
{t:10,p:'Empieza por el más grande.',s:'¿Qué lista va de mayor a menor?',o:[`0.9, 0.75, ${F(1,2)}`,`${F(1,2)}, 0.75, 0.9`,`0.75, 0.9, ${F(1,2)}`],y:`${F(1,2)} = 0.5.`}]);

agregar('g1',[
{t:0,p:'Busca el que está en México.',s:'¿Cuál es un ecosistema de México?',o:['La selva de Chiapas','La tundra de Groenlandia','La sabana africana'],y:'México tiene muchos ecosistemas.'},
{t:0,p:'Piensa en el clima de las selvas.',s:'¿Por qué suele haber más especies cerca del ecuador?',o:['Por el calor y la lluvia','Por la nieve','Por la falta de luz'],y:'Esas condiciones favorecen la vida.'},
{t:1,p:'El material se transforma.',s:'Separar vidrio para fabricar envases nuevos es:',o:['Reciclar','Reducir','Desperdiciar'],y:'El material se convierte en algo nuevo.'},
{t:1,p:'Piensa en el origen de las cosas.',s:'¿De dónde vienen los productos que compras?',o:['De recursos naturales','Solo de las tiendas','De ningún lado'],y:'Agua, árboles, metales o petróleo.'},
{t:1,p:'Lo mejor es no generar basura.',s:'¿Cuál R es la primera y más importante?',o:['Reducir','Reciclar','Reutilizar'],y:'Evita generar residuos desde el inicio.'},
{t:3,p:'Se relaciona con olor, color y sabor.',s:'¿Qué significa que el agua sea aceptable?',o:['Que tenga olor, color y sabor adecuados','Que siempre sea gratis','Que venga en botella'],y:'Es una de sus condiciones.'},
{t:3,p:'Los derechos deben ser protegidos.',s:'¿Quién debe garantizar el derecho al agua?',o:['El gobierno','Las tiendas','Cada niña o niño'],y:'Debe asegurar que todas las personas la tengan.'},
{t:3,p:'Piensa en lo que haces en casa.',s:'El agua debe alcanzar para:',o:['Beber, cocinar y asearse','Solo regar campos de golf','Solo llenar albercas'],y:'Son usos personales y domésticos.'}]);
agregar('g3',[
{t:2,p:'La palabra incluye «forestal».',s:'¿Qué significa reforestar?',o:['Plantar árboles donde se perdieron','Cortar árboles viejos','Pintar los troncos'],y:'Ayuda a recuperar el hábitat.'},
{t:2,p:'Si alguien compra, alguien captura.',s:'Comprar un loro silvestre como mascota:',o:['Fomenta su captura ilegal','Ayuda a su especie','Aumenta su población'],y:'Mejor dejarlos en su hábitat.'},
{t:4,p:'Piensa en el tiempo que corre el agua.',s:'¿Qué conviene hacer al lavarte los dientes?',o:['Cerrar la llave','Dejarla abierta','Abrir también la regadera'],y:'Evitas tirar agua limpia.'},
{t:4,p:'Se puede usar una segunda vez.',s:'¿Qué puedes hacer con el agua con la que lavaste fruta?',o:['Regar plantas','Tirarla al suelo','Mezclarla con aceite'],y:'Reutilizar también cuida el agua.'}]);

agregar('h3',[
{t:0,p:'Es cuando comienza todo.',s:'¿Con qué inicia la Prehistoria?',o:['Con los primeros seres humanos','Con la invención de la escritura','Con la Independencia'],y:'Termina con la escritura.'},
{t:0,p:'Sus pinturas son de bisontes.',s:'¿En qué país están las cuevas de Altamira?',o:['España','México','China'],y:'Tienen pinturas de hace miles de años.'},
{t:0,p:'«Pre» significa antes.',s:'¿Por qué se llama Prehistoria?',o:['Porque ocurrió antes de la escritura','Porque fue después de Roma','Porque duró un año'],y:'La Historia inicia con los registros escritos.'},
{t:0,p:'Es un estado del noroeste de México.',s:'¿Dónde hay pinturas rupestres muy antiguas en México?',o:['En Baja California','En la Ciudad de Roma','En el mar Caribe'],y:'Son parte del patrimonio de México.'},
{t:0,p:'Piensa para qué servía.',s:'¿Qué nos enseña una punta de piedra antigua?',o:['Cómo cazaban esas personas','Qué películas veían','Cómo era su teléfono'],y:'Los objetos cuentan cómo vivían.'},
{t:2,p:'Es un número con muchos miles.',s:'¿Hace cuánto apareció el Homo sapiens, aproximadamente?',o:['300,000 años','3,000 años','300 años'],y:'Es una fecha aproximada.'},
{t:2,p:'Piensa en una fogata.',s:'¿Qué les dio el dominio del fuego?',o:['Calor, luz, protección y comida cocida','Electricidad e internet','Mapas y brújulas'],y:'Fue un gran avance.'},
{t:2,p:'Piensa en un continente vecino.',s:'Según una teoría muy difundida, los humanos llegaron a América:',o:['Cruzando desde Asia','Volando desde Europa','Naciendo primero en México'],y:'Ocurrió durante la última glaciación.'},
{t:2,p:'¿Qué tenían que buscar todos los días?',s:'¿Por qué se desplazaban los primeros grupos humanos?',o:['Para encontrar alimento','Para ir a la escuela','Para visitar ciudades'],y:'Seguían a los animales y buscaban frutos.'},
{t:3,p:'Trabajaban escribiendo.',s:'¿Quiénes eran los escribas?',o:['Personas que sabían escribir','Soldados de caballería','Agricultores de río'],y:'Tenían un trabajo muy importante.'},
{t:3,p:'Piensa en las marcas sobre barro.',s:'¿Qué forma tenían las marcas cuneiformes?',o:['De cuña','De estrella','De espiral'],y:'De ahí viene su nombre.'},
{t:3,p:'Es una ciudad de Mesopotamia.',s:'¿Cuál fue una de las primeras ciudades del mundo?',o:['Uruk','Cancún','Monterrey'],y:'Estaba en Mesopotamia.'},
{t:3,p:'Es antes del 1000 a.C.',s:'¿Hacia qué fecha surgió la escritura en Mesopotamia?',o:['3500 a.C.','1500 d.C.','1810 d.C.'],y:'Es una fecha aproximada.'},
{t:3,p:'Piensa en lo que quedaba después de comer.',s:'¿Qué son los excedentes agrícolas?',o:['Comida que sobra','Herramientas de piedra','Ríos desbordados'],y:'Permitieron que surgieran otros oficios.'},
{t:4,p:'Es un país de Medio Oriente.',s:'¿Qué país actual ocupa buena parte de Mesopotamia?',o:['Irak','México','Italia'],y:'Está entre el Tigris y el Éufrates.'},
{t:4,p:'Uno de sus nombres es Yangtsé.',s:'¿Qué ríos se relacionan con China?',o:['Hoang-Ho y Yangtsé','Nilo y Amazonas','Tigris y Éufrates'],y:'Junto a ellos surgió su civilización.'},
{t:4,p:'Está junto al mar Mediterráneo.',s:'¿Qué civilización nos dejó la filosofía y los Juegos Olímpicos?',o:['Grecia','India','Mesopotamia'],y:'También la democracia.'},
{t:5,p:'Requiere estar en un solo lugar.',s:'¿En qué periodo surgió la cerámica?',o:['Neolítico','Paleolítico','Independencia'],y:'Las comunidades sedentarias guardaban alimentos.'},
{t:5,p:'«Paleo» significa antiguo.',s:'¿Qué significa Paleolítico?',o:['Piedra antigua','Piedra nueva','Ciudad grande'],y:'Es el periodo más antiguo de los dos.'},
{t:5,p:'Tenían que cuidar los cultivos.',s:'¿Por qué se volvieron sedentarios en el Neolítico?',o:['Por la agricultura','Por los coches','Por el mal clima de hoy'],y:'Sembrar exige quedarse.'}]);


agregar('l9',[{t:9,p:'Sin él, nadie sabría de qué trata.',s:'¿Para qué sirve el título de una tabla o gráfica?',o:['Para saber de qué trata','Para adornar la hoja','Para ocupar más espacio'],y:'Un título claro dice qué datos se muestran.'}]);

/* Cada lección enlaza todos los retos que tienen preguntas de su tema. */
WORLDS.forEach((w,i)=>w.retos.forEach(r=>(r.q||[]).forEach(q=>{const l=TEMAS[i][q.t].r;if(!l.includes(r.id))l.push(r.id)})));
