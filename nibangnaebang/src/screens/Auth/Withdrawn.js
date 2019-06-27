import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';
import NormalButton from '../../components/feedback/button/NormalButton';
import colors from '../../colors/colors';
import i18n from 'i18n-js';

@inject(stores => ({
    completeWithdrawal: stores.auth.completeWithdrawal
}))
class Withdrawn extends React.Component {
    handleWithdrawn = () => {
        const { completeWithdrawal } = this.props;
        completeWithdrawal();
    }

    render() {
        return (
            <Container>
                <TitleText>
                    {i18n.t('withdrawn')}
                </TitleText>
                <ButtonContainer>
                    <NormalButton
                        onPress={this.handleWithdrawn}
                        label={i18n.t('confirm')}
                    />
                </ButtonContainer>
            </Container>
        );
    }
}

Withdrawn.propTypes = {
}
Withdrawn.defaultProps = {
}

const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    padding-horizontal:77;
`;

const TitleText = styled.Text`
    font-size:24;
    color:${colors.mainPink};
    text-align:center;
`;
const ButtonContainer = styled.View`
    margin-top:40;
`;

export default Withdrawn;