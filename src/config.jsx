// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDG0EGCBYaw8zOKKhJA7-_HzTSidlIiMVE',
  authDomain: 'lasom-fb338.firebaseapp.com',
  projectId: 'lasom-fb338',
  storageBucket: 'lasom-fb338.appspot.com',
  messagingSenderId: '776218124910',
  appId: '1:776218124910:web:c05a064379f37bbeae3c7f',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const storage = getStorage()

export { db, app, storage }
