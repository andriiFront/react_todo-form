import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const Notes = ({ notes, removeNote }) => (
  <TransitionGroup component="ul" className="list-group">
    {notes.map(note => (
      <CSSTransition
        key={note.id}
        classNames={'note'}
        timeout={1000}
      >
        <li
          className="list-group-item note"
        >
          <div>
            <strong>{note.title}</strong>
            <small>{note.date}</small>
          </div>

          <button
            type="button"
            onClick={() => removeNote(note.id)}
            className="btn btn-outline-danger btn-sm"
          >
            &times;
          </button>
        </li>
      </CSSTransition>
      
    ))}
  </TransitionGroup>
);
