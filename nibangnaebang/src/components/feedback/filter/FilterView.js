/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import CalendarModal from '../modal/CalendarModal';
import Input from '../../data/input/Input';

class FilterView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerVisible:false
        };
    }

    openCalendar = () => {
        this.setState({ drawerVisible:true });
    }
    closeCalendar = () => {
        this.setState({ drawerVisible:false });
    }

    render() {
        const { title1, title2, accessoryView, accContainerStyle } = this.props;
        const { drawerVisible } = this.state;

        return (
            <Container>
                <PeriodContainer>
                    <Title>
                        {title1}
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
                        {title2}
                    </Title>

                    <Input
                        placeholder={'가격을 입력해주세요'}
                        inputStyle={{
                            marginTop:15
                        }}
                        accessoryView={accessoryView}
                        accContainerStyle={accContainerStyle}
                    />
                </PriceContainer>
                <CalendarModal
                    visible={drawerVisible}
                    onRequestClose={this.closeCalendar}
                />
            </Container>
        );
    }
};

const Container = styled.View`
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

FilterView.propTypes = {
};

FilterView.defaultProps = {
}

export default FilterView;