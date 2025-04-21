import express from 'express'
import router from '../route.js'

const app = express()

const Port = 4000


app.use(express.json())
app.use('/',router)

app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}/`);
    
})