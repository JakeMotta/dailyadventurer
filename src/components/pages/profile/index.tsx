import React from 'react';
import { Header } from '../../components/organisms/header';

export default function Profile() {
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <div className="flex flex-col text-center h-fit w-full mt-[10%]">
          <div className="text-4xl font-bold mb-4">Profile</div>
        </div>
      </div>
    </>
  );
}
