import React from "react";
import { Box } from "./Box";
import { Notification } from "./Notification";
import styled from "styled-components";
import propTypes from "prop-types";


export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    total = good + bad + neutral;
    positivePercentage = Math.round(good / (good + neutral + bad) * 100);
    return (<>
        {positivePercentage >= 0 ?
            <Box
            textAlign="center">
                <FeedbackList>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total:{ total}</li>
                    <li>Positive feedback: {positivePercentage}%</li>
                </FeedbackList>
            </Box> : <Notification message="There is no feedback" />
            }</>)

}

const FeedbackList = styled.ul`
    list-style: none;
    padding: 10px;
    li{
        padding: 4px;
    }
`
Statistic.propTypes = {
    good: propTypes.number,
    neutral: propTypes.number,
    bad: propTypes.number,
    total: propTypes.number,
    positivePercentage: propTypes.number,
}
