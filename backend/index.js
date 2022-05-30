// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"
// import dotenv from "dotenv"



// const app = express()

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
// app.use(cors())

// dotenv.config()

// const port = process.env.PORT || 8000

// mongoose.connect(process.env.EMERGENCY_URI,  {
//     useNewUrlParser: true,
//     useUnifiedTopology: true 
// }, () =>{
//     console.log("Db connected successfully")
// })

// const userSchema = new mongoose.Schema({
//     name: String,
//     email:{
//          type: String,
//     match: [
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//       'Please add a valid email address.',
//     ],
//     required: [true, 'Please enter Email Address'],
//     unique: true,
//     lowercase: true,
//   },
//     password: String
// })

// const User = new mongoose.model("Users", userSchema)


// app.post("/Signup", (req, res)=> {
    
//     const { name, email, password} = req.body
//     User.findOne({email: email}, (err, user) => {
//         if(user){
//             res.send({message: "User already registerd"})
//         } else {
//             const user = new User({
//                 name,
//                 email,
//                 password
//             })
//             user.save(err => {
//                 if(err) {
//                     res.send(err)
//                 } else {
//                     res.send( { message: "Successfully Registered, Please login now." })
//                 }
//             })
//         }
//     })
    
// }) 


// app.post("/Login", (req, res)=> {
//     const { email, password} = req.body
//     User.findOne({ email: email}, (err, user) => {
//         if(user){
//             if(password === user.password ) {
//                 res.send({message: "Login Successfull", user: user})
//             } else {
//                 res.send({ message: "Password didn't match"})
//             }
//         } else {
//             res.send({message: "User not registered"})
//         }
//     })
// }) 




// app.listen(port, () =>{
//     console.log("on port"+port )
// })





import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



mongoose.connect("mongodb+srv://root:akhilakhi815007@emergency.06wcw.mongodb.net/emergency?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, () =>{
    console.log("Db connected successfully")
})

const userSchema = new mongoose.Schema({
    name: String,
    email:{
         type: String,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please add a valid email address.',
    ],
    required: [true, 'Please enter Email Address'],
    unique: true,
    lowercase: true,
  },
    password: String
})

const serviceSchema = new mongoose.Schema({
    name: String,
    district: String,
    mobile: String,
    email:{
         type: String,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please add a valid email address.',
    ],
    required: [true, 'Please enter Email Address'],
    unique: true,
    lowercase: true,
  },
  blood: String,
  service: String,
    password: String
})


const Service = new mongoose.model("Service",  serviceSchema)

const User = new mongoose.model("Users", userSchema)


app.post("/Signup", (req, res)=> {
    
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 


app.post("/Registration", (req, res)=> {
    
    const { name,district,mobile , email,blood, service, password} = req.body
    Service.findOne({ service: service }&&{email: email}, (err, user) => {
        if(user){
            res.send({message: "Service already added"})
        } else {
            const user = new Service({
                name,
                district,
                mobile,
                email,
                blood,
                service,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Thank you for providing your service" })
                }
            })
        }
    })
    
}) 



app.post("/Login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 



app.listen(5000, () =>{
    console.log("on port"+5000 )
})













// const userSchema = new mongoose.Schema({
//     name: String,
//     email:{
//          type: String,
//     match: [
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//       'Please add a valid email address.',
//     ],
//     required: [true, 'Please enter Email Address'],
//     unique: true,
//     lowercase: true,
//   },
//     password: String
// })

// const User = new mongoose.model("Users", userSchema)


// app.post("/Signup", (req, res)=> {
    
//     const { name, email, password} = req.body
//     User.findOne({email: email}, (err, user) => {
//         if(user){
//             res.send({message: "User already registerd"})
//         } else {
//             const user = new User({
//                 name,
//                 email,
//                 password
//             })
//             user.save(err => {
//                 if(err) {
//                     res.send(err)
//                 } else {
//                     res.send( { message: "Successfully Registered, Please login now." })
//                 }
//             })
//         }
//     })
    
// }) 


// app.post("/Login", (req, res)=> {
//     const { email, password} = req.body
//     User.findOne({ email: email}, (err, user) => {
//         if(user){
//             if(password === user.password ) {
//                 res.send({message: "Login Successfull", user: user})
//             } else {
//                 res.send({ message: "Password didn't match"})
//             }
//         } else {
//             res.send({message: "User not registered"})
//         }
//     })
// }) 



