import { Request, Response } from "express";
import { getTaskByIdBusiness } from "../../business/task/getTaskByIdBusiness";
import {selectTaskById} from "../../data/task/selectTaskById";
import { Task } from "../../model/task";

export const getTaskById = async (
   req: Request,
   res: Response
) => {
   try {

      const id: Task = { id: req.params.id }

      const task = getTaskByIdBusiness(id)

      res.status(200).send(task)

   } catch (error) {
      res.status(400).send(error.message)
   }
}