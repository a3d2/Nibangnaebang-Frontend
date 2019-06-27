/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch } from "react-native";
import styled from 'styled-components/native';
import CalendarModal from '../modal/CalendarModal';
import Input from '../../data/input/Input';
import colors from '../../../colors/colors';
import { changeOpacity } from '../../../utils/utils'
import assets from "@assets/general";

class FilterView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerVisible:false,
            switchValue:false,
            price:0,
            start:'',
            end:''
        };
    }

    openCalendar = () => {
        this.setState({ drawerVisible:true });
    }
    closeCalendar = () => {
        this.setState({ drawerVisible:false });
    }

    _onSwitcherValueChange = (value) => {
        const { onSwitchValueChange } = this.props;
        this.setState({ switchValue:value });
        onSwitchValueChange && onSwitchValueChange(value);
    }
    setPrice = (price) => {
        this.inputRef.setValue(price)
    }
    onPriceChange = (value) => {
        this.setState({ price:value });
        const { onPriceChange } = this.props;
        onPriceChange && onPriceChange(value)
    }
    onSelectDates = (start, end) => {
        this.closeCalendar();
        const { onSelectDates } = this.props;
        onSelectDates && onSelectDates(start, end);
        this.setState({ start:start.dateString, end:end.dateString });
    }

    render() {
        const { periodTitle, priceTitle, genderTitle, onPressCalcButton } = this.props;
        const { drawerVisible, switchValue, start, end } = this.state;

        return (
            <Container>
                <PeriodContainer>
                    <Title>
                        {periodTitle}
                    </Title>
                    <PeriodInnerContainer>
                        <PeriodItemContainer left>
                            <PeriodTitle>
                                언제부터
                            </PeriodTitle>
                            <PeriodItemTextContainer 
                                onPress={this.openCalendar}
                            >
                                <PeriodText>
                                    {start}
                                </PeriodText>
                            </PeriodItemTextContainer>
                        </PeriodItemContainer>
                        <PeriodItemContainer right>
                            <PeriodTitle>
                                언제까지
                            </PeriodTitle>
                            <PeriodItemTextContainer
                                onPress={this.openCalendar}
                            >
                                <PeriodText>
                                    {end}
                                </PeriodText>
                            </PeriodItemTextContainer>
                        </PeriodItemContainer>
                    </PeriodInnerContainer>
                </PeriodContainer>
                <Divider/>
                <PriceContainer>
                    <PriceTitleContainer>
                        <Title>
                            {priceTitle}
                        </Title>
                        {onPressCalcButton &&
                            <CalcButton
                                    onPress={onPressCalcButton}
                            >
                                <CalcText>
                                    1일 주거비용 계산
                                </CalcText>
                                <CalcIcon source={assets.iconCalculator}/>
                            </CalcButton>
                        }
                    </PriceTitleContainer>

                    <Input
                        ref={ref => { this.inputRef = ref; }}
                        placeholder={'가격을 입력해주세요'}
                        inputStyle={{
                            fontSize:24
                        }}
                        onChangeText={this.onPriceChange}
                    />
                </PriceContainer>

                <Divider/>

                <GenderContainer>
                    <Title>
                        {genderTitle}
                    </Title>
                    <GenderInnerContainer>
                        <GenderInfoText>
                            같은 성별끼리만 거래할래요
                        </GenderInfoText>

                        <Switch 
                            ios_backgroundColor={changeOpacity(colors.lightPeriwinkle, 0.6)}
                            trackColor={{ 
                                true:colors.mainBlue,
                                false:'transparent'
                            }}
                            onValueChange={this._onSwitcherValueChange}
                            value={switchValue}
                        />
                    </GenderInnerContainer>
                </GenderContainer>

                <CalendarModal
                    visible={drawerVisible}
                    onRequestClose={this.closeCalendar}
                    onSelectDates={this.onSelectDates}
                />
            </Container>
        );
    }
};

const Container = styled.View`
`;

const Divider = styled.View`
    height:1;
    width:100%;
    background-color:${colors.paleGrey};
`;

const Title = styled.Text`
    font-size:15;
    font-weight:bold;
    line-height:22;
    letter-spacing:-0.3;
    color:${colors.darkGrey};
`;
const PeriodContainer = styled.View`
    margin-top:19;
    margin-bottom:32;
`;
const PeriodInnerContainer = styled.View`
    margin-top:12;
    flex-direction:row;
    justify-content:space-between;
`;
const PeriodItemContainer = styled.View`
    flex:1;
    margin-right:${props => props.left ? '5.5' : 0};
    margin-left:${props => props.right ? '5.5' : 0};
`;
const PeriodTitle = styled.Text`
    font-weight:bold;
    font-size:13;
    line-height:18;
    letter-spacing:-0.3;
    color:${colors.blueyGrey};
`;
const PeriodItemTextContainer = styled.TouchableOpacity`
    margin-top:4px;
    padding-left:16px;
    padding-top:12;
    padding-bottom:11;

    font-weight:600;

    border-radius:6;
    border-width:1;
    border-color:${colors.lightPeriwinkle};
`;
const PeriodText = styled.Text`

    font-size:17;
    line-height:25;
    color:${colors.darkGrey};
`;

const PriceContainer = styled.View`
    margin-top:32;
    margin-bottom:32;
`;
const PriceTitleContainer = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin-bottom:20;
`;
const CalcButton = styled.TouchableOpacity`
    flex-direction:row;
`;
const CalcText = styled.Text`
    font-size:14;
    line-height:20;
    letter-spacing:-0.3;
    color:${colors.darkGrey};
    margin-right:4;
`;
const CalcIcon = styled.Image`
    width:16;
    height:18;
`;

const GenderContainer = styled.View`
    margin-top:32;
`;

const GenderInnerContainer = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;
const GenderInfoText = styled.Text`
    font-size:15;
    line-height:22;
    letter-spacing:-0.3;
    color:${colors.darkGrey};
`;

FilterView.propTypes = {
};

FilterView.defaultProps = {
}

export default FilterView;