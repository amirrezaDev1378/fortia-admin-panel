import {item} from "@containers/layout/Menu/Menu";
import {AiOutlineDashboard, AiOutlineMessage, AiOutlineSetting, AiOutlineUser, BsBagCheck, BsDoorOpen, TbReportMoney} from "react-icons/all";

export const getMenuItems = (): item[] => {
    const size = 30;
    return [
        {name: 'Dashboard', link: '/', icon: <AiOutlineDashboard size={size}/>},
        {name: 'Financial', link: '/financial', icon: <TbReportMoney size={size}/>, isActive: true},
        {name: "Conversations", link: "/messages", icon: <AiOutlineMessage size={size}/>},
        {name: "Orders", link: "/orders", icon: <BsBagCheck size={size}/>},
        {name:"Profile", link:"/profile", icon:<AiOutlineUser size={size}/>},


        {name:"Settings", link:"/settings", icon:<AiOutlineSetting size={size}/> , position:"bottom"},
        {name:"Logout", link:"/logout", icon:<BsDoorOpen size={size} /> , position:"bottom"}
    ]
}

//TODO optionally get items from server
