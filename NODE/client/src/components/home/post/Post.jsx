import { Box, Typography } from "@mui/material";

import { addElipsis} from '../../utils/common-utils';


const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Text= styled(Typography)`
    color:#878787;
    font-size:12px;
`;
const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600
`;
const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
`;


const Image= styled ('img')({
    width:'100%',
    borderRadius: '10px 10px 0 0',
    objectFit:'cover',
    height:150
 })

const Post =({post})=>{

    const url=post.picture ? post.picture:'';
    return(
        <Box>
            <Image src={url} alt="blog" />
            <Text>{post.categories}</Text>
            <Typography> {addElipsis(post.title, 20)}</Typography>
            <Text>{post.username}</Text>
            <Typography>{ addElipsis(post.description,100)}</Typography>

        </Box>
    )
}
export default Post;