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
    

    render() {
        return (
            
            <tr key={this.props.offer.id}>
               <td>{this.props.offer.offerName}</td>
               <td>{this.props.offer.price}</td>
               <td>{this.props.offer.description}</td>
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
