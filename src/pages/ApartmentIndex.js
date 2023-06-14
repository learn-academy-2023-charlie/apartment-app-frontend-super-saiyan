import React from 'react';
import {Card, CardTitle, CardSubtitle, CardBody, CardText, CardLink} from 'reactstrap';
import { useParams } from 'react-router-dom';

import '../styling/ApartmentIndex.css';
import apartments from '../AptMock';



const ApartmentIndex = ({apartments}) => {
    const {id} = useParams();
    const apt = apartments.find(item => item.id.toString() === Number(id));

    if (!apt) {
        return <div>Apartment not found</div>;
      }

    return (
<Card style={{ width: '18rem' }}>
      <CardBody>
        <CardTitle tag="h5">{apt.street}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {apt.city}, {apt.state}
        </CardSubtitle>
      </CardBody>
      <img alt="Card cap" src={apt.image} width="100%" />
      <CardBody>
        <CardText>{apt.square_footage} sq. ft.</CardText>
        <CardText>Price: {apt.price}</CardText>
        <CardText>Bedrooms: {apt.bedrooms}</CardText>
        <CardText>Bathrooms: {apt.bathrooms}</CardText>
        <CardText>Pets: {apt.pets}</CardText>
        <CardLink href={`/ApartmentShow/${apt.id}`}>View Details</CardLink>
<CardLink href="#">Another Link</CardLink>
      </CardBody>
    </Card>
    )
}
    

export default ApartmentIndex;