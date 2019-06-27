/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import { Modal } from 'react-native';
import colors from '../../../colors/colors';
import { changeOpacity } from '../../../utils/utils';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

class DrawerModal extends Component {
    closeModal = () => {
        const { onRequestClose } = this.props;
        onRequestClose();
    }

    render() {
        const { visible, children, onRequestClose } = this.props;

        return (
            <Modal
                visible={visible}
                transparent={true}
                animationType={'slide'}
                onRequestClose={onRequestClose}
            >
                <Container onPress={this.closeModal}>
                    <InnerContainer>
                        <CloseButton onPress={this.closeModal}>
                        </CloseButton>
                        <ContentTouchableContainer>
                            <ContentContainer>
                                {children}
                            </ContentContainer>
                        </ContentTouchableContainer>
                    </InnerContainer>
                </Container>
            </Modal>
        );
    }
}

export const DrawerModalPropTypes = {
    visible:PropTypes.bool.isRequired,
    onRequestClose:PropTypes.func,
}

DrawerModal.propTypes = DrawerModalPropTypes;

DrawerModal.defaultProps = {
}

const Container = styled.TouchableWithoutFeedback`
    overflow:hidden;
`;

const InnerContainer = styled.View`
    background-color:${changeOpacity(colors.dark, 0.95)};
    flex:1;
    display:flex;
    justify-content:flex-end;
`;
const CloseButton = styled.TouchableOpacity`
    position:absolute;
    left:0;
    top:${getStatusBarHeight()};
    padding:17px;
`;
const CloseIcon = styled.Image`
    width:21;
    height:21;
`;
const ContentTouchableContainer = styled.TouchableWithoutFeedback`
`;

const ContentContainer = styled.View`
    height:70%;
    background-color:white;
    border-top-left-radius:50;
    border-top-right-radius:50;
`;

export default DrawerModal;