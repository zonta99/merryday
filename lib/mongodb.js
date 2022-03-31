import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://systemAdministrator:Pinarello1972@partyusers.ubbsb.mongodb.net?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("PartyUsers").collection("sample_airbnb");
    // perform actions on the collection object
    console.log(collection)
    client.close();
});
