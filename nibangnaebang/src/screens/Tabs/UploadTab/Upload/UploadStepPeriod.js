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
                    title1={`방을 비우실\n기간을 선택해주세요`}
                    title2={`가격을 입력해주세요`}
                    accessoryView={this.renderPriceCalcButton()}
                    accContainerStyle={{
                        position:'absolute',
                        right:0,
                        bottom:12,
                    }}
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
`;

const PriceCalcButtonContainer = styled.TouchableOpacity`
`;
const PriceCalcButtonText = styled.Text`
`;

export default UploadStepPeriod;