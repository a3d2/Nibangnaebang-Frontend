/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import { inject } from 'mobx-react';
import DrawerModal, { DrawerModalPropTypes } from './DrawerModal';
import { Calendar } from 'react-native-calendars'

@inject(( stores ) => {
    return {
    }
})
class CalendarModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { visible, onRequestClose } = this.props;

        return (
            <DrawerModal
                visible={visible}
                onRequestClose={onRequestClose}
            >
                <Container>
                    <Calendar/>
                </Container>
            </DrawerModal>
        );
    }
}

CalendarModal.propTypes = {
    ...DrawerModalPropTypes,
};

CalendarModal.defaultProps = {
}

const Container = styled.View`
    position:absolute;
    left:0;
    top:-35;
    right:0;
    bottom:40;
    display:flex;
    justify-content:center;
    align-items:center;
    justify-content:flex-end;
`;
export default CalendarModal;