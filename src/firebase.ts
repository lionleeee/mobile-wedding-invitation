import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: 'AIzaSyAa9MuPh-ThnY5uZuApTjxyYnLkL-GIvNY',
  authDomain: 'mobile-wedding-502be.firebaseapp.com',
  databaseURL: 'https://mobile-wedding-502be-default-rtdb.firebaseio.com',
  projectId: 'mobile-wedding-502be',
  storageBucket: 'mobile-wedding-502be.appspot.com',
  messagingSenderId: '980180093340',
  appId: '1:980180093340:web:5910b863cd595b7d72e059',
};
export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
