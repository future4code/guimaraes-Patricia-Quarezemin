import app from './app'
import createTask from './endpoints/createTask'
import createUser from './endpoints/createUser'
import editUser from './endpoints/editUser'
import getAllUsers from './endpoints/getAllUsers'
import getTaskId from './endpoints/getTaskId'
import getUserId from './endpoints/getUserId'

app.post('/user', createUser)
app.get('/user', getAllUsers)
app.get('/user/:id', getUserId)
app.put('/user/edit/:id', editUser)

app.post('/task', createTask)
app.get('/task/:id', getTaskId)
