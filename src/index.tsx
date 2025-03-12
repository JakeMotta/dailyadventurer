import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/home";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router";
import Profile from "./routes/profile";
import "./global.css";
import "./index.scss";
import Login from "./routes/auth/login";
// import colors from 'tailwindcss/colors';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        // algorithm: theme.darkAlgorithm,
        components: {
          Slider: {
            // railBg: colors.gray[700],
          },
        },
        token: { colorPrimary: "#7cb305" },
      }}
    >
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/profile" element={<Profile />} />
            <Route index path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
