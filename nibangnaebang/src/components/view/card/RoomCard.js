/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import NormalButton from '../../feedback/button/NormalButton';
import colors from '../../../colors/colors';
import { IMAGE_URI } from '../../../constants/const';
import { numberWithCommas } from '../../../utils/utils';

class RoomCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { data, onPressItem, owner, onPressConfirm } = this.props;
        if(!data) return null;

        return (
            <Container
            >
                <InnerContainer
                    onPress={onPressItem}
                >
                    <LeftContainer>
                        <Image
                            source={{ uri:`${IMAGE_URI}/${data.Dir}` }}
                        />
                    </LeftContainer>
                    <RightContainer>
                        <SchoolName>
                            {data.School}
                        </SchoolName>
                        <Title
                            numberOfLines={2}
                            ellipsizeMode='tail'
                        >
                            {data.Title}
                        </Title>
                        <Period>
                            {`${data.ALStart}~${data.ALEnd}`}
                        </Period>
                        <Price>
                            {numberWithCommas(data.Pay)}
                        </Price>
                    </RightContainer>
                </InnerContainer>
                {owner && 
                    <NormalButton
                        onPress={onPressConfirm}
                        label={'거래 완료'}
                    />
                }
            </Container>
        );
    }
};

RoomCard.propTypes = {
    data:PropTypes.object.isRequired,
    onPressItem:PropTypes.func,
    onPressConfirm:PropTypes.func,
    owner:PropTypes.bool,
};

RoomCard.defaultProps = {
    owner:false
}

const Container = styled.TouchableOpacity`
    margin-bottom:20;
`;
const InnerContainer = styled.TouchableOpacity`
    padding-horizontal:20px;
    padding-vertical:16px;
    border-bottom-width:1px;
    border-bottom-color:rgba(0,0,0,0.06);
    flex-direction:row;
`;

const LeftContainer = styled.View`
`;

const Image = styled.Image`
    width:120;
    height:100;
    border-radius:8;
    background-color:${colors.veryLightGrey};
`;

const RightContainer = styled.View`
    margin-left:16;
    flex:1;
`;

const SchoolName = styled.Text`
    font-size:13;
    line-height:19;
    letter-spacing:-0.3;
    color:${colors.blueyGrey};
`;

const Title = styled.Text`
    font-size:17;
    font-weight:bold;
    line-height:21;
    letter-spacing:-0.3;
    color:${colors.darkGrey};
`;

const Period = styled.Text`
    font-size:13;
    line-height:18;
    letter-spacing:-0.3;
    color:${colors.darkGrey};
`;

const Price = styled.Text`
    font-size:13;
    line-height:18;
    letter-spacing:-0.3;
    color:${colors.darkGrey};
`;

export default RoomCard;