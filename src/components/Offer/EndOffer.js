import React, { Component } from 'react'
import {ProductConsumer} from '../../context'
import {Link} from 'react-router-dom'
import {ButtonContainer, ButtonChatContainer, ButtonComment} from '../Button'
import axios from 'axios'
import { values } from 'mobx'
import styled from 'styled-components'



export default class  extends Component {
   constructor(props){
       super(props)
       this.state = {
        offer: [],
        car: [],
        count: 0
       }
   }

componentDidMount = () => {
	
    console.log(this.props)
    const  id  = this.props.location.state.id
    const countValue = this.state.count

  
    const link2 = 'http://localhost:8080/offers/' + id;

    axios.get(link2,{
        headers : {
            'Authorization':'Bearer '+this.props.userdata.accessToken
        }
    })
    .then(  (response) => {
        console.log(response.data)
        this.setState({
            offer: response.data
        })
        const link = 'http://localhost:8080/cars/' + this.state.offer.carID;
            console.log(link)
            axios.get(link,{
                headers : {
                    'Authorization':'Bearer '+this.props.userdata.accessToken
                }
            })
            .then(  (response) => {
                console.log(response.data.commentList)
                this.setState({
                    car: response.data,
                    comments: response.data.commentList,
                    count : 0
                })
            })

    })
       
}

handleSubmit = (event) =>{
    //console.log(this.state.value2);
    event.preventDefault();
    axios.post('http://localhost:8080/comments', {
        carID: this.state.offer.carID,
        clientID: null,
        id: "1",
        message: event.target.message.value,
        time: new Date(),
    },{
        headers : {
            'Authorization':'Bearer '+this.props.userdata.accessToken
        }
    })
    .then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error);
    });
}

endOffer = () => {
	console.log(this.props.userdata.accessToken)
	axios.put('http://localhost:8080/offers/return/0/' + this.props.location.state.id ,{}, {
        headers : {
            'Authorization':'Bearer '+this.props.userdata.accessToken
        }
    })
	.then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error);
    });
}

render() {
    return (
                    <div className="container py-5">
                        
                            <div className="row">
                                <div className="col-10 mx-auto text-center text slanted text-blue my-5">
                                    <h1>{this.state.offer.title}</h1>
                                </div>
                            </div>
                       
                            <div className="row">
                                {/* <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div> */}
                        
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>{this.state.car.carBrand} {this.state.car.carModel}</h1>
                                
                                    <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                        <span className="text-uppercase">Nazwa: {this.state.car.carName}</span>
                                    </h4>
                                    <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                        <span className="text-uppercase">Paliwo: {this.state.car.fuel}</span>
                                    </h4>
                                    <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                        <span className="text-uppercase">Kolor: {this.state.car.color}</span>
                                    </h4>
                                    <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                        <span className="text-uppercase">Silnik: {this.state.car.engine}</span>
                                    </h4>
									<h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                        <span className="text-uppercase">Moc: {this.state.car.enginePower}</span>
                                    </h4>
                                    <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                        <span className="text-uppercase">Skrzyna biegow: {this.state.car.gearBox}</span>
                                    </h4>
                                    <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                        <span className="text-uppercase">Kraj pochodzenia: {this.state.offer.country}</span>
                                    </h4>
                                    <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                        <span className="text-uppercase">Numer telefonu: {this.state.offer.phone}</span>
                                    </h4>
                                    <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                        <span className="text-uppercase">Email: {this.state.offer.email}</span>
                                    </h4>
                                    <p className="text-muted lead">{this.state.offer.description}</p>
                                    <div >
                                        <form onSubmit={this.handleSubmit}>
                                            <TextLabel for='message'>Dodaj komentarz:</TextLabel>
                                            <InputWindow type="text" id="inmessage" name="message" placeholder="Opisz swoje doświadczenia"/>
                                            <ButtonComment type="submit" onClick={() => {window.location.href="/details"}}>
                                            Dodaj
                                            </ButtonComment>
                                        </form>
                                    </div>
                                    <div>
                                            <ButtonContainer onClick={()=> this.endOffer()}>
                                                Zakończ wypożyczenie
                                            </ButtonContainer>
											
                                    </div>
                                </div>
                            </div>
                    </div>
    )
}
}


export const TextLabel = styled.label`
width: 60%;
textAlign: right;
font-weight: bold;
padding: 5px 0px;
margin: 8px 0;
display: inline-block;
boxSizing: border-box;
text-transform: none;
`;

export const InputWindow = styled.input`
width: 400px;
height: 100px;
font-weight: bold;
margin: 8px 0;
display: inline-block;
boxSizing: border-box;
text-transform: none;
margin-bottom: 10px;

@media screen and (max-width: 480px){
    width: 200px;
    height: 50px;
    font-size: 10px;
}
`;