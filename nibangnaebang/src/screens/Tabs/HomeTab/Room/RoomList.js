import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import RoomCard from '../../../../components/view/card/RoomCard';
import { Modal } from 'react-native'
import FilterView from '../../../../components/feedback/filter/FilterView';
import NormalButton from '../../../../components/feedback/button/NormalButton';
import RoomMapView from '../../../../components/view/map/MapView';

@inject(stores => ({
    navTo:stores.nav.navTo,
}))
class RoomList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterVisible:false,
            mapVisible:false,
            region:{}
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
    onConfirmFilter = () => {

    }

    render() {
        const { rooms } = this.props;
        const { filterVisible, mapVisible, region } = this.state;

        if(!rooms) return;

        const roomsView = rooms.map((each) => {
            return (
                <RoomCard 
                    key={each.id}
                    data={each}
                    onPressItem={this.onPressItem.bind(this, each)}
                />
            )
        })

        return (
            <Container>
                <HeaderContainer>
                    <FilterButton
                        onPress={this.openFilter}
                    >

                    </FilterButton>
                    <MapButton
                        onPress={this.openMap}
                    >
                        
                    </MapButton>
                </HeaderContainer>
                {roomsView}
                <Modal
                    animationType={'slide'}
                    visible={filterVisible}
                    onRequestClose={this.closeFilter}
                >
                    <FilterContainer>
                        <FilterView
                            title1={`거주 기간`}
                            title2={`가격 범위`}
                        />
                        <NormalButton
                            onPress={this.onConfirmFilter}
                            label={'적용하기'}
                        />
                    </FilterContainer>
                </Modal>
                <Modal
                    animationType={'slide'}
                    visible={mapVisible}
                    onRequestClose={this.closeMap}
                >
                    <MapContainer>
                        <RoomMapView
                            region={region}
                        />
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
    flex:1;
`;

const HeaderContainer = styled.View`
    flex-direction:row;
`;

const FilterButton = styled.TouchableOpacity`
    width:50;
    height:50;
    background-color:black;
`;

const MapButton = styled.TouchableOpacity`
    width:50;
    height:50;
    background-color:blue;
`;

const FilterContainer = styled.View`
`;

const MapContainer = styled.View`
    flex:1;
`;

export default RoomList;