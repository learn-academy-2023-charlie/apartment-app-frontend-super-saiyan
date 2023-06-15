import React from 'react';
import { Card, CardTitle, CardSubtitle, CardBody, CardText, CardLink } from 'reactstrap';
import { useParams, Link } from 'react-router-dom';
import '../styling/ApartmentShow.css';

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams();
  let currentApt = apartments?.find((apt) => apt.id === +id);
  
  return (
    <>
      <Card key={currentApt.id} className="apartment-card">
        <CardBody>
          <CardTitle tag="h5">{currentApt.street}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {currentApt.city}, {currentApt.state}
          </CardSubtitle>
        </CardBody>
        <img alt="Card cap" src={currentApt.image} width="100%" />
        <CardBody>
          <CardText>{currentApt.square_footage} sq. ft.</CardText>
          <CardText>Price: {currentApt.price}</CardText>
          <CardText>Bedrooms: {currentApt.bedrooms}</CardText>
          <CardText>Bathrooms: {currentApt.bathrooms}</CardText>
          <CardText>Pets: {currentApt.pets}</CardText>
          <CardLink tag={Link} to="/ApartmentIndex">Back to Home</CardLink>
          <CardLink tag={Link} to={`/ApartmentShow/${currentApt.id}`}>Add to Favorites</CardLink>        </CardBody>
      </Card>
    </>
  );
};




export default ApartmentShow;
