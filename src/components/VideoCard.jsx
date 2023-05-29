import { Link } from 'react-router-dom';

import {Typography, Card, CardContent, CardMedia } from '@mui/material';

import { CheckCircle} from '@mui/icons-material';

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../utils/constants';



const VideoCard = ({video: { id:{videoId},snippet }}) => {
  return (
    <Card sx={{width:{xs:'100%',sm:'358px',md:'320px'},borderRadius:'2',boxShadow:' 2px 2px 5px black', transition:'transform 0.5s','&:hover':{transform:'scale(1.05)'}}}>
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>

      <CardMedia image={snippet?.thumbnails?.high?.url}
      alt={snippet?.title}
      sx={{width:{xs:'100%',sm:'358px',md:'320px'}, height:180 }}
      />
      </Link>
      <CardContent sx={{ backgroundColor: '#48BED8',height:'60px',boxShadow:' 1px 1px 2px black'}}>
        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight="bold" color="black">
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight="bold" color="#FCE0A2">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize:14,color:'#0bfeb5',ml:'5px'}}/>
          </Typography>
        </Link>

      </CardContent>
    </Card>
  )
}

export default VideoCard