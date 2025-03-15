import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { auth } from './services';
import { useAuthStore } from './store/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { parseGoogleUserAfterSignIn } from './utils';
import Profile from './routes/profile';
import Login from './routes/auth/login';
import Home from './routes/home';
import './global.css';
import './index.scss';

export default function App() {
  const upsertUser = useAuthStore((store) => store.upsertUser);

  const [userSignedIn, setUserSignedIn] = useState<Boolean>(Boolean(auth.currentUser));
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (currentUser) => {
      console.log('checking authstatechange: ', { getauth: getAuth(), currentUser });
      const handler = async () => {
        if (currentUser) {
          console.log('user is authenticated: ', { currentUser: auth.currentUser, email: auth.currentUser?.email });
          setUserSignedIn(true);
          upsertUser(parseGoogleUserAfterSignIn(currentUser));
        } else {
          console.log('user is not authenticated');
          setUserSignedIn(false);
        }

        return;
      };

      handler()
        .catch((e) => {
          console.log('Auth Error: ', e);
        })
        .finally(() => {
          setLoading(false);
        });
    });

    // Remove listener
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      {loading ? (
        <div>Loading</div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
