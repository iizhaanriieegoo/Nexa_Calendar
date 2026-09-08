# NEXA Calendar — versión iPhone sin IA

## Qué incluye
- Calendario mensual funcionando.
- Crear, editar y eliminar citas mediante la interfaz manual.
- Tres agendas: Trabajo, Personal y Proyecto.
- Aviso de solapamiento de citas.
- Guardado local de las citas en el dispositivo.
- PWA para instalar en iPhone.
- Recordatorio configurable por cita: 5, 10, 15, 30, 60 minutos o 1 día antes.
- Ventana emergente dentro de la app cuando llega el recordatorio.
- Notificación del sistema cuando el permiso está concedido y el navegador/PWA está activo para ejecutar el aviso.

## GitHub Pages
Sube directamente a la raíz del repositorio:
- index.html
- manifest.json
- sw.js
- icon-180.png
- icon-512.png

Después activa GitHub Pages desde Settings → Pages → Deploy from a branch → main → /root.

## iPhone
1. Abre la dirección HTTPS de GitHub Pages en Safari.
2. Pulsa Compartir → Añadir a pantalla de inicio.
3. Abre NEXA Calendar desde el icono instalado.
4. Pulsa “🔔 Activar recordatorios” y permite las notificaciones.
5. Al crear una cita, selecciona cuánto antes quieres el recordatorio.

## Limitación importante de esta versión
Los recordatorios están implementados en el navegador/PWA. Para garantizar avisos con la aplicación completamente cerrada haría falta una capa de notificaciones programadas del sistema/backend. Esta versión no incluye todavía ese backend.


## Novedades de esta versión
- Puedes borrar una cita desde la ventana de edición con **🗑️ Borrar cita**.
- La página incluye **📲 Instalar app**. En iPhone muestra los pasos para añadir NEXA Calendar a la pantalla de inicio; en navegadores compatibles con instalación directa ofrece **Instalar ahora**.
