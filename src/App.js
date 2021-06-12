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
import { CarList } from "./components/CarList/CarList";
import EditOffer from "./components/Offer/EditOffer";

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
            {/* <Route exact path="/" render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<ProductList userdata={UserStore}/>) )}/>
            <Route exact path="/offers/{id}" component={GetOffersById} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<GetOffersById userdata={UserStore}/>) )}/>
			<Route exact path="/offers/all" component={GetAllOffers} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<GetAllOffers userdata={UserStore}/>) )}/>*/
			<Route exact path="/avaliableOffers" component={AllNoRentedOffers} />  
        
      //<Route exact path="/details" component={Details} />
              /*  
            <Route exact path="/offers" component={AddOffer} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<AddOffer userdata={UserStore}/>) )}/>
			<Route exact path="/offers/rent/{userid}/{id}" component={RentOffer} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<RentOffer userdata={UserStore}/>) )}/>
			<Route exact path="/offers/return/{userid}/{id}" component={ReturnCar} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<ReturnCar userdata={UserStore}/>) )}/>
			<Route exact path="/offers/{id}" component={DeleteOffer} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<DeleteOffer userdata={UserStore}/>) )}/>
			<Route exact path="/offers/{id}" component={EditOffer} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<EditOffer userdata={UserStore}/>) )}/> */}
			<Route exact path="/cars" component={CarList} />
			{/* <Route exact path="/cars/{id}" component={GetCar} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<GetCar userdata={UserStore}/>) )}/>   */}
            <Route exact path="/add-car" component={AddCar} />
            <Route exact path="/cars/edit" component={EditCar} />
            <Route exact path="/offers/edit" component={EditOffer} />
            <Route exact path="/admin/offers" component={GetAllOffers} />
			{/* <Route exact path="/cars/{id}" component={EditCar} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<EditCar userdata={UserStore}/>) )}/> 
			<Route exact path="/cars/rent/{id}" component={RentCar} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<RentCar userdata={UserStore}/>) )}/>  
			<Route exact path="/cars/{id}" component={DeleteCar} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<DeleteCar userdata={UserStore}/>) )}/>  
			<Route exact path="/cars/available" component={GetAllNoRentedCars} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<GetAllNoRentedCars userdata={UserStore}/>) )}/>  
			<Route exact path="/comments" component={GetAllComments} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<GetAllComments userdata={UserStore}/>) )}/> 
			<Route exact path="/comments/{id}" component={GetCommentById} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<GetCommentById userdata={UserStore}/>) )}/>
			<Route exact path="/comments/car/{carID}" component={GetCommentsByCarId} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<GetCommentsByCarId userdata={UserStore}/>) )}/>
			<Route exact path="/comments" component={AddComment} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<AddComment userdata={UserStore}/>) )}/>  
			<Route exact path="/comments/{carID}" component={DeleteComment} render={() => (
              !UserStore.isLoggedIn() ? (<Redirect to="/login"/>) : (<DeleteComment userdata={UserStore}/>) )}/> */}
            <Route path="/login" component={LoginForm} />
            <Route exact path="/offers" component={AddOffer} />
            <Route exact path="/myoffers" component={MyOffers} />
            <Route path="/register" component={RegisterForm} ></Route>
            <Route exact path="/details" component={Details} />
            <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment> 
    )
  }
}
export default observer(App);
