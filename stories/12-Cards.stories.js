import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

export default {
  title: `Material | Cards`,
};

export const Example = () => (
  <div style={{width: `288px`, margin: `20px`}}>
    <Card>
      <CardActionArea onClick={()  => {alert('Card Action Area Clicked!')}}>
        <CardMedia
          style={{height: `150px`}}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()  => {alert('Card Share Button Clicked!')}}>
          Share
        </Button>
        <Button size="small" color="primary" onClick={()  => {alert('Card Learn More Button Clicked!')}}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  </div>
);
