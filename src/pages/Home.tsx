import {
    IonList, IonListHeader,
} from '@ionic/react';
import React, {Component} from 'react';
import FilteringUsers from "./FilteringUsers";
import Calendar from './Calendar';
import ClassList from './test';

class Home extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
           // <Calendar success={[1, 1, 0]}/>
            <ClassList/>
        );
    }
}

export default Home;
