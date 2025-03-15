import { User } from 'firebase/auth';
import { UserProps } from '../store/auth';

// Parses incoming Google user data into common user format
export function parseGoogleUserAfterSignIn(user: User): UserProps {
  return {
    email: user?.email,
    createdAt: user?.metadata?.creationTime || null,
    username: user?.displayName,
    profile_picture_url: user?.photoURL,
    // @ts-ignore
    accessToken: user?.accessToken,
    emailVerified: user?.emailVerified,
  };
}
