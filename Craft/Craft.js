import React from 'react';
import firebase from 'firebase/app';
import { SpinnerOverlay } from '../../components';

class Craft extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });
    const docRef = db.collection(process.env.REACT_APP_CRAFTS_COLLECTION).doc(match.params.craftId);
    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log('Craft exists...');
        } else {
          console.log('Craft does not exist');
        }
      })
      .catch(err => {
        console.log('Error getting document.', err);
      });
    console.log();
    return (
      <React.Fragment>
        {isLoading ? (
          <SpinnerOverlay display={isLoading} />
        ) : (
          <h2>Craft: {match.params.craftId}</h2>
        )}
      </React.Fragment>
    );
  }
}

export default Craft;
