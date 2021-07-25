import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import createUser from './endpoints/createUser/createUser'
import getUserById from './endpoints/getUserById/getUserById'
import updateUser from './endpoints/editUser/updateUser'
import createTask from './endpoints/createTask/createTask'
import getTaskById from './endpoints/selectTask/getTaskById'

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

app.post("/users", createUser);
app.get("/users/:id", getUserById);
app.put("users/edit/:id", updateUser);
app.post("/task", createTask);
app.get("/task/:id", getTaskById);