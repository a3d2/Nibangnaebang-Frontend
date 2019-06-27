import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';
import RoomList from './Room/RoomList';

@inject(stores => ({
    setNav:stores.nav.setNav,
    navTo:stores.nav.navTo,
    spin:stores.spinner.spin,
    loadRooms:stores.room.loadRooms,
}))
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    componentDidMount() {
        this.props.setNav(this.props.navigation);

        this.props.loadRooms();
    }
    

    render() {
        return (
            <Container>
                <RoomList/>
            </Container>
        );
    }
}

const Container = styled.View`
    flex:1;
`;

export default Home;