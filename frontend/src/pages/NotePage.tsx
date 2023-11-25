import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

interface Note {
  body: string;
}

interface MatchParams {
  id: string;
}

const NotePage: React.FC<RouteComponentProps<MatchParams>> = ({ match, history }) => {
  let noteId = match.params.id;
  let [note, setNote] = useState<Note | null>(null);


  let getNote = async () => {
    if (noteId === 'new') return

    let response = await fetch(`/api/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  useEffect(() => {
    getNote()
  },[noteId])

  let createNote = async () => {
    fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let updateNote = async () => {
    fetch(`/api/notes/${noteId}/update/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let deleteNote = async () => {
    fetch(`/api/notes/${noteId}/delete/`, {
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    history.push('/')
  }

  let handleSubmit = () => {
    if (noteId !== 'new' && note && !note.body) {
        deleteNote();
    } else if (noteId !== 'new' && note) {
        updateNote();
    } else if (noteId === 'new' && note !== null) {
        createNote();
    }
    history.push('/');
};

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={handleSubmit} />
          
        </h3>
        {noteId !== 'new' ?(
          <button onClick={deleteNote}>Deletar</button>
        ):(
          <button onClick={handleSubmit}>Feito</button>
        )}
      </div>
      <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  );
};

export default NotePage;
