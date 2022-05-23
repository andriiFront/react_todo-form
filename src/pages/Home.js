import React, { Fragment, useContext, useEffect } from 'react';
import { Form } from '../components/Form';
import { Loader } from '../components/Loader';
import { Notes } from '../components/Notes';
import { FirebaseContext } from '../context/Firebase/firebaseContext';

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext);
  
  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <Fragment>
      <Form />
      <hr />
      {loading
        ? <Loader />
        : <Notes notes={notes} removeNote={removeNote} />
      }
    </Fragment>
  );
}
