import React from 'react';
import { Button, Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
 



const CustomCard = ({item, onDelete}) => {
  
  return (
    <Card >
        <CardActionArea>
            <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="h5">{item.details}</Typography>
            </CardContent>
        </CardActionArea>  
          <Button size="small" color="primary" onClick={() => onDelete(item.id)}>Delete</Button>
        
    </Card>
  );
}

export default CustomCard;