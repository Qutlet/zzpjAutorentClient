import React, { Component } from 'react';
import axios from 'axios';
import { AdminOfferItem } from './AdminOfferItem';

export default class GetAllOffers extends Component {


    state  = {
        offers: []
    }

    renderOffers = () => {
        if(this.state.offers.length == 0){
            return
        }
        return this.state.offers.map(offers => {
            return (
                <AdminOfferItem key={offers.id} offer={offers}></AdminOfferItem>
            )
        })
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/offers')
        .then(  (response) => {
            console.log(response.data)
            this.setState({
                offers: response.data
            })
        })
    }

    getTableHeaderStyle = () => {
        return {
            paddingTop: "12px",
            paddingBottom: "12px",
            textAlign: "center",
            backgroundColor: "#009ffd",
            color: "white"
        }
    }
    getTableStyle = () => {
        return {
            border: "1px solid #ddd",
            padding: "8px",
            textAlign: "center",
            borderCollapse: "collapse",
            border: "3px solid #ddd",
            width: "100%"
        }
    }

    render() {
        return (

            <div>
                <table style={this.getTableStyle()}>
                <thead style={this.getTableHeaderStyle()}>
                <tr>
               <td>Nazwa</td>
               <td>Samochod</td>
               <td>Aktywna</td>
               <td>Usuń</td>
               {/* <td>Edytuj</td> */}
                   
               
                </tr>
                </thead>
                <tbody>
                {this.renderOffers()}
                </tbody>
        </table>
            </div>
        );
    }
}
