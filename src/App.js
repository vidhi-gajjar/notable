import NoteProvider from 'Contexts/NoteContext';
import Notes from 'Module/Notes';
import React from 'react';

export default function App() {
  return (
    <>
      <header className='bg-indigo-700 h-100 p-4 text-white font-semibold flex justify-center items-center'>
        Notable
      </header>
      <main className="container mx-auto min-h-screen p-8 mb-16">
        <NoteProvider>
          <Notes />
        </NoteProvider>
      </main>
      <footer className='fixed bottom-0 left-0 w-full text-indigo-700 p-4 bg-white font-semibold text-xs flex justify-center items-center'>
        <p>Made by Vidhi Suthar &copy; 2022 </p>
      </footer>
    </>
  )
}



