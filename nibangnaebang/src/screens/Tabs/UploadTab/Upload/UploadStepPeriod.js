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
        }
    }

    onPressCalcButton = () => {
        const { navTo } = this.props;
        navTo('PriceCalculator', { onCalculateConfirm:this.onCalculateConfirm })
    }
    
    onCalculateConfirm = (price) => {
        console.log("TCL: UploadStepPeriod -> onCalculateConfirm -> price", price)
    }

    onPressNext = () => {
        const { navTo } = this.props;
        navTo('UploadStepDesc', {  })
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
    
    render() {
        return (
            <Container>
                <FilterView
                    periodTitle={`거주기간`}
                    priceTitle={`가격`}
                    genderTitle={`성별`}
                    onPressCalcButton={this.onPressCalcButton}
                />
                <NormalButton
                    disabled={false}
                    onPress={this.onPressNext}
                    label={'다음'}
                />
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

export default UploadStepPeriod;