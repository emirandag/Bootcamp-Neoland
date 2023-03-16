import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ImgMediaCard({ data }) {

  const navigate = useNavigate()
  const handleClick = (id) => {
    console.log(id);
    navigate(`/news/sports/${id}`)
  }

  
  return (

                <Card>
                <CardMedia
                  component="img"
                  alt={data.title}
                  height="140"
                  image={data.image_url}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap >
                    {data.summary[0].info}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button> */}
                  <Button onClick={() => {handleClick(data.id)}} size="small">Leer Más</Button>
                </CardActions>
              </Card>
 
        
    
  )
}