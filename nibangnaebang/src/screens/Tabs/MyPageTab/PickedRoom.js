import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import RoomCard from '../../../components/view/card/RoomCard';

@inject(stores => ({
    navTo:stores.nav.navTo,
    rooms:stores.room.rooms
}))
class PickedRoom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    
    onPressItem = (item) => {
        const { navTo } = this.props;
        navTo('RoomDetail', item);
    }

    render() {
        const { rooms } = this.props;
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
                {roomsView}
            </Container>
        );
    }
}
PickedRoom.propTypes = {
};

PickedRoom.defaultProps = {
}

const Container = styled.ScrollView`
    flex:1;
`;

export default PickedRoom;