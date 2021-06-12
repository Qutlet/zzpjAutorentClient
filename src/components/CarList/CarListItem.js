import React, { Component } from 'react'
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import {ButtonContainer} from '../Button'

export class CarListItem extends Component {
   

    state = {
        carID : this.props.car.id
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
    deleteCar = () => {
        axios.delete('http://localhost:8080/cars/'+ this.state.carID,{headers: {
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
            
            <tr key={this.props.car.id}>
               <td>{this.props.car.carBrandName}</td>
               <td>{this.props.car.carModelName}</td>
               <td>{this.props.car.color}</td>
               <td>{this.props.car.fuel}</td>
               <td>{this.props.car.gearBox}</td>
               <td>{this.props.car.country}</td>
               <td>{this.props.car.carName}</td>
               <td> 
                   <ButtonContainer
                        onClick={() => this.deleteCar()}>
                        Usuń
                   </ButtonContainer>
               </td>
               <td> 
                   <Link to={{
                            pathname: 'cars/edit' ,
                            state: {
                                id: this.props.car.id
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

export default CarListItem
