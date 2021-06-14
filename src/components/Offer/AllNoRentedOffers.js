import React, { Component } from 'react';
import Offer from './Offer';
import Title from './Title';

import axios from 'axios';
import fs from 'fs';


export default class AllNoRentedOffers extends Component {


    state  = {
        offers: []
    }



    // renderRecomendedOffers = () =>{
    //     if(this.state.reco.length == 0){
    //         return
    //     }
    //     return this.state.reco.map(products => {
    //         return (
    //             <Product key={products.id} product={products}/>
    //         )
    //     })
    // }

    renderOffers = () => {
        if(this.state.offers.length == 0){
            return
        }
        return this.state.offers.map(offers => {
            return (
                <Offer key={offers.id} offer={offers}/>
            )
        })
    }




    componentDidMount = () => {

            console.log(this.props )


        axios.get('http://localhost:8080/offers',{
            headers : {
                'Authorization':'Bearer '+this.props.userdata.accessToken
		    }
        })
        .then(  (response) => {
            console.log(response.data)
            this.setState({
                offers: response.data
            })
        })

        // axios.get('https://autorentserver.azurewebsites.net/api/offers/recommended',{
        //     headers : {
        //         'language':'pl',
        //         'auth-token': this.props.userdata.authToken
		//     }
        // })
        // .then(  (response) => {
        //     console.log(response.data)
        //     this.setState({
        //         reco: response.data
        //     })
        // })

    }

    // czyPuste = (props) => {
    //     const dlug = props.lenght;
    //     if(dlug == 0) {
    //         return 
    //     }
    //     return <div className="container">
    //                     <Title name="Rekomendowane" title="oferty" />
    //                     <div className="row">
    //                         {
    //                             this.renderRecomendedOffers()
    //                         }
    //                     </div>
    //                 </div>
    // }

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
