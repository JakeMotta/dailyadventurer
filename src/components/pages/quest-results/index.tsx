import React from 'react';
import { Button } from 'antd';
import { Header } from '../../components/organisms/header';
import { useNavigate } from 'react-router';
import { auth } from '../../services';
import { Input } from 'antd';

const { TextArea } = Input;

export default function CompleteQuest() {
  let navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="content-wrapper">
        <div className="flex flex-col text-center h-fit w-full mt-[10%]">
          <div className="text-4xl font-bold mb-4">Complete Quest</div>
          <div className="text-md">Tell us how you completed this quest?</div>
        </div>

        {/* <div className="flex w-[50%] mt-8">
          <TextArea rows={4} placeholder="Explain yourself, peasant." maxLength={2000}/>
        </div> */}
        <div className="flex flex-col mt-8 w-[50%] rounded-t-md bg-gray-800 text-white p-4 justify-self-center">
          <TextArea rows={4} placeholder="Explain yourself, peasant." maxLength={2000} style={{ background: 'none', color: 'white' }} />
        </div>

        <Button type="primary" size="large" style={{ borderRadius: '0px 0px 8px 8px' }} className="w-[50%]" onClick={() => navigate('/complete-quest')}>
          Submit Quest
        </Button>
      </div>
    </>
  );
}
