import React from "react";
import propTypes from "prop-types";

export const Notification = ({message}) => {
    return <span>{message}</span>
}

Notification.propTypes = {
    message: propTypes.string,
}