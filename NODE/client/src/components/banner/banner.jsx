import { Box,styled,Typography } from '@mui/material'
const Image = styled(Box)`
background : url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)
width : 100%;
height : 50vh;
display : flex ;
align-items:center;
justify-content:center;
flex-direction : column ;
`
const Banner = ()=>{
    return (
      <Image>
        <Typography>BLOG</Typography>
        <Typography>Code For Interview</Typography>
      </Image>
    )

}
export default Banner ;