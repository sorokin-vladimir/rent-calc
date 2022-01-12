/* import {https} from 'firebase-functions';
import {firestore} from 'firebase-admin';

export const addMsg = https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await firestore()
      .collection('messages')
      .add({original: original});
  // Send back a message that we've successfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});
 */

export const a = 'a';
