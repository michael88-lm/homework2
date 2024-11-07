import React from "react";
import s from "./Message.module.css";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
  id: string;
  avatar: string;
  name: string;
  text: string;
  time: number;
  message: string;
};

// нужно отобразить приходящие данные
const Message = ({
  id,
  avatar,
  name,
  text,
  time,
  message,
}: MessagePropsType) => {
  return (
    <div id={"hw1-message-" + id} className={s.message}>
      <div className={s.imageAndText}>
        <img
          id={"hw1-avatar-" + id}
          alt={`${name}'s avatar`}
          className="imageAndText"
          // создаёт студент

          //
        />
        <div className={s.text}>
          <div id={"hw1-name-" + id} className={s.name}>
            {name}
            {/*создаёт студент*/}

            {/**/}
          </div>
          <pre id={"hw1-text-" + id} className={s.messageText}>
            {text}
            {/*создаёт студент*/}

            {/**/}
          </pre>
        </div>
      </div>
      <div id={"hw1-time-" + id} className={s.time}>
        {time}
        {/*создаёт студент*/}

        {/**/}
      </div>
    </div>
  );
};

export default Message;
