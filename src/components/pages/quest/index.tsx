import React from 'react';
import { Button } from '../../atoms';
import { Header } from '../../organisms/header';
import { useNavigate } from 'react-router';
import { auth } from '../../../services';

let date = new Date();

export const Quest = () => {
  let navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="content-wrapper">
        <div className="flex flex-col text-center h-fit w-full mt-[10%]">
          <div className="text-4xl font-bold mb-4">Daily Adventurer</div>
          <div className="text-md">Welcome to Daily Quest. Every 24 hours, a new quest will appear.</div>
        </div>

        <div className="flex flex-col mt-8 w-[50%] rounded-t-md bg-gray-800 text-white p-4 justify-self-center">
          <div className="text-md font-bold">Today's Quest</div>
          <div className="text-xs">
            {date.getMonth() + 1} / {date.getDate()} / {date.getFullYear()}
          </div>
          <div className="flex w-full h-[2px] bg-primary mt-4 mb-2" />
          <div className="text-md">Cook dinner for someone</div>
        </div>

        {auth.currentUser ? (
          <Button type="primary" size="large" style={{ borderRadius: '0px 0px 8px 8px' }} className="w-[50%]" onClick={() => navigate('/complete-quest')}>
            Complete Quest
          </Button>
        ) : (
          <Button type="primary" size="large" style={{ borderRadius: '0px 0px 8px 8px' }} className="w-[50%]" onClick={() => navigate('/login')}>
            Sign In to Complete Quest
          </Button>
        )}
      </div>
    </>
  );
}
