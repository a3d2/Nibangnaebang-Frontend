import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import RoomCard from '../../../../components/view/card/RoomCard';
import { Modal } from 'react-native'
import FilterView from '../../../../components/feedback/filter/FilterView';
import NormalButton from '../../../../components/feedback/button/NormalButton';
// import RoomMapView from '../../../../components/view/map/MapView';
import assets from "@assets/general";
import SearchInput from '../../../../components/data/input/SearchInput';
import { StatusBarHeight } from '../../../../utils/utils';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

@inject((stores) => {
    const rooms = stores.room.rooms;
    const roomsArray = Object.keys(rooms).map(each => {
        return rooms[each];
    })
    
    return {
        navTo:stores.nav.navTo,
        rooms:roomsArray,
        user:stores.auth.user,
        searchRoom:stores.room.search
    }
})
class RoomList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterVisible:false,
            mapVisible:false,
            region:{},
            searchValue:'',

            switchValue:undefined,
            price:0,
            startDate:null,
            endDate:null,

            searching:false,
        }
    }
    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition((position) => {
            // Create the object to update this.state.mapRegion through the onRegionChange function
            let region = {
              latitude:       position.coords.latitude,
              longitude:      position.coords.longitude,
              latitudeDelta:  0.00922*1.5,
              longitudeDelta: 0.00421*1.5
            }
            this.onRegionChange(region, region.latitude, region.longitude);
        }, (error)=>console.log(error));
    }
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }
    onRegionChange = (region, lastLat, lastLong) => {
        this.setState({
            region: region,
            lastLat: lastLat || this.state.lastLat,
            lastLong: lastLong || this.state.lastLong
        });
    }

    
    onPressItem = (item) => {
        const { navTo } = this.props;
        navTo('RoomDetail', item);
    }

    openFilter = () => {
        this.setState({ filterVisible:true })
    }
    closeFilter = () => {
        this.setState({ filterVisible:false })
    }

    openMap = () => {
        this.setState({ mapVisible:true })
    }
    closeMap = () => {
        this.setState({ mapVisible:false })
    }
    onSearchInputChange = (value) => {
        const searching = !!value;
        this.setState({ searchValue:value, searching:searching }, this.search)
    }


    onSwitcherValueChange = (value) => {
        this.setState({ switchValue:value });
    }
    onPriceChange = (value) => {
        this.setState({ price:value });
    }
    onSelectDates = (start, end) => {
        this.setState({ startDate:start, endDate:end });
    }

    onConfirmFilter = () => {
        this.closeFilter();
        this.search();
    }

    search = () => {
        const { searchRoom, user } = this.props;
        const { searchValue, switchValue, price, startDate, endDate } = this.state;

        let options = [];
        if(switchValue) {
            options.push(`#Gender=${user.Gender}`)
        }
        if(price) {
            options.push(`#Price=${price}`)
        }
        if(startDate && endDate) {
            options.push(`#During=${startDate.dateString}~${endDate.dateString}`)
        }

        searchRoom(searchValue, options.join('|')).then(result => {
            this.setState({
                searchResult:result
            })
        });
    }

    render() {
        let { rooms } = this.props;
        const { searchValue, searching, filterVisible, mapVisible, searchResult, region } = this.state;
        
        rooms = (searching ? searchResult : rooms) || []
        if(!rooms) return;

        const roomsView = rooms.map((each) => {
            return (
                <RoomCard 
                    key={each.No}
                    data={each}
                    onPressItem={this.onPressItem.bind(this, each)}
                />
            )
        })

        return (
            <Container>
                <SearchContainer>
                    <SearchInput
                        placeholder={'학교를 입력해주세요'}
                        onSearchInputChange={this.onSearchInputChange}
                        onSearch={this.search}
                    />
                </SearchContainer>
                <HeaderContainer>
                    <CountContainer>
                        <CountText>
                            {`${searchValue} 검색결과 ${rooms.length}건`}
                        </CountText>
                    </CountContainer>
                    <ButtonContainer>
                        <FilterButton
                            onPress={this.openFilter}
                        >
                            <FilterIcon source={assets.iconFilter}/>
                        </FilterButton>
                        {/* <MapButton
                            onPress={this.openMap}
                        >
                            <MapIcon source={assets.iconMap}/>
                        </MapButton> */}
                    </ButtonContainer>
                </HeaderContainer>
                {roomsView}
                <Modal
                    animationType={'slide'}
                    visible={filterVisible}
                    onRequestClose={this.closeFilter}
                >
                    <FilterContainer>
                        <FilterHeader>
                            <CloseButton
                                onPress={this.closeFilter}
                            >
                                <CloseIcon source={assets.iconClose}/>
                            </CloseButton>
                        </FilterHeader>
                        <FilterInnerContainer>
                            <FilterView
                                periodTitle={`거주 기간`}
                                priceTitle={`가격`}
                                genderTitle={`성별`}
                                onSelectDates={this.onSelectDates}
                                onPriceChange={this.onPriceChange}
                                onSwitchValueChange={this.onSwitcherValueChange}
                            />
                            <FilterButtonContainer>
                                <NormalButton
                                    onPress={this.onConfirmFilter}
                                    label={'적용하기'}
                                />
                            </FilterButtonContainer>
                        </FilterInnerContainer>
                    </FilterContainer>
                </Modal>
                <Modal
                    animationType={'slide'}
                    visible={mapVisible}
                    onRequestClose={this.closeMap}
                >
                    <MapContainer>
                        <FilterHeader>
                            <CloseButton
                                onPress={this.closeMap}
                            >
                                <CloseIcon source={assets.iconClose}/>
                            </CloseButton>
                        </FilterHeader>
                        {/* <RoomMapView
                            region={region}
                        /> */}
                    </MapContainer>
                </Modal>
            </Container>
        );
    }
}
RoomList.propTypes = {
};

RoomList.defaultProps = {
}

const Container = styled.ScrollView`
    padding-top: ${StatusBarHeight()};
    flex:1;
`;

const SearchContainer = styled.View`
    padding-horizontal:20;
    padding-vertical:4;
`;

const HeaderContainer = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    height:40;
    padding-horizontal:10;
`;
const CountContainer = styled.View`
    padding-left:10;
`;
const CountText = styled.Text`
`;

const ButtonContainer = styled.View`
    flex-direction:row;
    align-items:center;
`;
const FilterButton = styled.TouchableOpacity`
`;
const FilterIcon = styled.Image`
    width:23;
    height:22;
    padding:10px;
`;

const MapButton = styled.TouchableOpacity`
`;
const MapIcon = styled.Image`
    width:22;
    height:22;
    margin-left:8;
    padding:10px;
`;

const FilterContainer = styled.View`
    padding-top: ${getStatusBarHeight() + 10};
`;
const FilterHeader = styled.View`
    padding-left:8;
    padding-right:20;
    padding-vertical:4;
`;
const CloseButton = styled.TouchableOpacity`
    padding:10px;
    bottom:20;
`;
const CloseIcon = styled.Image`
    width:16;
    height:16;
`;
const FilterInnerContainer = styled.View`
    padding-horizontal:20;
`;
const FilterButtonContainer = styled.View`  
    margin-top:140;
    flex-shrink:1;
`;

const MapContainer = styled.View`
`;

export default RoomList;