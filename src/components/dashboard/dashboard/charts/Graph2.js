import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 30000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 10000,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 10, pv: 4800, amt: 20000,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 250200,
    },
    {
        name: 'Page G', uv: 8000, pv: 4300, amt: 10000,
    },
];

export default class Graph2 extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/exh283uh/';

    render() {
        return (
            <LineChart width={200} height={50} data={data} style={{marginRight: -115}}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        );
    }
}
