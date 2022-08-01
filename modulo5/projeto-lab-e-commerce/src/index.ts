import  app from './app'
import { createUser } from './endpoints/createUser'
import { getAllProducts } from './endpoints/getAllProducts'
import { getAllUsers } from './endpoints/getAllUsers'
import { productRegister } from './endpoints/productRegister'

//Endpoints Users
app.post('/users', createUser)
app.get('/users', getAllUsers)

//Endpoints Products
app.post('/products', productRegister)
app.get('/products', getAllProducts)