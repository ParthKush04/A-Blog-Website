import bcrypt from 'bcrypt';

import User from '../model/user.js';

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