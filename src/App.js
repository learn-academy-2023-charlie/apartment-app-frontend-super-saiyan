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
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import AptMock from './AptMock';
import UserMock from './UserMock';



function App() {
  const [apartment, setApartment] = useState(AptMock);
  const [user, setUser] = useState(UserMock);
  return (
    <div>
    <Header />
<Routes>
  <Route path="/" element={<Home />} /> 
  <Route path="/ApartmentIndex" element={<ApartmentIndex />} />
  <Route path="/ApartmentShow" element={<ApartmentShow />} />
  <Route path="/SignIn" element={<SignIn />} />
  <Route path="/SignUp" element={<SignUp />} />
  <Route path="/ApartmentProtectedIndex" element={<ApartmentProtectedIndex />} />
  <Route path="/ApartmentNew" element={<ApartmentNew />} />
  <Route path="/ApartmentEdit" element={<ApartmentEdit />} />
  <Route path="*" element={<NotFound />} />
</Routes>
    <Footer />
    </div>
  );
}

export default App;
