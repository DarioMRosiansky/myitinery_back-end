import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO)
    .then(()=> console.log('Database Conected'))
    .catch((error)=> console.log(error))