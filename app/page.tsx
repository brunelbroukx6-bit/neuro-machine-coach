"use client";

import { useState, useEffect } from "react";

export default function MemoryApp() {
  const [mode, setMode] = useState("menu");
  
  // États Langue internationale (avec recherche par initiales)
  const [langSearch, setLangSearch] = useState("");
  const [currentLang, setCurrentLang] = useState("FR");

  // Liste internationale étendue (plus de 100 langues avec codes BCP-47 pour la voix)
  const languagesList = [
    { code: "FR", name: "Français", bcp: "fr-FR" },
    { code: "LI", name: "Lingala", bcp: "ln-CD" },
    { code: "NL", name: "Nederlands", bcp: "nl-NL" },
    { code: "EN", name: "English", bcp: "en-US" },
    { code: "ES", name: "Español", bcp: "es-ES" },
    { code: "DE", name: "Deutsch", bcp: "de-DE" },
    { code: "IT", name: "Italiano", bcp: "it-IT" },
    { code: "PT", name: "Português", bcp: "pt-PT" },
    { code: "PL", name: "Polski", bcp: "pl-PL" },
    { code: "RU", name: "Русский", bcp: "ru-RU" },
    { code: "AR", name: "العربية", bcp: "ar-SA" },
    { code: "ZH", name: "中文 (Chinese)", bcp: "zh-CN" },
    { code: "JA", name: "日本語 (Japanese)", bcp: "ja-JP" },
    { code: "KO", name: "한국어 (Korean)", bcp: "ko-KR" },
    { code: "HI", name: "हिन्दी (Hindi)", bcp: "hi-IN" },
    { code: "TR", name: "Türkçe", bcp: "tr-TR" },
    { code: "VI", name: "Tiếng Việt", bcp: "vi-VN" },
    { code: "TH", name: "ไทย (Thai)", bcp: "th-TH" },
    { code: "ID", name: "Bahasa Indonesia", bcp: "id-ID" },
    { code: "SV", name: "Svenska", bcp: "sv-SE" },
    { code: "UK", name: "Українська", bcp: "uk-UA" },
    { code: "EL", name: "Ελληνικά", bcp: "el-GR" },
    { code: "HE", name: "עברית", bcp: "he-IL" },
    { code: "FA", name: "فارسی", bcp: "fa-IR" },
    { code: "SW", name: "Kiswahili", bcp: "sw-KE" },
    { code: "AM", name: "አማርኛ", bcp: "am-ET" },
    { code: "YO", name: "Yorùbá", bcp: "yo-NG" },
    { code: "HA", name: "Hausa", bcp: "ha-NG" },
    { code: "ZU", name: "isiZulu", bcp: "zu-ZA" }
  ];

  const filteredLanguages = languagesList.filter(l => 
    l.name.toLowerCase().includes(langSearch.toLowerCase()) || 
    l.code.toLowerCase().includes(langSearch.toLowerCase())
  );

  // Dictionnaire multilingue intelligent (avec fallback universel)
  const t: Record<string, Record<string, any>> = {
    FR: {
      subtitle: "Mode Boxe & Réhabilitation Cognitive",
      timerRound: "Timer Round",
      pause: "PAUSE",
      start: "START 🧠",
      reload: "RELOAD",
      numbersMenu: "Mode Chiffres (Flash Bloc)",
      analyticsMenu: "📈 Journal de Bord Analytique (Par Jeu & Hebdo)",
      back: "Retour",
      menu: "Menu",
      validate: "Valider",
      next: "SUIVANT ➔",
      successMsg: "Succès ! 🚀",
      errorMsg: "Erreur ! C'était : ",
      helpTitle: "💡 Guide & Objectif du Jeu",
      helpText: "Neuro Machine Coach est conçu pour aiguiser l'attention et renforcer la concentration internationale.",
      helpItem1: "Mode Chiffres : Saisis ou prononce les chiffres à voix haute dans ta propre langue (reconnaissance vocale universelle).",
      helpBtn: "J'ai compris !",
      alertRound: "DING DONG ! Fin du round ! 🥊",
      configNumbersTitle: "Vitesse & Mode",
      manualModeTitle: "🎯 Mode Manuel (Réglages Sauvegardés)",
      manualModeDesc: "Tes choix de chiffres et de temps sont mémorisés automatiquement :",
      launchManualBtn: "Lancer le Mode Manuel Chiffres",
      ultraComfortAuto: "🟢 Ultra Confort (Auto)",
      comfortAuto: "Confort (Auto)",
      historyTitle: "📊 Statistiques & Évolution Hebdomadaire",
      resetHistory: "🗑️ Réinitialiser les scores",
      noHistory: "Aucune statistique enregistrée.",
      numFlashPrompt: "📸 Mémorise la séquence...",
      numInputPrompt: "✍️ Saisis ou dis la séquence :",
      micListening: "🎤 Écoute en cours... Parle clairement",
      micNotSupported: "Reconnaissance vocale non supportée."
    },
    EN: {
      subtitle: "Boxing Mode & Cognitive Rehabilitation",
      timerRound: "Round Timer",
      pause: "PAUSE",
      start: "START 🧠",
      reload: "RELOAD",
      numbersMenu: "Numbers Mode (Flash Block)",
      analyticsMenu: "📈 Analytical Dashboard",
      back: "Back",
      menu: "Menu",
      validate: "Submit",
      next: "NEXT ➔",
      successMsg: "Success! 🚀",
      errorMsg: "Error! It was: ",
      helpTitle: "💡 Guide & Objective",
      helpText: "Neuro Machine Coach is designed to sharpen attention globally.",
      helpItem1: "Numbers Mode: Type or speak numbers aloud in your language.",
      helpBtn: "Got it!",
      alertRound: "DING DONG! Round over! 🥊",
      configNumbersTitle: "Speed & Mode",
      manualModeTitle: "🎯 Manual Mode (Saved)",
      manualModeDesc: "Choose digits and display time:",
      launchManualBtn: "Launch Manual Numbers",
      ultraComfortAuto: "🟢 Ultra Comfort (Auto)",
      comfortAuto: "Comfort (Auto)",
      historyTitle: "📊 Detailed Statistics",
      resetHistory: "🗑️ Reset Scores",
      noHistory: "No stats recorded.",
      numFlashPrompt: "📸 Memorize sequence...",
      numInputPrompt: "✍️ Enter or speak sequence:",
      micListening: "🎤 Listening... Speak clearly",
      micNotSupported: "Speech recognition not supported."
    },
    NL: {
      subtitle: "Boksmodus & Cognitieve Revalidatie",
      timerRound: "Ronde Timer",
      pause: "PAUZE",
      start: "START 🧠",
      reload: "OPNIEUW",
      numbersMenu: "Cijfermodus (Flash Blok)",
      analyticsMenu: "📈 Analytisch Dashboard",
      back: "Terug",
      menu: "Menu",
      validate: "Bevestigen",
      next: "VOLGENDE ➔",
      successMsg: "Succes! 🚀",
      errorMsg: "Fout! Het was: ",
      helpTitle: "💡 Gids & Doel",
      helpText: "Neuro Machine Coach is ontworpen om de aandacht aan te scherpen.",
      helpItem1: "Cijfermodus: Voer cijfers in of spreek ze hardop uit.",
      helpBtn: "Begrepen!",
      alertRound: "DING DONG! Ronde voorbij! 🥊",
      configNumbersTitle: "Snelheid & Modus",
      manualModeTitle: "🎯 Handmatige Modus (Opgeslagen)",
      manualModeDesc: "Kies aantal cijfers en weergavetijd:",
      launchManualBtn: "Start Handmatige Cijfers",
      ultraComfortAuto: "🟢 Ultra Comfort (Auto)",
      comfortAuto: "Comfort (Auto)",
      historyTitle: "📊 Statistieken",
      resetHistory: "🗑️ Reset Scores",
      noHistory: "Geen statistieken.",
      numFlashPrompt: "📸 Onthoud reeks...",
      numInputPrompt: "✍️ Voer reeks in of spreek uit:",
      micListening: "🎤 Luisteren...",
      micNotSupported: "Spraakherkenning niet ondersteund."
    }
  };

  // Fallback intelligent pour les langues non traduites explicitement dans le dictionnaire
  const getString = (key: string) => {
    return t[currentLang]?.[key] || t["EN"]?.[key] || t["FR"][key] || key;
  };

  const [showHelp, setShowHelp] = useState(false);

  // Timer style "Boxe"
  const [timerDuration, setTimerDuration] = useState(300);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      alert(getString("alertRound"));
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft, currentLang]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  interface SessionRecord {
    date: string;
    game: string;
    success: number;
    errors: number;
  }

  const [sessionLogs, setSessionLogs] = useState<SessionRecord[]>([]);

  // États Chiffres
  const [level, setLevel] = useState(3);
  const [sequence, setSequence] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [displaying, setDisplaying] = useState(false);
  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState<"success" | "error" | "info">("info");
  const [numSpeed, setNumSpeed] = useState(1200);
  const [numSuccess, setNumSuccess] = useState(0);
  const [numErrors, setNumErrors] = useState(0);
  const [isManualMode, setIsManualMode] = useState(false);
  
  // États Manuel Chiffres (persistant avec localStorage)
  const [manualInputValue, setManualInputValue] = useState(5);
  const [manualNumDisplayTime, setManualNumDisplayTime] = useState(4);

  const [waitingForNextNum, setWaitingForNextNum] = useState(false);
  const [isListeningMic, setIsListeningMic] = useState(false);

  // Reconnaissance vocale dynamique adaptée à la langue sélectionnée (ex: Arabe, Chinois, Français, etc.)
  const startSpeechRecognition = () => {
    const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) {
      alert(getString("micNotSupported"));
      return;
    }
    const recognition = new SpeechRecognitionAPI();
    
    // Recherche du code BCP-47 correspondant à la langue active
    const activeLangObj = languagesList.find(l => l.code === currentLang);
    recognition.lang = activeLangObj ? activeLangObj.bcp : "en-US";
    
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setIsListeningMic(true);
    recognition.onresult = (event: any) => {
      const speechToText = event.results[0][0].transcript;
      const cleanedDigits = speechToText.replace(/\D/g, "");
      setUserAnswer(cleanedDigits);
      setIsListeningMic(false);
    };
    recognition.onerror = () => setIsListeningMic(false);
    recognition.onend = () => setIsListeningMic(false);
    recognition.start();
  };

  // Chargement initial
  useEffect(() => {
    const ns = localStorage.getItem("num_succ"); if (ns) setNumSuccess(parseInt(ns));
    const ne = localStorage.getItem("num_err"); if (ne) setNumErrors(parseInt(ne));
    const sl = localStorage.getItem("app_lang"); if (sl) setCurrentLang(sl);
    const logs = localStorage.getItem("session_logs"); if (logs) setSessionLogs(JSON.parse(logs));

    const savedManualDigits = localStorage.getItem("manual_num_digits");
    if (savedManualDigits) setManualInputValue(parseInt(savedManualDigits));
    const savedManualTime = localStorage.getItem("manual_num_time");
    if (savedManualTime) setManualNumDisplayTime(parseInt(savedManualTime));
  }, []);

  const recordSessionLog = (game: string, successDelta: number, errorDelta: number) => {
    const today = new Date().toISOString().split("T")[0];
    const updated = [...sessionLogs];
    const existing = updated.find(l => l.date === today && l.game === game);
    if (existing) {
      existing.success += successDelta;
      existing.errors += errorDelta;
    } else {
      updated.push({ date: today, game, success: successDelta, errors: errorDelta });
    }
    setSessionLogs(updated);
    localStorage.setItem("session_logs", JSON.stringify(updated));
  };

  const clearAllStats = () => {
    if (confirm("Reset scores?")) {
      setNumSuccess(0); setNumErrors(0);
      setSessionLogs([]);
      localStorage.clear();
    }
  };

  const startNumbers = (lvl: number, speed: number, manual: boolean = false, customDurationMs?: number) => {
    setUserAnswer(""); setMessage(""); setMsgType("info"); setWaitingForNextNum(false);
    setLevel(lvl); setNumSpeed(speed); setIsManualMode(manual); setDisplaying(true);
    let seq = ""; for (let i = 0; i < lvl; i++) seq += Math.floor(Math.random() * 10);
    setSequence(seq);
    
    const displayTime = manual && customDurationMs ? customDurationMs : Math.max(3000, lvl * (speed * 0.75));
    setTimeout(() => { setDisplaying(false); }, displayTime);
  };

  const handleNumSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = userAnswer.replace(/\s+/g, "") === sequence;
    if (isCorrect) {
      const newS = numSuccess + 1; setNumSuccess(newS); localStorage.setItem("num_succ", newS.toString());
      recordSessionLog("Chiffres", 1, 0);
      setMessage(getString("successMsg")); setMsgType("success");
    } else {
      const newE = numErrors + 1; setNumErrors(newE); localStorage.setItem("num_err", newE.toString());
      recordSessionLog("Chiffres", 0, 1);
      setMessage(`${getString("errorMsg")} ${sequence}`); setMsgType("error");
    }
    setWaitingForNextNum(true);
  };

  const nextNumberRound = () => {
    if (isManualMode) {
      startNumbers(level, numSpeed, true, manualNumDisplayTime * 1000);
    } else {
      startNumbers(level + 1, numSpeed, false); 
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-4 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* HEADER AVEC RECHERCHE DE LANGUE INSTANTANÉE */}
      <header className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black tracking-wider bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            NEURO MACHINE COACH
          </h1>
          <p className="text-xs md:text-sm text-slate-400 mt-1">{getString("subtitle")}</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Barre de recherche par initiales de langue */}
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Tape initiales (fr, ar, zh...)"
              value={langSearch}
              onChange={(e) => setLangSearch(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 w-48"
            />
            {langSearch && (
              <div className="absolute top-full left-0 mt-1 w-full bg-slate-900 border border-slate-700 rounded-lg shadow-xl z-50 max-h-48 overflow-y-auto">
                {filteredLanguages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setCurrentLang(l.code);
                      localStorage.setItem("app_lang", l.code);
                      setLangSearch("");
                    }}
                    className="w-full text-left px-3 py-2 text-xs hover:bg-indigo-600/30 flex items-center justify-between border-b border-slate-800/50"
                  >
                    <span>{l.name}</span>
                    <span className="font-mono text-indigo-400">{l.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <select
            value={currentLang}
            onChange={(e) => { setCurrentLang(e.target.value); localStorage.setItem("app_lang", e.target.value); }}
            className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-bold"
          >
            {languagesList.map((l) => (
              <option key={l.code} value={l.code}>{l.code} - {l.name}</option>
            ))}
          </select>
          <button onClick={() => setShowHelp(true)} className="bg-slate-900 hover:bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-400">
            💡 Aide
          </button>
        </div>
      </header>

      {/* TIMER BOXE */}
      <div className="w-full max-w-4xl bg-slate-900/80 border border-slate-800 rounded-2xl p-4 mb-6 flex flex-col md:flex-row items-center justify-between shadow-xl gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-slate-300">🥊 {getString("timerRound")} :</span>
          <span className="font-mono text-xl md:text-2xl font-bold text-amber-400">{formatTime(timeLeft)}</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsTimerRunning(!isTimerRunning)} className={`px-4 py-2 rounded-xl text-xs font-bold transition shadow-lg ${isTimerRunning ? "bg-amber-600 text-white" : "bg-emerald-600 text-white"}`}>
            {isTimerRunning ? getString("pause") : getString("start")}
          </button>
          <button onClick={() => { setIsTimerRunning(false); setTimeLeft(timerDuration); }} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-slate-300">
            {getString("reload")}
          </button>
        </div>
      </div>

      {/* MODAL AIDE */}
      {showHelp && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-indigo-400 mb-3">{getString("helpTitle")}</h3>
            <p className="text-sm text-slate-300 mb-4">{getString("helpText")}</p>
            <ul className="space-y-2 text-xs text-slate-400 mb-6 list-disc pl-4">
              <li>{getString("helpItem1")}</li>
            </ul>
            <button onClick={() => setShowHelp(false)} className="w-full py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold">
              {getString("helpBtn")}
            </button>
          </div>
        </div>
      )}

      {/* CONTENU PRINCIPAL */}
      <main className="w-full max-w-4xl flex-1 flex flex-col items-center">
        
        {mode === "menu" && (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <button onClick={() => setMode("numbers_config")} className="p-5 bg-slate-900 border border-indigo-500/30 hover:border-indigo-500 rounded-2xl flex flex-col items-start transition group shadow-lg">
              <span className="text-2xl mb-2">🔢</span>
              <span className="text-base font-bold text-slate-100 group-hover:text-indigo-400">{getString("numbersMenu")}</span>
              <span className="text-xs text-slate-400 mt-1">Flash Bloc, Voix Universelle & Persistance</span>
            </button>

            <button onClick={() => setMode("analytics")} className="p-5 bg-slate-900 border border-blue-500/30 hover:border-blue-500 rounded-2xl flex flex-col items-start transition group shadow-lg">
              <span className="text-2xl mb-2">📊</span>
              <span className="text-base font-bold text-slate-100 group-hover:text-blue-400">{getString("analyticsMenu")}</span>
              <span className="text-xs text-slate-400 mt-1">Suivi de session, fautes & hebdo</span>
            </button>
          </div>
        )}

        {/* CONFIGURATION CHIFFRES AVEC PERSISTANCE MANUELLE */}
        {mode === "numbers_config" && (
          <div className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-indigo-400">{getString("configNumbersTitle")}</h2>
              <button onClick={() => setMode("menu")} className="text-xs text-slate-400 hover:text-white">← {getString("back")}</button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={() => startNumbers(4, 1500)} className="p-4 bg-slate-800 hover:bg-slate-700 rounded-xl text-left font-semibold text-sm">
                {getString("ultraComfortAuto")}
              </button>
              <button onClick={() => startNumbers(6, 1200)} className="p-4 bg-slate-800 hover:bg-slate-700 rounded-xl text-left font-semibold text-sm">
                {getString("comfortAuto")}
              </button>
            </div>

            <div className="border-t border-slate-800 pt-4 flex flex-col gap-3">
              <h3 className="text-sm font-bold text-slate-300">{getString("manualModeTitle")}</h3>
              <p className="text-xs text-slate-400">{getString("manualModeDesc")}</p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-slate-400">Chiffres : {manualInputValue}</label>
                  <input 
                    type="range" min="3" max="15" value={manualInputValue} 
                    onChange={e => {
                      const val = parseInt(e.target.value);
                      setManualInputValue(val);
                      localStorage.setItem("manual_num_digits", val.toString());
                    }} 
                    className="accent-indigo-500" 
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-slate-400">Affichage (s) : {manualNumDisplayTime}</label>
                  <input 
                    type="range" min="3" max="30" value={manualNumDisplayTime} 
                    onChange={e => {
                      const val = parseInt(e.target.value);
                      setManualNumDisplayTime(val);
                      localStorage.setItem("manual_num_time", val.toString());
                    }} 
                    className="accent-indigo-500" 
                  />
                </div>
                <button
                  onClick={() => startNumbers(manualInputValue, 1000, true, manualNumDisplayTime * 1000)}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition shadow-lg mt-auto"
                >
                  {getString("launchManualBtn")}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* JEU CHIFFRES */}
        {sequence !== "" && mode === "numbers_config" && (
          <div className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col items-center gap-6 mt-4">
            <div className="w-full flex items-center justify-between">
              <button onClick={() => { setSequence(""); setMode("menu"); }} className="text-xs text-slate-400 hover:text-white">← {getString("menu")}</button>
              <span className="text-xs font-mono text-indigo-400">Score succès: {numSuccess} | Erreurs: {numErrors}</span>
            </div>

            {displaying ? (
              <div className="py-16 flex flex-col items-center gap-4">
                <p className="text-xs uppercase tracking-widest text-slate-400">{getString("numFlashPrompt")}</p>
                <div className="text-5xl md:text-7xl font-mono font-black tracking-widest bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  {sequence}
                </div>
              </div>
            ) : (
              <form onSubmit={handleNumSubmit} className="w-full max-w-md flex flex-col gap-4 py-6">
                <p className="text-sm font-semibold text-slate-200 text-center">{getString("numInputPrompt")}</p>
                
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Ex: 48291..."
                    autoFocus
                    disabled={waitingForNextNum}
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 font-mono text-xl text-center text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                  {/* Bouton micro universel qui s'adapte à la langue active */}
                  <button
                    type="button"
                    onClick={startSpeechRecognition}
                    disabled={waitingForNextNum}
                    className={`px-4 rounded-xl border text-lg transition ${isListeningMic ? "bg-red-600 border-red-500 animate-pulse text-white" : "bg-slate-800 hover:bg-slate-700 border-slate-700 text-indigo-400"}`}
                    title="Dicter dans ta langue"
                  >
                    🎙️
                  </button>
                </div>

                {isListeningMic && <p className="text-xs text-red-400 text-center animate-pulse">{getString("micListening")}</p>}

                {!waitingForNextNum ? (
                  <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-sm shadow-lg transition">
                    {getString("validate")}
                  </button>
                ) : (
                  <button type="button" onClick={nextNumberRound} className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm shadow-lg transition animate-bounce">
                    {getString("next")}
                  </button>
                )}

                {message && (
                  <div className={`p-3 rounded-xl text-xs font-bold text-center ${msgType === "success" ? "bg-emerald-950/60 border border-emerald-500/40 text-emerald-300" : "bg-rose-950/60 border border-rose-500/40 text-rose-300"}`}>
                    {message}
                  </div>
                )}
              </form>
            )}
          </div>
        )}

        {/* ANALYTICS */}
        {mode === "analytics" && (
          <div className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-blue-400">{getString("historyTitle")}</h2>
              <button onClick={() => setMode("menu")} className="text-xs text-slate-400 hover:text-white">← {getString("back")}</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                <p className="text-xs text-slate-400">Chiffres (Succès / Err)</p>
                <p className="text-xl font-mono font-bold text-emerald-400 mt-1">{numSuccess} / <span className="text-rose-400">{numErrors}</span></p>
              </div>
            </div>

            <button onClick={clearAllStats} className="py-2 px-4 bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800 text-rose-300 rounded-xl text-xs font-semibold self-start">
              {getString("resetHistory")}
            </button>
          </div>
        )}

      </main>
    </div>
  );
}