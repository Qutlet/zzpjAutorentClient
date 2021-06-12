import React, { Component } from 'react'
import axios from 'axios'
import Title from '../Title';
//import { FilePicker } from 'react-file-picker';
//import { useFilePicker } from 'use-file-picker';

export default class EditOffer extends Component {
    state = {
        offer: []
    }

    componentDidMount = () => {
        const  id  = this.props.location.state.id
        console.log(id)
        axios.get('http://localhost:8080/offers/' + id)
        .then(  (response) => {
            console.log(response.data)
            this.setState({
                offer: response.data
            })
        })


    }


    handleSubmit = (event) =>{
        //console.log(this.state.value2);
        event.preventDefault();
        axios.put('http://localhost:8080/offers', {
            carID: this.state.offer.carID,
			//ownerID: event.target.ownerID.value,
			clientID: null,
			price: event.target.price.value,
            offerName: event.target.offerName.value,
            description: event.target.description.value,
			//creationDate: event.target.creationDate.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
			rented: false,
            //categories: this.state.value2
        },{
            headers : {
               // 'auth-token':this.props.userdata.authToken  
		    }
        })
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        });
        window.location.reload()
	}
    getInputStyle = () => {
        return {
            width: "50%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box"
        }
    }
    getLabelStyle = () => {
        return {
            width: "30%",
            textAlign: "right",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            boxSizing: "border-box"
        }
    }
    getButtonStyle = () => {
        return {
            width: "60%",
            color: "white",
            backgroundColor: "blue",
            display: "inline-block",
            boxSizing: "border-box",
            marginLeft: "20%",
            padding: "10px"
        }
    }

    handleChange = (event) => {
                    console.log(event.target.value)
                    //this.state.value = event.target.value
                    this.setState({value: event.target.value});
                }

    handleChange2 = (event) => {
                console.log(event.target.value)
                //this.state.value = event.target.value
                this.setState({value2: event.target.value});
            }                
          

    render() {
        console.log(this.props)
        return (


            <React.Fragment>
                <Title title="Edytuj ofertę" />
                <div style={{borderRadius: "5px", backgroundColor: "#f2f2f2", padding: "20px", margin: "auto"}}>
                <form onSubmit={this.handleSubmit}>
                <label for="fname" style={this.getLabelStyle()}>Tytul:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="offerName" placeholder={this.state.offer.offerName}/>
                <label for="fname" style={this.getLabelStyle()}>Opis:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="description" placeholder={this.state.offer.description}/>
				<label for="fname" style={this.getLabelStyle()}>Cena:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="price" placeholder={this.state.offer.price}/>
                <label for="fname" style={this.getLabelStyle()}>Numer telefonu:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="phone" placeholder={this.state.offer.phone}/>
                <label for="fname" style={this.getLabelStyle()}>E-mail:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="email" placeholder={this.state.offer.email}/>                
                <input 
                type="submit"
                value="Edytuj oferte"
                className="btn"
                style={this.getButtonStyle()}
                />
                </form>
                </div>
            </React.Fragment>
                           
        )
    }
}
