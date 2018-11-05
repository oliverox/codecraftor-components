import React from 'react';
import firebase from 'firebase/app';
import { SpinnerOverlay } from '../../components';

class Craft extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
    this.unsubscribeFromSnapshot = false;
    this.handleRemoteAction = this.handleRemoteAction.bind(this);
  }

  componentWillMount() {
    const { match } = this.props;
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });
    const docRef = db
      .collection(process.env.REACT_APP_CRAFTS_COLLECTION)
      .doc(match.params.craftId);
    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log('Craft exists...');
          this.unsubscribeFromSnapshot = docRef.onSnapshot(
            this.handleRemoteAction
          );
          this.setState({
            isLoading: false
          });
        } else {
          console.log('Craft does not exist');
        }
      })
      .catch(err => {
        console.log('Error getting document.', err);
      });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  handleRemoteAction(doc) {
    console.log('Current data: ', doc.data());
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
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
