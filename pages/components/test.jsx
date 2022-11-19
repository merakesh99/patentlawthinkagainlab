import React, { useState } from "react";
import "./styles.css";

const data = [
  {
    id: "1",
    key: "1",
    title: "Title1",
    text: "Text1.",
    img: "1.jpg"
  },
  {
    id: "2",
    key: "2",
    title: "Title2",
    text: "Text2.",
    img: "2.jpg"
  },
  {
    id: "3",
    key: "3",
    title: "Title3",
    text: "Text3.",
    img: "3.jpg"
  },
  {
    id: "4",
    key: "4",
    title: "Title4",
    text: "Text4",
    img: "4.jpg"
  }
];

export default function App() {
  const [toggle, setToggle] = useState("1");
  return (
    <div className="App">
      {data.map(({ title, text, key, img }) => {
        return (
          <>
            <div className="main">
              <div className="text">
                <h1 onClick={() => setToggle(key)}>{title} </h1>
                {toggle === key ? (
                  <>
                    <p>{text}</p>
                  </>
                ) : null}
              </div>

              <div className="img">
                {toggle === key ? (
                  <>
                    <img src={img} key={key} className="photo" />
                  </>
                ) : null}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
