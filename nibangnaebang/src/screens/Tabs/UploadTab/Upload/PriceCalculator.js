import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import Input from '../../../../components/data/input/Input';
import NormalButton from '../../../../components/feedback/button/NormalButton';

@inject(stores => ({
    navTo:stores.nav.navTo,
    back:stores.nav.back,
}))
class PriceCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            calcPrice:1234
        }
    }

    onConfirm = () => {
        const { back, navigation } = this.props;
        const { calcPrice } = this.state;
        back();
        navigation.state.params.onCalculateConfirm(calcPrice);
    }
    
    render() {
        return (
            <Container>
                <TypeContainer>
                    <Title>
                        방 종류
                    </Title>
                    <TypeButtonsContainer>
                        <TypeButtonContainer>
                            <TypeButtonText>
                                월세
                            </TypeButtonText>
                        </TypeButtonContainer>
                        <TypeButtonContainer>
                            <TypeButtonText>
                                전세
                            </TypeButtonText>
                        </TypeButtonContainer>
                        <TypeButtonContainer>
                            <TypeButtonText>
                                연세
                            </TypeButtonText>
                        </TypeButtonContainer>
                    </TypeButtonsContainer>
                </TypeContainer>
                <PriceContainer>
                    <Title>
                        가격
                    </Title>
                    <Input
                        placeholder={'가격을 입력해주세요'}
                    />
                </PriceContainer>
                <CalcButton>
                    <CalcButtonText>
                        1일 거주비 계산하기
                    </CalcButtonText>
                </CalcButton>
                <ResultContainer>
                    <ResultInfoText>
                        1일 예상 거주비
                    </ResultInfoText>
                    <ResultRightContainer>
                        <ResultEquationText>
                            x % y
                        </ResultEquationText>
                        <ResultText>
                            = z 원
                        </ResultText>
                    </ResultRightContainer>
                </ResultContainer>
                <NormalButton
                    disabled={false}
                    onPress={this.onConfirm}
                    label={'1일 z원으로 계산하기'}
                />
            </Container>
        );
    }
}
PriceCalculator.propTypes = {
};

PriceCalculator.defaultProps = {
}

const Container = styled.ScrollView`
    flex:1;
`;

const Title = styled.Text`
`;

const TypeContainer = styled.View`
`;
const TypeButtonsContainer = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;
const TypeButtonContainer = styled.TouchableOpacity`
`;
const TypeButtonText = styled.Text`
`;

const PriceContainer = styled.View`
`;
const CalcButton = styled.TouchableOpacity`
`;
const CalcButtonText = styled.Text`
`;

const ResultContainer = styled.View`
`;
const ResultInfoText = styled.Text`
`;
const ResultRightContainer = styled.View`
`;
const ResultEquationText = styled.Text`
`;
const ResultText = styled.Text`
`;

const ConfirmButton = styled.TouchableOpacity`
`;


export default PriceCalculator;