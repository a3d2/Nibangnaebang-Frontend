/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import colors from '../../../colors/colors';

class NormalButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { onPress, wired, disabled, label, containerStyle } = this.props;

        return (
            <Container 
                onPress={onPress}
                disabled={disabled}
                bgColor={disabled ? colors.periwinkleGray : colors.mainPink}
                style={{
                    ...containerStyle
                }}
                wired={wired}
            >
                <ButtonText
                    wired={wired}
                >
                    {label}
                </ButtonText>
            </Container>
        );
    }
}

NormalButton.propTypes = {
    onPress:PropTypes.func.isRequired,
    label:PropTypes.string.isRequired,
    containerStyle:PropTypes.object,
    disabled:PropTypes.bool,
    wired:PropTypes.bool,
};

NormalButton.defaultProps = {
    label:'',
    containerStyle:{},
    disabled:false,
    wired:false
}

const Container = styled.TouchableOpacity`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding: 12px 20px 11px;
    max-height:40;
    border-radius:20;
    width:100%;
    background-color:${props => props.wired ? 'transparent' : props.bgColor};
    border-width:${props => props.wired ? 1 : 0};
    border-color:${props => props.wired ? colors.lightPeriwinkle : 'transparent'};
`;
const ButtonText = styled.Text`
    flex:1;
    text-align:center;
    color:${props => props.wired ? colors.cloudyBlue : 'white'};
`;

export default NormalButton;