// import { useState } from "react";

// export default function Counter(){
//     let [count, setCount] = useState(0);

//     let incCount = () => {
//         setCount(count + 1);
//     };
//     return (
//         <div>
//             <h3>Count = {count}</h3>
//             <button onClick={incCount}>Increase Count</button>
//         </div>
//     );
// }




//     Edit Code



import { useState } from "react";
import "./Counter.css"; // 👈 CSS alag file me likhenge (for full-page styling)

export default function Counter() {
  const [count, setCount] = useState(0);

  const incCount = () => setCount(count + 1);
  const decCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div className="counter-page">
      <div className="counter-card">
        <h1>🔥 React Counter App 🔥</h1>

        <div className="sticker">🚀</div>

        <h2>
          Count = <span style={{ color: count >= 10 ? "#00FF7F" : "#61dafb" }}>{count}</span>
        </h2>

        <div className="btn-group">
          <button className="btn green" onClick={incCount}>➕ Increase</button>
          <button className="btn red" onClick={decCount}>➖ Decrease</button>
          <button className="btn yellow" onClick={resetCount}>🔁 Reset</button>
        </div>

        {count >= 10 && <p className="msg">🎉 Awesome! You reached double digits! 💪</p>}
      </div>
    </div>
  );
}