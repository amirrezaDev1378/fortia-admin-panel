import React , {FC} from 'react';
import styles from "./Financial.module.scss";
import DashboardContainer from "@containers/layout/DashboardContainer/DashboardContainer";
export interface FinancialProps {

}
const Financial:FC<FinancialProps> = (props) => {
    return (
        <DashboardContainer>
            Financial
        </DashboardContainer>
    );
};

export default Financial;
