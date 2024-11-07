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
  time: string;
};
const FriendMessage = ({ id, avatar, name, text, time }: MessageProps) => {
  return (
    <div id={"hw1-friend-message-1"} className={s.friendMessage}>
      <div className={s.friendImageAndText}>
        <img
          id={"hw1-friend-avatar-1"}
          alt={`${name}'s avatar`}
          src={"/message-sender/avatar.png"}
          className={s.friendImageAndText}

          // создаёт студент
          //
        />
        <div className={s.friendText}>
          <div id={"hw1-friend-name-1"} className={s.friendName}>
            {"Tom"}
            {/* создаёт студент */}

            {/**/}
          </div>
          <pre id={"hw1-friend-text-1"} className={s.friendMessageText}>
            {"Good man"}
            {/*создаёт студент*/}

            {/**/}
          </pre>
        </div>
      </div>
      <div id={"hw1-friend-time-1"} className={s.friendTime}>
        {"14:00"}
        {/*создаёт студент*/}

        {/**/}
      </div>
    </div>
  );
};

export default FriendMessage;
