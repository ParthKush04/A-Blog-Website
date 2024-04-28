import { UploadFile } from "@mui/icons-material"


export const API_NOTIFICATION_MESSAGES = {
    loading:{
        title:'loading...',
        message: 'Data is being loaded, please wait'
    },
    success:{
        title:'success',
        message:'Data Successfully loaded'
    },
    responseFailure:{
        title:'Error',
        message:'An error occured while fetching response from the server. Please try again'
    },
    requestFailure:{
        title:'Error',
        message:'An error occured while parsing request data'
    },
    networkError:{
        title:'Error',
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
}
export const SERVICE_URLS={
    userSignup:{url:'/signup', method:'POST'},
    userLogin : {url: '/login' ,method : 'POST'},
    UploadFile: {url : '/file/upload',method:'POST'},
    createPost: {url : 'create',method: 'POST'},
    getAllPosts: {url : '/post', method:'GET', params: true},
    getPostById: {url: 'post', method: 'GET', query:true},
    updatePost: {url:'/update', method:'PUT', query:true},
    deletePost:{url:'delete', method:'DELETE',query:true},
    getRefreshToken: { url: '/token', method: 'POST' },
    newComment: { url: '/comment/new', method: 'POST' },
    getAllComments: { url: 'comments', method: 'GET', query: true },
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true },
    updatePost: { url: 'update', method: 'PUT', query: true }
}