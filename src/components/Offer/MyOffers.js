import React, { Component } from 'react';
import axios from 'axios';
import MyOfferItem from './MyOfferItem';

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
                <MyOfferItem key={offers.id} offer={offers} userdata={this.props.userdata}></MyOfferItem>
            )
        })
    }

    componentDidMount = () => {
        console.log(this.props.userdata)
        axios.get('http://localhost:8080/offers/active/' + this.props.userdata.userId,{
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
                <h1 style={{textAlign: "center"}}>Twoje oferty</h1>
                <table style={this.getTableStyle()}>
                <thead style={this.getTableHeaderStyle()}>
                <tr>
               <td>Nazwa</td>
               <td>Koszt</td>
               <td>Opis</td>
               <td>Usuń</td>
               <td>Edytuj</td>
                   
               
                </tr>
                </thead>
                <tbody>
                {this.renderOffers()}
                </tbody>
        </table>
            </div>

            // <React.Fragment>
            //     <div className="py-5">
            //         <div className="container">
            //             <Title name="dostępne" title="oferty" />
            //             <div className="row">
            //                 {
            //                     this.renderOffers()
            //                 }
            //             </div>
                        
            //         </div>
            //     </div>
            // </React.Fragment>
            //<Product></Product>
        );
    }
}
