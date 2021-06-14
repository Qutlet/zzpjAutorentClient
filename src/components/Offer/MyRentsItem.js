import React, { Component } from 'react'
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import {ButtonContainer} from '../Button'

export class MyRentsItem extends Component {
   

    state = {
        offerID : this.props.offer.id
    } 
    getButtonStyle = () => {
        return {
        padding: "10px",
        textAlign: "center",
        width: "50%",
        fontSize: "14px",
        fontWeight: "bold",
        background: "#de1111",
        border: "none"
        }
    }
    deleteOffer = () => {
        axios.delete('http://localhost:8080/offers/'+ this.state.offerID,{headers: {
            'Content-Type': 'application/json',
            // 'auth-token': this.props.userdata.authToken
        }})
        .then((res) => {
            // console.log(res.data)
            window.location.reload()
         })
         .catch(err => {
             console.log(this.state.carID)
             console.log(err)
         });
         
    }

    render() {
        return (
            
            <tr key={this.props.offer.id}>
               <td>{this.props.offer.offerName}</td>
               <td>{this.props.offer.offerName}</td>
               <td>{this.props.offer.offerName}</td>
               <td> 
                   <Link to={{
                            pathname: 'offers/end' ,
                            state: {
                                id: this.props.offer.id
                            }
                            }}>
                   <ButtonContainer>  
                        Oddaj
                   </ButtonContainer>
                   </Link>
               </td>
            </tr>
        )
    }
}

export default MyRentsItem