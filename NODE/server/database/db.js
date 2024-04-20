import  mongoose  from "mongoose"



const Connection = async (username, password) => {
    const URL=`mongodb://${username}:${password}@ac-xppn6tg-shard-00-00.yen0ime.mongodb.net:27017,ac-xppn6tg-shard-00-01.yen0ime.mongodb.net:27017,ac-xppn6tg-shard-00-02.yen0ime.mongodb.net:27017/?ssl=true&replicaSet=atlas-ofpckh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try{
    await mongoose.connect(URL, {useNewUrlParser: true});
    console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database', error);
    }
};
export default Connection;