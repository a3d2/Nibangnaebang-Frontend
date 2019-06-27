import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import Input from '../../../../components/data/input/Input';
import NormalButton from '../../../../components/feedback/button/NormalButton';
import colors from '../../../../colors/colors';

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
            <Container
                contentContainerStyle={{
                    flexGrow: 1, 
                    flexDirection: 'column', 
                    justifyContent: 'space-between'
                }}
            >
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
                <Divider/>
                <PriceContainer>
                    <Title>
                        가격
                    </Title>
                    <Input
                        placeholder={'가격을 입력해주세요'}
                        inputStyle={{
                            marginTop:20,
                            fontSize:24
                        }}
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
                <ConfirmButtonContainer>
                    <NormalButton
                        disabled={false}
                        onPress={this.onConfirm}
                        label={'1일 z원으로 계산하기'}
                    />
                </ConfirmButtonContainer>
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
    padding-horizontal:20;
`;

const Divider = styled.View`
    height:1;
    width:100%;
    background-color:${colors.paleGrey};
    margin-top:32;
    margin-bottom:32;
`;


const Title = styled.Text`
    font-size:15;
    font-weight:bold;
    line-height:22;
    letter-spacing:-0.3;
    color:${colors.darkGrey};
`;

const TypeContainer = styled.View`
`;
const TypeButtonsContainer = styled.View`
    margin-top:8;
    flex-direction:row;
    justify-content:space-between;
    margin-left:-6;
    margin-right:-6;
`;
const TypeButtonContainer = styled.TouchableOpacity`
    border-width:1;
    border-radius:4;
    border-color:${props => props.selected ? colors.mainBlue : colors.lightPeriwinkle};
    flex:1;
    width:100%;
    padding-vertical:11;
    margin-left:6;
    margin-right:6;

    justify-content:center;
    align-items:center;
`;
const TypeButtonText = styled.Text`
    font-size:15;
    line-height:22;
    letter-spacing:-0.3;
    color:${props => props.selected ? colors.mainBlue : colors.blueyGrey};
`;

const PriceContainer = styled.View`
    margin-bottom:20;
`;
const CalcButton = styled.TouchableOpacity`
    width:100%;
    justify-content:center;
    align-items:center;
    border-radius:4;
    border-width:1;
    padding-vertical:11;
    border-color:${colors.darkGrey};
`;
const CalcButtonText = styled.Text`
    font-size:15;
    line-height:22;
    letter-spacing:-0.3;
    color:${colors.darkGrey};
`;

const ResultContainer = styled.View`
    flex-direction:row;
    justify-content:space-between;
    margin-top:16;
`;
const ResultInfoText = styled.Text`
    font-size:17;
    line-height:25;
    letter-spacing:-0.3;
    color:${colors.blueyGrey};
`;
const ResultRightContainer = styled.View`
`;
const ResultEquationText = styled.Text`
    font-size:17;
    line-height:25;
    letter-spacing:-0.3;
    color:${colors.blueyGrey};
`;
const ResultText = styled.Text`
    font-size:17;
    line-height:25;
    letter-spacing:-0.3;
    font-weight:bold;
    color:${colors.darkGrey};
`;

const ConfirmButtonContainer = styled.View`
    flex: 1;
    justify-content: flex-end;
    margin-bottom:20;
`;


export default PriceCalculator;