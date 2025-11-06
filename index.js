import express from 'express'
import eventosRouter from './src/router/usuarios.route.js'


const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", eventosRouter)

app.listen(PORT,() => {console.log(`Servidor escuchando en el puerto ${PORT}`)})