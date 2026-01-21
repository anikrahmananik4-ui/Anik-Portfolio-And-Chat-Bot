
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI, Modality } from "@google/genai";
import { AssistantState } from '../types';
import { USER_DATA } from '../constants';

// Helper for Base64 Decoding
const decode = (base64: string) => {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

// Helper for Audio Decoding
async function decodeAudioData(data: Uint8Array, ctx: AudioContext): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const buffer = ctx.createBuffer(1, dataInt16.length, 24000);
  const channelData = buffer.getChannelData(0);
  for (let i = 0; i < dataInt16.length; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }
  return buffer;
}

const AnikAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<AssistantState>(AssistantState.IDLE);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [userInput, setUserInput] = useState('');
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Web Speech API (STT) for Bangla
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'bn-BD';
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        handleSendMessage(transcript);
      };

      recognitionRef.current.onerror = () => setStatus(AssistantState.IDLE);
      recognitionRef.current.onend = () => setStatus(AssistantState.IDLE);
    }
  }, []);

  const speakMessage = async (text: string) => {
    try {
      setStatus(AssistantState.SPEAKING);
      
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const audioBuffer = await decodeAudioData(decode(base64Audio), audioContextRef.current);
        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContextRef.current.destination);
        source.onended = () => setStatus(AssistantState.IDLE);
        source.start();
      } else {
        setStatus(AssistantState.IDLE);
      }
    } catch (err) {
      console.error("Speech generation error:", err);
      setStatus(AssistantState.IDLE);
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text }]);
    setUserInput('');
    setStatus(AssistantState.THINKING);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        Identity: You are Anik AI, the personal assistant of Sahadatur Rahman Anik.
        Profile: Smart, friendly, confident, light humor, polite, context aware.
        Anik's Info: Phone 01859334774, Email anikrahmananik4@gmail.com, Nationality: Bangladesh.
        Language: Speak primarily in Bangla (Bengali).
        Conversation history: ${messages.map(m => `${m.role}: ${m.text}`).join('\n')}
        User Input: ${text}
        Response:
      `;

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt
      });

      const responseText = result.text || "দুঃখিত, আমি বুঝতে পারছি না।";
      setMessages(prev => [...prev, { role: 'ai', text: responseText }]);
      speakMessage(responseText);
    } catch (err) {
      console.error(err);
      setStatus(AssistantState.IDLE);
    }
  };

  const startListening = () => {
    if (recognitionRef.current) {
      setStatus(AssistantState.LISTENING);
      recognitionRef.current.start();
    }
  };

  const toggleAssistant = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Greet on open if no messages
      if (messages.length === 0) {
        const greeting = "আসসালামু আলাইকুম, আমি আনিক এআই। আপনি কি জানতে চান?";
        setMessages([{ role: 'ai', text: greeting }]);
        speakMessage(greeting);
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-24 right-0 w-[350px] md:w-[400px] max-h-[600px] glass rounded-3xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(59,130,246,0.3)] border-blue-500/30"
          >
            <div className="p-4 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-b border-blue-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${status === AssistantState.IDLE ? 'bg-slate-500' : 'bg-blue-500 animate-pulse'}`} />
                <span className="font-orbitron text-xs tracking-widest text-white uppercase">Anik AI Core</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-blue-400 hover:text-white">✕</button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'glass border-blue-500/20 text-blue-100 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {status === AssistantState.THINKING && (
                <div className="flex justify-start">
                  <div className="glass border-blue-500/20 p-3 rounded-2xl rounded-tl-none flex gap-1">
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-blue-500/20 glass">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(userInput)}
                  placeholder="Ask in Bangla or English..."
                  className="flex-1 bg-slate-950/50 border border-blue-500/20 rounded-full px-4 py-2 text-xs text-white outline-none focus:border-blue-500 transition-all"
                />
                <button
                  onClick={() => handleSendMessage(userInput)}
                  className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white"
                >
                  ➤
                </button>
                <button
                  onClick={startListening}
                  className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                    status === AssistantState.LISTENING 
                      ? 'border-red-500 bg-red-500/20 animate-pulse text-red-400' 
                      : 'border-blue-500/30 bg-blue-500/10 text-blue-400'
                  }`}
                >
                  🎤
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleAssistant}
        className="w-16 h-16 rounded-full glass border-blue-500/50 flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(59,130,246,0.5)] group relative"
      >
        <div className={`absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping ${status !== AssistantState.IDLE ? 'opacity-100' : 'opacity-0'}`} />
        <span className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {status === AssistantState.IDLE ? '🤖' : '🧠'}
        </span>
        
        {/* Holographic Tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 glass border-blue-500/30 px-4 py-2 rounded text-xs font-orbitron text-blue-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none tracking-widest uppercase">
            Initialize Core AI
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default AnikAssistant;
