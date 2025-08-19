import React, { useState } from "react";

function App() {
  // State for Counter
  const [count, setCount] = useState(0);

  // State for Live Text
  const [text, setText] = useState("");

  // Event for Alert Button
  const showAlert = () => {
    alert("Hello! You clicked the button 🚀");
  };

  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
      }}
    >
      <h1 style={{ color: "#2c3e50", textShadow: "2px 2px #ecf0f1" }}>
        ✨ React State & Events Demo ✨
      </h1>

      {/* 1️⃣ Counter Example */}
      <div
        style={{
          margin: "30px auto",
          padding: "25px",
          background: "white",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ color: "#16a085" }}>🔢 Counter: {count}</h2>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            margin: "5px",
            padding: "12px 18px",
            background: "#2ecc71",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Increment ➕
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            margin: "5px",
            padding: "12px 18px",
            background: "#e74c3c",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Decrement ➖
        </button>
      </div>

      {/* 2️⃣ Alert Button Example */}
      <div
        style={{
          margin: "30px auto",
          padding: "25px",
          background: "white",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ color: "#8e44ad" }}>🔔 Alert Example</h2>
        <button
          onClick={showAlert}
          style={{
            padding: "12px 25px",
            background: "linear-gradient(90deg, #3498db, #9b59b6)",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Click Me 🚀
        </button>
      </div>

      {/* 3️⃣ Live Text Update Example */}
      <div
        style={{
          margin: "30px auto",
          padding: "25px",
          background: "white",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ color: "#d35400" }}>⌨️ Live Text Update</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          style={{
            padding: "12px",
            width: "80%",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
            fontSize: "16px",
          }}
        />
        <p
          style={{
            marginTop: "15px",
            fontSize: "18px",
            color: "#2c3e50",
            fontWeight: "500",
          }}
        >
          You typed: <b>{text}</b>
        </p>
      </div>
    </div>
  );
}

export default App;
