import React from "react";

export default function ExtraComponent() {
  const messages = [
    "Hello React!",
    "Learning JSX 😎",
    "GitHub language trick 🚀",
    "This is just for line count 💻",
    "React rules! ⚛",
  ];

  // Ek simple loop taaki lines badh jaayein
  const repeated = [];
  for (let i = 0; i < 50; i++) {
    repeated.push(<p key={i}>{messages[i % messages.length]}</p>);
  }

  return (
    <div style={styles.container}>
      <h2>Just a fun React Component 🌈</h2>
      <div>{repeated}</div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    color: "white",
    backgroundColor: "#282c34",
  },
};