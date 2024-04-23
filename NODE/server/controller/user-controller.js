import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import User from '../model/user.js';
import dotenv from 'dotenv'
import token from '../model/token.js'

dotenv.config();
export const signupUser = async (request, reponse) => {
    try{
        //const salt=await bcrypt.genSalt();
        const hashedPassword= await bcrypt.hash(request.body.password,10);
    const user= {username: request.body.username, name: request.body.name, password:hashed} 

    const newUser = new User(user);
    await newUser.save();

    return  response.status(200).json({msg: 'signup successful' })
    } catch(error){
    return response.status(500).json({msg: 'Error while signup the user'})
    }
}
export const loginUser = async (request,response)=>{
    let user = await User.findOne({username : request.body.username});
    if ( !user){
        return response.status(400).json({msg : 'Username does not match'}); // username not exists
    }
    try {
        await bcrypt.compare(request.body.password,user.password);
        if ( match)
        {
            const accesToken = jwt.sign(user.toJSON(),process.env.access-secret-key,{expiresIn : '15m'}) ;// not permanent so using refresh token,expiry time std -> 15 minutes
            const refreshToken = jwt.sign(user.toJSON(),process.env.refresh-secret-key);
              // access token has a secret key and body which work together, body in json format
            const newToken = new Token({token : refreshToken}) // so that user can access refresh token if access token not present
            await newToken.save();

            return response.status(200).json({accessToken: accessToken , refreshToken: refreshToken,name : user,name ,username : user.username})
        }
        else{
            response.status(400).json({msg:'password does not match'});  // if password  do not match
        }
    }
    catch (error) {
        return response.status(500).json({msg : 'Error while login in user'})  //network issue or connectivity issue 
        }
    }