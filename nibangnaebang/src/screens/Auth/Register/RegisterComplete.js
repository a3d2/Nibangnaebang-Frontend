import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Input from '../../../components/data/input/Input';
import { InputType } from '../../../components/data/input/TextInput';
import NormalButton from '../../../components/feedback/button/NormalButton';

@inject(stores => ({
    login:stores.auth.login
}))
class RegisterComplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    onPressStart = () => {
        const { login } = this.props;
        login();
    }

    render() {
        return (
            <Container>
                <Title>
                    인증 완료
                </Title>
                <NormalButton
                    onPress={this.onPressStart}
                    containerStyle={{
                        marginTop:30
                    }}
                    label={'시작하기'}
                />
            </Container>
        );
    }
}
RegisterComplete.propTypes = {
};

RegisterComplete.defaultProps = {
}

const Container = styled.View`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Title = styled.Text`
`;

export default RegisterComplete;