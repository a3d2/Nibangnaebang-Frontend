/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import { inject } from 'mobx-react';
import DrawerModal, { DrawerModalPropTypes } from './DrawerModal';
import { Calendar } from 'react-native-calendars'
import colors from '../../../colors/colors';
import moment from 'moment';
import NormalButton from '../button/NormalButton';

@inject(( stores ) => {
    return {
    }
})

class CalendarModal extends Component {
    enumerateDaysBetweenDates = function(startDate, endDate) {
        var dates = [];

        var currDate = moment(startDate).startOf('day').subtract(1, 'month');
        var lastDate = moment(endDate).startOf('day').subtract(1, 'month');

        while(currDate.add(1, 'days').diff(lastDate) < 0) {
            dates.push(moment(currDate).format('YYYY-MM-DD'));
        }

        return dates;
    };

    constructor(props) {
        super(props);

        this.state = {
            startDate:null,
            endDate:null,
        };
    }

    onDayPress = (day) => {
        const { startDate, endDate } = this.state;

        if(!startDate)
            this.setState({ startDate:day });
        else
            this.setState({ endDate:day });

        if(startDate && endDate) {
            this.setState({ startDate:day, endDate:null });
        }
    }
    onSelectDates = () => {
        const { onSelectDates } = this.props;
        const { startDate, endDate } = this.state;
        onSelectDates(startDate, endDate);
    }

    render() {
        const { visible, onRequestClose, onSelectDates } = this.props;
        const { startDate, endDate } = this.state;
        
        let markedDates = {
        }
        markedDates[(startDate || {}).dateString] = { startingDay: true, color:colors.mainBlue }
        if(startDate && endDate) {
            let dates = this.enumerateDaysBetweenDates(startDate, endDate);
            dates.forEach(each => {
                markedDates[each] = { color:colors.mainBlue };
            })
        }
        markedDates[(endDate || {}).dateString] = { endingDay: true, color:colors.mainBlue }

        return (
            <DrawerModal
                visible={visible}
                onRequestClose={onRequestClose}
            >
                <Container>
                    <Calendar
                        markedDates={markedDates}
                        onDayPress={this.onDayPress}
                        markingType={'period'}
                    />
                    <ButtonContainer>
                        <NormalButton
                            onPress={this.onSelectDates}
                            containerStyle={{
                                marginTop:12
                            }}
                            label={'적용하기'}
                            disabled={!(startDate && endDate)}
                        />
                    </ButtonContainer>
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

const ButtonContainer = styled.View`
    padding-horizontal:40;
`;

export default CalendarModal;