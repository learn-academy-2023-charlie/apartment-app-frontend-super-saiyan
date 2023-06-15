import React, {useState} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ApartmentIndex from './pages/ApartmentIndex';
import ApartmentShow from './pages/ApartmentShow';
import ApartmentNew from './pages/ApartmentNew';
import ApartmentEdit from './pages/ApartmentEdit';
import ApartmentProtectedIndex from './pages/ApartmentProtectedIndex'
import NotFound from './pages/NotFound';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

import AptMock from './AptMock';
import UserMock from './UserMock';



function App() {
  const [apartments, setApartments] = useState(AptMock);
  const [user, setUser] = useState(UserMock);
  const [currentUser, setCurrentUser] = useState(UserMock[0]);

  const createApartment = (apartment) => {
    console.log(apartment)
  }

  return (
    <div>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/ApartmentIndex" element={<ApartmentIndex  apartments={apartments}/>} />
        <Route path="/ApartmentShow/:id" element={<ApartmentShow apartments={apartments}/>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        {currentUser && (
        <Route path="/API" 
              element={
              <ApartmentProtectedIndex 
              currentUser = {currentUser}
              apartments={apartments}
              />
              } 
            />
          )}
         <Route path="/ApartmentNew" element={<ApartmentNew createApartment={createApartment}/>} />
        <Route path="/Apartment/:id/Edit" element={<ApartmentEdit apartments={apartments} setApartments={setApartments}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
