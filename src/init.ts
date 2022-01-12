import { initializeApp } from 'firebase/app';
import { connect } from './emulator_connect';

const {
  REACT_APP_API_KEY: apiKey,
  REACT_APP_AUTH_DOMAIN: authDomain,
  REACT_APP_PROJECT_ID: projectId,
  REACT_APP_STORAGE_BUCKET: storageBucket,
  REACT_APP_MESSAGING_SENDER_ID: messagingSenderId,
  REACT_APP_APP_ID: appId,
} = process.env;

export const app = initializeApp({
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
});

if (process.env.ENV === 'development') {
  connect();
}
