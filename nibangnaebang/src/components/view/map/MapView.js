/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import MapView from 'react-native-maps';

class RoomMapView extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <MapView
                {...this.props}
            />
        );
    }
};

RoomMapView.propTypes = {
};

RoomMapView.defaultProps = {
}

export default RoomMapView;