import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import car1 from "../Assests/car1.jpg"
import car2 from "../Assests/car2.jpg"
import car3 from "../Assests/car3.jpg"

function MediaCard1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        // image="/static/images/cards/contemplative-reptile.jpg"
        image={car1}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Car
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Car
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

// 

function MediaCard2() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          // image="/static/images/cards/contemplative-reptile.jpg"
          image={car2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bus
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Bus
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
//   
}

function MediaCard3() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          // image="/static/images/cards/contemplative-reptile.jpg"
          image={car3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Van
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Van
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
export {MediaCard1,MediaCard2,MediaCard3};