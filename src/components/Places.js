import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

export default class Places extends Component {

    render() {
        const {geometry,properties} = this.props.places;
        return (
            <div>
                <div>
                    {geometry.coordinates[0]}
                </div>
                <div>
                    {geometry.coordinates[1]}
                </div>
                <div>

                    {properties.name}
                </div>
            </div>
        );
    }
}

Places.propTypes = {
    places:PropTypes.shape({
        coordinates:PropTypes.array,
        name:PropTypes.string
    }).isRequired
}

