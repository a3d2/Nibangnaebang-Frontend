import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import NormalButton from '../../../components/feedback/button/NormalButton';
import ImagePicker from 'react-native-image-crop-picker';

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
                <Title>
                    학생증을 찍어주세요
                </Title>

                <CameraButton
                    onPress={this.openCamera}
                >
                    <CameraText>
                        카메라라
                    </CameraText>
                </CameraButton>
                {image && 
                    <Image
                        source={{
                            uri:image.path
                        }}
                    />
                }

                <NormalButton
                    onPress={this.onPressAuth}
                    containerStyle={{
                        marginTop:30
                    }}
                    label={'인증하기'}
                    disabled={!image}
                />
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
`;
const Title = styled.Text`
`;

const CameraButton = styled.TouchableOpacity`
`;
const CameraText = styled.Text`
`;

const Image = styled.Image`
    width:300;
    height:300;
`;

export default RegisterAuth;