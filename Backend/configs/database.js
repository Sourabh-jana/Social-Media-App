const mongoose = require("mongoose")

mongoose.set('strictQuery', false)

exports.connectDatabase = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then((con) => console.log(`Database connected: ${con.connection.host}`))
        .catch((err) => console.error(err))
}