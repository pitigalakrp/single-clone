import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBzzNCSNekUhuPNtUaW-1bMp1QRNGjuvko',
  authDomain: 'signal-dev-e21a3.firebaseapp.com',
  projectId: 'signal-dev-e21a3',
  storageBucket: 'signal-dev-e21a3.appspot.com',
  messagingSenderId: '737320104878',
  appId: '1:737320104878:web:0f5ac436223ee7799c8e3f',
  measurementId: 'G-FFSHLW065K'
}

let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { auth, db }
