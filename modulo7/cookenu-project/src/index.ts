
import { UserRouter } from './routes/UserRouter'
import { app } from './app'

app.use('/user', UserRouter)