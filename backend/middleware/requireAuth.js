const jwt= require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {

    //verify user is authenticated
    const  { authorization } = req.headers

    if (!authorization){
        return res.status(401).json({error: "Authorization token required"})
    }

    /*The string which returns contains mainly 2 parts
    Ex:- Bearer Header.Payload.Signature(Token)
    We can ignore the first part and consider only the token by splitting*/
    const token = authorization.split(' ')[1]

    try{
        const {_id}= jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({_id}).select('_id') //return only the id rather than full details of the user
        next()

    }catch(error){
        console.log(error)
        res.status(401).json({error: "Request is not authorized"})
    }
}

module.exports = requireAuth