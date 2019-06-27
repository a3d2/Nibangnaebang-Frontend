import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';
import RoomList from './Room/RoomList';

@inject(stores => ({
    setNav:stores.nav.setNav,
    navTo:stores.nav.navTo,
    spin:stores.spinner.spin,
    rooms:stores.room.rooms
}))
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            region:{}
        }
    }
    componentDidMount() {
        const { navigation, setNav } = this.props;
        setNav(navigation);

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

    navToRoomDetail = (item) => {
        const { navTo } = this.props;
        navTo('RoomDeatil', item);
    }

    render() {
        const { rooms } = this.props;

        return (
            <Container>
                <RoomList
                    rooms={rooms}
                />
            </Container>
        );
    }
}

const Container = styled.View`
    flex:1;
`;

export default Home;