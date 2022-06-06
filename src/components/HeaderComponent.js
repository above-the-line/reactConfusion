import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container header-container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-0" href="/">
                            <img class="brand-image" src="assets/images/logo.png" height="30" width="41" alt="Ritorante Con Fusion"></img>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <Link className="nav-link" to="/home">
                                        <span className='fa fa-home fa-lg'></span> Home
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/aboutus">
                                        <span className='fa fa-info fa-lg'></span> About Us
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/menu">
                                        <span className='fa fa-list fa-lg'></span> Menu
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/contactus">
                                        <span className='fa fa-address-card fa-lg'></span> Contact Us
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className='pb-3 mb-4 rounded-3 jumbotron'>
                    <div className="container-fluid py-5 col-sm-12">
                        <h1 className="display-5 fw-bold">
                            Ristorante Con Fusion
                        </h1>
                        <p className="col-md-8 fs-4">We take inspiration from the world's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Header;