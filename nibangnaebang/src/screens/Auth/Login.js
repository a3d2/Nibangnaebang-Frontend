import React from 'react';
import styled from 'styled-components/native';
import { inject } from 'mobx-react';
import Input from '../../components/data/input/Input';
import { InputType } from '../../components/data/input/TextInput';
import NormalButton from '../../components/feedback/button/NormalButton';
import logoAssets from '../../assets/logo';
import colors from '../../colors/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
            <KeyboardAwareScrollView
                extraScrollHeight={150}
                enableOnAndroid={true}
                contentContainerStyle={{
                    display:'flex',
                    flex:1
                }}
            >
                <LogoContainer>
                    <LogoIcon source={logoAssets.mainLogo}/>
                </LogoContainer>
                <LoginContainer>
                    <InputContainer>
                        <Input
                            placeholder={'아이디'}
                            returnKeyType={'next'}
                            inputStyle={{
                                paddingBottom:8
                            }}
                            onSubmitEditing={() => {
                                this.passwordRef.focus();
                            }}
                            onChangeText={this.onIdChange}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            inputRef={ref => { this.passwordRef = ref; }}
                            placeholder={'비밀번호'}
                            type={InputType.password}
                            inputStyle={{
                                paddingBottom:8,
                                marginTop:15
                            }}
                            onSubmitEditing={this.onPressLogin}
                            onChangeText={this.onPasswordChange}
                        />
                    </InputContainer>
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
            </KeyboardAwareScrollView>
        );
    }
}

const Container = styled.View`
    flex:1;
    display:flex;
`;

const LogoContainer = styled.View`
    background-color:${colors.mainBlue};
    width:100%;
    height:284;
    justify-content:center;
    align-items:center;
`;
const LogoIcon = styled.Image`
    width:184;
    height:84;
`;
const LoginContainer = styled.View`
    margin-top:20;
    padding-horizontal:40;
`;
const TourButton = styled.TouchableOpacity`
    position:absolute;
    right:20;
    top:${getStatusBarHeight() + 10};
`;
const TourText = styled.Text`
    font-size:17;
    line-height:25;
    color:white;
`;
const InputContainer = styled.View`
    margin-top:20;
`;

const RegisterButton = styled.TouchableOpacity`
    align-self:center;
    margin-top:27;
    /* justify-self:center; */
`;
const RegisterText = styled.Text`
    font-size:13;
    line-height:19;
    letter-spacing:-0.3;
    color:${colors.steel};
`;

export default Login;