import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { auth } from './services';
import { useAuthStore } from './store/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { parseGoogleUserAfterSignIn } from './utils';
import Profile from './screens/profile';
import Login from './screens/auth/login';
import Quest from './screens/quest';
import CompleteQuest from './screens/complete-quest';
import QuestResults from './screens/complete-quest';
import './global.css';
import './index.scss';

export default function App() {
  const upsertUser = useAuthStore((store) => store.upsertUser);

  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (currentUser) => {
      const handler = async () => {
        if (currentUser) {
          console.log('user is authenticated: ', { currentUser: auth.currentUser, email: auth.currentUser?.email });
          upsertUser(parseGoogleUserAfterSignIn(currentUser));
        } else {
          console.log('user is not authenticated');
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
            <Route index path="/" element={<Quest />} />
            <Route path="/complete-quest" element={<CompleteQuest />} />
            <Route path="/quest-results" element={<QuestResults />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
