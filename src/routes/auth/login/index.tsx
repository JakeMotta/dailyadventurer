import React from "react";
import { Header } from "../../../components/header";
import { Button } from "antd";
import { getAccessToken, googleSignIn } from "../../../api";
import { useAuthStore, UserProps } from "../../../store/auth";
import "./index.scss";

export default function Login() {
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
                console.log("res: ", incomingData);
                const { user } = incomingData;

                let userData: UserProps = {
                  email: user?.email,
                  createdAt: user?.metadata?.creationTime || null,
                  username: user?.displayName,
                  profile_picture_url: user?.photoURL,
                  // @ts-ignore
                  accessToken: user?.accessToken,
                  emailVerified: user?.emailVerified,
                };

                upsertUser(userData);
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
                console.log("acesstoken: ", res);
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
