import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Bounds } from './Bounds';

const FooterWrapper = styled.footer`
    padding: .5rem 0 1rem 0;
`;

const Legal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Copyright = styled.a``;

const Disclaimer = styled.a``;

export default function Footer(props) {
    return (
        <FooterWrapper role="contentinfo">
            <Bounds>
                <Legal>
                    <Copyright
                        as={Link}
                        to={props.root}
                        aria-label={"Copyright 2020 " + props.title}
                        title={"Copyright 2020 " + props.title}
                    >
                        &copy; 2020 {props.title}
                    </Copyright>
                    <Disclaimer
                        as={Link}
                        to={props.disclaimer}
                        aria-label="Read Texas TSA disclaimer"
                        title="Read Texas TSA disclaimer"
                    >
                        Disclaimer
                    </Disclaimer>
                </Legal>
            </Bounds>
        </FooterWrapper>
    );
}