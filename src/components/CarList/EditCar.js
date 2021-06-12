import React, { Component } from 'react'
import Title from '../Title';
import axios from 'axios';


export default class AddCar extends Component {


    state = {
        car: []
    }

    componentDidMount = () => {
        const  id  = this.props.location.state.id
        console.log(id)
        axios.get('http://localhost:8080/cars/' + id)
        .then(  (response) => {
            console.log(response.data)
            this.setState({
                car: response.data
            })
        })


    }

    handleSubmit = (event) => {
        
        event.preventDefault();
        axios.post('http://localhost:8080/cars/' + this.state.car.id , {
            carName: event.target.carName.value,
            carBrand: event.target.carBrand.value,
            carModel: event.target.carModel.value,
			isRented: false,
            enginePower: event.target.enginePower.value,
            engine: event.target.engine.value,
            color: event.target.color.value,
			gearBox: event.target.gearBox.value,
            fuel: event.target.fuel.value,
            country: event.target.country.value,
    },{
            headers: {
                // 'auth-token':this.props.userdata.authToken
            }
        })
        // .then(function (response) {
        //     console.log(response);
        //     alert(response);
        // })
        .catch(function (error) {
            console.log(error);
            //console.log(error.response.data);
        });
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
    render() {
        return (
            <React.Fragment>
                <Title title="Zmien dane samochodu" />
                <div style={{borderRadius: "5px", backgroundColor: "#f2f2f2", padding: "20px", margin: "auto"}}>
                <form onSubmit={this.handleSubmit}>

                <label for="fname" style={this.getLabelStyle()}>Nazwa:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="carName" placeholder={this.state.car.carName}/>

                <label for="fname" style={this.getLabelStyle()}>Marka:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="carBrandName" placeholder={this.state.car.carBrandName}/>

                <label for="fname" style={this.getLabelStyle()}>Model:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="carModelName" placeholder={this.state.car.carModelName}/>

                <label for="fname" style={this.getLabelStyle()}>Silnik:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="engine" placeholder={this.state.car.engine}/>

                <label for="fname" style={this.getLabelStyle()}>Moc:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="enginePower" placeholder={this.state.car.enginePower}/>

                <label for="fname" style={this.getLabelStyle()}>Kolor:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="color" placeholder={this.state.car.color}/>

                <label for="fname" style={this.getLabelStyle()}>Paliwo:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="fuel" placeholder={this.state.car.fuel}/>

                <label for="fname" style={this.getLabelStyle()}>Skrzynia biegów:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="gearBox" placeholder={this.state.car.gearBox}/>

                <label for="fname" style={this.getLabelStyle()}>Kraj pochodznie:</label>
                <input type="text" style={this.getInputStyle()} id="fname" name="country" placeholder={this.state.car.country}/>
                <input 
                type="submit"
                value="Edytuj samochód"
                className="btn"
                style={this.getButtonStyle()}
                />
                </form>
                </div>
                
                        
                
            </React.Fragment>
                           
        )
    }
}