require('dotenv').config()
const express =  require("express")
const app = express()
const PORT = process.env.PORT || 5000
const mongoose = require("mongoose")
mongoose.set('strictQuery', true)
const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2
const productRouter = require('./routes/productRoutes')


cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.cloud_api_key,
    api_secret: process.env.cloud_api_secret,
});


app.use(express.json())
app.use(fileUpload({useTempFiles: true}))
app.use('/api/v1/products', productRouter)





app.use((req,res) =>{
res.status(404).send('Route Not Found')
})




const start = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(PORT,() =>{
            console.log(`server running on port ${PORT}...`);
        });
        } catch (error) {console.log(error);}
    }

start()