import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/Alert/alertContext';
import { FirebaseContext } from '../context/Firebase/firebaseContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const { show, hide } = useContext(AlertContext);
  const { addNote } = useContext(FirebaseContext);

  const submitHandler = e => {
    e.preventDefault();

    if(value.trim()) {
      addNote(value.trim())
        .then(() => {
          show('Заметка была создана', 'success')
        })
        .catch(() => {
          show('Что-то пошло не так...', 'danger')
        });

      setValue('')

      setTimeout(() => hide(), 2000);
    } else {
      alert.show(' Введите название заметки')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Введите название заметки"
        />
      </div>
    </form>
  );
}
