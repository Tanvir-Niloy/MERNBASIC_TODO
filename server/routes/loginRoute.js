const jwt = require('jsonwebtoken');

const loginUser = (req,res)=>{

     if (req.body.password === process.env.password) {
        
        const token = jwt.sign({
             userId:1
        },process.env.SECRET)
       res.json({token})
     } else {
        res.status(401).send("worng password!")
     }
}


module.exports = {loginUser}