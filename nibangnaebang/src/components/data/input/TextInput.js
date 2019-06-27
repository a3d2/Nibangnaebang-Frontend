/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import colors from '../../../colors/colors';

export const InputType = {
    default:{ 
        autoComplete:'off',
        keyboardType:'default',
        textContentType:'none'
    },
    number:{ 
        autoComplete:'off',
        keyboardType:'number-pad',
        textContentType:'none'
    },
    email:{ 
        autoComplete:'email',
        keyboardType:'email-address',
        textContentType:'emailAddress'
    },
    password:{
        autoComplete:'password',
        keyboardType:'default',
        textContentType:'password'
    }
}

class TextInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value:props.defaultValue,
        };
    }

    onChangeText = (value) => {
        const { onChangeText } = this.props;

        this.setState({ value:value });
        onChangeText && onChangeText(value);
    }

    onSubmitEditing = () => {
        const { onSubmitEditing } = this.props;
        const { value } = this.state;
        onSubmitEditing && onSubmitEditing(value)
    }

    render() {
        const {
            ref,
            inputRef,
            type,
        } = this.props;

        const { value } = this.state;


        return (
            <Input
                {...this.props}
                ref={ref || inputRef}

                underlineColorAndroid='transparent'
                autoCapitalize='none'
                autoCorrect={false}

                {...type}

                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmitEditing}
                value={value}
                placeholderTextColor={colors.blueyGrey}
                // selectionColor={colors.slateGrey}
            />
        );
    }
}

const Input = styled.TextInput`
    color:${colors.darkGrey};
    font-size:14;
    width:100%;
`;

TextInput.propTypes = {
    type:PropTypes.object.isRequired,
};

TextInput.defaultProps = {
    placeholder:'',
    type:InputType.default,
    returnKeyType:'done',
    blurOnSubmit:false,
}

export default TextInput;