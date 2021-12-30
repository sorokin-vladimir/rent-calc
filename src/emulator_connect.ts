import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getApp } from 'firebase/app';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

export function connect() {
  /** AUTH */
  const auth = getAuth();
  connectAuthEmulator(auth, 'http://localhost:9099');
  /** AUTH */

  /** FUNCTIONS */
  const functions = getFunctions(getApp());
  connectFunctionsEmulator(functions, 'localhost', 5001);
  /** FUNCTIONS */

  /** DATABASE */
  const db = getDatabase();
  // if (location.hostname === "localhost") {
  //   // Point to the RTDB emulator running on localhost.
  // }
  connectDatabaseEmulator(db, 'localhost', 9000);
  /** DATABASE */

  /** FIRESTORE */
  // firebaseApps previously initialized using initializeApp()
  const fs = getFirestore();
  connectFirestoreEmulator(fs, 'localhost', 8080);
}
/** FIRESTORE */
