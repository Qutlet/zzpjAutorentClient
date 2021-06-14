import React, { Component } from 'react'
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import {ButtonContainer} from '../Button'

export class MyOfferItem extends Component {
   

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
        axios.delete('http://localhost:8080/offers/'+ this.state.offerID,{
            headers : {
                'Authorization':'Bearer '+this.props.userdata.accessToken
		    }
        })
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
                   <ButtonContainer onClick={() => this.deleteOffer()}>
                        Usuń
                   </ButtonContainer>
               </td>
               <td> 
                   <Link to={{
                            pathname: 'offers/edit' ,
                            state: {
                                id: this.props.offer.id
                            }
                            }}>
                   <ButtonContainer>  
                        Edytuj
                   </ButtonContainer>
                   </Link>
               </td>
            </tr>
        )
    }
}

export default MyOfferItem
