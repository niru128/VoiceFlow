import React from 'react'
import { useState } from 'react'
import useRecorder from '../hooks/useRecorder.js'

export default function PushToTalk({onTranscript}) {

  const {recording, start, stop} = useRecorder(onTranscript);

  const handleClick = ()=>{
    if(recording){
      stop();
    }else{
      start();
    }
  }
  return (
    <div>

      <button onClick={handleClick} className={`rounded-full px-6 py-3 cursor-pointer hover:text-black text-lg font-medium transition ${recording ? "bg-red-600" : "bg-green-600" } `} >{recording ? "Listening" : "Hold to speak"}</button>
      
    </div>
  )
}
