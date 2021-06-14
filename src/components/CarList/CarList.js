import React, { Component } from 'react'
import UserStore from '../Stores/UserStore';
import axios from 'axios';
import { observer } from 'mobx-react'
import CarListItem from './CarListItem';
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../Button'

 

export class CarList extends Component {
    state = {
        carList: []
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
    getButtonStyle = () => {
        return {
        padding: "7px",
        position: "fixed",
        textAlign: "center",
        width: "50%",
        fontSize: "14px",
        fontWeight: "bold",
        border: "solid 2px #1189de",
        background: "#1189de",
        border: "none",
        margin: "12px"
        }
    }

   
CarListItems= () => {
    if (!this.state.carList) {
        return <td>Twoja lista jest jeszcze pusta</td>;
    }

    return this.state.carList.map(car => {
        return (
            <CarListItem car={car} userdata={this.props.userdata}/>
        );
    })
}



setValue(property, val) {
        this.setState({
            [property]: val
        })
    }


componentDidMount = () => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        }
    };

    axios.get('http://localhost:8080/cars/available/' + this.props.userdata.userId,{
        headers : {
            'Authorization':'Bearer '+this.props.userdata.accessToken
        }
    })
    .then((res) => {
        console.log(res.data)
        this.setState({
             carList: res.data
         })
         console.log(this.state.carList) 
     })
     .catch(err => {
         console.log(err)
     });

}




    render() {
        return (
        <div>
        <h1 style={{textAlign: "center"}}>Twoje samochody</h1>
        <table style={this.getTableStyle()}>
                <thead style={this.getTableHeaderStyle()}>
                <tr>
               <td>Marka</td>
               <td>Model</td>
               <td>Kolor</td>
               <td>Paliwo</td>
               <td>Transmission</td>
               <td>Pochodzenie</td>
               <td>Nazwa</td>
               <td>Usuń</td>
               <td>Edytuj</td>
                   
               
                </tr>
                </thead>
                <tbody>
                {this.CarListItems()}
                </tbody>
        </table>
            
               <Link to="/add-car" className="ml-left">
                    <button>
                        Dodaj nowy samochód
                    </button>
                </Link> 
     
        
        </div>  
        )
    }
}

export default observer(CarList)


