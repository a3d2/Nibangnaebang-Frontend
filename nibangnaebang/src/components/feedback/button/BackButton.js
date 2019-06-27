/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import { inject } from 'mobx-react';
import navAssets from "@assets/nav";

export const BackButtonColor = {
    white:navAssets.iconNavBackWhite,
    black:navAssets.iconNavBackBlack,
}

@inject(stores => ({
    navBack:stores.nav.back,
}))
class BackButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    handleNavBack = () => {
        this.props.navBack();
    }

    render() {
        const { color } = this.props;

        return (
            <Container 
                onPress={this.handleNavBack}
            >
                <Image 
                    source={color}
                />
            </Container>
        );
    }
}

BackButton.propTypes = {
    color:PropTypes.number,
};

BackButton.defaultProps = {
    color:BackButtonColor.black
}

const Container = styled.TouchableOpacity`
    padding-right:60;
    padding-left:17;
    padding-vertical:15;
`;
const Image = styled.Image`
    width:21;
    height:21;
`;

export default BackButton;