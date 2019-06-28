/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import colors from '../../../colors/colors';
import assets from "@assets/general";
import { Platform } from 'react-native'
import TextInput from './TextInput';

class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { needBottomBorder, placeholder, onSearchInputChange, onSearch } = this.props;

        return (
            <InputContainer>
                <SearchIcon source={assets.iconSearch}/>
                <TextInput
                    placeholder={placeholder}
                    style={{
                        flex:1
                    }}
                    onChangeText={onSearchInputChange}
                    onSubmitEditing={onSearch}
                />
            </InputContainer>
        );
    }
}

SearchInput.propTypes = {
    placeholder:PropTypes.string.isRequired,
    onSearchInputChange:PropTypes.func,
    onSearch:PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
    placeholder:'',
}

const InputContainer = styled.View`
    padding-bottom:${Platform.OS === 'ios' ? 9 : 0};
    padding-top:${Platform.OS === 'ios' ? 9 : 0};
    padding-horizontal:12px;
    background-color:${colors.paleGrey};
    border-radius:8;
    flex-direction:row;
    align-items:center;
`;

const SearchIcon = styled.Image`
    width:16;
    height:16;
    margin-right:8;
`;


export default SearchInput;