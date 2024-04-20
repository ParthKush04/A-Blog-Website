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
}