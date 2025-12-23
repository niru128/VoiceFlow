# 🎙️ VoiceFlow — Voice-to-Text Desktop App (Tauri + Deepgram)

VoiceFlow is a cross-platform desktop application that converts spoken voice into text using AI-powered speech recognition.  
It is built using **Tauri** for native desktop capabilities and **Deepgram** for accurate speech-to-text transcription.

This project is a **functional clone of the core workflow of Wispr Flow**, focusing on reliability, clean architecture, and real-world usability rather than pixel-perfect UI replication.

---

## 🚀 Core Features Implemented

### ✅ Push-to-Talk Voice Input
- Click-to-record interaction (optimized for laptop/desktop users)
- Clear start/stop controls
- Visual feedback during recording

### 🎙️ Microphone Access & Audio Capture
- Uses the browser MediaRecorder API
- Handles microphone permissions gracefully
- Captures high-quality Opus audio

### 🧠 Speech-to-Text using Deepgram
- Uses **Deepgram Nova-2** model
- Accurate, punctuated English transcription
- Reliable across Windows, macOS, and Linux

### 📝 Display Transcribed Text
- Transcribed text is displayed in a read-only textarea
- Ready to copy, paste, or insert elsewhere

### 🔴 Recording Controls & Status Indicator
- Recording states:
  - Idle
  - Recording
  - Transcribing
  - Done
- Clear visual status indicator for better UX

### ⚠️ Error Handling
- Microphone permission denial handling
- Network and API error handling
- Safe UI state reset on failures

---

## 🧩 Tech Stack

| Layer | Technology |
|------|-----------|
| Desktop Framework | Tauri |
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| Speech-to-Text | Deepgram API (Nova-2) |
| Audio Capture | MediaRecorder API |

---

## 🏗️ Architecture Overview

User clicks Record
↓
Microphone Audio Capture (MediaRecorder)
↓
Audio Blob Creation
↓
Deepgram Prerecorded API
↓
Transcript Returned
↓
Displayed in UI


---

## 🔄 Note on Real-Time Transcription (Important)

This project **initially implemented real-time audio streaming** to Deepgram using WebSockets.

However, during development on Windows laptops, browser-level audio preprocessing (noise suppression, echo cancellation, AGC) caused speech fragmentation, resulting in unreliable real-time transcription.

### Engineering Decision
To ensure **reliability and correctness**, the application uses **Deepgram’s Prerecorded API**:
- Audio is recorded first
- Sent immediately after recording stops
- Transcription returned within ~1 second (near real-time)

This is a **common production trade-off** and ensures consistent behavior across environments.

---

## 🛠️ Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm**
- **Rust** (stable)
- **Tauri CLI**
- **Deepgram API Key**

---

## 🧰 Installing Tauri (Required)

### 1️⃣ Install Rust

bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustc --version
cargo --version
cargo install tauri-cli
cargo tauri --version

3️⃣ Windows Users (Important)

Make sure Visual Studio Build Tools are installed with:

Desktop development with C++

Windows 10/11 SDK

▶️ Running the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/niru128/voiceflow-tauri.git
cd voiceflow-tauri
npm install

Create a .env file in the project root:
VITE_DEEPGRAM_API_KEY=your_deepgram_api_key_here

cargo tauri dev
The Tauri desktop window will open.

🧪 How to Use

Click Start / Hold to Speak

Speak clearly into the microphone

Click Stop

Wait ~1 second

View the transcribed text in the textarea

##ScreenShots
<img width="1266" height="945" alt="Screenshot 2025-12-23 145914" src="https://github.com/user-attachments/assets/87efd73d-c2d4-4a2a-b064-7714f6c4307b" />
<img width="1236" height="944" alt="Screenshot 2025-12-23 145924" src="https://github.com/user-attachments/assets/f7ec6d33-045a-40ce-9d34-be73aa916ea9" />
<img width="1144" height="920" alt="Screenshot 2025-12-23 145932" src="https://github.com/user-attachments/assets/e0329634-633b-40e3-a346-f69a8686e7f3" />

##Author 
Niranjan C B
