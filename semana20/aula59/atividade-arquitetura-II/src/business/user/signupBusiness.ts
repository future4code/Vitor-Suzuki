import { hash } from "../../services/hashManager";
import { insertUser } from "../../data/user/insertUser";
import { UserInputDTO } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

export const signupBusiness = async (user: UserInputDTO):Promise<string> => {
   if (
      !user.name ||
      !user.nickname ||
      !user.email ||
      !user.password ||
      !user.role
   ) {
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
   }

   const cypherPassword = await hash(user.password);

   const newUser = {
      ...user,
      password: cypherPassword,
      id: generateId()
   }

   await insertUser(newUser)

   const token: string = generateToken({
      id: newUser.id,
      role: user.role
   })

   return token

}
