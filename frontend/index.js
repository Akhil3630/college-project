import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://root:akhilakhi815007@emergency.06wcw.mongodb.net/emergency?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, () =>{
    console.log("Db connected successfully")
})

const userSchema = new mongoose.Schema({
    fname: String,
    sname: String,
    phone: String,
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
    district: String,
    blood: String,
    service: String
})


const serviceSchema =  new mongoose.Schema({
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
    service: String
})

const User = new mongoose.model("User", userSchema)

const Service = new mongoose.model("Service", serviceSchema)



app.post("/Signup",  (req, res)=> {
    
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
                    res.send( { message: "Successfully Registered" })
                }
            })
        }
    })
    
}) 



app.post("/Registration",  (req, res)=> {
    
    const { fname, sname, phone, email, district, blood, service } = req.body
    console.log(req.body)
    Service.findOne({phone: phone},(err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new Service({
                fname,
                sname,
                phone,
                email,
                district,
                blood,
                service
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered" })
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
    console.log("on port 5000")
})