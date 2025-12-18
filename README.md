# Wispr Flow Clone 🎙️

A cross-platform voice-to-text application inspired by **Wispr Flow**, built using **Tauri**, **React**, and **Deepgram**.  
This project focuses on the core voice transcription workflow: push-to-talk recording, real-time speech recognition, and clean text output.

---

## 🚀 Features

- 🎤 **Push-to-Talk Voice Input**
- 🎧 **Microphone Access & Audio Capture**
- ⚡ **Real-Time Speech-to-Text (Deepgram)**
- 📝 **Sentence-based Transcription (New Line per Sentence)**
- 📋 **One-Click Copy to Clipboard**
- 🖥️ **Cross-Platform Desktop Support (Tauri)**
- 🌐 **Web Deployment via Vercel**
- ❌ Graceful error handling for permissions and network failures

---

## 🛠️ Tech Stack

### Frontend
- **React** (Vite)
- **JavaScript**
- **Tailwind CSS** (UI styling)

### Desktop
- **Tauri** (Rust-powered desktop shell)

### Speech Recognition
- **Deepgram Streaming API (WebSocket)**

### Tooling
- **Vite**
- **Git & GitHub**
- **Vercel** (Web deployment)

---

## 🧠 Architecture Overview

src/
├── components/
│ ├── Recorder.jsx # Handles recording state & UI
│ └── TranscriptBox.jsx # Displays transcription + copy feature
├── services/
│ ├── audio.js # Microphone capture & MediaRecorder
│ └── deepgram.js # WebSocket integration with Deepgram
├── utils/
│ └── copyToClipboard.js # Clipboard utility
├── App.jsx
└── main.jsx

Each layer has a single responsibility:
- UI → User interaction
- Audio → Microphone capture
- Deepgram → Transcription streaming

---

## 🧩 Prerequisites

Make sure you have the following installed:

- **Node.js** (v18+ recommended)
- **npm**
- **Git**

For desktop builds (Tauri):
- **Rust**
- **Visual Studio Build Tools (Windows)**
  - Install **Desktop development with C++**

---
Setup Instructions

Follow these steps to get the Wispr Flow Clone running on your machine.

1️⃣ Clone the Repository

Open your terminal and run:

git clone https://github.com/your-username/wispr-flow-clone.git
cd wispr-flow-clone

2️⃣ Install Dependencies

Make sure you have Node.js (v18+) and npm installed.

npm install


This will install all frontend dependencies (React, Tailwind, Vite, etc.).

3️⃣ Environment Variables

Create a .env file in the project root with your Deepgram API Key:

VITE_DEEPGRAM_API_KEY=your_deepgram_api_key_here


4️⃣ Running the Project (Web Version)

Start the development server:

npm run dev


Open your browser at:

http://localhost:5173


You should see the Wispr Flow Clone interface.
Test the push-to-talk, transcription, copy, and clear buttons.

5️⃣ Running as a Desktop App (Tauri)
Prerequisites:

Rust (install via https://www.rust-lang.org/tools/install
)

Visual Studio Build Tools (Windows only, include Desktop development with C++)

Steps:
npm install -D @tauri-apps/cli
npm run tauri dev


This opens the app in a native desktop window.
Microphone permissions may prompt depending on your OS.

6️⃣ Building for Production (Desktop)
npm run tauri build


Limitations

Limited Language Support – Currently, only English transcription is fully supported. Multi-language support requires extra Deepgram configuration.

No Advanced Text Editing – Transcribed text cannot be edited directly within the app; users must copy it to an external editor.

No Auto-Save or History – Transcriptions are stored only in memory. Refreshing the web page or closing the desktop app clears all previous transcripts.

File Export Missing – Transcriptions cannot currently be exported as files (e.g., TXT or PDF) directly from the app.
