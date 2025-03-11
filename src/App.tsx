import React from "react";
import { Button, ConfigProvider, Divider } from "antd";

// import colors from 'tailwindcss/colors';
import "./global.css";
import "./App.scss";
import { Header } from "./components/header";

let date = new Date();

function App() {
  return (
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
      <div className="app-wrapper">
        <Header />

        <div className="content-wrapper flex-col items-center">
          <div className="page-title-wrapper w-full mt-[10%]">
            <div className="text-4xl font-bold mb-4">Daily Adventurer</div>
            <div className="text-md">
              Welcome to Daily Quest. Every 24 hours, a new quest will appear.
              To participate, simply sign in, complete the quest irl, and tell
              us how you completed the quest
            </div>
          </div>

          <div className="quest-wrapper flex-col mt-4 w-[50%] rounded-t-md bg-gray-800 text-white p-4 justify-self-center">
            <div className="text-md font-bold">Today's Quest:</div>
            <div className="text-xs">
              {date.getMonth()} / {date.getDay()} / {date.getFullYear()}
            </div>
            <div className="flex w-full h-[2px] bg-primary mt-4 mb-2" />
            {/* <Divider
              style={{
                borderColor: "#7cb305",
                margin: "8px 0px 4px 0px",
                height: "3px",
              }}
            /> */}
            <div className="text-md">Cook Dinner</div>
          </div>

          <Button
            type="primary"
            size="large"
            style={{ borderRadius: "0px 0px 8px 8px" }}
            className="w-[50%]"
          >
            Sign In to Complete Quest
          </Button>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
