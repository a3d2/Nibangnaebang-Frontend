/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dialog, { DialogContent, ScaleAnimation } from 'react-native-popup-dialog';
import colors from '../../../colors/colors';

class Modal extends Component {
    render() {
        const { visible, children, onRequestClose } = this.props;

        return (
            <Dialog
                visible={visible}
                dialogAnimation={new ScaleAnimation({
                    toValue: 0,
                    useNativeDriver: true,
                })}
                onTouchOutside={onRequestClose}
                dialogStyle={{
                    borderRadius: 20,
                    width:'70%'
                }}
                // overlayBackgroundColor={colors.dark}
                overlayOpacity={0.95}
                // onHardwareBackPress={onRequestClose}
            >
                <DialogContent
                    style={{
                        paddingBottom:0
                    }}
                >
                    {children}
                </DialogContent>
            </Dialog>
        );
    }
}

export const ModalPropTypes = {
    visible:PropTypes.bool.isRequired,
    onRequestClose:PropTypes.func,
};

Modal.propTypes = ModalPropTypes;

export default Modal;