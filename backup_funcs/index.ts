/* import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { addMsg } from './api';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

admin.initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs! 1', {structuredData: true});
  response.send('Hello from Firebase! 11');
});

export {
  addMsg,
};
 */

export * from './api';
