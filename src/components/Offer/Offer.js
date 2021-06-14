import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../context';
import PropTypes from 'prop-types'
//import storage from '@react-native-firebase/storage';

const url2id = props => props.offer.id;

export default class Offer extends Component {

    //componentDidMount = () => {
        // // var firebaseConfig = {
        // //     apiKey: '<your-api-key>',
        // //     authDomain: '<your-auth-domain>',
        // //     databaseURL: '<your-database-url>',
        // //     storageBucket: '<your-storage-bucket-url>'
        // //   };
        // //   firebase.initializeApp(firebaseConfig)
        //  const id = this.props.offer.id;
        // // var storage = firebase.storage();
        // // //var pathReference = storage.ref('images/stars.jpg');//var pathReference = storage.ref('images/stars.jpg');https://console.firebase.google.com/project/autorent-a82d9/storage/autorent-a82d9.appspot.com/files
        // // var storageRef = storage.refFromURL('gs://autorent-a82d9.appspot.com/'+ id + '.jpg');

        // // storageRef.child(id+'.jpg').getDownloadURL()
        // //     .then((url) => {
        // //     // `url` is the download URL for 'images/stars.jpg'

        // //     // This can be downloaded directly:
        // //     var xhr = new XMLHttpRequest();
        // //     xhr.responseType = 'blob';
        // //     xhr.onload = (event) => {
        // //          var blob = xhr.response;
        // //      };
        // //         xhr.open('GET', url);
        // //         xhr.send();
        // //         var url2 = url

        // //         // Or inserted into an <img> element
        // //         //var img = document.getElementById('myimg');
        // //         //img.setAttribute('src', url);
        // //      })
        // //     .catch((error) => {
        // //      // Handle any errors
        // //      console.log(error)
        // //      });

        // const storageRef = storage.refFromURL('gs://autorent-a82d9.appspot.com/'+ id + '.jpg');
        // var downloadUrl = storageRef.child('path/to/your/file').getDownloadURL();
    //}


    render() {
    
        const {id, offerName, img, price} = this.props.offer;
        return (

            <ProductWrapper className="col -9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">

                <ProductConsumer>
                    {(value) => ( 
                             <Link to={{
                            pathname: '/details' ,
                            state: {
                                id: id
                            }
                            }}>              
                    <div className="img-container p-5" onClick={ () => 
                        value.handleDetail(id)
                    }>
                        
                            
                        
                        {/* <button className="fav-btn" disabled={inFavourites?true:false} onClick={()=>{
                            value.addToFavourite(id);
                            value.openModal(id);
                        }}>
                            {inFavourites?(<p className="text-capitalize mb-0" disabled>{" "}polubiono</p>):(<i className="fas fa-heart"/>)}
                        </button> */}
                    </div>
                    </Link>
                    
                    )}
                </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                           {offerName} 
                        </p>
                        <p className="align-self-center mb-0">
                           {price} 
                        </p>
                        
                        
                    </div>
                </div>
            </ProductWrapper>
            
        );
    }
    
}

Offer.propTypes = {
    offer:PropTypes.shape({
        id:PropTypes.string,
        img:PropTypes.string,
        offerName:PropTypes.string,
        price:PropTypes.number
    }).isRequired
}
var url2 = 'https://storage.googleapis.com/autorent-a82d9.appspot.com/'+url2id+'.jpg' 


const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 0.5s linear;
}
.card-footer{
    background:transparent;
    border-top transparent;
    transition:all 0.5s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}
.img-container{
    background-image:url(${url2});
    background-position: center;
    background-size:cover;
    position:relative;
    overflow:hidden
}
.card-img-top{
    transition:all 0.5s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
.fav-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition:all 0.5s linear;
}
.img-container:hover .fav-btn{
    transform:translate(0,0);
}
.fav-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
}
`;
