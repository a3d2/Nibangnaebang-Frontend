/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import { Platform } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import colors from '../../../colors/colors';
import TextInput, { InputType } from './TextInput';

const MARGIN_GAP = 10;

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPassword:false,
            accWidth:0
        };
    }

    toggleShowPassword = () => {
        this.setState({ showPassword:!this.state.showPassword })
    }

    onSubmitEditing = () => {
        const { onSubmitEditing } = this.props;
        const { value } = this.state;
        onSubmitEditing && onSubmitEditing(value)
    }

    render() {
        const {
            containerStyle,
            accContainerStyle,
            type,
            inputStyle,
            accessoryView,
            removeUnderline,
        } = this.props;

        const { showPassword, accWidth } = this.state;

        const isPassword = type === InputType.password;


        return (
            <Container>
                <InnerContainer
                    paddingRight={isPassword ? 25 : (accWidth + MARGIN_GAP || 0)}
                    underline={!removeUnderline}
                    style={containerStyle}
                >
                    <TextInput
                        {...this.props}
                        style={inputStyle}
                        {...type}

                        secureTextEntry={!showPassword && isPassword}
                        onSubmitEditing={this.onSubmitEditing}
                    />
                    <AccessoryContainer
                        onLayout={(e) => {
                            const { width } = e.nativeEvent.layout;
                            this.setState({ accWidth:width })
                        }}
                        style={accContainerStyle}
                    >
                        {accessoryView}
                    </AccessoryContainer>
                </InnerContainer>
            </Container>
        );
    }
}

Input.propTypes = {
    onSubmitEditing:PropTypes.func.isRequired,
    onChangeText:PropTypes.func.isRequired,
    placeholder:PropTypes.string.isRequired,
    type:PropTypes.object.isRequired,
    containerStyle:PropTypes.object,
    inputStyle:PropTypes.object,
    accContainerStyle:PropTypes.object,
    inputRef:PropTypes.func,
    accessoryView:PropTypes.element,
    accessoryWidth:PropTypes.number,
    removeUnderline:PropTypes.bool,
};

Input.defaultProps = {
    placeholder:'',
    type:InputType.default,
    containerStyle:{},
    inputStyle:{},
    accContainerStyle:{},
    returnKeyType:'done',
    blurOnSubmit:false,
    removeUnderline:false,
}

const Container = styled.View`
`;

const InnerContainer = styled.View`
    display: flex;
    flex-direction:row;
    width:100%;
    /* margin-top:${props => props.underline ? Platform.OS === 'ios' ? 14.5 : 0 : 0}; */
    padding-bottom:${props => props.underline ? Platform.OS === 'ios' ? 7 : 0 : 0};
    border-bottom-width:${props => props.underline ? 1 : 0};
    border-bottom-color:${colors.lightPeriwinkle};
    padding-right:${props => props.paddingRight};
`;

const AccessoryContainer = styled.View`
`;

export default Input;