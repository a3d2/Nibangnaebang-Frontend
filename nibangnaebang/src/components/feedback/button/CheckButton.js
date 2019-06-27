/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import colors from '../../../colors/colors';
import assets from "@assets/general";

class CheckButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { onPress, label, checked, custom } = this.props;

        return (
            <Container 
                onPress={onPress}
            >
                <CheckBox
                    checked={checked}
                >
                    <CheckIcon source={assets.iconCheck}/>
                </CheckBox>
                {custom ||
                    <ButtonText>
                        {label}
                    </ButtonText>
                }
            </Container>
        );
    }
}

CheckButton.propTypes = {
    onPress:PropTypes.func.isRequired,
    checked:PropTypes.bool.isRequired,
    custom:PropTypes.element,
    label:PropTypes.string,
};

CheckButton.defaultProps = {
    checked:false,
    label:'',
}

const Container = styled.TouchableOpacity`
    display:flex;
    flex-direction:row;
    align-items:center;
`;
const CheckBox = styled.View`
    width:18;
    height:18;
    border-radius:9;
    background-color:${props => props.checked ? colors.mainPink : 'white'};
    border-width:1;
    border-color:${props => props.checked ? colors.mainPink : colors.lightPeriwinkle};
    margin-right:8;
    justify-content:center;
    align-items:center;
`;
const CheckIcon = styled.Image`
    width:12;
    height:12;
`
const ButtonText = styled.Text`
    font-size:12;
    color:${colors.slateGrey};
`;

export default CheckButton;