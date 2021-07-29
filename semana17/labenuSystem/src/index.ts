import express from 'express'
import createClass from './endpoints/createClass'
import createStudent from './endpoints/createStudent'
import createTeacher from './endpoints/createTeacher'


const app = express()
app.use(express.json())

app.post('/students', createStudent)
app.post('/teacher', createTeacher)
app.post('/class', createClass)