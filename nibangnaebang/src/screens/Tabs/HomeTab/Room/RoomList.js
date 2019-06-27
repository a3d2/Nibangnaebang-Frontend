import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import Card from '../../../../components/view/card/Card';

@inject(stores => ({
}))
class RoomList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    componentDidMount() {
    }

    render() {
        const { rooms } = this.props;
        if(!rooms) return;

        const roomsView = rooms.map((each) => {
            return (
                <Card key={each.id} data={each}/>
            )
        })

        return (
            <Container>
                {roomsView}
            </Container>
        );
    }
}
RoomList.propTypes = {
    rooms:PropTypes.array.isRequired,
};

RoomList.defaultProps = {
    rooms:[]
}

const Container = styled.ScrollView`
    flex:1;
`;

export default RoomList;