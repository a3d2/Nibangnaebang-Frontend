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
            <InputContainer
                bottomBorder={needBottomBorder}
            >
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
    needBottomBorder:PropTypes.bool,
};

SearchInput.defaultProps = {
    placeholder:'',
    needBottomBorder:true
}

const InputContainer = styled.View`
    padding-bottom:${Platform.OS === 'ios' ? 14.5 : 0};
    border-bottom-width:${props => props.bottomBorder ? 1 : 0};
    border-bottom-color:${colors.lightPeriwinkle};
    flex-direction:row;
    align-items:center;
`;

const SearchIcon = styled.Image`
    width:14;
    height:14;
    margin-right:8;
`;


export default SearchInput;