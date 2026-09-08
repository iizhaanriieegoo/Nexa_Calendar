# NEXA Calendar — cuentas con Google

## 1. Firebase
1. Abre Firebase Console.
2. Selecciona tu proyecto NEXA Calendar.
3. Ve a Authentication → Sign-in method.
4. Activa **Google**.
5. En Authentication → Settings → Authorized domains añade tu dominio de GitHub Pages, por ejemplo `TUUSUARIO.github.io`.
6. Mantén Firestore activado para citas y calendarios compartidos.

## 2. Configuración web
En Project settings → Your apps → Web, copia la configuración de Firebase en `firebase-config.js`.

## 3. Cómo funciona
La pantalla inicial tiene dos opciones: **Iniciar sesión** y **Crear cuenta**. Ambas llevan a Google.
- Iniciar sesión: selecciona una cuenta de Google y entra.
- Crear cuenta: escribe nombre, empresa opcional y teléfono; después selecciona tu cuenta de Google.

La contraseña nunca se gestiona en NEXA: Google se encarga de la autenticación.

## 4. Publicar
Sube todos los archivos a la raíz de GitHub Pages y abre la web en HTTPS.

## 5. Importante
La sincronización de citas y calendarios compartidos depende de Firestore y de las reglas de seguridad. No pongas datos de usuarios en el código salvo la configuración pública de Firebase.
