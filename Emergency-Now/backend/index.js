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
    required: [true, 'Please enter Email Address'],
    unique: true,
    lowercase: true,
  },
    password: String
})

const aswin = new mongoose.Schema({

})

const serviceSchema = new mongoose.Schema({
    sname: String,
    fname: String,
    phone: String,
    email:{
         type: String,   
    required: [true, 'Please enter Email Address'],
    unique: true,
    lowercase: true,
  },
    district: String,
    
  blood: String,
  service: String,
    
})


const Service = new mongoose.model("Service", serviceSchema)
const ServiceTrash = new mongoose.model("ServiceTrash",serviceSchema)


const User = new mongoose.model("Users", userSchema)
const UserTrash = new mongoose.model("UserTrash", userSchema)


//new user sign up
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
    
    const { sname, fname, phone , email, district,blood, service} = req.body
    Service.findOne({ service: service }&&{email: email}, (err, user) => {
        if(user){
            res.send({message: "Service already added"})
        } else {
            const user = new Service({
                sname,
                fname,
                phone,
                email,
                district,                
                blood,
                service,
                
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


//Readin the count of services and users//
app.get("/ReadCount",async (req, res) => {

        const totalCount = {
            service : "",
            users : "",
            userTrash:"",
            serviceTrashes:"",
        }   
            await  Service.count().then((count) => {
             const service = count;       
                totalCount.service = service
                User.count().then((count) => {
                    const user = count;         
                    totalCount.users = user;
                      
                    UserTrash.count().then((count) => {
                        const userTrash = count;         
                        totalCount.userTrash = userTrash;
                            
                        ServiceTrash.count().then((count) => {
                            const serviceTrashe = count;         
                            totalCount.serviceTrashes = serviceTrashe;
                             
                            res.send(totalCount);
        
                        })  
                    })  
                    
                })  
            })  
})


//Updating Service details
app.put('/updateService',(req, res) => {
    const { sname, fname, phone , email, district,blood, service} = req.body.input
    const id =req.body.id
    console.log(fname)

    Service.findByIdAndUpdate(id ,{sname :sname, fname:fname,phone:phone, email:email,district:district,blood:blood, service:service},(err, docs) => {
        if (err){
            console.log(err)
        }
        else{

             res.send({message:"Successfully Registered, Please login now."})
        }
       
    })
})


//Read operations
//Reading users details

app.get('/readUser',(req, res) => {
    User.find( {}, (err, result) =>{
        if(err) {res.send( err)}
        res.send(result)
    })

})

//Reading from user trash
app.get('/readUserTrash',(req, res) => {
    UserTrash.find( {}, (err, result) =>{
        if(err) {res.send( err)}
        res.send(result)
    })

})

app.get('/readServiceTrash',(req, res) => {
    ServiceTrash.find( {}, (err, result) =>{
        if(err) {res.send( err)}
        res.send(result)
    })

})


//Reading service details

app.get('/readService',(req, res) => {
    Service.find( {}, (err, result) =>{
        if(err) {res.send( err)}
        res.send(result)
    })

})






//Displaying details during emergency
app.get('/emergency', (req, res) => {
    Service.find({}).then(
        items => res.json(items)
    ).catch(err => res.send( err))
})

//Restoring details from trash
//Service trash
app.post('/restoreService',async (req, res) => {
     
    const{email} = req.body
  ServiceTrash.findOne({email: email}, (err, user) => {
     const{sname, fname,phone, district, blood, service} = user
     console.log(user)
 
          Service.create({
              sname:sname,
              fname:fname, 
              phone:phone,
              email:email, 
              district:district,
              blood:blood, 
              service:service})
         ServiceTrash.deleteOne({email:email}, (err, result) =>{
            if(err) {res.send(err)}
            res.send(result)
        } )
    })
        
         
  } )

//Restoring User Details
app.post('/restoreuser',async (req, res) => {
     
    const{email} = req.body
  UserTrash.findOne({email: email}, (err, user) => {
     const{name,password} = user
 
         User.create({name: name,email:email, password: password})
         UserTrash.deleteOne({email:email}, (err, result) =>{
             if(err) {res.send(err)}
            res.send(result)
         } )
    })
        
         
  } )  


//Delete operations
//delete user from database
app.post('/delete',async (req, res) => {
     
   const{email} = req.body
 User.findOne({email: email}, (err, user) => {
    const{name,password} = user

        UserTrash.create({name: name,email:email, password: password})
        User.deleteOne({email:email}, (err, result) =>{
            if(err) {res.send(err)}
           res.send(result)
        } )
   })
       
        
 } )

//delete service from database


  app.post('/deleteService',async (req, res) => {
     
    const{email} = req.body
  Service.findOne({email: email}, (err, user) => {
     const{sname, fname,phone, district, blood, service} = user
     console.log(user)
 
          ServiceTrash.create({
              sname:sname,
              fname:fname, 
              phone:phone,
              email:email, 
              district:district,
              blood:blood, 
              service:service})
         Service.deleteOne({email:email}, (err, result) =>{
            if(err) {res.send(err)}
            res.send(result)
        } )
    })
        
         
  } )


app.listen(5000, () =>{
    console.log("on port"+5000 )
})

