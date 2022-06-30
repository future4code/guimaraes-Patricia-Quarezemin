import app from './app'
import createUser from './endpoints/createUser'
import getAllUsers from './endpoints/getAllUsers'

app.post('/user', createUser)
app.get('/user', getAllUsers)
app.get('/user/:id', )


