import React, { Component } from "react";
import Title from "../Title";
import axios from "axios";
import uuid from "react-uuid";
import Add from "../AddPhoto";

export default class AddCar extends Component {
  state = {
    value: 0,
  };

  componentDidMount = () => {
    this.state.value = uuid();
    console.log(this.state.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:8080/cars/",
        {
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
          commentList: [],
        },
        {
          headers: {
            Authorization: "Bearer " + this.props.userdata.accessToken,
          },


    state = {
        value: 0};

    componentDidMount = () => {
        this.state.value = uuid()
        console.log(this.state.value)
    }

    handleSubmit = (event) => {
        
        event.preventDefault();

        axios.post('http://localhost:8080/cars/', {
            ownerId: this.props.userdata.userId,
            carName: event.target.carName.value,
            carBrandName: event.target.carBrand.value,
            carModelName: event.target.carModel.value,
			isRented: false,
            enginePower: event.target.enginePower.value,
            engine: event.target.engine.value,
            color: event.target.color.value,
			gearBox: event.target.gearBox.value,
            fuel: event.target.fuel.value,
            country: event.target.country.value,
    },{
        headers : {
            'Authorization':'Bearer '+this.props.userdata.accessToken
        }
      )
      // .then(function (response) {
      //     console.log(response);
      //     alert(response);
      // })
      .catch(function (error) {
        console.log(error);
        //console.log(error.response.data);
      });
  };

  getInputStyle = () => {
    return {
      width: "50%",
      padding: "12px 20px",
      margin: "8px 0",
      display: "inline-block",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
    };
  };
  getLabelStyle = () => {
    return {
      width: "30%",
      textAlign: "right",
      padding: "12px 20px",
      margin: "8px 0",
      display: "inline-block",
      boxSizing: "border-box",
    };
  };
  getButtonStyle = () => {
    return {
      width: "60%",
      color: "white",
      backgroundColor: "blue",
      display: "inline-block",
      boxSizing: "border-box",
      marginLeft: "20%",
      padding: "10px",
    };
  };

  render() {
    return (
      <React.Fragment>
        <Title title="Dodaj własny samochód" />
        <div
          style={{
            borderRadius: "5px",
            backgroundColor: "#f2f2f2",
            padding: "20px",
            margin: "auto",
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <label for="fname" style={this.getLabelStyle()}>
              Nazwa:
            </label>
            <input
              type="text"
              style={this.getInputStyle()}
              id="fname"
              name="carName"
              placeholder="Podaj nazwe swojego samochodu"
            />

            <label for="fname" style={this.getLabelStyle()}>
              Marka:
            </label>
            <input
              type="text"
              style={this.getInputStyle()}
              id="fname"
              name="carBrand"
              placeholder="Podaj markę swojego samochodu"
            />

            <label for="fname" style={this.getLabelStyle()}>
              Model:
            </label>
            <input
              type="text"
              style={this.getInputStyle()}
              id="fname"
              name="carModel"
              placeholder="Podaj model swojego samochodu"
            />

            <label for="fname" style={this.getLabelStyle()}>
              Silnik:
            </label>
            <input
              type="text"
              style={this.getInputStyle()}
              id="fname"
              name="engine"
              placeholder="Podaj moc silnika swojego samochodu"
            />

            <label for="fname" style={this.getLabelStyle()}>
              Moc:
            </label>
            <input
              type="text"
              style={this.getInputStyle()}
              id="fname"
              name="enginePower"
              placeholder="Podaj ilosc koni mechanicznych"
            />

            <label for="fname" style={this.getLabelStyle()}>
              Kolor:
            </label>
            <input
              type="text"
              style={this.getInputStyle()}
              id="fname"
              name="color"
              placeholder="Podaj kolor swojego samochodu"
            />

            <label for="fname" style={this.getLabelStyle()}>
              Paliwo:
            </label>
            <input
              type="text"
              style={this.getInputStyle()}
              id="fname"
              name="fuel"
              placeholder="Podaj paliwo swojego samochodu"
            />

            <label for="fname" style={this.getLabelStyle()}>
              Skrzynia biegów:
            </label>
            <input
              type="text"
              style={this.getInputStyle()}
              id="fname"
              name="gearBox"
              placeholder="Podaj rodzaj skrzyni biegów swojego samochodu"
            />

            <label for="fname" style={this.getLabelStyle()}>
              Kraj pochodznie:
            </label>
            <input
              type="text"
              style={this.getInputStyle()}
              id="fname"
              name="country"
              placeholder="Podaj kraj pochodzenia swojego samochodu"
            />
            <Add id={this.state.value}></Add>
            <input
              type="submit"
              value="Dodaj samochód"
              className="btn"
              style={this.getButtonStyle()}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}
