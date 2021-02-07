import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const ForecastChart = ({data}) => {
    return (
        <ResponsiveContainer height={250} width={"95%"}>
            <LineChart margin={{top:20, bottom:20, left:5, right:5}} data={data}>
                <XAxis dataKey={"dayHour"} />
                <YAxis />
                <CartesianGrid />
                <Tooltip />
                <Legend />
                <Line type={"monotone"} stroke={"#FF0000"} dataKey={"max"} />    
                <Line type={"monotone"} stroke={"#0000FF"} dataKey={"min"} />   
            </LineChart>
        </ResponsiveContainer>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.shape({
        dayHour: PropTypes.string.isRequired,
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    }).isRequired
}

export default ForecastChart