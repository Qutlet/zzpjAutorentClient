import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import moment from 'moment';
import userLogo from '../images/user.png';

export default class Comment extends Component {

    render() {
        const {time, message} = this.props.comments;
        return (
            <div className="col-12 mx-auto my-3">
                <TextTime>{moment(time).format("L")} o {moment(time).format("LT")}</TextTime>
                <CommentWrap>
                    <TextMessage>
                    <Img src={userLogo} alt="user"/>
                        {message}
                    </TextMessage>
                </CommentWrap>
            </div>
        );
    }
}

Comment.propTypes = {
    comments:PropTypes.shape({
        time:PropTypes.instanceOf(Date),
        message:PropTypes.string
    }).isRequired
}

export const CommentWrap = styled.div`
    background: white; 
    padding: 0.4rem 0.4rem;
    width: 400px;
    
    @media screen and (max-width: 480px){
        width: 200px;
        height: 100px;
        font-size: 10px;
    }
`;

export const TextTime = styled.p`
    font-size: 0.7rem;
    margin-left: 0.3rem;
    margin-bottom: -2px;
    text-transform: none;
    @media screen and (max-width: 480px){
        font-size: 9px;
    }
`;

export const TextMessage = styled.p`
    front-size: 1rem;
    text-align: left;
    padding: 0.5rem 0.5rem;
    margin-top: 0.6rem;
    margin-left: 0.6rem;
    text-transform: none;
    @media screen and (max-width: 480px){
        front-size: 0.9rem;
        margin-top: 0.2rem;
   }
`;

export const Img = styled.img`
    width: 3rem;
    margin-right: 5px;
    margin-bottom: 1.5 rem;
    @media screen and (max-width: 480px){
         width: 1.4rem;
         margin-right: 3px;
         margin-bottom: 0.1rem;
    }
`;