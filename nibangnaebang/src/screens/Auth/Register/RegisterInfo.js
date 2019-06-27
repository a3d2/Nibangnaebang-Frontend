import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Input from '../../../components/data/input/Input';
import { InputType } from '../../../components/data/input/TextInput';
import NormalButton from '../../../components/feedback/button/NormalButton';

@inject(stores => ({
    navTo:stores.nav.navTo,
}))
class RegisterInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id:'',
            password:''
        }
    }

    onIdChange = (value) => {
        this.setState({ id:value });
    }
    onPasswordChange = (value) => {
        this.setState({ password:value });
    }

    onPressNext = () => {
        const { navTo } = this.props;
        navTo('RegisterAuth');
    }

    render() {
        const { id, password } = this.state;
        
        return (
            <Container>
                <Title>
                    회원가입
                </Title>

                <Input
                    placeholder={'아이디'}
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                        this.passwordRef.focus();
                    }}
                    onChangeText={this.onIdChange}
                />
                <Input
                    inputRef={ref => { this.passwordRef = ref; }}
                    placeholder={'비밀번호'}
                    type={InputType.password}
                    inputStyle={{
                        marginTop:15
                    }}
                    onSubmitEditing={this.onPressNext}
                    onChangeText={this.onPasswordChange}
                />
                <NormalButton
                    onPress={this.onPressNext}
                    containerStyle={{
                        marginTop:30
                    }}
                    label={'다음'}
                    disabled={!(id && password)}
                />
            </Container>
        );
    }
}
RegisterInfo.propTypes = {
};

RegisterInfo.defaultProps = {
}

const Container = styled.ScrollView`
    flex:1;
`;
const Title = styled.Text`
`;

export default RegisterInfo;