import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import MongoDb_connect from "./src/config/db.js"
import AdminRoute from "./src/Routes/Admin.routes.js"
import AuthRoutes from "./src/Routes/Auth.Routes.js"
// import ImageRoutes from "./Routes/Image.Routes.js"
import ImageRoute from "./src/Routes/Image.Routes.js"

const app = express()
const PORT=8080
dotenv.config()
app.use(express.json())
app.use(cors())
MongoDb_connect()

app.use('/api',AdminRoute)
app.use('/auth',AuthRoutes)
app.use('/Image',ImageRoute)




app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

