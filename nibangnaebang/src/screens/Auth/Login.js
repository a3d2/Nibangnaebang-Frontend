import React from 'react';
import styled from 'styled-components/native';
import { inject } from 'mobx-react';
import Input from '../../components/data/input/Input';
import { InputType } from '../../components/data/input/TextInput';
import NormalButton from '../../components/feedback/button/NormalButton';

@inject(stores => ({
    setNav:stores.nav.setNav,
    login:stores.auth.login,
    tour:stores.auth.tour,
    navTo:stores.nav.navTo
}))
class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id:'',
            password:''
        }
    }
    componentDidMount = () => {
        this.props.setNav(this.props.navigation);
    }

    onIdChange = (value) => {
        this.setState({ id:value });
    }
    onPasswordChange = (value) => {
        this.setState({ password:value });
    }

    onPressLogin = () => {
        const { id, password } = this.state;
        const { login } = this.props;
        login();
    }

    onPressTour = () => {
        const { tour } = this.props;
        tour();
    }
    
    onPressRegister = () => {
        const { navTo } = this.props;
        navTo('RegisterInfo');
    }

    render() {
        const { id, password } = this.state;

        return (
            <Container>
                <Logo>
                    니방내방
                </Logo>
                <LoginContainer>
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
                        onSubmitEditing={this.onPressLogin}
                        onChangeText={this.onPasswordChange}
                    />
                    <NormalButton
                        onPress={this.onPressLogin}
                        containerStyle={{
                            marginTop:30
                        }}
                        label={'로그인'}
                        disabled={!(id && password)}
                    />
                </LoginContainer>
                <RegisterButton
                    onPress={this.onPressRegister}
                >
                    <RegisterText>
                        회원가입
                    </RegisterText>
                </RegisterButton>
                <TourButton
                    onPress={this.onPressTour}
                >
                    <TourText>
                        둘러보기
                    </TourText>
                </TourButton>
            </Container>
        );
    }
}

const Container = styled.View`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Logo = styled.Text`
`;
const LoginContainer = styled.View`
    padding-horizontal:40;
`;
const TourButton = styled.TouchableOpacity`
    position:absolute;
    right:20;
    top:50;
`;
const TourText = styled.Text`
`;

const RegisterButton = styled.TouchableOpacity`
`;
const RegisterText = styled.Text`
`;

export default Login;