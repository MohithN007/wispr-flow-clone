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

## 🔑 Environment Setup

Create a `.env` file in the project root:

```env
VITE_DEEPGRAM_API_KEY=your_deepgram_api_key
