/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import colors from '../../../colors/colors';
import assets from "@assets/general";
import ImageCropPicker from 'react-native-image-crop-picker';
import { getScreen } from '../../../utils/utils';

class ImagePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image:props.defaultImage
        };
    }

    openPicker = () => {
        const dim = getScreen();
        const { onImageChange } = this.props;

        ImageCropPicker.openPicker({
            width: dim.width,
            height: dim.width,
            cropping: true,
            includeBase64:true
        }).then(image => {
            onImageChange && onImageChange(image);
            this.setState({ image:image.path });
        });
    }

    render() {
        const { image } = this.state;

        return (
            <Container
                onPress={this.openPicker}
            >
                <ImageContainer
                    source={{
                        uri:image
                    }}
                />
                <CameraIcon
                    source={assets.iconCamera}
                />
            </Container>
        );
    }
}

ImagePicker.propTypes = {
    defaultImage:PropTypes.string,
    onImageChange:PropTypes.func,
};

ImagePicker.defaultProps = {
}

const Container = styled.TouchableOpacity`
    width:107;
    height:107;
    border-radius:53.5;
    border-width:1px;
    border-color:${colors.lightPeriwinkle};
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const ImageContainer = styled.Image`
    width:97;
    height:97;
    border-radius:48.5;
    background-color:${colors.lightPeriwinkle};
`;

const CameraIcon = styled.Image`
    position:absolute;
    right:0;
    bottom: 0;
    width: 28;
    height: 28;
    border-radius:14;
`;

export default ImagePicker;