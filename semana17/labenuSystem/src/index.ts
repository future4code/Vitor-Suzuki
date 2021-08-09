import express from 'express'
import createClass from './endpoints/createClass'
import createStudent from './endpoints/createStudent'
import createTeacher from './endpoints/createTeacher'
import getStudentById from './endpoints/getStudentById'
import studentIntoClass from './endpoints/studentIntoClass'
import teacherIntoClass from './endpoints/teacherIntoClass'


const app = express()
app.use(express.json())

app.post('/students', createStudent)
app.post('/teacher', createTeacher)
app.post('/class', createClass)

app.put('/student', studentIntoClass)
app.put('/teacher', teacherIntoClass)

app.get('/student/:id', getStudentById)

