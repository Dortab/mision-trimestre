# CLAUDE.md · Misión Trimestre (app educativa con SPARK)

Instrucciones para Claude Code al trabajar en este repositorio.

## Qué es
Página web educativa para primaria en México (6.º grado, 1.er trimestre por ahora).
El robot SPARK guía misiones de 10 minutos al día. Lema: «aprender en movimiento».
Fuente de verdad del proyecto: `biblia-de-marca.md` (proyecto SPARK en claude.ai).
Lo que no está en la biblia no está decidido: preguntar antes de asumirlo.

## Tecnología
- HTML, CSS y JavaScript puros, sin servidor ni dependencias. Publicado en GitHub Pages.
- Páginas: `index.html`, `mision.html`, `guia.html`, `bitacora.html`, `reporte.html`.
- Lógica en `js/`, estilos en `css/estilos.css`, imágenes en `imagenes/`.
- El avance se guarda en `localStorage` de cada dispositivo.
  No cambiar el formato de los datos guardados sin una migración: borraría el avance del niño.

## Flujo de trabajo
GitHub es la fuente de verdad. `main` = lo publicado. Nunca trabajar directo en `main`.

1. Nueva rama por cambio: `git switch -c nombre-del-cambio`
2. Editar y probar en local: `python -m http.server 8000` → http://localhost:8000
3. Probar en celular (mismo wifi): `python -m http.server 8000 --bind 0.0.0.0` → http://IP-de-la-compu:8000
4. Commits pequeños y descriptivos en español: `git add -A` y `git commit -m "Qué cambió"`
5. Cuando esté probado: `git switch main`, `git merge nombre-del-cambio`
6. Etiquetar la versión: `git tag uat-yyyymmdd-vN` (ej. `uat-20261116-v1`)
7. Publicar: `git push` y `git push --tags`
8. Respaldo opcional en Google Drive: `git archive -o uat-yyyymmdd-vN.zip uat-yyyymmdd-vN`

Regresar a una versión anterior para revisarla: `git switch --detach uat-yyyymmdd-vN`
Deshacer un commit ya publicado: `git revert <commit>` (no usar `reset --hard` en `main`).

Reglas:
- Claude no hace `git push` a `main` sin que Diego lo pida después de probar en local.
- La carpeta del repo no va dentro de una carpeta sincronizada por Drive. A Drive solo van los .zip.
- El repo es público: no subir datos de niños, nombres reales ni respaldos de avance.

## Reglas pedagógicas (no romper al programar)
- **Primer intento:** para «por reforzar» y «demostrado» solo cuentan los aciertos al primer intento, y solo en misiones y examen. El acierto después de la pista suma media puntuación pero no cuenta para el 4 de 5. `S.sesiones[tema].ok` = aciertos a la primera; `q` = cada pregunta del último intento con 1/0; `v:2` = registro nuevo.
- **Por reforzar:** entra si saca menos de 4 de 5 a la primera en la misión del tema o si falla una pregunta de ese tema en un examen. Sale al repetir la misión con 4 o 5 a la primera. Una sola regla para examen, mapa y reporte.
- **Demostrado:** 4 o 5 de 5 a la primera en la misión y sin errores después en un examen.
- **Por confirmar:** misiones de antes del 16 nov 2026 (sin `v`) con 4 o 5. Se ven verdes en el mapa, salen aparte en el reporte y se confirman al repetir la misión.
- **Orden de la misión del día:** a medias → un tema por reforzar (el más antiguo, nunca el mismo día en que se falló) → nuevos equilibrando materias. Mientras haya nuevos, máximo 1 de cada 2 misiones es de refuerzo. Desde el mapa el niño puede elegir cualquier tema.
- **Bancos de preguntas:** misión = retos `k:'banco'` (opción múltiple de 3, no se muestran en la Guía) + preguntas de la gráfica y el mosaico que no dependen de la figura. Cada misión toma 5 distintas a las del último intento. Examen = `EXAMENES` (propio). Guía = sus retos, sin preguntas de misión ni de examen. Verdadero o falso solo en la Guía (excepción temporal: `EXCEPCION_VF` en `sesion.js`).
- **XP:** los retos `k:'banco'` guardan el XP de las misiones; no quitarlos de `WORLDS` o el niño pierde XP.
- **Solo autoevaluación:** marcó «ya puedo explicarlo» sin demostrarlo; se reporta aparte.
- **Errores en misión:** primer error = pista y otro intento por la mitad de los puntos; segundo error = respuesta y explicación. En el examen no hay pista.
- **Examen:** 20 preguntas en bloques de 5; un bloque calificado no se puede cambiar. Es alerta, no diagnóstico.
- **Constancia sobre calificación:** 1 chispa por misión terminada; cada 5 chispas, cofre de constancia. Cada 500 XP, cofre de premio.
- **Tiempo activo:** solo cuenta con la página en uso; se pausa a los 3 minutos sin actividad.
- **Reporte** para papás y maestros: sin XP, cofres ni chispas; solo nombre y grado en el encabezado.

## Tono de los textos en pantalla
- Niños: de tú, frases cortas, motivador, nunca regaña. Usar «misión», «por reforzar», «tu papá o tu mamá».
- Nunca usar «reprobaste» ni mensajes de regaño. Nada de etiquetas sobre TDAH.
- Temas de prevención (cuerpo, abuso, desconocidos, drogas): siempre «adulto de confianza».
- Papás: claro y concreto. Maestros: formal y honesto sobre lo que mide la app.
- Español de México.

Si un cambio pedido contradice estas reglas, avisar a Diego antes de programarlo.
