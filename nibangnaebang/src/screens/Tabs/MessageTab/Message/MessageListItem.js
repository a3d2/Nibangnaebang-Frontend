/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';

class MessageListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { preview, onPressItem } = this.props;

        return (
            <Container
                onPress={onPressItem}
            >
                <Preview>
                    {preview}
                </Preview>
            </Container>
        );
    }
};

MessageListItem.propTypes = {
    preview:PropTypes.string.isRequired,
    onPressItem:PropTypes.func,
};

MessageListItem.defaultProps = {
    preview:''
}

const Container = styled.TouchableOpacity`
    padding:20px;
    margin-bottom:20;
    border-bottom-width:1px;
    border-bottom-color:black;
    flex-direction:row;
`;

const Preview = styled.Text`
`;

export default MessageListItem;