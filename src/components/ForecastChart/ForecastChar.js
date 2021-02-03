import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const ForecastChart = ({data}) => {
    return (
        <div>
            <LineChart height={250} width={700} margin={{top:20, bottom:20, left:5, right:5}} data={data}>
                <XAxis dataKey={"dayHour"} />
                <YAxis />
                <CartesianGrid />
                <Tooltip />
                <Legend />
                <Line type={"monotone"} stroke={"#FF0000"} dataKey={"max"} />    
                <Line type={"monotone"} stroke={"#0000FF"} dataKey={"min"} />   
            </LineChart>
        </div>
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