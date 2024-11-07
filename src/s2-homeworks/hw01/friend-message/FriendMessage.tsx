import React from "react";
import s from "./FriendMessage.module.css";
import { message0 } from "../HW1";
import Message from "../message/Message";

// создать тип вместо any и отобразить приходящие данные
type MessageProps = {
  id: string;
  avatar: string;
  name: string;
  text: string;
  time: number;
  message: string;
};
const FriendMessage = ({
  id,
  avatar,
  name,
  text,
  time,
  message,
}: MessageProps) => {
  return (
    <div id={"hw1-friend-message-" + id} className={s.friendMessage}>
      <div className={s.friendImageAndText}>
        <img
          id={"hw1-friend-avatar-" + id}
          alt={`${name}'s avatar`}
          className={s.friendImageAndText}

          // создаёт студент
          //
        />
        <div className={s.friendText}>
          <div id={"hw1-friend-name-" + id} className={s.friendName}>
            {name}
            {/* создаёт студент */}

            {/**/}
          </div>
          <pre id={"hw1-friend-text-" + id} className={s.friendMessageText}>
            {text}
            {/*создаёт студент*/}

            {/**/}
          </pre>
        </div>
      </div>
      <div id={"hw1-friend-time-" + id} className={s.friendTime}>
        {time}
        {/*создаёт студент*/}

        {/**/}
      </div>
    </div>
  );
};

export default FriendMessage;
