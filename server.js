const PORT = 5000;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = express.Router();
app.use("/api", routes);

// body-parser
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

//cors
routes.use(cors());

//MongoDb Client
const MongoClient = require("mongodb").MongoClient;
const uri =
    "mongodb+srv://ghaithtest:2440001993Jo@cluster-marketplace.8wrt1.mongodb.net/marketplace?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// connect to server
app.listen(PORT, () => {
    console.log(`Server up and running on http://localhost:${PORT}`);
});
// connect to DB
client.connect((err) => {
    if (err) {
        throw Error(err);
    }
    const collection = client.db("marketplace").collection("products");
    !err && console.log("Successfully connected to database marketplace");
    // perform actions on the collection object
    client.close();
});

//Routes

routes.get("/", (req, res) => {
    res.send("Hello World!");
});
routes.get("/products", function (req, res) {
    res.send("liste de produits");
});
