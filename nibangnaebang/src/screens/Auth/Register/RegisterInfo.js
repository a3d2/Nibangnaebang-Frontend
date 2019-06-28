import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Input from '../../../components/data/input/Input';
import { InputType } from '../../../components/data/input/TextInput';
import NormalButton from '../../../components/feedback/button/NormalButton';
import BackButton from '../../../components/feedback/button/BackButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


@inject(stores => ({
    navTo:stores.nav.navTo,
}))
class RegisterInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id:'',
            password:'',
            school:'',
        }
    }

    onIdChange = (value) => {
        this.setState({ id:value });
    }
    onPasswordChange = (value) => {
        this.setState({ password:value });
    }
    onSchoolChange = (value) => {
        this.setState({ school:value });
    }

    onPressNext = () => {
        const { navTo } = this.props;
        navTo('RegisterAuth', this.state);
    }

    render() {
        const { id, password } = this.state;
        
        return (
            <KeyboardAwareScrollView
                extraScrollHeight={150}
                enableOnAndroid={true}
                contentContainerStyle={{
                    flex:1,
                    paddingHorizontal:20,
                    paddingTop:getStatusBarHeight()
                }}
            >
                <BackButtonContainer>
                    <BackButton/>
                </BackButtonContainer>
                <Title>
                    회원가입
                </Title>
                
                <Input
                    placeholder={'아이디'}
                    returnKeyType={'next'}
                    inputStyle={{
                        marginTop:40
                    }}
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
                        marginTop:64
                    }}
                    onSubmitEditing={() => {
                        this.schoolRef.focus();
                    }}
                    onChangeText={this.onPasswordChange}
                />

                <Input
                    inputRef={ref => { this.schoolRef = ref; }}
                    placeholder={'학교'}
                    returnKeyType={'next'}
                    inputStyle={{
                        marginTop:64
                    }}
                    onSubmitEditing={this.onPressNext}
                    onChangeText={this.onSchoolChange}
                />

                <NormalButton
                    onPress={this.onPressNext}
                    containerStyle={{
                        marginTop:90
                    }}
                    label={'다음'}
                    disabled={!(id && password)}
                />
            </KeyboardAwareScrollView>
        );
    }
}
RegisterInfo.propTypes = {
};

RegisterInfo.defaultProps = {
}

const Container = styled.ScrollView`
`;
const BackButtonContainer = styled.View`
    left:-18;
`;
const Title = styled.Text`
    padding-top:16;
    color:black
    fontSize:24;
    fontWeight:bold;
`;


export default RegisterInfo;