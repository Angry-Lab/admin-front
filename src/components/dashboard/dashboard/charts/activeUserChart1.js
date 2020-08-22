import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 'Юр. лица', uv: 4000, pv: 6.37, amt: 2400,
    },
    {
        name: 'Премиум пользователи', uv: 0, pv: 4.12, amt: 2210,
    },
    {
        name: 'Активные', uv: 2000, pv: 9.87, amt: 2290,
    },
    {
        name: 'Неактивные', uv: 2780, pv: 0.29, amt: 2000,
    },
];




export default class ActiveUserChart1 extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/vxq4ep63/';

    render() {
        return (
            <BarChart
                width={700}
                height={300}
                data={data}
                margin={{
                    top: 15, right: 30, left: 20, bottom: 15,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />

                <Legend />
                <Bar name='Активность' dataKey="pv" barSize={20} fill="#8884d8" />
            </BarChart>
        );
    }
}
