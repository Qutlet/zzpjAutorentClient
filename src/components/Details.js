import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import axios from 'axios'
import { values } from 'mobx'
import PayPalButton from '../components/Favourites/PayPalButton'



export default class  extends Component {
   constructor(props){
       super(props)
       this.state = {
        offer: [],
        car: [],
        count: 0
       }
   }
 
    // state  = 
    //     {   offer: [],
    //         car: [],
    //         count: 0}

componentDidMount = () => {
    //const id =  this.props.location.state
    
    
    const  id  = this.props.location.state.id
    const countValue = this.state.count

    console.log(id)
    
    const link2 = 'http://localhost:8080/offers/' + id;

    axios.get(link2,{
        headers : {
            'language':'pl'  
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
                    'language':'pl'  
                }
            })
            .then(  (response) => {
                console.log(response.data)
                this.setState({
                    car: response.data,
                    count : 0
                })
            })

    })

    axios.get('http://localhost:8080/api/places')
        .then((response) => {
            console.log(response.data)
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
                                    <h3 className="text-blue">
                                        <strong>
                                            Cena: {this.state.car.price}zł/dzień
                                        </strong>
                                    </h3>
                                    <h3 className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Informacje od właściciela:
                                    </h3>
                                    <p className="text-muted lead">{this.state.offer.description}</p>
                                    <div>
                                        <Link to="/avaliableOffers">
                                            <ButtonContainer>
                                                Powrót
                                            </ButtonContainer>
                                        </Link>

                                        <div className="d-flex justify-content-center"  >
                                        <div>
                        <span className="btn btn-black mx-1" onClick={() => this.setState({ count: this.state.count - 1 })}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">{this.state.count}</span>
                        <span className="btn btn-black mx-1" onClick={() => this.setState({ count: this.state.count + 1 })}>
                            +
                        </span>
                    </div>
                    
                </div>
              
                
                                        <PayPalButton 
                                        total={this.state.offer.price * this.state.count}
                                        offerID={this.state.offer.id}  />

                                        <ProductConsumer>
                                            {(value) => (
                                               <ButtonContainer
                                            fav
                                            disabled={this.state.car.inFavourites?true:false}
                                            onClick={()=>{
                                                
                                                
                                                    value.addToFavourite(this.state.car,this.state.offer.id);
                                                    value.openModal(this.state.car);
                                                    
                                                
                                            }}>
                                                {this.state.car.inFavourites?"Polubiono":"Dodaj do polubionych"}
                                            </ButtonContainer> 
                                            )}
                                            
                                        </ProductConsumer>
                                    </div>
                                </div>
                            </div>
                    </div>
    )
}
}
