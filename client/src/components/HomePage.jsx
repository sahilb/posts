
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import HeaderBar from './Header.jsx';
import Content from './Content.jsx';
import store from '../store/store.js'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div> 
                <HeaderBar store={store}/>
                <Content store={store}/>
            </div>
        );
    }
}

export default HomePage;
