import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardsExample = () => (
  <Card>
    <CardHeader
      title="Vignesh Gowrabathuni"
      subtitle="project Engineer"
      avatar="http://www.eds.org.nz/assets/sm/upload/8b/wn/3h/ae/head%20and%20shoulders%20image%20male.png"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="http://www.tornasolbroadcast.com/wp-content/uploads/2016/10/healthcare-technology-8-04-2015.jpg" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default CardsExample;
