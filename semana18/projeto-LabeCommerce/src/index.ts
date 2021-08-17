import { AddressInfo } from "net";
import express, {Express} from 'express'
import cors from 'cors'
import createUser from "./endpoints/User/createUser";
import createProduct from "./endpoints/Product/createProduct";
import getAllUsers from "./endpoints/User/getAllUsers";
import getAllProducts from "./endpoints/Product/getAllProducts";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post('/users', createUser)
app.post('/products', createProduct)
app.get('/users', getAllUsers)
app.get('/products', getAllProducts)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});