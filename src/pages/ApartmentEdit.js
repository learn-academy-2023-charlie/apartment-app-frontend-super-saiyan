import React, {useState} from 'react';
import '../styling/ApartmentEdit.css';
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useParams, useNavigate } from "react-router-dom"

const ApartmentEdit = ({ apartments, updateApartment }) => {
  const { id } = useParams()
  let currentApartment = apartments?.find((apartment) => apartment.id === +id)

  const [editApartment, setEditApartment] = useState({
    street: currentApartment ? currentApartment.street : '',
    unit: currentApartment ? currentApartment.unit : '',
    city: currentApartment ? currentApartment.city : '',
    state: currentApartment ? currentApartment.state : '',
    square_footage: currentApartment ? currentApartment.square_footage : '',
    price: currentApartment ? currentApartment.price : '',
    bedrooms: currentApartment ? currentApartment.bedrooms : '',
    bathrooms: currentApartment ? currentApartment.bathrooms : '',
    pets: currentApartment ? currentApartment.pets : '',
    image: currentApartment ? currentApartment.image : ''
  });
  
  const handleChange = (e) => {
    setEditApartment({ ...editApartment, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()
  const handleSubmit = () => {
    updateApartment(editApartment, currentApartment.id)
    navigate("/apartmentindex")
  }
  return(
    <>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" onChange={handleChange} value={editApartment.name} />
        </FormGroup>

        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="text" name="age" onChange={handleChange} value={editApartment.age} />
        </FormGroup> 

        <FormGroup>
          <Label for="hobbies">Hobbies</Label>
          <Input type="text" name="hobbies" onChange={handleChange} value={editApartment.hobbies} />
        </FormGroup> 

        <FormGroup>
          <Label for="image">Picture</Label>
          <Input type="text" name="image" onChange={handleChange} value={editApartment.image} />
        </FormGroup>

        <Button onClick={handleSubmit} name="submit">
         Submit Updated Apartment
        </Button>
          
        </Form>
    </>
)}


export default ApartmentEdit;