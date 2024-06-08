
import { ReceiptRounded } from "@mui/icons-material";
import { categories } from "../../client/src/constants/data";
import Post from "../model/post"


export const createPost = async(request,response)=>{
    try{
        const post = await new Post(request.body);
        post.save();

        return request.status(200).JSON('Post saved successfully');
    }
    catch {error}{
        return response.status(500).JSON(error);
    }
    } 
export const getAllPosts = async(request, response) => {
    let category=request.query.category;

    try{
        if(category){
            posts=await Post.find({categories: category})
        }else{
            posts=await Post.find({});
        }

        return response.status(200).JSON(posts);

    }catch(error){
        return response.status(500).JSON({msg:error.message})
    }
}
export const getPost= async(request, response)=>{
    try{
        const post= await Post.findById(request.params.id);

        return response.status(200).JSON(post);
    } catch(error){
        return response.status(500).JSON({msg: error.message})
    }
}

export const updatePost =async(request, response) =>{
    try{
        const post=await Post.findById(request.params.id);
        if(!post){
            return response.status.status(404).json({msg: 'post not found'})
        }
        await Post.findByIdAndUpdate(request.params.id, {$set: request.body})

        return response.status(200).JSON({msg: 'post updated successfully'})
    }catch(error){
        return response.status(500).JSON({error: error.mesage})

    }
}

export const deletePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        
        if(!post){
            return response.status(404).JSON({msg:'post not found'});
        }
        await post.delete();

        response.status(200).JSON({msg:'post deleted successfully'});
    } catch (error) {
        response.status(500).JSON({error:error.message})
    }
}