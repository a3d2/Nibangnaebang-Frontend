import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import Input from '../../../../components/data/input/Input'
import NormalButton from '../../../../components/feedback/button/NormalButton';
import CalendarModal from '../../../../components/feedback/modal/CalendarModal';

@inject(stores => ({
    navTo:stores.nav.navTo,
}))
class UploadStepPeriod extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerVisible:false
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
        const { drawerVisible } = this.state;

        return (
            <Container>
                <PeriodContainer>
                    <Title>
                        {`방을 비우실\n기간을 선택해주세요`}
                    </Title>
                    <PeriodInnerContainer
                        onPress={this.openCalendar}
                    >
                        <PeriodItemContainer>
                            <PeriodTitle>
                                언제부터
                            </PeriodTitle>
                            <PeriodItemTextContainer>
                                <PeriodText>

                                </PeriodText>
                            </PeriodItemTextContainer>
                        </PeriodItemContainer>
                        <PeriodItemContainer>
                            <PeriodTitle>
                                언제부터
                            </PeriodTitle>
                            <PeriodItemTextContainer>
                                <PeriodText>
                                    
                                </PeriodText>
                            </PeriodItemTextContainer>
                        </PeriodItemContainer>
                    </PeriodInnerContainer>
                </PeriodContainer>
                <PriceContainer>
                    <Title>
                        {`가격을 입력해주세요`}
                    </Title>

                    <Input
                        placeholder={'가격을 입력해주세요'}
                        inputStyle={{
                            marginTop:15
                        }}
                        accessoryView={this.renderPriceCalcButton()}
                        accContainerStyle={{
                            position:'absolute',
                            right:0,
                            bottom:12,
                        }}
                        // onChangeText={this.onEmailChange}
                        onSubmitEditing={() => {
                            // this.passwordRef.focus();
                        }}
                    />
                </PriceContainer>
                <NormalButton
                    disabled={false}
                    onPress={this.onPressNext}
                    label={'다음'}
                />
                <CalendarModal
                    visible={drawerVisible}
                    onRequestClose={this.closeCalendar}
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
const Title = styled.Text`
`;
const PeriodContainer = styled.View`
`;
const PeriodInnerContainer = styled.TouchableOpacity`
    flex-direction:row;
    justify-content:space-between;
`;
const PeriodItemContainer = styled.View`
`;
const PeriodTitle = styled.Text`
`;
const PeriodItemTextContainer = styled.View`
`;
const PeriodText = styled.Text`
`;

const PriceContainer = styled.View`
`;

const PriceCalcButtonContainer = styled.TouchableOpacity`
`;
const PriceCalcButtonText = styled.Text`
`;

export default UploadStepPeriod;