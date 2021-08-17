export type taskData = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type Task = {
   id: string
}

export type task = taskData & { id: string }