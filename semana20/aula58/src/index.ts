import { app } from "./app";
import { getAllUsersController } from "./controller/users/getAllUsersController";
import { loginController } from "./controller/users/loginController";
import { signUpController } from "./controller/users/signUpController";

// EXERCÍCIO 1:
app.post('/signup', signUpController)

// EXERCÍCIO 2:
app.post('/login', loginController)

// EXERCÍCIO 3:
app.get('all', getAllUsersController)

// EXERCÍCIO 4:


