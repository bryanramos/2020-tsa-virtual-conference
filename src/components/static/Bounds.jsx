import * as React from 'react';
import styled from 'styled-components';

const BoundsWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 991px) {
        padding: 0 12px;
    }
`;

export const Bounds = (props) => (
    <BoundsWrapper>{props.children}</BoundsWrapper>
)