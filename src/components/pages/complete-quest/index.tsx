import React, { useState } from 'react';
import { Button, TextArea } from '../../atoms';
import { Header } from '../../organisms/header';
import { useNavigate } from 'react-router';
import './index.scss';

export const CompleteQuest = () => {
  let navigate = useNavigate();
  const [questCompletionText, setTextCompletionText] = useState('');

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e);
    setTextCompletionText(e.target.value);
  };

  return (
    <>
      <Header />

      <div className="content-wrapper">
        <div className="flex flex-col text-center h-fit w-full mt-[10%]">
          <div className="text-4xl font-bold mb-4">Complete Quest</div>
          <div className="text-md">How did you complete this quest?</div>
        </div>

        {/* <div className="flex w-[50%] mt-8">
          <TextArea rows={4} placeholder="Explain yourself, peasant." maxLength={2000}/>
        </div> */}
        <div className="flex flex-col mt-8 w-[50%] rounded-t-md bg-gray-800 text-white p-4 justify-self-center complete-quest-text-area">
          <TextArea rows={4} placeholder="Explain yourself, peasant." maxLength={2000} onChange={onTextChange} style={{ background: 'none', color: 'white' }} />
        </div>

        <Button type="primary" size="large" style={{ borderRadius: '0px 0px 8px 8px' }} className="w-[50%]" disabled={questCompletionText.length < 5} onClick={() => navigate('/quest-results')}>
          Submit Quest
        </Button>
      </div>
    </>
  );
}
