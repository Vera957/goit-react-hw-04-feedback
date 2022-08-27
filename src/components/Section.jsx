import React from "react";
import { Box } from "./Box";
import propTypes from 'prop-types';

export const Section = ({title, children}) => {
    return (<Box
        gridGap="2"
        width="50%"
        ml="auto"
        mr="auto"
        display="flex"
        justifyItems="center"
        flexDirection="column"
        p='4'
        boxShadow="0px 10px 13px -7px #000000"
        mt='4'
        mb='4'
        bg='lightgrey'
        textAlign='center'
        alignItems='center'
    >
        <h2>{title}</h2>
        {children}
    </Box>)
}

Section.propTypes = {
    title: propTypes.string,
    children: propTypes.any,
}
