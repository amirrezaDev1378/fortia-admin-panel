import {item} from "@containers/layout/Menu/Menu";
import {AiOutlineDashboard, BsTelephoneForward, FaMoneyCheckAlt} from "react-icons/all";

export const getMenuItems = (): item[] => {
    return [
        {name: 'Dashboard', link: '/', icon: <AiOutlineDashboard size={40}/>},
        {name: 'Financial', link: '/financial', icon: <FaMoneyCheckAlt size={40} />, isActive: true},
        {name: 'Contact', link: '/contact', icon: <BsTelephoneForward size={40}/>},
    ]
}

//TODO optionally get items from server
