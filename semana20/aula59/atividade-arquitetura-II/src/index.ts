import { app } from "./controller/app"
import { taskRouter } from "./routes/task/taskRouter"
import { userRouter } from "./routes/user/userRouter"

app.use("/user", userRouter)
app.use("/task", taskRouter)


