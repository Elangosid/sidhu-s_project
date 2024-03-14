// realmConfig.js
import { App, Credentials } from 'realm-web';

const app = new App({ id: 'application-1-zyzrj' });

const loginWithMobileNumber = async (mobileNumber) => {
  try {
    const credentials = Credentials.anonymous();
    await app.logIn(credentials);

    // Assuming you have a 'users' collection in your Realm app
    const usersCollection = app.currentUser
      .mongoClient('mongodb-atlas')
      .db('QUIKFLO')
      .collection('Retailer');
    const result = await usersCollection.updateOne(
      { _id: app.currentUser.id },
      { $set: { mobileNumber } }
    );

    if (result && result.modifiedCount > 0) {
      return true; // Mobile number stored successfully
    } else {
      return false; // Failed to store mobile number
    }
  } catch (error) {
    console.error('Failed to store mobile number:', error);
    return false; // or handle the error in some way
  }
};

export { app, Credentials, loginWithMobileNumber };
