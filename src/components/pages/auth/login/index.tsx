import React from 'react';
import { Button } from '../../../atoms';
import { Header } from '../../../organisms/header';
import { getAccessToken, googleSignIn } from '../../../../api';
import { useAuthStore } from '../../../../store/auth';
import { parseGoogleUserAfterSignIn } from '../../../../utils';
import { useNavigate } from 'react-router';
import './index.scss';

export const Login = () => {
  const navigate = useNavigate();
  const user = useAuthStore((store) => store.user);
  const upsertUser = useAuthStore((store) => store.upsertUser);

  return (
    <>
      <Header />
      <div className="content-wrapper">
        <div className="page-title-wrapper w-full mt-[10%] items-center">
          <div className="text-4xl font-bold mb-4">Login</div>

          <Button
            type="primary"
            size="large"
            className="w-[50%]"
            onClick={() => {
              googleSignIn().then((incomingData) => {
                upsertUser(parseGoogleUserAfterSignIn(incomingData.user));
                navigate('/');
              });
            }}
          >
            Login with Google
          </Button>

          <Button
            type="primary"
            size="large"
            className="w-[50%] mt-4"
            onClick={() => {
              const handler = async () => {
                let res = await getAccessToken();
                console.log('acesstoken: ', res);
              };

              handler();
            }}
          >
            Check Auth
          </Button>
        </div>
      </div>
    </>
  );
}
