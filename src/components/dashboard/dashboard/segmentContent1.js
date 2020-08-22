import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Orders from "../Orders";
import Graph from "./Graph";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";

const segmentContent1 = () => {
    return(
<>
            <Typography gutterBottom>
                Пользователи этого сегмента предпочитают заплатить меньше, но ждать свое отправление дольше.
                Мы могли бы предложить им более выгодный тариф или иное мотивирующее предложение.
            </Typography>
            <Typography gutterBottom>
                Данные пользователи характеризуются расстоянием и стоимостью отправления:
            </Typography>
            <Orders/>
            <Typography gutterBottom>
                Текущая прибыльность сегмента:
            </Typography>
            <Graph/>
</>
    );
}

export default segmentContent1();