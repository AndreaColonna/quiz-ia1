const originalQuestions = [
    {
        question: "Quali sono i principali vantaggi dell’utilizzo dell’Intelligenza Artificiale nelle piattaforme di e-commerce?",
        options: [
            "Aumentare la velocità di consegna",
            "Maggiore affidabilità dei server",
            "Maggiore sicurezza dei dati degli utenti",
            "Migliore personalizzazione dell’offerta"
        ],
        correctAnswer: "Migliore personalizzazione dell’offerta"
    },
    {
        question: "Quando fu introdotto il termine “Intelligenza Artificiale”? ",
        options: ["2001", "1970", "1956", "1940"],
        correctAnswer: "1956"
    },
    {
        question: "In che anno il sistema IBM Watson vinse nel quiz televisivo Jeopardy?",
        options: ["1991", "2011", "2021", "1961"],
        correctAnswer: "2011"
    },
    {
        question: "Cosa caratterizza il Machine Learning?",
        options: [
            "Programmazione basata su linguaggio macchina",
            "Automazione di compiti manuali senza apprendimento",
            "Capacità di un sistema di apprendere dai dati e migliorare le prestazioni nel tempo",
            "Utilizzo di algoritmi di dominio"
        ],
        correctAnswer: "Capacità di un sistema di apprendere dai dati e migliorare le prestazioni nel tempo"
    },
    {
        question: "Qual è un esempio di applicazione di Machine Learning nella visione artificiale?",
        options: [
            "Calcolo della traiettoria di un proiettile",
            "Riconoscimento facciale",
            "Oculistica",
            "Analisi del suolo"
        ],
        correctAnswer: "Riconoscimento facciale"
    },
    {
        question: "In che modo il Deep Learning viene spesso utilizzato per migliorare l’esperienza degli utenti su piattaforme online?",
        options: [
            "Miglioramento canali di vendita",
            "Stampa 3D",
            "Raccomandazioni personalizzate di contenuti",
            "Scontistica"
        ],
        correctAnswer: "Raccomandazioni personalizzate di contenuti"
    },
    {
        question: "Qual è uno dei vantaggi del Deep Learning nell’ambito del riconoscimento del linguaggio naturale?",
        options: [
            "Costante supervisione umana",
            "Etichettatura manuale di ogni dato di addestramento",
            "Capacità di comprendere il contesto e la semantica delle frasi",
            "Nessun addestramento iniziale richiesto"
        ],
        correctAnswer: "Capacità di comprendere il contesto e la semantica delle frasi"
    },
    {
        question: "Qual è l’elemento chiave dei modelli Deep Learning?",
        options: [
            "Utilizzo della logica booleana",
            "Strutture di rete neurali profonde con più strati",
            "Preferenza per algoritmi di apprendimento supervisionato",
            "Dipendenza solo da dati di addestramento etichettati"
        ],
        correctAnswer: "Strutture di rete neurali profonde con più strati"
    },
    {
        question: "Quali sono i concetti tecnici specifici di base che generano componenti o modelli di Intelligenza Artificiale?",
        options: [
            "Algoritmi",
            "Euristiche",
            "Complessità",
            "Tutti e tre le risposte precedenti"
        ],
        correctAnswer: "Tutti e tre le risposte precedenti"
    },
    {
        question: "In quale settore l’uso del Machine Learning è comune per la raccomandazione di prodotti o contenuti personalizzati?",
        options: [
            "Nessuno di questi",
            "Agricoltura",
            "Medicina",
            "E-commerce"
        ],
        correctAnswer: "E-commerce"
    },
    {
        question: "Qual è uno dei principali vantaggi del Deep Learning rispetto ai metodi tradizionali di apprendimento automatico?",
        options: [
            "Nessun addestramento richiesto",
            "Maggiore certezza degli output",
            "Capacità di individuare automaticamente features rilevanti",
            "Maggiore interpretabilità"
        ],
        correctAnswer: "Capacità di individuare automaticamente features rilevanti"
    },
    {
        question: "Qual è l’obiettivo principale di un’euristica?",
        options: [
            "Risolvere solo problemi semplici",
            "Trovare sempre la soluzione ottimale",
            "Evitare completamente l’uso di algoritmi",
            "Fornire una soluzione approssimata in tempi rapidi"
        ],
        correctAnswer: "Fornire una soluzione approssimata in tempi rapidi"
    },
    {
        question: "Quale dei seguenti è un approccio generale che supporta comunemente l’Intelligenza Artificiale?",
        options: [
            "Semantica",
            "Euristica",
            "Epistemologia",
            "Olistica"
        ],
        correctAnswer: "Euristica"
    },
    {
        question: "Da cosa può dipendere la “complessità” nella Intelligenza Artificiale?",
        options: [
            "Dimensione e varietà dei dati",
            "Il tipo di dominio scelto",
            "Tempo di inserimento dei dati",
            "Il tipo di hardware utilizzato"
        ],
        correctAnswer: "Dimensione e varietà dei dati"
    },
    {
        question: "Un algoritmo è ….?",
        options: [
            "Un dispositivo hardware",
            "Un linguaggio di programmazione",
            "Una sequenza di passi ben definiti per risolvere un problema",
            "Un’astrazione matematica"
        ],
        correctAnswer: "Una sequenza di passi ben definiti per risolvere un problema"
    },
    {
        question: "Cosa è una rete neurale?",
        options: [
            "Un tipo di algoritmo di ordinamento",
            "Un programma di apprendimento automatico",
            "Un insieme di equazioni matematiche",
            "Un modello computazionale ispirato alla struttura e al funzionamento del cervello"
        ],
        correctAnswer: "Un modello computazionale ispirato alla struttura e al funzionamento del cervello"
    },
    {
        question: "Quando si applica la “regola del pollice” relativamente all’Intelligenza Artificiale?",
        options: [
            "Quando serve una risposta articolata e certa",
            "Quando la precisione della risposta è necessaria",
            "Quando la precisione completa non è necessaria e si desidera una soluzione rapida e praticabile",
            "Quando c’è la necessità di risolvere problemi semplici"
        ],
        correctAnswer: "Quando la precisione completa non è necessaria e si desidera una soluzione rapida e praticabile"
    }
];
