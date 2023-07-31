 const express =  require('express');
 const cookieparser = require('cookie-parser');

 const app = express()

 // Import Schemas
 const Users = require('./models/userSchema')

 // connect to db
 require('./db/connection')

 app.use(express.json())
 app.use(express.urlencoded({ extended: false}))
 app.use(cookieparser())

 const port = process.env.PORT || 8000;

app.get('/', (req, res)=> {
    res.send('Hello World');
})

app.post('/api/register',async (req, res) => {
    try {
    const { username , email, password }=req.body;
    
    const isExist =  await Users.findOne({email});

    if(isExist){
        res.status(400).send('User already exist')
    } else{
        const user = new Users({
            username,
            email,
            password
        })
        const userCreated = user.save()
        console.log(userCreated, 'userCreated');
        res.status(200).send('Successfully Registered')
    }
} catch (error){
    res.status(500).send('Server Error')
    console.log(error,'error');
}
})

app.listen(port, ()=> {
    console.log('server is running');
})
