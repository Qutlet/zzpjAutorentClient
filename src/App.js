import React, {Component} from "react"
import {Switch, Route, Redirect} from 'react-router-dom'
import { observer } from 'mobx-react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'

// import GetOffersById from './components/GetOffersById'
import GetAllOffers from "./components/Admin/GetAllOffers";
// import GetAllNoRentedOffers from './comments/GetAllNoRentedOffers'
import AddOffer from './components/AddOffer/AddOffer'
// import RentCar from './components/RentCar'
// import ReturnCar from './components/ReturnCar'
// import DeleteOffer from './components/DeleteOffer'
// import EditOffer from './components/EditOffer'
// import GetAllCars from './components/GetAllCars'
// import GetCar from './components/GetCar'
import AddCar from './components/AddCar/AddCar'
import EditCar from './components/CarList/EditCar'
// import RentCar from './components/RentCar'
// import DeleteCar from './components/DeleteCar'
import AllNoRentedOffers from './components/Offer/AllNoRentedOffers'
import Details from './components/Details'
// import GetAllComments from './components/GetAllComments'
// import GetCommentById from './components/GetCommentById'
// import GetCommentsByCarId './components/GetCommentsByCarId'
// import AddComment './components/AddComment'
// import DeleteComment './components/DeleteComment'
import LoginForm from './components/LoginForm'
import Default from './components/Default'
import Modal from './components/Modal'
import UserStore from './components/Stores/UserStore'
import RegisterForm from "./components/RegisterForm";
import MyOffers from "./components/Offer/MyOffers";
import MyRent from "./components/Offer/MyRent";
import { CarList } from "./components/CarList/CarList";
import EditOffer from "./components/Offer/EditOffer";
import EndOffer from "./components/Offer/EndOffer";
import Chat from './components/Chat';

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Route 
          render={(props) => (
            <Navbar {...props} userdata={UserStore}></Navbar>
          )}
        />
        
        <Switch>

        <Route exact path="/offers/end" render={(props) => (
        !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<EndOffer {...props} userdata={UserStore}/>) )}/>
          <Route exact path="/myrents" render={(props) => (
        !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<MyRent {...props} userdata={UserStore}/>) )}/> 
             <Route exact path="/" render={(props) => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<AllNoRentedOffers {...props} userdata={UserStore}/>) )}/>
          
			<Route exact path="/avaliableOffers" render={(props) => (
        !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<AllNoRentedOffers {...props} userdata={UserStore}/>) )}/> 
       
			<Route exact path="/cars" render={(props) => (
        !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<CarList {...props} userdata={UserStore}/>) )}/> 
		
            <Route exact path="/add-car" render={(props) => (
        !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<AddCar {...props} userdata={UserStore}/>) )}/> 
            <Route exact path="/cars/edit" render={(props) => (
        !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<EditCar {...props} userdata={UserStore}/>) )}/> 
            <Route exact path="/offers/edit" render={(props) => (
        !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<EditOffer {...props} userdata={UserStore}/>) )}/> 
            <Route exact path="/admin/offers" render={(props) => (
        !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<GetAllOffers {...props} userdata={UserStore}/>) )}/> 
            <Route path="/login" component={LoginForm} />
            <Route exact path="/offers" render={(props) => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<AddOffer {...props} userdata={UserStore}/>) )}/>
            <Route exact path="/myoffers" render={(props) => (
        !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<MyOffers {...props} userdata={UserStore}/>) )}/> 

            <Route path="/register" component={RegisterForm} ></Route>
              
            <Route exact path="/details"  render={(props) => (
        !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<Details {...props} userdata={UserStore}/>) )}/> 

            <Route path="/chat" render={(props) => (
        !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<Chat {...props} userdata={UserStore}/>) )}/> 
            <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment> 
    )
  }
}
export default observer(App);
