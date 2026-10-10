"use client";

import { useState, useEffect } from "react";

export default function MemoryApp() {
  const [mode, setMode] = useState("menu");
  
  // États Langue internationale (avec recherche par initiales)
  const [langSearch, setLangSearch] = useState("");
  const [currentLang, setCurrentLang] = useState("FR");

  const languagesList = [
    { code: "FR", name: "Français" },
    { code: "LI", name: "Lingala" },
    { code: "NL", name: "Nederlands" },
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" },
    { code: "DE", name: "Deutsch" },
    { code: "IT", name: "Italiano" },
    { code: "PT", name: "Português" },
    { code: "PL", name: "Polski" },
    { code: "RU", name: "Русский" },
    { code: "AR", name: "العربية" },
    { code: "ZH", name: "中文" },
    { code: "JA", name: "日本語" },
    { code: "KO", name: "한국어" },
    { code: "HI", name: "हिन्दी" }
  ];

  const filteredLanguages = languagesList.filter(l => 
    l.name.toLowerCase().includes(langSearch.toLowerCase()) || 
    l.code.toLowerCase().includes(langSearch.toLowerCase())
  );

  // Dictionnaire complet multilingue (Interface, Aide et Textes de jeux)
  const t: Record<string, Record<string, any>> = {
    FR: {
      subtitle: "Mode Boxe & Réhabilitation Cognitive",
      langLabel: "Langue / Language",
      langSearchPlaceholder: "Tape tes initiales (ex: fr, li, en)...",
      timerRound: "Timer Round",
      pause: "PAUSE",
      start: "START 🧠",
      reload: "RELOAD",
      numbersMenu: "Mode Chiffres (Flash Bloc)",
      gridMenu: "Mode Photo-Mémoire (Grilles)",
      verbalMenu: "Mode Fil Conducteur 🗣️",
      narrativeMenu: "Mode Parenthèse & Récit 📖",
      focusMenu: "Mode Concentration (Anti-Parasite) 🎯",
      journalistMenu: "Mode Journaliste / Élocution 🎙️",
      analyticsMenu: "📈 Journal de Bord Analytique (Par Jeu)",
      numbersTitle: "Chiffres",
      gridTitle: "Grilles",
      verbalTitle: "Verbal",
      focusTitle: "Concentration",
      journalistTitle: "Élocution",
      narrativeTitle: "Récit",
      back: "Retour",
      menu: "Menu",
      validate: "Valider",
      next: "SUIVANT ➔",
      nextGrid: "GRILLE SUIVANTE ➔",
      nextStory: "RÉCIT SUIVANT ➔",
      successMsg: "Succès ! 🚀",
      errorMsg: "Erreur ! C'était : ",
      validatedMsg: "Validé ! 🎉",
      missedMsg: "Raté ! ❌",
      perfectMsg: "Parfait ! 🧠",
      bravoMsg: "Bravo ! 🎯",
      targetLocked: "Cible verrouillée ! 🎯",
      watchParasite: "Attention aux interférences ! C'était : ",
      helpTitle: "💡 Guide & Objectif du Jeu",
      helpText: "Neuro Machine Coach est conçu pour aiguiser l'attention, éliminer les distractions cognitives et renforcer la concentration immédiate grâce à des exercices interactifs rythmés.",
      helpItem1: "Mode Concentration : Ignore les mots parasites et sélectionne instantanément la cible prioritaire pour éviter toute dispersion mentale.",
      helpItem2: "Mode Journaliste : Entraîne-toi à lire à haute voix sans hésitation, enrichis ton vocabulaire et élimine les tics de langage.",
      helpItem3: "Multilingue : Change de langue à tout moment avec la recherche instantanée par initiales pour une pratique internationale.",
      helpBtn: "J'ai compris, c'est parti !",
      alertRound: "DING DONG ! Fin du round d'entraînement ! 🥊",
      targetLabel: "Cible prioritaire :",
      instructionFocus: "Clique sur la bonne cible et ignore les parasites :",
      focusTargets: ["FOCUS", "ANCRAGE", "PRÉSENT", "OBJECTIF", "DISCIPLINE", "CLARTÉ", "FLUX"],
      focusDistractors: ["Distraction", "Fatigue", "Divagation", "Bruit", "Interférence", "Hésitation", "Ralentissement", "Impulsion", "Dispersion"],
      journalistTitleHeader: "Mode Journaliste (Élocution & Vocabulaire)",
      journalistInstruction: "Lis cette dépêche à haute voix d'un trait, sans dire 'euh', sans hésiter et avec une diction parfaite de présentateur TV :",
      journalistBtnDone: "C'est lu avec fluidité ! 🎙",
      journalistNext: "Dépêche Suivante ➔",
      configNumbersTitle: "Vitesse & Mode",
      manualModeTitle: "🎯 Mode Manuel (Choix Libre)",
      manualModeDesc: "Choisis exactement le nombre souhaité et le temps d'affichage :",
      launchManualBtn: "Lancer le Mode Manuel Chiffres",
      ultraComfortAuto: "🟢 Ultra Confort (Auto)",
      comfortAuto: "Confort (Auto)",
      standardAuto: "Standard (Auto)",
      hardcoreAuto: "🔥 HARDCORE (Auto)",
      gridConfigTitle: "Grilles & Photo-Mémoire",
      manualGridDesc: "Choisis exactement le nombre de blocs et le temps d'affichage :",
      launchManualGridBtn: "Lancer le Mode Manuel Grille",
      verbalConfigTitle: "Verbal",
      narrativeConfigTitle: "Niveau du Récit",
      narrativeComfort: "🟢 Confort (Sans stress)",
      narrativeStandard: "⚡ Standard",
      narrativeHardcore: "🔥 HARDCORE (Pièges sémantiques vicieux)",
      focusConfigTitle: "Niveau",
      focusComfort: "🟢 Comfort (2 choix)",
      focusStandard: "⚡ Standard (4 choix)",
      focusHardcore: "🔥 HARDCORE (6 choix)",
      journalistConfigTitle: "Niveau d'Élocution",
      journalistBeginner: "🟢 Débutant (Phrases courtes)",
      journalistStandardPro: "⚡ Standard / Pro (Dépêches TV)",
      journalistExpert: "🔥 Expert / Hardcore (Vocabulaire technique)",
      historyTitle: "📊 Statistiques Détaillées par Jeu",
      resetHistory: "🗑️ Réinitialiser les scores",
      noHistory: "Aucune statistique enregistrée.",
      numFlashPrompt: "📸 Mémorise la séquence...",
      numInputPrompt: "✍️ Saisis la séquence :",
      gridMemorize: "📸 Mémorise le dessin lumineux !",
      gridFind: "🎯 Reproduis le dessin !",
      filRouge: "Fil rouge :",
      memorizeIdea: "Prends le temps de lire et mémoriser l'idée principale :",
      viewDetails: "Voir les Détails ➔",
      contextDetails: "Détails contextuels :",
      viewTrickyChoices: "Passer aux Choix Piégeux ➔",
      questionConceptExact: "Quelle est la formulation conceptuelle exacte ? (Analyse bien les nuances)"
    },
    LI: {
      subtitle: "Mode Boxe & Bokonzi ya Bwa",
      langLabel: "Lingomba ya Lokota",
      langSearchPlaceholder: "Koma Lingota (t.kp: fr, li, en)...",
      timerRound: "Ntango ya Rondo",
      pause: "KIMIA",
      start: "BAPELA 🧠",
      reload: "BOSOLO",
      numbersMenu: "Mode Mituya (Flash Bloc)",
      gridMenu: "Mode Foto-Memory (Grilles)",
      verbalMenu: "Mode Maloba 🗣️",
      narrativeMenu: "Mode Masolo 📖",
      focusMenu: "Mode Bosantu ya Motema (Anti-Parasite) 🎯",
      journalistMenu: "Mode Mokomi ya Sango / Diction 🎙",
      analyticsMenu: "📈 Mokolo ya Masolo (Na Molongo)",
      numbersTitle: "Mituya",
      gridTitle: "Grilles",
      verbalTitle: "Maloba",
      focusTitle: "Bosantu",
      journalistTitle: "Diction",
      narrativeTitle: "Masolo",
      back: "Kozonga",
      menu: "Menu",
      validate: "Ndima",
      next: "ELONGI ➔",
      nextGrid: "GRILLE ELONGI ➔",
      nextStory: "LISOLO ELONGI ➔",
      successMsg: "Elongi ! 🚀",
      errorMsg: "Mabe ! Ezalaki : ",
      validatedMsg: "Endimami ! 🎉",
      missedMsg: "Epanzani ! ❌",
      perfectMsg: "Eza Malamu ! 🧠",
      bravoMsg: "Bravo ! 🎯",
      targetLocked: "Ewuti na esika ! 🎯",
      watchParasite: "Keba na makambo ya pembeni ! Ezalaki : ",
      helpTitle: "💡 Mibeko & Ntina ya Masano",
      helpText: "Neuro Machine Coach esalemi po na kobikisa makanisi, kolongola bopusi ya libanda mpe kolendisa bokoki ya koyeba eloko noki na nzela ya masano ya malamu.",
      helpItem1: "Mode Bosantu : Botika maloba ya mpamba mpe ponaka kaka eloko ya ntina po na kozanga kotelela.",
      helpItem2: "Mode Mokomi ya Sango : Yekola koloba malamu kozanga kotelela mpe kobongisa maloba na yo.",
      helpItem3: "Ebele ya Lokota : Kobongola lokota na ntango nyonso mpo na kozala na mokili mobimba.",
      helpBtn: "Nayoki, tokende !",
      alertRound: "DING DONG ! Esili rondo ya boyekoli ! 🥊",
      targetLabel: "Eloko ya ntina :",
      instructionFocus: "Pona eloko ya malamu mpe boya ya mabe :",
      focusTargets: ["FOCUS", "ANCRAGE", "YA LELO", "MOKANO", "DISCIPLINE", "CLARTÉ", "FLUX"],
      focusDistractors: ["Hésitation", "Fatigue", "Divagation", "Makelele", "Interférence", "Dispersion", "Ralentissement", "Impulsion", "Bopɛngwi"],
      journalistTitleHeader: "Mode Mokomi ya Sango (Koloba Malamu)",
      journalistInstruction: "Tanga nsango oyo na mongongo ya likolo kozanga kotɛlɛtɛlɛ mpe na bosikisiki nyonso lokola moto ya TV :",
      journalistBtnDone: "Etangi malamu ! 🎙",
      journalistNext: "Nsango elandi ➔",
      configNumbersTitle: "Spidi & Mode",
      manualModeTitle: "🎯 Mode Manuel (Pona mpenza)",
      manualModeDesc: "Pona motango ya mituya oyo olingi mpe ntango :",
      launchManualBtn: "Banda Mode Manuel Mituya",
      ultraComfortAuto: "🟢 Ultra Confort (Auto)",
      comfortAuto: "Confort (Auto)",
      standardAuto: "Standard (Auto)",
      hardcoreAuto: "🔥 HARDCORE (Auto)",
      gridConfigTitle: "Grilles",
      manualGridDesc: "Pona motango ya mabaku mpe ntango :",
      launchManualGridBtn: "Banda Mode Manuel Grille",
      verbalConfigTitle: "Maloba",
      narrativeConfigTitle: "Nivo ya Masolo",
      narrativeComfort: "🟢 Confort (Kozanga likama)",
      narrativeStandard: "⚡ Standard",
      narrativeHardcore: "🔥 HARDCORE (Mitembu ya mindɔndɔ)",
      focusConfigTitle: "Nivo",
      focusComfort: "🟢 Confort (Makambo mibale)",
      focusStandard: "⚡ Standard (Makambo minei)",
      focusHardcore: "🔥 HARDCORE (Makambo motoba)",
      journalistConfigTitle: "Nivo ya Diction",
      journalistBeginner: "🟢 Ebandeli (Maloba mikuse)",
      journalistStandardPro: "⚡ Standard / Pro (Nsango ya TV)",
      journalistExpert: "🔥 Expert / Hardcore (Maloba ya mayele)",
      historyTitle: "📊 Masolo ya kala na Molongo :",
      resetHistory: "🗑️ Longola nyonso",
      noHistory: "Lisolo ezali te.",
      numFlashPrompt: "📸 Yeba mwa ntoki...",
      numInputPrompt: "✍️ Koma mituya :",
      gridMemorize: "📸 Yeba !",
      gridFind: "🎯 Zuwa !",
      filRouge: "Fil rouge :",
      memorizeIdea: "Zwa ntango ya kotanga mpe koyeba makanisi ya ntina :",
      viewDetails: "Mona Makambo ➔",
      contextDetails: "Makambo ya pembeni :",
      viewTrickyChoices: "Kende na Makambo ya mindɔndɔ ➔",
      questionConceptExact: "Ezalaki ndenge nini mpenza ?"
    },
    EN: {
      subtitle: "Boxing Mode & Cognitive Rehabilitation",
      langLabel: "Language",
      langSearchPlaceholder: "Type initials (e.g. fr, li, en)...",
      timerRound: "Round Timer",
      pause: "PAUSE",
      start: "START 🧠",
      reload: "RELOAD",
      numbersMenu: "Numbers Mode (Flash Block)",
      gridMenu: "Photo-Memory Mode (Grids)",
      verbalMenu: "Verbal Thread Mode 🗣",
      narrativeMenu: "Parenthesis & Story Mode 📖",
      focusMenu: "Focus Mode (Anti-Distraction) 🎯",
      journalistMenu: "Journalist / Speech Mode 🎙️",
      analyticsMenu: "📈 Analytical Dashboard (By Game)",
      numbersTitle: "Numbers",
      gridTitle: "Grids",
      verbalTitle: "Verbal",
      focusTitle: "Focus",
      journalistTitle: "Speech",
      narrativeTitle: "Story",
      back: "Back",
      menu: "Menu",
      validate: "Submit",
      next: "NEXT ➔",
      nextGrid: "NEXT GRID ➔",
      nextStory: "NEXT STORY ➔",
      successMsg: "Success! 🚀",
      errorMsg: "Error! It was: ",
      validatedMsg: "Validated! 🎉",
      missedMsg: "Missed! ❌",
      perfectMsg: "Perfect! 🧠",
      bravoMsg: "Great! 🎯",
      targetLocked: "Target locked! 🎯",
      watchParasite: "Watch out for interference! It was: ",
      helpTitle: "💡 Guide & Game Objective",
      helpText: "Neuro Machine Coach is designed to sharpen attention, eliminate cognitive distractions, and strengthen immediate focus through fast-paced interactive exercises.",
      helpItem1: "Focus Mode: Ignore distraction words and instantly select the priority target to prevent mind-wandering.",
      helpItem2: "Journalist Mode: Practice reading aloud smoothly without hesitation, enrich your vocabulary, and eliminate filler words.",
      helpItem3: "Multilingual: Switch languages at any time with instant initials search for global practice.",
      helpBtn: "Got it, let's go!",
      alertRound: "DING DONG! Training round over! 🥊",
      targetLabel: "Priority target:",
      instructionFocus: "Click the correct target and ignore distractions:",
      focusTargets: ["FOCUS", "ANCHOR", "PRESENT", "OBJECTIVE", "DISCIPLINE", "CLARITY", "FLOW"],
      focusDistractors: ["Distraction", "Fatigue", "Wandering", "Noise", "Interference", "Hesitation", "Slowness", "Impulse", "Dispersion"],
      journalistTitleHeader: "Journalist Mode (Speech & Diction)",
      journalistInstruction: "Read this news bulletin aloud fluently, without hesitation and with professional TV presenter diction:",
      journalistBtnDone: "Read with fluency! 🎙️",
      journalistNext: "Next Bulletin ➔",
      configNumbersTitle: "Speed & Mode",
      manualModeTitle: "🎯 Manual Mode (Custom Choice)",
      manualModeDesc: "Choose exact number of digits and display time:",
      launchManualBtn: "Launch Manual Numbers",
      ultraComfortAuto: "🟢 Ultra Comfort (Auto)",
      comfortAuto: "Comfort (Auto)",
      standardAuto: "Standard (Auto)",
      hardcoreAuto: "🔥 HARDCORE (Auto)",
      gridConfigTitle: "Grids & Photo-Memory",
      manualGridDesc: "Choose exact number of blocks and display time:",
      launchManualGridBtn: "Launch Manual Grid",
      verbalConfigTitle: "Verbal",
      narrativeConfigTitle: "Story Level",
      narrativeComfort: "🟢 Comfort (Stress-free)",
      narrativeStandard: "⚡ Standard",
      narrativeHardcore: "🔥 HARDCORE (Tricky semantic traps)",
      focusConfigTitle: "Level",
      focusComfort: "🟢 Comfort (2 choices)",
      focusStandard: "⚡ Standard (4 choices)",
      focusHardcore: "🔥 HARDCORE (6 choices)",
      journalistConfigTitle: "Speech Level",
      journalistBeginner: "🟢 Beginner (Short sentences)",
      journalistStandardPro: "⚡ Standard / Pro (TV Bulletins)",
      journalistExpert: "🔥 Expert / Hardcore (Technical vocabulary)",
      historyTitle: "📊 Detailed Statistics per Game:",
      resetHistory: "🗑️ Reset Scores",
      noHistory: "No stats recorded.",
      numFlashPrompt: "📸 Memorize sequence...",
      numInputPrompt: "✍️ Enter sequence:",
      gridMemorize: "📸 Memorize light drawing!",
      gridFind: "🎯 Reproduce the drawing!",
      filRouge: "Thread:",
      memorizeIdea: "Take time to read and memorize the main idea:",
      viewDetails: "View Details ➔",
      contextDetails: "Contextual details:",
      viewTrickyChoices: "Go to Tricky Choices ➔",
      questionConceptExact: "What is the exact conceptual formulation?"
    },
    NL: {
      subtitle: "Boksmodus & Cognitieve Revalidatie",
      langLabel: "Taal / Language",
      langSearchPlaceholder: "Typ initialen (bijv. fr, li, en)...",
      timerRound: "Ronde Timer",
      pause: "PAUZE",
      start: "START 🧠",
      reload: "OPNIEUW",
      numbersMenu: "Cijfermodus (Flash Blok)",
      gridMenu: "Fotogeheugenmodus (Grids)",
      verbalMenu: "Verbale Draadmodus 🗣️",
      narrativeMenu: "Verhaalmodus 📖",
      focusMenu: "Focusmodus (Anti-Afleiding) 🎯",
      journalistMenu: "Journalist / Spraakmodus 🎙️",
      analyticsMenu: "📈 Analytisch Dashboard (Per Spel)",
      numbersTitle: "Cijfers",
      gridTitle: "Roosters",
      verbalTitle: "Verbaal",
      focusTitle: "Focus",
      journalistTitle: "Spraak",
      narrativeTitle: "Verhaal",
      back: "Terug",
      menu: "Menu",
      validate: "Bevestigen",
      next: "VOLGENDE ➔",
      nextGrid: "VOLGENDE ROOSTER ➔",
      nextStory: "VOLGENDE VERHAAL ➔",
      successMsg: "Succes! 🚀",
      errorMsg: "Fout! Het was: ",
      validatedMsg: "Gevalideerd! 🎉",
      missedMsg: "Gemist! ❌",
      perfectMsg: "Perfect! 🧠",
      bravoMsg: "Goed zo! 🎯",
      targetLocked: "Doel vergrendeld! 🎯",
      watchParasite: "Pas op voor interferentie! Het was: ",
      helpTitle: "💡 Gids & Doel van het Spel",
      helpText: "Neuro Machine Coach is ontworpen om de aandacht aan te scherpen, cognitieve afleidingen te elimineren en de directe concentratie te versterken.",
      helpItem1: "Focusmodus: Negeer afleidingswoorden en selecteer direct het prioritaire doel.",
      helpItem2: "Journalistmodus: Oefen hardop lezen zonder aarzeling en verrijk je vocabulaire.",
      helpItem3: "Meertalig: Schakel op elk moment over naar een andere taal.",
      helpBtn: "Begrepen, Laten we beginnen!",
      alertRound: "DING DONG! Trainingsronde voorbij! 🥊",
      targetLabel: "Prioritair doel:",
      instructionFocus: "Klik op het juiste doel en negeer afleidingen:",
      focusTargets: ["FOCUS", "ANKER", "HEDEN", "DOEL", "DISCIPLINE", "HELDERHEID", "FLOW"],
      focusDistractors: ["Afleiding", "Vermoeidheid", "Dwalen", "Geluid", "Interferentie", "Aarzeling", "Traagheid", "Impuls", "Dispersie"],
      journalistTitleHeader: "Journalistmodus (Spraak & Dictie)",
      journalistInstruction: "Lees dit nieuwsbericht hardop en vloeiend voor, zonder aarzelen en met professionele dictie:",
      journalistBtnDone: "Vloeiend gelezen! 🎙️",
      journalistNext: "Volgend Bericht ➔",
      configNumbersTitle: "Snelheid & Modus",
      manualModeTitle: "🎯 Handmatige Modus (Vrije Keuze)",
      manualModeDesc: "Kies exact aantal cijfers en weergavetijd:",
      launchManualBtn: "Start Handmatige Cijfers",
      ultraComfortAuto: "🟢 Ultra Comfort (Auto)",
      comfortAuto: "Comfort (Auto)",
      standardAuto: "Standaard (Auto)",
      hardcoreAuto: "🔥 HARDCORE (Auto)",
      gridConfigTitle: "Roosters",
      manualGridDesc: "Kies aantal blokken en weergavetijd:",
      launchManualGridBtn: "Start Handmatige Rooster",
      verbalConfigTitle: "Verbaal",
      narrativeConfigTitle: "Verhaal Niveau",
      narrativeComfort: "🟢 Comfort (Zonder stress)",
      narrativeStandard: "⚡ Standaard",
      narrativeHardcore: "🔥 HARDCORE (Lastige semantische vallen)",
      focusConfigTitle: "Niveau",
      focusComfort: "🟢 Comfort (2 keuzes)",
      focusStandard: "⚡ Standard (4 keuzes)",
      focusHardcore: "🔥 HARDCORE (6 keuzes)",
      journalistConfigTitle: "Spraakniveau",
      journalistBeginner: "🟢 Beginner (Korte zinnen)",
      journalistStandardPro: "⚡ Standaard / Pro (TV Berichten)",
      journalistExpert: "🔥 Expert / Hardcore (Technisch vocabulaire)",
      historyTitle: "📊 Gedetailleerde statistieken per spel:",
      resetHistory: "🗑️ Reset Scores",
      noHistory: "Geen statistieken.",
      numFlashPrompt: "📸 Onthoud reeks...",
      numInputPrompt: "✍️ Voer reeks in:",
      gridMemorize: "📸 Onthoud lichttekening!",
      gridFind: "🎯 Reproduceer tekening!",
      filRouge: "Rode draad:",
      memorizeIdea: "Neem de tijd om het hoofdidee te lezen en te onthouden:",
      viewDetails: "Bekijk Details ➔",
      contextDetails: "Contextuele details:",
      viewTrickyChoices: "Naar Lastige Keuzes ➔",
      questionConceptExact: "Wat is de exacte conceptuele formulering?"
    }
  };

  const getString = (key: string) => {
    return t[currentLang]?.[key] || t["FR"][key] || key;
  };

  // État Aide / Explication du jeu
  const [showHelp, setShowHelp] = useState(false);

  // États Timer style "Boxe"
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
  const [manualInputValue, setManualInputValue] = useState(3);
  const [manualNumDisplayTime, setManualNumDisplayTime] = useState(10);

  // États Grille (Photo-Mémoire)
  const [gridSize, setGridSize] = useState(3);
  const [targetTiles, setTargetTiles] = useState<number[]>([]);
  const [selectedTiles, setSelectedTiles] = useState<number[]>([]);
  const [showingGrid, setShowingGrid] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [flashTime, setFlashTime] = useState(4000);
  const [gridSuccess, setGridSuccess] = useState(0);
  const [gridErrors, setGridErrors] = useState(0);
  const [manualGridCount, setManualGridCount] = useState(4);
  const [manualGridDisplayTime, setManualGridDisplayTime] = useState(10);

  // États Verbal
  const [verbalDifficulty, setVerbalDifficulty] = useState("normal");
  const verbalPools: Record<string, { main: string; options: string[]; correct: string }[]> = {
    normal: [
      { main: "Projet de développement", options: ["Code", "Cuisine", "Voiture"], correct: "Code" },
      { main: "Argumentation technique", options: ["Structure", "Nuage", "Sommeil"], correct: "Structure" },
      { main: "Gestion de la mémoire", options: ["Attention", "Musique", "Peinture"], correct: "Attention" },
      { main: "Organisation du planning", options: ["Priorité", "Fatigue", "Hasard"], correct: "Priorité" }
    ],
    hard: [
      { main: "Architecture asynchrone distribuée", options: ["Latence", "Boulangerie", "Jardinage"], correct: "Latence" },
      { main: "Cognition et plasticité synaptique", options: ["Neurone", "Gravité", "Océanographie"], correct: "Neurone" }
    ],
    genius: [
      { main: "Algorithme de consensus décentralisé", options: ["Byzantin", "Mélancolie", "Alchimie"], correct: "Byzantin" }
    ]
  };
  const [verbalIndex, setVerbalIndex] = useState(0);
  const [verbalSuccess, setVerbalSuccess] = useState(0);
  const [verbalErrors, setVerbalErrors] = useState(0);

  // États Parenthèse Narrative
  const [narrativeDifficulty, setNarrativeDifficulty] = useState("normal");
  const narrativePool = [
    {
      moral: "L'observation attentive des micro-détails révèle systématiquement la source cachée d'une anomalie complexe.",
      details: ["Examen minutieux des flux de données", "Traçage rigoureux des signaux faibles", "Mise en perspective des dysfonctionnements"],
      options: [
        "Un examen minutieux des micro-signaux permet de démasquer l'origine enfouie d'une panne.",
        "Se fier uniquement à l'intuition instantanée permet d'identifier l'origine des dysfonctionnements.",
        "Négliger les petits signaux faibles accélère radicalement la résolution des crises critiques.",
        "La source d'un problème se devine toujours par le hasard plutôt que par l'analyse méthodique.",
        "L'absence d'inspection minutieuse des indices renforce la robustesse globale du système."
      ],
      correct: "Un examen minutieux des micro-signaux permet de démasquer l'origine enfouie d'une panne."
    },
    {
      moral: "La persévérance méthodique et structurée vient toujours à bout des bugs logiciels les plus ardus.",
      details: ["Analyse approfondie de la pile d'exécution", "Isolation stricte du composant asynchrone", "Validation rigoureuse du correctif"],
      options: [
        "Une approche structurée et obstinée vient à bout des anomalies logicielles ardues.",
        "Il vaut mieux tout réécrire au premier obstacle sans chercher à comprendre l'erreur.",
        "Le hasard et la chance résolvent beaucoup plus vite les pannes que la méthode.",
        "L'abandon rapide d'un composant complexe évite toute surcharge mentale inutile.",
        "La complexité d'un bug se règle uniquement par l'intuition spontanée sans test."
      ],
      correct: "Une approche structurée et obstinée vient à bout des anomalies logicielles ardues."
    },
    {
      moral: "L'anticipation rigoureuse des risques protège durablement l'architecture contre les crises systémiques.",
      details: ["Planification des jalons critiques", "Vérification automatisée des sauvegardes", "Mise en place d'un protocole d'alerte"],
      options: [
        "Prévoir et planifier en amont protège le système contre les urgences majeures.",
        "Laisser faire le destin et improviser au dernier moment garantit l'efficacité optimale.",
        "L'improvisation spontanée surpasse en tout point la planification structurée.",
        "Gérer les crises à chaud est beaucoup plus formateur que de chercher à les anticiper.",
        "L'absence totale de plan d'action renforce l'agilité et la réactivité collective."
      ],
      correct: "Prévoir et planifier en amont protège le système contre les urgences majeures."
    }
  ];

  const [narrativeIndex, setNarrativeIndex] = useState(0);
  const [narrativeStep, setNarrativeStep] = useState<"moral" | "details" | "question">("moral");
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [narrativeSuccess, setNarrativeSuccess] = useState(0);
  const [narrativeErrors, setNarrativeErrors] = useState(0);

  // États Mode Concentration
  const [focusLevel, setFocusLevel] = useState("normal");
  const [focusTarget, setFocusTarget] = useState("FOCUS");
  const [focusChoices, setFocusChoices] = useState<string[]>([]);
  const [focusSuccess, setFocusSuccess] = useState(0);
  const [focusErrors, setFocusErrors] = useState(0);

  // 🎙️ États Mode Journaliste
  const [journalistLevel, setJournalistLevel] = useState("beginner");
  const journalistPools: Record<string, string[]> = {
    beginner: [
      "« Le marché immobilier connaît une stabilité remarquable cette saison à travers le pays. »",
      "« Les équipes techniques poursuivent leurs efforts pour moderniser les infrastructures principales. »",
      "« Une météo clémente accompagnera l'ensemble des citoyens durant ce week-end prolongé. »"
    ],
    standard: [
      "« Mesdames et messieurs, bonsoir. L'innovation technologique redéfinit actuellement les standards de la transition numérique à travers l'ensemble des métropoles européennes. »",
      "« Dans un contexte économique particulièrement exigeant, la rigueur méthodologique demeure le principal rempart contre la dispersion et l'incertitude stratégique. »",
      "« L'optimisation des performances cognitives repose essentiellement sur une discipline implacable, une concentration de chaque instant et le rejet absolu de toute distraction. »"
    ],
    expert: [
      "« La promulgation de directives macroéconomiques exacerbe la volatilité inhérente aux marchés financiers internationaux, requérant une vigilance institutionnelle accrue. »",
      "« L'interopérabilité des architectures logicielles distribuées nécessite une structuration asynchrone rigoureuse afin d'atténuer drastiquement les latences critiques en production. »",
      "« La plasticité synaptique et la neurogenèse ciblée favorisent l'assimilation cognitive rapide de concepts complexes sans aucune interférence parasitaire. »"
    ]
  };
  const [journalistIndex, setJournalistIndex] = useState(0);
  const [journalistSuccess, setJournalistSuccess] = useState(0);

  useEffect(() => {
    const ns = localStorage.getItem("num_succ"); if (ns) setNumSuccess(parseInt(ns));
    const ne = localStorage.getItem("num_err"); if (ne) setNumErrors(parseInt(ne));
    const gs = localStorage.getItem("grid_succ"); if (gs) setGridSuccess(parseInt(gs));
    const ge = localStorage.getItem("grid_err"); if (ge) setGridErrors(parseInt(ge));
    const vs = localStorage.getItem("verbal_succ"); if (vs) setVerbalSuccess(parseInt(vs));
    const ve = localStorage.getItem("verbal_err"); if (ve) setVerbalErrors(parseInt(ve));
    const nbrS = localStorage.getItem("narrative_succ"); if (nbrS) setNarrativeSuccess(parseInt(nbrS));
    const nbrE = localStorage.getItem("narrative_err"); if (nbrE) setNarrativeErrors(parseInt(nbrE));
    const fs = localStorage.getItem("focus_succ"); if (fs) setFocusSuccess(parseInt(fs));
    const fe = localStorage.getItem("focus_err"); if (fe) setFocusErrors(parseInt(fe));
    const js = localStorage.getItem("journalist_succ"); if (js) setJournalistSuccess(parseInt(js));
    const sl = localStorage.getItem("app_lang"); if (sl) setCurrentLang(sl);
  }, []);

  const clearAllStats = () => {
    if (confirm("Veux-tu vraiment réinitialiser toutes les statistiques de tous les jeux ?")) {
      setNumSuccess(0); setNumErrors(0);
      setGridSuccess(0); setGridErrors(0);
      setVerbalSuccess(0); setVerbalErrors(0);
      setNarrativeSuccess(0); setNarrativeErrors(0);
      setFocusSuccess(0); setFocusErrors(0);
      setJournalistSuccess(0);
      localStorage.clear();
    }
  };

  const startNumbers = (lvl: number, speed: number, manual: boolean = false, customDurationMs?: number) => {
    setUserAnswer(""); setMessage(""); setMsgType("info");
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
      setMessage(getString("successMsg")); setMsgType("success");
      setTimeout(() => { 
        if (isManualMode) {
          startNumbers(level, numSpeed, true, manualNumDisplayTime * 1000);
        } else {
          startNumbers(level + 1, numSpeed, false); 
        }
      }, 900);
    } else {
      const newE = numErrors + 1; setNumErrors(newE); localStorage.setItem("num_err", newE.toString());
      setMessage(`${getString("errorMsg")} ${sequence}`); setMsgType("error");
      setTimeout(() => { startNumbers(level, numSpeed, isManualMode, manualNumDisplayTime * 1000); }, 1800);
    }
  };

  const startGrid = (targetCount: number, timeLimit: number) => {
    let size = Math.ceil(Math.sqrt(targetCount * 1.6));
    if (size < 3) size = 3;
    const total = size * size;
    const actualCount = Math.min(targetCount, Math.floor(total * 0.75)); 

    setGridSize(size); 
    setFlashTime(timeLimit); 
    setSelectedTiles([]); 
    setMessage(""); 
    setMsgType("info"); 
    setIsFinished(false); 
    setShowingGrid(true);

    let tiles: number[] = [];
    if (Math.random() > 0.5 && actualCount >= 6) {
      const startRow = Math.floor(size / 4);
      const endRow = size - startRow;
      for (let r = startRow; r < endRow && tiles.length < actualCount; r++) {
        for (let c = startRow; c < endRow && tiles.length < actualCount; c++) {
          if (r === startRow || r === endRow - 1 || c === startRow || c === endRow - 1 || (r === Math.floor(size/2) && c === Math.floor(size/2))) {
            tiles.push(r * size + c);
          }
        }
      }
    }

    while (tiles.length < actualCount) {
      let r = Math.floor(Math.random() * total);
      if (!tiles.includes(r)) tiles.push(r);
    }

    setTargetTiles(tiles);
    setTimeout(() => setShowingGrid(false), timeLimit);
  };

  const handleTile = (idx: number) => {
    if (showingGrid || isFinished) return;
    let sel = selectedTiles.includes(idx) ? selectedTiles.filter((t) => t !== idx) : [...selectedTiles, idx];
    setSelectedTiles(sel);
    if (sel.length === targetTiles.length) {
      setIsFinished(true);
      let ok = targetTiles.every((t) => sel.includes(t));
      if (ok) {
        const newS = gridSuccess + 1; setGridSuccess(newS); localStorage.setItem("grid_succ", newS.toString());
        setMessage(getString("validatedMsg")); setMsgType("success");
      } else {
        const newE = gridErrors + 1; setGridErrors(newE); localStorage.setItem("grid_err", newE.toString());
        setMessage(getString("missedMsg")); setMsgType("error");
      }
    }
  };

  const handleVerbalChoice = (option: string) => {
    const pool = verbalPools[verbalDifficulty];
    const current = pool[verbalIndex];
    if (option === current.correct) {
      const newS = verbalSuccess + 1; setVerbalSuccess(newS); localStorage.setItem("verbal_succ", newS.toString());
      setMessage(getString("perfectMsg")); setMsgType("success");
    } else {
      const newE = verbalErrors + 1; setVerbalErrors(newE); localStorage.setItem("verbal_err", newE.toString());
      setMessage(getString("missedMsg")); setMsgType("error");
    }
  };

  const startNarrative = () => {
    setNarrativeStep("moral");
    setMessage(""); setMsgType("info");
    let nextIdx;
    do {
      nextIdx = Math.floor(Math.random() * narrativePool.length);
    } while (nextIdx === narrativeIndex && narrativePool.length > 1);
    setNarrativeIndex(nextIdx);

    const currentOptions = [...narrativePool[nextIdx].options];
    currentOptions.sort(() => Math.random() - 0.5);
    setShuffledOptions(currentOptions);
  };

  const handleNarrativeChoice = (opt: string) => {
    const current = narrativePool[narrativeIndex];
    if (opt === current.correct) {
      const newS = narrativeSuccess + 1; setNarrativeSuccess(newS); localStorage.setItem("narrative_succ", newS.toString());
      setMessage(getString("bravoMsg")); setMsgType("success");
    } else {
      const newE = narrativeErrors + 1; setNarrativeErrors(newE); localStorage.setItem("narrative_err", newE.toString());
      setMessage(`${getString("errorMsg")} "${current.correct}"`); setMsgType("error");
    }
  };

  const nextFocusRound = () => {
    setMessage(""); setMsgType("info");
    const targets = getString("focusTargets") as string[];
    const distractors = getString("focusDistractors") as string[];

    const chosenTarget = targets[Math.floor(Math.random() * targets.length)];
    setFocusTarget(chosenTarget);

    let pool = [...distractors];
    let roundChoices = [chosenTarget];
    
    const countChoices = focusLevel === "easy" ? 2 : focusLevel === "hard" ? 6 : 4;

    while (roundChoices.length < countChoices && pool.length > 0) {
      const randIdx = Math.floor(Math.random() * pool.length);
      roundChoices.push(pool.splice(randIdx, 1)[0]);
    }
    roundChoices.sort(() => Math.random() - 0.5);
    setFocusChoices(roundChoices);
  };

  const handleFocusChoice = (opt: string) => {
    if (opt === focusTarget) {
      const newS = focusSuccess + 1; setFocusSuccess(newS); localStorage.setItem("focus_succ", newS.toString());
      setMessage(getString("targetLocked")); setMsgType("success");
      setTimeout(() => { nextFocusRound(); }, 600);
    } else {
      const newE = focusErrors + 1; setFocusErrors(newE); localStorage.setItem("focus_err", newE.toString());
      setMessage(`${getString("watchParasite")} ${focusTarget}`); setMsgType("error");
      setTimeout(() => { nextFocusRound(); }, 1000);
    }
  };

  const handleJournalistDone = () => {
    const newS = journalistSuccess + 1;
    setJournalistSuccess(newS);
    localStorage.setItem("journalist_succ", newS.toString());
    setMessage(getString("bravoMsg"));
    setMsgType("success");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-3 overflow-hidden">
      <div className="max-w-md w-full h-[620px] bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl relative flex flex-col justify-between overflow-y-auto">
        
        <div>
          {/* BOUTON AIDE / INFO */}
          <button 
            onClick={() => setShowHelp(!showHelp)}
            className="absolute top-3 right-3 w-6 h-6 bg-slate-800 hover:bg-slate-700 rounded-full text-xs font-bold text-cyan-400 border border-slate-700 flex items-center justify-center transition z-20"
            title="Aide & Explication du jeu"
          >
            ?
          </button>

          {/* PANNEAU D'AIDE POPUP MULTILINGUE */}
          {showHelp && (
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm z-50 p-5 rounded-2xl flex flex-col justify-between border border-cyan-500/50">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-cyan-400 font-bold text-xs">{getString("helpTitle")}</h3>
                  <button onClick={() => setShowHelp(false)} className="text-slate-400 hover:text-white font-bold text-sm">✕</button>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed mb-2">
                  {getString("helpText")}
                </p>
                <ul className="text-[11px] text-slate-400 space-y-1 list-disc pl-4 mb-3">
                  <li>{getString("helpItem1")}</li>
                  <li>{getString("helpItem2")}</li>
                  <li>{getString("helpItem3")}</li>
                </ul>
              </div>
              <button onClick={() => setShowHelp(false)} className="py-2 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-bold text-xs transition">{getString("helpBtn")}</button>
            </div>
          )}

          <h1 className="text-xl font-bold text-center mb-0.5 text-cyan-400">NEURO MACHINE COACH</h1>
          <p className="text-[11px] text-slate-400 text-center mb-2.5">{getString("subtitle")}</p>

          {/* SELECTEUR DE LANGUE INTERNATIONAL */}
          <div className="bg-slate-950 p-2 rounded-xl border border-slate-800 mb-2.5 flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">{getString("langLabel")} ({currentLang})</span>
              <input 
                type="text" 
                placeholder={getString("langSearchPlaceholder")} 
                value={langSearch}
                onChange={(e) => setLangSearch(e.target.value)}
                className="px-2 py-0.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-500 w-40"
              />
            </div>
            <div className="flex gap-1 overflow-x-auto pb-1 max-h-10 scrollbar-thin">
              {filteredLanguages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setCurrentLang(l.code); localStorage.setItem("app_lang", l.code); }}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition whitespace-nowrap border ${currentLang === l.code ? "bg-cyan-600 border-cyan-500 text-white" : "bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800"}`}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div>

          {/* CHRONO DIGITAL */}
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between mb-2.5">
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-400 uppercase tracking-wider">{getString("timerRound")}</span>
              <span className="text-xl font-mono font-bold text-amber-400">{formatTime(timeLeft)}</span>
            </div>
            <div className="flex gap-1">
              <button 
                onClick={() => setIsTimerRunning(!isTimerRunning)} 
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${isTimerRunning ? "bg-rose-600 hover:bg-rose-500" : "bg-emerald-600 hover:bg-emerald-500"}`}
              >
                {isTimerRunning ? getString("pause") : getString("start")}
              </button>
              <button 
                onClick={() => { setIsTimerRunning(false); setTimeLeft(timerDuration); }} 
                className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold transition text-slate-300"
              >
                {getString("reload")}
              </button>
            </div>
          </div>

          {/* SELECTEUR DE TEMPS */}
          <div className="grid grid-cols-7 gap-1 mb-2.5">
            {[180, 300, 600, 900, 1800, 2700, 3600].map((dur) => (
              <button
                key={dur}
                onClick={() => { setTimerDuration(dur); setTimeLeft(dur); setIsTimerRunning(false); }}
                className={`py-1 rounded-md text-[9px] font-bold transition border ${timerDuration === dur ? "bg-cyan-600 border-cyan-500 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-900"}`}
              >
                {dur >= 3600 ? `${dur / 3600}h` : `${dur / 60}m`}
              </button>
            ))}
          </div>

          {mode === "menu" && (
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 text-center mb-0.5">
                <div className="bg-slate-950 p-1.5 rounded-xl border border-slate-800">
                  <p className="text-[9px] text-slate-400 mb-0.5">{getString("numbersTitle")}</p>
                  <div className="flex justify-around text-xs font-bold"><span className="text-emerald-400">✔ {numSuccess}</span><span className="text-rose-500">✖ {numErrors}</span></div>
                </div>
                <div className="bg-slate-950 p-1.5 rounded-xl border border-slate-800">
                  <p className="text-[9px] text-slate-400 mb-0.5">{getString("journalistTitle")}</p>
                  <div className="flex justify-around text-xs font-bold"><span className="text-emerald-400">✔ {journalistSuccess}</span></div>
                </div>
              </div>

              <button onClick={() => setMode("analytics")} className="py-2 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold text-xs transition border border-slate-700">{getString("analyticsMenu")}</button>
              <button onClick={() => setMode("config-numbers")} className="py-2.5 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-semibold text-sm transition">{getString("numbersMenu")}</button>
              <button onClick={() => setMode("config-grid")} className="py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold text-sm transition">{getString("gridMenu")}</button>
              <button onClick={() => setMode("config-verbal")} className="py-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-semibold text-sm transition">{getString("verbalMenu")}</button>
              <button onClick={() => setMode("config-narrative")} className="py-2.5 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold text-sm transition">{getString("narrativeMenu")}</button>
              <button onClick={() => setMode("config-focus")} className="py-2.5 bg-amber-600 hover:bg-amber-500 rounded-xl font-semibold text-sm transition shadow-lg shadow-amber-900/40">{getString("focusMenu")}</button>
              <button onClick={() => setMode("config-journalist")} className="py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold text-sm transition shadow-lg shadow-indigo-900/40">{getString("journalistMenu")}</button>
            </div>
          )}

          {/* CONFIG NARRATIVE / RÉCIT */}
          {mode === "config-narrative" && (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>{getString("narrativeConfigTitle")}</span>
                <button onClick={() => setMode("menu")} className="text-purple-400 hover:underline">{getString("menu")}</button>
              </div>
              <div className="flex flex-col gap-2.5">
                <button onClick={() => { setNarrativeDifficulty("comfort"); setMode("narrative"); startNarrative(); }} className="py-2.5 bg-slate-800 hover:bg-purple-600 rounded-xl font-bold transition text-xs">{getString("narrativeComfort")}</button>
                <button onClick={() => { setNarrativeDifficulty("normal"); setMode("narrative"); startNarrative(); }} className="py-2.5 bg-slate-800 hover:bg-purple-600 rounded-xl font-bold transition text-xs">{getString("narrativeStandard")}</button>
                <button onClick={() => { setNarrativeDifficulty("hardcore"); setMode("narrative"); startNarrative(); }} className="py-2.5 bg-rose-900 hover:bg-rose-700 rounded-xl font-bold transition text-rose-200 text-xs">{getString("narrativeHardcore")}</button>
              </div>
            </div>
          )}

          {/* CONFIG FOCUS / CONCENTRATION */}
          {mode === "config-focus" && (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs text-slate-400"><span>{getString("focusConfigTitle")}</span><button onClick={() => setMode("menu")} className="text-amber-400 hover:underline">{getString("menu")}</button></div>
              <div className="flex flex-col gap-2.5">
                <button onClick={() => { setFocusLevel("easy"); setMode("focus"); nextFocusRound(); }} className="py-2.5 bg-slate-800 hover:bg-amber-600 rounded-xl font-bold transition text-xs">{getString("focusComfort")}</button>
                <button onClick={() => { setFocusLevel("normal"); setMode("focus"); nextFocusRound(); }} className="py-2.5 bg-slate-800 hover:bg-amber-600 rounded-xl font-bold transition text-xs">{getString("focusStandard")}</button>
                <button onClick={() => { setFocusLevel("hard"); setMode("focus"); nextFocusRound(); }} className="py-2.5 bg-rose-900 hover:bg-rose-700 rounded-xl font-bold transition text-rose-200 text-xs">{getString("focusHardcore")}</button>
              </div>
            </div>
          )}

          {/* CONFIG MODE JOURNALISTE */}
          {mode === "config-journalist" && (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>{getString("journalistConfigTitle")}</span>
                <button onClick={() => setMode("menu")} className="text-indigo-400 hover:underline">{getString("menu")}</button>
              </div>
              <div className="flex flex-col gap-2.5">
                <button onClick={() => { setJournalistLevel("beginner"); setJournalistIndex(0); setMode("journalist"); }} className="py-2.5 bg-slate-800 hover:bg-indigo-600 rounded-xl font-bold transition text-xs">{getString("journalistBeginner")}</button>
                <button onClick={() => { setJournalistLevel("standard"); setJournalistIndex(0); setMode("journalist"); }} className="py-2.5 bg-slate-800 hover:bg-indigo-600 rounded-xl font-bold transition text-xs">{getString("journalistStandardPro")}</button>
                <button onClick={() => { setJournalistLevel("expert"); setJournalistIndex(0); setMode("journalist"); }} className="py-2.5 bg-rose-900 hover:bg-rose-700 rounded-xl font-bold transition text-rose-200 text-xs">{getString("journalistExpert")}</button>
              </div>
            </div>
          )}

          {/* CONFIG CHIFFRES AVEC SELECTEUR DE TEMPS MANUEL */}
          {mode === "config-numbers" && (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>{getString("configNumbersTitle")}</span>
                <button onClick={() => setMode("menu")} className="text-cyan-400 hover:underline">{getString("menu")}</button>
              </div>
              
              <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-500/50 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-bold text-emerald-300">{getString("manualModeTitle")}</p>
                  <span className="text-xs font-mono font-bold bg-emerald-900 px-2 py-0.5 rounded text-white">{manualInputValue} ch. | {manualNumDisplayTime}s</span>
                </div>
                <p className="text-[10px] text-slate-300">{getString("manualModeDesc")}</p>
                
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-emerald-400">Nombre de chiffres : {manualInputValue}</span>
                  <input 
                    type="range" 
                    min="2" 
                    max="150" 
                    value={manualInputValue} 
                    onChange={(e) => setManualInputValue(parseInt(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-emerald-400">Temps d'affichage (chrono) : {manualNumDisplayTime} secondes</span>
                  <input 
                    type="range" 
                    min="2" 
                    max="60" 
                    value={manualNumDisplayTime} 
                    onChange={(e) => setManualNumDisplayTime(parseInt(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>
                
                <div className="flex justify-between items-center gap-2 pt-1">
                  <input 
                    type="number" 
                    min="1" 
                    max="200" 
                    value={manualInputValue}
                    onChange={(e) => setManualInputValue(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 px-2 py-1 bg-slate-900 border border-emerald-700/50 rounded-lg text-xs font-mono text-center text-emerald-300 focus:outline-none"
                  />
                  <button 
                    onClick={() => { setMode("numbers"); startNumbers(manualInputValue, 1500, true, manualNumDisplayTime * 1000); }}
                    className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-bold transition text-white shadow"
                  >
                    {getString("launchManualBtn")} 🚀
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => { setMode("numbers"); startNumbers(3, 1200, false); }} className="py-2 bg-emerald-900 hover:bg-emerald-800 rounded-xl font-bold transition text-xs shadow-md border border-emerald-700">{getString("ultraComfortAuto")}</button>
                <button onClick={() => { setMode("numbers"); startNumbers(4, 600, false); }} className="py-2 bg-slate-800 hover:bg-cyan-600 rounded-xl font-bold transition text-xs">{getString("comfortAuto")}</button>
                <button onClick={() => { setMode("numbers"); startNumbers(10, 350, false); }} className="py-2 bg-slate-800 hover:bg-cyan-600 rounded-xl font-bold transition text-xs">{getString("standardAuto")}</button>
                <button onClick={() => { setMode("numbers"); startNumbers(15, 200, false); }} className="py-2 bg-rose-900 hover:bg-rose-700 rounded-xl font-bold transition text-rose-200 text-xs">{getString("hardcoreAuto")}</button>
              </div>
            </div>
          )}

          {/* CONFIG GRILLES AVEC SELECTEUR DE TEMPS MANUEL */}
          {mode === "config-grid" && (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs text-slate-400"><span>{getString("gridConfigTitle")}</span><button onClick={() => setMode("menu")} className="text-blue-400 hover:underline">{getString("menu")}</button></div>
              
              <div className="bg-blue-950/60 p-3 rounded-xl border border-blue-500/50 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-bold text-blue-300">{getString("manualModeTitle")}</p>
                  <span className="text-xs font-mono font-bold bg-blue-900 px-2 py-0.5 rounded text-white">{manualGridCount} blocs | {manualGridDisplayTime}s</span>
                </div>
                <p className="text-[10px] text-slate-300">{getString("manualGridDesc")}</p>
                
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-blue-400">Nombre de blocs : {manualGridCount}</span>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={manualGridCount} 
                    onChange={(e) => setManualGridCount(parseInt(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-blue-400">Temps d'affichage (chrono) : {manualGridDisplayTime} secondes</span>
                  <input 
                    type="range" 
                    min="2" 
                    max="60" 
                    value={manualGridDisplayTime} 
                    onChange={(e) => setManualGridDisplayTime(parseInt(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>
                
                <div className="flex justify-between items-center gap-2 pt-1">
                  <input 
                    type="number" 
                    min="1" 
                    max="150" 
                    value={manualGridCount}
                    onChange={(e) => setManualGridCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 px-2 py-1 bg-slate-900 border border-blue-700/50 rounded-lg text-xs font-mono text-center text-blue-300 focus:outline-none"
                  />
                  <button 
                    onClick={() => { setMode("grid"); startGrid(manualGridCount, manualGridDisplayTime * 1000); }}
                    className="flex-1 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-bold transition text-white shadow"
                  >
                    {getString("launchManualGridBtn")} 🚀
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => { setMode("grid"); startGrid(2, 5000); }} className="py-2.5 bg-emerald-700 hover:bg-emerald-600 rounded-xl font-bold transition text-xs shadow-md">🟢 2 Blocs (5s)</button>
                <button onClick={() => { setMode("grid"); startGrid(4, 3000); }} className="py-2.5 bg-slate-800 hover:bg-blue-600 rounded-xl font-bold transition text-xs">4 Blocs (3s)</button>
                <button onClick={() => { setMode("grid"); startGrid(8, 2000); }} className="py-2.5 bg-slate-800 hover:bg-blue-600 rounded-xl font-bold transition text-xs">8 Blocs (2s)</button>
                <button onClick={() => { setMode("grid"); startGrid(12, 1000); }} className="py-2.5 bg-rose-900 hover:bg-rose-700 rounded-xl font-bold transition text-rose-200 text-xs">🔥 12 Blocs (1s)</button>
              </div>
            </div>
          )}

          {/* CONFIG VERBAL */}
          {mode === "config-verbal" && (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs text-slate-400"><span>{getString("verbalConfigTitle")}</span><button onClick={() => setMode("menu")} className="text-emerald-400 hover:underline">{getString("menu")}</button></div>
              <div className="flex flex-col gap-2.5">
                <button onClick={() => { setVerbalDifficulty("normal"); setVerbalIndex(0); setMode("verbal"); }} className="py-2.5 bg-slate-800 hover:bg-emerald-600 rounded-xl font-bold transition text-xs">Normal</button>
                <button onClick={() => { setVerbalDifficulty("hard"); setVerbalIndex(0); setMode("verbal"); }} className="py-2.5 bg-slate-800 hover:bg-emerald-600 rounded-xl font-bold transition text-xs">Avancé</button>
                <button onClick={() => { setVerbalDifficulty("genius"); setVerbalIndex(0); setMode("verbal"); }} className="py-2.5 bg-rose-900 hover:bg-rose-700 rounded-xl font-bold transition text-rose-200 text-xs">🔥 GÉNIE</button>
              </div>
            </div>
          )}

          {/* JEU CHIFFRES */}
          {mode === "numbers" && (
            <div className="flex flex-col items-center gap-2.5">
              <div className="flex justify-between w-full text-xs text-slate-400">
                <span>{getString("numbersTitle")} : <strong className="text-white">{level}</strong> {isManualMode && <span className="text-emerald-400 text-[10px]">(Manuel 🎯)</span>}</span>
                <button onClick={() => setMode("config-numbers")} className="text-cyan-400 hover:underline">{getString("back")}</button>
              </div>
              
              <div className="h-40 overflow-y-auto w-full bg-slate-950 rounded-xl border border-slate-800 p-3 pt-4 flex flex-col items-center shadow-inner scrollbar-thin">
                <span className="text-[11px] text-slate-500 mb-2 sticky top-0 bg-slate-950/95 py-0.5 px-3 rounded-full border border-slate-800 backdrop-blur z-10 shadow-sm">
                  {displaying ? getString("numFlashPrompt") : getString("numInputPrompt")}
                </span>
                <div className="flex flex-wrap justify-center gap-1.5 max-w-full pb-2 pt-1">
                  {(displaying ? sequence : (userAnswer || "...")).split("").map((char, index) => (
                    <span key={index} className="w-7 h-7 flex items-center justify-center text-sm font-mono font-bold text-cyan-300 bg-slate-900 rounded-md border border-slate-800 shadow">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {!displaying && (
                <form onSubmit={handleNumSubmit} className="flex flex-col w-full gap-2">
                  <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} placeholder="..." autoFocus className="px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-center text-lg font-mono tracking-wider focus:outline-none focus:border-cyan-500" />
                  <button type="submit" className="py-2.5 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-semibold text-xs transition">{getString("validate")}</button>
                </form>
              )}

              {message && (
                <p className={`text-xs font-bold text-center ${msgType === "error" ? "text-rose-500" : "text-emerald-400"}`}>
                  {message}
                </p>
              )}
            </div>
          )}

          {/* JEU GRILLES */}
          {mode === "grid" && (
            <div className="flex flex-col items-center gap-2.5">
              <div className="flex justify-between w-full text-xs text-slate-400">
                <span>{getString("gridTitle")} : <strong className="text-white">{gridSize}x{gridSize}</strong> ({targetTiles.length} blocs)</span>
                <button onClick={() => setMode("config-grid")} className="text-blue-400 hover:underline">{getString("back")}</button>
              </div>
              <p className="text-[11px] text-slate-400 text-center">{showingGrid ? getString("gridMemorize") : getString("gridFind")}</p>
              
              <div className="h-52 overflow-auto w-full bg-slate-950 rounded-xl border border-slate-800 p-4 flex items-center justify-center shadow-inner scrollbar-thin">
                <div 
                  className="grid gap-0.5 mx-auto p-2" 
                  style={{ 
                    gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` 
                  }}
                >
                  {Array.from({ length: gridSize * gridSize }).map((_, idx) => {
                    let isT = targetTiles.includes(idx); 
                    let isS = selectedTiles.includes(idx);
                    let bg = "bg-slate-800 hover:bg-slate-700";
                    
                    if (showingGrid) { 
                      if (isT) bg = "bg-white shadow-lg shadow-white/50"; 
                    } else if (isFinished) { 
                      if (isT) bg = "bg-emerald-500"; 
                      else if (isS) bg = "bg-rose-500"; 
                    } else { 
                      if (isS) bg = "bg-blue-600"; 
                    }

                    const tileSize = gridSize > 12 ? "w-3 h-3" : gridSize > 8 ? "w-4 h-4" : gridSize > 5 ? "w-5 h-5" : "w-7 h-7";

                    return (
                      <button 
                        key={idx} 
                        onClick={() => handleTile(idx)} 
                        className={`${tileSize} rounded-[2px] transition-all duration-200 ${bg}`} 
                      />
                    );
                  })}
                </div>
              </div>

              {message && (
                <div className="flex flex-col w-full gap-1.5">
                  <p className={`text-xs font-bold text-center ${msgType === "error" ? "text-rose-500" : "text-emerald-400"}`}>{message}</p>
                  <button onClick={() => startGrid(targetTiles.length, flashTime)} className="py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition">{getString("nextGrid")}</button>
                </div>
              )}
            </div>
          )}

          {/* JEU VERBAL */}
          {mode === "verbal" && (
            <div className="flex flex-col items-center gap-3">
              <div className="flex justify-between w-full text-xs text-slate-400"><span>{getString("verbalTitle")}</span><button onClick={() => setMode("config-verbal")} className="text-emerald-400 hover:underline">{getString("back")}</button></div>
              <div className="w-full bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                <p className="text-[10px] text-slate-400 mb-0.5">{getString("filRouge")}</p>
                <p className="text-sm font-bold text-emerald-300">{verbalPools[verbalDifficulty][verbalIndex].main}</p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                {verbalPools[verbalDifficulty][verbalIndex].options.map((opt, i) => (
                  <button key={i} onClick={() => handleVerbalChoice(opt)} className="py-2.5 bg-slate-800 hover:bg-emerald-600 rounded-xl font-semibold transition text-center text-xs">{opt}</button>
                ))}
              </div>
              {message && (
                <div className="flex flex-col w-full gap-1.5">
                  <p className={`text-xs font-bold text-center ${msgType === "error" ? "text-rose-500" : "text-emerald-400"}`}>{message}</p>
                  <button onClick={() => { setMessage(""); setMsgType("info"); setVerbalIndex((prev) => (prev + 1) % verbalPools[verbalDifficulty].length); }} className="py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition">{getString("next")}</button>
                </div>
              )}
            </div>
          )}

          {/* JEU PARENTHÈSE NARRATIVE */}
          {mode === "narrative" && (
            <div className="flex flex-col items-center gap-3">
              <div className="flex justify-between w-full text-xs text-slate-400">
                <span>{getString("narrativeMenu")} ({narrativeDifficulty})</span>
                <button onClick={() => setMode("config-narrative")} className="text-purple-400 hover:underline">{getString("back")}</button>
              </div>

              {narrativeStep === "moral" && (
                <div className="flex flex-col gap-3 w-full text-center">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <p className="text-[10px] text-slate-400 mb-1">{getString("memorizeIdea")}</p>
                    <p className="text-xs font-bold text-purple-300 leading-relaxed">
                      "{narrativePool[narrativeIndex].moral}"
                    </p>
                  </div>
                  <button onClick={() => setNarrativeStep("details")} className="py-2.5 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold text-xs transition">Voir les Détails ➔</button>
                </div>
              )}

              {narrativeStep === "details" && (
                <div className="flex flex-col gap-3 w-full text-center">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col gap-1.5">
                    <p className="text-[10px] text-slate-400">{getString("contextDetails")}</p>
                    {narrativePool[narrativeIndex].details.map((det, idx) => (
                      <p key={idx} className="text-xs font-mono text-cyan-300">{det}</p>
                    ))}
                  </div>
                  <button onClick={() => setNarrativeStep("question")} className="py-2.5 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold text-xs transition">Passer aux Choix Piégeux ➔</button>
                </div>
              )}

              {narrativeStep === "question" && (
                <div className="flex flex-col gap-2 w-full">
                  <div className="bg-slate-950 p-2 rounded-xl border border-slate-800 text-center">
                    <p className="text-[10px] text-slate-400">{getString("questionConceptExact")}</p>
                  </div>
                  {shuffledOptions.map((opt, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleNarrativeChoice(opt)} 
                      className="py-2 bg-slate-800 hover:bg-purple-700 rounded-xl font-medium transition text-[11px] text-center px-2 leading-snug border border-slate-700/50"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {message && (
                <div className="flex flex-col w-full gap-1.5">
                  <p className={`text-[11px] font-bold text-center ${msgType === "error" ? "text-rose-400" : "text-emerald-400"}`}>{message}</p>
                  <button onClick={() => { startNarrative(); }} className="py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition">{getString("nextStory")}</button>
                </div>
              )}
            </div>
          )}

          {/* JEU MODE CONCENTRATION */}
          {mode === "focus" && (
            <div className="flex flex-col items-center gap-3">
              <div className="flex justify-between w-full text-xs text-slate-400">
                <span>{getString("focusTitle")} ({focusLevel})</span>
                <button onClick={() => setMode("config-focus")} className="text-amber-400 hover:underline">{getString("back")}</button>
              </div>
              
              <div className="w-full bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                <p className="text-[10px] text-slate-400 mb-0.5">{getString("targetLabel")}</p>
                <p className="text-base font-extrabold text-amber-300 tracking-wider">⚡ {focusTarget} ⚡</p>
              </div>

              <p className="text-[11px] text-slate-400 text-center">{getString("instructionFocus")}</p>

              <div className={`grid ${focusLevel === "hard" ? "grid-cols-3" : "grid-cols-2"} gap-2 w-full`}>
                {focusChoices.map((opt, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleFocusChoice(opt)} 
                    className="py-2.5 bg-slate-800 hover:bg-amber-600 rounded-xl font-semibold transition text-center text-xs shadow-md"
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {message && (
                <p className={`text-xs font-bold text-center ${msgType === "error" ? "text-rose-500" : "text-emerald-400"}`}>
                  {message}
                </p>
              )}
            </div>
          )}

          {/* 🎙️ MODE JOURNALISTE */}
          {mode === "journalist" && (
            <div className="flex flex-col items-center gap-3">
              <div className="flex justify-between w-full text-xs text-slate-400">
                <span>{getString("journalistTitleHeader")} ({journalistLevel})</span>
                <button onClick={() => setMode("config-journalist")} className="text-indigo-400 hover:underline">{getString("back")}</button>
              </div>

              <div className="w-full bg-slate-950 p-3 rounded-xl border border-indigo-500/40 text-center flex flex-col gap-2 shadow-inner">
                <p className="text-[11px] text-indigo-300 font-medium">
                  {getString("journalistInstruction")}
                </p>
                <p className="text-xs font-serif italic text-white leading-relaxed bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                  {journalistPools[journalistLevel][journalistIndex]}
                </p>
              </div>

              {message && (
                <p className={`text-xs font-bold text-center ${msgType === "error" ? "text-rose-500" : "text-emerald-400"}`}>
                  {message}
                </p>
              )}

              <div className="flex flex-col w-full gap-2">
                <button 
                  onClick={handleJournalistDone} 
                  className="py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition shadow-md"
                >
                  {getString("journalistBtnDone")}
                </button>
                <button 
                  onClick={() => { setMessage(""); setMsgType("info"); setJournalistIndex((prev) => (prev + 1) % journalistPools[journalistLevel].length); }} 
                  className="py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl transition text-[11px]"
                >
                  {getString("journalistNext")}
                </button>
              </div>
            </div>
          )}

          {/* ANALYTICS (STATISTIQUES DÉTAILLÉES PAR JEU) */}
          {mode === "analytics" && (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>{getString("analyticsMenu")}</span>
                <button onClick={() => setMode("menu")} className="text-cyan-400 hover:underline">{getString("menu")}</button>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col gap-2.5 max-h-48 overflow-y-auto scrollbar-thin">
                <div className="flex justify-between items-center mb-0.5 border-b border-slate-900 pb-1">
                  <p className="text-[11px] font-semibold text-cyan-300">{getString("historyTitle")}</p>
                  <button 
                    onClick={clearAllStats} 
                    className="text-[10px] text-rose-400 hover:text-rose-300 underline font-medium transition"
                  >
                    {getString("resetHistory")}
                  </button>
                </div>

                {/* LIGNE CHIFFRES */}
                <div className="flex justify-between items-center bg-slate-900 p-2 rounded-lg border border-slate-800 text-xs">
                  <span className="text-slate-300 font-bold">🔢 {getString("numbersTitle")}</span>
                  <div className="flex gap-3 font-mono font-bold">
                    <span className="text-emerald-400">✔ {numSuccess}</span>
                    <span className="text-rose-500">✖ {numErrors}</span>
                  </div>
                </div>

                {/* LIGNE GRILLES */}
                <div className="flex justify-between items-center bg-slate-900 p-2 rounded-lg border border-slate-800 text-xs">
                  <span className="text-slate-300 font-bold">🟩 {getString("gridTitle")}</span>
                  <div className="flex gap-3 font-mono font-bold">
                    <span className="text-emerald-400">✔ {gridSuccess}</span>
                    <span className="text-rose-500">✖ {gridErrors}</span>
                  </div>
                </div>

                {/* LIGNE VERBAL */}
                <div className="flex justify-between items-center bg-slate-900 p-2 rounded-lg border border-slate-800 text-xs">
                  <span className="text-slate-300 font-bold">🗣️ {getString("verbalTitle")}</span>
                  <div className="flex gap-3 font-mono font-bold">
                    <span className="text-emerald-400">✔ {verbalSuccess}</span>
                    <span className="text-rose-500">✖ {verbalErrors}</span>
                  </div>
                </div>

                {/* LIGNE RÉCIT */}
                <div className="flex justify-between items-center bg-slate-900 p-2 rounded-lg border border-slate-800 text-xs">
                  <span className="text-slate-300 font-bold">📖 {getString("narrativeTitle")}</span>
                  <div className="flex gap-3 font-mono font-bold">
                    <span className="text-emerald-400">✔ {narrativeSuccess}</span>
                    <span className="text-rose-500">✖ {narrativeErrors}</span>
                  </div>
                </div>

                {/* LIGNE CONCENTRATION */}
                <div className="flex justify-between items-center bg-slate-900 p-2 rounded-lg border border-slate-800 text-xs">
                  <span className="text-slate-300 font-bold">🎯 {getString("focusTitle")}</span>
                  <div className="flex gap-3 font-mono font-bold">
                    <span className="text-emerald-400">✔ {focusSuccess}</span>
                    <span className="text-rose-500">✖ {focusErrors}</span>
                  </div>
                </div>

                {/* LIGNE ÉLOCUTION */}
                <div className="flex justify-between items-center bg-slate-900 p-2 rounded-lg border border-slate-800 text-xs">
                  <span className="text-slate-300 font-bold">🎙️ {getString("journalistTitle")}</span>
                  <div className="flex gap-3 font-mono font-bold">
                    <span className="text-emerald-400">✔ {journalistSuccess}</span>
                    <span className="text-slate-500">✖ 0</span>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}