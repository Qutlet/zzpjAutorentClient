import React, { Component } from 'react'
import axios from 'axios'
import Title from '../Title';
//import { FilePicker } from 'react-file-picker';
//import { useFilePicker } from 'use-file-picker';

export default class AddOffer extends Component {
    state = {cars: [],
            cat: [],
            value: 0,
            value2: 0};

    componentDidMount = () => {
        axios.get('http://localhost:8080/cars/available',{
            headers : {
                //'language':'pl' ,
                //'auth-token':this.props.userdata.authToken
            }
        })
        .then(  (response) => {
            console.log(response.data)
            this.setState({
                cars: response.data,
                value: response.data[0].id
            })
        })

        // axios.get('http://autorentserver.azurewebsites.net/api/categories',{
        //     headers : {
        //        // 'language':'pl' ,
        //        // 'auth-token':this.props.userdata.authToken  
        //     }
        // })
        // .then(  (response) => {
        //     console.log(response.data)
        //     this.setState({
        //         cat: response.data,
        //         value2: response.data[0].id
        //     })
        // })
    }
    handleSubmit = (event) =>{
        //console.log(this.state.value2);
        event.preventDefault();
        axios.post('http://localhost:8080/offers', {
            carID: this.state.value,
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

        axios.put('http://localhost:8080/cars/rent/' + this.state.value)
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

            // App = () => {
            //     const [filesContent, errors, openFileSelector, loading] = useFilePicker({
            //       multiple: true,
            //       // accept: '.ics,.pdf',
            //       accept: ['.json', '.pdf'],
            //     });
              
            //     if (errors.length > 0) return <p>Error!</p>;
              
            //     if (loading) {
            //       return <div>Loading...</div>;
            //     }
            // }
              

            

    render() {
        console.log(this.props)
        return (


            <React.Fragment>
                <Title title="Dodaj ofertę" />
                <div style={{borderRadius: "5px", backgroundColor: "#f2f2f2", padding: "20px", margin: "auto"}}>
                <form onSubmit={this.handleSubmit}>


                <label for="fname" style={{
                        width: "81.05%",
                        textAlign: "right",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        boxSizing: "border-box"
                 }}>
                    Wybierz swój samochód:
                <select style={this.getInputStyle()} value={this.state.value} onChange={this.handleChange}>
                    {this.state.cars.map(car => 
                        <option value={car.id}>{car.carName}</option>
                        )}
                </select>
                </label>

                <label for="fname" style={this.getLabelStyle()}>Tytul:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="offerName" placeholder="Podaj tytuł oferty"/>

                <label for="fname" style={this.getLabelStyle()}>Opis:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="description" placeholder="Podaj opis oferty"/>
				
				<label for="fname" style={this.getLabelStyle()}>Cena:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="price" placeholder="Podaj cene oferty"/>

                <label for="fname" style={this.getLabelStyle()}>Numer telefonu:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="phone" placeholder="Podaj numer telefonu"/>

                <label for="fname" style={this.getLabelStyle()}>E-mail:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="email" placeholder="Podaj e-mail"/>
                
                {/* <FilePicker
          extensions={["jpg"]} // Notice that I removed the "."
          onChange={file => console.log(file)}
          onError={errMsg => console.log(errMsg)} // Please handle error
        >
          <button style={{ backgroundColor: "#f57505", width: "75px" }}>
            Upload
          </button>
        </FilePicker> */}
        <button style={{ backgroundColor: "#f57505", width: "75px" }}
        onClick={this.App}>
            Upload
          </button>

                
                <input 
                type="submit"
                value="Dodaj oferte"
                className="btn"
                style={this.getButtonStyle()}
                />
                </form>
                </div>
                
                        
                
            </React.Fragment>
                           
        )
    }
}
