import React, { Component } from 'react';
import Offer from './Offer';
import Title from './Title';
import axios from 'axios';

export default class MyOffers extends Component {


    state  = {
        offers: []
    }

    renderOffers = () => {
        if(this.state.offers.length == 0){
            return
        }
        return this.state.offers.map(offers => {
            return (
                <div>
                <Offer key={offers.id} offer={offers}></Offer>
                

                   <button>
                    Edit
                </button> 
                </div>
                
                
            )
        })
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/offers')  // /active' + this.props.userdate.userID
        .then(  (response) => {
            console.log(response.data)
            this.setState({
                offers: response.data
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="dostępne" title="oferty" />
                        <div className="row">
                            {
                                this.renderOffers()
                            }
                        </div>
                        
                    </div>
                </div>
            </React.Fragment>
            //<Product></Product>
        );
    }
}
