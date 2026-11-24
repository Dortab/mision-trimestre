/* Contenido del 2.º trimestre de 6.º de primaria. Basado en los índices de Universo Luca 6 y Nova 6
   y en el Programa Sintético de la Fase 5 (SEP). En cada pregunta, la primera opción es la correcta. */
const T2_MUNDOS=[];
T2_MUNDOS.push({name:'Ciencias',sub:'Pensamiento científico',lead:'Los seres vivos, el aire que respiras y la energía que usas están conectados. Descubre cómo cuidarlos.',temas:[
{t:'Funciones vitales de los seres vivos',c:'Funciones vitales',e:[
'Un perro, un árbol, un hongo y tú tienen algo en común: todos son <b>seres vivos</b>. Eso significa que cumplen tres <b>funciones vitales</b>: nutrición, relación y reproducción.',
'La <b>nutrición</b> es obtener alimento y energía. Las plantas fabrican su alimento con luz del sol, agua y dióxido de carbono; los animales tienen que comer a otros seres vivos. La <b>relación</b> es darse cuenta de lo que pasa alrededor y responder: una planta gira hacia la luz y un gato huye de un ruido fuerte.',
'La <b>reproducción</b> es formar nuevos seres parecidos a uno mismo. Gracias a ella las especies no desaparecen. Una piedra no se nutre, no responde y no se reproduce: por eso no está viva.'],
x:['Cuando tienes hambre y comes, cumples la función de nutrición. Cuando quitas la mano de algo caliente, la de relación.','Un frijol que germina en un algodón húmedo se nutre, crece hacia la luz y, cuando sea planta, dará nuevas semillas.'],
k:'Todo ser vivo se nutre, se relaciona con su entorno y se reproduce.',
q:[{s:'¿Cuáles son las tres funciones vitales?',o:['Nutrición, relación y reproducción','Respiración, juego y sueño','Crecimiento, color y tamaño'],y:'Las cumplen todos los seres vivos.',p:'Una es comer, otra es responder y otra es tener crías.'},
{s:'Una planta que crece inclinada hacia la ventana está cumpliendo la función de:',o:['Relación','Reproducción','Nutrición'],y:'Responde a un estímulo: la luz.',p:'Está respondiendo a algo de su entorno.'},
{s:'¿Cómo obtienen su alimento las plantas?',o:['Lo fabrican con luz, agua y dióxido de carbono','Comen insectos todos los días','Lo toman de las piedras'],y:'Este proceso se llama fotosíntesis.',p:'Necesitan el sol.'},
{s:'¿Por qué una piedra no es un ser vivo?',o:['Porque no se nutre, no responde ni se reproduce','Porque es dura','Porque no tiene color'],y:'Le faltan las tres funciones vitales.',p:'Revisa las tres funciones.'}],
v:[{s:'Los hongos son seres vivos.',v:true,y:'Se nutren, responden a su entorno y se reproducen.'},
{s:'La reproducción sirve para que las especies no desaparezcan.',v:true,y:'Así nacen nuevos individuos.'}],
ex:[{s:'Cuando un gato huye de un perro, ¿qué función vital realiza?',o:['Relación','Nutrición','Reproducción'],y:'Responde a un estímulo de su entorno.'},
{s:'¿Qué función vital permite que nazcan nuevos individuos?',o:['Reproducción','Relación','Nutrición'],y:'Gracias a ella las especies continúan.'}]},

{t:'¿Cómo interactúan los componentes del medioambiente?',c:'Componentes del medioambiente',e:[
'El medioambiente tiene dos tipos de componentes. Los <b>bióticos</b> son los seres vivos: plantas, animales, hongos y microorganismos. Los <b>abióticos</b> no tienen vida: agua, aire, suelo, luz del sol y temperatura.',
'Todos se necesitan entre sí. Las plantas usan la luz, el agua y el suelo para crecer; los animales comen plantas o a otros animales; los hongos y las bacterias descomponen los restos y regresan nutrientes al suelo.',
'Por eso, si un componente cambia, los demás también. Si un río se contamina, los peces mueren y las aves que comían peces tienen que irse.'],
x:['En un bosque, la lluvia moja el suelo, los árboles crecen, las ardillas comen sus semillas y los hongos descomponen las hojas caídas.','Cuando hay sequía, se secan los pastos y los venados tienen menos alimento.'],
k:'Lo vivo (biótico) y lo no vivo (abiótico) dependen unos de otros.',
q:[{s:'¿Cuál es un componente abiótico?',o:['La luz del sol','Un hongo','Una lombriz'],y:'No tiene vida, pero es indispensable.',p:'Busca lo que no está vivo.'},
{s:'¿Cuál es un componente biótico?',o:['Una bacteria','El agua','El suelo'],y:'Las bacterias son seres vivos muy pequeños.',p:'Bio significa vida.'},
{s:'¿Qué papel tienen los hongos y las bacterias en el ambiente?',o:['Descomponen restos y regresan nutrientes al suelo','Producen la luz del sol','Calientan el aire'],y:'Son los recicladores de la naturaleza.',p:'Piensa en las hojas que se pudren.'},
{s:'Si un río se contamina, ¿qué puede pasar?',o:['Mueren peces y se afectan los animales que los comen','Solo se afecta el agua','Las plantas crecen más rápido'],y:'Un cambio afecta a toda la cadena.',p:'Todo está conectado.'}],
v:[{s:'El suelo es un componente biótico.',v:false,y:'Es abiótico, aunque en él viven muchos seres.'},
{s:'Un cambio en el agua puede afectar a los animales de un lugar.',v:true,y:'Los componentes se relacionan entre sí.'}],
ex:[{s:'¿Qué grupo contiene solo componentes abióticos?',o:['Agua, aire y temperatura','Pino, agua y conejo','Hongo, suelo y águila'],y:'Ninguno de los tres tiene vida.'},
{s:'Los árboles necesitan agua y luz para crecer. Esto muestra que:',o:['Lo biótico depende de lo abiótico','Los árboles no son seres vivos','El agua es un ser vivo'],y:'Los componentes interactúan.'}]},

{t:'Acciones que favorecen el cuidado del medioambiente',c:'Cuidar el medioambiente',e:[
'Cuidar el medioambiente no es solo trabajo de los gobiernos: muchas acciones pequeñas, hechas todos los días por millones de personas, hacen una gran diferencia.',
'Una regla fácil de recordar es <b>reducir, reutilizar y reciclar</b>. Reducir es usar menos (por ejemplo, menos bolsas de plástico). Reutilizar es darle otro uso a las cosas. Reciclar es separar la basura para que sus materiales se transformen en productos nuevos.',
'También ayudan cerrar la llave mientras te enjabonas, apagar la luz al salir, caminar o usar bicicleta en trayectos cortos, sembrar árboles y no tirar basura en la calle, porque termina en coladeras, ríos y mares.'],
x:['Llevar tu propia botella de agua a la escuela reduce el uso de botellas de plástico.','Separar la basura en orgánica e inorgánica permite hacer composta con las cáscaras y reciclar el resto.'],
k:'Reducir, reutilizar y reciclar: en ese orden, porque lo mejor es no generar basura.',
q:[{s:'¿Qué significa reducir?',o:['Usar menos cosas y generar menos basura','Darle otro uso a un objeto','Transformar materiales en otros nuevos'],y:'Es la acción más importante de las tres.',p:'Reducir es hacer algo más pequeño.'},
{s:'Usar un frasco de mermelada vacío como portalápices es:',o:['Reutilizar','Reciclar','Reducir'],y:'Le das otro uso sin transformarlo.',p:'El objeto no se transforma, solo cambia de uso.'},
{s:'¿Qué se puede hacer con los residuos orgánicos?',o:['Composta','Botellas nuevas','Latas'],y:'La composta sirve como abono para las plantas.',p:'Piensa en las cáscaras de fruta.'},
{s:'¿Por qué no se debe tirar basura en la calle?',o:['Porque tapa coladeras y llega a ríos y mares','Porque así se recicla sola','Porque hace crecer árboles'],y:'También provoca inundaciones.',p:'Piensa a dónde va cuando llueve.'}],
v:[{s:'Apagar la luz al salir de un cuarto ayuda al medioambiente.',v:true,y:'Se ahorra energía.'},
{s:'Reciclar es mejor que reducir.',v:false,y:'Lo mejor es no generar basura desde el principio.'}],
ex:[{s:'¿Cuál acción es un ejemplo de reducir?',o:['Llevar tu propia bolsa de tela al mercado','Separar latas para reciclar','Hacer una maceta con una llanta'],y:'Evitas usar bolsas desechables.'},
{s:'¿Qué acción ahorra agua?',o:['Cerrar la llave mientras te enjabonas','Lavar el patio con manguera','Dejar la regadera abierta'],y:'Pequeños hábitos ahorran muchos litros.'}]},

{t:'Principales problemas medioambientales',c:'Problemas ambientales',e:[
'Las actividades humanas han provocado problemas que afectan a todo el planeta. Conocerlos es el primer paso para resolverlos.',
'La <b>deforestación</b> es la tala de bosques y selvas; deja sin hogar a muchos animales y erosiona el suelo. La <b>contaminación</b> del agua, del aire y del suelo enferma a personas y animales. La <b>pérdida de biodiversidad</b> ocurre cuando desaparecen especies.',
'Además está el <b>cambio climático</b>: el planeta se calienta por los gases que liberamos al quemar combustibles. Esto provoca sequías, lluvias más fuertes y el derretimiento de los glaciares.'],
x:['Cuando se tala una selva para sembrar o construir, el jaguar y el mono araña pierden su hábitat.','Las botellas de plástico que llegan al mar pueden tardar cientos de años en degradarse y dañan a tortugas y peces.'],
k:'Deforestación, contaminación, pérdida de biodiversidad y cambio climático: casi todos los causa la actividad humana.',
q:[{s:'¿Qué es la deforestación?',o:['La tala de bosques y selvas','La limpieza de los ríos','La siembra de árboles'],y:'Destruye el hábitat de muchas especies.',p:'Forestal tiene que ver con bosques.'},
{s:'¿Qué provoca el cambio climático?',o:['Gases que se liberan al quemar combustibles','La luz de la Luna','El movimiento de los peces'],y:'Esos gases calientan el planeta.',p:'Piensa en el humo de coches y fábricas.'},
{s:'Cuando desaparecen muchas especies de un lugar, hablamos de:',o:['Pérdida de biodiversidad','Reciclaje','Fotosíntesis'],y:'Biodiversidad es la variedad de seres vivos.',p:'Diversidad es variedad.'},
{s:'¿Cuál es una consecuencia del cambio climático?',o:['Sequías y lluvias más fuertes','Que haya más glaciares','Que el mar se enfríe'],y:'El clima se vuelve más extremo.',p:'El planeta se está calentando.'}],
v:[{s:'El plástico en el mar puede dañar a las tortugas.',v:true,y:'Lo confunden con alimento o se enredan.'},
{s:'La deforestación ayuda a los animales a tener más espacio.',v:false,y:'Al contrario: pierden su hogar.'}],
ex:[{s:'¿Qué problema ocurre cuando se derriba una selva?',o:['Deforestación','Reciclaje','Composta'],y:'Además se pierde biodiversidad.'},
{s:'¿Cuál problema afecta a todo el planeta y se relaciona con el aumento de la temperatura?',o:['El cambio climático','La erosión de una calle','Un apagón'],y:'Lo provocan los gases de efecto invernadero.'}]},

{t:'El efecto invernadero',c:'Efecto invernadero',e:[
'Imagina un coche estacionado al sol con las ventanas cerradas: adentro se calienta mucho, porque el calor entra y le cuesta salir. Con la Tierra pasa algo parecido.',
'Alrededor del planeta hay una capa de gases, la <b>atmósfera</b>. Algunos de esos gases, como el <b>dióxido de carbono</b>, el <b>metano</b> y el vapor de agua, atrapan parte del calor del Sol. Eso es el <b>efecto invernadero</b>, y es natural: sin él, la Tierra sería tan fría que casi no habría vida.',
'El problema es que al quemar gasolina, carbón y gas, y al talar bosques, hemos aumentado esos gases. Ahora se atrapa <b>demasiado</b> calor y el planeta se calienta: eso es el calentamiento global.'],
x:['Un invernadero de plástico mantiene calientes a las plantas aunque afuera haga frío.','Las vacas liberan metano al digerir; la ganadería en grandes cantidades aumenta este gas.'],
k:'El efecto invernadero es natural y necesario; el problema es tener demasiados gases que atrapan calor.',
q:[{s:'¿Qué hacen los gases de efecto invernadero?',o:['Atrapan parte del calor del Sol','Producen oxígeno','Enfrían el planeta'],y:'Funcionan como una cobija.',p:'Piensa en el coche cerrado al sol.'},
{s:'¿Cuál es un gas de efecto invernadero?',o:['Dióxido de carbono','Oxígeno puro del tanque de un buzo','Helio de un globo'],y:'También el metano y el vapor de agua.',p:'Sale al quemar combustibles.'},
{s:'¿Qué pasaría si no existiera el efecto invernadero?',o:['La Tierra sería demasiado fría','La Tierra sería más caliente','No cambiaría nada'],y:'Por eso es un fenómeno necesario.',p:'Ese calor atrapado nos mantiene tibios.'},
{s:'¿Qué actividad aumenta los gases de efecto invernadero?',o:['Quemar gasolina y carbón','Sembrar árboles','Andar en bicicleta'],y:'La combustión libera dióxido de carbono.',p:'Piensa en el humo.'}],
v:[{s:'El efecto invernadero es completamente malo.',v:false,y:'Es natural; el problema es su exceso.'},
{s:'Los árboles ayudan a absorber dióxido de carbono.',v:true,y:'Lo usan para hacer fotosíntesis.'}],
ex:[{s:'El calentamiento global ocurre porque:',o:['Hay demasiados gases que atrapan el calor','La Tierra se acercó al Sol','Hay menos gases en la atmósfera'],y:'Las actividades humanas aumentaron esos gases.'},
{s:'¿A qué se parece el efecto invernadero?',o:['A un coche cerrado bajo el sol','A un refrigerador abierto','A un ventilador'],y:'El calor entra y le cuesta salir.'}]},

{t:'Contaminantes de la atmósfera',c:'Contaminantes del aire',e:[
'El aire limpio es una mezcla de gases. Cuando le agregamos sustancias dañinas, se <b>contamina</b>. Esas sustancias se llaman <b>contaminantes atmosféricos</b>.',
'Los principales son: el <b>monóxido de carbono</b>, un gas sin olor que sale del escape de los coches; los <b>óxidos de nitrógeno y de azufre</b>, que salen de fábricas y vehículos y provocan lluvia ácida; el <b>ozono</b> a nivel del suelo, que irrita los ojos; y las <b>partículas</b>, como polvo, hollín y humo.',
'Respirar aire contaminado provoca tos, irritación de ojos y enfermedades respiratorias como el asma. Por eso en las ciudades se revisa la calidad del aire y a veces se suspenden las actividades al aire libre.'],
x:['En días de contingencia ambiental se recomienda no hacer ejercicio afuera.','Quemar basura o llantas libera humo negro lleno de partículas dañinas.'],
k:'Coches, fábricas y quemas liberan gases y partículas que dañan la salud.',
q:[{s:'¿De dónde sale principalmente el monóxido de carbono?',o:['Del escape de los coches','De los árboles','De los ríos'],y:'Es un gas peligroso porque no tiene olor.',p:'Piensa en el tubo de escape.'},
{s:'¿Qué provocan los óxidos de azufre y de nitrógeno?',o:['Lluvia ácida','Más oxígeno','Arcoíris'],y:'La lluvia ácida daña bosques, lagos y edificios.',p:'Se mezclan con el agua de las nubes.'},
{s:'Respirar aire contaminado puede causar:',o:['Asma y otras enfermedades respiratorias','Miopía','Caries'],y:'Los pulmones son los más afectados.',p:'¿Qué órgano usa el aire?'},
{s:'¿Cuál acción contamina el aire?',o:['Quemar basura','Sembrar plantas','Caminar a la escuela'],y:'El humo lleva gases y partículas.',p:'Busca la que produce humo.'}],
v:[{s:'El monóxido de carbono tiene un olor muy fuerte.',v:false,y:'No tiene olor, por eso es peligroso.'},
{s:'El polvo y el hollín son contaminantes del aire.',v:true,y:'Se llaman partículas.'}],
ex:[{s:'¿Qué contaminante está formado por polvo, hollín y humo?',o:['Las partículas','El oxígeno','El vapor de agua'],y:'Pueden entrar profundo en los pulmones.'},
{s:'¿Qué se recomienda en un día de mala calidad del aire?',o:['No hacer ejercicio al aire libre','Quemar hojas secas','Usar más el coche'],y:'Así se respira menos aire contaminado.'}]},

{t:'Proyectos para cuidar el medioambiente',c:'Proyectos ambientales',e:[
'Un <b>proyecto</b> es un plan para resolver un problema paso a paso. En la escuela o en tu colonia puedes organizar uno para cuidar el ambiente.',
'Los pasos son: 1) <b>identificar el problema</b> (por ejemplo, mucha basura en el patio); 2) <b>investigar</b> sus causas; 3) <b>proponer soluciones</b> y elegir una; 4) <b>organizarse</b>: qué se necesita, quién hace qué y cuándo; 5) <b>llevarlo a cabo</b>; y 6) <b>evaluar</b> si funcionó.',
'Algunos ejemplos son un huerto escolar, una campaña para separar basura, un centro de acopio de pilas o una jornada para sembrar árboles.'],
x:['Un grupo de sexto notó que el bebedero desperdiciaba agua; investigaron, pidieron arreglarlo y pusieron carteles para cerrarlo bien.','Un huerto escolar aprovecha la composta del comedor y enseña de dónde vienen los alimentos.'],
k:'Problema, investigación, solución, organización, acción y evaluación.',
q:[{s:'¿Cuál es el primer paso de un proyecto?',o:['Identificar el problema','Evaluar los resultados','Comprar materiales'],y:'Sin un problema claro no se puede planear.',p:'Antes de resolver, hay que saber qué resolver.'},
{s:'¿Para qué sirve evaluar un proyecto?',o:['Para saber si funcionó y qué mejorar','Para empezarlo','Para elegir el problema'],y:'Es el último paso.',p:'Se hace al final.'},
{s:'¿Cuál es un ejemplo de proyecto ambiental escolar?',o:['Un huerto con composta','Un torneo de videojuegos','Una venta de dulces'],y:'Ayuda al ambiente y enseña.',p:'Busca el que cuida la naturaleza.'},
{s:'Decidir quién hace cada tarea y cuándo es parte de:',o:['Organizarse','Identificar el problema','Investigar'],y:'Un buen plan reparte el trabajo.',p:'Piensa en un calendario y responsables.'}],
v:[{s:'En un proyecto conviene investigar las causas del problema.',v:true,y:'Así se proponen mejores soluciones.'},
{s:'Un proyecto termina cuando se compran los materiales.',v:false,y:'Hay que llevarlo a cabo y evaluarlo.'}],
ex:[{s:'Ordena: ¿qué va después de proponer soluciones?',o:['Organizarse','Identificar el problema','Investigar las causas'],y:'Luego se lleva a cabo y se evalúa.'},
{s:'¿Qué proyecto ayuda a que las pilas no contaminen el suelo?',o:['Un centro de acopio de pilas','Tirarlas al bote común','Enterrarlas en el patio'],y:'Las pilas tienen sustancias tóxicas.'}]},

{t:'Los combustibles fósiles',c:'Combustibles fósiles',e:[
'El <b>petróleo</b>, el <b>carbón</b> y el <b>gas natural</b> se llaman combustibles fósiles porque se formaron hace millones de años con restos de plantas y animales que quedaron enterrados bajo mucha presión y calor.',
'Son muy útiles: de ellos salen la gasolina, el diésel, el gas de la estufa y muchos plásticos. También se queman en plantas para producir electricidad.',
'Tienen dos grandes problemas. Son <b>no renovables</b>: tardan millones de años en formarse, así que se van a acabar. Y al quemarlos liberan <b>dióxido de carbono</b> y otros contaminantes que aumentan el calentamiento global.'],
x:['La gasolina del coche y el gas LP de la estufa vienen de combustibles fósiles.','México ha extraído petróleo desde hace más de cien años, sobre todo en el Golfo de México.'],
k:'Petróleo, carbón y gas: útiles, pero no renovables y contaminantes.',
q:[{s:'¿Cuáles son combustibles fósiles?',o:['Petróleo, carbón y gas natural','Viento, sol y agua','Madera, papel y algodón'],y:'Se formaron con restos de seres vivos antiguos.',p:'Se sacan de debajo de la tierra.'},
{s:'¿Por qué se dice que son no renovables?',o:['Porque tardan millones de años en formarse','Porque nunca se acaban','Porque se fabrican en una semana'],y:'Los usamos mucho más rápido de lo que se forman.',p:'Piensa en el tiempo que tardan.'},
{s:'¿De dónde viene la gasolina?',o:['Del petróleo','Del carbón vegetal','Del agua de mar'],y:'Se obtiene al refinar el petróleo.',p:'Es un líquido negro y espeso.'},
{s:'¿Qué gas liberan al quemarse?',o:['Dióxido de carbono','Oxígeno','Helio'],y:'Es un gas de efecto invernadero.',p:'Es el mismo que exhalas.'}],
v:[{s:'Muchos plásticos se fabrican con petróleo.',v:true,y:'Por eso también son un recurso no renovable.'},
{s:'Los combustibles fósiles se formaron el año pasado.',v:false,y:'Se formaron hace millones de años.'}],
ex:[{s:'¿Por qué es un problema quemar combustibles fósiles?',o:['Liberan gases que calientan el planeta','Producen demasiada agua','Enfrían la atmósfera'],y:'Aumentan el efecto invernadero.'},
{s:'Los combustibles fósiles se formaron con:',o:['Restos de plantas y animales de hace millones de años','Basura plástica reciente','Rocas volcánicas'],y:'Por eso se llaman fósiles.'}]},

{t:'Formas de producir electricidad',c:'Producir electricidad',e:[
'La electricidad que llega a tu casa se produce en <b>centrales eléctricas</b>. En casi todas, algo hace girar una <b>turbina</b> conectada a un generador.',
'En las <b>termoeléctricas</b> se quema combustible para hacer vapor que mueve la turbina. En las <b>hidroeléctricas</b> la mueve el agua de una presa. En las <b>eólicas</b>, el viento mueve aspas gigantes. Las <b>geotérmicas</b> usan el calor del interior de la Tierra y las <b>nucleares</b>, la energía del núcleo de los átomos.',
'Los <b>paneles solares</b> son distintos: convierten la luz del sol directamente en electricidad. El sol, el viento, el agua y el calor de la Tierra son fuentes <b>renovables</b>, porque no se agotan.'],
x:['En el Istmo de Tehuantepec, Oaxaca, hay muchos parques eólicos porque ahí sopla mucho viento.','Algunas casas tienen paneles solares en el techo y pagan menos luz.'],
k:'Casi siempre algo mueve una turbina: vapor, agua o viento. Los paneles solares usan la luz directamente.',
q:[{s:'¿Qué mueve la turbina en una central hidroeléctrica?',o:['El agua de una presa','El viento','El carbón'],y:'Hidro significa agua.',p:'Hidro = agua.'},
{s:'¿Qué central usa la fuerza del viento?',o:['Eólica','Geotérmica','Termoeléctrica'],y:'Eolo era el dios griego del viento.',p:'Piensa en aspas gigantes.'},
{s:'¿Qué hacen los paneles solares?',o:['Convierten la luz del sol en electricidad','Calientan carbón','Mueven agua de una presa'],y:'No necesitan turbina.',p:'Funcionan con luz.'},
{s:'¿Cuál es una fuente renovable?',o:['El viento','El carbón','El petróleo'],y:'No se agota.',p:'Busca la que no se acaba.'}],
v:[{s:'Las centrales geotérmicas aprovechan el calor del interior de la Tierra.',v:true,y:'Geo significa tierra.'},
{s:'El petróleo es una fuente de energía renovable.',v:false,y:'Es no renovable.'}],
ex:[{s:'¿En qué central se quema combustible para producir vapor?',o:['Termoeléctrica','Eólica','Solar'],y:'El vapor mueve la turbina.'},
{s:'¿Qué grupo contiene solo fuentes renovables?',o:['Sol, viento y agua','Carbón, gas y petróleo','Sol, carbón y gas'],y:'Se renuevan de forma natural.'}]},

{t:'Implicaciones de la producción de energía eléctrica mediante carbón',c:'Electricidad con carbón',e:[
'Algunas centrales termoeléctricas queman <b>carbón</b> para calentar agua, producir vapor y mover las turbinas. Es una forma antigua y barata de producir mucha electricidad, pero tiene un costo alto para el ambiente y la salud.',
'Al quemarlo se libera mucho <b>dióxido de carbono</b>, que aumenta el calentamiento global, además de <b>óxidos de azufre</b> que causan lluvia ácida y <b>partículas</b> que dañan los pulmones de quienes viven cerca.',
'Extraer el carbón también es peligroso: las <b>minas</b> pueden derrumbarse o tener explosiones de gas, y la minería a cielo abierto destruye el paisaje. Por eso muchos países buscan sustituirlo por fuentes renovables.'],
x:['En Coahuila hay minas de carbón y centrales que lo queman para producir electricidad.','Una comunidad cerca de una central de carbón puede tener más casos de asma por el humo.'],
k:'El carbón da electricidad barata, pero contamina el aire, aumenta el calentamiento global y su extracción es peligrosa.',
q:[{s:'¿Para qué se quema carbón en una termoeléctrica?',o:['Para producir vapor que mueve las turbinas','Para enfriar el agua','Para hacer viento'],y:'El vapor gira la turbina y el generador produce electricidad.',p:'Termo significa calor.'},
{s:'¿Qué problema de salud se relaciona con el humo del carbón?',o:['Enfermedades respiratorias','Caries','Fracturas'],y:'Las partículas dañan los pulmones.',p:'Piensa en lo que se respira.'},
{s:'¿Por qué es peligrosa la minería de carbón?',o:['Puede haber derrumbes y explosiones','Porque el carbón es muy ligero','Porque se hace bajo el mar'],y:'Ha costado la vida de muchos mineros.',p:'Piensa en trabajar bajo tierra.'},
{s:'¿Qué gas de efecto invernadero libera el carbón al quemarse?',o:['Dióxido de carbono','Oxígeno','Nitrógeno puro'],y:'Mucho más que otras fuentes.',p:'Su nombre lleva la palabra carbono.'}],
v:[{s:'Producir electricidad con carbón no afecta el ambiente.',v:false,y:'Contamina el aire y calienta el planeta.'},
{s:'Muchos países buscan cambiar el carbón por fuentes renovables.',v:true,y:'Para contaminar menos.'}],
ex:[{s:'¿Cuál es una ventaja de producir electricidad con carbón?',o:['Es barata y produce mucha energía','No contamina','Es renovable'],y:'Por eso se ha usado tanto, a pesar de sus daños.'},
{s:'Los óxidos de azufre que libera el carbón provocan:',o:['Lluvia ácida','Más ozono en la estratósfera','Agua potable'],y:'La lluvia ácida daña bosques y edificios.'}]},

{t:'Características del aire',c:'Características del aire',e:[
'No lo ves, pero el aire está en todas partes. Es una <b>mezcla de gases</b>: alrededor de <b>78 % es nitrógeno</b>, <b>21 % oxígeno</b> y el 1 % restante son otros gases, como dióxido de carbono, argón y vapor de agua.',
'Aunque sea invisible, el aire es <b>materia</b>: <b>ocupa un espacio</b> y <b>tiene masa</b>. Un globo inflado ocupa más lugar y pesa un poquito más que uno desinflado.',
'El aire también <b>se puede comprimir</b>, es decir, apretar en un espacio más pequeño, como en las llantas de una bicicleta. Y <b>ejerce presión</b>: empuja en todas direcciones.'],
x:['Si metes un vaso boca abajo en una tina con agua, el agua no entra hasta arriba porque el aire ocupa ese espacio.','Una pelota de futbol se pone dura al inflarla porque el aire de adentro empuja hacia afuera.'],
k:'El aire es una mezcla de gases (casi todo nitrógeno y oxígeno) que ocupa espacio, tiene masa y se puede comprimir.',
q:[{s:'¿Qué gas forma la mayor parte del aire?',o:['Nitrógeno','Oxígeno','Dióxido de carbono'],y:'Es cerca del 78 %.',p:'No es el que respiras para vivir.'},
{s:'¿Qué porcentaje del aire es oxígeno, aproximadamente?',o:['21 %','78 %','1 %'],y:'Es el gas que usamos al respirar.',p:'Es como una quinta parte.'},
{s:'¿Qué demuestra un globo inflado?',o:['Que el aire ocupa espacio','Que el aire es sólido','Que el aire no existe'],y:'También demuestra que tiene masa.',p:'El globo crece.'},
{s:'Inflar una llanta muestra que el aire:',o:['Se puede comprimir','No tiene masa','Es un líquido'],y:'Se aprieta en un espacio pequeño.',p:'Se mete mucho aire en poco espacio.'}],
v:[{s:'El aire es materia porque ocupa espacio y tiene masa.',v:true,y:'Aunque no lo veamos.'},
{s:'El aire está formado por un solo gas.',v:false,y:'Es una mezcla de gases.'}],
ex:[{s:'¿Cuál es la composición aproximada del aire?',o:['78 % nitrógeno, 21 % oxígeno y 1 % otros gases','50 % oxígeno y 50 % agua','100 % oxígeno'],y:'El nitrógeno es el más abundante.'},
{s:'¿Por qué el agua no llena un vaso metido boca abajo en una tina?',o:['Porque el aire ocupa ese espacio','Porque el vaso está seco','Porque el agua es muy pesada'],y:'El aire es materia.'}]},

{t:'Características de líquidos y sólidos',c:'Líquidos y sólidos',e:[
'La materia se presenta en tres estados principales: <b>sólido</b>, <b>líquido</b> y <b>gaseoso</b>. Hoy comparamos los dos primeros.',
'Los <b>sólidos</b> tienen <b>forma propia</b> y <b>volumen fijo</b>: una piedra es igual en una caja que en una mesa. Sus partículas están muy juntas y casi no se mueven. Los <b>líquidos</b> tienen <b>volumen fijo</b> pero <b>toman la forma del recipiente</b>: un litro de agua sigue siendo un litro en una jarra o en una botella. Sus partículas están juntas, pero se deslizan unas sobre otras; por eso fluyen.',
'Los gases no tienen ni forma ni volumen fijos: ocupan todo el espacio disponible. Con calor o frío, la materia cambia de estado: el hielo se derrite y el agua se congela.'],
x:['La miel y el agua son líquidos, pero la miel fluye más despacio: es más viscosa.','Un cubo de hielo es sólido; si lo dejas en la mesa se vuelve líquido.'],
k:'Sólido: forma y volumen propios. Líquido: volumen propio y forma del recipiente.',
q:[{s:'¿Qué característica tienen los sólidos?',o:['Forma y volumen propios','Toman la forma del recipiente','No tienen volumen'],y:'Sus partículas casi no se mueven.',p:'Piensa en una piedra.'},
{s:'¿Qué pasa con un líquido al cambiarlo de recipiente?',o:['Cambia de forma, pero no de volumen','Cambia de volumen','Se vuelve sólido'],y:'Toma la forma del recipiente.',p:'Un litro sigue siendo un litro.'},
{s:'¿Por qué los líquidos fluyen?',o:['Sus partículas se deslizan unas sobre otras','Sus partículas están quietas','No tienen partículas'],y:'Por eso se pueden verter.',p:'Piensa en cómo se mueven las partículas.'},
{s:'¿Qué estado ocupa todo el espacio disponible?',o:['Gaseoso','Sólido','Líquido'],y:'Un gas se expande.',p:'Piensa en el olor de un perfume en un cuarto.'}],
v:[{s:'La miel es un líquido.',v:true,y:'Fluye, aunque lentamente.'},
{s:'Un sólido toma la forma del recipiente.',v:false,y:'Eso lo hacen los líquidos.'}],
ex:[{s:'Medio litro de jugo en un vaso alto y luego en un plato hondo:',o:['Cambia de forma, pero sigue siendo medio litro','Ahora es menos jugo','Se vuelve sólido'],y:'Los líquidos tienen volumen fijo.'},
{s:'¿Cuál es un ejemplo de sólido?',o:['Una moneda','El aceite','El vapor'],y:'Tiene forma y volumen propios.'}]},

{t:'¿Cómo se mide la masa de sólidos, líquidos y gases?',c:'Medir la masa',e:[
'La <b>masa</b> es la cantidad de materia que tiene un objeto. Se mide con una <b>balanza</b> o báscula y sus unidades son el <b>kilogramo (kg)</b> y el <b>gramo (g)</b>. 1 kg = 1 000 g.',
'Medir la masa de un <b>sólido</b> es fácil: lo pones en la balanza. Para un <b>líquido</b> se necesita un recipiente: primero pesas el recipiente vacío, luego con el líquido, y <b>restas</b>. Esa diferencia es la masa del líquido.',
'Con un <b>gas</b> se hace lo mismo: pesas un globo desinflado y luego inflado. La diferencia es muy pequeña, pero existe: el aire también tiene masa.'],
x:['Un vaso vacío pesa 200 g y con agua pesa 450 g. El agua tiene una masa de 450 − 200 = 250 g.','Un balón desinflado pesa 410 g; inflado, 415 g. El aire de adentro tiene unos 5 g.'],
k:'Para líquidos y gases: pesa el recipiente lleno, pesa el recipiente vacío y resta.',
q:[{s:'¿Con qué instrumento se mide la masa?',o:['Con una balanza','Con una regla','Con un termómetro'],y:'También se usa la báscula.',p:'Tiene platos o una pantalla con gramos.'},
{s:'¿Cuántos gramos tiene un kilogramo?',o:['1 000','100','10'],y:'Kilo significa mil.',p:'Kilo = mil.'},
{s:'Un frasco vacío pesa 150 g y con aceite 400 g. ¿Cuál es la masa del aceite?',o:['250 g','550 g','150 g'],y:'400 − 150 = 250 g.',p:'Resta lleno menos vacío.'},
{s:'Un globo desinflado pesa 3 g e inflado 5 g. ¿Qué demuestra?',o:['Que el aire tiene masa','Que el globo se hizo más grande por magia','Que el aire no pesa'],y:'La diferencia es la masa del aire.',p:'¿Qué agregaste al globo?'}],
v:[{s:'Los gases no tienen masa.',v:false,y:'Tienen masa, aunque muy poca.'},
{s:'Para medir la masa de un líquido se resta la masa del recipiente vacío.',v:true,y:'Así queda solo la del líquido.'}],
ex:[{s:'Una cubeta vacía pesa 1 kg y con arena 6 kg. ¿Cuánta arena hay?',o:['5 kg','7 kg','6 kg'],y:'6 − 1 = 5 kg.'},
{s:'¿Cuántos gramos son 2.5 kg?',o:['2 500 g','250 g','25 g'],y:'2.5 × 1 000 = 2 500.'}]}
]});
T2_MUNDOS.push({name:'Lenguajes',sub:'Exponer, persuadir y crear',lead:'Aprende a exponer frente a tu grupo, a descubrir los trucos de la publicidad y a leer el arte.',temas:[
{t:'Pasos para planear una exposición',c:'Planear una exposición',e:[
'Una <b>exposición</b> es explicar un tema frente a un público. Sale bien cuando se planea.',
'Los pasos son: 1) <b>elegir el tema</b> y lo que quieres que tu público aprenda; 2) <b>investigar</b> en fuentes confiables (libros, sitios oficiales, enciclopedias); 3) <b>organizar</b> la información en introducción, desarrollo y conclusión; 4) preparar <b>apoyos</b>, como un cartel o diapositivas; y 5) <b>ensayar</b>, cuidando el tiempo, el volumen y mirar al público.',
'Durante la exposición conviene hablar con tus palabras, usar tarjetas con ideas clave en lugar de leer todo y dejar un momento para preguntas.'],
x:['Si vas a exponer sobre los volcanes, en la introducción dices qué son, en el desarrollo cómo se forman y sus partes, y en la conclusión por qué conviene conocerlos.','Ensayar frente a tu familia te ayuda a medir si te alcanza el tiempo.'],
k:'Tema, investigación, organización (introducción, desarrollo, conclusión), apoyos y ensayo.',
q:[{s:'¿Qué parte de la exposición presenta el tema?',o:['La introducción','La conclusión','Las preguntas'],y:'Atrapa la atención y dice de qué vas a hablar.',p:'Es lo primero que se dice.'},
{s:'¿Qué conviene usar para no leer todo?',o:['Tarjetas con ideas clave','El libro completo','Nada, decirlo de memoria sin preparar'],y:'Te recuerdan el orden de las ideas.',p:'Son pequeñas y caben en tu mano.'},
{s:'¿Para qué sirve ensayar?',o:['Para cuidar el tiempo, el volumen y el orden','Para cambiar de tema','Para no investigar'],y:'Te da seguridad.',p:'Se hace antes de exponer.'},
{s:'¿Cuál es una fuente confiable?',o:['Un libro o un sitio oficial','Un comentario anónimo','Un rumor'],y:'Hay que poder saber quién lo escribió.',p:'Busca la que tiene autor responsable.'}],
v:[{s:'La conclusión cierra la exposición con las ideas más importantes.',v:true,y:'Es el final.'},
{s:'Es mejor leer todo el texto sin mirar al público.',v:false,y:'Hay que mirar al público y hablar con tus palabras.'}],
ex:[{s:'¿En qué orden se organiza una exposición?',o:['Introducción, desarrollo y conclusión','Conclusión, desarrollo e introducción','Solo desarrollo'],y:'Es la estructura básica.'},
{s:'¿Qué paso va antes de organizar la información?',o:['Investigar','Ensayar','Exponer'],y:'Primero se reúne la información.'}]},

{t:'Apoyos gráficos para enriquecer una presentación',c:'Apoyos gráficos',e:[
'Los <b>apoyos gráficos</b> son imágenes, esquemas, tablas, gráficas, mapas o diapositivas que ayudan al público a entender y recordar lo que explicas.',
'Un buen apoyo tiene <b>poco texto</b> (palabras clave, no párrafos), <b>letra grande</b> que se lea desde el fondo del salón, <b>imágenes claras</b> relacionadas con el tema y <b>colores</b> que contrasten.',
'Cada tipo sirve para algo: un mapa para ubicar lugares, una línea del tiempo para ordenar fechas, una gráfica para comparar cantidades y un esquema para mostrar partes o pasos.'],
x:['Para explicar el ciclo del agua, un esquema con flechas es más claro que un párrafo largo.','Para mostrar la población de varios estados, una gráfica de barras permite comparar rápido.'],
k:'Poco texto, letra grande, imágenes claras y el tipo de apoyo adecuado a lo que quieres mostrar.',
q:[{s:'¿Qué apoyo conviene para ordenar fechas?',o:['Una línea del tiempo','Un mapa','Una receta'],y:'Muestra qué pasó antes y después.',p:'Las fechas van en orden.'},
{s:'¿Cómo debe ser el texto de una diapositiva?',o:['Pocas palabras clave y letra grande','Párrafos largos con letra chica','Sin ningún título'],y:'El público debe leerlo rápido.',p:'Menos es más.'},
{s:'Para comparar cantidades, lo mejor es:',o:['Una gráfica','Un poema','Una foto de paisaje'],y:'Las barras o sectores facilitan comparar.',p:'Piensa en barras de distinto tamaño.'},
{s:'Para mostrar dónde está un país, conviene:',o:['Un mapa','Una tabla de precios','Un cuento'],y:'El mapa ubica lugares.',p:'Ubicar es tarea de…'}],
v:[{s:'Un esquema con flechas sirve para explicar pasos o procesos.',v:true,y:'Muestra el orden.'},
{s:'Entre más texto tenga una lámina, mejor se entiende.',v:false,y:'Demasiado texto distrae.'}],
ex:[{s:'¿Cuál es una característica de un buen apoyo gráfico?',o:['Imágenes claras relacionadas con el tema','Mucho texto pequeño','Colores que no contrastan'],y:'Debe verse desde lejos.'},
{s:'Si explicas las partes de una flor, ¿qué apoyo usarías?',o:['Un esquema con sus partes señaladas','Una línea del tiempo','Una gráfica de barras'],y:'El esquema muestra partes.'}]},

{t:'Cartas personales',c:'Cartas personales',e:[
'Una <b>carta personal</b> se escribe a alguien de confianza, como un familiar o un amigo, para contarle algo, felicitarlo o agradecerle. Su lenguaje es <b>informal</b> y cercano.',
'Sus partes son: <b>lugar y fecha</b> (arriba a la derecha), <b>saludo</b> («Querida abuela:»), <b>cuerpo</b> (lo que quieres contar), <b>despedida</b> («Te mando un abrazo») y <b>firma</b>. A veces se agrega una <b>posdata (P. D.)</b> para algo que se olvidó.',
'Si se envía por correo postal, el sobre lleva los datos del <b>destinatario</b> (quien recibe) y del <b>remitente</b> (quien envía).'],
x:['«Ciudad de México, 20 de noviembre de 2026. Querido primo: ¡ya casi son vacaciones!…»','«P. D. No olvides traer tu balón cuando vengas.»'],
k:'Lugar y fecha, saludo, cuerpo, despedida y firma, con lenguaje cercano.',
q:[{s:'¿Qué tipo de lenguaje se usa en una carta personal?',o:['Informal y cercano','Muy técnico','Legal'],y:'Se escribe a alguien de confianza.',p:'Piensa en cómo le hablas a un amigo.'},
{s:'¿Para qué sirve la posdata?',o:['Para agregar algo que se olvidó','Para poner la fecha','Para saludar'],y:'Va después de la firma.',p:'P. D. significa «después de lo escrito».'},
{s:'¿Quién es el remitente?',o:['Quien envía la carta','Quien la recibe','El cartero'],y:'El destinatario es quien la recibe.',p:'Remitir es enviar.'},
{s:'¿Qué parte va al inicio, arriba a la derecha?',o:['Lugar y fecha','La firma','La despedida'],y:'Indica dónde y cuándo se escribió.',p:'Dice dónde y cuándo.'}],
v:[{s:'Una carta personal termina con despedida y firma.',v:true,y:'Así se cierra.'},
{s:'El destinatario es la persona que escribe la carta.',v:false,y:'Es quien la recibe.'}],
ex:[{s:'«Te mando un fuerte abrazo» es parte de:',o:['La despedida','El saludo','La fecha'],y:'Va antes de la firma.'},
{s:'¿Cuál es un saludo de carta personal?',o:['Querida tía Rosa:','Atentamente,','Asunto: solicitud'],y:'Es cercano.'}]},

{t:'Anuncios publicitarios con distintos fines',c:'Anuncios publicitarios',e:[
'Un <b>anuncio</b> es un mensaje breve para convencer al público de algo. Según su propósito, hay dos grandes tipos.',
'La <b>publicidad comercial</b> busca que compres un producto o servicio: un cereal, unos tenis o una plataforma de videos. Los <b>anuncios sociales</b> o campañas buscan que cambies una conducta por el bien común: cuidar el agua, vacunarte o no tirar basura.',
'Ambos usan los mismos elementos: una <b>imagen llamativa</b>, un <b>eslogan</b> (frase corta y fácil de recordar), poco texto, colores y, a veces, música o personajes famosos.'],
x:['«¡Ciérrale! El agua es vida» es un eslogan de una campaña social.','Un anuncio de juguetes muestra niños felices para que quieras tenerlo: es comercial.'],
k:'Comercial: vender. Social: cambiar una conducta por el bien común.',
q:[{s:'¿Qué busca la publicidad comercial?',o:['Que compres un producto o servicio','Que cuides el ambiente','Que estudies más'],y:'Su meta es vender.',p:'Comercio es comprar y vender.'},
{s:'Un anuncio que invita a vacunarse es:',o:['Social','Comercial','Un cuento'],y:'Busca el bien común.',p:'No vende nada.'},
{s:'¿Qué es un eslogan?',o:['Una frase corta y fácil de recordar','El precio del producto','La dirección de la tienda'],y:'Se queda en tu memoria.',p:'Piensa en frases pegajosas.'},
{s:'¿Qué elemento se usa para llamar la atención?',o:['Una imagen llamativa','Un texto muy largo','Letras diminutas'],y:'La imagen es lo primero que se ve.',p:'Entra por los ojos.'}],
v:[{s:'Los anuncios sociales también usan eslóganes.',v:true,y:'Para que el mensaje se recuerde.'},
{s:'Toda la publicidad busca vender algo.',v:false,y:'Los anuncios sociales buscan cambiar conductas.'}],
ex:[{s:'«Separa tu basura, tu planeta te lo agradece» es un anuncio:',o:['Social','Comercial','Informativo de precios'],y:'Busca un cambio de conducta.'},
{s:'¿Qué tienen en común los anuncios comerciales y sociales?',o:['Buscan convencer al público','Venden productos','Son muy largos'],y:'Ambos persuaden.'}]},

{t:'Análisis de mensajes publicitarios',c:'Analizar la publicidad',e:[
'Analizar un anuncio es descubrir <b>qué quiere que hagas</b> y <b>cómo intenta convencerte</b>. Así decides con libertad.',
'Los anuncios usan <b>recursos persuasivos</b>: exageraciones («¡el mejor del mundo!»), personajes famosos, regalos o promociones, emociones (alegría, miedo a quedarte fuera) y la idea de que todos ya lo tienen.',
'También pueden mostrar <b>estereotipos</b>, ideas fijas sobre cómo «deben» ser las personas (por ejemplo, que los juegos de cocina son solo para niñas). Pregúntate siempre: ¿qué me ofrece de verdad? ¿Lo necesito? ¿Qué no me dice?'],
x:['Un cereal promete «energía para todo el día», pero en la etiqueta tiene sellos de exceso de azúcares.','Un juego dice «¡todos tus amigos ya juegan!»: usa la presión de grupo.'],
k:'Pregunta: ¿qué quiere que haga?, ¿qué trucos usa?, ¿qué no me dice?',
q:[{s:'«¡El mejor juguete del universo!» es un ejemplo de:',o:['Exageración','Dato comprobado','Instrucción'],y:'Nadie puede comprobarlo.',p:'¿Se puede demostrar?'},
{s:'¿Qué es un estereotipo?',o:['Una idea fija sobre cómo deben ser las personas','Un tipo de letra','Un precio de oferta'],y:'Suele ser injusto.',p:'Piensa en «solo para niñas» o «solo para niños».'},
{s:'«¡Todos tus amigos ya lo tienen!» usa:',o:['Presión de grupo','Información nutrimental','Un dato científico'],y:'Te hace sentir que te quedas fuera.',p:'Hace que no quieras ser el único sin tenerlo.'},
{s:'¿Qué conviene preguntarte ante un anuncio?',o:['¿Lo necesito de verdad?','¿De qué color es?','¿Cuánto dura?'],y:'Así decides con libertad.',p:'Piensa en tu necesidad real.'}],
v:[{s:'Los anuncios siempre dicen toda la verdad del producto.',v:false,y:'Muestran solo lo que conviene.'},
{s:'Usar a un famoso es un recurso para persuadir.',v:true,y:'Quieres parecerte a él.'}],
ex:[{s:'Un anuncio muestra solo a niños jugando futbol y solo a niñas con muñecas. ¿Qué contiene?',o:['Estereotipos','Datos científicos','Instrucciones'],y:'Cualquiera puede jugar a lo que quiera.'},
{s:'¿Para qué sirve analizar la publicidad?',o:['Para decidir con libertad y no dejarse engañar','Para comprar más','Para memorizar eslóganes'],y:'Te vuelve un consumidor crítico.'}]},

{t:'Medios de comunicación y el circuito de la comunicación',c:'Circuito de la comunicación',e:[
'Siempre que te comunicas, hay un <b>circuito</b> con estos elementos: el <b>emisor</b> (quien envía el mensaje), el <b>receptor</b> (quien lo recibe), el <b>mensaje</b> (lo que se dice), el <b>canal</b> (el medio por el que viaja), el <b>código</b> (el idioma o los signos) y el <b>contexto</b> (la situación).',
'Los <b>medios de comunicación</b> son canales que llegan a muchas personas: radio, televisión, periódicos, internet y redes sociales. Algunos son <b>impresos</b>, otros <b>audiovisuales</b> y otros <b>digitales</b>.',
'Si algo falla, por ejemplo hay ruido o el receptor no conoce el código, la comunicación no se logra.'],
x:['Tu maestra (emisor) explica fracciones (mensaje) a tu grupo (receptor) con su voz (canal) en español (código) en el salón (contexto).','Si alguien te habla en un idioma que no conoces, falla el código.'],
k:'Emisor, receptor, mensaje, canal, código y contexto.',
q:[{s:'¿Quién es el emisor?',o:['Quien envía el mensaje','Quien lo recibe','El idioma'],y:'Es quien empieza la comunicación.',p:'Emitir es enviar.'},
{s:'El idioma que se usa en una conversación es:',o:['El código','El canal','El contexto'],y:'Si no se comparte, no hay entendimiento.',p:'Son los signos que ambos conocen.'},
{s:'En una llamada telefónica, ¿cuál es el canal?',o:['El teléfono','La persona que llama','El tema de la plática'],y:'Es el medio por el que viaja el mensaje.',p:'Por dónde viaja la voz.'},
{s:'¿Cuál es un medio de comunicación digital?',o:['Un sitio de internet','Un periódico impreso','Una carta escrita a mano'],y:'Funciona con dispositivos electrónicos.',p:'Necesita internet.'}],
v:[{s:'El receptor es quien recibe el mensaje.',v:true,y:'Puede ser una persona o muchas.'},
{s:'El ruido nunca afecta la comunicación.',v:false,y:'Puede impedir que el mensaje llegue.'}],
ex:[{s:'Un locutor da noticias por radio. La radio es:',o:['El canal','El emisor','El código'],y:'Es el medio que transporta el mensaje.'},
{s:'¿Qué elemento es la situación en la que ocurre la comunicación?',o:['El contexto','El mensaje','El receptor'],y:'Ayuda a entender el sentido.'}]},

{t:'Formas de abordar el mismo hecho noticioso',c:'Un hecho, varias noticias',e:[
'Un mismo suceso puede contarse de formas distintas según el medio y su propósito. Por eso conviene leer más de una fuente.',
'La <b>noticia</b> informa de forma breve y responde a las preguntas <b>qué, quién, cuándo, dónde, cómo y por qué</b>. La <b>crónica</b> narra los hechos en orden y con detalles, como si estuvieras ahí. El <b>artículo de opinión</b> da el punto de vista del autor.',
'También cambian el <b>titular</b>, las fotos y las palabras elegidas. Distingue los <b>hechos</b> (se pueden comprobar) de las <b>opiniones</b> (lo que alguien piensa).'],
x:['Un titular dice «Llueve 3 horas sin parar»; otro, «Caos total por tormenta». El segundo exagera y genera alarma.','«El partido terminó 2 a 1» es un hecho; «fue el peor partido del año» es una opinión.'],
k:'Compara fuentes y separa hechos de opiniones.',
q:[{s:'¿A qué preguntas responde una noticia?',o:['Qué, quién, cuándo, dónde, cómo y por qué','Solo cuánto cuesta','Solo quién ganó'],y:'Son las preguntas básicas.',p:'Son seis preguntas.'},
{s:'¿Qué texto da el punto de vista del autor?',o:['El artículo de opinión','La noticia','El instructivo'],y:'Expresa lo que alguien piensa.',p:'Opinar es dar tu punto de vista.'},
{s:'«El puente mide 300 metros» es:',o:['Un hecho','Una opinión','Una exageración'],y:'Se puede medir.',p:'¿Se puede comprobar?'},
{s:'¿Por qué conviene leer varias fuentes?',o:['Para comparar y tener una idea más completa','Para perder el tiempo','Porque todas dicen lo mismo'],y:'Cada medio puede enfocar distinto.',p:'Cada medio cuenta diferente.'}],
v:[{s:'La crónica narra los hechos en orden y con detalles.',v:true,y:'Te hace sentir que estuviste ahí.'},
{s:'Todos los periódicos cuentan una noticia exactamente igual.',v:false,y:'Cambian el enfoque, el titular y las palabras.'}],
ex:[{s:'«Fue un concierto aburridísimo» es:',o:['Una opinión','Un hecho','Un dato'],y:'Es lo que alguien piensa.'},
{s:'¿Qué texto informa de manera breve un suceso reciente?',o:['La noticia','El poema','La leyenda'],y:'Responde las preguntas básicas.'}]},

{t:'Acciones para mejorar servicios públicos en la comunidad',c:'Servicios públicos',e:[
'Los <b>servicios públicos</b> son los que el gobierno debe ofrecer a todas las personas: agua potable, drenaje, alumbrado, recolección de basura, transporte, seguridad, escuelas y centros de salud.',
'Cuando un servicio falla, la comunidad puede actuar: <b>identificar</b> el problema, <b>reunir</b> evidencias (fotos, fechas, firmas de vecinos), <b>informarse</b> de qué oficina es responsable y <b>presentar una solicitud</b> por escrito, por teléfono o en línea.',
'También se puede participar directamente: cuidar el alumbrado y los parques, sacar la basura en el horario, reportar fugas y organizar jornadas de limpieza.'],
x:['Si una lámpara de la calle no funciona, los vecinos pueden reportarla al municipio o alcaldía con la ubicación exacta.','Una fuga de agua en la banqueta se reporta y, mientras tanto, se avisa a los vecinos.'],
k:'Identifica, junta evidencias, busca al responsable y solicita por escrito; también cuida lo que es de todos.',
q:[{s:'¿Cuál es un servicio público?',o:['El alumbrado de la calle','Una tienda de ropa','Un cine privado'],y:'El gobierno debe ofrecerlo a todos.',p:'Es para toda la comunidad.'},
{s:'¿Qué conviene reunir antes de hacer una solicitud?',o:['Evidencias como fotos y firmas','Dulces para regalar','Nada'],y:'Así la solicitud es más fuerte.',p:'Algo que demuestre el problema.'},
{s:'Sacar la basura en el horario del camión es una forma de:',o:['Participar en el cuidado de un servicio','Desperdiciar agua','Hacer una queja'],y:'Ayuda a que el servicio funcione.',p:'Es una acción directa de los vecinos.'},
{s:'¿A quién se dirige una solicitud por un bache?',o:['A la oficina responsable del municipio o alcaldía','A una tienda','Al dueño del coche'],y:'Hay que buscar al responsable.',p:'Es una autoridad local.'}],
v:[{s:'La recolección de basura es un servicio público.',v:true,y:'Es responsabilidad del gobierno local.'},
{s:'Los vecinos no pueden hacer nada si un servicio falla.',v:false,y:'Pueden reportar, solicitar y participar.'}],
ex:[{s:'¿Qué acción mejora un servicio público?',o:['Reportar una fuga de agua','Romper una lámpara','Tirar basura en la coladera'],y:'Avisar ayuda a repararla.'},
{s:'El agua potable, el drenaje y el alumbrado son:',o:['Servicios públicos','Productos de lujo','Servicios privados'],y:'Todas las personas tienen derecho a ellos.'}]},

{t:'Análisis de una carta formal que solicita apoyo',c:'Carta formal',e:[
'Una <b>carta formal</b> se escribe a una autoridad, institución o persona que no conoces bien, para pedir algo, informar o agradecer. Usa un lenguaje <b>respetuoso</b> y claro.',
'Sus partes son: <b>lugar y fecha</b>; <b>destinatario</b> con su cargo («Lic. Ana Torres, Directora de Servicios Urbanos»); <b>asunto</b> (de qué trata en pocas palabras); <b>saludo formal</b> («Estimada licenciada:»); <b>cuerpo</b>, que explica el problema, da razones y hace la petición; <b>despedida</b> («Atentamente») y <b>firma</b> con nombre y datos de contacto.',
'Para que funcione, la petición debe ser <b>concreta</b>: qué se pide, dónde y por qué.'],
x:['Asunto: Solicitud de reparación de luminarias en la calle Hidalgo.','«Por lo anterior, le solicitamos de la manera más atenta que se reparen las dos lámparas frente a la escuela.»'],
k:'Destinatario con cargo, asunto, lenguaje respetuoso, petición concreta, despedida formal y firma.',
q:[{s:'¿Qué indica el asunto de una carta formal?',o:['De qué trata en pocas palabras','El nombre del remitente','La despedida'],y:'Ayuda a quien la recibe a entender rápido.',p:'Es como un título.'},
{s:'¿Cuál es una despedida formal?',o:['Atentamente','¡Nos vemos, amigo!','Besos'],y:'Es respetuosa.',p:'Elige la más seria.'},
{s:'¿Cómo debe ser la petición?',o:['Concreta: qué, dónde y por qué','Vaga y muy larga','Sin explicar razones'],y:'Así es más fácil atenderla.',p:'Que se entienda exactamente qué se pide.'},
{s:'¿Cuál saludo es formal?',o:['Estimada licenciada:','¿Qué onda?','Querido primo:'],y:'Usa el cargo o un trato respetuoso.',p:'Busca el más respetuoso.'}],
v:[{s:'En una carta formal se usa lenguaje respetuoso.',v:true,y:'Va dirigida a una autoridad o institución.'},
{s:'La carta formal no necesita firma.',v:false,y:'La firma y los datos de contacto son indispensables.'}],
ex:[{s:'¿Qué diferencia a una carta formal de una personal?',o:['Su lenguaje respetuoso y su destinatario institucional','Que no tiene fecha','Que siempre es de felicitación'],y:'Se dirige a autoridades o instituciones.'},
{s:'¿En qué parte de la carta formal se explica el problema y se hace la petición?',o:['En el cuerpo','En el asunto','En la despedida'],y:'Es la parte central.'}]},

{t:'Elementos de un tríptico',c:'El tríptico',e:[
'Un <b>tríptico</b> es una hoja doblada en tres partes que forma <b>seis caras</b> o paneles. Sirve para informar o promover algo de forma breve: una campaña de salud, un museo o un evento escolar.',
'La <b>portada</b> lleva un título atractivo y una imagen. Por dentro va la información organizada con <b>subtítulos</b>, textos breves, listas e imágenes. La <b>contraportada</b> suele tener datos de contacto, la dirección o una frase de cierre.',
'Para que funcione, el texto debe ser <b>breve y claro</b>, con letra legible y buen equilibrio entre texto e imágenes.'],
x:['Un tríptico sobre el dengue: portada «¡Que no te pique!», adentro qué es, síntomas y cómo prevenirlo, y atrás el teléfono del centro de salud.','Un museo reparte trípticos con su horario, sus salas y un mapa.'],
k:'Hoja doblada en tres, seis paneles: portada atractiva, información breve con subtítulos y contraportada con datos.',
q:[{s:'¿En cuántas partes se dobla un tríptico?',o:['Tres','Dos','Cinco'],y:'Tri significa tres.',p:'Tri = tres.'},
{s:'¿Qué lleva la portada?',o:['Título atractivo e imagen','Todos los datos de contacto','Un texto largo'],y:'Debe invitar a abrirlo.',p:'Es lo primero que se ve.'},
{s:'¿Cómo debe ser el texto de un tríptico?',o:['Breve y claro','Muy extenso','Sin subtítulos'],y:'Se lee rápido.',p:'Hay poco espacio.'},
{s:'¿Cuántas caras o paneles tiene un tríptico?',o:['Seis','Tres','Doce'],y:'Tres por cada lado de la hoja.',p:'Tres de cada lado.'}],
v:[{s:'Los subtítulos ayudan a organizar la información de un tríptico.',v:true,y:'Facilitan encontrar cada tema.'},
{s:'Un tríptico debe tener textos muy largos.',v:false,y:'Debe ser breve.'}],
ex:[{s:'¿Para qué se usa un tríptico?',o:['Para informar o promover algo de forma breve','Para escribir una novela','Para hacer cuentas'],y:'Es fácil de repartir.'},
{s:'¿Dónde suelen ir los datos de contacto?',o:['En la contraportada','En la portada','En el título'],y:'Es el panel de cierre.'}]},

{t:'Lenguas en el entorno familiar y comunitario',c:'Lenguas de México',e:[
'México es un país con gran <b>diversidad lingüística</b>. Además del español, se hablan <b>68 lenguas indígenas</b> (agrupaciones lingüísticas), como el náhuatl, el maya, el tseltal, el tsotsil, el mixteco, el zapoteco y el otomí.',
'Todas tienen el mismo valor: son una forma de ver el mundo y guardan la historia de los pueblos. Desde 2003 la ley reconoce a las lenguas indígenas como <b>lenguas nacionales</b>, igual que el español.',
'Muchas palabras que usas diario vienen de lenguas indígenas. Del náhuatl: chocolate, tomate, aguacate, chicle, cacahuate, papalote. Del maya: cenote. Conocerlas ayuda a respetarlas y evitar que desaparezcan.'],
x:['Si tu abuela habla mixteco y tú español, en tu familia conviven dos lenguas nacionales.','«Papalote» viene del náhuatl papalotl, que significa mariposa.'],
k:'En México se hablan 68 lenguas indígenas; todas son lenguas nacionales con el mismo valor que el español.',
q:[{s:'¿Cuántas lenguas indígenas se hablan en México?',o:['68','5','200'],y:'Son agrupaciones lingüísticas reconocidas.',p:'Son más de 60 y menos de 70.'},
{s:'¿De qué lengua viene la palabra «chocolate»?',o:['Del náhuatl','Del inglés','Del francés'],y:'Viene de una palabra náhuatl.',p:'Era la lengua de los mexicas.'},
{s:'¿Qué significa que una lengua indígena sea lengua nacional?',o:['Que tiene el mismo valor que el español','Que solo se habla en la escuela','Que ya no se usa'],y:'Así lo reconoce la ley.',p:'Igual valor.'},
{s:'¿Cuál es una lengua indígena de México?',o:['Zapoteco','Portugués','Italiano'],y:'Se habla sobre todo en Oaxaca.',p:'Busca la que nació en México.'}],
v:[{s:'La palabra «aguacate» viene del náhuatl.',v:true,y:'Es uno de muchos préstamos.'},
{s:'Las lenguas indígenas valen menos que el español.',v:false,y:'Todas tienen el mismo valor.'}],
ex:[{s:'¿Qué es la diversidad lingüística?',o:['La existencia de muchas lenguas en un lugar','Hablar muy rápido','Escribir con buena letra'],y:'México es uno de los países con más lenguas.'},
{s:'¿Cuál palabra viene del náhuatl?',o:['Papalote','Computadora','Fútbol'],y:'Viene de papalotl, mariposa.'}]},

{t:'Análisis de manifestaciones artísticas y temas sociales',c:'Arte y temas sociales',e:[
'El arte no solo es bonito: también sirve para <b>hablar de lo que pasa en la sociedad</b>, como la injusticia, la historia, el trabajo o la naturaleza.',
'Un gran ejemplo es el <b>muralismo mexicano</b>. Después de la Revolución, artistas como <b>Diego Rivera</b>, <b>José Clemente Orozco</b> y <b>David Alfaro Siqueiros</b> pintaron enormes murales en edificios públicos para que todo el pueblo conociera su historia y sus luchas.',
'Para analizar una obra pregúntate: ¿qué se ve?, ¿qué personajes aparecen?, ¿qué colores y formas usa?, ¿qué tema social trata? y ¿qué mensaje quiere dejar?'],
x:['Los murales de Diego Rivera en Palacio Nacional cuentan la historia de México, desde los pueblos antiguos hasta el siglo XX.','Una canción que habla de migración también es una manifestación artística con tema social.'],
k:'El arte puede denunciar, recordar y hacer pensar. Analiza qué muestra, cómo y qué mensaje deja.',
q:[{s:'¿Quién fue un muralista mexicano?',o:['Diego Rivera','Pablo Picasso','Leonardo da Vinci'],y:'También Orozco y Siqueiros.',p:'Pintó en Palacio Nacional.'},
{s:'¿Para qué se pintaron murales en edificios públicos?',o:['Para que todo el pueblo conociera su historia','Para esconderlos','Para venderlos'],y:'Era arte para todos.',p:'Están donde mucha gente los ve.'},
{s:'Una pregunta para analizar una obra es:',o:['¿Qué mensaje quiere dejar?','¿Cuánto pesa el marco?','¿Qué hora es?'],y:'Ayuda a entender su sentido.',p:'Busca el mensaje.'},
{s:'Una canción sobre la migración trata un tema:',o:['Social','Matemático','Deportivo'],y:'Habla de algo que vive la sociedad.',p:'Afecta a muchas personas.'}],
v:[{s:'El arte puede tratar problemas de la sociedad.',v:true,y:'Por ejemplo, el muralismo.'},
{s:'Los murales de Diego Rivera se pintaron en museos privados para pocas personas.',v:false,y:'Se pintaron en edificios públicos.'}],
ex:[{s:'¿Qué movimiento artístico mexicano contó la historia del país en grandes paredes?',o:['El muralismo','El cubismo','La ópera'],y:'Surgió después de la Revolución.'},
{s:'¿Qué trío de artistas es parte del muralismo?',o:['Rivera, Orozco y Siqueiros','Mozart, Bach y Beethoven','Cervantes, Neruda y Paz'],y:'Son los tres grandes muralistas.'}]},

{t:'Elementos y símbolos en manifestaciones artísticas',c:'Símbolos en el arte',e:[
'Los artistas usan <b>elementos</b> como la línea, la forma, el color, la textura y el espacio. También usan <b>símbolos</b>: imágenes que representan una idea.',
'Algunos símbolos son muy conocidos: la <b>paloma blanca</b> representa la paz, el <b>corazón</b> el amor, las <b>cadenas rotas</b> la libertad y la <b>calavera</b> la muerte (en México, también la fiesta del Día de Muertos).',
'Los colores también comunican: el rojo puede expresar pasión o peligro; el azul, calma; el negro, tristeza o misterio. Pero el significado puede cambiar según la cultura.'],
x:['En el escudo nacional, el águila sobre el nopal recuerda la fundación de Tenochtitlan.','La Catrina de José Guadalupe Posada usa la calavera para hacer una crítica con humor.'],
k:'Un símbolo es una imagen que representa una idea; su significado depende de la cultura.',
q:[{s:'¿Qué representa una paloma blanca?',o:['La paz','La guerra','La riqueza'],y:'Es un símbolo universal.',p:'Se usa en campañas contra la violencia.'},
{s:'Las cadenas rotas simbolizan:',o:['La libertad','La tristeza','El hambre'],y:'Se rompe lo que oprime.',p:'Alguien deja de estar atado.'},
{s:'¿Qué es un símbolo?',o:['Una imagen que representa una idea','Un tipo de pincel','Un marco de madera'],y:'Comunica sin palabras.',p:'Representa algo más.'},
{s:'¿Qué color suele asociarse con la calma?',o:['El azul','El rojo','El naranja intenso'],y:'Recuerda el cielo y el mar.',p:'Piensa en el mar tranquilo.'}],
v:[{s:'El significado de un símbolo puede cambiar según la cultura.',v:true,y:'No todos los pueblos lo leen igual.'},
{s:'El color nunca comunica emociones en el arte.',v:false,y:'Los colores expresan emociones.'}],
ex:[{s:'¿Qué recuerda el águila sobre un nopal en el escudo nacional?',o:['La fundación de Tenochtitlan','La Independencia','Un partido de futbol'],y:'Es un símbolo de identidad.'},
{s:'La línea, la forma y el color son:',o:['Elementos del arte','Instrumentos musicales','Géneros literarios'],y:'Con ellos se construyen las obras.'}]},

{t:'Análisis de cómo un espacio puede ser mejorado por el arte',c:'Arte en los espacios',e:[
'El arte puede <b>transformar un lugar</b>: una barda gris con grafitis se vuelve un mural colorido, un parque descuidado se llena de esculturas o un pasillo de la escuela se convierte en galería.',
'Estos proyectos de <b>arte comunitario</b> mejoran la convivencia: los vecinos participan, cuidan más el lugar y se sienten orgullosos. Además cuentan la historia y la identidad de la comunidad.',
'Para planear una intervención: observa el espacio, pregunta qué necesita la comunidad, elige un tema, pide permiso a quien corresponda, diseña la obra y organiza el trabajo en equipo.'],
x:['Algunas colonias han pintado murales enormes en las fachadas de sus casas y ahora llegan visitantes a conocerlas.','Un grupo de sexto pintó en la barda de la escuela un mural sobre el cuidado del agua.'],
k:'El arte comunitario embellece, une a los vecinos y cuenta la identidad del lugar. Siempre se pide permiso.',
q:[{s:'¿Qué beneficio tiene un mural comunitario?',o:['Los vecinos cuidan más el lugar y se sienten orgullosos','Ensucia la calle','Hace más ruido'],y:'Fortalece la convivencia.',p:'Piensa en cómo se sienten los vecinos.'},
{s:'Antes de pintar un mural en una barda, hay que:',o:['Pedir permiso a quien corresponda','Pintar de noche sin avisar','Tapar el letrero de la calle'],y:'Así se respeta la propiedad.',p:'La barda tiene dueño.'},
{s:'¿Qué conviene hacer primero al planear una intervención?',o:['Observar el espacio y preguntar qué necesita la comunidad','Comprar pintura','Firmar la obra'],y:'El proyecto debe responder a la comunidad.',p:'Primero se conoce el lugar.'},
{s:'Convertir un pasillo de la escuela en galería es un ejemplo de:',o:['Mejorar un espacio con arte','Contaminar un espacio','Un servicio de transporte'],y:'El arte transforma lugares.',p:'El pasillo se ve distinto.'}],
v:[{s:'El arte comunitario puede contar la identidad de un lugar.',v:true,y:'Refleja a quienes viven ahí.'},
{s:'Se puede pintar cualquier pared sin pedir permiso.',v:false,y:'Siempre hay que pedir permiso.'}],
ex:[{s:'¿Cómo puede el arte mejorar un espacio?',o:['Embelleciéndolo y uniendo a la comunidad','Llenándolo de basura','Cerrándolo al público'],y:'Transforma y une.'},
{s:'¿Qué es el arte comunitario?',o:['Arte hecho con y para la comunidad','Arte que solo ve una persona','Arte que se vende en tiendas'],y:'Los vecinos participan.'}]}
]});
T2_MUNDOS.push({name:'Matemáticas',sub:'Pensamiento matemático',lead:'Divisiones con punto decimal, porcentajes, el número π y cuerpos geométricos. ¡A calcular!',temas:[
{t:'Cómo obtener un cociente con número decimal',c:'Cocientes decimales',e:[
'Cuando una división no es exacta, puedes seguir dividiendo para obtener un <b>cociente decimal</b> en lugar de dejar un residuo.',
'El truco: cuando ya no puedas bajar cifras, pon un <b>punto decimal</b> en el cociente y agrega un <b>cero</b> al residuo. Sigue dividiendo. Puedes agregar más ceros hasta que el residuo sea 0 o tengas los decimales que necesites.',
'Ejemplo: 7 ÷ 4. Cabe 1 vez y sobran 3. Pones punto, 30 ÷ 4 = 7 y sobran 2. Agregas cero: 20 ÷ 4 = 5. Resultado: <b>1.75</b>.'],
x:['Repartir $7 entre 4 amigos: a cada uno le tocan $1.75.','15 ÷ 2 = 7.5: si 2 hermanos comparten 15 litros de agua, cada uno recibe 7.5 litros.'],
k:'Si sobra residuo, pon punto en el cociente, agrega un cero al residuo y sigue dividiendo.',
q:[{s:'¿Cuánto es 7 ÷ 4?',o:['1.75','1.3','17.5'],y:'7 ÷ 4 = 1 con residuo 3; 30 ÷ 4 = 7 r 2; 20 ÷ 4 = 5.',p:'Agrega ceros al residuo.'},
{s:'¿Cuánto es 9 ÷ 2?',o:['4.5','4.2','45'],y:'9 ÷ 2 = 4 r 1; 10 ÷ 2 = 5. Queda 4.5.',p:'Media unidad más.'},
{s:'Al agregar un cero al residuo, ¿qué pones en el cociente?',o:['Un punto decimal','Un signo de más','Otro cero al inicio'],y:'Así indicas que empiezan los décimos.',p:'Separa enteros de decimales.'},
{s:'Se reparten $10 entre 4 niños. ¿Cuánto recibe cada uno?',o:['$2.50','$2.40','$3'],y:'10 ÷ 4 = 2.5.',p:'Divide 10 entre 4.'}],
v:[{s:'3 ÷ 4 = 0.75',v:true,y:'30 ÷ 4 = 7 r 2; 20 ÷ 4 = 5.'},
{s:'Cuando una división tiene residuo, ya no se puede continuar.',v:false,y:'Se puede seguir con decimales.'}],
ex:[{s:'¿Cuánto es 13 ÷ 4?',o:['3.25','3.1','3.4'],y:'13 ÷ 4 = 3 r 1; 10 ÷ 4 = 2 r 2; 20 ÷ 4 = 5.'},
{s:'Cinco amigos pagan $12 en partes iguales. ¿Cuánto paga cada uno?',o:['$2.40','$2.20','$2.50'],y:'12 ÷ 5 = 2.4.'}]},

{t:'Cómo determinar valores faltantes',c:'Valores faltantes',e:[
'En una situación de <b>proporcionalidad</b>, si una cantidad aumenta al doble, la otra también; si una se reduce a la mitad, la otra también. Eso permite encontrar <b>valores faltantes</b> en una tabla.',
'Un método muy útil es el <b>valor unitario</b>: primero calculas cuánto vale <b>uno</b> y luego multiplicas. Si 3 cuadernos cuestan $45, uno cuesta 45 ÷ 3 = $15, así que 5 cuadernos cuestan 15 × 5 = $75.',
'También puedes buscar dobles, triples o mitades: si 4 kg cuestan $60, 2 kg cuestan la mitad, $30, y 8 kg el doble, $120.'],
x:['Una receta pide 2 tazas de harina para 6 hot cakes. Para 18 hot cakes (el triple) necesitas 6 tazas.','Si un coche recorre 120 km en 2 horas a velocidad constante, en 1 hora recorre 60 km y en 5 horas, 300 km.'],
k:'Calcula el valor de uno y multiplica, o usa dobles, triples y mitades.',
q:[{s:'3 cuadernos cuestan $45. ¿Cuánto cuestan 5?',o:['$75','$60','$90'],y:'Uno cuesta $15; 15 × 5 = 75.',p:'Calcula primero el precio de uno.'},
{s:'4 kg de naranjas cuestan $60. ¿Cuánto cuestan 2 kg?',o:['$30','$15','$120'],y:'Es la mitad del peso, así que la mitad del precio.',p:'2 es la mitad de 4.'},
{s:'Para 6 hot cakes se usan 2 tazas de harina. ¿Cuántas para 18?',o:['6 tazas','4 tazas','9 tazas'],y:'18 es el triple de 6.',p:'¿Cuántas veces cabe 6 en 18?'},
{s:'¿Qué es el valor unitario?',o:['Lo que vale una unidad','El total de la compra','El precio más caro'],y:'Sirve para calcular cualquier cantidad.',p:'Unitario viene de uno.'}],
v:[{s:'Si 2 boletos cuestan $80, entonces 6 boletos cuestan $240.',v:true,y:'Uno cuesta $40; 40 × 6 = 240.'},
{s:'Si 5 lápices cuestan $20, un lápiz cuesta $5.',v:false,y:'20 ÷ 5 = $4.'}],
ex:[{s:'Un coche recorre 120 km en 2 horas. A la misma velocidad, ¿cuánto recorre en 5 horas?',o:['300 km','240 km','600 km'],y:'60 km por hora × 5 = 300 km.'},
{s:'6 manzanas cuestan $30. ¿Cuánto cuestan 10?',o:['$50','$60','$40'],y:'Una cuesta $5; 5 × 10 = 50.'}]},

{t:'Relaciones proporcionales y no proporcionales',c:'Proporcional o no',e:[
'Dos cantidades son <b>proporcionales</b> cuando, si una se multiplica por un número, la otra se multiplica por el mismo número. Por ejemplo, el precio y la cantidad de kilos de tortilla: el doble de kilos cuesta el doble.',
'Una forma de comprobarlo: divide cada par de valores. Si siempre da el mismo resultado (la <b>constante de proporcionalidad</b>), la relación es proporcional.',
'Muchas relaciones <b>no</b> son proporcionales. Tu edad y tu estatura: a los 6 años no medías la mitad que a los 12. Y si en una tienda te regalan un producto al comprar tres, el precio ya no es proporcional.'],
x:['1 kg de tortilla cuesta $25, 2 kg $50, 3 kg $75: siempre 25 por kilo. Es proporcional.','Un taxi cobra $10 al subir y $5 por kilómetro: 1 km cuesta $15 y 2 km $20. No es el doble, así que no es proporcional.'],
k:'Si al duplicar una cantidad la otra también se duplica (cociente constante), es proporcional.',
q:[{s:'¿Cuál relación es proporcional?',o:['Kilos de tortilla y su precio','Edad y estatura','Edad y número de zapato'],y:'El doble de kilos cuesta el doble.',p:'Busca la que siempre se duplica junta.'},
{s:'Un taxi cobra $10 fijos más $5 por km. ¿Es proporcional?',o:['No, porque el cobro fijo rompe el doble','Sí, siempre','Sí, porque cobra por km'],y:'1 km = $15 y 2 km = $20: no es el doble.',p:'Compara 1 km y 2 km.'},
{s:'1 kg cuesta $25 y 3 kg cuestan $75. ¿Cuál es la constante?',o:['25','3','75'],y:'75 ÷ 3 = 25.',p:'Divide el precio entre los kilos.'},
{s:'¿Cómo compruebas si una tabla es proporcional?',o:['Divides cada par y ves si da lo mismo','Sumas todos los valores','Ordenas los números'],y:'El cociente debe ser constante.',p:'Divide.'}],
v:[{s:'La edad y la estatura de una persona son proporcionales.',v:false,y:'No crecemos al mismo ritmo siempre.'},
{s:'Si 2 cajas pesan 10 kg y 4 cajas iguales pesan 20 kg, la relación es proporcional.',v:true,y:'El doble de cajas pesa el doble.'}],
ex:[{s:'Tabla: 2 → 8, 4 → 16, 5 → 20. ¿Es proporcional?',o:['Sí, la constante es 4','No','Sí, la constante es 2'],y:'8 ÷ 2 = 16 ÷ 4 = 20 ÷ 5 = 4.'},
{s:'¿Cuál NO es proporcional?',o:['El cobro de un taxi con banderazo','El precio de varios kilos de azúcar','La distancia a velocidad constante'],y:'El banderazo es un cobro fijo.'}]},

{t:'Comparación de razones',c:'Comparar razones',e:[
'Una <b>razón</b> compara dos cantidades. Se escribe como «2 de cada 5», como fracción 2/5 o como 2 : 5.',
'Para saber cuál de dos razones es mayor, conviene convertirlas a algo comparable: a <b>fracciones con el mismo denominador</b>, a <b>decimales</b> o a <b>porcentajes</b>.',
'Ejemplo: en un jugo hay 2 vasos de concentrado por cada 5 vasos de mezcla (2/5 = 0.4), y en otro 3 de cada 8 (3/8 = 0.375). El primero sabe más a fruta porque 0.4 es mayor que 0.375.'],
x:['En el grupo A, 12 de 30 alumnos usan lentes (40 %); en el grupo B, 10 de 20 (50 %). En proporción, hay más en el grupo B.','Un paquete trae 3 galletas por $12 ($4 cada una) y otro 5 por $15 ($3 cada una): el segundo conviene más.'],
k:'Para comparar razones, conviértelas a decimales, porcentajes o fracciones equivalentes.',
q:[{s:'¿Qué jugo es más concentrado: 2 de cada 5 o 3 de cada 8?',o:['2 de cada 5','3 de cada 8','Son iguales'],y:'2/5 = 0.4 y 3/8 = 0.375.',p:'Conviértelos a decimales.'},
{s:'¿Cuál razón es igual a 1 de cada 2?',o:['5 de cada 10','5 de cada 20','2 de cada 5'],y:'5/10 = 1/2.',p:'Busca una fracción equivalente a un medio.'},
{s:'¿Qué paquete conviene: 3 galletas por $12 o 5 por $15?',o:['5 por $15','3 por $12','Cuestan lo mismo'],y:'$3 contra $4 por galleta.',p:'Calcula el precio de una galleta.'},
{s:'12 de 30 alumnos usan lentes. ¿Qué porcentaje es?',o:['40 %','12 %','30 %'],y:'12/30 = 0.4 = 40 %.',p:'Divide 12 entre 30.'}],
v:[{s:'3/4 es una razón mayor que 2/3.',v:true,y:'0.75 es mayor que 0.666…'},
{s:'Para comparar razones basta con ver cuál tiene el número más grande arriba.',v:false,y:'Hay que considerar también el total.'}],
ex:[{s:'En el equipo rojo anotan 6 de 10 tiros y en el azul 8 de 16. ¿Cuál tiene mejor puntería?',o:['El rojo','El azul','Igual'],y:'60 % contra 50 %.'},
{s:'¿Cuál razón es equivalente a 2 : 3?',o:['4 : 6','3 : 2','2 : 6'],y:'Se multiplican ambos por 2.'}]},

{t:'Problemas de razones',c:'Problemas de razones',e:[
'Las razones ayudan a <b>repartir</b> y a <b>escalar</b> cantidades. Si en un grupo hay 2 niños por cada 3 niñas, la razón es 2 : 3.',
'Para repartir un total, suma las partes de la razón: 2 + 3 = <b>5 partes</b>. Si el grupo tiene 30 alumnos, cada parte vale 30 ÷ 5 = 6. Hay 2 × 6 = <b>12 niños</b> y 3 × 6 = <b>18 niñas</b>.',
'Para escalar, multiplica las dos partes por el mismo número: una pintura que lleva 1 litro de azul por 4 de blanco necesita 3 de azul y 12 de blanco si haces el triple.'],
x:['Un agua de jamaica lleva 1 taza de concentrado por cada 6 de agua. Para 3 tazas de concentrado se necesitan 18 de agua.','Dos hermanos se reparten $50 en razón 2 : 3: uno recibe $20 y el otro $30.'],
k:'Para repartir: suma las partes, divide el total entre esa suma y multiplica por cada parte.',
q:[{s:'Niños y niñas en razón 2 : 3, total 30 alumnos. ¿Cuántos niños hay?',o:['12','18','10'],y:'30 ÷ 5 = 6; 2 × 6 = 12.',p:'Suma las partes: 2 + 3.'},
{s:'Se reparten $50 en razón 2 : 3. ¿Cuánto recibe la parte mayor?',o:['$30','$20','$25'],y:'50 ÷ 5 = 10; 3 × 10 = 30.',p:'Cada parte vale 50 ÷ 5.'},
{s:'1 taza de concentrado por 6 de agua. ¿Cuánta agua para 3 tazas de concentrado?',o:['18 tazas','9 tazas','6 tazas'],y:'Se triplica: 6 × 3 = 18.',p:'Triplica ambas partes.'},
{s:'Pintura: 1 litro de azul por 4 de blanco. Para 2 litros de azul, ¿cuánto blanco?',o:['8 litros','6 litros','4 litros'],y:'Se duplica la razón.',p:'Duplica ambas partes.'}],
v:[{s:'En la razón 3 : 1, si hay 12 de la primera cantidad, hay 4 de la segunda.',v:true,y:'12 ÷ 3 = 4.'},
{s:'Para repartir en razón 1 : 4 se divide el total entre 4.',v:false,y:'Se divide entre 1 + 4 = 5 partes.'}],
ex:[{s:'Una mezcla lleva arena y cemento en razón 3 : 1. Si usas 12 cubetas de arena, ¿cuántas de cemento?',o:['4','3','36'],y:'12 ÷ 3 = 4.'},
{s:'Se reparten 40 canicas en razón 1 : 3. ¿Cuántas recibe la parte menor?',o:['10','13','30'],y:'40 ÷ 4 = 10.'}]},

{t:'Cálculo de un porcentaje',c:'Calcular porcentajes',e:[
'<b>Porcentaje</b> significa «de cada cien». El 25 % de algo son 25 de cada 100 partes.',
'Hay atajos muy útiles: el <b>50 %</b> es la mitad; el <b>25 %</b> es la cuarta parte; el <b>10 %</b> se obtiene dividiendo entre 10 (recorres el punto un lugar a la izquierda); y el <b>1 %</b>, dividiendo entre 100.',
'Para cualquier otro, combina: el 30 % de 80 es 3 veces el 10 % (3 × 8 = 24). O multiplica por el porcentaje y divide entre 100: 15 % de 60 = 15 × 60 ÷ 100 = 9.'],
x:['El 10 % de $250 es $25, así que el 20 % es $50.','Si 40 % de los 25 alumnos prefieren futbol, son 10 alumnos.'],
k:'50 % es la mitad, 25 % la cuarta parte, 10 % dividir entre 10.',
q:[{s:'¿Cuánto es el 25 % de 80?',o:['20','25','40'],y:'La cuarta parte de 80 es 20.',p:'Divide entre 4.'},
{s:'¿Cuánto es el 10 % de 250?',o:['25','2.5','10'],y:'250 ÷ 10 = 25.',p:'Recorre el punto un lugar.'},
{s:'¿Cuánto es el 30 % de 80?',o:['24','30','8'],y:'10 % = 8; × 3 = 24.',p:'Calcula el 10 % y multiplica por 3.'},
{s:'¿Cuánto es el 50 % de 46?',o:['23','50','4.6'],y:'La mitad de 46.',p:'Mitad.'}],
v:[{s:'El 1 % de 300 es 3.',v:true,y:'300 ÷ 100 = 3.'},
{s:'El 20 % de 50 es 20.',v:false,y:'Es 10.'}],
ex:[{s:'¿Cuánto es el 15 % de 60?',o:['9','15','6'],y:'10 % = 6, 5 % = 3; 6 + 3 = 9.'},
{s:'De 25 alumnos, el 40 % prefiere futbol. ¿Cuántos son?',o:['10','40','15'],y:'10 % = 2.5; × 4 = 10.'}]},

{t:'Porcentajes menores y mayores a 100',c:'Porcentajes y el 100 %',e:[
'El <b>100 %</b> es el total, el entero completo. Un porcentaje <b>menor a 100</b> es una parte del total; uno <b>mayor a 100</b> es más que el total.',
'El 150 % de 40 es 40 + 20 = <b>60</b> (el total más la mitad). El 200 % es el doble. Se usa cuando algo crece: «las ventas aumentaron al 120 %» significa que ahora hay más que antes.',
'También existen porcentajes muy pequeños, como el 0.5 %, que es la mitad del 1 %.'],
x:['Si una planta medía 20 cm y ahora mide el 200 %, mide 40 cm.','Si una lata trae «25 % más gratis» y antes tenía 400 g, ahora tiene 500 g, es decir, el 125 %.'],
k:'100 % es el total. Más de 100 % es más que el total: 200 % es el doble.',
q:[{s:'¿Cuánto es el 150 % de 40?',o:['60','40','150'],y:'40 + la mitad de 40 = 60.',p:'Es el total más la mitad.'},
{s:'¿Qué significa el 200 % de una cantidad?',o:['El doble','La mitad','El total'],y:'Dos veces el total.',p:'Dos veces cien.'},
{s:'El 100 % de 75 es:',o:['75','100','7.5'],y:'El 100 % es todo.',p:'Es el total.'},
{s:'Una lata de 400 g trae 25 % más. ¿Cuánto trae ahora?',o:['500 g','425 g','800 g'],y:'25 % de 400 = 100; 400 + 100 = 500.',p:'Calcula el 25 % y súmalo.'}],
v:[{s:'Un porcentaje no puede ser mayor que 100.',v:false,y:'Sí puede: indica más que el total.'},
{s:'El 50 % es menor que el total.',v:true,y:'Es la mitad.'}],
ex:[{s:'Una planta medía 20 cm y ahora mide el 150 % de esa altura. ¿Cuánto mide?',o:['30 cm','35 cm','150 cm'],y:'20 + 10 = 30.'},
{s:'¿Cuál porcentaje representa más que el total?',o:['120 %','90 %','100 %'],y:'Es mayor que 100 %.'}]},

{t:'Problemas con cálculos de porcentajes',c:'Problemas con porcentajes',e:[
'Los porcentajes están en todas partes: descuentos, aumentos, propinas y calificaciones.',
'En un <b>descuento</b>, calculas el porcentaje y lo <b>restas</b>: unos tenis de $350 con 20 % de descuento: 20 % de 350 = 70; pagas 350 − 70 = <b>$280</b>. En un <b>aumento</b>, lo <b>sumas</b>: si un pasaje de $10 sube 10 %, ahora cuesta $11.',
'Para saber qué porcentaje es una parte, divide la parte entre el total y multiplica por 100: si aciertas 18 de 20 preguntas, 18 ÷ 20 = 0.9, es decir, el <b>90 %</b>.'],
x:['Una mochila de $500 con 30 % de descuento cuesta $350.','En un examen de 25 preguntas, 20 aciertos equivalen al 80 %.'],
k:'Descuento: calcula y resta. Aumento: calcula y suma. Qué porcentaje es: parte ÷ total × 100.',
q:[{s:'Unos tenis de $350 tienen 20 % de descuento. ¿Cuánto pagas?',o:['$280','$330','$70'],y:'20 % de 350 = 70; 350 − 70 = 280.',p:'Calcula el descuento y réstalo.'},
{s:'Un pasaje de $10 sube 10 %. ¿Cuánto cuesta ahora?',o:['$11','$20','$10.10'],y:'10 % de 10 = 1; 10 + 1 = 11.',p:'Calcula el aumento y súmalo.'},
{s:'Aciertas 18 de 20 preguntas. ¿Qué porcentaje es?',o:['90 %','18 %','80 %'],y:'18 ÷ 20 = 0.9.',p:'Divide la parte entre el total.'},
{s:'Una mochila de $500 tiene 30 % de descuento. ¿Cuánto cuesta?',o:['$350','$470','$150'],y:'30 % de 500 = 150; 500 − 150 = 350.',p:'Calcula el 10 % y multiplica por 3.'}],
v:[{s:'En un descuento, el porcentaje se suma al precio.',v:false,y:'Se resta.'},
{s:'20 aciertos de 25 equivalen al 80 %.',v:true,y:'20 ÷ 25 = 0.8.'}],
ex:[{s:'Un libro de $200 tiene 15 % de descuento. ¿Cuánto pagas?',o:['$170','$185','$30'],y:'15 % de 200 = 30; 200 − 30 = 170.'},
{s:'De 40 alumnos, 10 llegaron en bicicleta. ¿Qué porcentaje es?',o:['25 %','10 %','40 %'],y:'10 ÷ 40 = 0.25.'}]},

{t:'Análisis de elementos del círculo',c:'Elementos del círculo',e:[
'La <b>circunferencia</b> es la línea curva cerrada cuyos puntos están todos a la misma distancia de un punto llamado <b>centro</b>. El <b>círculo</b> es la superficie que queda dentro.',
'Sus elementos: el <b>radio</b> va del centro a la circunferencia; el <b>diámetro</b> cruza de un lado a otro pasando por el centro y mide <b>el doble del radio</b>; la <b>cuerda</b> une dos puntos de la circunferencia sin pasar necesariamente por el centro; y el <b>arco</b> es un pedazo de la circunferencia.',
'El diámetro es la cuerda más larga posible.'],
x:['Una pizza de 30 cm de diámetro tiene un radio de 15 cm.','Las manecillas de un reloj se mueven como radios alrededor del centro.'],
k:'El diámetro mide el doble del radio y es la cuerda más larga.',
q:[{s:'¿Cuánto mide el diámetro si el radio mide 7 cm?',o:['14 cm','7 cm','3.5 cm'],y:'El diámetro es el doble del radio.',p:'Multiplica por 2.'},
{s:'¿Qué segmento une el centro con la circunferencia?',o:['El radio','La cuerda','El arco'],y:'Todos los radios miden lo mismo.',p:'Sale del centro.'},
{s:'¿Qué es un arco?',o:['Un pedazo de la circunferencia','Una línea recta por el centro','El punto central'],y:'Es una parte de la curva.',p:'Es curvo.'},
{s:'¿Cuál es la cuerda más larga de una circunferencia?',o:['El diámetro','El radio','Cualquier arco'],y:'Pasa por el centro.',p:'Pasa por el centro.'}],
v:[{s:'Todos los radios de una circunferencia miden lo mismo.',v:true,y:'Por eso es perfectamente redonda.'},
{s:'El radio mide el doble del diámetro.',v:false,y:'Es al revés: el diámetro mide el doble.'}],
ex:[{s:'Una pizza mide 30 cm de diámetro. ¿Cuánto mide su radio?',o:['15 cm','60 cm','30 cm'],y:'La mitad del diámetro.'},
{s:'Un segmento une dos puntos de la circunferencia sin pasar por el centro. Es:',o:['Una cuerda','Un radio','Un diámetro'],y:'Si pasara por el centro sería diámetro.'}]},

{t:'Cómo usar π',c:'El número π',e:[
'Si divides lo que mide el contorno de cualquier círculo entre su diámetro, siempre obtienes el mismo número: <b>π (pi)</b>, que vale aproximadamente <b>3.14</b>.',
'Por eso, para calcular el <b>perímetro</b> (la longitud de la circunferencia) multiplicas: <b>π × diámetro</b>. Una rueda de 50 cm de diámetro mide 3.14 × 50 = 157 cm de contorno.',
'Para el <b>área</b> del círculo usas: <b>π × radio × radio</b>. Un círculo de radio 2 cm tiene un área de 3.14 × 2 × 2 = 12.56 cm².'],
x:['Una alberca redonda de 4 m de diámetro tiene un contorno de 3.14 × 4 = 12.56 m.','Un plato de 10 cm de radio tiene un área de 3.14 × 10 × 10 = 314 cm².'],
k:'π ≈ 3.14. Perímetro = π × diámetro. Área = π × radio × radio.',
q:[{s:'¿Cuánto vale π aproximadamente?',o:['3.14','2.5','10'],y:'Es un número que nunca termina, pero usamos 3.14.',p:'Un poco más de 3.'},
{s:'Perímetro de un círculo de 10 cm de diámetro:',o:['31.4 cm','314 cm','13.14 cm'],y:'3.14 × 10 = 31.4.',p:'Multiplica π por el diámetro.'},
{s:'Área de un círculo de radio 2 cm:',o:['12.56 cm²','6.28 cm²','4 cm²'],y:'3.14 × 2 × 2 = 12.56.',p:'π × radio × radio.'},
{s:'¿Qué se obtiene al dividir el perímetro de un círculo entre su diámetro?',o:['π','El radio','El área'],y:'Siempre da lo mismo.',p:'Es un número especial.'}],
v:[{s:'Una rueda de 50 cm de diámetro tiene un perímetro de 157 cm.',v:true,y:'3.14 × 50 = 157.'},
{s:'Para el área del círculo se multiplica π por el diámetro.',v:false,y:'Eso es el perímetro. El área es π × r × r.'}],
ex:[{s:'¿Cuál es el perímetro de una alberca redonda de 4 m de diámetro?',o:['12.56 m','8 m','50.24 m'],y:'3.14 × 4 = 12.56.'},
{s:'¿Cuál es el área de un plato de 10 cm de radio?',o:['314 cm²','31.4 cm²','62.8 cm²'],y:'3.14 × 10 × 10 = 314.'}]},

{t:'Polígonos regulares e irregulares',c:'Polígonos',e:[
'Un <b>polígono</b> es una figura plana cerrada formada por segmentos rectos llamados lados. Se nombran según su número de lados: triángulo (3), cuadrilátero (4), pentágono (5), hexágono (6), heptágono (7), octágono (8).',
'Un polígono es <b>regular</b> cuando todos sus lados miden lo mismo y todos sus ángulos son iguales, como el cuadrado o la señal de alto (octágono). Es <b>irregular</b> cuando no cumple eso, como un rectángulo o un triángulo con lados distintos.',
'El círculo no es un polígono porque su borde es curvo.'],
x:['Los panales de las abejas tienen forma de hexágonos regulares.','Un terreno con cuatro lados de distinta medida es un cuadrilátero irregular.'],
k:'Regular: todos los lados y ángulos iguales. Irregular: no.',
q:[{s:'¿Cuántos lados tiene un hexágono?',o:['6','5','8'],y:'Hexa significa seis.',p:'Como los panales de abeja.'},
{s:'¿Cuál es un polígono regular?',o:['Un cuadrado','Un rectángulo largo','Un triángulo de lados 3, 4 y 5'],y:'Lados y ángulos iguales.',p:'Todos sus lados iguales.'},
{s:'La señal de alto tiene forma de:',o:['Octágono','Hexágono','Pentágono'],y:'Tiene 8 lados.',p:'Cuenta: son 8.'},
{s:'¿Por qué el círculo no es un polígono?',o:['Porque su borde es curvo','Porque es muy pequeño','Porque tiene 4 lados'],y:'Los polígonos tienen lados rectos.',p:'Los polígonos tienen lados rectos.'}],
v:[{s:'Un rectángulo es un polígono regular.',v:false,y:'Sus lados no miden todos lo mismo.'},
{s:'Un pentágono tiene 5 lados.',v:true,y:'Penta significa cinco.'}],
ex:[{s:'¿Qué condición cumple un polígono regular?',o:['Lados y ángulos iguales','Al menos un lado curvo','Más de 10 lados'],y:'Por ejemplo, el triángulo equilátero.'},
{s:'¿Cómo se llama un polígono de 7 lados?',o:['Heptágono','Hexágono','Octágono'],y:'Hepta significa siete.'}]},

{t:'Transportadores y ángulos (Parte 1)',c:'Medir ángulos',e:[
'Un <b>ángulo</b> es la abertura entre dos líneas que salen de un mismo punto, llamado <b>vértice</b>. Se mide en <b>grados (°)</b> con un <b>transportador</b>.',
'Para medir: coloca el centro del transportador en el vértice, alinea la línea de 0° con uno de los lados y lee el número por donde pasa el otro lado. Cuida usar la escala que empieza en 0 de ese lado.',
'Según su medida, los ángulos son: <b>agudo</b> (menos de 90°), <b>recto</b> (exactamente 90°), <b>obtuso</b> (más de 90° y menos de 180°) y <b>llano</b> (180°, una línea recta).'],
x:['La esquina de una hoja forma un ángulo recto de 90°.','Las manecillas a las 2:00 forman un ángulo agudo de 60°.'],
k:'Agudo < 90°, recto = 90°, obtuso entre 90° y 180°, llano = 180°.',
q:[{s:'Un ángulo de 45° es:',o:['Agudo','Recto','Obtuso'],y:'Es menor de 90°.',p:'Menos de 90°.'},
{s:'¿Cuánto mide un ángulo recto?',o:['90°','180°','45°'],y:'Como la esquina de una hoja.',p:'Esquina de un cuadrado.'},
{s:'Un ángulo de 120° es:',o:['Obtuso','Agudo','Llano'],y:'Está entre 90° y 180°.',p:'Más de 90° y menos de 180°.'},
{s:'¿Dónde se coloca el centro del transportador?',o:['En el vértice del ángulo','En la punta de un lado','En cualquier lugar'],y:'El vértice es donde se unen los lados.',p:'Donde se juntan las líneas.'}],
v:[{s:'Un ángulo llano mide 180°.',v:true,y:'Forma una línea recta.'},
{s:'Un ángulo de 95° es agudo.',v:false,y:'Es obtuso.'}],
ex:[{s:'Las manecillas de un reloj a las 3:00 forman un ángulo:',o:['Recto','Llano','Agudo'],y:'Miden 90°.'},
{s:'¿Con qué instrumento se miden los ángulos?',o:['Con el transportador','Con el compás','Con la balanza'],y:'Mide en grados.'}]},

{t:'Transportadores y ángulos (Parte 2)',c:'Trazar ángulos',e:[
'Para <b>trazar</b> un ángulo con el transportador: dibuja una línea (el primer lado), marca el vértice en un extremo, coloca ahí el centro del transportador alineado con la línea, haz una marca en la medida que quieres y une el vértice con esa marca.',
'Un dato muy útil: los tres ángulos interiores de cualquier <b>triángulo</b> siempre suman <b>180°</b>. Los cuatro de un <b>cuadrilátero</b> suman <b>360°</b>.',
'Así puedes encontrar un ángulo que falta: si un triángulo tiene ángulos de 50° y 70°, el tercero mide 180 − 50 − 70 = <b>60°</b>.'],
x:['En un triángulo rectángulo, si un ángulo agudo mide 30°, el otro mide 60° (90 + 30 + 60 = 180).','Un cuadrado tiene cuatro ángulos de 90°: 4 × 90 = 360°.'],
k:'Los ángulos de un triángulo suman 180° y los de un cuadrilátero 360°.',
q:[{s:'¿Cuánto suman los ángulos interiores de un triángulo?',o:['180°','360°','90°'],y:'Siempre, sin importar su forma.',p:'Es un ángulo llano.'},
{s:'Un triángulo tiene ángulos de 50° y 70°. ¿Cuánto mide el tercero?',o:['60°','80°','120°'],y:'180 − 50 − 70 = 60.',p:'Resta ambos a 180.'},
{s:'¿Cuánto suman los ángulos de un cuadrilátero?',o:['360°','180°','270°'],y:'Como 4 ángulos rectos.',p:'Piensa en un cuadrado: 4 × 90.'},
{s:'En un triángulo rectángulo un ángulo agudo mide 30°. ¿Y el otro?',o:['60°','90°','150°'],y:'90 + 30 + 60 = 180.',p:'Uno de sus ángulos mide 90°.'}],
v:[{s:'Un triángulo puede tener dos ángulos rectos.',v:false,y:'Ya sumarían 180° y no quedaría nada para el tercero.'},
{s:'Los ángulos de un cuadrado suman 360°.',v:true,y:'4 × 90° = 360°.'}],
ex:[{s:'Un cuadrilátero tiene ángulos de 90°, 90° y 100°. ¿Cuánto mide el cuarto?',o:['80°','90°','100°'],y:'360 − 280 = 80.'},
{s:'Los tres ángulos de un triángulo equilátero son iguales. ¿Cuánto mide cada uno?',o:['60°','90°','45°'],y:'180 ÷ 3 = 60.'}]},

{t:'Simetría',c:'Simetría',e:[
'Una figura tiene <b>simetría</b> cuando una línea, llamada <b>eje de simetría</b>, la divide en dos partes iguales que coinciden al doblarla, como un reflejo en un espejo.',
'Algunas figuras tienen un solo eje (un corazón), otras varios (un cuadrado tiene 4, un triángulo equilátero 3) y el círculo tiene infinitos. Otras, como un trapecio irregular, no tienen ninguno.',
'Para trazar la figura simétrica de un dibujo respecto a un eje, cada punto debe quedar a la <b>misma distancia</b> del eje, pero del otro lado.'],
x:['Las alas de una mariposa son simétricas: el cuerpo es el eje.','La letra A tiene un eje de simetría vertical; la letra F no tiene ninguno.'],
k:'El eje de simetría divide la figura en dos mitades que coinciden como un espejo.',
q:[{s:'¿Cuántos ejes de simetría tiene un cuadrado?',o:['4','2','1'],y:'Dos por las diagonales y dos por los lados medios.',p:'Cuenta diagonales y líneas por la mitad.'},
{s:'¿Qué figura tiene infinitos ejes de simetría?',o:['El círculo','El triángulo','El rectángulo'],y:'Cualquier diámetro es un eje.',p:'Gira y siempre es igual.'},
{s:'¿Qué letra tiene un eje de simetría vertical?',o:['A','F','G'],y:'Si la doblas por la mitad, coincide.',p:'Doble por la mitad de arriba a abajo.'},
{s:'Al trazar la figura simétrica, cada punto debe quedar:',o:['A la misma distancia del eje, del otro lado','Más lejos del eje','Encima del eje'],y:'Como un reflejo.',p:'Piensa en un espejo.'}],
v:[{s:'Un triángulo equilátero tiene 3 ejes de simetría.',v:true,y:'Uno por cada vértice.'},
{s:'Todas las figuras tienen al menos un eje de simetría.',v:false,y:'Algunas no tienen ninguno.'}],
ex:[{s:'¿Cuál es el eje de simetría de una mariposa?',o:['Su cuerpo, de arriba abajo','Una línea de ala a ala','No tiene'],y:'Las alas son reflejo una de otra.'},
{s:'¿Cuántos ejes de simetría tiene un rectángulo que no es cuadrado?',o:['2','4','0'],y:'Uno horizontal y uno vertical.'}]},

{t:'Características y construcción de un cono',c:'El cono',e:[
'El <b>cono</b> es un cuerpo geométrico con <b>una base circular</b>, una <b>superficie curva</b> y una punta llamada <b>vértice</b> o cúspide.',
'Su <b>altura</b> es la distancia del vértice al centro de la base. La <b>generatriz</b> es la línea que va del vértice a cualquier punto del borde de la base.',
'Para construirlo, su desarrollo plano (la figura que se recorta y se dobla) está formado por un <b>círculo</b> (la base) y un <b>sector circular</b>, parecido a una rebanada de pizza grande, que al enrollarse forma la superficie curva.'],
x:['Un cucurucho de helado y un gorro de fiesta tienen forma de cono.','Los conos naranjas de tránsito también son conos.'],
k:'El cono tiene una base circular, una superficie curva y un vértice. Su plano: un círculo y un sector circular.',
q:[{s:'¿Qué forma tiene la base de un cono?',o:['Circular','Cuadrada','Triangular'],y:'Solo tiene una base.',p:'Mira la parte de abajo de un cucurucho.'},
{s:'¿Cómo se llama la punta del cono?',o:['Vértice o cúspide','Arista','Diámetro'],y:'Es donde termina la superficie curva.',p:'Es la parte de arriba.'},
{s:'¿Qué figuras forman el desarrollo plano de un cono?',o:['Un círculo y un sector circular','Dos círculos y un rectángulo','Seis cuadrados'],y:'El sector se enrolla para formar la superficie curva.',p:'Una de ellas parece rebanada de pizza.'},
{s:'¿Cuál objeto tiene forma de cono?',o:['Un gorro de fiesta','Una lata','Un dado'],y:'Tiene base redonda y punta.',p:'Tiene punta.'}],
v:[{s:'El cono tiene dos bases circulares.',v:false,y:'Tiene una sola base.'},
{s:'La altura del cono va del vértice al centro de la base.',v:true,y:'Es perpendicular a la base.'}],
ex:[{s:'¿Cuántas bases tiene un cono?',o:['Una','Dos','Ninguna'],y:'Una base circular.'},
{s:'La línea que va del vértice al borde de la base se llama:',o:['Generatriz','Radio','Arista'],y:'Genera la superficie curva al girar.'}]},

{t:'Características y construcción de un cilindro',c:'El cilindro',e:[
'El <b>cilindro</b> es un cuerpo geométrico con <b>dos bases circulares iguales y paralelas</b> unidas por una <b>superficie curva</b>.',
'Su <b>altura</b> es la distancia entre las dos bases. No tiene vértices ni aristas rectas.',
'Su desarrollo plano está formado por <b>dos círculos</b> y un <b>rectángulo</b>. El largo del rectángulo es igual al perímetro de la base (π × diámetro) y su ancho es la altura del cilindro.'],
x:['Una lata de atún, un tubo de papel y un vaso recto son cilindros.','Si quitas la etiqueta de una lata y la extiendes, obtienes un rectángulo: es la superficie curva.'],
k:'El cilindro tiene dos bases circulares y una superficie curva. Su plano: dos círculos y un rectángulo.',
q:[{s:'¿Cuántas bases tiene un cilindro?',o:['Dos','Una','Cuatro'],y:'Son círculos iguales y paralelos.',p:'Arriba y abajo.'},
{s:'¿Qué figuras forman el desarrollo plano de un cilindro?',o:['Dos círculos y un rectángulo','Un círculo y un triángulo','Seis cuadrados'],y:'El rectángulo forma la superficie curva.',p:'Piensa en la etiqueta de una lata.'},
{s:'El largo del rectángulo del desarrollo es igual a:',o:['El perímetro de la base','La altura','El radio'],y:'Debe rodear completo el círculo.',p:'Tiene que dar la vuelta al círculo.'},
{s:'¿Cuál objeto es un cilindro?',o:['Una lata de atún','Un cucurucho','Una pirámide'],y:'Tiene dos bases redondas.',p:'Dos tapas redondas.'}],
v:[{s:'El cilindro tiene vértices.',v:false,y:'No tiene vértices.'},
{s:'Las dos bases del cilindro son iguales.',v:true,y:'Son círculos del mismo tamaño.'}],
ex:[{s:'Una lata tiene 7 cm de diámetro. ¿Cuánto mide el largo de su etiqueta?',o:['21.98 cm','14 cm','7 cm'],y:'3.14 × 7 = 21.98.'},
{s:'¿En qué se diferencian el cilindro y el cono?',o:['El cilindro tiene dos bases y el cono una','El cono tiene dos bases','Son iguales'],y:'El cono termina en punta.'}]},

{t:'Perímetros de polígonos y círculos',c:'Perímetros',e:[
'El <b>perímetro</b> es la medida del contorno de una figura: lo que mediría un hilo que la rodea.',
'En un <b>polígono</b> sumas todos sus lados. Si es regular, basta con multiplicar la medida de un lado por el número de lados: un hexágono regular de 5 cm de lado tiene un perímetro de 6 × 5 = <b>30 cm</b>.',
'En el <b>círculo</b> usas π: perímetro = π × diámetro. Un círculo de 6 cm de diámetro tiene un perímetro de 3.14 × 6 = <b>18.84 cm</b>.'],
x:['Para cercar un terreno rectangular de 20 m por 15 m se necesitan 20 + 15 + 20 + 15 = 70 m de malla.','El listón para rodear un pastel redondo de 20 cm de diámetro mide unos 62.8 cm.'],
k:'Polígono: suma de lados (regular: lado × número de lados). Círculo: π × diámetro.',
q:[{s:'Perímetro de un hexágono regular de 5 cm de lado:',o:['30 cm','25 cm','11 cm'],y:'6 × 5 = 30.',p:'Lado por número de lados.'},
{s:'Perímetro de un rectángulo de 20 m por 15 m:',o:['70 m','35 m','300 m'],y:'20 + 15 + 20 + 15 = 70.',p:'Suma los cuatro lados.'},
{s:'Perímetro de un círculo de 6 cm de diámetro:',o:['18.84 cm','9.42 cm','28.26 cm'],y:'3.14 × 6 = 18.84.',p:'π × diámetro.'},
{s:'Un cuadrado tiene 36 cm de perímetro. ¿Cuánto mide cada lado?',o:['9 cm','6 cm','12 cm'],y:'36 ÷ 4 = 9.',p:'Divide entre 4.'}],
v:[{s:'El perímetro de un pentágono regular de 4 cm de lado es 20 cm.',v:true,y:'5 × 4 = 20.'},
{s:'El perímetro mide la superficie de una figura.',v:false,y:'Mide el contorno; la superficie es el área.'}],
ex:[{s:'¿Cuánto listón se necesita para rodear un pastel de 20 cm de diámetro?',o:['62.8 cm','31.4 cm','40 cm'],y:'3.14 × 20 = 62.8.'},
{s:'Un triángulo equilátero tiene 27 cm de perímetro. ¿Cuánto mide cada lado?',o:['9 cm','3 cm','13.5 cm'],y:'27 ÷ 3 = 9.'}]},

{t:'Descomposición para calcular áreas',c:'Áreas por partes',e:[
'El <b>área</b> es la medida de la superficie de una figura, y se expresa en unidades cuadradas como cm² o m².',
'Recuerda: área del <b>rectángulo</b> = base × altura; del <b>triángulo</b> = base × altura ÷ 2.',
'Cuando una figura es complicada, como una L o una casita, se <b>descompone</b> en figuras conocidas, se calcula el área de cada una y se <b>suman</b>. Una casita formada por un cuadrado de 4 × 4 y un triángulo de base 4 y altura 3 tiene 16 + 6 = <b>22 unidades²</b>.'],
x:['Una figura en L se puede partir en dos rectángulos: uno de 6 × 2 = 12 y otro de 3 × 2 = 6. Total: 18 m².','El área de un trapecio se puede obtener partiéndolo en un rectángulo y dos triángulos.'],
k:'Parte la figura en rectángulos y triángulos, calcula cada área y súmalas.',
q:[{s:'Área de un triángulo de base 6 cm y altura 4 cm:',o:['12 cm²','24 cm²','10 cm²'],y:'6 × 4 ÷ 2 = 12.',p:'Base × altura ÷ 2.'},
{s:'Una L se parte en rectángulos de 6 × 2 y 3 × 2. ¿Cuál es su área?',o:['18 unidades²','12 unidades²','13 unidades²'],y:'12 + 6 = 18.',p:'Calcula cada rectángulo y suma.'},
{s:'Casita: cuadrado de 4 × 4 y triángulo de base 4 y altura 3. Área total:',o:['22 unidades²','28 unidades²','19 unidades²'],y:'16 + 6 = 22.',p:'Cuadrado + triángulo.'},
{s:'¿En qué unidades se mide el área?',o:['Unidades cuadradas, como cm²','Centímetros','Litros'],y:'Mide superficie.',p:'Lleva un 2 pequeño.'}],
v:[{s:'El área de un rectángulo de 5 m por 3 m es 15 m².',v:true,y:'5 × 3 = 15.'},
{s:'Para calcular el área de una figura descompuesta se restan las áreas de las partes.',v:false,y:'Se suman (salvo que quites un hueco).'}],
ex:[{s:'Una figura se descompone en un rectángulo de 8 × 3 y un triángulo de base 8 y altura 2. ¿Su área?',o:['32 unidades²','40 unidades²','24 unidades²'],y:'24 + 8 = 32.'},
{s:'¿Cuál es el área de un cuadrado de 7 cm de lado?',o:['49 cm²','28 cm²','14 cm²'],y:'7 × 7 = 49.'}]},

{t:'Poliedros y sólidos platónicos',c:'Poliedros',e:[
'Un <b>poliedro</b> es un cuerpo geométrico cuyas caras son todas <b>polígonos planos</b>. Tiene <b>caras</b>, <b>aristas</b> (donde se juntan dos caras) y <b>vértices</b> (las esquinas). Una esfera o un cilindro no son poliedros porque tienen superficies curvas.',
'Los <b>sólidos platónicos</b> son los poliedros más perfectos: todas sus caras son polígonos regulares iguales. Solo existen <b>cinco</b>: tetraedro (4 caras), cubo o hexaedro (6), octaedro (8), dodecaedro (12) e icosaedro (20).',
'En todo poliedro como estos se cumple la fórmula de Euler: caras + vértices − aristas = 2. El cubo: 6 + 8 − 12 = 2.'],
x:['Un dado común es un cubo, uno de los sólidos platónicos.','Algunos dados de juegos de rol tienen 20 caras: son icosaedros.'],
k:'Poliedro: caras planas. Hay solo 5 sólidos platónicos. Caras + vértices − aristas = 2.',
q:[{s:'¿Cuántos sólidos platónicos existen?',o:['5','6','10'],y:'Tetraedro, cubo, octaedro, dodecaedro e icosaedro.',p:'Los puedes contar con una mano.'},
{s:'¿Cuántas caras tiene un cubo?',o:['6','8','12'],y:'Por eso también se llama hexaedro.',p:'Piensa en un dado.'},
{s:'¿Cuál NO es un poliedro?',o:['La esfera','El cubo','La pirámide'],y:'Su superficie es curva.',p:'Busca la que es redonda.'},
{s:'¿Cuántas aristas tiene un cubo?',o:['12','6','8'],y:'Cada cara tiene 4 lados que comparte con otra.',p:'Cuenta los bordes de un dado.'}],
v:[{s:'El icosaedro tiene 20 caras.',v:true,y:'Icosa significa veinte.'},
{s:'Un cilindro es un poliedro.',v:false,y:'Tiene superficie curva.'}],
ex:[{s:'Un tetraedro tiene 4 caras y 4 vértices. ¿Cuántas aristas tiene?',o:['6','8','4'],y:'4 + 4 − A = 2, así que A = 6.'},
{s:'¿Qué tienen en común los sólidos platónicos?',o:['Todas sus caras son polígonos regulares iguales','Todos tienen 6 caras','Tienen caras curvas'],y:'Por eso son tan especiales.'}]},

{t:'Prismas y pirámides',c:'Prismas y pirámides',e:[
'Los <b>prismas</b> tienen <b>dos bases iguales y paralelas</b> y sus caras laterales son rectángulos. Las <b>pirámides</b> tienen <b>una sola base</b> y sus caras laterales son triángulos que se juntan en un vértice llamado <b>cúspide</b>.',
'Ambos se nombran según la forma de su base: prisma triangular, prisma cuadrangular, prisma hexagonal; pirámide cuadrangular, pirámide pentagonal…',
'Un dato útil: un prisma tiene tantas caras laterales como lados tiene su base. Un prisma hexagonal tiene 6 caras laterales + 2 bases = 8 caras. Una pirámide hexagonal tiene 6 caras laterales + 1 base = 7 caras.'],
x:['Una caja de zapatos es un prisma rectangular.','La pirámide del Sol en Teotihuacan se parece a una pirámide cuadrangular.'],
k:'Prisma: 2 bases y caras laterales rectangulares. Pirámide: 1 base y caras laterales triangulares.',
q:[{s:'¿Cuántas bases tiene una pirámide?',o:['Una','Dos','Tres'],y:'Sus caras laterales se juntan en la cúspide.',p:'Termina en punta.'},
{s:'¿Qué forma tienen las caras laterales de un prisma?',o:['Rectángulos','Triángulos','Círculos'],y:'Unen las dos bases.',p:'Piensa en una caja.'},
{s:'¿Cuántas caras tiene un prisma hexagonal?',o:['8','6','12'],y:'6 laterales + 2 bases.',p:'Laterales más bases.'},
{s:'¿Cuántas caras tiene una pirámide cuadrangular?',o:['5','4','8'],y:'4 triángulos + 1 base cuadrada.',p:'4 laterales + 1 base.'}],
v:[{s:'Una caja de zapatos es un prisma rectangular.',v:true,y:'Tiene dos bases rectangulares.'},
{s:'Las caras laterales de una pirámide son rectángulos.',v:false,y:'Son triángulos.'}],
ex:[{s:'¿Cómo se nombra un prisma cuya base es un triángulo?',o:['Prisma triangular','Pirámide triangular','Cubo'],y:'Se nombra por su base.'},
{s:'¿Cuántas caras laterales tiene una pirámide pentagonal?',o:['5','6','10'],y:'Tantas como lados de la base.'}]},

{t:'Desarrollo de planos de pirámides y prismas',c:'Desarrollos planos',e:[
'El <b>desarrollo plano</b> (o red) de un cuerpo es la figura que obtienes si lo «desarmas» y lo extiendes sobre una mesa. Al recortarlo y doblarlo, se arma el cuerpo.',
'El desarrollo de un <b>prisma</b> tiene sus <b>dos bases</b> y una tira de <b>rectángulos</b> (las caras laterales). El de una <b>pirámide</b> tiene <b>una base</b> rodeada de <b>triángulos</b>.',
'Un mismo cuerpo puede tener varios desarrollos distintos: el cubo, por ejemplo, tiene 11 desarrollos posibles con 6 cuadrados. Al dibujarlos hay que agregar <b>pestañas</b> para pegar.'],
x:['Si desarmas una caja de cereal, obtienes el desarrollo de un prisma rectangular.','Una red en forma de cruz con 6 cuadrados se dobla y forma un cubo.'],
k:'Prisma: 2 bases y rectángulos. Pirámide: 1 base y triángulos. Agrega pestañas para pegar.',
q:[{s:'¿Qué figuras tiene el desarrollo de una pirámide cuadrangular?',o:['Un cuadrado y 4 triángulos','2 cuadrados y 4 rectángulos','6 cuadrados'],y:'La base y sus caras laterales.',p:'Una base y caras triangulares.'},
{s:'¿Cuántos cuadrados forman el desarrollo de un cubo?',o:['6','4','8'],y:'Uno por cada cara.',p:'Cuenta las caras de un dado.'},
{s:'¿Qué figuras tiene el desarrollo de un prisma triangular?',o:['2 triángulos y 3 rectángulos','1 triángulo y 3 triángulos','4 cuadrados'],y:'Dos bases y tres caras laterales.',p:'Dos bases triangulares.'},
{s:'¿Para qué sirven las pestañas en un desarrollo?',o:['Para pegar las caras','Para decorar','Para medir'],y:'Sin ellas, el cuerpo no se sostiene.',p:'Ayudan a armarlo.'}],
v:[{s:'Un cubo tiene un solo desarrollo plano posible.',v:false,y:'Tiene 11.'},
{s:'Al desarmar una caja de cereal se obtiene el desarrollo de un prisma.',v:true,y:'Un prisma rectangular.'}],
ex:[{s:'Un desarrollo tiene 1 hexágono y 6 triángulos. ¿Qué cuerpo forma?',o:['Una pirámide hexagonal','Un prisma hexagonal','Un cubo'],y:'Una base y caras triangulares.'},
{s:'Un desarrollo tiene 2 pentágonos y 5 rectángulos. ¿Qué cuerpo forma?',o:['Un prisma pentagonal','Una pirámide pentagonal','Un cilindro'],y:'Dos bases y caras rectangulares.'}]},

{t:'La unidad cúbica',c:'La unidad cúbica',e:[
'El <b>volumen</b> es el espacio que ocupa un cuerpo. Para medirlo se usa una <b>unidad cúbica</b>: un cubito de 1 cm por lado es <b>1 centímetro cúbico (1 cm³)</b>; uno de 1 m por lado es <b>1 metro cúbico (1 m³)</b>.',
'Medir el volumen es contar cuántos cubitos caben. Una caja de 3 cubos de largo, 2 de ancho y 2 de alto contiene 3 × 2 × 2 = <b>12 cubos</b>.',
'Un dato útil: <b>1 000 cm³ = 1 litro</b>. Un cubo de 10 cm por lado tiene exactamente un litro de capacidad.'],
x:['Un cubo de azúcar mide más o menos 1 cm³.','Un cartón de leche de 1 litro tiene un volumen de 1 000 cm³.'],
k:'El volumen se mide en unidades cúbicas (cm³, m³). Largo × ancho × alto. 1 000 cm³ = 1 litro.',
q:[{s:'¿Cuántos cubitos caben en una caja de 3 × 2 × 2?',o:['12','7','10'],y:'3 × 2 × 2 = 12.',p:'Multiplica las tres medidas.'},
{s:'¿Cuántos cm³ tiene un litro?',o:['1 000','100','10'],y:'Un cubo de 10 cm por lado.',p:'Mil.'},
{s:'Un cubo de 1 cm por lado mide:',o:['1 cm³','1 cm²','1 litro'],y:'Es la unidad cúbica pequeña.',p:'Cúbico lleva un 3.'},
{s:'¿Qué mide el volumen?',o:['El espacio que ocupa un cuerpo','El contorno de una figura','El peso de un objeto'],y:'Se mide en unidades cúbicas.',p:'Espacio.'}],
v:[{s:'Un cubo de 10 cm de lado tiene un volumen de 1 000 cm³.',v:true,y:'10 × 10 × 10 = 1 000.'},
{s:'El volumen se mide en centímetros cuadrados.',v:false,y:'Se mide en unidades cúbicas.'}],
ex:[{s:'¿Cuál es el volumen de una caja de 5 cm × 4 cm × 2 cm?',o:['40 cm³','11 cm³','20 cm³'],y:'5 × 4 × 2 = 40.'},
{s:'¿Cuántos litros caben en 3 000 cm³?',o:['3','30','300'],y:'1 000 cm³ = 1 litro.'}]}
]});
T2_MUNDOS.push({
 "name": "Geografía",
 "sub": "Ética, naturaleza y sociedades",
 "lead": "Sismos, volcanes, huracanes y fronteras: cómo funciona el planeta y cómo prepararnos.",
 "temas": [
  {
   "t": "Sismos, volcanes y tsunamis",
   "c": "Sismos y volcanes",
   "e": [
    "La capa exterior de la Tierra está partida en enormes piezas llamadas <b>placas tectónicas</b>, que se mueven unos centímetros al año. Donde chocan o se rozan ocurren <b>sismos</b> y se forman <b>volcanes</b>.",
    "México está sobre cinco placas, entre ellas la de Cocos y la Norteamericana; por eso tiembla seguido, sobre todo en la costa del Pacífico (Guerrero, Oaxaca, Chiapas, Michoacán) y en el centro del país. También tiene volcanes activos en el <b>Eje Neovolcánico</b>, como el Popocatépetl y el Volcán de Colima.",
    "Un <b>tsunami</b> es una serie de olas gigantes que se forma cuando un sismo ocurre bajo el mar. Estos fenómenos se llaman <b>geológicos</b> porque se originan en el interior de la Tierra. No se pueden predecir con exactitud, pero sí se puede estar preparado: la <b>alerta sísmica</b> avisa unos segundos antes de que llegue la onda a algunas ciudades."
   ],
   "x": [
    "Cuando suena la alerta sísmica, sales por la ruta de evacuación hacia la zona de menor riesgo.",
    "El Popocatépetl lanza fumarolas de ceniza; las autoridades usan un semáforo de alerta volcánica."
   ],
   "k": "Sismos, volcanes y tsunamis son fenómenos geológicos causados por el movimiento de las placas tectónicas.",
   "q": [
    {
     "s": "¿Qué provoca los sismos?",
     "o": [
      "El movimiento de las placas tectónicas",
      "La lluvia",
      "El viento fuerte"
     ],
     "y": "Las placas chocan o se rozan.",
     "p": "Piensa en piezas gigantes de la corteza."
    },
    {
     "s": "¿Qué es un tsunami?",
     "o": [
      "Olas gigantes causadas por un sismo bajo el mar",
      "Un huracán en tierra",
      "Una erupción de lava"
     ],
     "y": "Puede inundar costas.",
     "p": "Ocurre en el mar."
    },
    {
     "s": "¿Dónde están muchos volcanes activos de México?",
     "o": [
      "En el Eje Neovolcánico",
      "En la península de Yucatán",
      "En el desierto de Sonora"
     ],
     "y": "Cruza el centro del país.",
     "p": "Atraviesa el centro de México."
    },
    {
     "s": "¿Para qué sirve la alerta sísmica?",
     "o": [
      "Para avisar segundos antes de que llegue el sismo",
      "Para detener el sismo",
      "Para predecirlo con días de anticipación"
     ],
     "y": "Esos segundos permiten protegerse.",
     "p": "Avisa poco antes."
    }
   ],
   "v": [
    {
     "s": "Los sismos se pueden predecir con exactitud días antes.",
     "v": false,
     "y": "No se pueden predecir; por eso hay que estar preparados."
    },
    {
     "s": "México tiembla seguido porque está sobre varias placas tectónicas.",
     "v": true,
     "y": "Entre ellas la de Cocos y la Norteamericana."
    }
   ],
   "ex": [
    {
     "s": "Los sismos, volcanes y tsunamis son fenómenos:",
     "o": [
      "Geológicos",
      "Hidrometeorológicos",
      "Astronómicos"
     ],
     "y": "Se originan en el interior de la Tierra."
    },
    {
     "s": "¿Qué región de México tiembla con más frecuencia?",
     "o": [
      "La costa del Pacífico",
      "La península de Yucatán",
      "El norte de Coahuila"
     ],
     "y": "Ahí chocan placas tectónicas."
    },
    {
     "s": "¿Qué volcán activo se vigila con un semáforo de alerta?",
     "o": [
      "Popocatépetl",
      "Pico de Orizaba dormido",
      "Monte Fuji"
     ],
     "y": "Está entre Puebla, Morelos y el Estado de México."
    }
   ]
  },
  {
   "t": "Huracanes, inundaciones y sequías: cómo prevenir",
   "c": "Huracanes y prevención",
   "e": [
    "Los <b>fenómenos hidrometeorológicos</b> tienen que ver con el agua y la atmósfera: <b>huracanes</b>, lluvias intensas, <b>inundaciones</b>, granizadas, heladas y <b>sequías</b>.",
    "Un huracán es una gran tormenta que gira, con vientos de más de 119 km/h y lluvias muy fuertes. A México llegan por el Pacífico y por el Atlántico (Golfo de México y Caribe), sobre todo entre junio y noviembre. Una <b>sequía</b> es lo contrario: pasa mucho tiempo sin llover y faltan agua y alimentos.",
    "Un fenómeno natural se vuelve <b>desastre</b> cuando daña a la población. La <b>prevención</b> reduce el daño: conocer los riesgos de tu zona, no construir en cauces de ríos, participar en <b>simulacros</b>, tener una <b>mochila de emergencia</b> (agua, linterna, botiquín, documentos) y un plan familiar. En un sismo: <b>no corro, no grito, no empujo</b>."
   ],
   "x": [
    "Los sismos del 19 de septiembre de 1985 y de 2017 causaron grandes daños en la Ciudad de México; desde entonces se hacen simulacros nacionales.",
    "Antes de que toque tierra un huracán, las autoridades avisan con días de anticipación para evacuar a quien lo necesite."
   ],
   "k": "Huracanes, inundaciones y sequías son hidrometeorológicos. Un fenómeno se vuelve desastre si daña a la población; la prevención salva vidas.",
   "q": [
    {
     "s": "¿Cuál es un fenómeno hidrometeorológico?",
     "o": [
      "Un huracán",
      "Un sismo",
      "Una erupción volcánica"
     ],
     "y": "Se relaciona con el agua y la atmósfera.",
     "p": "Hidro = agua."
    },
    {
     "s": "¿Cuándo un fenómeno natural se vuelve desastre?",
     "o": [
      "Cuando causa daños graves a la población",
      "Siempre que llueve",
      "Cuando ocurre de noche"
     ],
     "y": "Depende del daño y de la preparación.",
     "p": "Piensa en las consecuencias."
    },
    {
     "s": "¿Qué debe llevar una mochila de emergencia?",
     "o": [
      "Agua, linterna, botiquín y documentos",
      "Juguetes y dulces",
      "Ropa de fiesta"
     ],
     "y": "Lo necesario para las primeras horas.",
     "p": "Lo indispensable."
    },
    {
     "s": "¿Qué se hace durante un sismo?",
     "o": [
      "No corro, no grito, no empujo",
      "Correr por las escaleras",
      "Usar el elevador"
     ],
     "y": "Y seguir la ruta de evacuación.",
     "p": "Son tres «no»."
    }
   ],
   "v": [
    {
     "s": "Una sequía es un periodo largo sin lluvias.",
     "v": true,
     "y": "Provoca falta de agua y alimentos."
    },
    {
     "s": "Los simulacros no sirven para nada.",
     "v": false,
     "y": "Enseñan a actuar rápido y con calma."
    }
   ],
   "ex": [
    {
     "s": "¿Por qué mares llegan huracanes a México?",
     "o": [
      "Por el Pacífico y el Atlántico",
      "Solo por el Pacífico",
      "Por el océano Índico"
     ],
     "y": "El Atlántico incluye el Golfo de México y el Caribe."
    },
    {
     "s": "¿Qué acción ayuda a prevenir daños por una inundación?",
     "o": [
      "No construir en el cauce de un río",
      "Tirar basura en las coladeras",
      "Ignorar las alertas"
     ],
     "y": "Los ríos crecen con las lluvias."
    },
    {
     "s": "¿Qué día ocurrieron dos grandes sismos en la Ciudad de México, en 1985 y 2017?",
     "o": [
      "19 de septiembre",
      "16 de septiembre",
      "20 de noviembre"
     ],
     "y": "Desde entonces ese día hay simulacro nacional."
    }
   ]
  },
  {
   "t": "Conflictos territoriales",
   "c": "Conflictos territoriales",
   "e": [
    "Un <b>conflicto territorial</b> ocurre cuando dos o más grupos o países quieren el mismo territorio o no se ponen de acuerdo sobre dónde está la frontera.",
    "Sus causas suelen ser los <b>recursos</b> (agua, petróleo, tierras fértiles, minerales), la <b>historia</b> (un territorio que perteneció a uno y luego a otro), la <b>identidad</b> (pueblos que se sienten parte de un lugar) o la <b>ubicación estratégica</b>.",
    "La mejor forma de resolverlos es <b>pacífica</b>: el diálogo, la negociación, los tratados y los tribunales internacionales. México perdió más de la mitad de su territorio después de la guerra con Estados Unidos (1846–1848), que terminó con el Tratado de Guadalupe Hidalgo."
   ],
   "x": [
    "Dos comunidades vecinas pueden discutir por el uso del agua de un río; un acuerdo puede repartir el agua de forma justa.",
    "Muchos países han llevado disputas de fronteras a la Corte Internacional de Justicia para que decida sin guerra."
   ],
   "k": "Los conflictos territoriales nacen por recursos, historia o identidad; se deben resolver con diálogo y acuerdos.",
   "q": [
    {
     "s": "¿Qué es un conflicto territorial?",
     "o": [
      "Un desacuerdo por un territorio o una frontera",
      "Un partido de futbol",
      "Un cambio de clima"
     ],
     "y": "Puede darse entre comunidades o países.",
     "p": "Territorio es tierra."
    },
    {
     "s": "¿Cuál es una causa común de conflictos territoriales?",
     "o": [
      "Los recursos como el agua o el petróleo",
      "El color de las banderas",
      "La música"
     ],
     "y": "Todos quieren aprovecharlos.",
     "p": "Algo valioso que hay en el lugar."
    },
    {
     "s": "¿Cuál es la mejor forma de resolverlos?",
     "o": [
      "El diálogo y los acuerdos",
      "La violencia",
      "Ignorarlos"
     ],
     "y": "Evita sufrimiento.",
     "p": "Hablando."
    },
    {
     "s": "¿Con qué tratado terminó la guerra entre México y Estados Unidos?",
     "o": [
      "Tratado de Guadalupe Hidalgo",
      "Tratado de Córdoba",
      "T-MEC"
     ],
     "y": "México perdió más de la mitad de su territorio.",
     "p": "Lleva el nombre de un lugar y un apellido de héroe."
    }
   ],
   "v": [
    {
     "s": "Los tribunales internacionales ayudan a resolver disputas de fronteras.",
     "v": true,
     "y": "Es una vía pacífica."
    },
    {
     "s": "Los conflictos territoriales solo pueden resolverse con guerras.",
     "v": false,
     "y": "El diálogo y los tratados son mejores caminos."
    }
   ],
   "ex": [
    {
     "s": "Dos pueblos discuten por el agua de un río. ¿Qué solución es pacífica?",
     "o": [
      "Un acuerdo para repartir el agua",
      "Bloquear el río",
      "Expulsar al otro pueblo"
     ],
     "y": "El diálogo permite soluciones justas."
    },
    {
     "s": "¿Entre qué años fue la guerra entre México y Estados Unidos?",
     "o": [
      "1846–1848",
      "1910–1920",
      "1810–1821"
     ],
     "y": "Terminó con el Tratado de Guadalupe Hidalgo."
    },
    {
     "s": "Un territorio con mucho petróleo puede generar conflicto por:",
     "o": [
      "Sus recursos",
      "Su clima frío",
      "Su idioma"
     ],
     "y": "Los recursos valiosos generan disputas."
    }
   ]
  }
 ]
});
T2_MUNDOS.push({
 "name": "Historia",
 "sub": "México en el siglo XX",
 "lead": "De la Revolución al año 2000: cómo cambió México en cien años.",
 "temas": [
  {
   "t": "La Revolución Mexicana (1910–1917)",
   "c": "La Revolución Mexicana",
   "e": [
    "A principios del siglo XX, <b>Porfirio Díaz</b> llevaba más de 30 años en el poder. Hubo progreso en trenes e industria, pero la mayoría de la población era pobre: muchos campesinos no tenían tierras y los obreros trabajaban en malas condiciones.",
    "En 1910 <b>Francisco I. Madero</b> llamó a levantarse en armas con el <b>Plan de San Luis</b>; la lucha empezó el <b>20 de noviembre de 1910</b> y Díaz renunció en 1911. Después hubo años de guerra entre distintos grupos. Participaron líderes como <b>Emiliano Zapata</b> en el sur, que exigía «Tierra y libertad», <b>Francisco Villa</b> en el norte y <b>Venustiano Carranza</b>.",
    "La Revolución terminó con la <b>Constitución de 1917</b>, que reconoció derechos muy avanzados para su época: educación laica y gratuita (artículo 3.º), reparto de tierras (27) y derechos de los trabajadores, como la jornada de 8 horas (123). Sigue vigente hoy, con reformas."
   ],
   "x": [
    "Cada 20 de noviembre se conmemora el inicio de la Revolución, a veces con desfiles deportivos.",
    "El lema zapatista «Tierra y libertad» resumía la lucha de los campesinos por sus tierras."
   ],
   "k": "La Revolución (1910) terminó con el porfiriato y dio lugar a la Constitución de 1917: educación, tierras y derechos laborales.",
   "q": [
    {
     "s": "¿Qué presidente gobernaba cuando empezó la Revolución?",
     "o": [
      "Porfirio Díaz",
      "Benito Juárez",
      "Lázaro Cárdenas"
     ],
     "y": "Llevaba más de 30 años en el poder.",
     "p": "Su gobierno se llama porfiriato."
    },
    {
     "s": "¿Quién convocó a la Revolución con el Plan de San Luis?",
     "o": [
      "Francisco I. Madero",
      "Emiliano Zapata",
      "Miguel Hidalgo"
     ],
     "y": "La lucha empezó el 20 de noviembre de 1910.",
     "p": "Después fue presidente."
    },
    {
     "s": "¿Qué exigía Emiliano Zapata?",
     "o": [
      "Tierra y libertad para los campesinos",
      "Más trenes",
      "La independencia de España"
     ],
     "y": "Luchaba en el sur del país.",
     "p": "Su lema tiene dos palabras."
    },
    {
     "s": "¿Qué documento surgió de la Revolución?",
     "o": [
      "La Constitución de 1917",
      "El Acta de Independencia",
      "Los Tratados de Córdoba"
     ],
     "y": "Sigue vigente hoy.",
     "p": "Se celebra el 5 de febrero."
    }
   ],
   "v": [
    {
     "s": "La Revolución Mexicana comenzó el 20 de noviembre de 1910.",
     "v": true,
     "y": "Por eso se conmemora ese día."
    },
    {
     "s": "La Constitución de 1917 ya no está vigente.",
     "v": false,
     "y": "Sigue vigente, con reformas."
    }
   ],
   "ex": [
    {
     "s": "¿Qué artículo de la Constitución de 1917 trata de la educación?",
     "o": [
      "El 3.º",
      "El 123",
      "El 27"
     ],
     "y": "Educación laica y gratuita."
    },
    {
     "s": "¿Qué líder revolucionario luchó en el norte del país?",
     "o": [
      "Francisco Villa",
      "Emiliano Zapata",
      "José María Morelos"
     ],
     "y": "Encabezó la División del Norte."
    },
    {
     "s": "¿Por qué hubo descontento durante el porfiriato?",
     "o": [
      "Muchos campesinos no tenían tierras y los obreros vivían en malas condiciones",
      "Porque no había trenes",
      "Porque México era colonia de Francia"
     ],
     "y": "El progreso no llegó a la mayoría."
    }
   ]
  },
  {
   "t": "El México que se transformó (1940–1970)",
   "c": "México se transforma",
   "e": [
    "A partir de 1940, México vivió un periodo de crecimiento económico al que se llamó el <b>«milagro mexicano»</b>. Se construyeron fábricas, carreteras, presas, hospitales y escuelas, y el país pasó de ser rural a ser cada vez más urbano.",
    "Millones de personas se mudaron del <b>campo a las ciudades</b> buscando trabajo; la Ciudad de México, Guadalajara y Monterrey crecieron muchísimo. Se fundaron instituciones que todavía existen, como el <b>IMSS</b> (1943), y en 1959 se creó la Comisión Nacional de Libros de Texto Gratuitos, que empezó a repartir libros a todas las escuelas.",
    "También hubo avances en derechos: en <b>1953</b> las mujeres obtuvieron el derecho a votar en elecciones federales, y votaron por primera vez en una elección federal en 1955.  Pero el crecimiento no llegó a todos: muchas comunidades rurales e indígenas siguieron en la pobreza."
   ],
   "x": [
    "Si tus abuelos o bisabuelos llegaron del campo a la ciudad, fueron parte de esta gran migración interna.",
    "Los libros de texto gratuitos que usas vienen de la comisión creada en 1959."
   ],
   "k": "De 1940 a 1970: industrialización, crecimiento de las ciudades, IMSS, libros de texto gratuitos y voto de la mujer (1953).",
   "q": [
    {
     "s": "¿Cómo se llamó el periodo de crecimiento económico desde 1940?",
     "o": [
      "El milagro mexicano",
      "El porfiriato",
      "El virreinato"
     ],
     "y": "Se construyeron fábricas, carreteras y presas.",
     "p": "Suena a algo increíble."
    },
    {
     "s": "¿En qué año obtuvieron las mujeres el voto en elecciones federales?",
     "o": [
      "1953",
      "1910",
      "1810"
     ],
     "y": "Votaron por primera vez en una federal en 1955.",
     "p": "A mitad del siglo."
    },
    {
     "s": "¿Qué pasó con la población durante estos años?",
     "o": [
      "Millones se mudaron del campo a las ciudades",
      "Todos se fueron al campo",
      "No hubo cambios"
     ],
     "y": "Las ciudades crecieron muchísimo.",
     "p": "Buscaban trabajo en fábricas."
    },
    {
     "s": "¿En qué año se creó la Comisión Nacional de Libros de Texto Gratuitos?",
     "o": [
      "1959",
      "1910",
      "2000"
     ],
     "y": "Sus libros se siguen repartiendo hoy.",
     "p": "Finales de los cincuenta."
    }
   ],
   "v": [
    {
     "s": "El IMSS se fundó en 1943.",
     "v": true,
     "y": "Brinda servicios de salud a trabajadores."
    },
    {
     "s": "El milagro mexicano terminó con la pobreza en todo el país.",
     "v": false,
     "y": "El crecimiento no llegó a todos."
    }
   ],
   "ex": [
    {
     "s": "¿Qué ciudades crecieron mucho con la migración del campo?",
     "o": [
      "Ciudad de México, Guadalajara y Monterrey",
      "Ninguna",
      "Solo pueblos pequeños"
     ],
     "y": "Atraían trabajadores por sus fábricas."
    },
    {
     "s": "¿Qué derecho obtuvieron las mujeres en 1953?",
     "o": [
      "Votar en elecciones federales",
      "Ir a la escuela por primera vez",
      "Trabajar"
     ],
     "y": "Fue un gran avance democrático."
    },
    {
     "s": "El paso de un país rural a uno urbano significa que:",
     "o": [
      "Cada vez más gente vive en ciudades",
      "Todos viven en el campo",
      "Desaparecieron las ciudades"
     ],
     "y": "Eso ocurrió en México en el siglo XX."
    }
   ]
  },
  {
   "t": "México de 1968 al año 2000",
   "c": "De 1968 al 2000",
   "e": [
    "<b>1968</b> fue un año muy importante: México organizó los <b>Juegos Olímpicos</b>, los primeros en América Latina, y hubo un gran <b>movimiento estudiantil</b> que pedía libertades democráticas; terminó con la represión del 2 de octubre en Tlatelolco. En 1970 México organizó también el Mundial de futbol.",
    "En los años setenta y ochenta hubo <b>crisis económicas</b>: subieron mucho los precios y la deuda del país. El <b>sismo del 19 de septiembre de 1985</b> dañó gravemente la Ciudad de México, y la población se organizó para rescatar y ayudar, lo que impulsó la participación ciudadana.",
    "En <b>1994</b> entró en vigor el <b>Tratado de Libre Comercio de América del Norte (TLCAN)</b> con Estados Unidos y Canadá, y ese mismo año se levantó en Chiapas el <b>EZLN</b> exigiendo derechos para los pueblos indígenas. En el año <b>2000</b> ganó la presidencia un partido distinto al que había gobernado más de 70 años: a eso se le llama <b>alternancia</b>."
   ],
   "x": [
    "El 2 de octubre se recuerda a los estudiantes del movimiento de 1968.",
    "Después del sismo de 1985, vecinos y voluntarios formaron brigadas de rescate antes de que llegara ayuda oficial."
   ],
   "k": "1968 (Olimpiadas y movimiento estudiantil), crisis económicas, sismo de 1985, TLCAN y EZLN (1994) y alternancia (2000).",
   "q": [
    {
     "s": "¿Qué evento deportivo organizó México en 1968?",
     "o": [
      "Los Juegos Olímpicos",
      "El Mundial de futbol",
      "Los Juegos Panamericanos de 2011"
     ],
     "y": "Fueron los primeros en América Latina.",
     "p": "Tienen cinco aros."
    },
    {
     "s": "¿Qué pedía el movimiento estudiantil de 1968?",
     "o": [
      "Libertades democráticas",
      "Más tareas",
      "Cerrar las universidades"
     ],
     "y": "Terminó con la represión del 2 de octubre.",
     "p": "Tiene que ver con la democracia."
    },
    {
     "s": "¿Qué tratado comercial entró en vigor en 1994?",
     "o": [
      "El TLCAN",
      "El Tratado de Guadalupe Hidalgo",
      "Los Tratados de Córdoba"
     ],
     "y": "Con Estados Unidos y Canadá.",
     "p": "Libre comercio en América del Norte."
    },
    {
     "s": "¿Qué se conoce como alternancia?",
     "o": [
      "Que gobierne un partido distinto al que estaba",
      "Que no haya elecciones",
      "Que gobierne siempre el mismo partido"
     ],
     "y": "En México ocurrió en la presidencia en el año 2000.",
     "p": "Alternar es turnarse."
    }
   ],
   "v": [
    {
     "s": "El sismo de 1985 impulsó la organización ciudadana.",
     "v": true,
     "y": "Los vecinos formaron brigadas de rescate."
    },
    {
     "s": "El EZLN se levantó en Chiapas en 1968.",
     "v": false,
     "y": "Fue en 1994."
    }
   ],
   "ex": [
    {
     "s": "¿Qué día se recuerda a los estudiantes del movimiento de 1968?",
     "o": [
      "2 de octubre",
      "16 de septiembre",
      "5 de mayo"
     ],
     "y": "Ocurrió en Tlatelolco."
    },
    {
     "s": "¿Qué exigía el EZLN en 1994?",
     "o": [
      "Derechos para los pueblos indígenas",
      "Organizar un Mundial",
      "Construir un aeropuerto"
     ],
     "y": "Se levantó en Chiapas."
    },
    {
     "s": "¿Qué ocurrió en la elección presidencial del año 2000?",
     "o": [
      "Hubo alternancia de partido",
      "No hubo elecciones",
      "Volvió Porfirio Díaz"
     ],
     "y": "Ganó un partido distinto después de más de 70 años."
    }
   ]
  }
 ]
});
T2_MUNDOS.push({
 "name": "Civismo",
 "sub": "Formación cívica y ética",
 "lead": "Democracia, igualdad y transparencia: cómo vivimos juntos y cómo nos organizamos.",
 "temas": [
  {
   "t": "Principios democráticos",
   "c": "Principios democráticos",
   "e": [
    "La <b>democracia</b> es una forma de gobierno en la que el poder viene del pueblo: las personas eligen a sus gobernantes y participan en las decisiones.",
    "Se basa en <b>principios</b>: la <b>libertad</b> (de expresión, de reunión, de creencias); la <b>igualdad</b> (todas las personas tienen los mismos derechos); la <b>justicia</b>; la <b>legalidad</b> (todos, incluso los gobernantes, deben respetar la ley); el <b>pluralismo</b> (se respetan las distintas ideas) y la <b>participación</b>.",
    "En México el voto es <b>universal, libre, secreto y directo</b>, y el poder se divide en tres: <b>Ejecutivo</b>, <b>Legislativo</b> y <b>Judicial</b>, para que ninguno tenga todo el poder."
   ],
   "x": [
    "Cuando tu grupo vota para elegir al jefe de grupo y todos respetan el resultado, practican la democracia.",
    "En una asamblea, todos pueden opinar aunque piensen distinto: eso es pluralismo."
   ],
   "k": "Libertad, igualdad, justicia, legalidad, pluralismo y participación. Voto universal, libre, secreto y directo.",
   "q": [
    {
     "s": "¿Qué significa democracia?",
     "o": [
      "El poder viene del pueblo",
      "El poder es de una sola persona",
      "No hay leyes"
     ],
     "y": "Demos significa pueblo.",
     "p": "Demos = pueblo."
    },
    {
     "s": "El principio de que todos deben respetar la ley se llama:",
     "o": [
      "Legalidad",
      "Pluralismo",
      "Libertad"
     ],
     "y": "Incluye a los gobernantes.",
     "p": "Viene de la palabra ley."
    },
    {
     "s": "¿Cómo es el voto en México?",
     "o": [
      "Universal, libre, secreto y directo",
      "Obligatorio y público",
      "Solo para algunos"
     ],
     "y": "Nadie debe saber por quién votaste.",
     "p": "Una de sus características es que nadie ve tu voto."
    },
    {
     "s": "¿Cuáles son los tres poderes?",
     "o": [
      "Ejecutivo, Legislativo y Judicial",
      "Militar, Escolar y Familiar",
      "Norte, Centro y Sur"
     ],
     "y": "Se dividen para que ninguno abuse.",
     "p": "Uno gobierna, otro hace leyes, otro juzga."
    }
   ],
   "v": [
    {
     "s": "El pluralismo significa respetar las ideas diferentes.",
     "v": true,
     "y": "Es base de la convivencia democrática."
    },
    {
     "s": "En una democracia, los gobernantes no tienen que respetar la ley.",
     "v": false,
     "y": "Todos deben respetarla."
    }
   ],
   "ex": [
    {
     "s": "Elegir al jefe de grupo por votación y respetar el resultado es un ejemplo de:",
     "o": [
      "Democracia",
      "Dictadura",
      "Monarquía"
     ],
     "y": "Decide la mayoría y se respeta."
    },
    {
     "s": "¿Para qué se divide el poder en tres?",
     "o": [
      "Para que ninguno tenga todo el poder",
      "Para que haya más fiestas",
      "Para que no haya leyes"
     ],
     "y": "Cada poder vigila a los otros."
    },
    {
     "s": "«Todas las personas tienen los mismos derechos» describe el principio de:",
     "o": [
      "Igualdad",
      "Legalidad",
      "Pluralismo"
     ],
     "y": "Sin discriminación."
    }
   ]
  },
  {
   "t": "Violencia de género en el mundo",
   "c": "Violencia de género",
   "e": [
    "La <b>violencia de género</b> es cualquier daño que se hace a una persona por ser mujer, hombre o por su identidad. La sufren sobre todo niñas y mujeres en todo el mundo, y es una violación a los derechos humanos.",
    "Puede ser <b>física</b> (golpes, empujones), <b>psicológica</b> (insultos, burlas, amenazas, humillaciones), <b>económica</b> (controlar el dinero de alguien) o <b>digital</b> (acoso o difusión de fotos en internet). También empieza con ideas como «las niñas no pueden jugar futbol» o «los niños no lloran».",
    "Para prevenirla: trata a todas las personas con respeto, no te rías de chistes que humillan, y si tú o alguien que conoces vive violencia, <b>díselo a un adulto de confianza</b>. En una emergencia se puede llamar al <b>911</b>."
   ],
   "x": [
    "Si un compañero se burla de una niña porque «eso no es de niñas», está reproduciendo una idea que discrimina.",
    "Muchos países tienen leyes para proteger a las mujeres; en México existe la Ley General de Acceso de las Mujeres a una Vida Libre de Violencia."
   ],
   "k": "Nadie merece violencia. Respeta a todos y, si algo pasa, avisa a un adulto de confianza o llama al 911.",
   "q": [
    {
     "s": "Un insulto o una humillación constante es violencia:",
     "o": [
      "Psicológica",
      "Física",
      "Económica"
     ],
     "y": "Daña las emociones y la autoestima.",
     "p": "Afecta la mente y las emociones."
    },
    {
     "s": "¿Qué debes hacer si alguien vive violencia?",
     "o": [
      "Contárselo a un adulto de confianza",
      "Guardar el secreto",
      "Reírte"
     ],
     "y": "Pedir ayuda es lo correcto.",
     "p": "No te quedes callado."
    },
    {
     "s": "Difundir fotos de alguien sin permiso por internet es violencia:",
     "o": [
      "Digital",
      "Económica",
      "Física"
     ],
     "y": "Ocurre en medios electrónicos.",
     "p": "Pasa en internet."
    },
    {
     "s": "¿Cuál frase reproduce estereotipos de género?",
     "o": [
      "«Los niños no lloran»",
      "«Todos podemos expresar lo que sentimos»",
      "«Cualquiera puede jugar futbol»"
     ],
     "y": "Limita a las personas por su género.",
     "p": "Busca la que pone reglas por ser niño o niña."
    }
   ],
   "v": [
    {
     "s": "La violencia de género viola los derechos humanos.",
     "v": true,
     "y": "Todas las personas tienen derecho a vivir sin violencia."
    },
    {
     "s": "Las burlas no son una forma de violencia.",
     "v": false,
     "y": "Son violencia psicológica."
    }
   ],
   "ex": [
    {
     "s": "Controlar el dinero de otra persona para dominarla es violencia:",
     "o": [
      "Económica",
      "Física",
      "Digital"
     ],
     "y": "Limita su libertad."
    },
    {
     "s": "¿A qué número se llama en una emergencia en México?",
     "o": [
      "911",
      "066",
      "123"
     ],
     "y": "Es el número único de emergencias."
    },
    {
     "s": "¿Qué acción ayuda a prevenir la violencia de género?",
     "o": [
      "Tratar a todas las personas con respeto",
      "Reírse de chistes que humillan",
      "Decir que hay juegos solo para niños"
     ],
     "y": "El respeto es la base."
    }
   ]
  },
  {
   "t": "Rendición de cuentas y transparencia",
   "c": "Transparencia",
   "e": [
    "Los gobernantes y servidores públicos manejan el dinero de todos, que viene de los <b>impuestos</b>. Por eso tienen la obligación de informar qué hacen y cómo lo gastan.",
    "La <b>transparencia</b> significa que la información del gobierno sea pública y fácil de consultar. La <b>rendición de cuentas</b> es que los gobernantes expliquen y justifiquen sus decisiones y respondan si hicieron algo mal.",
    "Las personas tienen <b>derecho de acceso a la información pública</b>: cualquiera puede pedir datos al gobierno, como cuánto costó una obra. Esto ayuda a prevenir la <b>corrupción</b>, que es usar un cargo público para beneficio propio."
   ],
   "x": [
    "Un municipio publica en su página cuánto gastó en arreglar el parque: eso es transparencia.",
    "Si en tu grupo juntan dinero para una excursión, el tesorero debe mostrar en qué se gastó: eso es rendir cuentas."
   ],
   "k": "Transparencia: la información es pública. Rendición de cuentas: explicar y responder por lo que se hace.",
   "q": [
    {
     "s": "¿Qué es la transparencia?",
     "o": [
      "Que la información del gobierno sea pública",
      "Que los gobernantes oculten datos",
      "Que no haya gobierno"
     ],
     "y": "Cualquiera puede consultarla.",
     "p": "Transparente es lo que se puede ver."
    },
    {
     "s": "¿De dónde viene el dinero que maneja el gobierno?",
     "o": [
      "De los impuestos",
      "De los videojuegos",
      "De la lotería solamente"
     ],
     "y": "Por eso debe informar cómo lo usa.",
     "p": "Lo pagan las personas."
    },
    {
     "s": "Usar un cargo público para beneficio propio es:",
     "o": [
      "Corrupción",
      "Transparencia",
      "Democracia"
     ],
     "y": "Daña a toda la sociedad.",
     "p": "Es lo contrario de la honestidad."
    },
    {
     "s": "El tesorero del grupo muestra en qué gastó el dinero. Eso es:",
     "o": [
      "Rendir cuentas",
      "Ocultar información",
      "Corrupción"
     ],
     "y": "Explica y justifica.",
     "p": "Cuenta en qué se usó."
    }
   ],
   "v": [
    {
     "s": "Cualquier persona puede pedir información pública al gobierno.",
     "v": true,
     "y": "Es un derecho."
    },
    {
     "s": "La transparencia ayuda a que haya más corrupción.",
     "v": false,
     "y": "Ayuda a prevenirla."
    }
   ],
   "ex": [
    {
     "s": "Un municipio publica cuánto gastó en una obra. Eso es:",
     "o": [
      "Transparencia",
      "Corrupción",
      "Censura"
     ],
     "y": "La información es pública."
    },
    {
     "s": "¿Por qué los gobernantes deben rendir cuentas?",
     "o": [
      "Porque manejan dinero y decisiones de todos",
      "Porque es un juego",
      "Porque no tienen nada que hacer"
     ],
     "y": "Deben responder ante la población."
    },
    {
     "s": "¿Qué derecho permite saber cuánto costó una obra pública?",
     "o": [
      "El acceso a la información pública",
      "El derecho al voto",
      "La libertad de tránsito"
     ],
     "y": "Cualquiera puede solicitarla."
    }
   ]
  }
 ]
});
