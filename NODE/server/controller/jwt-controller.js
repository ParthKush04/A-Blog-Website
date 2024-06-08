import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authenticateToken = (request,response,next)=>{
    const authHeader = request.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if ( token == null)
  {
    return response.status(401).JSON({msg: 'token is missing'});
  }
  jwt.verify(token,process.env.access-secret-key,(error,user)=>{
   if (error){
    return response.status(403).JSON({msg:'invalid token'})
   }
   request.user = user ;
   next();
  })

}