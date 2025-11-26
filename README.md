# TP Final Integrador

## Cómo levantar el proyecto

1. **Instalar dependencias**

npm install

2. **Configurar MongoDB**
- (La base de datos `prueba` se crea automáticamente al ejecutar el proyecto)

3. **Configurar email**
- En `src/config/nodemailer.js` poner tu email y contraseña de aplicación de Gmail
- Para obtener contraseña: Google → Seguridad → Contraseñas de aplicaciones

4. **Iniciar servidor**
```bash
npm run start
```

5. **Ejecutar tests**
```bash
npm run test
```

**Servidor:** `http://localhost:8080`

## Documentación de la API

 # Usuarios endpoints
 - `POST /api/usuarios/login` - Iniciar sesión y devuelve un token JWT.
         - auth: enviar credenciales en los *headers* HTTP (`user` y `password`).
         - example headers: { user: 'usuario', password: 'secreto' }
         - response: { status: 200, token }
         - notas: el token se genera con JWT y expira en ~2 minutos.
 - `POST /api/usuarios` - Registrar un nuevo usuario. Id autogenerado.
         - req.body: { nombre, email, password, rol }
         - response: { status: 200, Usuario }
 - `GET /api/usuarios` - Obtener todos los usuarios.
         - response: { status: 200, [Usuarios] }
 - `GET /api/usuarios/:id` - Obtener un usuario por ID.
         - req.params: { id }
         - response: { status: 200, Usuario }
 - `PUT /api/usuarios/:id` - Actualizar un usuario por ID.
         - req.params: { id }
         - req.body: { nombre, email, password, rol }
         - response: { status: 200, Usuario }
 - `DELETE /api/usuarios/:id` - Eliminar un usuario por ID.
         - req.params: { id }
         - response: { status: 200, message: 'Usuario eliminado', Usuario }
 - `PATCH /api/usuarios/:id` - Actualiza parcialmente un usuario por ID.
         - req.params: { id }
         - req.body: { nombre, email, password, rol } (cualquiera de estos campos)
         - response: { status: 200, Usuario }

 # Eventos endpoints
 - `GET /api/Eventos` - Obtener todos los eventos.
         - response: { status: 200, [Eventos] }
 - `GET /api/Eventos/:id` - Obtener un evento por ID.
         - req.params: { id }
         - response: { status: 200, Evento }
 - `POST /api/Eventos` - Crear un nuevo evento.
         - req.body: { nombre, fecha, lugar, horario, descripcion, precio, modalidad }
         - response: { status: 200, EventoCreado }
 - `PUT /api/Eventos/:id` - Reemplazar/actualizar un evento por ID.
         - req.params: { id }
         - req.body: { nombre, fecha, lugar, horario, descripcion, precio, modalidad }
         - response: { status: 200, EventoActualizado }
 - `PATCH /api/Eventos/:id` - Actualizar parcialmente un evento por ID.
         - req.params: { id }
         - req.body: { nombre, fecha, lugar, horario, descripcion, precio, modalidad }
         - response: { status: 200, EventoActualizado }
 - `DELETE /api/Eventos/:id` - Eliminar un evento por ID.
         - req.params: { id }
         - response: { status: 200, message: 'Evento eliminado', Evento }

 # Compras endpoints
 - `GET /api/compras` - Obtener todas las compras.
         - response: { status: 200, [Compras] }
 - `GET /api/compras/:id` - Obtener una compra por ID.
         - req.params: { id }
         - response: { status: 200, Compra }
 - `POST /api/compras` - Crear una nueva compra. Aplica validación de campos.
         - middleware: `validateNewCompra` (en `src/middleware/validation.middleware.js`).
         - req.body: { evento, cantidad, comprador, email, precio }
             - `evento` (id o referencia), `cantidad` (number, >0), `comprador` (string),
               `email` (string, debe contener `@`), `precio` (number)
         - response: { status: 200, CompraCreada }
 - `PUT /api/compras/:id` - Reemplazar/actualizar una compra por ID.
         - req.params: { id }
         - req.body: { evento, cantidad, comprador, email, precio, fecha }
         - response: { status: 200, CompraActualizada }
 - `PATCH /api/compras/:id` - Actualizar parcialmente una compra por ID.
         - req.params: { id }
         - req.body: { evento, cantidad, comprador, email, precio, fecha }
         - response: { status: 200, CompraActualizada }
 - `DELETE /api/compras/:id` - Eliminar una compra por ID.
         - req.params: { id }
         - response: { status: 200, message: 'Compra eliminada', Compra }

 **Notas generales y middleware**
 - **Prefijo de la API**: todas las rutas están montadas bajo el prefijo `/api` (p. ej. `GET /api/Eventos`).
 - **Autenticación / JWT**: la generación de tokens se realiza en `src/middleware/jwt.middleware.js`.
        - El endpoint `/api/usuarios/login` espera credenciales en el body (`user` y `password`) y devuelve un token JWT con expiración corta (2 minutos).
 - **Validación de datos**: la ruta `POST /api/compras` utiliza el middleware `validateNewCompra` en `src/middleware/validation.middleware.js` 
        para asegurar que los campos obligatorios existen y tengan formato correcto.


