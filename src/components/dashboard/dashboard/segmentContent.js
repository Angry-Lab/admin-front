import Typography from "@material-ui/core/Typography";
import Orders from "./charts/Orders";
import Graph from "./charts/Graph";
import React from "react";
import SegmentGraph11 from './charts/segmentGraph11';
import UrLicaGraph1 from './charts/urLicaGraph1';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import UrLicaGraph2 from "./charts/urLicaGraph2";
import PremiumUserChart1 from "./charts/premiumUserChart1";
import ActiveUserChart1 from "./charts/activeUserChart1";
import ActiveUserChart2 from "./charts/activeUserChart2";
import NotActiveUserChart2 from "./charts/notActiveUserChart";
import NotActiveUserChart from "./charts/notActiveUserChart";


export const segmentContent1 = () => <>
            <Typography gutterBottom>
                Практически все пользователи в этой категории отличаются большим количеством посылок и большой
                общей суммой с наложным платежем и ОЦ, а также большой выручкой на одного отправителя.
            </Typography>
                <UrLicaGraph1/>
            <UrLicaGraph2/>

            <Typography gutterBottom variant="h6">
                Предлагаемые услуги:
            </Typography>
            <Typography gutterBottom>
               🔹   Более выгодные тарифные планы.
            </Typography>
            <Typography gutterBottom>
               🔹   Страхование или кредит от Почта Банка.
            </Typography>
            <Typography gutterBottom>
                🔹   Выгодные условия для сотрудничества в первые месяцы, с целью увеличения клиентской базы.
            </Typography>
            <Typography gutterBottom>
               🔸   Исключить данный сегмент из смс-рассылок, пуш-уведомлений, в которых не было бы заинтересовано Юр. лицо.
            </Typography>


</>;


export const segmentContent2 = <>
    <Typography gutterBottom>
        В данной категории пользователи отличаются высокой стоимостью и весом посылок.
        90% данной группы пользуются безбланковой отправкой, а также имеют высокую суммарную стоимость отправлений.
    </Typography>
    <PremiumUserChart1/>
    <Typography gutterBottom variant="h6">
        Предлагаемые услуги:
    </Typography>
    <Typography gutterBottom>
        🔹   Программа лояльности и уровней, при которой клиенту будет предоставляться кешбек/бонусы на следующие
        отправки, и чем больше человек совершает посылок, тем больше он получает бонусов.
    </Typography>
    <Typography gutterBottom>
        🔹   Бесплатное страхование посылок при сумме посылок в месяц от определенного уровня.
    </Typography>
</>;


export const segmentContent3 = <>
    <Typography gutterBottom>
        <Typography gutterBottom>
            В данный сегмент входят пользователи, которые часто обращаются к сервисам Почты России.
        </Typography>
        <ActiveUserChart1/>
        <Typography gutterBottom>
            Данные пользователи также характеризуются меньшим интервалом между посылками:
        </Typography>
        <ActiveUserChart2/>
    </Typography>


    <Typography gutterBottom variant="h6">
        Предлагаемые услуги:
    </Typography>
    <Typography gutterBottom>
        🔹    Программа лояльности и уровней, при которой клиенту будет предоставляться кешбек/бонусы на следующие
        отправки, и чем больше человек совершает посылок, тем больше он получает бонусов.
    </Typography>
</>;


export const segmentContent4 = <>
    <Typography gutterBottom>
        В данный сегмент входят пользователи, которые редко обращаются к сервисам Почты России,
        либо совершали отправление лишь единожды.
    </Typography>
    <NotActiveUserChart/>

    <Typography gutterBottom variant="h6">
        Предлагаемые услуги:
    </Typography>
    <Typography gutterBottom>
        🔸   Исключить данный сегмент из смс-рассылок, пуш-уведомлений.
    </Typography>
</>;
