import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        const {store} = this.props;

        this.state = {
            isHomeEnabled: store.state.view == 'hot',
            isFavoritesEnabled: store.state.view == 'favorites'
        };
        store.addListener(()=>{
            this.setState({
                'isHomeEnabled': store.state.view == 'hot',
                'isFavoritesEnabled': store.state.view == 'favorites'
            });
        })
    }
    onHomeClicked() {
        this.props.store.actions.clickHome();
    }
    onFavoritesClicked() {
        this.props.store.actions.clickFavorites();
    }
    render() {
        return (
            <Navbar>     

                <Nav>
                    <NavItem 
                        eventKey={1} 
                        href="#" 
                        className={this.state.isHomeEnabled ? 'selected-nav' : ''} 
                        onClick={this.onHomeClicked.bind(this)}
                    > Home </NavItem>
                    <NavItem 
                        eventKey={2} 
                        href="#" 
                        className={this.state.isFavoritesEnabled ? 'selected-nav' : ''} 
                        onClick={this.onFavoritesClicked.bind(this)}
                    > Favorites </NavItem>
                </Nav>

                <Nav pullRight>
                    <NavItem eventKey={1} href="#"> Logout </NavItem>
                </Nav>

                {/* <Navbar.Collapse>
                    <Navbar.Text pullRight>username</Navbar.Text>
                </Navbar.Collapse> */}
            </Navbar>
        );
    }
}

export default HeaderBar;
