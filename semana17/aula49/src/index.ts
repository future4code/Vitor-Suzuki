import { app } from "./app";
import { getAllUsers } from "./endpoints/exercício1";


app.get("/users", getAllUsers)