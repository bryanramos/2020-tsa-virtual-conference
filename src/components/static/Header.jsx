import * as React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Bounds } from '../static/Bounds';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavItems from './NavItems';

const HeaderWrapper = styled.header`
    background: #fff;
    position: sticky;
    top: 0px;
    z-index: 9999;
`;

const Hamburger = styled.div`
    span {
        width: 25px;
        height: 2px;
        background-color: #757575;
        display: block;
        margin: 6px auto;
        transition: all 0.3s ease-in-out;
    }
    ${Navbar.Toggler}[aria-expanded="true"] & span:nth-child(1) { 
        transform: translateY(8px) rotate(45deg);
    }
    ${Navbar.Toggler}[aria-expanded="true"] & span:nth-child(2) { 
        opacity: 0;
    }
    ${Navbar.Toggler}[aria-expanded="true"] & span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;

export default function Header(props) {
    
    const [expanded, setExpanded] = React.useState(false);

    return (
        <HeaderWrapper role="banner">
            <Bounds>
                <Navbar expanded={expanded} aria-label="Conference Navigation" expand="lg">
                    <Navbar.Brand 
                        as={Link}
                        to={props.root}
                        aria-label={props.title}
                        title={props.title}
                    >
                        {props.title}
                    </Navbar.Brand>   
                    <Navbar.Toggle 
                        aria-expanded={expanded}
                        aria-controls="conference-navigation"
                        onClick={() => setExpanded(expanded ? false : true)}
                    >
                        <Hamburger>
                            <span></span>
                            <span></span>
                            <span></span>
                        </Hamburger>
                    </Navbar.Toggle> 
                    <Navbar.Collapse id="conference-navigation">
                        <Nav className="ml-auto">
                            {
                                NavItems.map((item, number) => {
                                    if (item.external === true) {
                                        return (
                                            <Nav.Link
                                                key={number}
                                                href={item.path}
                                                aria-label={item.label}
                                                title={item.label}
                                                onClick={() => setExpanded(false)}
                                            >
                                                {item.text}
                                            </Nav.Link>
                                        );
                                    } else {
                                        return (
                                            <Nav.Link
                                                key={number}
                                                as={NavLink}
                                                to={item.path}
                                                aria-label={item.label}
                                                title={item.label}
                                                onClick={() => setExpanded(false)}
                                            >
                                                {item.text}
                                            </Nav.Link>
                                        );
                                    }
                                })
                            }
                        </Nav>
                    </Navbar.Collapse> 
                </Navbar>
            </Bounds>
        </HeaderWrapper>
    )
}