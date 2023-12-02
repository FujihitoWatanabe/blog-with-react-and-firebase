import { initializeApp } from 'firebase/app';

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDH5QVQi3EYOoESK5R9eI7gSzj1EJ9QUuw',
  authDomain: 'blog-a95b1.firebaseapp.com',
  projectId: 'blog-a95b1',
  storageBucket: 'blog-a95b1.appspot.com',
  messagingSenderId: '158069704659',
  appId: '1:158069704659:web:eb7b022b24b29748699126',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
