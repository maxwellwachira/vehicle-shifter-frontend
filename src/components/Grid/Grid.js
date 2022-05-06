import React from "react";

import { Wrapper, Content, DashGridStyle } from "../Grid/Grid.styles";


export const DashGrid = ({header, children}) => (
    <Wrapper>
         <h1>{header}</h1>
        <DashGridStyle>
            {children}
        </DashGridStyle>
    </Wrapper>
)

export const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

