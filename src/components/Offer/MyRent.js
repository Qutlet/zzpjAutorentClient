import React, { Component } from 'react';
import axios from 'axios';
import MyRentsItem from './MyRentsItem';

export default class MyRent extends Component {


    state  = {
        offers: []
    }

    renderOffers = () => {
        if(this.state.offers.length == 0){
            return
        }
        return this.state.offers.map(offers => {
            return (
                <MyRentsItem key={offers.id} offer={offers} userdata={this.props.userdata}></MyRentsItem>
            )
        })
    }

    componentDidMount = () => {
        console.log(this.props.userdata)
        axios.get('http://localhost:8080/offers/activeRented/' + this.props.userdata.userId,{
            headers : {
                'Authorization':'Bearer '+this.props.userdata.accessToken
		    }
        })  // /active' + this.props.userdate.userID
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
                <h1 style={{textAlign: "center"}}>Twoje wypożyczenia</h1>
                <table style={this.getTableStyle()}>
                <thead style={this.getTableHeaderStyle()}>
                <tr>
               <td>Nazwa</td>
               <td>Koszt</td>
               <td>Opis</td>
               <td>Oddaj</td>
                   
               
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
