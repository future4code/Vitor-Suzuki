import { app } from "./app";
import { getAllUsers, getAllUsersPath } from "./endpoints/exercício1";


app.get("/users", getAllUsers)
app.get("/user/:type", getAllUsersPath)