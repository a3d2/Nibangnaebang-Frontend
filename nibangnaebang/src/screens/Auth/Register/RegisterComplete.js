import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Input from '../../../components/data/input/Input';
import { InputType } from '../../../components/data/input/TextInput';
import NormalButton from '../../../components/feedback/button/NormalButton';
import colors from '../../../colors/colors'
import assets from "@assets/general";

@inject(stores => ({
    registerComplete:stores.auth.registerComplete
}))
class RegisterComplete extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            
        }
    }

    onPressStart = () => {
        const { registerComplete } = this.props;
        const { params } = this.props.navigation.state;
        console.log("TCL: RegisterComplete -> onPressStart -> params", params)
        registerComplete(params);
    }

    render() {
        return (
            <Container>
                <ImageContainer>
                    <Image
                        source = {assets.iconOk}
                    />
                </ImageContainer>
                <Title>
                    인증이 완료되었습니다!
                </Title>
                <Text1>
                    니방내방에서 안전하고 즐겁게
                </Text1>
                <Text2>
                    쿨거래 하시길 바랍니다 :)
                </Text2>
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
    padding-horizontal:20;
`;

const ImageContainer = styled.View`
    justifyContent:center;
    alignItems:center;
`;

const Image = styled.Image`
    width:60;
    height:60;
`;

const Title = styled.Text`
    justify-content:center;
    align-items:center;
    fontSize:24;
    fontWeight:bold;
    color:${colors.darkGrey};
    padding-top:8;
    padding-bottom:15;
`;

const Text1 = styled.Text`
    fontSize:15;
    justify-content:center;
    align-items:center;
`;

const Text2 = styled.Text`
    fontSize:15;
    justify-content:center;
    align-items:center;
`;

export default RegisterComplete;