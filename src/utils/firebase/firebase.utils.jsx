import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCEV3SYmAtvFUFwHrUhscUt6KvB4Q9ATLw',
  authDomain: 'plant-haus-db-b9419.firebaseapp.com',
  projectId: 'plant-haus-db-b9419',
  storageBucket: 'plant-haus-db-b9419.appspot.com',
  messagingSenderId: '868663880490',
  appId: '1:868663880490:web:529bf5a3744f9ddcfe8c53',
}

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}

//do this inside the firebase file to allow control over the application interfaces with external service (firebase). It allows a creation of the front end and the services is relies on
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  // if this changes then weve protected our front end from this.
  return await createUserWithEmailAndPassword(auth, email, password)
}
