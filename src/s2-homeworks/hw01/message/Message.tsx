import React from "react";
import s from "./Message.module.css";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
  id: string;
  avatar: string;
  name: string;
  text: string;
  time: string;
};

// нужно отобразить приходящие данные
const Message = ({ id, avatar, name, text, time }: MessagePropsType) => {
  return (
    <div id={"hw1-message-1"} className={s.message}>
      <div className={s.imageAndText}>
        <img
          id={"hw1-avatar-1"}
          alt={`${name}'s avatar`}
          className="imageAndText"
          src={avatar}
          // создаёт студент

          //
        />
        <div className={s.text}>
          <div id={"hw1-name-1"} className={s.name}>
            {"Bred"}
            {/*создаёт студент*/}

            {/**/}
          </div>
          <pre id={"hw1-text-1"} className={s.messageText}>
            {"some new text"}
            {/*создаёт студент*/}

            {/**/}
          </pre>
        </div>
      </div>
      <div id={"hw1-time-1"} className={s.time}>
        {"21:00"}
        {/*создаёт студент*/}

        {/**/}
      </div>
    </div>
  );
};

export default Message;
