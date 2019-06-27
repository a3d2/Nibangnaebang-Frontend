import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import ImagePicker from 'react-native-image-crop-picker';
import TextInput from '../../../../components/data/input/TextInput';
import CheckButton from '../../../../components/feedback/button/CheckButton';

@inject(stores => ({
    navTo:stores.nav.navTo,
}))
class UploadStepDesc extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images:[],
            cautionChecked:false
        }
    }

    openPicker = () => {
        ImagePicker.openPicker({
            multiple:true
        }).then(images => {
            this.setState({ images:images })
        });
    }
    
    toggleCheckBox = () => {
        const { cautionChecked } = this.state;
        this.setState({ cautionChecked:!cautionChecked });
    }

    render() {
        const { images, cautionChecked } = this.state;

        const roomImages = images.map((each, idx) => {
            return (
                <RoomImageContainer key={idx}>
                    <RoomImage source={{
                        uri:each.path
                    }}/>
                </RoomImageContainer>
            )
        })

        return (
            <Container>
                <RoomImagesContainer
                    horizontal
                >
                    <AddRoomImageButton
                        onPress={this.openPicker}
                    >
                        <AddRoomImageButtonText>
                            추가
                        </AddRoomImageButtonText>
                    </AddRoomImageButton>
                    {roomImages}
                </RoomImagesContainer>
                <InputsContainer>
                    <TextInput
                        placeholder={'주소'}
                    />
                    <TextInput
                        placeholder={'제목'}
                    />
                    <TextInput
                        placeholder={'방을 자유롭게 소개해주세요'}
                        multiline
                    />
                </InputsContainer>
                <CheckButton
                    onPress={this.toggleCheckBox}
                    checked={cautionChecked}
                    label={'몰라 일단 체크'}
                />
            </Container>
        );
    }
}
UploadStepDesc.propTypes = {
};

UploadStepDesc.defaultProps = {
}

const Container = styled.ScrollView`
    flex:1;
`;

const RoomImagesContainer = styled.ScrollView`
    flex-direction:row;
`
const AddRoomImageButton = styled.TouchableOpacity`
`;
const AddRoomImageButtonText = styled.Text`
`;
const RoomImageContainer = styled.View`
`;
const RoomImage = styled.Image`
    width:50;
    height:50;
`;

const InputsContainer = styled.View`
`;

export default UploadStepDesc;