import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import DataProvider from './context/DataProvider'
import Login from './components/accounts/login';
import Home from './components/home/home';
import {BrowserRouter,Navigate,Route,Routes,Outlet} from 'react-router-dom';
import Header from './components/header/header';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/details/DetailView';
import Update from './components/create/Update';

const PrivateRoute = ()=>({isAuthenticated,...props})=>{
  return isAuthenticated ?
  <>
  <Header/>
  <Outlet/>
  </>
  : <Navigate replace to = '/login'/>
}
function App() {
  const[isAuthenticated , isUserAuthenticated] = useState(false);
  return (
    // in DataProvider passed as a children and not as props
      <DataProvider>
        <BrowserRouter>
        <div style={{marginTop: 64}}>
        <Routes>
          <Route path = '/login' element = {<Login isUserAuthenticated={isUserAuthenticated}/>}/>
          
          <Route path = '/' element = {<PrivateRoute isAuthenticated = {isAuthenticated}/>}>
          <Route path = '/' element = {<Home/>}/>
          </Route>

          <Route path = '/create' element = {<PrivateRoute isAuthenticated = {isAuthenticated}/>}>
          <Route path = '/create' element = {<CreatePost/>}/>
          </Route>

          <Route path = '/details/:id' element = {<PrivateRoute isAuthenticated = {isAuthenticated}/>}>
          <Route path = '/details/:id' element = {<DetailView/>}/>
          </Route>

          <Route path = '/update/:id' element = {<PrivateRoute isAuthenticated = {isAuthenticated}/>}>
          <Route path = '/update/:id' element = {<Update/>}/>
          </Route>


        </Routes>
        </div>
        </BrowserRouter>
      </DataProvider> 
  );
}

export default App;
