import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { nanoid } from "nanoid"
import { addDoc, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { notesCollection, db } from './firebase';


function App() {
  // Removing local storage usage
  // const [notes, setNotes] = React.useState(() => {
  //   console.log("Getting notes from local storage")
  //   return JSON.parse(localStorage.getItem("notes")) || []
  // });

  const [notes, setNotes] = React.useState([]);

  // `currentNoteId` state
  // const [currentNoteId, setCurrentNoteId] = React.useState(
  //   (notes[0] && notes[0].id) || ""
  // )

  // `currentNoteId` state
  const [currentNoteId, setCurrentNoteId] = React.useState("")

  const [tempNoteText, setTempNoteText] = React.useState("")

  console.log(`Current Note ID: ${currentNoteId}`);
  console.log(`Temp Note Text: ${tempNoteText}`);

  function findCurrentNote() {
    return notes.find(note => {
      return note.id === currentNoteId
    }) || notes[0]
  }

  const currentNote = findCurrentNote();

  const sortedNotes = notes.sort((a, b) => {
    return b.updatedAt - a.updatedAt
  });

  // Removing local storage usage
  // React.useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(notes))
  // }, [notes]);

  React.useEffect(() => {
    const unSubscribe = onSnapshot(notesCollection, (snapshot) => {
      // Sync up local notes array with snapshot data
      const notesArr = snapshot.docs.map(doc => (
        {
          id: doc.id,
          ...doc.data()
        }
      ));
      console.log(`Notes Array from Firestore: ${JSON.stringify(notesArr)}`)
      setNotes(notesArr);
    });
    return unSubscribe;
  }, []);

  React.useEffect(() => {
    if (!currentNoteId) {
      setCurrentNoteId(notes[0]?.id || "")
    }
  }, [notes]);

  React.useEffect(() => {
    if (currentNote) {
      setTempNoteText(currentNote?.body);
    }
  }, [currentNote]);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (tempNoteText !== currentNote?.body) {
        updateNoteFS(tempNoteText);
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [tempNoteText]);

  // eslint-disable-next-line
  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
    setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
  }

  async function createNewNoteFS() {
    const newNote = {
      body: "# Type your markdown note's title here",
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
    const newNoteRef = await addDoc(notesCollection, newNote)
    setCurrentNoteId(newNoteRef.id)
  }

  // eslint-disable-next-line
  function updateNote(text) {
    setNotes(oldNotes => oldNotes.map(oldNote => {
      return oldNote.id === currentNoteId
        ? { ...oldNote, body: text, updatedAt: Date.now() }
        : oldNote
    }).sort((a, b) => {
      if (a.id === currentNoteId) return -1
      if (b.id === currentNoteId) return 1
      return 0
    }))
  }

  async function updateNoteFS(text) {
    if (currentNoteId && text) {
      console.log(`Updating note: ${currentNoteId} with text: ${text}`);
      const docRef = doc(db, "notes", currentNoteId);
      await setDoc(docRef, { body: text, updatedAt: Date.now() }, { merge: true });
    }
  }

  // eslint-disable-next-line
  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
  }

  async function deleteNoteFS(event, noteId) {
    // event.stopPropagation();
    // Delete note from Firestore
    const docRef = doc(db, "notes", noteId);
    await deleteDoc(docRef);
  }

  return (
    <main>
      {
        notes.length > 0
          ?
          <Split
            sizes={[30, 70]}
            direction="horizontal"
            className="split"
          >
            <Sidebar
              notes={sortedNotes}
              currentNote={currentNote}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNoteFS}
              deleteNote={deleteNoteFS}
            />
            <Editor
              // currentNote={currentNote}
              noteText={tempNoteText}
              updateNote={setTempNoteText}
            />
          </Split>
          :
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button
              className="first-note"
              onClick={createNewNoteFS}
            >
              Create one now
            </button>
          </div>

      }
    </main>
  )
}


export default App;
