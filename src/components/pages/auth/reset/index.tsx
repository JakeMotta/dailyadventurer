import React from "react";
import { Header } from "../../../components/organisms/header";
import "./index.scss";

export default function Reset() {
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <div className="page-title-wrapper w-full mt-[10%]">
          <div className="text-4xl font-bold mb-4">Reset</div>
        </div>
      </div>
    </>
  );
}
