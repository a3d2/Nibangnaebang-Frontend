import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import Input from '../../../../components/data/input/Input'
import NormalButton from '../../../../components/feedback/button/NormalButton';
import CalendarModal from '../../../../components/feedback/modal/CalendarModal';
import FilterView from '../../../../components/feedback/filter/FilterView';

@inject(stores => ({
    navTo:stores.nav.navTo,
}))
class UploadStepPeriod extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            switchValue:undefined,
            price:0,
            startDate:null,
            endDate:null,
        }
    }

    onPressCalcButton = () => {
        const { navTo } = this.props;
        navTo('PriceCalculator', { onCalculateConfirm:this.onCalculateConfirm })
    }
    
    onCalculateConfirm = (price) => {
        this.filterRef.setPrice(price)
    }

    onPressNext = () => {
        const { navTo } = this.props;
        navTo('UploadStepDesc', this.state)
    }

    openCalendar = () => {
        this.setState({ drawerVisible:true });
    }
    closeCalendar = () => {
        this.setState({ drawerVisible:false });
    }

    renderPriceCalcButton = () => {
        return (
            <PriceCalcButtonContainer
                onPress={this.onPressCalcButton}
            >
                <PriceCalcButtonText>
                    가격 계산기
                </PriceCalcButtonText>
            </PriceCalcButtonContainer>
        )
    }

    onSwitcherValueChange = (value) => {
        this.setState({ switchValue:value });
    }
    onPriceChange = (value) => {
        this.setState({ price:value });
    }
    onSelectDates = (start, end) => {
        this.setState({ startDate:start, endDate:end });
    }
    
    render() {
        const { price, endDate, startDate } = this.state;

        return (
            <Container
                contentContainerStyle={{
                    flexGrow: 1, 
                    flexDirection: 'column', 
                    justifyContent: 'space-between'
                }}
            >
                <FilterView
                    ref={ref => { this.filterRef = ref; }}
                    periodTitle={`거주기간`}
                    priceTitle={`가격`}
                    genderTitle={`성별`}
                    onPressCalcButton={this.onPressCalcButton}
                    onSelectDates={this.onSelectDates}
                    onPriceChange={this.onPriceChange}
                    onSwitchValueChange={this.onSwitcherValueChange}
                />
                <ConfirmButtonContainer>
                    <NormalButton
                        disabled={!price && !startDate && !endDate}
                        onPress={this.onPressNext}
                        label={'다음'}
                    />
                </ConfirmButtonContainer>
            </Container>
        );
    }
}
UploadStepPeriod.propTypes = {
};

UploadStepPeriod.defaultProps = {
}

const Container = styled.ScrollView`
    flex:1;
    padding-horizontal:20;
`;

const PriceCalcButtonContainer = styled.TouchableOpacity`
`;
const PriceCalcButtonText = styled.Text`
`;

const ConfirmButtonContainer = styled.View`
    flex: 1;
    justify-content: flex-end;
    margin-bottom:20;
`;

export default UploadStepPeriod;