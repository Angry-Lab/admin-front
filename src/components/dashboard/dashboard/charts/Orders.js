import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Typography from "@material-ui/core/Typography";

const data = [
    {
        name: 'Юр. лица', uv: 3.85, pv: 6.37, amt: 0,
    },
    {
        name: 'Премиум пользователи', uv: 2.47, pv: 4.12, amt: 0,
    },
    {
        name: 'Активные', uv: 1.6, pv: 9.87, amt: 0,
    },
    {
        name: 'Неактивные', uv: 0.94, pv: 0.29, amt: 0,
    },

];

export default class Orders extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        return (

            <>
                <Typography variant="h4" gutterBottom style={{marginBottom: 40, marginLeft: 190, marginTop: 70}}>
                    Диаграмма активности и платежеспособности в сегментах
                </Typography>
            <BarChart
                style={{marginLeft:220}}
                width={800}
                height={400}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar name="Активность" dataKey="pv" fill="#8884d8" />
                <Bar name="Платежеспособность" dataKey="uv" fill="#82ca9d" />
            </BarChart>
                </>
        );
    }
}
