/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import { getScreen } from '../../../utils/utils';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import assets from '@assets/general'

class Banner extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            index:0,
            loaded:false
        };
    }

    onLoad = (ref) => {
        this._carousel = ref;
        this.setState({ loaded:true });
    }

    handleTabChange = (index) => {
        this.setState({
            index
        });
    }

    _onClickItem = () => {
    }
    
    _renderItem = ({ item, index }) => {
        return (
            <BannerContainer 
                key={index}
                onPress={this._onClickItem}
            >
                <BannerImage source={{ uri:item }}/>
            </BannerContainer>
        );
    }

    get pagination () {
        const { images } = this.props;
        const { index } = this.state;

        return (
            <Pagination
                dotsLength={images.length}
                activeDotIndex={index}
                containerStyle={{
                    position:'absolute',
                    bottom:0,
                    paddingVertical:20,
                    paddingHorizontal:0,
                    alignSelf:"center"
                }}
                dotContainerStyle={{
                    padding:4,
                    marginHorizontal:0
                }}
                dotStyle={{
                    width: 20,
                    height: 4,
                    borderRadius: 2.5,
                    margin:0,
                    backgroundColor: 'white'
                }}
                inactiveDotStyle={{
                    width: 4,
                    height: 4,
                    borderRadius: 2
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={1}
                carouselRef={this._carousel}
                tappableDots={true}
            />
        );
    }

    renderArrow = (isLeft=true) => {
        return (
            <ArrowContainer 
                isLeft={isLeft}
                onPress={() => {
                    isLeft ? this._carousel.snapToPrev() : this._carousel.snapToNext();
                }}
            >
                <ArrowIcon source={isLeft ? assets.iconBannerLeft : assets.iconBannerRight}/>
            </ArrowContainer>
        )
    }

    render() {
        const { images } = this.props;
        const { loaded } = this.state;

        if(!images || !images.length) return null;

        const width = getScreen().width;

        return (
            <Container 
                id='Banner'
            >
                <InnerContainer>
                    <Carousel
                        ref={this.onLoad}
                        data={images.slice()}
                        onSnapToItem={this.handleTabChange}
                        renderItem={this._renderItem}
                        sliderWidth={width}
                        itemWidth={width}

                        loop={true}
                        autoplay={false}
                    />
                    { loaded && this.pagination }
                </InnerContainer>
                { loaded && this.renderArrow(true) }
                { loaded && this.renderArrow(false) }
            </Container>
        );
    }
}

Banner.propTypes = {
};

Banner.defaultProps = {
}


const Container = styled.View`
    position:relative;
    display:flex;
    flex-direction:row;
    width: 100%;
    height: 240px;
    background-color:grey;
`;

const BannerContainer = styled.TouchableOpacity`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const BannerImage = styled.Image`
    width: 100%;
    height: 100%;
`;

const InnerContainer = styled.View`
    width: 100%;
    height: 100%;
`;

const ArrowContainer = styled.TouchableOpacity`
    position:absolute;
    display:flex;
    align-self: center;
    left:${props => props.isLeft ? 0 : 'auto'};
    right:${props => props.isLeft ? 'auto' : 0};
    padding:20px;
    opacity:0.4;
`;

const ArrowIcon = styled.Image`
    width:18;
    height:32;
`;

export default Banner;