import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

const theme = createTheme({
    palette:
        {
            primary: {
                main: '#4339F2',
                light:"#DAD7FE"
            },
            secondary: {
                main: 'rgb(88,108,166)',
            },
            error: {
                main: "#FF3A29",
                light:"#FFE5D3"
            },
            info:{
                main: '#02A0FC',
                light:"#CCF8FE"
            },
            warning:{
                main:"#FFB200",
                light:"#FFF5CC"
            },
            success:{
                main:"#34B53A",
                light:"#E2FBD7"
            }
        },
});
export default theme;
