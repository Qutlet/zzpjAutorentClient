import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';
import axios from 'axios';
import fs from 'fs';


export default class ProductList extends Component {


    state  = {
        products: [],
        reco: []
    }



    renderRecomendedOffers = () =>{
        if(this.state.reco.length == 0){
            return
        }
        return this.state.reco.map(products => {
            return (
                <Product key={products.id} product={products}/>
            )
        })
    }

    renderOffers = () => {
        if(this.state.products.length == 0){
            return
        }
        return this.state.products.map(products => {
            return (
                <Product key={products.id} product={products}/>
            )
        })
    }




    componentDidMount = () => {
        axios.get('https://autorentserver.azurewebsites.net/api/offers',{
            headers : {
                'language':'pl'  
		    }
        })
        .then(  (response) => {
            console.log(response.data)
            this.setState({
                products: response.data
            })
        })

        axios.get('https://autorentserver.azurewebsites.net/api/offers/recommended',{
            headers : {
                'language':'pl',
                'auth-token': this.props.userdata.authToken
		    }
        })
        .then(  (response) => {
            console.log(response.data)
            this.setState({
                reco: response.data
            })
        })

    }

    czyPuste = (props) => {
        const dlug = props.lenght;
        if(dlug == 0) {
            return 
        }
        return <div className="container">
                        <Title name="Rekomendowane" title="oferty" />
                        <div className="row">
                            {
                                this.renderRecomendedOffers()
                            }
                        </div>
                    </div>
    }

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <this.czyPuste lenght={this.state.reco.lenght}/>
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
