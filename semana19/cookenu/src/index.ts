import { signUp } from './endpoints/users/signUp';
import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { login } from './endpoints/users/login';
import { getOwnProfile } from './endpoints/users/getOwnProfile';
import { createRecipe } from './endpoints/recipes/createRecipe';
import getRecipeById from './endpoints/recipes/getRecipeById';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post('/signup', signUp)
app.post('/login', login)
app.get('/user/profile', getOwnProfile)
app.get('/user/:id', getProfileById)
app.post('/recipe', createRecipe)
app.get('/recipe/:id', getRecipeById)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:
${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});




function getProfileById(arg0: string, getProfileById: any) {
    throw new Error('Function not implemented.');
}

