import Mongoose from "mongoose";

const user = encodeURIComponent("mercurio0");
const password = encodeURIComponent("jupiter04");

async function connectDatabase() {
    try {
        await Mongoose.connect(`mongodb://${user}:${password}@ac-ozcw4q4-shard-00-00.fnzzqaz.mongodb.net:27017,ac-ozcw4q4-shard-00-01.fnzzqaz.mongodb.net:27017,ac-ozcw4q4-shard-00-02.fnzzqaz.mongodb.net:27017/?ssl=true&replicaSet=atlas-4ge0l3-shard-0&authSource=admin&retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Conectado a la base de datos")
    } catch (err) {
        console.log("Hubo un error: ")
        console.log(err)
    }
}

export default connectDatabase;