import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

export default class Comment extends Component {

    render() {
        const {message} = this.props.comments;
        return (
            <div>
                <div>
                    {message}
                </div>
            </div>
        );
    }
}

Comment.propTypes = {
    comments:PropTypes.shape({
        message:PropTypes.string
    }).isRequired
}

