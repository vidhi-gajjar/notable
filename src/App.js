import NoteProvider from 'Contexts/NoteContext';
import Notes from 'Module/Notes';
import { arrayOf } from 'prop-types';
import React, { useContext } from 'react';

export default function App() {
  return (
    <main className="container mx-auto min-h-screen p-8">
      <NoteProvider>
        <Notes />
      </NoteProvider>
    </main>
  )
}



