import express from 'express'
import eventosRouter from './src/router/eventos.route.js'
import usuariosRouter from './src/router/usuarios.route.js'
import comprasRouter from './src/router/compras.route.js'
//import dotenv from 'dotenv'

// VA
//dotenv.config()

const app = express()
const PORT = 8080
//const PORT = process.env.PORT 


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", usuariosRouter)
app.use("/api", eventosRouter)
app.use("/api", comprasRouter)

app.listen(PORT,() => {console.log(`Servidor escuchando en el puerto ${PORT}`)})