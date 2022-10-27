import React, {FC} from 'react';

interface props {
    name: string
    lastChat: string
    lastChatTime: string
    unreadMessages: number
    isOnline: boolean,
    avatar: any
}

const LastMessage: FC<props> = (props) => {
    const {name, lastChat, lastChatTime, unreadMessages, isOnline, avatar} = props;
    return (
        <div>

        </div>
    );
};

export default LastMessage;
