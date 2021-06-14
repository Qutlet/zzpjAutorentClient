import axios from 'axios';
import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
                    console.log("The payment was succeeded!", payment);
                    // this.props.clearFav();
                    let id =  this.props.offerID;
                    // const link = 'http://localhost:8080/offers/rent/2/' + id;
                    // let content = 'Hello world' 
                    // const config = { headers: {'auth-token':this.props.userdata.authToken  } };
                    
                    axios.put('http://localhost:8080/offers/rent/' + this.props.userdata.userId + '/' + id)
                    .then(function (response){
                        console.log(response);
                    })
                    .catch(function (error){
                        console.log(error);
                    });

                   // this.props.history.push('/')

                    
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            let id =  this.props.offerID;
                    // const link = 'http://localhost:8080/offers/rent/2/' + id;
                    // let content = 'Hello world' 
                    // const config = { headers: {'auth-token':this.props.userdata.authToken  } };
                    
                    axios.put('http://localhost:8080/offers/rent/' + this.props.userdata.userId + '/' + id,{},{
                        headers : {
                            'Authorization':'Bearer '+this.props.userdata.accessToken
                        }
                    })
                    .then(function (response){
                        console.log(response);
                    })
                    .catch(function (error){
                        console.log(error);
                    });
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'PLN'; // or you can set this value from your props or state
        //let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:    'AbTUQkm_xSg7icWzRMvsUc69N6L4H2DxU-nhTnLUHWmbAI4BB4lk9pI5PQuhgP8gHA8J4vrY8XhtDHMa',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={this.props.total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}