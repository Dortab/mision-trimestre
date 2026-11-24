/* Contenido del 3.º trimestre de 6.º de primaria. Basado en los índices de Universo Luca 6 y Nova 6
   y en el Programa Sintético de la Fase 5 (SEP). En cada pregunta, la primera opción es la correcta. */
const T3_MUNDOS=[];
T3_MUNDOS.push({name:'Ciencias',sub:'Pensamiento científico',lead:'Partículas, fuerzas, electricidad y el universo. Descubre las reglas invisibles que mueven todo.',temas:[
{t:'El modelo de partículas',c:'Modelo de partículas',e:[
'Toda la materia está formada por <b>partículas</b> diminutas que no podemos ver, ni siquiera con una lupa. El <b>modelo de partículas</b> es una forma de imaginar cómo están organizadas.',
'En un <b>sólido</b>, las partículas están muy juntas, ordenadas y solo vibran en su lugar; por eso tiene forma fija. En un <b>líquido</b>, están juntas pero se deslizan unas sobre otras; por eso fluye. En un <b>gas</b>, están muy separadas y se mueven rápido en todas direcciones; por eso ocupa todo el espacio.',
'Cuando calientas algo, sus partículas se mueven más rápido y se separan; cuando lo enfrías, se mueven más despacio. Así se explican los cambios de estado.'],
x:['Cuando hierves agua, sus partículas se mueven tan rápido que escapan como vapor.','El olor de un pastel recién horneado llega hasta tu cuarto porque las partículas del gas se dispersan por toda la casa.'],
k:'Sólido: partículas juntas y quietas. Líquido: juntas pero deslizándose. Gas: separadas y muy rápidas.',
q:[{s:'¿Cómo están las partículas en un sólido?',o:['Muy juntas y vibrando en su lugar','Muy separadas y rápidas','Deslizándose unas sobre otras'],y:'Por eso tiene forma fija.',p:'Piensa en una piedra.'},
{s:'¿Qué pasa con las partículas al calentar algo?',o:['Se mueven más rápido y se separan','Se detienen','Desaparecen'],y:'El calor les da energía.',p:'El calor da energía.'},
{s:'¿En qué estado las partículas están más separadas?',o:['Gaseoso','Sólido','Líquido'],y:'Se mueven en todas direcciones.',p:'Ocupa todo el espacio.'},
{s:'¿Por qué el olor de un perfume llena el cuarto?',o:['Las partículas del gas se dispersan','El perfume se vuelve sólido','El aire se detiene'],y:'Se mueven por todo el espacio.',p:'Las partículas del gas viajan.'}],
v:[{s:'Las partículas de un líquido se deslizan unas sobre otras.',v:true,y:'Por eso los líquidos fluyen.'},
{s:'Las partículas de la materia se pueden ver con una lupa.',v:false,y:'Son demasiado pequeñas.'}],
ex:[{s:'¿Por qué un líquido toma la forma del recipiente?',o:['Sus partículas se deslizan unas sobre otras','Sus partículas están quietas','No tiene partículas'],y:'Están juntas pero en movimiento.'},
{s:'Al enfriar el agua hasta congelarla, sus partículas:',o:['Se mueven más despacio y se ordenan','Se mueven más rápido','Se separan mucho'],y:'Así se forma el hielo.'}]},

{t:'Cambios temporales y permanentes de la materia',c:'Cambios de la materia',e:[
'La materia cambia todo el tiempo, pero no todos los cambios son iguales.',
'Un <b>cambio temporal</b> o físico modifica la forma o el estado, pero la sustancia sigue siendo la misma y casi siempre se puede <b>regresar</b>: el hielo se derrite y vuelve a congelarse; doblas una hoja y la desdoblas.',
'Un <b>cambio permanente</b> o químico forma <b>sustancias nuevas</b> y no se puede deshacer: quemar papel (queda ceniza y humo), cocer un huevo, hornear un pastel o que se oxide un clavo. Señales de un cambio químico: cambio de color, olor, burbujas, luz o calor.'],
x:['Derretir chocolate es un cambio temporal: al enfriarse vuelve a ser sólido.','Freír un huevo es permanente: aunque lo enfríes, nunca vuelve a estar crudo.'],
k:'Temporal: misma sustancia, se puede regresar. Permanente: sustancia nueva, no se puede regresar.',
q:[{s:'¿Qué tipo de cambio es derretir hielo?',o:['Temporal','Permanente','Ninguno'],y:'El agua puede volver a congelarse.',p:'¿Se puede regresar?'},
{s:'Quemar una hoja de papel es un cambio:',o:['Permanente','Temporal','Reversible'],y:'Se forman ceniza y humo, sustancias nuevas.',p:'¿Puedes recuperar la hoja?'},
{s:'¿Cuál es una señal de cambio químico?',o:['Aparecen burbujas y un olor nuevo','Cambia solo de forma','Se rompe en pedazos'],y:'Indica que se formó algo nuevo.',p:'Algo nuevo aparece.'},
{s:'Cocer un huevo es un cambio:',o:['Permanente','Temporal','Que se deshace al enfriar'],y:'Nunca vuelve a estar crudo.',p:'¿Vuelve a estar crudo?'}],
v:[{s:'Doblar una hoja de papel es un cambio temporal.',v:true,y:'Se puede desdoblar.'},
{s:'Hornear un pastel es un cambio temporal.',v:false,y:'Es permanente: se forman sustancias nuevas.'}],
ex:[{s:'¿Cuál es un cambio permanente?',o:['Que se oxide un clavo','Que se derrita la mantequilla','Que se evapore un charco'],y:'El óxido es una sustancia nueva.'},
{s:'En un cambio temporal, la sustancia:',o:['Sigue siendo la misma','Se convierte en otra','Desaparece'],y:'Solo cambia de forma o estado.'}]},

{t:'Oxidación de metales y alimentos',c:'Oxidación',e:[
'La <b>oxidación</b> es un cambio químico que ocurre cuando una sustancia reacciona con el <b>oxígeno</b> del aire.',
'En los <b>metales</b>, como el hierro, se forma el <b>óxido</b> (herrumbre), una capa rojiza que lo debilita. La humedad lo acelera: por eso las rejas cerca del mar se oxidan más rápido. Se previene con pintura, aceite o recubrimientos.',
'Los <b>alimentos</b> también se oxidan: una manzana o un aguacate partidos se ponen cafés. Para evitarlo se les pone limón, se tapan o se guardan en el refrigerador, porque así llega menos oxígeno o la reacción es más lenta.'],
x:['Un clavo dejado en agua varios días se cubre de óxido rojizo.','El guacamole se oscurece en la superficie; si lo tapas con plástico pegado, tarda más.'],
k:'Oxidación: reacción con el oxígeno. La humedad la acelera; la pintura, el limón y el frío la frenan.',
q:[{s:'¿Con qué gas reacciona una sustancia al oxidarse?',o:['Oxígeno','Nitrógeno','Helio'],y:'Por eso se llama oxidación.',p:'Está en el nombre.'},
{s:'¿Qué acelera la oxidación del hierro?',o:['La humedad','El frío seco','La oscuridad'],y:'El agua ayuda a que reaccione.',p:'Piensa en las rejas junto al mar.'},
{s:'¿Cómo se evita que una manzana partida se ponga café?',o:['Poniéndole limón','Dejándola al sol','Cortándola en más pedazos'],y:'El limón frena la oxidación.',p:'Un cítrico.'},
{s:'¿Cómo se protege una reja de hierro?',o:['Pintándola','Mojándola todos los días','Rayándola'],y:'La pintura impide que llegue el oxígeno.',p:'Hay que cubrirla.'}],
v:[{s:'La oxidación es un cambio químico.',v:true,y:'Se forma una sustancia nueva.'},
{s:'Guardar los alimentos en el refrigerador acelera su oxidación.',v:false,y:'El frío la hace más lenta.'}],
ex:[{s:'Un aguacate partido se oscurece. ¿Por qué?',o:['Se oxida al contacto con el aire','Se congela','Le falta agua'],y:'Reacciona con el oxígeno.'},
{s:'¿Qué es la herrumbre?',o:['El óxido que se forma en el hierro','Un tipo de pintura','Una fruta'],y:'Es rojiza y debilita el metal.'}]},

{t:'La fuerza de gravedad',c:'La gravedad',e:[
'¿Por qué al soltar una pelota cae hacia abajo y no hacia arriba? Por la <b>fuerza de gravedad</b>: una fuerza de atracción entre todos los objetos que tienen masa.',
'Entre más masa tiene un objeto, más fuerte atrae. La Tierra es tan grande que nos atrae hacia su centro: por eso caen las cosas y por eso no salimos flotando. El científico <b>Isaac Newton</b> explicó esta fuerza en el siglo XVII.',
'La gravedad también mantiene a la <b>Luna</b> girando alrededor de la Tierra y a los planetas girando alrededor del <b>Sol</b>. En la Luna la gravedad es más débil: allá pesarías como la sexta parte.'],
x:['Un clavadista cae hacia el agua por la gravedad.','Los astronautas en la estación espacial parecen flotar porque están en caída libre alrededor de la Tierra.'],
k:'La gravedad es la atracción entre objetos con masa. La Tierra nos atrae hacia su centro.',
q:[{s:'¿Qué hace la fuerza de gravedad?',o:['Atrae a los objetos entre sí','Los empuja lejos','Los calienta'],y:'Es una fuerza de atracción.',p:'Hace que las cosas caigan.'},
{s:'¿Quién explicó la fuerza de gravedad?',o:['Isaac Newton','Thomas Edison','Benito Juárez'],y:'Lo hizo en el siglo XVII.',p:'Cuenta la leyenda que le cayó una manzana.'},
{s:'¿Qué mantiene a la Luna girando alrededor de la Tierra?',o:['La gravedad','El viento','Los imanes'],y:'La Tierra la atrae.',p:'La misma fuerza que hace caer una pelota.'},
{s:'En la Luna, una persona pesa:',o:['Menos que en la Tierra','Más que en la Tierra','Igual'],y:'La gravedad lunar es más débil.',p:'La Luna es más pequeña.'}],
v:[{s:'Entre más masa tiene un objeto, más fuerte atrae.',v:true,y:'Por eso la Tierra nos atrae tanto.'},
{s:'Sin gravedad, las cosas caerían más rápido.',v:false,y:'Sin gravedad no caerían.'}],
ex:[{s:'¿Hacia dónde nos atrae la gravedad de la Tierra?',o:['Hacia su centro','Hacia el Sol','Hacia arriba'],y:'Por eso «abajo» es hacia el centro.'},
{s:'¿Qué mantiene a los planetas girando alrededor del Sol?',o:['La gravedad del Sol','El viento solar','La luz'],y:'El Sol tiene muchísima masa.'}]},

{t:'Diferencia entre masa y peso',c:'Masa contra peso',e:[
'En la vida diaria decimos «peso» a todo, pero en ciencia <b>masa</b> y <b>peso</b> son distintos.',
'La <b>masa</b> es la cantidad de materia que tiene un objeto. Se mide en <b>kilogramos</b> con una balanza y <b>es la misma en cualquier lugar</b>: en la Tierra, en la Luna o en el espacio.',
'El <b>peso</b> es la fuerza con que la gravedad atrae a ese objeto. Se mide en <b>newtons</b> con un dinamómetro y <b>cambia según el lugar</b>. Un astronauta con masa de 60 kg tiene esa misma masa en la Luna, pero allá su peso es como la sexta parte.'],
x:['Una mochila tiene la misma masa en tu casa que en la cima de una montaña.','En la Luna podrías saltar mucho más alto porque tu peso es menor, aunque tu masa sea la misma.'],
k:'Masa: cantidad de materia, en kg, no cambia. Peso: fuerza de gravedad, en newtons, cambia según el lugar.',
q:[{s:'¿Qué es la masa?',o:['La cantidad de materia de un objeto','La fuerza de gravedad','El tamaño de un objeto'],y:'No cambia de un lugar a otro.',p:'Cuánta materia tiene.'},
{s:'¿En qué unidad se mide el peso en ciencia?',o:['Newtons','Kilogramos','Litros'],y:'Porque es una fuerza.',p:'Lleva el nombre de un científico.'},
{s:'Un astronauta de 60 kg de masa va a la Luna. Su masa allá es:',o:['60 kg','10 kg','0 kg'],y:'La masa no cambia.',p:'La cantidad de materia es la misma.'},
{s:'¿Qué cambia al ir de la Tierra a la Luna?',o:['El peso','La masa','La cantidad de materia'],y:'La gravedad lunar es más débil.',p:'Depende de la gravedad.'}],
v:[{s:'El peso de una persona es menor en la Luna que en la Tierra.',v:true,y:'La gravedad allá es más débil.'},
{s:'La masa de un objeto cambia si lo llevas a otro planeta.',v:false,y:'La masa siempre es la misma.'}],
ex:[{s:'¿Con qué instrumento se mide el peso?',o:['Dinamómetro','Termómetro','Regla'],y:'Mide fuerzas.'},
{s:'¿Por qué en la Luna podrías saltar más alto?',o:['Porque tu peso es menor','Porque tu masa aumenta','Porque hay más aire'],y:'La gravedad te atrae con menos fuerza.'}]},

{t:'Cargas eléctricas positivas y negativas',c:'Cargas eléctricas',e:[
'Toda la materia está formada por <b>átomos</b>, y dentro de ellos hay partículas con <b>carga eléctrica</b>: los <b>protones</b> tienen carga <b>positiva (+)</b> y los <b>electrones</b>, carga <b>negativa (−)</b>. Los neutrones no tienen carga.',
'Normalmente un objeto tiene la misma cantidad de cargas positivas y negativas: está <b>neutro</b>. Si gana electrones, queda con carga negativa; si los pierde, queda con carga positiva.',
'La regla de oro: <b>cargas iguales se repelen</b> (se alejan) y <b>cargas diferentes se atraen</b> (se acercan).'],
x:['Si frotas dos globos con tu cabello, ambos quedan con la misma carga y se alejan uno del otro.','Un globo frotado se pega a la pared porque su carga atrae a las cargas contrarias de la pared.'],
k:'Protones (+), electrones (−). Iguales se repelen, diferentes se atraen.',
q:[{s:'¿Qué carga tienen los electrones?',o:['Negativa','Positiva','Ninguna'],y:'Los protones son positivos.',p:'Signo menos.'},
{s:'Dos objetos con carga positiva:',o:['Se repelen','Se atraen','No hacen nada'],y:'Cargas iguales se repelen.',p:'Iguales…'},
{s:'Un objeto positivo y uno negativo:',o:['Se atraen','Se repelen','Explotan'],y:'Cargas diferentes se atraen.',p:'Diferentes…'},
{s:'Un objeto que gana electrones queda con carga:',o:['Negativa','Positiva','Neutra'],y:'Tiene más cargas negativas.',p:'Los electrones son negativos.'}],
v:[{s:'Los protones tienen carga positiva.',v:true,y:'Están en el núcleo del átomo.'},
{s:'Las cargas iguales se atraen.',v:false,y:'Se repelen.'}],
ex:[{s:'Dos globos frotados con el cabello se alejan entre sí porque:',o:['Tienen la misma carga','Tienen cargas diferentes','No tienen carga'],y:'Cargas iguales se repelen.'},
{s:'Un objeto con igual número de protones y electrones está:',o:['Neutro','Positivo','Negativo'],y:'Las cargas se equilibran.'}]},

{t:'Electricidad estática',c:'Electricidad estática',e:[
'La <b>electricidad estática</b> es la acumulación de cargas eléctricas en la superficie de un objeto. Se llama así porque las cargas se quedan quietas, hasta que encuentran por dónde escapar.',
'Se produce sobre todo por <b>frotamiento</b>: al frotar dos materiales, uno le pasa electrones al otro. Por eso al quitarte un suéter escuchas chasquidos o sientes un toque al tocar la manija de una puerta.',
'Cuando las cargas acumuladas escapan de golpe se produce una <b>descarga</b>, a veces con una chispa. El ejemplo más grande de electricidad estática es el <b>rayo</b>: una descarga gigante entre las nubes y el suelo.'],
x:['Un peine frotado con el cabello puede levantar pedacitos de papel.','En días secos es más común sentir toques al bajar del coche.'],
k:'La electricidad estática es carga acumulada por frotamiento. El rayo es una descarga gigante.',
q:[{s:'¿Cómo se produce la electricidad estática?',o:['Por frotamiento','Con una pila','Con agua'],y:'Al frotar, se pasan electrones.',p:'Frota un globo en tu cabello.'},
{s:'¿Qué ejemplo natural hay de electricidad estática?',o:['El rayo','La lluvia','El arcoíris'],y:'Es una descarga enorme.',p:'Ocurre en tormentas.'},
{s:'¿Por qué un peine frotado levanta papelitos?',o:['Porque quedó cargado eléctricamente','Porque está mojado','Porque es un imán'],y:'Su carga atrae al papel.',p:'Piensa en cargas.'},
{s:'¿Qué es una descarga?',o:['Cuando las cargas acumuladas escapan de golpe','Cuando un objeto se enfría','Cuando una pila se acaba'],y:'A veces se ve como chispa.',p:'Las cargas escapan.'}],
v:[{s:'En días secos es más común sentir toques de electricidad estática.',v:true,y:'La humedad ayuda a que las cargas escapen poco a poco.'},
{s:'La electricidad estática necesita una pila.',v:false,y:'Se produce por frotamiento.'}],
ex:[{s:'Al quitarte un suéter escuchas chasquidos. ¿Qué los provoca?',o:['Descargas de electricidad estática','El viento','Un cortocircuito'],y:'La fricción acumuló cargas.'},
{s:'¿Por qué se llama electricidad «estática»?',o:['Porque las cargas se quedan quietas en la superficie','Porque se mueve muy rápido por cables','Porque viene de una estación'],y:'Estático significa quieto.'}]},

{t:'Corrientes eléctricas y electrones',c:'Corriente eléctrica',e:[
'La <b>corriente eléctrica</b> es el <b>flujo de electrones</b> que se mueven de manera ordenada a través de un material, como el agua que corre por una manguera.',
'Los materiales que dejan pasar la corriente con facilidad se llaman <b>conductores</b>: el cobre, el aluminio y casi todos los metales, y también el agua con sales. Los que no la dejan pasar son <b>aislantes</b>: el plástico, el hule, la madera seca y el vidrio.',
'Por eso los cables tienen cobre por dentro y plástico por fuera: el cobre conduce la corriente y el plástico nos protege. <b>Nunca</b> toques aparatos eléctricos con las manos mojadas.'],
x:['Los cables de un cargador tienen hilos de cobre cubiertos con plástico.','Las pinzas de un electricista tienen mangos de hule para aislarlo.'],
k:'Corriente: flujo ordenado de electrones. Conductores la dejan pasar (metales); aislantes no (plástico, hule).',
q:[{s:'¿Qué es la corriente eléctrica?',o:['Un flujo ordenado de electrones','Una chispa quieta','Un tipo de imán'],y:'Como agua corriendo por una manguera.',p:'Algo que fluye.'},
{s:'¿Cuál es un buen conductor?',o:['El cobre','El plástico','La madera seca'],y:'Los metales conducen bien.',p:'Es un metal.'},
{s:'¿Para qué sirve el plástico que cubre los cables?',o:['Para aislar y protegernos','Para conducir más corriente','Para que pesen menos'],y:'El plástico es aislante.',p:'Nos protege.'},
{s:'¿Cuál es un aislante?',o:['El hule','El aluminio','El hierro'],y:'No deja pasar la corriente.',p:'Busca lo que no es metal.'}],
v:[{s:'El agua con sales puede conducir la electricidad.',v:true,y:'Por eso es peligroso usar aparatos con las manos mojadas.'},
{s:'La madera seca es un buen conductor eléctrico.',v:false,y:'Es aislante.'}],
ex:[{s:'¿Por qué los mangos de las pinzas de un electricista son de hule?',o:['Porque el hule es aislante','Porque el hule conduce mejor','Para que se vean bonitas'],y:'Lo protegen de la corriente.'},
{s:'¿Qué material conduce mejor la electricidad?',o:['Cobre','Vidrio','Plástico'],y:'Por eso se usa en los cables.'}]},

{t:'Componentes de un circuito eléctrico',c:'Circuito eléctrico',e:[
'Un <b>circuito eléctrico</b> es un camino cerrado por donde circula la corriente. Tiene cuatro componentes básicos:',
'Una <b>fuente de energía</b> (pila o batería), los <b>conductores</b> (cables) que llevan la corriente, un <b>receptor</b> que usa la energía (un foco, un timbre o un motor) y un <b>interruptor</b> que abre o cierra el paso.',
'Si el circuito está <b>cerrado</b>, la corriente circula y el foco enciende. Si está <b>abierto</b> (el interruptor apagado o un cable suelto), la corriente no pasa y el foco se apaga.'],
x:['Una linterna es un circuito: pilas, contactos metálicos, un foco y un botón que funciona como interruptor.','Si un cable de la lámpara se rompe, el circuito queda abierto y no enciende.'],
k:'Fuente, cables, receptor e interruptor. Cerrado: pasa la corriente. Abierto: no pasa.',
q:[{s:'¿Qué componente da la energía en un circuito?',o:['La pila','El foco','El interruptor'],y:'Es la fuente de energía.',p:'Se compra en paquetes de AA o AAA.'},
{s:'¿Para qué sirve el interruptor?',o:['Para abrir o cerrar el paso de la corriente','Para dar energía','Para producir luz'],y:'Enciende y apaga.',p:'Es como el apagador de la luz.'},
{s:'Si el circuito está abierto, el foco:',o:['No enciende','Enciende más fuerte','Explota'],y:'La corriente no puede pasar.',p:'Abierto significa que no hay camino completo.'},
{s:'Un foco en un circuito es un:',o:['Receptor','Conductor','Interruptor'],y:'Usa la energía para dar luz.',p:'Recibe y usa la energía.'}],
v:[{s:'Una linterna es un circuito eléctrico.',v:true,y:'Tiene pilas, foco, contactos e interruptor.'},
{s:'La corriente circula aunque el circuito esté abierto.',v:false,y:'Necesita un camino cerrado.'}],
ex:[{s:'¿Qué hace que circule la corriente en un circuito?',o:['Que el camino esté cerrado','Que el interruptor esté abierto','Que falte la pila'],y:'Necesita un camino completo.'},
{s:'Los cables de un circuito son:',o:['Conductores','Receptores','Fuentes'],y:'Llevan la corriente.'}]},

{t:'Interacciones eléctricas cotidianas',c:'Electricidad en casa',e:[
'Usamos la electricidad todo el día: para iluminar, cocinar, comunicarnos, conservar alimentos y estudiar. Los aparatos la <b>transforman</b> en otras formas de energía: en luz (un foco), calor (una plancha), movimiento (un ventilador) o sonido (una bocina).',
'Pero también puede ser <b>peligrosa</b>. Reglas de seguridad: no sobrecargues los contactos con muchos aparatos; no metas objetos en los enchufes; no uses aparatos con las manos mojadas; desconecta jalando la clavija, no el cable; y aléjate de cables caídos.',
'Ahorrar electricidad ayuda al ambiente y a tu bolsillo: apaga luces que no uses, desconecta cargadores y aprovecha la luz del día.'],
x:['El refrigerador transforma la electricidad para mantener fríos los alimentos.','Un contacto con demasiados aparatos conectados puede calentarse y provocar un incendio.'],
k:'Los aparatos transforman la electricidad en luz, calor, movimiento o sonido. Úsala con cuidado y ahórrala.',
q:[{s:'Un ventilador transforma la electricidad en:',o:['Movimiento','Luz','Sonido solamente'],y:'Sus aspas giran.',p:'Las aspas giran.'},
{s:'¿Cuál es una regla de seguridad eléctrica?',o:['No usar aparatos con las manos mojadas','Meter llaves en los enchufes','Jalar los cables para desconectar'],y:'El agua conduce la electricidad.',p:'El agua y la electricidad no se mezclan.'},
{s:'Una plancha transforma la electricidad en:',o:['Calor','Movimiento','Sonido'],y:'Por eso alisa la ropa.',p:'Se calienta.'},
{s:'¿Cómo se ahorra electricidad?',o:['Apagando luces que no se usan','Dejando la tele prendida','Abriendo el refrigerador muchas veces'],y:'Ahorra dinero y cuida el ambiente.',p:'Apagar lo que no usas.'}],
v:[{s:'Sobrecargar un contacto puede provocar un incendio.',v:true,y:'Los cables se calientan demasiado.'},
{s:'Para desconectar un aparato hay que jalar el cable.',v:false,y:'Hay que jalar la clavija.'}],
ex:[{s:'Una bocina transforma la electricidad en:',o:['Sonido','Calor principalmente','Luz'],y:'Hace vibrar el aire.'},
{s:'¿Qué debes hacer si ves un cable de luz caído en la calle?',o:['Alejarte y avisar a un adulto','Tocarlo con un palo mojado','Pisarlo'],y:'Puede tener corriente.'}]},

{t:'Desarrollos tecnológicos con electricidad',c:'Inventos eléctricos',e:[
'Aprender a usar la electricidad cambió por completo la forma de vivir. Muchos inventos se hicieron en los siglos XIX y XX.',
'El <b>telégrafo</b> y después el <b>teléfono</b> permitieron comunicarse a distancia. El <b>foco incandescente</b>, mejorado por Thomas Edison hacia 1879, llevó luz a las casas. El <b>motor eléctrico</b> movió fábricas, trenes y electrodomésticos. Luego llegaron la radio, la televisión, la computadora e internet.',
'La tecnología sigue avanzando: hoy hay focos LED que gastan mucho menos energía, coches eléctricos y paneles solares. Pero también hay retos, como la <b>basura electrónica</b>, que debe llevarse a centros de reciclaje.'],
x:['Hace 150 años, para mandar un mensaje a otra ciudad se usaba el telégrafo; hoy mandas un mensaje en segundos desde un celular.','Un foco LED dura muchos años más que un foco incandescente.'],
k:'Telégrafo, teléfono, foco, motor, radio, TV, computadora: la electricidad transformó la vida. Recicla la basura electrónica.',
q:[{s:'¿Quién mejoró el foco incandescente hacia 1879?',o:['Thomas Edison','Isaac Newton','Miguel Hidalgo'],y:'Llevó la luz eléctrica a las casas.',p:'Un inventor estadounidense.'},
{s:'¿Qué invento permitió mover fábricas y trenes con electricidad?',o:['El motor eléctrico','El telescopio','El reloj de arena'],y:'Transforma electricidad en movimiento.',p:'Hace girar cosas.'},
{s:'¿Qué ventaja tienen los focos LED?',o:['Gastan menos energía y duran más','Calientan más','Son más grandes'],y:'Ahorran electricidad.',p:'Ahorro.'},
{s:'¿Qué hay que hacer con un celular viejo?',o:['Llevarlo a un centro de reciclaje electrónico','Tirarlo a la basura común','Quemarlo'],y:'Tiene materiales tóxicos y valiosos.',p:'Es basura electrónica.'}],
v:[{s:'El telégrafo sirvió para comunicarse a distancia.',v:true,y:'Fue antes del teléfono.'},
{s:'La basura electrónica se puede tirar en cualquier bote.',v:false,y:'Debe reciclarse en centros especiales.'}],
ex:[{s:'¿Cuál de estos inventos es el más reciente?',o:['Internet','El telégrafo','El foco incandescente'],y:'Se popularizó a finales del siglo XX.'},
{s:'¿Qué invento llevó la luz eléctrica a las casas?',o:['El foco','La radio','El teléfono'],y:'Edison lo mejoró hacia 1879.'}]},

{t:'Estrellas, galaxias y la Vía Láctea',c:'Estrellas y galaxias',e:[
'Las <b>estrellas</b> son enormes esferas de gas muy caliente que producen su propia luz y calor. El <b>Sol</b> es una estrella: la más cercana a nosotros. Las demás se ven pequeñas porque están muchísimo más lejos.',
'Las estrellas se agrupan en <b>galaxias</b>, que reúnen miles de millones de estrellas, gas y polvo. Nuestra galaxia es la <b>Vía Láctea</b>, con forma de <b>espiral</b>. El Sistema Solar está en uno de sus brazos. En una noche oscura, lejos de la ciudad, se ve como una franja blanquecina en el cielo.',
'Las distancias son tan grandes que se miden en <b>años luz</b>: la distancia que recorre la luz en un año. Una <b>constelación</b> es un grupo de estrellas que, vistas desde la Tierra, forman una figura, como Orión.'],
x:['La luz del Sol tarda unos 8 minutos en llegar a la Tierra.','La galaxia de Andrómeda es la galaxia grande más cercana a la Vía Láctea.'],
k:'El Sol es una estrella. La Vía Láctea es nuestra galaxia, en espiral. Las distancias se miden en años luz.',
q:[{s:'¿Qué es el Sol?',o:['Una estrella','Un planeta','Una galaxia'],y:'Es la estrella más cercana.',p:'Produce su propia luz.'},
{s:'¿Cómo se llama nuestra galaxia?',o:['Vía Láctea','Andrómeda','Orión'],y:'Tiene forma de espiral.',p:'Su nombre tiene que ver con la leche.'},
{s:'¿Qué es un año luz?',o:['La distancia que recorre la luz en un año','Un año con mucho sol','El tiempo que dura el día'],y:'Es una medida de distancia.',p:'Aunque dice año, mide distancia.'},
{s:'Un grupo de estrellas que forma una figura en el cielo es:',o:['Una constelación','Un planeta','Un cometa'],y:'Como Orión.',p:'Se usan para orientarse.'}],
v:[{s:'La Vía Láctea tiene forma de espiral.',v:true,y:'El Sistema Solar está en uno de sus brazos.'},
{s:'Las estrellas no producen su propia luz.',v:false,y:'Sí la producen; los planetas son los que reflejan luz.'}],
ex:[{s:'¿Por qué las demás estrellas se ven más pequeñas que el Sol?',o:['Porque están mucho más lejos','Porque son de juguete','Porque no tienen luz'],y:'Muchas son incluso más grandes que el Sol.'},
{s:'Una galaxia es:',o:['Un conjunto de miles de millones de estrellas, gas y polvo','Un solo planeta','Una nube de lluvia'],y:'La nuestra es la Vía Láctea.'}]},

{t:'¡Exploremos el espacio!',c:'Explorar el espacio',e:[
'Desde siempre, los seres humanos han observado el cielo. Con la invención del <b>telescopio</b> (Galileo lo usó para observar el cielo en 1609) pudimos ver montañas en la Luna y lunas alrededor de Júpiter.',
'En el siglo XX empezó la <b>exploración espacial</b>: en 1957 se lanzó el primer satélite artificial y en <b>1969</b> la misión <b>Apolo 11</b> llevó a los primeros seres humanos a caminar sobre la Luna. Hoy hay una <b>Estación Espacial Internacional</b> donde viven astronautas, robots (rovers) que exploran Marte y telescopios espaciales que fotografían galaxias lejanas.',
'La exploración espacial nos ha dejado inventos útiles en la Tierra, como los satélites para el GPS, el pronóstico del clima y las comunicaciones.'],
x:['El GPS del celular funciona gracias a satélites que giran alrededor de la Tierra.','Los rovers enviados a Marte toman fotos y analizan rocas buscando señales de agua.'],
k:'Telescopio (1609), primer satélite (1957), el ser humano en la Luna (1969), estación espacial y rovers en Marte.',
q:[{s:'¿En qué año llegó el ser humano a la Luna?',o:['1969','1492','2001'],y:'Con la misión Apolo 11.',p:'A finales de los años sesenta.'},
{s:'¿Quién usó el telescopio para observar el cielo en 1609?',o:['Galileo Galilei','Thomas Edison','Cristóbal Colón'],y:'Vio lunas alrededor de Júpiter.',p:'Un científico italiano.'},
{s:'¿Qué usa el GPS para funcionar?',o:['Satélites','Volcanes','Cometas'],y:'Giran alrededor de la Tierra.',p:'Están en el espacio.'},
{s:'¿Qué es un rover?',o:['Un robot que explora otro planeta','Un tipo de estrella','Un astronauta'],y:'Los hay en Marte.',p:'Tiene ruedas y explora.'}],
v:[{s:'En la Estación Espacial Internacional viven astronautas.',v:true,y:'Hacen experimentos en órbita.'},
{s:'Nunca se ha enviado un robot a Marte.',v:false,y:'Se han enviado varios rovers.'}],
ex:[{s:'¿Cómo se llamó la misión que llevó a los primeros humanos a la Luna?',o:['Apolo 11','Titanic','Mayflower'],y:'Fue en 1969.'},
{s:'¿Qué beneficio en la Tierra nos dejó la exploración espacial?',o:['Satélites para comunicaciones y pronóstico del clima','Más volcanes','Menos luz del sol'],y:'Los usamos todos los días.'}]}
]});
T3_MUNDOS.push({name:'Lenguajes',sub:'Cuentos, poemas, teatro y arte',lead:'Lee cuentos de otros países, juega con el lenguaje figurado, arma una antología y sube al escenario.',temas:[
{t:'Producciones con distintos lenguajes a favor del bienestar social',c:'Lenguajes para el bien común',e:[
'Comunicamos con muchos <b>lenguajes</b>: el oral y el escrito, pero también el <b>visual</b> (imágenes, colores), el <b>corporal</b> (gestos, danza), el <b>musical</b> y el <b>digital</b> (videos, podcasts).',
'Podemos usarlos juntos para crear producciones que mejoren la vida de la comunidad: una <b>campaña</b> contra el acoso escolar, un <b>cartel</b> para cuidar el agua, una <b>canción</b> sobre la convivencia o un <b>video corto</b> para promover la lectura.',
'Para planearla: elige un problema real, define a quién va dirigida, decide qué lenguajes usarás, escribe un mensaje claro y positivo, y busca dónde compartirla.'],
x:['Un grupo hizo un podcast de tres minutos con consejos para dormir mejor y lo compartió en la radio escolar.','Un cartel con una imagen fuerte y la frase «Aquí nadie se queda fuera» invita a la inclusión.'],
k:'Combina lenguajes (escrito, visual, corporal, musical, digital) con un mensaje claro para el bien común.',
q:[{s:'¿Cuál es un lenguaje corporal?',o:['La danza','Un cartel','Un podcast'],y:'Comunica con el cuerpo.',p:'Usa el cuerpo.'},
{s:'¿Qué conviene definir al planear una campaña?',o:['A quién va dirigida','El precio de la entrada','El color de tu mochila'],y:'El mensaje se adapta al público.',p:'Piensa en el público.'},
{s:'Un video corto que promueve la lectura usa un lenguaje:',o:['Digital y audiovisual','Solo corporal','Solo musical'],y:'Combina imagen, sonido y palabras.',p:'Se ve en pantalla.'},
{s:'¿Cómo debe ser el mensaje de una campaña de bienestar?',o:['Claro y positivo','Largo y confuso','Agresivo'],y:'Así invita a participar.',p:'Fácil de entender.'}],
v:[{s:'Una canción puede servir para promover la convivencia.',v:true,y:'El lenguaje musical también comunica.'},
{s:'Solo el lenguaje escrito sirve para comunicar ideas.',v:false,y:'Hay muchos lenguajes.'}],
ex:[{s:'Un cartel contra el acoso escolar busca:',o:['El bienestar de la comunidad','Vender un producto','Contar un cuento de terror'],y:'Promueve la convivencia.'},
{s:'¿Qué lenguaje usa principalmente un cartel?',o:['Visual y escrito','Musical','Olfativo'],y:'Imagen y texto.'}]},

{t:'Cuentos de distintos países',c:'Cuentos del mundo',e:[
'En todo el mundo se cuentan <b>cuentos</b>. Muchos nacieron de forma <b>oral</b> y pasaron de abuelos a nietos hasta que alguien los escribió, como los hermanos Grimm en Alemania.',
'Al leer cuentos de otros países conoces otras costumbres, paisajes, comidas y formas de pensar. Por ejemplo, en los cuentos rusos aparece la bruja Baba Yaga; en los de Japón, animales con poderes como el zorro kitsune; y en los de África, el astuto Anansi, la araña.',
'También descubres algo curioso: muchos cuentos de lugares muy lejanos se <b>parecen</b>. Existen versiones de una joven maltratada que encuentra su suerte gracias a un zapato en China, Egipto y Europa.'],
x:['Las fábulas de Esopo vienen de la antigua Grecia y todavía se leen en las escuelas.','«Las mil y una noches» reúne cuentos del Medio Oriente, como el de Aladino.'],
k:'Los cuentos de otros países muestran otras culturas, y muchos se parecen entre sí.',
q:[{s:'¿Cómo se transmitieron muchos cuentos antes de escribirse?',o:['De forma oral','Por televisión','Por correo electrónico'],y:'Se contaban de generación en generación.',p:'Los abuelos los contaban.'},
{s:'¿Qué ganas al leer cuentos de otros países?',o:['Conocer otras culturas','Nada','Olvidar la tuya'],y:'Aprendes costumbres y formas de pensar.',p:'Viajas sin moverte.'},
{s:'¿De dónde vienen las fábulas de Esopo?',o:['De la antigua Grecia','De México','De Japón'],y:'Tienen moraleja.',p:'Un país junto al Mediterráneo.'},
{s:'¿Quiénes recopilaron cuentos populares en Alemania?',o:['Los hermanos Grimm','Los hermanos Marx','Diego Rivera y Frida Kahlo'],y:'Escribieron cuentos que se contaban oralmente.',p:'Eran dos hermanos.'}],
v:[{s:'Hay cuentos muy parecidos en países lejanos entre sí.',v:true,y:'Los temas humanos se repiten.'},
{s:'Los cuentos solo existen en Europa.',v:false,y:'Se cuentan en todo el mundo.'}],
ex:[{s:'Anansi, la araña astuta, es un personaje de cuentos de:',o:['África','Rusia','Argentina'],y:'Viene de tradiciones de África occidental.'},
{s:'«Las mil y una noches» reúne cuentos de:',o:['El Medio Oriente','Australia','Canadá'],y:'Incluye el cuento de Aladino.'}]},

{t:'Características de los cuentos',c:'Partes del cuento',e:[
'El <b>cuento</b> es una narración <b>breve</b> con pocos personajes, que cuenta una historia real o imaginaria.',
'Su estructura tiene tres partes: el <b>inicio</b> o planteamiento (presenta personajes, lugar y tiempo), el <b>desarrollo</b> o nudo (aparece un problema o conflicto) y el <b>desenlace</b> (se resuelve el problema).',
'Sus elementos son: los <b>personajes</b> (principales y secundarios), el <b>narrador</b> (quien cuenta: puede estar dentro de la historia, en primera persona, o fuera, en tercera persona), el <b>ambiente</b> (dónde y cuándo ocurre) y la <b>trama</b> (lo que pasa).'],
x:['«Había una vez una niña que vivía junto al bosque…» es un inicio clásico que presenta personaje y lugar.','«Yo nunca había visto un dragón» lo dice un narrador en primera persona.'],
k:'Inicio, desarrollo (problema) y desenlace. Personajes, narrador, ambiente y trama.',
q:[{s:'¿En qué parte del cuento aparece el problema?',o:['En el desarrollo o nudo','En el inicio','En el título'],y:'Es la parte de mayor emoción.',p:'Es la parte de en medio.'},
{s:'¿Qué parte del cuento resuelve el problema?',o:['El desenlace','El inicio','El nudo'],y:'Es el final.',p:'El final.'},
{s:'«Yo caminé hasta la cueva» está narrado en:',o:['Primera persona','Tercera persona','Segunda persona'],y:'El narrador participa en la historia.',p:'Usa «yo».'},
{s:'El lugar y el tiempo en que ocurre la historia es:',o:['El ambiente','La trama','El narrador'],y:'Ayuda a imaginar la historia.',p:'Dónde y cuándo.'}],
v:[{s:'El cuento es una narración breve.',v:true,y:'A diferencia de la novela, que es larga.'},
{s:'El narrador siempre es un personaje de la historia.',v:false,y:'También puede estar fuera, en tercera persona.'}],
ex:[{s:'«Había una vez, en un pueblo junto al mar, un pescador…» corresponde al:',o:['Inicio','Desenlace','Nudo'],y:'Presenta personaje y lugar.'},
{s:'«Ana encontró la llave y salió de la cueva» narrado así está en:',o:['Tercera persona','Primera persona','Segunda persona'],y:'El narrador cuenta lo que le pasa a otra persona.'}]},

{t:'El lenguaje figurado',c:'Lenguaje figurado',e:[
'El <b>lenguaje literal</b> dice las cosas tal como son. El <b>lenguaje figurado</b> usa las palabras con un sentido distinto para expresar algo de forma más bella, intensa o divertida.',
'Sus recursos más comunes: la <b>comparación</b> o símil, que usa «como» («tus ojos brillan como luceros»); la <b>metáfora</b>, que dice que algo <b>es</b> otra cosa sin usar «como» («tus ojos son luceros»); la <b>personificación</b>, que da cualidades humanas a cosas o animales («el viento canta»); y la <b>hipérbole</b>, una exageración («te lo dije un millón de veces»).',
'Lo usamos todos los días, en refranes y frases como «estoy muerto de cansancio» o «me cayó el veinte».'],
x:['«La Luna nos mira desde el cielo» es una personificación.','«Tengo tanta hambre que me comería una vaca» es una hipérbole.'],
k:'Comparación (con «como»), metáfora (sin «como»), personificación (cualidades humanas) e hipérbole (exageración).',
q:[{s:'«El viento canta entre los árboles» es:',o:['Personificación','Hipérbole','Comparación'],y:'Cantar es algo humano.',p:'¿El viento puede cantar?'},
{s:'«Corre como un rayo» es:',o:['Comparación o símil','Metáfora','Personificación'],y:'Usa la palabra «como».',p:'Busca la palabra «como».'},
{s:'«Te lo dije un millón de veces» es:',o:['Hipérbole','Personificación','Lenguaje literal'],y:'Es una exageración.',p:'¿De verdad fueron un millón?'},
{s:'«Tus ojos son dos luceros» es:',o:['Metáfora','Comparación','Hipérbole'],y:'Dice que algo es otra cosa, sin «como».',p:'No usa «como».'}],
v:[{s:'La metáfora usa la palabra «como».',v:false,y:'Esa es la comparación; la metáfora no la usa.'},
{s:'«Estoy muerto de cansancio» es lenguaje figurado.',v:true,y:'No estás muerto: es una exageración.'}],
ex:[{s:'¿Qué recurso da cualidades humanas a cosas o animales?',o:['Personificación','Hipérbole','Rima'],y:'«El sol sonríe».'},
{s:'«Es más lento que una tortuga dormida» es:',o:['Hipérbole y comparación','Lenguaje literal','Personificación'],y:'Exagera y compara.'}]},

{t:'Características de los poemas',c:'Poemas',e:[
'Un <b>poema</b> es un texto que expresa sentimientos, emociones o ideas usando la <b>belleza del lenguaje</b> y el <b>ritmo</b>.',
'Se escribe en <b>versos</b> (cada línea) que se agrupan en <b>estrofas</b> (grupos de versos separados por un espacio). Muchos poemas tienen <b>rima</b>: la repetición de sonidos al final de los versos. Es <b>consonante</b> cuando se repiten vocales y consonantes (can<b>ción</b> / cora<b>zón</b>) y <b>asonante</b> cuando solo se repiten las vocales (l<b>u</b>n<b>a</b> / pl<b>u</b>m<b>a</b>: coinciden la u y la a, pero no la n y la m).',
'Los poemas usan mucho el lenguaje figurado. También existen poemas sin rima, llamados de <b>verso libre</b>.'],
x:['Ejemplo inventado: «Mi gato duerme en la ventana / soñando con la mañana». Riman «ventana» y «mañana».','Un poema de tres estrofas de cuatro versos tiene 12 versos en total.'],
k:'Verso = línea. Estrofa = grupo de versos. Rima consonante (todos los sonidos) o asonante (solo vocales).',
q:[{s:'¿Qué es un verso?',o:['Cada línea de un poema','Un grupo de líneas','El título del poema'],y:'Los versos forman estrofas.',p:'Es una línea.'},
{s:'¿Qué es una estrofa?',o:['Un grupo de versos','Una sola palabra','El autor del poema'],y:'Se separan con un espacio.',p:'Varios versos juntos.'},
{s:'«Canción» y «corazón» tienen rima:',o:['Consonante','Asonante','No riman'],y:'Se repiten vocales y consonantes: -ón.',p:'Terminan exactamente igual.'},
{s:'Un poema de 3 estrofas de 4 versos tiene:',o:['12 versos','7 versos','4 versos'],y:'3 × 4 = 12.',p:'Multiplica.'}],
v:[{s:'«Luna» y «cuna» tienen rima consonante.',v:true,y:'Coinciden vocales y consonantes: -una.'},
{s:'Todos los poemas tienen rima.',v:false,y:'Existen poemas de verso libre.'},
{s:'Los poemas suelen usar lenguaje figurado.',v:true,y:'Para expresar emociones con belleza.'}],
ex:[{s:'«Luna» y «pluma» tienen rima:',o:['Asonante','Consonante','No riman'],y:'Solo coinciden las vocales u y a.'},
{s:'¿Qué expresa principalmente un poema?',o:['Sentimientos, emociones e ideas','Instrucciones para armar algo','Noticias del día'],y:'Usa la belleza del lenguaje.'}]},

{t:'Características y función de una antología',c:'La antología',e:[
'Una <b>antología</b> es un libro que reúne una <b>selección</b> de textos de distintos autores o de un mismo autor, organizados con un criterio: un tema (cuentos de terror), un género (poemas), un país o una época.',
'Su <b>función</b> es reunir en un solo lugar textos valiosos para que los lectores los disfruten y los conozcan sin buscar en muchos libros.',
'Sus partes: <b>portada</b> (título y compiladores), <b>índice</b> (títulos y páginas), <b>prólogo</b> o introducción (explica qué reúne y por qué), los <b>textos</b> con el nombre de su autor y, a veces, datos de dónde se tomaron.'],
x:['Una antología de leyendas mexicanas puede reunir La Llorona, el Callejón del Beso y la leyenda de los volcanes.','Tu grupo puede hacer una antología de poemas escritos por ustedes mismos.'],
k:'Antología: selección de textos con un criterio. Portada, índice, prólogo y textos con su autor.',
q:[{s:'¿Qué es una antología?',o:['Una selección de textos reunidos con un criterio','Un solo cuento largo','Un diccionario'],y:'Puede ser de varios autores.',p:'Reúne varios textos.'},
{s:'¿Qué parte explica qué reúne la antología y por qué?',o:['El prólogo','El índice','La portada'],y:'Va al principio.',p:'Es como una introducción.'},
{s:'¿Para qué sirve el índice?',o:['Para encontrar cada texto y su página','Para decorar','Para escribir el final'],y:'Facilita la búsqueda.',p:'Lista de títulos y páginas.'},
{s:'Un criterio para organizar una antología puede ser:',o:['Un tema, como cuentos de terror','El peso del libro','El precio del papel'],y:'Los textos tienen algo en común.',p:'Algo que une a todos los textos.'}],
v:[{s:'En una antología se debe indicar el autor de cada texto.',v:true,y:'Se respeta y reconoce su trabajo.'},
{s:'Una antología contiene un solo texto.',v:false,y:'Reúne varios textos.'}],
ex:[{s:'¿Cuál es la función de una antología?',o:['Reunir textos valiosos en un solo libro','Explicar cómo armar un mueble','Dar noticias'],y:'Facilita conocerlos y disfrutarlos.'},
{s:'Una antología de leyendas mexicanas usa como criterio:',o:['Un género y un país','El color de las hojas','El número de páginas'],y:'Reúne leyendas de México.'}]},

{t:'Pasos para elaborar una antología',c:'Hacer una antología',e:[
'Hacer una antología en equipo es un gran proyecto. Estos son los pasos:',
'1) <b>Definir el criterio</b>: el tema o género y a quién va dirigida. 2) <b>Buscar y leer</b> textos en libros, bibliotecas o sitios confiables. 3) <b>Seleccionar</b> los mejores según el criterio. 4) <b>Organizarlos</b>: por orden alfabético, por subtema o del más corto al más largo. 5) Escribir el <b>prólogo</b>, hacer el <b>índice</b> y la <b>portada</b>. 6) <b>Revisar</b> la ortografía y presentación. 7) <b>Compartirla</b> en la biblioteca del salón.',
'Siempre anota el <b>autor</b> y la <b>fuente</b> de cada texto: copiarlo como si fuera tuyo no se vale.'],
x:['Un equipo eligió «poemas sobre animales», leyó 20 y seleccionó los 8 que más les gustaron.','Al final pusieron la antología en la biblioteca del salón para que todos la leyeran.'],
k:'Criterio, búsqueda, selección, organización, prólogo-índice-portada, revisión y difusión. Siempre cita autores y fuentes.',
q:[{s:'¿Cuál es el primer paso para hacer una antología?',o:['Definir el criterio','Hacer la portada','Revisar la ortografía'],y:'Sin criterio no sabes qué buscar.',p:'Decidir el tema.'},
{s:'¿Qué se debe anotar de cada texto?',o:['El autor y la fuente','Solo el color favorito','Nada'],y:'Así se respeta al autor.',p:'¿Quién lo escribió y de dónde salió?'},
{s:'Ordenar los textos por orden alfabético es parte de:',o:['Organizarlos','Buscarlos','Compartirlos'],y:'Da orden al libro.',p:'Ponerlos en orden.'},
{s:'¿Qué paso va al final?',o:['Compartir la antología','Definir el criterio','Buscar textos'],y:'Para que otros la lean.',p:'El último paso es mostrarla.'}],
v:[{s:'Se pueden copiar textos sin decir quién los escribió.',v:false,y:'Siempre se cita al autor.'},
{s:'Revisar la ortografía es parte de elaborar una antología.',v:true,y:'Mejora la presentación.'}],
ex:[{s:'¿Qué paso va después de seleccionar los textos?',o:['Organizarlos','Definir el criterio','Buscar textos'],y:'Luego se escribe el prólogo y el índice.'},
{s:'¿Por qué se cita el autor de cada texto?',o:['Para reconocer y respetar su trabajo','Para llenar espacio','Porque se ve bonito'],y:'Copiar sin citar no se vale.'}]},

{t:'Apreciación de manifestaciones complejas',c:'Obras que combinan artes',e:[
'Algunas obras artísticas son <b>complejas</b> porque combinan varios lenguajes a la vez: la <b>ópera</b> une música, canto, actuación, vestuario y escenografía; el <b>cine</b> une imagen, sonido, actuación y guion; un <b>espectáculo de danza</b> une movimiento, música e iluminación.',
'Para <b>apreciarlas</b> hay que observar con atención cada elemento y cómo se combinan: ¿qué cuenta?, ¿qué emociones provoca la música?, ¿qué dicen los colores del vestuario?, ¿cómo ayuda la luz?',
'Apreciar no es solo decir «me gustó» o «no me gustó», sino explicar <b>por qué</b>, con base en lo que observaste y sentiste.'],
x:['En una película, la música de suspenso te avisa que algo va a pasar antes de que lo veas.','El Ballet Folklórico de México combina danza, música tradicional y vestuarios de distintas regiones.'],
k:'Una obra compleja combina lenguajes. Apreciar es observar cada elemento y explicar por qué te provoca algo.',
q:[{s:'¿Qué lenguajes combina la ópera?',o:['Música, canto, actuación y escenografía','Solo pintura','Solo escritura'],y:'Es una de las artes más completas.',p:'Se canta y se actúa.'},
{s:'Apreciar una obra es:',o:['Observar sus elementos y explicar por qué te provoca algo','Solo decir «me gustó»','Contar cuánto duró'],y:'Hay que argumentar.',p:'Explicar el porqué.'},
{s:'En el cine, la música de suspenso sirve para:',o:['Crear emoción y anticipar lo que pasará','Que no se oigan los actores','Nada'],y:'La música comunica emociones.',p:'Te pone nervioso.'},
{s:'¿Qué manifestación combina movimiento, música e iluminación?',o:['Un espectáculo de danza','Un cuadro de un museo','Una carta'],y:'Usa el cuerpo en escena.',p:'Se baila.'}],
v:[{s:'El cine es una manifestación artística que combina varios lenguajes.',v:true,y:'Imagen, sonido, actuación y guion.'},
{s:'Para apreciar una obra basta con decir si te gustó.',v:false,y:'Hay que explicar por qué.'}],
ex:[{s:'¿Qué grupo mexicano combina danza, música tradicional y vestuario regional?',o:['El Ballet Folklórico de México','Una orquesta de rock','Un equipo de futbol'],y:'Muestra tradiciones de varias regiones.'},
{s:'¿Qué hace compleja a una manifestación artística?',o:['Que combina varios lenguajes','Que es muy cara','Que dura poco'],y:'Une música, imagen, movimiento y más.'}]},

{t:'El lenguaje del arte',c:'Lenguaje del arte',e:[
'Cada arte tiene su propio <b>lenguaje</b>, es decir, sus elementos para comunicar.',
'En las <b>artes visuales</b> se usan la línea, la forma, el color, la textura y el espacio. En la <b>música</b>, el sonido, el ritmo, la melodía, el volumen y el tiempo (rápido o lento). En la <b>danza</b>, el cuerpo, el movimiento, el espacio y la energía. En el <b>teatro</b>, la voz, el gesto, el cuerpo y la escena.',
'Los artistas eligen y combinan estos elementos para transmitir ideas y emociones. Por eso una misma emoción, como la alegría, se puede expresar con colores brillantes, con una melodía rápida o con saltos en la danza.'],
x:['Una canción lenta y suave puede transmitir tristeza o calma.','En una pintura, las líneas en zigzag pueden transmitir energía o tensión.'],
k:'Visuales: línea, forma, color. Música: ritmo, melodía, volumen. Danza: cuerpo y movimiento. Teatro: voz y gesto.',
q:[{s:'¿Cuál es un elemento del lenguaje musical?',o:['El ritmo','La textura de un lienzo','La línea'],y:'Ordena los sonidos en el tiempo.',p:'Lo marcas con palmas.'},
{s:'¿Cuál es un elemento de las artes visuales?',o:['El color','La melodía','El volumen de la voz'],y:'Se ve.',p:'Se percibe con la vista.'},
{s:'¿Con qué se expresa principalmente la danza?',o:['Con el cuerpo y el movimiento','Con pinceles','Con pianos'],y:'El cuerpo es su instrumento.',p:'Se baila.'},
{s:'Una melodía rápida y alegre puede transmitir:',o:['Alegría o energía','Sueño profundo','Silencio'],y:'El tiempo de la música comunica emociones.',p:'Piensa en una fiesta.'}],
v:[{s:'Una misma emoción puede expresarse con distintos lenguajes artísticos.',v:true,y:'Con color, sonido o movimiento.'},
{s:'La danza no tiene elementos propios.',v:false,y:'Tiene cuerpo, movimiento, espacio y energía.'}],
ex:[{s:'El volumen y la melodía son elementos de:',o:['La música','La pintura','La escultura'],y:'Se escuchan.'},
{s:'La voz y el gesto son elementos centrales de:',o:['El teatro','La arquitectura','La fotografía'],y:'Los actores comunican con ellos.'}]},

{t:'El flashmob',c:'El flashmob',e:[
'Un <b>flashmob</b> (que en inglés significa algo como «multitud relámpago») es una actuación <b>sorpresa</b> en un lugar público: de pronto, un grupo de personas que parecían transeúntes empieza a bailar, cantar o actuar al mismo tiempo, y al terminar se dispersan como si nada.',
'Se organiza en secreto: se elige el lugar, la música y la coreografía, se ensaya y se acuerda una señal para empezar. Combina <b>danza</b>, <b>música</b> y <b>actuación</b>.',
'Puede servir para divertir, sorprender o transmitir un mensaje, por ejemplo en una campaña sobre el cuidado del ambiente. Siempre debe hacerse con <b>permiso</b> y sin poner en riesgo a nadie.'],
x:['En una plaza, alguien empieza a bailar y poco a poco se unen otras cincuenta personas con la misma coreografía.','Una escuela organizó un flashmob en el recreo para promover que nadie se quede sin jugar.'],
k:'Flashmob: actuación sorpresa en grupo, en un lugar público, con danza, música o actuación. Con permiso y seguridad.',
q:[{s:'¿Qué es un flashmob?',o:['Una actuación sorpresa de un grupo en un lugar público','Una película de terror','Un tipo de poema'],y:'Empieza de pronto y termina rápido.',p:'Sorpresa en grupo.'},
{s:'¿Qué lenguajes combina un flashmob?',o:['Danza, música y actuación','Solo escritura','Solo escultura'],y:'Es una manifestación compleja.',p:'Se baila con música.'},
{s:'¿Qué se acuerda para empezar al mismo tiempo?',o:['Una señal','Un precio','Un examen'],y:'Así todos inician juntos.',p:'Algo que todos reconozcan.'},
{s:'Antes de hacer un flashmob en un lugar público hay que:',o:['Pedir permiso','Hacerlo sin avisar a nadie y bloquear el paso','Llevar disfraces obligatorios'],y:'Y cuidar la seguridad de todos.',p:'Respetar a los demás.'}],
v:[{s:'Un flashmob puede transmitir un mensaje social.',v:true,y:'Por ejemplo, cuidar el ambiente.'},
{s:'Un flashmob se improvisa sin ensayar.',v:false,y:'Se ensaya la coreografía en secreto.'}],
ex:[{s:'¿Qué hace especial a un flashmob?',o:['Que sorprende al público en un lugar cotidiano','Que dura varias horas','Que se hace en un teatro con boletos'],y:'Nadie lo espera.'},
{s:'Una escuela hace un flashmob para promover la inclusión. Su propósito es:',o:['Transmitir un mensaje social','Vender boletos','Hacer un examen'],y:'El arte también comunica ideas.'}]},

{t:'Elementos simbólicos y análisis de manifestaciones',c:'Analizar el arte',e:[
'Muchas manifestaciones artísticas y culturales tienen <b>elementos simbólicos</b>: objetos, colores o acciones que representan algo más.',
'En el <b>altar de muertos</b>, por ejemplo, el <b>cempasúchil</b> guía con su color y aroma a las almas, el <b>agua</b> calma su sed, la <b>sal</b> purifica, las <b>velas</b> iluminan el camino y el <b>papel picado</b> representa el aire. En la danza de los <b>Voladores de Papantla</b>, los cuatro voladores se relacionan con los cuatro puntos cardinales.',
'Para analizar una manifestación: describe lo que ves, identifica sus símbolos, investiga qué significan en esa cultura y explica qué mensaje transmite.'],
x:['En una boda, el anillo simboliza el compromiso.','En el escudo de una escuela, un libro abierto puede simbolizar el conocimiento.'],
k:'Un símbolo representa algo más. Analiza: describe, identifica símbolos, investiga su significado y explica el mensaje.',
q:[{s:'En un altar de muertos, ¿qué simboliza el cempasúchil?',o:['Guía a las almas con su color y aroma','La comida favorita','El fin de la fiesta'],y:'Por eso se hacen caminos de pétalos.',p:'Su color naranja muestra el camino.'},
{s:'¿Qué representan las velas en el altar?',o:['La luz que ilumina el camino','El agua','El viento'],y:'Ayudan a las almas a orientarse.',p:'Dan luz.'},
{s:'¿Qué es un elemento simbólico?',o:['Algo que representa una idea','Un adorno sin significado','Un instrumento musical'],y:'Comunica más de lo que se ve.',p:'Representa algo más.'},
{s:'¿Cuál es el primer paso para analizar una manifestación?',o:['Describir lo que ves','Dar tu calificación','Copiarla'],y:'Después identificas los símbolos.',p:'Primero observa.'}],
v:[{s:'El papel picado del altar representa el aire.',v:true,y:'Se mueve con el viento.'},
{s:'Los símbolos significan lo mismo en todas las culturas.',v:false,y:'Hay que investigar su sentido en cada cultura.'}],
ex:[{s:'¿Qué representa el agua en un altar de muertos?',o:['Calmar la sed de las almas','La riqueza','La noche'],y:'Después del largo viaje.'},
{s:'Los cuatro voladores de Papantla se relacionan con:',o:['Los cuatro puntos cardinales','Las cuatro estaciones del año escolar','Cuatro equipos de futbol'],y:'Es una danza ritual totonaca.'}]},

{t:'Análisis de guiones dramáticos',c:'Guiones de teatro',e:[
'Un <b>guion dramático</b> (o teatral) es el texto escrito para ser <b>representado</b> en un escenario. Cuenta una historia a través de lo que dicen y hacen los personajes.',
'Sus partes: el <b>reparto</b> o lista de personajes al inicio; los <b>diálogos</b>, con el nombre del personaje antes de lo que dice; y las <b>acotaciones</b>, que van entre paréntesis y en cursiva, e indican cómo se mueven, cómo hablan o cómo es el lugar: «(Entra corriendo, asustado)».',
'La obra se divide en <b>actos</b> (partes grandes) y <b>escenas</b> (cambian cuando entra o sale un personaje). Igual que un cuento, tiene planteamiento, nudo y desenlace.'],
x:['LUCÍA: (Mirando por la ventana) ¡Ya llegó la lluvia! — Aquí, lo que está entre paréntesis es una acotación.','Si en una escena están Pedro y Ana y luego entra Luis, empieza una nueva escena.'],
k:'Reparto, diálogos (con el nombre del personaje) y acotaciones (entre paréntesis). Se divide en actos y escenas.',
q:[{s:'¿Qué son las acotaciones?',o:['Indicaciones entre paréntesis sobre cómo actuar o cómo es el lugar','Los nombres de los actores reales','El precio del boleto'],y:'No se dicen en voz alta.',p:'Van entre paréntesis.'},
{s:'¿Qué va antes de cada diálogo?',o:['El nombre del personaje que habla','El número de página','El título'],y:'Así se sabe quién habla.',p:'¿Quién lo dice?'},
{s:'¿Cuándo cambia una escena?',o:['Cuando entra o sale un personaje','Cuando alguien estornuda','Nunca'],y:'Los actos son partes más grandes.',p:'Piensa en entradas y salidas.'},
{s:'¿Para qué se escribe un guion dramático?',o:['Para ser representado en un escenario','Para leerlo en silencio solamente','Para dar noticias'],y:'Es un texto para actuar.',p:'Es para el teatro.'}],
v:[{s:'Las acotaciones se leen en voz alta durante la obra.',v:false,y:'Son indicaciones para los actores y el director.'},
{s:'Una obra de teatro se divide en actos y escenas.',v:true,y:'Los actos son más grandes.'}],
ex:[{s:'En «PEDRO: (Enojado) ¡Devuélveme mi balón!», ¿qué es «(Enojado)»?',o:['Una acotación','Un diálogo','El reparto'],y:'Indica cómo debe hablar.'},
{s:'La lista de personajes al inicio del guion es:',o:['El reparto','La acotación','El desenlace'],y:'Presenta a quienes actúan.'}]},

{t:'Elementos centrales en teatro',c:'Elementos del teatro',e:[
'El <b>teatro</b> es el arte de representar historias en vivo frente a un público. Para que una obra suceda se necesitan varios elementos.',
'Las personas: los <b>actores y actrices</b> dan vida a los personajes con su voz, cuerpo y gestos; el <b>director</b> coordina todo; y el <b>público</b>, sin el cual no hay teatro. Lo que se ve y se oye: la <b>escenografía</b> (el lugar donde ocurre la acción), el <b>vestuario</b> y el <b>maquillaje</b>, la <b>utilería</b> (objetos que usan los actores), la <b>iluminación</b> y la <b>música o efectos de sonido</b>.',
'Todo parte del <b>guion</b>, que es la base de la historia.'],
x:['En una obra sobre piratas, la escenografía puede ser un barco de cartón y la utilería, un mapa del tesoro.','Al bajar las luces y poner sonido de tormenta, el público siente que llega la noche.'],
k:'Actores, director, público, guion, escenografía, vestuario, utilería, iluminación y sonido.',
q:[{s:'¿Quién coordina a todos en una obra de teatro?',o:['El director','El público','El vestuarista'],y:'Decide cómo se representa la obra.',p:'Es quien dirige.'},
{s:'Los objetos que usan los actores en escena se llaman:',o:['Utilería','Acotaciones','Reparto'],y:'Por ejemplo, una espada o una carta.',p:'Cosas que se usan en escena.'},
{s:'¿Qué elemento representa el lugar donde ocurre la acción?',o:['La escenografía','El vestuario','El maquillaje'],y:'Puede ser un bosque o una casa.',p:'Es el fondo y el decorado.'},
{s:'¿Sin qué elemento no hay teatro?',o:['El público','El maquillaje','La música'],y:'El teatro es en vivo frente a alguien.',p:'Alguien tiene que verlo.'}],
v:[{s:'La iluminación puede crear ambientes, como el de la noche.',v:true,y:'Ayuda a contar la historia.'},
{s:'El vestuario no importa en el teatro.',v:false,y:'Ayuda a caracterizar a los personajes.'}],
ex:[{s:'Un mapa del tesoro que usa un actor en escena es parte de:',o:['La utilería','La escenografía','El guion'],y:'Es un objeto que se manipula.'},
{s:'¿Qué elemento es la base de la historia que se representa?',o:['El guion','El público','La iluminación'],y:'Contiene los diálogos y acotaciones.'}]},

{t:'Significado de mitos y leyendas',c:'Mitos y leyendas',e:[
'Los <b>mitos</b> y las <b>leyendas</b> son relatos tradicionales que se transmitieron de forma oral por generaciones. Se parecen, pero no son iguales.',
'Un <b>mito</b> explica el <b>origen</b> del mundo, de los seres humanos o de fenómenos naturales, y sus personajes son dioses o seres sobrenaturales. Ejemplo: el mito mexica de los Cinco Soles, que explica cómo se crearon las distintas eras.',
'Una <b>leyenda</b> mezcla <b>hechos o lugares reales</b> con elementos fantásticos, y sus personajes suelen ser personas. Ejemplos: La Llorona, el Callejón del Beso en Guanajuato o la leyenda de los volcanes Popocatépetl e Iztaccíhuatl. Ambos guardan la <b>identidad</b> y los valores de un pueblo.'],
x:['El mito de Quetzalcóatl, que dio el maíz a los seres humanos, explica el origen de un alimento sagrado.','La leyenda del Callejón del Beso ocurre en un lugar real que todavía se puede visitar.'],
k:'Mito: explica orígenes, con dioses. Leyenda: lugares o hechos reales con elementos fantásticos.',
q:[{s:'¿Qué explica un mito?',o:['El origen del mundo o de fenómenos naturales','Las noticias del día','Cómo armar un mueble'],y:'Sus personajes son dioses o seres sobrenaturales.',p:'Origen.'},
{s:'¿Qué caracteriza a una leyenda?',o:['Mezcla lugares o hechos reales con fantasía','Solo tiene dioses','Es un texto científico'],y:'Por eso parece verdadera.',p:'Ocurre en lugares que existen.'},
{s:'La Llorona es:',o:['Una leyenda','Un mito de creación','Una noticia'],y:'Es una leyenda muy conocida en México.',p:'Su personaje es una mujer.'},
{s:'¿Cómo se transmitieron los mitos y leyendas?',o:['De forma oral por generaciones','Por correo electrónico','Por televisión'],y:'Después se escribieron.',p:'Se contaban.'}],
v:[{s:'El Callejón del Beso es una leyenda que ocurre en un lugar real.',v:true,y:'Está en Guanajuato.'},
{s:'Los mitos y las leyendas son exactamente lo mismo.',v:false,y:'El mito explica orígenes; la leyenda mezcla realidad y fantasía.'}],
ex:[{s:'Un relato que explica cómo se crearon el Sol y la Luna con dioses como personajes es:',o:['Un mito','Una leyenda','Una noticia'],y:'Explica un origen.'},
{s:'¿Qué guardan los mitos y las leyendas?',o:['La identidad y los valores de un pueblo','Instrucciones de juegos','Precios del mercado'],y:'Son parte de la cultura.'}]},

{t:'¿Cómo elaborar un compendio?',c:'El compendio',e:[
'Un <b>compendio</b> es un texto que reúne y <b>resume</b> la información más importante sobre un tema, tomada de <b>varias fuentes</b>, y la organiza de forma clara.',
'Se diferencia de una antología en que no copia textos completos, sino que <b>sintetiza</b> lo esencial con tus propias palabras.',
'Pasos: 1) elige el tema; 2) busca información en varias fuentes confiables; 3) lee y subraya las ideas principales; 4) organízalas por subtemas; 5) redacta con tus palabras, usando títulos, esquemas o tablas; y 6) anota al final las <b>fuentes consultadas</b>.'],
x:['Un compendio sobre los volcanes de México puede tener subtemas: qué son, cómo se forman, volcanes activos y cómo prevenir riesgos.','Una guía de estudio para el examen es una especie de compendio.'],
k:'Compendio: resume con tus palabras lo esencial de varias fuentes, organizado por subtemas, con las fuentes al final.',
q:[{s:'¿Qué es un compendio?',o:['Un resumen organizado de varias fuentes sobre un tema','Un libro de cuentos completos','Un poema largo'],y:'Reúne lo esencial.',p:'Resume varias fuentes.'},
{s:'¿En qué se diferencia de una antología?',o:['Resume con tus palabras en lugar de copiar textos completos','Es más largo','No tiene tema'],y:'La antología reúne textos completos.',p:'Uno copia, el otro resume.'},
{s:'¿Qué se anota al final de un compendio?',o:['Las fuentes consultadas','El precio','Un chiste'],y:'Así se sabe de dónde salió la información.',p:'¿De dónde sacaste los datos?'},
{s:'Subrayar las ideas principales sirve para:',o:['Identificar lo esencial','Decorar el libro','Leer más lento'],y:'Ayuda a resumir.',p:'Para encontrar lo más importante.'}],
v:[{s:'Una guía de estudio puede ser un compendio.',v:true,y:'Resume lo esencial de un tema.'},
{s:'En un compendio se copian los textos completos.',v:false,y:'Se resumen con tus palabras.'}],
ex:[{s:'¿Qué paso va después de subrayar las ideas principales?',o:['Organizarlas por subtemas','Elegir el tema','Buscar fuentes'],y:'Luego se redacta.'},
{s:'¿Por qué se usan varias fuentes en un compendio?',o:['Para tener información más completa y confiable','Para que sea más difícil','Para copiar más'],y:'Se comparan y complementan.'}]}
]});
T3_MUNDOS.push({name:'Matemáticas',sub:'Pensamiento matemático',lead:'Volumen, mapas, el plano cartesiano, estadística, probabilidad y sucesiones. ¡Las matemáticas del mundo real!',temas:[
{t:'Volúmenes de cuerpos',c:'Volúmenes',e:[
'El <b>volumen</b> de un prisma rectangular (una caja) se calcula multiplicando sus tres medidas: <b>largo × ancho × alto</b>. Una caja de 10 cm × 5 cm × 4 cm tiene 10 × 5 × 4 = <b>200 cm³</b>.',
'En un <b>cubo</b> las tres medidas son iguales: volumen = lado × lado × lado. Un cubo de 3 cm de lado tiene 27 cm³.',
'Para cualquier <b>prisma</b>, la regla general es: <b>área de la base × altura</b>. Si la base de un prisma triangular mide 6 cm² y su altura es 10 cm, su volumen es 60 cm³.'],
x:['Una pecera de 50 cm × 30 cm × 40 cm tiene 60 000 cm³, es decir, 60 litros.','Para saber cuánta tierra cabe en una jardinera de 2 m × 1 m × 0.5 m: 2 × 1 × 0.5 = 1 m³.'],
k:'Caja: largo × ancho × alto. Cubo: lado × lado × lado. Prisma: área de la base × altura.',
q:[{s:'Volumen de una caja de 10 cm × 5 cm × 4 cm:',o:['200 cm³','19 cm³','100 cm³'],y:'10 × 5 × 4 = 200.',p:'Multiplica las tres medidas.'},
{s:'Volumen de un cubo de 3 cm de lado:',o:['27 cm³','9 cm³','12 cm³'],y:'3 × 3 × 3 = 27.',p:'Lado por lado por lado.'},
{s:'Un prisma tiene base de 6 cm² y altura de 10 cm. Su volumen es:',o:['60 cm³','16 cm³','600 cm³'],y:'6 × 10 = 60.',p:'Área de la base × altura.'},
{s:'Una jardinera mide 2 m × 1 m × 0.5 m. ¿Cuánta tierra le cabe?',o:['1 m³','3.5 m³','2 m³'],y:'2 × 1 × 0.5 = 1.',p:'Multiplica las tres medidas.'}],
v:[{s:'Un cubo de 2 cm de lado tiene un volumen de 8 cm³.',v:true,y:'2 × 2 × 2 = 8.'},
{s:'El volumen de una caja se calcula sumando sus medidas.',v:false,y:'Se multiplican.'}],
ex:[{s:'Una pecera mide 50 cm × 30 cm × 40 cm. ¿Cuántos litros le caben?',o:['60 litros','120 litros','6 litros'],y:'60 000 cm³ = 60 litros.'},
{s:'¿Cuál es el volumen de un cubo de 5 cm de lado?',o:['125 cm³','25 cm³','15 cm³'],y:'5 × 5 × 5 = 125.'}]},

{t:'Sistemas de medida: Internacional e Inglés',c:'Sistemas de medida',e:[
'En México usamos el <b>Sistema Internacional</b> (sistema métrico): metro, kilogramo, litro. Es decimal: cada unidad es 10, 100 o 1 000 veces otra.',
'En Estados Unidos y en algunos productos se usa el <b>sistema inglés</b>. Sus equivalencias principales: <b>1 pulgada = 2.54 cm</b>; <b>1 pie = 30.48 cm</b> (12 pulgadas); <b>1 yarda ≈ 0.91 m</b> (3 pies); <b>1 milla ≈ 1.61 km</b>; <b>1 libra ≈ 0.45 kg</b>; <b>1 galón ≈ 3.79 litros</b>.',
'Para convertir, multiplicas por la equivalencia: 10 pulgadas = 10 × 2.54 = 25.4 cm.'],
x:['Las pantallas de televisión se miden en pulgadas: una de 50 pulgadas mide 127 cm en diagonal.','En el futbol americano el campo se mide en yardas.'],
k:'1 pulgada = 2.54 cm, 1 pie = 30.48 cm, 1 milla ≈ 1.61 km, 1 libra ≈ 0.45 kg, 1 galón ≈ 3.79 L.',
q:[{s:'¿Cuántos centímetros mide una pulgada?',o:['2.54 cm','10 cm','1 cm'],y:'Es una medida muy usada en pantallas.',p:'Un poco más de 2.5.'},
{s:'¿Cuántas pulgadas tiene un pie?',o:['12','10','3'],y:'1 pie = 12 pulgadas = 30.48 cm.',p:'Una docena.'},
{s:'10 pulgadas equivalen a:',o:['25.4 cm','10 cm','254 cm'],y:'10 × 2.54 = 25.4.',p:'Multiplica por 2.54.'},
{s:'¿Qué sistema es decimal?',o:['El Sistema Internacional','El sistema inglés','Ninguno'],y:'Sus unidades van de 10 en 10.',p:'El que usamos en México.'}],
v:[{s:'Una milla es más larga que un kilómetro.',v:true,y:'Mide unos 1.61 km.'},
{s:'Una libra pesa más que un kilogramo.',v:false,y:'Pesa unos 0.45 kg.'}],
ex:[{s:'Una pantalla de 50 pulgadas mide en diagonal:',o:['127 cm','50 cm','254 cm'],y:'50 × 2.54 = 127.'},
{s:'¿Cuántos litros tiene un galón, aproximadamente?',o:['3.79 litros','1 litro','10 litros'],y:'Casi 4 litros.'}]},

{t:'Cómo interpretar mapas',c:'Leer mapas',e:[
'Un <b>mapa</b> es una representación reducida de un territorio. Para leerlo bien necesitas tres herramientas.',
'La <b>escala</b> dice cuánto se redujo la realidad. Una escala <b>1 : 100 000</b> significa que 1 cm en el mapa equivale a 100 000 cm reales, es decir, <b>1 km</b>. También puede ser gráfica, como una regla dibujada.',
'La <b>simbología</b> (o leyenda) explica qué significa cada símbolo y color: carreteras, ríos, ciudades, hospitales. La <b>rosa de los vientos</b> indica los puntos cardinales: <b>norte</b> (casi siempre arriba), sur, este (oriente) y oeste (poniente).'],
x:['Si en un mapa con escala 1 : 100 000 dos pueblos están a 5 cm, en realidad están a 5 km.','En la simbología, una cruz roja puede significar hospital y una línea azul, un río.'],
k:'Escala: cuánto se redujo. Simbología: qué significa cada símbolo. Rosa de los vientos: puntos cardinales.',
q:[{s:'Escala 1 : 100 000. Dos pueblos están a 5 cm en el mapa. ¿A qué distancia real están?',o:['5 km','50 km','500 m'],y:'1 cm = 1 km.',p:'Cada centímetro es un kilómetro.'},
{s:'¿Qué explica la simbología de un mapa?',o:['Qué significa cada símbolo y color','La distancia real','La fecha'],y:'También se llama leyenda.',p:'Es como un diccionario del mapa.'},
{s:'¿Qué indica la rosa de los vientos?',o:['Los puntos cardinales','La temperatura','La escala'],y:'Norte, sur, este y oeste.',p:'Sirve para orientarse.'},
{s:'El oeste también se llama:',o:['Poniente','Oriente','Norte'],y:'Por donde se pone el Sol.',p:'Por donde se pone el Sol.'}],
v:[{s:'El este también se llama oriente.',v:true,y:'Por donde sale el Sol.'},
{s:'En un mapa, la escala indica los colores de los ríos.',v:false,y:'Eso lo indica la simbología.'}],
ex:[{s:'En un mapa con escala 1 : 50 000, ¿cuánto representa 1 cm?',o:['500 m','50 km','5 km'],y:'50 000 cm = 500 m.'},
{s:'¿Hacia dónde apunta casi siempre la parte de arriba de un mapa?',o:['Al norte','Al sur','Al oeste'],y:'Por convención.'}]},

{t:'Cómo localizar objetos en croquis y mapas',c:'Croquis y mapas',e:[
'Un <b>croquis</b> es un dibujo sencillo de un lugar, sin escala exacta, que muestra calles y puntos de referencia para llegar a algún sitio.',
'Para describir una ubicación se usan <b>puntos de referencia</b> («frente al parque», «a dos calles de la iglesia») y <b>direcciones</b> («camina hacia el norte y da vuelta a la derecha»).',
'Muchos mapas tienen una <b>cuadrícula</b>: las columnas llevan letras y las filas números. Así, «el museo está en <b>C4</b>» significa columna C, fila 4. Es la misma idea que en el juego de batalla naval.'],
x:['Para invitar a tus amigos a tu fiesta puedes dibujar un croquis desde la escuela hasta tu casa.','En un mapa turístico, el índice dice: «Catedral … D2», y la buscas en la columna D, fila 2.'],
k:'Croquis: dibujo sencillo con referencias. Cuadrícula: letra (columna) y número (fila).',
q:[{s:'¿Qué es un croquis?',o:['Un dibujo sencillo de un lugar con referencias','Un mapa con escala exacta','Una fotografía satelital'],y:'Sirve para orientarse rápido.',p:'Es un dibujo simple.'},
{s:'En una cuadrícula, «B3» significa:',o:['Columna B, fila 3','Columna 3, fila B','3 objetos en B'],y:'Letra para columna y número para fila.',p:'Como en batalla naval.'},
{s:'«Frente al parque» es un ejemplo de:',o:['Punto de referencia','Escala','Simbología'],y:'Un lugar conocido que ayuda a ubicarse.',p:'Algo que todos conocen.'},
{s:'¿Qué tiene un croquis que lo diferencia de un mapa?',o:['No tiene una escala exacta','Tiene más colores','Siempre es más grande'],y:'Es aproximado.',p:'Es aproximado.'}],
v:[{s:'Una cuadrícula usa letras y números para ubicar lugares.',v:true,y:'Como en batalla naval.'},
{s:'Un croquis siempre tiene escala exacta.',v:false,y:'Es un dibujo aproximado.'}],
ex:[{s:'El museo está en D2. ¿Dónde lo buscas?',o:['Columna D, fila 2','Columna 2, fila D','En cualquier lugar'],y:'Letra = columna, número = fila.'},
{s:'Para explicarle a un amigo cómo llegar a tu casa conviene:',o:['Un croquis con puntos de referencia','Un mapa del mundo','Una gráfica circular'],y:'Muestra calles y referencias.'}]},

{t:'El plano cartesiano',c:'Plano cartesiano',e:[
'El <b>plano cartesiano</b> está formado por dos rectas numéricas que se cruzan: el <b>eje horizontal (x)</b> y el <b>eje vertical (y)</b>. El punto donde se cruzan es el <b>origen</b>, con coordenadas (0, 0).',
'Cada punto se ubica con un <b>par ordenado (x, y)</b>: el primer número indica cuánto avanzas a la derecha en el eje x y el segundo, cuánto subes en el eje y. El punto (3, 2) está 3 a la derecha y 2 arriba.',
'El orden importa: (3, 2) y (2, 3) son puntos distintos. Se llama cartesiano en honor a René Descartes.'],
x:['En un videojuego, la posición de un personaje en la pantalla se guarda con coordenadas.','El punto (0, 4) está sobre el eje y, 4 unidades arriba del origen.'],
k:'Par ordenado (x, y): primero horizontal (derecha), luego vertical (arriba). El origen es (0, 0).',
q:[{s:'¿Cuáles son las coordenadas del origen?',o:['(0, 0)','(1, 1)','(0, 1)'],y:'Es donde se cruzan los ejes.',p:'Donde empieza todo.'},
{s:'En el punto (3, 2), ¿qué indica el 3?',o:['Cuánto avanzas a la derecha en el eje x','Cuánto subes','El número de puntos'],y:'El primer número es x.',p:'Primero se camina, luego se sube.'},
{s:'¿Cuál es el eje vertical?',o:['El eje y','El eje x','El origen'],y:'Va de abajo hacia arriba.',p:'El segundo número.'},
{s:'¿Los puntos (3, 2) y (2, 3) son el mismo?',o:['No, el orden importa','Sí, son iguales','Solo a veces'],y:'Están en lugares distintos.',p:'Prueba ubicarlos.'}],
v:[{s:'El punto (0, 4) está sobre el eje y.',v:true,y:'No avanza en x.'},
{s:'En un par ordenado, el primer número indica cuánto subes.',v:false,y:'El primero es horizontal (x).'}],
ex:[{s:'Un punto está 5 unidades a la derecha y 1 arriba del origen. ¿Cuáles son sus coordenadas?',o:['(5, 1)','(1, 5)','(5, 5)'],y:'Primero x, luego y.'},
{s:'¿Cómo se llama el punto donde se cruzan los ejes?',o:['Origen','Vértice','Centro de la escala'],y:'Sus coordenadas son (0, 0).'}]},

{t:'Ubicación de objetos en un plano',c:'Ubicar en el plano',e:[
'Con el plano cartesiano puedes ubicar y mover objetos con precisión.',
'Para <b>ubicar</b> un objeto lees sus coordenadas: si un tesoro está en (4, 3), cuentas 4 a la derecha desde el origen y 3 hacia arriba. Para <b>desplazarlo</b>, sumas o restas: si lo mueves 2 a la derecha, x aumenta 2 y queda en (6, 3); si lo bajas 1, y disminuye 1 y queda en (6, 2).',
'Si unes varios puntos en orden puedes dibujar figuras. Los puntos (1, 1), (4, 1), (4, 3) y (1, 3) forman un rectángulo de 3 unidades de largo y 2 de alto.'],
x:['En un juego de búsqueda del tesoro: «El cofre está en (2, 5)».','Un robot en (0, 0) recibe la orden «3 a la derecha y 2 arriba»: llega a (3, 2).'],
k:'Mover a la derecha suma en x; subir suma en y; a la izquierda o abajo se resta.',
q:[{s:'Un objeto en (4, 3) se mueve 2 a la derecha. ¿Dónde queda?',o:['(6, 3)','(4, 5)','(2, 3)'],y:'x aumenta 2.',p:'A la derecha cambia x.'},
{s:'Un objeto en (6, 3) baja 1. ¿Dónde queda?',o:['(6, 2)','(5, 3)','(6, 4)'],y:'y disminuye 1.',p:'Bajar cambia y.'},
{s:'Un robot en (0, 0) va 3 a la derecha y 2 arriba. ¿Dónde llega?',o:['(3, 2)','(2, 3)','(5, 0)'],y:'Primero x, luego y.',p:'Derecha es x, arriba es y.'},
{s:'Los puntos (1, 1), (4, 1), (4, 3) y (1, 3) forman:',o:['Un rectángulo','Un triángulo','Un círculo'],y:'Cuatro esquinas con lados rectos.',p:'Son cuatro puntos.'}],
v:[{s:'Mover un punto hacia arriba aumenta su coordenada y.',v:true,y:'El eje y es vertical.'},
{s:'Mover un punto a la izquierda aumenta su coordenada x.',v:false,y:'La disminuye.'}],
ex:[{s:'Un punto está en (5, 5) y se mueve 3 a la izquierda. ¿Dónde queda?',o:['(2, 5)','(8, 5)','(5, 2)'],y:'x disminuye 3.'},
{s:'El rectángulo con vértices (1, 1), (4, 1), (4, 3) y (1, 3) mide de largo:',o:['3 unidades','4 unidades','2 unidades'],y:'De x = 1 a x = 4.'}]},

{t:'Gráficas circulares',c:'Gráficas circulares',e:[
'Una <b>gráfica circular</b> (o de pastel) es un círculo dividido en sectores, como rebanadas. Cada sector representa una parte del total.',
'El círculo completo es el <b>100 %</b>. Si una rebanada ocupa la mitad del círculo, representa el 50 %; si ocupa un cuarto, el 25 %.',
'Sirven para ver <b>cómo se reparte un total</b>: en qué gastas tu domingo, qué deporte prefiere tu grupo o cómo se usa el agua en casa. La rebanada más grande es la categoría con más datos.'],
x:['Si en una gráfica de deportes favoritos el futbol ocupa medio pastel, la mitad del grupo lo prefiere.','En una gráfica del uso del agua en casa, el sector más grande suele ser el baño.'],
k:'Gráfica circular: el círculo es el 100 % y cada rebanada es una parte del total.',
q:[{s:'¿Qué representa el círculo completo en una gráfica circular?',o:['El 100 %','El 50 %','El 10 %'],y:'Es el total.',p:'Todo.'},
{s:'Si una rebanada ocupa un cuarto del círculo, representa:',o:['El 25 %','El 50 %','El 4 %'],y:'100 ÷ 4 = 25.',p:'Divide 100 entre 4.'},
{s:'¿Para qué sirve una gráfica circular?',o:['Para ver cómo se reparte un total','Para ver cambios a lo largo de los años','Para ubicar puntos'],y:'Muestra partes de un todo.',p:'Partes de un pastel.'},
{s:'En una gráfica circular, la rebanada más grande es:',o:['La categoría con más datos','La menos importante','Siempre la roja'],y:'Ocupa más espacio.',p:'La que más ocupa.'}],
v:[{s:'Medio círculo representa el 50 %.',v:true,y:'La mitad del total.'},
{s:'Las gráficas circulares sirven para comparar partes de un todo.',v:true,y:'Esa es su función.'}],
ex:[{s:'En una gráfica, el futbol ocupa medio círculo. ¿Qué porcentaje del grupo lo prefiere?',o:['50 %','25 %','100 %'],y:'Medio círculo es la mitad.'},
{s:'¿Qué tipo de gráfica parece un pastel con rebanadas?',o:['Circular','De barras','De líneas'],y:'Cada rebanada es un sector.'}]},

{t:'Construcción e interpretación de gráficas circulares',c:'Construir gráficas circulares',e:[
'Para <b>construir</b> una gráfica circular necesitas convertir cada porcentaje en <b>grados</b>, porque el círculo completo tiene <b>360°</b>.',
'La regla: <b>grados = porcentaje × 3.6</b>. El 25 % ocupa 25 × 3.6 = <b>90°</b>; el 50 %, 180°; el 10 %, 36°. Luego trazas cada sector con el <b>transportador</b> desde el centro.',
'Si tienes cantidades en lugar de porcentajes, primero calcula el porcentaje: si 10 de 40 alumnos prefieren el basquetbol, son 10 ÷ 40 = 25 %, que ocupa 90°. No olvides el <b>título</b> y los nombres o colores de cada sector.'],
x:['En una encuesta a 20 personas, 5 eligieron perros: 25 % = 90°.','Si un sector mide 72°, representa 72 ÷ 3.6 = 20 %.'],
k:'Grados = porcentaje × 3.6. El círculo completo tiene 360°.',
q:[{s:'¿Cuántos grados tiene un círculo completo?',o:['360°','180°','100°'],y:'Es una vuelta completa.',p:'Una vuelta entera.'},
{s:'¿Cuántos grados ocupa el 25 %?',o:['90°','25°','45°'],y:'25 × 3.6 = 90.',p:'Multiplica por 3.6.'},
{s:'¿Cuántos grados ocupa el 10 %?',o:['36°','10°','3.6°'],y:'10 × 3.6 = 36.',p:'Multiplica por 3.6.'},
{s:'De 40 alumnos, 10 prefieren basquetbol. ¿Qué porcentaje es?',o:['25 %','10 %','40 %'],y:'10 ÷ 40 = 0.25.',p:'Divide la parte entre el total.'}],
v:[{s:'El 50 % de una gráfica circular ocupa 180°.',v:true,y:'50 × 3.6 = 180.'},
{s:'Para trazar los sectores se usa una regla graduada en centímetros.',v:false,y:'Se usa el transportador.'}],
ex:[{s:'Un sector mide 72°. ¿Qué porcentaje representa?',o:['20 %','72 %','36 %'],y:'72 ÷ 3.6 = 20.'},
{s:'En una encuesta a 20 personas, 5 eligieron perros. ¿Cuántos grados ocupa ese sector?',o:['90°','5°','45°'],y:'5 de 20 = 25 %; 25 × 3.6 = 90.'}]},

{t:'La media, mediana, moda y rango',c:'Media, mediana y moda',e:[
'Las <b>medidas de tendencia central</b> resumen un conjunto de datos en un solo número. Usemos estos datos: 3, 5, 5, 6, 11.',
'La <b>media</b> (promedio) se obtiene sumando todos los datos y dividiendo entre cuántos son: (3 + 5 + 5 + 6 + 11) ÷ 5 = 30 ÷ 5 = <b>6</b>. La <b>mediana</b> es el dato de en medio cuando están ordenados: <b>5</b>. Si hay dos datos en medio, se promedian. La <b>moda</b> es el dato que más se repite: <b>5</b>.',
'El <b>rango</b> no es de tendencia central: mide qué tan dispersos están los datos. Es el mayor menos el menor: 11 − 3 = <b>8</b>.'],
x:['Tus calificaciones 8, 9 y 10 tienen una media de 9.','Si en tu grupo la talla de zapato más común es 23, esa es la moda.'],
k:'Media: suma ÷ cantidad. Mediana: el de en medio (ordenados). Moda: el que más se repite. Rango: mayor − menor.',
q:[{s:'Media de 3, 5, 5, 6, 11:',o:['6','5','8'],y:'30 ÷ 5 = 6.',p:'Suma y divide entre 5.'},
{s:'Mediana de 3, 5, 5, 6, 11:',o:['5','6','11'],y:'Es el dato de en medio.',p:'El dato central.'},
{s:'Moda de 2, 4, 4, 4, 7, 9:',o:['4','7','2'],y:'Se repite tres veces.',p:'El que más se repite.'},
{s:'Rango de 3, 5, 5, 6, 11:',o:['8','14','6'],y:'11 − 3 = 8.',p:'Mayor menos menor.'}],
v:[{s:'La media de 8, 9 y 10 es 9.',v:true,y:'27 ÷ 3 = 9.'},
{s:'La moda es el dato más grande.',v:false,y:'Es el que más se repite.'}],
ex:[{s:'Mediana de 2, 4, 6, 8:',o:['5','4','6'],y:'Hay dos datos en medio (4 y 6): su promedio es 5.'},
{s:'Datos: 10, 20, 20, 30, 70. ¿Cuál es la media?',o:['30','20','70'],y:'150 ÷ 5 = 30.'}]},

{t:'Interpretación de gráficos: medidas de tendencia central',c:'Interpretar datos',e:[
'Saber calcular la media, la mediana y la moda es solo el inicio: también hay que <b>elegir la que mejor representa</b> los datos.',
'La <b>media</b> funciona bien cuando los datos son parecidos, pero un dato muy diferente (un <b>dato atípico</b>) la jala. Si cuatro amigos tienen $20 cada uno y otro tiene $500, la media es $116, aunque casi nadie tiene esa cantidad. En ese caso la <b>mediana</b> ($20) representa mejor.',
'La <b>moda</b> es útil con datos que no son números, como el sabor de helado favorito o la talla más vendida. En una gráfica de barras, la moda es la barra más alta.'],
x:['Una tienda de zapatos usa la moda para saber qué talla pedir más.','Para el ingreso de una colonia, la mediana suele representar mejor que la media, porque unos pocos ingresos muy altos la elevan.'],
k:'Un dato atípico jala la media; entonces la mediana representa mejor. La moda sirve para datos que no son números.',
q:[{s:'Cuatro amigos tienen $20 y otro $500. ¿Qué medida representa mejor al grupo?',o:['La mediana','La media','El rango'],y:'La media se infla por el dato atípico.',p:'Un dato muy distinto afecta el promedio.'},
{s:'Para saber el sabor de helado favorito, conviene usar:',o:['La moda','La media','El rango'],y:'Los sabores no son números.',p:'El que más se repite.'},
{s:'En una gráfica de barras, la moda es:',o:['La barra más alta','La barra más baja','La primera barra'],y:'Es la categoría más frecuente.',p:'La más frecuente.'},
{s:'¿Qué es un dato atípico?',o:['Un dato muy diferente a los demás','El dato más repetido','El dato de en medio'],y:'Puede distorsionar la media.',p:'Se sale del grupo.'}],
v:[{s:'Un dato atípico puede hacer que la media no represente bien al grupo.',v:true,y:'La jala hacia arriba o abajo.'},
{s:'La media siempre es la mejor medida.',v:false,y:'Depende de los datos.'}],
ex:[{s:'Una zapatería quiere saber qué talla pedir más. ¿Qué medida usa?',o:['La moda','La media','El rango'],y:'La talla más vendida.'},
{s:'Datos: $20, $20, $20, $20, $500. ¿Cuál es la media?',o:['$116','$20','$500'],y:'580 ÷ 5 = 116.'}]},

{t:'Lectura de información estadística',c:'Leer estadísticas',e:[
'Todos los días aparecen datos estadísticos en noticias, etiquetas y la escuela. Leerlos bien te ayuda a entender el mundo y a no dejarte engañar.',
'Al leer una tabla o gráfica fíjate en: el <b>título</b> (de qué trata), las <b>categorías</b> y las <b>unidades</b> (personas, pesos, porcentajes), la <b>fuente</b> (quién obtuvo los datos) y la <b>fecha</b>.',
'Cuidado con las gráficas engañosas: si el eje vertical no empieza en cero, una diferencia pequeña puede parecer enorme. Compara siempre los números, no solo el tamaño de las barras.'],
x:['Una gráfica dice «Ventas de helado por mes, 2026. Fuente: tiendita escolar». Ya sabes qué, cuándo y quién.','Dos barras que marcan 98 y 100 pueden verse muy distintas si el eje empieza en 95.'],
k:'Revisa título, categorías, unidades, fuente y fecha. Cuidado con ejes que no empiezan en cero.',
q:[{s:'¿Qué indica el título de una gráfica?',o:['De qué tratan los datos','La fuente','El color'],y:'Es lo primero que se lee.',p:'De qué trata.'},
{s:'¿Por qué importa la fuente de los datos?',o:['Para saber quién los obtuvo y si son confiables','Para decorar','No importa'],y:'Una fuente seria da confianza.',p:'¿Quién los obtuvo?'},
{s:'¿Qué puede hacer engañosa una gráfica de barras?',o:['Que el eje vertical no empiece en cero','Que tenga título','Que tenga colores'],y:'Las diferencias parecen más grandes.',p:'Revisa dónde empieza el eje.'},
{s:'Además del título y la fuente, conviene revisar:',o:['Las unidades y la fecha','Solo el tamaño de las barras','El tipo de letra'],y:'Así interpretas bien los números.',p:'¿En qué se mide y cuándo?'}],
v:[{s:'Siempre hay que comparar los números, no solo el tamaño de las barras.',v:true,y:'Las gráficas pueden engañar.'},
{s:'La fecha de los datos no es importante.',v:false,y:'Los datos cambian con el tiempo.'}],
ex:[{s:'Una gráfica muestra barras de 98 y 100, pero el eje empieza en 95. ¿Qué pasa?',o:['La diferencia parece mayor de lo que es','La gráfica es perfecta','Los datos son falsos'],y:'Hay que leer los números.'},
{s:'«Fuente: tiendita escolar» indica:',o:['Quién obtuvo los datos','El precio del helado','La fecha'],y:'Es la fuente.'}]},

{t:'Portadores de información',c:'Portadores de información',e:[
'Los <b>portadores de información</b> son los medios donde se presentan los datos: <b>tablas</b>, <b>gráficas</b> (de barras, circulares, de líneas), <b>infografías</b>, <b>pictogramas</b>, mapas y textos informativos.',
'Cada uno sirve para algo: una tabla organiza muchos datos exactos; una gráfica de barras compara categorías; una gráfica de líneas muestra cómo algo <b>cambia con el tiempo</b>; una gráfica circular muestra partes de un total; y una infografía combina datos, imágenes y texto breve para explicar un tema.',
'Los datos se obtienen con <b>encuestas</b> (preguntar a un grupo de personas) o <b>censos</b> (preguntar a todos). En México, el censo de población se hace cada 10 años.'],
x:['La temperatura de cada día de la semana se muestra mejor en una gráfica de líneas.','Una infografía sobre el reciclaje puede tener íconos, números y flechas.'],
k:'Tabla: datos exactos. Barras: comparar. Líneas: cambio en el tiempo. Circular: partes de un total. Infografía: datos + imágenes.',
q:[{s:'Para mostrar cómo cambia la temperatura durante una semana conviene:',o:['Una gráfica de líneas','Una gráfica circular','Un croquis'],y:'Muestra cambios en el tiempo.',p:'El tiempo avanza en línea.'},
{s:'¿Qué combina una infografía?',o:['Datos, imágenes y texto breve','Solo números','Solo un poema'],y:'Explica de forma visual.',p:'Es muy visual.'},
{s:'¿Qué es un censo?',o:['Preguntar a toda la población','Preguntar a una sola persona','Un tipo de gráfica'],y:'La encuesta pregunta solo a una parte.',p:'Se pregunta a todos.'},
{s:'Para comparar las ventas de cuatro sabores de helado conviene:',o:['Una gráfica de barras','Una gráfica de líneas','Un mapa'],y:'Compara categorías.',p:'Barras de distinta altura.'}],
v:[{s:'En México, el censo de población se hace cada 10 años.',v:true,y:'El más reciente fue en 2020.'},
{s:'Una encuesta siempre pregunta a todas las personas de un país.',v:false,y:'Eso es un censo; la encuesta pregunta a una parte.'}],
ex:[{s:'¿Qué portador organiza muchos datos exactos en filas y columnas?',o:['Una tabla','Un dibujo','Un cuento'],y:'Facilita encontrar valores.'},
{s:'Para mostrar qué parte de tu domingo gastas en cada cosa, conviene:',o:['Una gráfica circular','Una gráfica de líneas','Un croquis'],y:'Son partes de un total.'}]},

{t:'Probabilidad de un suceso',c:'Probabilidad',e:[
'La <b>probabilidad</b> mide qué tan posible es que algo ocurra. Se calcula así: <b>casos favorables ÷ casos posibles</b>.',
'Al lanzar un dado hay 6 casos posibles. La probabilidad de que salga un 4 es <b>1/6</b>. La de que salga un número par (2, 4 o 6) es <b>3/6 = 1/2</b>.',
'La probabilidad va de <b>0</b> a <b>1</b>: 0 es un suceso <b>imposible</b> (sacar un 7 en un dado), 1 es un suceso <b>seguro</b> (sacar un número menor que 7), y en medio están los <b>probables</b>. Entre más cerca de 1, más probable.'],
x:['En una bolsa con 3 canicas rojas y 1 azul, la probabilidad de sacar roja es 3/4.','Al lanzar una moneda, la probabilidad de águila es 1/2.'],
k:'Probabilidad = favorables ÷ posibles. Va de 0 (imposible) a 1 (seguro).',
q:[{s:'¿Cuál es la probabilidad de sacar un 4 en un dado?',o:['1/6','4/6','1/4'],y:'Un caso favorable de 6 posibles.',p:'¿Cuántas caras tiene el dado?'},
{s:'¿Cuál es la probabilidad de sacar un número par en un dado?',o:['1/2','1/3','1/6'],y:'3 favorables (2, 4, 6) de 6.',p:'Cuenta los pares.'},
{s:'Bolsa con 3 canicas rojas y 1 azul. ¿Probabilidad de sacar roja?',o:['3/4','1/4','1/3'],y:'3 favorables de 4 posibles.',p:'Rojas entre el total.'},
{s:'Un suceso con probabilidad 0 es:',o:['Imposible','Seguro','Muy probable'],y:'Nunca ocurre.',p:'Cero posibilidades.'}],
v:[{s:'Sacar un 7 en un dado normal es un suceso imposible.',v:true,y:'Solo tiene del 1 al 6.'},
{s:'La probabilidad puede ser mayor que 1.',v:false,y:'Va de 0 a 1.'}],
ex:[{s:'¿Cuál es la probabilidad de que caiga águila al lanzar una moneda?',o:['1/2','1','1/4'],y:'Un caso favorable de dos.'},
{s:'Sacar un número menor que 7 al lanzar un dado es un suceso:',o:['Seguro','Imposible','Poco probable'],y:'Su probabilidad es 1.'}]},

{t:'Resultados posibles en situaciones aleatorias',c:'Situaciones aleatorias',e:[
'Una situación es <b>aleatoria</b> cuando no puedes saber con certeza qué va a pasar, aunque conozcas todos los resultados posibles: lanzar una moneda, un dado o sacar una carta.',
'El conjunto de todos los resultados posibles se llama <b>espacio muestral</b>. Moneda: {águila, sol} → 2 resultados. Dado: {1, 2, 3, 4, 5, 6} → 6 resultados.',
'Cuando combinas dos experimentos, multiplicas: dos monedas tienen 2 × 2 = <b>4</b> resultados (AA, AS, SA, SS); una moneda y un dado, 2 × 6 = <b>12</b>. Una situación <b>no</b> es aleatoria si el resultado se sabe de antemano, como que mañana salga el Sol.'],
x:['En un sorteo con 30 boletos hay 30 resultados posibles.','Al lanzar dos dados hay 6 × 6 = 36 resultados posibles.'],
k:'Espacio muestral: todos los resultados posibles. Para combinar experimentos, multiplica.',
q:[{s:'¿Cuántos resultados posibles hay al lanzar dos monedas?',o:['4','2','3'],y:'AA, AS, SA, SS.',p:'2 × 2.'},
{s:'¿Cuál es el espacio muestral de una moneda?',o:['{águila, sol}','{1, 2, 3, 4, 5, 6}','{rojo, azul}'],y:'Solo dos resultados.',p:'Tiene dos caras.'},
{s:'¿Cuántos resultados hay al lanzar una moneda y un dado?',o:['12','8','6'],y:'2 × 6 = 12.',p:'Multiplica.'},
{s:'¿Cuál es una situación aleatoria?',o:['Lanzar un dado','Que el agua moje','Que mañana sea el día después de hoy'],y:'No sabes qué número saldrá.',p:'No se sabe el resultado.'}],
v:[{s:'Al lanzar dos dados hay 36 resultados posibles.',v:true,y:'6 × 6 = 36.'},
{s:'Lanzar una moneda no es una situación aleatoria.',v:false,y:'Sí lo es: no sabes qué saldrá.'}],
ex:[{s:'¿Cuál es el espacio muestral de un dado?',o:['{1, 2, 3, 4, 5, 6}','{águila, sol}','{1, 2, 3}'],y:'Seis resultados.'},
{s:'Se sacan boletos de una urna con 30 boletos numerados. ¿Cuántos resultados posibles hay?',o:['30','1','15'],y:'Uno por cada boleto.'}]},

{t:'Tablas de doble entrada y diagramas de árbol',c:'Tablas y diagramas de árbol',e:[
'Cuando quieres contar todas las combinaciones posibles, hay dos herramientas muy útiles.',
'La <b>tabla de doble entrada</b> pone las opciones de una cosa en las filas y las de otra en las columnas. Cada casilla es una combinación. Con 3 playeras y 2 pantalones obtienes 3 × 2 = <b>6</b> combinaciones.',
'El <b>diagrama de árbol</b> dibuja ramas: de un punto salen las opciones del primer paso y de cada una salen las del segundo. Es útil cuando hay más de dos pasos: 2 sabores de helado, 2 tipos de cono y 2 complementos dan 2 × 2 × 2 = <b>8</b> combinaciones.'],
x:['Un menú con 3 guisados y 2 aguas permite 6 comidas distintas.','Al lanzar una moneda tres veces, el diagrama de árbol muestra 8 resultados.'],
k:'Tabla de doble entrada: filas × columnas. Diagrama de árbol: ramas para cada paso. Se multiplica.',
q:[{s:'3 playeras y 2 pantalones. ¿Cuántas combinaciones?',o:['6','5','8'],y:'3 × 2 = 6.',p:'Multiplica.'},
{s:'Un menú tiene 3 guisados y 2 aguas. ¿Cuántas comidas distintas?',o:['6','5','9'],y:'3 × 2 = 6.',p:'Guisados × aguas.'},
{s:'2 sabores, 2 conos y 2 complementos. ¿Cuántas combinaciones?',o:['8','6','4'],y:'2 × 2 × 2 = 8.',p:'Multiplica los tres.'},
{s:'¿Qué herramienta dibuja ramas para cada paso?',o:['El diagrama de árbol','La gráfica circular','El croquis'],y:'Cada rama es una opción.',p:'Parece un árbol.'}],
v:[{s:'Lanzar una moneda tres veces da 8 resultados posibles.',v:true,y:'2 × 2 × 2 = 8.'},
{s:'En una tabla de doble entrada, cada casilla es una combinación.',v:true,y:'Cruza una fila y una columna.'}],
ex:[{s:'4 tipos de pan y 3 rellenos. ¿Cuántas tortas distintas se pueden hacer?',o:['12','7','4'],y:'4 × 3 = 12.'},
{s:'¿Qué herramienta conviene para contar combinaciones de tres pasos?',o:['Un diagrama de árbol','Una regla','Un mapa'],y:'Muestra cada paso como ramas.'}]},

{t:'Sucesiones con figuras',c:'Sucesiones con figuras',e:[
'Una <b>sucesión con figuras</b> es una serie de dibujos que cambian siguiendo un <b>patrón</b>. Descubrir el patrón permite saber cómo será cualquier figura.',
'Ejemplo: con palitos se forman cuadrados en fila. La figura 1 usa 4 palitos, la figura 2 usa 7 y la figura 3 usa 10. Cada vez se agregan <b>3 palitos</b>. La figura 4 usará 13.',
'Para encontrar el patrón, haz una tabla con el número de figura y la cantidad de elementos, y observa cuánto aumenta de una a otra.'],
x:['Triángulos con puntos: 1, 3, 6, 10… cada vez se agrega una fila con un punto más.','Una escalera de cubos: 1, 3, 5, 7… crece de 2 en 2.'],
k:'Busca cuánto cambia de una figura a la siguiente; una tabla ayuda a ver el patrón.',
q:[{s:'Palitos: 4, 7, 10… ¿Cuántos tendrá la figura 4?',o:['13','12','14'],y:'Se agregan 3 cada vez.',p:'¿Cuánto aumenta?'},
{s:'Escalera de cubos: 1, 3, 5, 7… ¿Cuánto aumenta cada vez?',o:['2','1','3'],y:'Crece de 2 en 2.',p:'Resta dos términos seguidos.'},
{s:'Puntos en triángulo: 1, 3, 6, 10… ¿Cuál sigue?',o:['15','14','12'],y:'Se suman 2, 3, 4 y luego 5.',p:'El aumento crece de uno en uno.'},
{s:'¿Qué ayuda a descubrir el patrón de una sucesión?',o:['Una tabla de figura y cantidad','Un mapa','Una gráfica circular'],y:'Muestra cuánto cambia.',p:'Organiza los datos.'}],
v:[{s:'En la sucesión 4, 7, 10, 13 se suman 3 cada vez.',v:true,y:'7 − 4 = 3.'},
{s:'Un patrón nunca se repite.',v:false,y:'Un patrón es una regla que se repite.'}],
ex:[{s:'Figuras con 5, 9, 13 círculos… ¿Cuántos tendrá la siguiente?',o:['17','16','18'],y:'Aumenta de 4 en 4.'},
{s:'Escalera de cubos: 1, 3, 5, 7… ¿Cuántos cubos tendrá la quinta figura?',o:['9','8','10'],y:'7 + 2 = 9.'}]},

{t:'Reglas de sucesión',c:'Reglas de sucesión',e:[
'La <b>regla</b> de una sucesión indica cómo obtener cualquier término sin dibujar ni escribir todos los anteriores.',
'Hay dos formas de verla. La regla <b>recursiva</b> dice cómo pasar de un término al siguiente: «empieza en 4 y suma 3». La regla <b>general</b> usa el número de lugar (n): en 4, 7, 10, 13… cada término es <b>3 × n + 1</b>. El término 10 sería 3 × 10 + 1 = <b>31</b>.',
'Para encontrar la regla general de una sucesión que crece de manera constante: el aumento multiplica a n, y luego ajustas sumando o restando lo necesario para que el primer término coincida.'],
x:['La sucesión 5, 10, 15, 20… tiene regla 5 × n: el término 8 es 40.','La sucesión 2, 5, 8, 11… tiene regla 3 × n − 1: el término 1 es 3 − 1 = 2.'],
k:'Recursiva: cómo pasar al siguiente. General: fórmula con n (lugar). Ej.: 4, 7, 10… → 3n + 1.',
q:[{s:'Regla general de 5, 10, 15, 20…:',o:['5 × n','n + 5','5 + n × 2'],y:'Cada término es 5 por su lugar.',p:'Son los múltiplos de 5.'},
{s:'Con la regla 3 × n + 1, ¿cuál es el término 10?',o:['31','30','13'],y:'3 × 10 + 1 = 31.',p:'Sustituye n por 10.'},
{s:'«Empieza en 4 y suma 3» es una regla:',o:['Recursiva','General','Imposible'],y:'Dice cómo pasar al siguiente.',p:'Paso a paso.'},
{s:'Con la regla 2 × n, ¿cuál es el término 7?',o:['14','9','72'],y:'2 × 7 = 14.',p:'Multiplica 2 por 7.'}],
v:[{s:'La sucesión 2, 5, 8, 11 sigue la regla 3 × n − 1.',v:true,y:'3 × 1 − 1 = 2, 3 × 2 − 1 = 5…'},
{s:'Con la regla 5 × n, el término 8 es 13.',v:false,y:'Es 5 × 8 = 40.'}],
ex:[{s:'¿Cuál es el término 20 de la sucesión 4, 7, 10, 13… (regla 3n + 1)?',o:['61','60','23'],y:'3 × 20 + 1 = 61.'},
{s:'¿Qué indica la n en una regla general?',o:['El lugar del término','El resultado','El aumento'],y:'1.º, 2.º, 3.º…'}]},

{t:'Sucesiones aritméticas y geométricas',c:'Aritméticas y geométricas',e:[
'Una sucesión es <b>aritmética</b> cuando cada término se obtiene <b>sumando</b> (o restando) siempre el mismo número. Ejemplo: 3, 7, 11, 15… (se suma 4).',
'Una sucesión es <b>geométrica</b> cuando cada término se obtiene <b>multiplicando</b> (o dividiendo) siempre por el mismo número. Ejemplo: 2, 6, 18, 54… (se multiplica por 3). Las geométricas crecen muchísimo más rápido.',
'Para saber de qué tipo es: resta términos seguidos; si siempre da igual, es aritmética. Si no, divide; si siempre da igual, es geométrica.'],
x:['Ahorrar $10 cada semana forma una sucesión aritmética: 10, 20, 30, 40…','Si una bacteria se divide en dos cada hora: 1, 2, 4, 8, 16… es geométrica.'],
k:'Aritmética: siempre se suma lo mismo. Geométrica: siempre se multiplica por lo mismo.',
q:[{s:'3, 7, 11, 15… es una sucesión:',o:['Aritmética','Geométrica','Ninguna'],y:'Se suma 4 cada vez.',p:'Resta términos seguidos.'},
{s:'2, 6, 18, 54… es una sucesión:',o:['Geométrica','Aritmética','Ninguna'],y:'Se multiplica por 3.',p:'Divide términos seguidos.'},
{s:'¿Qué número sigue en 1, 2, 4, 8, 16…?',o:['32','24','18'],y:'Se multiplica por 2.',p:'Duplica.'},
{s:'¿Qué número sigue en 50, 45, 40, 35…?',o:['30','25','34'],y:'Se resta 5.',p:'¿Cuánto baja cada vez?'}],
v:[{s:'Ahorrar $10 cada semana forma una sucesión geométrica.',v:false,y:'Es aritmética: se suma 10.'},
{s:'Las sucesiones geométricas pueden crecer muy rápido.',v:true,y:'Porque se multiplica.'}],
ex:[{s:'¿Qué número sigue en 3, 9, 27…?',o:['81','36','30'],y:'Se multiplica por 3.'},
{s:'¿Qué tipo de sucesión es 5, 10, 15, 20?',o:['Aritmética','Geométrica','Aleatoria'],y:'Se suma 5.'}]}
]});
T3_MUNDOS.push({
 "name": "Geografía",
 "sub": "Ética, naturaleza y sociedades",
 "lead": "Pueblos de América y del mundo, y las personas que migran: la diversidad del planeta.",
 "temas": [
  {
   "t": "Pueblos originarios del Continente Americano",
   "c": "Pueblos originarios de América",
   "e": [
    "Los <b>pueblos originarios</b> o indígenas son los descendientes de quienes habitaban el continente antes de la llegada de los europeos. Conservan sus lenguas, sus formas de organizarse, sus fiestas y su relación con la naturaleza.",
    "En México viven muchos pueblos, como los <b>nahuas</b>, <b>mayas</b>, <b>zapotecos</b>, <b>mixtecos</b>, <b>otomíes</b>, <b>tsotsiles</b> y <b>rarámuris</b>. En el resto de América están, por ejemplo, los <b>quechuas</b> y <b>aymaras</b> en los Andes (Perú, Bolivia, Ecuador), los <b>mapuches</b> en Chile y Argentina, los <b>guaraníes</b> en Paraguay (donde el guaraní es idioma oficial), los <b>navajos</b> en Estados Unidos y los <b>inuit</b> en el norte de Canadá.",
    "Muchos han enfrentado discriminación y despojo de sus tierras. Hoy se reconocen sus <b>derechos</b>, como hablar su lengua y decidir sobre su territorio. El <b>9 de agosto</b> es el Día Internacional de los Pueblos Indígenas."
   ],
   "x": [
    "Los rarámuris de Chihuahua son famosos por correr distancias larguísimas en la sierra.",
    "El quechua fue la lengua del imperio inca y todavía la hablan millones de personas."
   ],
   "k": "Los pueblos originarios conservan lenguas y culturas propias en todo el continente y tienen derechos que se deben respetar.",
   "q": [
    {
     "s": "¿Quiénes son los pueblos originarios?",
     "o": [
      "Los descendientes de quienes habitaban América antes de los europeos",
      "Personas que llegaron el año pasado",
      "Solo los habitantes de Europa"
     ],
     "y": "Conservan sus lenguas y culturas.",
     "p": "Ya estaban aquí antes."
    },
    {
     "s": "¿Dónde viven principalmente los quechuas?",
     "o": [
      "En los Andes",
      "En el desierto del Sahara",
      "En Japón"
     ],
     "y": "Perú, Bolivia y Ecuador.",
     "p": "Una gran cordillera de Sudamérica."
    },
    {
     "s": "¿En qué país el guaraní es idioma oficial?",
     "o": [
      "Paraguay",
      "México",
      "Canadá"
     ],
     "y": "Junto con el español.",
     "p": "Un país de Sudamérica."
    },
    {
     "s": "¿Cuál es un pueblo originario de México?",
     "o": [
      "Los zapotecos",
      "Los vikingos",
      "Los samuráis"
     ],
     "y": "Viven sobre todo en Oaxaca.",
     "p": "Busca el que es de Oaxaca."
    }
   ],
   "v": [
    {
     "s": "Los inuit viven en el norte de Canadá.",
     "v": true,
     "y": "Habitan regiones muy frías."
    },
    {
     "s": "Los pueblos originarios ya no existen.",
     "v": false,
     "y": "Viven millones de personas indígenas en América."
    }
   ],
   "ex": [
    {
     "s": "¿Qué día es el Día Internacional de los Pueblos Indígenas?",
     "o": [
      "9 de agosto",
      "16 de septiembre",
      "25 de diciembre"
     ],
     "y": "Lo estableció la ONU."
    },
    {
     "s": "Los mapuches viven en:",
     "o": [
      "Chile y Argentina",
      "México y Guatemala",
      "Estados Unidos"
     ],
     "y": "En el sur de Sudamérica."
    },
    {
     "s": "¿Qué derecho tienen los pueblos originarios?",
     "o": [
      "Hablar su propia lengua",
      "Ninguno especial",
      "Solo hablar inglés"
     ],
     "y": "Su lengua es parte de su identidad."
    }
   ]
  },
  {
   "t": "Pueblos del mundo",
   "c": "Pueblos del mundo",
   "e": [
    "En el planeta viven miles de pueblos con <b>culturas</b> distintas: lenguas, religiones, vestimentas, comidas, música y formas de ver el mundo. A esto se le llama <b>diversidad cultural</b>.",
    "Algunos pueblos originarios de otros continentes son: los <b>sami</b>, que crían renos en el norte de Noruega, Suecia y Finlandia; los <b>maasái</b>, pastores de Kenia y Tanzania; los <b>aborígenes australianos</b>, con una de las culturas vivas más antiguas del mundo; los <b>ainu</b> en Japón; y los <b>amazigh</b> (bereberes) en el norte de África.",
    "Conocer otras culturas ayuda a <b>respetarlas</b> y a evitar la discriminación. Ninguna cultura es mejor que otra: todas aportan a la humanidad."
   ],
   "x": [
    "Los maasái son conocidos por sus collares de cuentas de colores y su danza de saltos.",
    "Los aborígenes australianos crearon pinturas con puntos que cuentan historias de su territorio."
   ],
   "k": "La diversidad cultural es la riqueza de los pueblos del mundo. Ninguna cultura es superior: todas merecen respeto.",
   "q": [
    {
     "s": "¿Qué es la diversidad cultural?",
     "o": [
      "La variedad de culturas en el mundo",
      "Que todos sean iguales",
      "Un tipo de comida"
     ],
     "y": "Lenguas, costumbres, religiones distintas.",
     "p": "Diversidad es variedad."
    },
    {
     "s": "¿Qué pueblo cría renos en el norte de Europa?",
     "o": [
      "Los sami",
      "Los maasái",
      "Los mayas"
     ],
     "y": "Viven en zonas muy frías.",
     "p": "Donde hace mucho frío."
    },
    {
     "s": "Los maasái viven en:",
     "o": [
      "Kenia y Tanzania",
      "Australia",
      "Noruega"
     ],
     "y": "Son pastores africanos.",
     "p": "Están en África."
    },
    {
     "s": "¿Por qué es importante conocer otras culturas?",
     "o": [
      "Para respetarlas y evitar la discriminación",
      "Para burlarse de ellas",
      "No es importante"
     ],
     "y": "Ninguna cultura es mejor que otra.",
     "p": "Para convivir mejor."
    }
   ],
   "v": [
    {
     "s": "Los aborígenes australianos tienen una de las culturas vivas más antiguas del mundo.",
     "v": true,
     "y": "Tienen decenas de miles de años en Australia."
    },
    {
     "s": "Hay culturas superiores a otras.",
     "v": false,
     "y": "Todas tienen el mismo valor."
    }
   ],
   "ex": [
    {
     "s": "Los ainu son un pueblo originario de:",
     "o": [
      "Japón",
      "México",
      "Brasil"
     ],
     "y": "Viven sobre todo en el norte de Japón."
    },
    {
     "s": "¿Qué actitud favorece la convivencia entre culturas?",
     "o": [
      "El respeto",
      "La burla",
      "La discriminación"
     ],
     "y": "Todas las culturas valen."
    },
    {
     "s": "Los amazigh, también llamados bereberes, viven en:",
     "o": [
      "El norte de África",
      "Canadá",
      "Argentina"
     ],
     "y": "Desde hace miles de años."
    }
   ]
  },
  {
   "t": "Flujos migratorios en el mundo",
   "c": "Migración",
   "e": [
    "La <b>migración</b> es el movimiento de personas de un lugar a otro para vivir. Quien sale de su país <b>emigra</b> (es emigrante) y quien llega a otro país <b>inmigra</b> (es inmigrante). También hay migración <b>interna</b>, dentro del mismo país, como del campo a la ciudad.",
    "Las personas migran por muchas razones: buscar trabajo o mejores ingresos, estudiar, reunirse con su familia, o huir de la violencia, la guerra o un desastre. Quien huye para proteger su vida puede pedir <b>refugio</b>.",
    "México es a la vez país de <b>origen</b> (muchos mexicanos viven en Estados Unidos), de <b>tránsito</b> (personas de Centroamérica y otras regiones lo cruzan), de <b>destino</b> y de <b>retorno</b>. El dinero que los migrantes envían a sus familias se llama <b>remesas</b>. Todas las personas migrantes tienen <b>derechos humanos</b>, sin importar su situación."
   ],
   "x": [
    "Un tío que se fue a trabajar a Estados Unidos es emigrante para México e inmigrante para Estados Unidos.",
    "Una familia que se muda de un pueblo de Oaxaca a Monterrey hace migración interna."
   ],
   "k": "Emigrar es salir, inmigrar es llegar. México es país de origen, tránsito, destino y retorno. Las personas migrantes tienen derechos.",
   "q": [
    {
     "s": "Una persona que sale de su país para vivir en otro es:",
     "o": [
      "Emigrante",
      "Turista",
      "Inmigrante para su propio país"
     ],
     "y": "Emigrar es salir.",
     "p": "Sale."
    },
    {
     "s": "¿Qué son las remesas?",
     "o": [
      "El dinero que los migrantes envían a sus familias",
      "Un tipo de comida",
      "Documentos para viajar"
     ],
     "y": "Son importantes para muchas familias.",
     "p": "Dinero que se envía."
    },
    {
     "s": "Mudarse de un pueblo de Oaxaca a Monterrey es migración:",
     "o": [
      "Interna",
      "Internacional",
      "De retorno"
     ],
     "y": "Ocurre dentro del mismo país.",
     "p": "No sale de México."
    },
    {
     "s": "¿Cuál es una causa de migración?",
     "o": [
      "Buscar trabajo o huir de la violencia",
      "Ir de vacaciones una semana",
      "Ir a la tienda"
     ],
     "y": "Son razones para cambiar de lugar de vida.",
     "p": "Para vivir en otro lugar."
    }
   ],
   "v": [
    {
     "s": "México es país de origen, tránsito, destino y retorno de migrantes.",
     "v": true,
     "y": "Vive todas las formas de migración."
    },
    {
     "s": "Las personas migrantes pierden sus derechos humanos.",
     "v": false,
     "y": "Todas las personas tienen derechos humanos."
    }
   ],
   "ex": [
    {
     "s": "Una persona que llega a vivir a un país distinto al suyo es:",
     "o": [
      "Inmigrante",
      "Emigrante para ese país",
      "Turista"
     ],
     "y": "Inmigrar es llegar."
    },
    {
     "s": "¿Qué puede pedir una persona que huye de la guerra para proteger su vida?",
     "o": [
      "Refugio",
      "Una beca deportiva",
      "Remesas"
     ],
     "y": "Es un derecho reconocido internacionalmente."
    },
    {
     "s": "Personas de Centroamérica que cruzan México para llegar a otro país hacen de México un país de:",
     "o": [
      "Tránsito",
      "Retorno",
      "Origen"
     ],
     "y": "Lo atraviesan."
    }
   ]
  }
 ]
});
T3_MUNDOS.push({
 "name": "Historia",
 "sub": "Luchas sociales y México posrevolucionario",
 "lead": "Las luchas que ganaron derechos y el México que se reconstruyó después de la Revolución.",
 "temas": [
  {
   "t": "Movimientos sociales del siglo XIX",
   "c": "Movimientos del siglo XIX",
   "e": [
    "Un <b>movimiento social</b> es un grupo grande de personas que se organiza para exigir un cambio en la sociedad, como el reconocimiento de un derecho.",
    "En el siglo XIX hubo movimientos muy importantes. El <b>abolicionismo</b> luchó contra la <b>esclavitud</b>: en México, Miguel Hidalgo la abolió en 1810 y Vicente Guerrero la prohibió oficialmente en 1829. El <b>movimiento obrero</b> exigió mejores condiciones: jornadas de 8 horas y salarios justos; el <b>1 de mayo</b> recuerda a los trabajadores de Chicago que lucharon por ello en 1886.",
    "El <b>sufragismo</b> fue la lucha de las mujeres por el derecho a votar. Nueva Zelanda fue el primer país en reconocerlo, en 1893."
   ],
   "x": [
    "Antes de estas luchas, muchos obreros trabajaban 14 horas diarias, incluso niñas y niños.",
    "El Día del Trabajo (1 de mayo) es un día festivo en México y en muchos países."
   ],
   "k": "Siglo XIX: abolicionismo (contra la esclavitud), movimiento obrero (8 horas) y sufragismo (voto de la mujer).",
   "q": [
    {
     "s": "¿Qué buscaba el abolicionismo?",
     "o": [
      "Terminar con la esclavitud",
      "Abolir las escuelas",
      "Aumentar los impuestos"
     ],
     "y": "En México se abolió desde la Independencia.",
     "p": "Abolir es eliminar."
    },
    {
     "s": "¿Qué exigía el movimiento obrero?",
     "o": [
      "Jornadas de 8 horas y salarios justos",
      "Trabajar más horas",
      "Cerrar las fábricas"
     ],
     "y": "Mejores condiciones de trabajo.",
     "p": "Piensa en los trabajadores."
    },
    {
     "s": "¿Qué buscaba el sufragismo?",
     "o": [
      "El derecho de las mujeres a votar",
      "El fin de los trenes",
      "Más guerras"
     ],
     "y": "Sufragio significa voto.",
     "p": "Sufragio = voto."
    },
    {
     "s": "¿Qué recuerda el 1 de mayo?",
     "o": [
      "La lucha de los trabajadores",
      "La Independencia",
      "La llegada de la primavera"
     ],
     "y": "Es el Día del Trabajo.",
     "p": "Día del Trabajo."
    }
   ],
   "v": [
    {
     "s": "Nueva Zelanda fue el primer país en reconocer el voto de las mujeres.",
     "v": true,
     "y": "En 1893."
    },
    {
     "s": "En el siglo XIX todos los obreros trabajaban 8 horas.",
     "v": false,
     "y": "Trabajaban jornadas mucho más largas."
    }
   ],
   "ex": [
    {
     "s": "¿Qué personaje prohibió oficialmente la esclavitud en México en 1829?",
     "o": [
      "Vicente Guerrero",
      "Porfirio Díaz",
      "Lázaro Cárdenas"
     ],
     "y": "Hidalgo ya la había abolido en 1810."
    },
    {
     "s": "¿Qué es un movimiento social?",
     "o": [
      "Un grupo organizado que exige un cambio en la sociedad",
      "Un baile popular",
      "Un terremoto"
     ],
     "y": "Busca reconocer derechos."
    },
    {
     "s": "La jornada de 8 horas fue una demanda del:",
     "o": [
      "Movimiento obrero",
      "Sufragismo",
      "Abolicionismo"
     ],
     "y": "Por eso se recuerda el 1 de mayo."
    }
   ]
  },
  {
   "t": "México posrevolucionario (1917–1940)",
   "c": "México posrevolucionario",
   "e": [
    "Después de la Revolución, el país tenía que reconstruirse. En 1917 se promulgó la <b>Constitución</b> durante el gobierno de Venustiano Carranza. Con el presidente <b>Álvaro Obregón</b> se creó la <b>Secretaría de Educación Pública</b> (1921), dirigida por <b>José Vasconcelos</b>, que impulsó escuelas rurales, bibliotecas, campañas para enseñar a leer y los murales.",
    "Con <b>Plutarco Elías Calles</b> hubo un conflicto entre el gobierno y la Iglesia católica: la <b>Guerra Cristera</b> (1926–1929). En 1929 se fundó el Partido Nacional Revolucionario (PNR). A los años en que Calles siguió influyendo en el gobierno se les llama el <b>Maximato</b> (1928–1934).",
    "<b>Lázaro Cárdenas</b> (1934–1940) repartió millones de hectáreas a los campesinos (ejidos), fundó el <b>Instituto Politécnico Nacional</b> (1936) y el <b>18 de marzo de 1938</b> realizó la <b>expropiación petrolera</b>: el petróleo pasó a manos de la nación y se creó Pemex. También recibió a miles de refugiados de la guerra civil española."
   ],
   "x": [
    "Las misiones culturales llevaban maestros, médicos y artistas a los pueblos más alejados.",
    "Cada 18 de marzo se recuerda la expropiación petrolera."
   ],
   "k": "Constitución (1917), SEP con Vasconcelos (1921), Guerra Cristera, PNR (1929), Maximato y Cárdenas: reparto agrario y expropiación petrolera (1938).",
   "q": [
    {
     "s": "¿Quién dirigió la Secretaría de Educación Pública cuando se creó en 1921?",
     "o": [
      "José Vasconcelos",
      "Porfirio Díaz",
      "Miguel Hidalgo"
     ],
     "y": "Impulsó escuelas, bibliotecas y murales.",
     "p": "También fue escritor y filósofo."
    },
    {
     "s": "¿Qué ocurrió el 18 de marzo de 1938?",
     "o": [
      "La expropiación petrolera",
      "La Independencia de México",
      "La firma del T-MEC"
     ],
     "y": "El petróleo pasó a la nación.",
     "p": "Tiene que ver con el petróleo."
    },
    {
     "s": "¿Qué conflicto enfrentó al gobierno con la Iglesia católica?",
     "o": [
      "La Guerra Cristera",
      "La Guerra de los Pasteles",
      "La Revolución de Independencia"
     ],
     "y": "Ocurrió de 1926 a 1929.",
     "p": "Su nombre viene de «Cristo Rey»."
    },
    {
     "s": "¿Qué presidente repartió tierras y fundó el IPN?",
     "o": [
      "Lázaro Cárdenas",
      "Álvaro Obregón",
      "Venustiano Carranza"
     ],
     "y": "Gobernó de 1934 a 1940.",
     "p": "También hizo la expropiación petrolera."
    }
   ],
   "v": [
    {
     "s": "Pemex se creó después de la expropiación petrolera.",
     "v": true,
     "y": "En 1938."
    },
    {
     "s": "El Maximato fue un periodo en el que gobernó Porfirio Díaz.",
     "v": false,
     "y": "Fueron los años de influencia de Calles (1928–1934)."
    }
   ],
   "ex": [
    {
     "s": "¿En qué año se fundó el Partido Nacional Revolucionario (PNR)?",
     "o": [
      "1929",
      "1810",
      "1968"
     ],
     "y": "Lo impulsó Calles."
    },
    {
     "s": "¿Qué fueron las misiones culturales?",
     "o": [
      "Grupos de maestros y especialistas que iban a los pueblos alejados",
      "Viajes al espacio",
      "Fiestas religiosas"
     ],
     "y": "Llevaban educación y salud."
    },
    {
     "s": "¿A quiénes recibió México durante el gobierno de Cárdenas?",
     "o": [
      "A refugiados de la guerra civil española",
      "A astronautas",
      "A ningún extranjero"
     ],
     "y": "Muchos se volvieron maestros y científicos en México."
    }
   ]
  },
  {
   "t": "Movimientos sociales del siglo XX",
   "c": "Movimientos del siglo XX",
   "e": [
    "En el siglo XX, los movimientos sociales lograron grandes cambios. En México, las <b>huelgas de Cananea (1906) y Río Blanco (1907)</b> denunciaron las malas condiciones de los trabajadores y fueron antecedentes de la Revolución. En 1953 las mujeres mexicanas obtuvieron el voto en elecciones federales, y en <b>1968</b> el movimiento estudiantil exigió libertades democráticas.",
    "En el mundo, <b>Mahatma Gandhi</b> encabezó la lucha <b>no violenta</b> que llevó a la independencia de la India en 1947. En Estados Unidos, el <b>movimiento por los derechos civiles</b>, con Rosa Parks y Martin Luther King, luchó contra la discriminación racial. En Sudáfrica, <b>Nelson Mandela</b> encabezó la lucha contra el apartheid y en 1994 fue el primer presidente negro del país.",
    "También surgieron los movimientos <b>ecologista</b>, <b>feminista</b> y de los <b>pueblos indígenas</b>. Muchos derechos que hoy tienes se ganaron gracias a ellos."
   ],
   "x": [
    "En 1955, Rosa Parks se negó a ceder su asiento en un autobús segregado; su gesto inspiró a miles de personas.",
    "Gandhi demostró que se puede luchar por la justicia sin usar la violencia."
   ],
   "k": "Siglo XX: Cananea y Río Blanco, voto femenino (1953), 1968, Gandhi, derechos civiles, Mandela y movimientos ecologistas.",
   "q": [
    {
     "s": "¿Qué personaje encabezó la lucha no violenta por la independencia de la India?",
     "o": [
      "Mahatma Gandhi",
      "Nelson Mandela",
      "Isaac Newton"
     ],
     "y": "La India se independizó en 1947.",
     "p": "Luchó sin violencia."
    },
    {
     "s": "¿Qué huelgas mexicanas fueron antecedentes de la Revolución?",
     "o": [
      "Cananea y Río Blanco",
      "Tlatelolco y Chapultepec",
      "Puebla y Celaya"
     ],
     "y": "Ocurrieron en 1906 y 1907.",
     "p": "Una fue en Sonora y otra en Veracruz."
    },
    {
     "s": "¿Contra qué luchó Nelson Mandela?",
     "o": [
      "El apartheid, la segregación racial en Sudáfrica",
      "La esclavitud en México",
      "El cambio climático"
     ],
     "y": "Fue presidente en 1994.",
     "p": "Sudáfrica."
    },
    {
     "s": "¿Qué hizo Rosa Parks en 1955?",
     "o": [
      "Se negó a ceder su asiento en un autobús segregado",
      "Escribió un tratado comercial",
      "Fundó un partido político en México"
     ],
     "y": "Inspiró al movimiento por los derechos civiles.",
     "p": "Fue en un autobús."
    }
   ],
   "v": [
    {
     "s": "En 1953 las mujeres mexicanas obtuvieron el voto en elecciones federales.",
     "v": true,
     "y": "Votaron por primera vez en una elección federal en 1955."
    },
    {
     "s": "Los derechos que hoy tenemos siempre existieron.",
     "v": false,
     "y": "Muchos se ganaron con luchas sociales."
    }
   ],
   "ex": [
    {
     "s": "¿Qué movimiento luchó contra la discriminación racial en Estados Unidos?",
     "o": [
      "El movimiento por los derechos civiles",
      "El sufragismo del siglo XIX",
      "El abolicionismo mexicano"
     ],
     "y": "Con líderes como Martin Luther King."
    },
    {
     "s": "¿En qué año ocurrió el movimiento estudiantil en México?",
     "o": [
      "1968",
      "1910",
      "1985"
     ],
     "y": "Exigía libertades democráticas."
    },
    {
     "s": "¿Qué país se independizó en 1947 gracias a una lucha no violenta?",
     "o": [
      "India",
      "Sudáfrica",
      "Canadá"
     ],
     "y": "La encabezó Gandhi."
    }
   ]
  }
 ]
});
T3_MUNDOS.push({
 "name": "Civismo",
 "sub": "Formación cívica y ética",
 "lead": "Tus datos, tu seguridad en internet y los acuerdos entre países.",
 "temas": [
  {
   "t": "Derecho a la protección de datos personales",
   "c": "Datos personales",
   "e": [
    "Tus <b>datos personales</b> son la información que te identifica: tu nombre, tu dirección, tu teléfono, tu escuela, tu fecha de nacimiento, tus fotos o tu ubicación. Algunos son <b>sensibles</b>, como tu salud o tus creencias.",
    "En México tienes <b>derecho a la protección de tus datos personales</b>: las instituciones y empresas que los piden deben cuidarlos y usarlos solo para lo que dijeron. Puedes ejercer los derechos <b>ARCO</b>: <b>A</b>cceso (saber qué datos tienen), <b>R</b>ectificación (corregirlos), <b>C</b>ancelación (pedir que los borren) y <b>O</b>posición (negarte a que los usen para algo).",
    "En internet, cuídalos: no compartas tu dirección, escuela o contraseñas; configura tus perfiles como privados; no publiques fotos con tu uniforme o tu ubicación; y si algo te incomoda, avisa a un adulto de confianza."
   ],
   "x": [
    "Un juego en línea que te pide tu dirección para «darte un premio» puede ser un engaño.",
    "Si una tienda tiene mal escrito tu nombre en su registro, puedes pedir que lo corrijan: es el derecho de rectificación."
   ],
   "k": "Tus datos te identifican y tienes derecho a protegerlos (ARCO). En internet, compártelos lo menos posible.",
   "q": [
    {
     "s": "¿Cuál es un dato personal?",
     "o": [
      "Tu dirección",
      "El color del cielo",
      "La capital de Francia"
     ],
     "y": "Te identifica a ti.",
     "p": "Algo que dice quién eres o dónde vives."
    },
    {
     "s": "¿Qué significa la R de los derechos ARCO?",
     "o": [
      "Rectificación: corregir tus datos",
      "Robar datos",
      "Repetir datos"
     ],
     "y": "Puedes pedir que corrijan datos equivocados.",
     "p": "Corregir."
    },
    {
     "s": "¿Qué conviene hacer con tus perfiles de redes sociales?",
     "o": [
      "Configurarlos como privados",
      "Publicar tu dirección",
      "Compartir tu contraseña"
     ],
     "y": "Así solo te ven personas que conoces.",
     "p": "Que no cualquiera los vea."
    },
    {
     "s": "Un juego te pide tu dirección para darte un premio. ¿Qué haces?",
     "o": [
      "No la doy y aviso a un adulto",
      "La doy de inmediato",
      "Doy también mi contraseña"
     ],
     "y": "Puede ser un engaño.",
     "p": "Desconfía."
    }
   ],
   "v": [
    {
     "s": "Tu contraseña no se debe compartir con desconocidos.",
     "v": true,
     "y": "Ni con amigos en internet."
    },
    {
     "s": "Las empresas pueden usar tus datos para lo que quieran.",
     "v": false,
     "y": "Solo para lo que te informaron."
    }
   ],
   "ex": [
    {
     "s": "¿Qué derecho ARCO usas si pides que borren tus datos?",
     "o": [
      "Cancelación",
      "Acceso",
      "Rectificación"
     ],
     "y": "Es la C de ARCO."
    },
    {
     "s": "¿Cuál es un ejemplo de dato personal sensible?",
     "o": [
      "Información sobre tu salud",
      "Tu color favorito",
      "El nombre de tu mascota"
     ],
     "y": "Requiere todavía más cuidado."
    },
    {
     "s": "¿Qué NO conviene publicar en redes sociales?",
     "o": [
      "Fotos con tu uniforme y tu ubicación",
      "Un dibujo que hiciste",
      "Una receta"
     ],
     "y": "Permiten saber dónde estás."
    }
   ]
  },
  {
   "t": "Seguridad y convivencia en internet",
   "c": "Seguridad en internet",
   "e": [
    "Internet sirve para aprender, jugar y comunicarse, pero hay que usarlo con cuidado, igual que cuando sales a la calle.",
    "Reglas de oro: usa <b>contraseñas seguras</b> (largas, con letras, números y símbolos) y no las compartas; no aceptes solicitudes de <b>desconocidos</b>; nunca vayas a ver en persona a alguien que conociste en línea; y antes de dar clic en un enlace o descargar algo, pregúntate si es confiable.",
    "El <b>ciberacoso</b> es molestar, burlarse o amenazar a alguien por internet; no lo hagas, no lo compartas y, si lo vives o lo ves, <b>guarda pruebas</b> (capturas de pantalla), <b>bloquea</b> y <b>avisa a un adulto de confianza</b>. También existen las <b>noticias falsas</b>: antes de compartir algo, revisa quién lo publicó y si otras fuentes serias dicen lo mismo."
   ],
   "x": [
    "Una contraseña como «Sp4rk!Luna27» es mucho más segura que «123456».",
    "Un mensaje que dice «¡Ganaste un celular, da clic aquí!» probablemente es un engaño."
   ],
   "k": "Contraseñas seguras, nada de desconocidos, piensa antes de dar clic, no al ciberacoso y verifica antes de compartir.",
   "q": [
    {
     "s": "¿Cuál es una contraseña segura?",
     "o": [
      "Sp4rk!Luna27",
      "123456",
      "tu nombre"
     ],
     "y": "Combina letras, números y símbolos.",
     "p": "Larga y difícil de adivinar."
    },
    {
     "s": "¿Qué es el ciberacoso?",
     "o": [
      "Molestar o amenazar a alguien por internet",
      "Un videojuego",
      "Una red wifi"
     ],
     "y": "Hace mucho daño.",
     "p": "Acoso en línea."
    },
    {
     "s": "Si alguien te acosa en línea, ¿qué haces?",
     "o": [
      "Guardo pruebas, bloqueo y aviso a un adulto",
      "Le contesto con insultos",
      "No le digo a nadie"
     ],
     "y": "Pedir ayuda es lo correcto.",
     "p": "Tres pasos: guardar, bloquear, avisar."
    },
    {
     "s": "Antes de compartir una noticia, conviene:",
     "o": [
      "Revisar quién la publicó y si otras fuentes lo confirman",
      "Compartirla rápido",
      "Cambiarle el título"
     ],
     "y": "Así evitas difundir noticias falsas.",
     "p": "Verifica."
    }
   ],
   "v": [
    {
     "s": "Está bien ir a ver en persona a alguien que conociste en un juego en línea.",
     "v": false,
     "y": "Nunca: puede no ser quien dice."
    },
    {
     "s": "Un mensaje que dice que ganaste un premio sin participar puede ser un engaño.",
     "v": true,
     "y": "Es una trampa común."
    }
   ],
   "ex": [
    {
     "s": "¿Qué debes hacer con tus contraseñas?",
     "o": [
      "No compartirlas",
      "Publicarlas",
      "Usar la misma para todo y decírsela a tus amigos"
     ],
     "y": "Son la llave de tus cuentas."
    },
    {
     "s": "Ves que se burlan de un compañero en un chat. ¿Qué haces?",
     "o": [
      "No lo comparto y aviso a un adulto",
      "Comparto la burla",
      "Me río"
     ],
     "y": "Así no participas en el ciberacoso."
    },
    {
     "s": "¿Qué es una noticia falsa?",
     "o": [
      "Información engañosa presentada como verdadera",
      "Un periódico impreso",
      "Una noticia vieja"
     ],
     "y": "Hay que verificar antes de compartir."
    }
   ]
  },
  {
   "t": "Tratados internacionales",
   "c": "Tratados internacionales",
   "e": [
    "Un <b>tratado internacional</b> es un acuerdo por escrito entre dos o más países (o entre países y organismos internacionales) en el que se comprometen a cumplir ciertas reglas.",
    "Hay tratados sobre muchos temas: <b>derechos humanos</b> (como la <b>Convención sobre los Derechos del Niño</b>, aprobada por la ONU en 1989), <b>medio ambiente</b> (como el <b>Acuerdo de París</b> de 2015 sobre cambio climático), <b>comercio</b> (como el <b>T-MEC</b> entre México, Estados Unidos y Canadá) y <b>paz</b>.",
    "En México, el presidente o la presidenta firma los tratados y el <b>Senado</b> los aprueba. Los tratados de derechos humanos tienen el mismo rango que la Constitución."
   ],
   "x": [
    "Gracias a la Convención sobre los Derechos del Niño, los países se comprometen a proteger tu derecho a la educación, la salud y el juego.",
    "El T-MEC establece reglas para comprar y vender productos entre México, Estados Unidos y Canadá."
   ],
   "k": "Un tratado es un acuerdo escrito entre países. En México los aprueba el Senado.",
   "q": [
    {
     "s": "¿Qué es un tratado internacional?",
     "o": [
      "Un acuerdo por escrito entre países",
      "Un juego de mesa",
      "Una ley de un solo municipio"
     ],
     "y": "Los países se comprometen a cumplirlo.",
     "p": "Un acuerdo entre países."
    },
    {
     "s": "¿Qué tratado protege los derechos de niñas y niños?",
     "o": [
      "La Convención sobre los Derechos del Niño",
      "El T-MEC",
      "El Acuerdo de París"
     ],
     "y": "Lo aprobó la ONU en 1989.",
     "p": "Su nombre lo dice."
    },
    {
     "s": "¿De qué trata el Acuerdo de París?",
     "o": [
      "Del cambio climático",
      "Del futbol",
      "De la comida francesa"
     ],
     "y": "Se firmó en 2015.",
     "p": "Medio ambiente."
    },
    {
     "s": "En México, ¿quién aprueba los tratados internacionales?",
     "o": [
      "El Senado",
      "La escuela",
      "Los periódicos"
     ],
     "y": "Después de que los firma el Ejecutivo.",
     "p": "Es una cámara del Congreso."
    }
   ],
   "v": [
    {
     "s": "El T-MEC es un tratado comercial entre México, Estados Unidos y Canadá.",
     "v": true,
     "y": "Regula el comercio entre los tres."
    },
    {
     "s": "Los tratados internacionales no obligan a nada.",
     "v": false,
     "y": "Los países se comprometen a cumplirlos."
    }
   ],
   "ex": [
    {
     "s": "Un tratado sobre la compra y venta de productos entre países es de tipo:",
     "o": [
      "Comercial",
      "Ambiental",
      "Deportivo"
     ],
     "y": "Como el T-MEC."
    },
    {
     "s": "¿Qué organismo aprobó la Convención sobre los Derechos del Niño en 1989?",
     "o": [
      "La ONU",
      "La FIFA",
      "El Banco de México"
     ],
     "y": "La Organización de las Naciones Unidas."
    },
    {
     "s": "¿Qué tema trata el Acuerdo de París?",
     "o": [
      "El cambio climático",
      "Los derechos laborales",
      "Los Juegos Olímpicos"
     ],
     "y": "Busca reducir el calentamiento global."
    }
   ]
  }
 ]
});
