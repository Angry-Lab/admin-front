import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Typography from "@material-ui/core/Typography";

const data = [
    {
        name: 'Вес', uv: 1007, pv: 6548, hp: 1016, ab: 1022,
    },


    {
        name: 'Выручка / отправитель', uv: 18722, pv: 7487, hp: 7369, ab: 1821,
    },
    {
        name: 'Сумма ОЦ', uv: 4110, pv: 390, hp: 45, ab: 57,
    },

];


const data2 = [

    {
        name: 'Сумма НП', uv: 4032, pv: 10, hp: 0, ab: 0,
    },
    {
        name: 'Кол-во посылок', uv: 38, pv: 12, hp: 24, ab: 6,
    },
    {
        name: 'Интревал', uv: 484, pv: 728, hp: 336, ab: 311,
    },
    {
        name: 'Цена', uv: 501, pv: 812, hp: 304, ab: 300,
    },

];



export default class SegmentGraph11 extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        return (
            <>
                <Typography variant="h4" gutterBottom style={{marginBottom: 40, marginLeft: 290}}>
                    Диаграмма средних показателей сегментов
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
                <Bar dataKey="uv" name="Юр. лицо" fill="#8884d8" />
                <Bar dataKey="pv" name="Премиум пользователи" fill="#82ca9d" />
                <Bar dataKey="hp" name="Активные" fill="#82ca9d" />
                <Bar dataKey="ab" name="Нетактивные" fill="#82ca9d" />
            </BarChart>


            <BarChart
                style={{marginLeft:220}}
                width={800}
                height={400}
                data={data2}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" name="Юр. лицо" fill="#8884d8" />
                <Bar dataKey="pv" name="Премиум пользователи" fill="#82ca9d" />
                <Bar dataKey="hp" name="Активные" fill="#82ca9d" />
                <Bar dataKey="ab" name="Нетактивные" fill="#82ca9d" />
            </BarChart>
        </>
        );
    }
}
