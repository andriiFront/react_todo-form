import React, { useReducer } from 'react'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { REMOVE_NOTE, SHOW_LOADER, FETCH_NOTES, ADD_NOTE, HIDE_LOADER } from '../type';

const url = 'https://react-todo-form-default-rtdb.firebaseio.com';

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loader: false
  }

  const [state, dispatch] = useReducer(firebaseReducer, initialState)

  const showLoader = () => dispatch({ type: SHOW_LOADER })
  const hideLoader = () => dispatch({ type: HIDE_LOADER })

  const fetchNotes = async () => {
    showLoader()
    const res = await (await fetch(`${url}/notes.json`)).json();
    
    if(!res) {
      hideLoader()
      return
    }

    const payload = Object.keys(res).map(key => ({
      ...res[key],
      id: key
    }));
    console.log(res)
    dispatch({ type: FETCH_NOTES, payload })
  }

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON()
    }

    try {
      const res = await fetch(`${url}/notes.json`, {
        method: 'POST',
        body: JSON.stringify(note)
      })

      const payload = { ...note, id: (await res.json()).name };

      dispatch({
        type: ADD_NOTE,
        payload
      });
    } catch(e) {
      throw new Error(e.message)
    }
  }

  const removeNote = async (id) => {
    await fetch(`${url}/notes/${id}.json`, { method:'DELETE' })

    dispatch({
      type: REMOVE_NOTE,
      payload: id
    })
  }

  return (
    <FirebaseContext.Provider value={{
      showLoader,
      fetchNotes,
      addNote,
      removeNote,
      loading: state.loading,
      notes: state.notes
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}
