/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import assets from '../../../../assets/general';
import colors from '../../../../colors/colors';

class MessageListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { lastMsg, otherUserId, otherUserGender, onPressItem } = this.props;

        return (
            <Container
                onPress={onPressItem}
            >
                <ProfileImage
                    source={otherUserGender === "male" ? assets.iconFaceM : assets.iconFaceW}
                />
                <TextView>
                    <Id>
                        {otherUserId}
                    </Id>
                    <Preview>
                        {lastMsg}
                    </Preview>
                </TextView>
            </Container>
        );
    }
};

MessageListItem.propTypes = {
    onPressItem:PropTypes.func,
};

MessageListItem.defaultProps = {
}

const Container = styled.TouchableOpacity`
    flex-direction:row;
    border-bottom-width:1px;
    border-bottom-color:${colors.lightPeriwinkle};
    padding-vertical:20px;
`;

const ProfileImage = styled.Image`
    width:36;
    height:36;
`;

const TextView = styled.View`
    margin-left:13;
`;
const Id = styled.Text`
    font-size:15;
    font-weight:bold;
    letter-spacing:-0.3;
    color:${colors.darkGrey};
`;
const Preview = styled.Text`
    font-size:15;
    letter-spacing:-0.3;
    color:${colors.darkGrey};
`;

export default MessageListItem;