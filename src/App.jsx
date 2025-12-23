import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import PushToTalk from './components/PushToTalk'
import TranscriptionBox from './components/TranscriptionBox'

function App() {
  // const [count, setCount] = useState(0)
  const [text, setText] = useState("");

  const [finalText, setFinalText] = useState("");
  const [interimText, setInterimText] = useState("");

  const handleTranscript = (transcript, isFinal) => {
    // console.log("UI received:", transcript, "final:", isFinal);
     console.log("UI received:", JSON.stringify(transcript), isFinal);
    if (isFinal) {
      setFinalText((prev) => prev + " " + transcript);
      setInterimText("");
    } else {
      setInterimText(transcript);
    }
  };


  return (
    <>
      {/* <p className='text-2xl'>Hello world</p> */}

      <div className='bg-gray-900 text-white h-screen p-4 gap-6 flex flex-col justify-center items-center'>

        <p className='text-2xl font-semibold' >VoiceFlow</p>

        <PushToTalk onTranscript={handleTranscript} />
        
        <TranscriptionBox  finalText={finalText}
  interimText={interimText}/>

      </div>
    </>
  )
}

export default App
