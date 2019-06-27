import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import NormalButton from '../../../components/feedback/button/NormalButton';
import ImagePicker from 'react-native-image-crop-picker';
import BackButton from '../../../components/feedback/button/BackButton';
import colors from '../../../colors/colors'
import assets from "@assets/general";


@inject(stores => ({
    navTo:stores.nav.navTo,
}))
class RegisterAuth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image:undefined
            
        }
    }

    onPressAuth = () => {
        const { navTo } = this.props;
        navTo('RegisterComplete');
    }

    openCamera = () => {
        // ImagePicker.openCamera({
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            this.setState({ image:image })
        });
    }

    render() {
        const { image } = this.state;
        
        return (
            
            <Container>
                <BackButton>
                
                </BackButton>
                <Title>
                    학생증을 인증해주세요
                </Title>
                <Body1>
                    본인 얼굴과 함께 학생증을 촬영한 사진을
                </Body1>
                <Body2>
                    발송해주시면 확인 후 처리됩니다.
                </Body2>
                <Body3>
                    * 다음 화면에서 촬영이 이어집니다.
                </Body3>
                {!image &&
                    <ImageContainer>
                        <Image
                            source = {assets.iconConfirm}
                        />
                    </ImageContainer>
                }
                {image &&
                    <ImageContainer>
                        <Image
                            source={{
                                uri:image.path
                            }}
                        />
                    </ImageContainer>
                }
                <TextContainer>
                    <Text1>
                        * 촬영 시 빛 반사에 주의하세요. 정보 확인이
                    </Text1>
                    <Text2>
                        어렵거나, 훼손/유효하지 않은 학생증은
                    </Text2>
                    <Text3>
                        거절되거나 가입이 제한 될 수 있습니다.
                    </Text3>
                </TextContainer>
                
                
                {!image &&
                    <NormalButton
                        onPress={this.openCamera}
                        label={'인증 사진찍기'}
                    />
                }
                {image &&
                    <NormalButton
                        onPress={this.onPressAuth}
                        label={'인증하기'}
                        disabled={!image}
                    />
                }
                
            </Container>
        );
    }
}
RegisterAuth.propTypes = {
};

RegisterAuth.defaultProps = {
}

const Container = styled.ScrollView`
    flex:1;
    padding-horizontal:20;
`;

const Title = styled.Text`
    fontSize:24;
    fontWeight:bold;
    color:${colors.darkGrey};
    padding-top:26;
`;

const Body1 = styled.Text`
    fontSize:15;
`;

const Body2 = styled.Text`
    fontSize:15;
`;

const Body3 = styled.Text`
    padding-top:12;
    fontSize:15;
`;

const Text1 = styled.Text`
    fontSize:15;
    color:${colors.darkGrey};
`;

const Text2 = styled.Text`
    fontSize:15;
    color:${colors.darkGrey};
`;

const Text3 = styled.Text`
    fontSize:15;
    fontWeight:bold;
    color:${colors.darkGrey};
`;

const CameraButton = styled.TouchableOpacity`
`;
const CameraText = styled.Text`
`;

const ImageContainer = styled.View`
    padding-top:82;
    padding-bottom:24;
    alignItems:center;
    justifyContent:center;
`;

const TextContainer = styled.View`
    alignItems:center;
    justifyContent:center;
    padding-bottom:69;
`;

const Image = styled.Image`
    width:139;
    height:187;
`;

export default RegisterAuth;