import { useEffect, useState,useContext } from 'react';

import {Box, Container, Typography, styled} from '@mui/material';

import { Delete, Edit } from '@mui/icons-material';

import {useParams, Link, useNavigate} from 'react-router-dom';

import { API } from '../../service/api';

import { DataContext } from '../../context/DataProvider';
import Comments from '../comments/Comments'

const Containers = styled(Box)(({ theme})=>({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]:{
        margin:0
    }
}));
const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;
const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
    word-break:break-word;
`;

const Author = styled(Box)`
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
`

const Description= styled(Typography)`
 word-break:break-word;
`

const DetailView =() => {

    const[post, setPost] =useState({});

    const {Id} = useParams();
    const { account } = useContext(DataContext);

    const navigate=useNavigate();

    const url=post.picture ? post.picture:'';

    useEffect(()=>{
        const fetchData =async()=>{
            let response= await API.getPostById(Id);
            if(response.isSuccess){
                setPost(response.data); 
            }
        }
        fetchData();
    }, [])

    const deleteBlog=async ()=>{
        let response=await API.deletePost(post._id);
        if(response.isSuccess){
            navigate('/');
        }
    }

    return(
        <Containers>
            <Image src={url} alt='blog' />

            <Box style={{ float:'right'}}>
                (
                    account.username === post.username && 
                    <>
                <Link to={`/update/${post._id}`}>EditIcon color:"primary" </Link>
                <DeleteIcon onClick={()=> deleteBlog()} color='error'/>
                </>  
                )
            </Box>
            <Typography>{post.title} </Typography>
            <Author>
                <Typography> Author: <Box component ="span" style={{fontweight: 600}}>{post.username}</Box></Typography>
                <Typography style={{marginLeft:'auto'}}>{new Date(post.createdDate). toDateString()}</Typography>
            </Author>

            <Description>{post.description }</Description>
            <Comments post = {post}/>
        </Containers>
    )
}
export default DetailView;