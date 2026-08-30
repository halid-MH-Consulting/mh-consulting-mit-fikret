import type { Dictionary } from './en'

/*
  Italienisch. Angesprochen wird das Unternehmen, nicht die Einzelperson,
  deshalb durchgaengig die zweite Person Plural ("voi"): im italienischen
  B2B-Marketing der uebliche und zugleich unaufdringliche Ton.

  Wie im Deutschen gilt: uebersetzt wurde die Haltung, nicht der Satzbau.
*/
export const it: Dictionary = {
  common: {
    skipToContent: 'Vai al contenuto',
    startProject: 'Avvia un progetto',
    readOn: 'Continua',
    backHome: 'Torna a MH Consulting',
    lastUpdated: 'Ultimo aggiornamento',
  },

  nav: {
    home: 'MH Consulting, home',
    main: 'Navigazione principale',
    mobile: 'Navigazione mobile',
    openMenu: 'Apri il menu',
    closeMenu: 'Chiudi il menu',
    forBrands: 'Per i brand',
    forCreators: 'Per i creator',
    about: 'Chi siamo',
    faq: 'Domande',
    contact: 'Contatti',
  },

  meta: {
    home: {
      title: 'MH Consulting — Influencer marketing per i brand del turismo | Dubai',
      description:
        'MH Consulting è un’agenzia di influencer marketing con sede a Dubai che trasforma i creator in partner di lungo periodo. Specializzata in viaggi, turismo, hotel, compagnie aeree, eSIM, VPN e travel tech. Attiva in tutto il mondo.',
      ogTitle: 'MH Consulting — Influencer marketing per i brand del turismo',
      ogDescription:
        'Agenzia di influencer marketing con sede a Dubai che trasforma i creator in partner di lungo periodo.',
    },
    forBrands: {
      title: 'Per i brand — collaborazioni che sopravvivono alla prima campagna | MH Consulting',
      description:
        'Per enti del turismo, hotel, compagnie aeree e travel tech: come MH Consulting costruisce collaborazioni con i creator attorno a obiettivi di business invece che a singoli post sponsorizzati.',
      ogTitle: 'Per i brand — MH Consulting',
      ogDescription:
        'Collaborazioni costruite attorno a obiettivi di business, per brand del turismo che guardano oltre la singola campagna.',
    },
    forCreators: {
      title: 'Per i creator — entra nel roster di MH Consulting | MH Consulting',
      description:
        'Per i creator di viaggio: negoziamo le condizioni, rincorriamo le fatture e trasformiamo i contratti isolati in collaborazioni che tornano. Cosa cerchiamo e come candidarsi.',
      ogTitle: 'Per i creator — MH Consulting',
      ogDescription:
        'Negoziamo le condizioni, rincorriamo le fatture e trasformiamo i contratti isolati in collaborazioni che tornano.',
    },
    about: {
      title: 'Chi siamo — base a Dubai, metodo europeo | MH Consulting',
      description:
        'MH Consulting è un’agenzia di influencer marketing per brand del turismo, con sede a Dubai e attiva in tutto il mondo. Come ragioniamo su creator, prove e collaborazioni di lungo periodo.',
      ogTitle: 'Chi è MH Consulting',
      ogDescription:
        'Agenzia di influencer marketing per brand del turismo, con sede a Dubai e attiva in tutto il mondo.',
    },
    contact: {
      title: 'Contatti — diteci cosa volete muovere | MH Consulting',
      description:
        'Parlate con MH Consulting di una campagna con i creator, oppure candidatevi al roster. Rispondiamo a ogni richiesta entro due giorni lavorativi, da Dubai.',
      ogTitle: 'Contattare MH Consulting',
      ogDescription:
        'Parlate con noi di una campagna con i creator o candidatevi al roster. Ogni richiesta riceve risposta entro due giorni lavorativi.',
    },
    legalNotice: {
      title: 'Note legali — MH Consulting',
      description: 'Dati societari di MH Consulting, Dubai.',
    },
    privacy: {
      title: 'Informativa privacy — MH Consulting',
      description: 'Come MH Consulting tratta i dati personali.',
    },
  },

  hero: {
    location: 'Dubai, EAU — attivi in tutto il mondo',
    line1: 'Gestiamo i',
    words: ['creator', 'le collaborazioni', 'le campagne', 'gli accordi giusti'],
    line3: 'che i brand',
    line3Accent: 'vogliono davvero.',
    lead: 'MH Consulting è il collegamento tra i creator di viaggio e gli sponsor che vogliono il loro pubblico. Niente rumore, niente numeri gonfiati: solo accordi che hanno senso da entrambe le parti.',
    ctaPrimary: 'Avvia un progetto',
    ctaSecondary: 'Cosa facciamo',
    videoLabel:
      'Riprese di viaggio dei nostri creator: Dubai al tramonto, dune del deserto, strade nel canyon.',
  },

  industries: {
    label: 'Settori per cui lavoriamo',
    items: [
      'Brand del turismo',
      'Enti del turismo',
      'Compagnie aeree',
      'Hotel',
      'Travel tech',
      'Operatori eSIM',
      'Operatori VPN',
      'App di viaggio',
    ],
  },

  core: {
    line1: 'Non promozioni isolate.',
    line2: 'Non sponsorizzazioni casuali.',
    line3: 'Collaborazioni vere.',
    lead: 'Mettiamo in contatto brand ambiziosi con creator scelti con cura, e teniamo in piedi quelle relazioni abbastanza a lungo perché fiducia, portata e ricavi si sommino.',
  },

  audience: {
    srHeading: 'Scegliete il vostro percorso',
    brands: {
      kicker: 'Per i brand',
      title: 'Vi servono creator a cui il vostro pubblico crede.',
      body: 'Enti del turismo, hotel, compagnie aeree, travel tech, eSIM e VPN. Cosa ricevete, come si svolge una collaborazione e quanto tempo vi costa.',
    },
    creators: {
      kicker: 'Per i creator',
      title: 'Vi servono brief, non un’altra email di presentazione.',
      body: 'Negoziamo le condizioni, rincorriamo le fatture e vi portiamo lavori in linea con quello che già fate. Cosa cerchiamo e come candidarsi.',
    },
  },

  services: {
    heading: 'Quattro modi per costruire collaborazioni che funzionano.',
    lead: 'Ogni collaborazione parte dalla stessa domanda: a quale creator crederebbe davvero questo pubblico?',
    label: 'Servizi',
    items: [
      {
        title: 'Costruire notorietà',
        tagline: 'Farsi conoscere dal pubblico giusto',
        description:
          'Portiamo il vostro brand davanti a un pubblico di viaggio realmente attento, attraverso creator la cui voce si accorda con la vostra storia, non attraverso chi ha il numero più grande.',
        capabilities: ['Ricerca di mercato', 'Strategia di contenuto', 'Competenza nel turismo'],
      },
      {
        title: 'Selezione dei creator',
        tagline: 'I creator giusti, verificati con cura',
        description:
          'Prepariamo una rosa a partire da un roster internazionale e verifichiamo ciascun creator su autenticità, qualità del pubblico e coerenza con il brand prima che arrivi a voi.',
        capabilities: ['Verifica di autenticità', 'Analisi del pubblico', 'Coerenza con il brand'],
      },
      {
        title: 'Campagne ad alto impatto',
        tagline: 'Dal concept a risultati misurabili',
        description:
          'Seguiamo le campagne dall’inizio alla fine: concept, negoziazione, tempistiche, consegne e reportistica. Avete un solo interlocutore invece di dodici caselle di posta.',
        capabilities: ['Gestione campagne', 'Negoziazione', 'Reportistica trasparente'],
      },
      {
        title: 'Consulenza',
        tagline: 'Strategia per il lungo periodo',
        description:
          'Vi aiutiamo a costruire un programma con i creator che sopravviva alla singola campagna, con la struttura e gli standard per proseguirlo dopo il passaggio di consegne.',
        capabilities: ['Programmi creator', 'Strategia di canale', 'Formazione del team'],
      },
    ],
  },

  whyUs: {
    heading: 'Cosa ci distingue.',
    points: [
      {
        title: 'Qualità prima della quantità',
        body: 'Misuriamo i creator sulla fiducia e sulla coerenza, mai sul numero di follower. Meno collaborazioni, migliori, che portano risultati reali.',
      },
      {
        title: 'Rete internazionale di creator',
        body: 'Un roster curato che copre le destinazioni e i pubblici che contano per il vostro brand.',
      },
      {
        title: 'Creator verificati con cura',
        body: 'Ogni partner viene controllato su autenticità e qualità del pubblico prima che ve lo proponiamo.',
      },
      {
        title: 'Strategia orientata ai risultati',
        body: 'Campagne costruite attorno a obiettivi di business e a una reportistica trasparente, non a metriche di facciata.',
      },
      {
        title: 'Comunicazione trasparente',
        body: 'Sapete sempre cosa sta succedendo, perché, e che cosa sta producendo.',
      },
      {
        title: 'Base a Dubai, metodo europeo',
        body: 'Portata globale con il rigore e gli standard dell’esperienza di marketing europea.',
      },
    ],
  },

  network: {
    heading: 'Una base a Dubai. Creator ovunque sia il vostro pubblico.',
    lead: 'Abbiniamo la voce giusta alla destinazione giusta, così il consiglio arriva da qualcuno che ci è stato davvero.',
    mapLabel:
      'Mappa del mondo con la rete di creator di MH Consulting: una base a Dubai collegata a Londra, New York, Singapore, Città del Capo, Sydney, Tokyo, São Paulo e Bali',
    hub: 'Dubai (base)',
  },

  process: {
    heading: 'Un processo chiaro, dalla prima idea alla collaborazione duratura.',
    steps: [
      {
        title: 'Ricerca e strategia',
        body: 'Studiamo il vostro mercato, il pubblico e gli obiettivi per definire una strategia con i creator che si adatti al brand.',
      },
      {
        title: 'Selezione dei creator',
        body: 'Prepariamo la rosa dalla nostra rete internazionale e la verifichiamo su autenticità e coerenza.',
      },
      {
        title: 'Negoziazione e pianificazione',
        body: 'Curiamo il contatto, la negoziazione e la pianificazione, perché condizioni e contenuti puntino al risultato.',
      },
      {
        title: 'Gestione della campagna',
        body: 'Seguiamo la campagna dall’inizio alla fine, tenendo in riga creator, tempistiche e consegne.',
      },
      {
        title: 'Risultati e collaborazione',
        body: 'Analizziamo i risultati, riportiamo con trasparenza e facciamo crescere le collaborazioni migliori nel lungo periodo.',
      },
    ],
  },

  stats: {
    srHeading: 'MH Consulting in cifre',
    items: ['Paesi raggiunti', 'Campagne realizzate', 'Creator verificati', 'Collaborazioni con brand'],
    note: 'Valori segnaposto — sostituirli con dati reali prima della pubblicazione.',
  },

  /*
    Unter der Ueberschrift stehen nur noch die Markenzeichen selbst,
    keine Zitate mehr.
  */
  testimonials: {
    heading: 'Scelti da brand che ragionano sul lungo periodo.',
  },

  faq: {
    heading: 'Domande, con risposta.',
    leadBefore: 'Non siete sicuri che facciamo al caso vostro?',
    leadLink: 'Chiedetecelo direttamente',
    items: [
      {
        q: 'Lavorate solo con brand del turismo?',
        a: 'Viaggi, turismo, hotel, compagnie aeree, travel tech, operatori eSIM e VPN sono il nostro nucleo. Seguiamo però anche brand ambiziosi di altri settori che tengono a collaborazioni vere con i creator.',
      },
      {
        q: 'Come scegliete i creator?',
        a: 'Verifichiamo ogni creator su autenticità, qualità del pubblico e coerenza con il brand. Il numero di follower non è mai il criterio decisivo: lo sono fiducia e pertinenza.',
      },
      {
        q: 'Com’è fatta una collaborazione?',
        a: 'Invece di post sponsorizzati isolati costruiamo relazioni continuative tra il vostro brand e i creator, così la vostra presenza guadagna fiducia e portata nel tempo.',
      },
      {
        q: 'Dove avete sede e con chi lavorate?',
        a: 'Abbiamo sede a Dubai e lavoriamo in tutto il mondo, unendo portata internazionale e standard di marketing europei.',
      },
      {
        q: 'Come misurate il successo?',
        a: 'Definiamo il successo a partire dai vostri obiettivi di business e riportiamo con trasparenza le metriche che contano, non i like di facciata.',
      },
    ],
  },

  finalCta: {
    headingBefore: 'Costruiamo insieme la vostra prossima',
    headingAccent: 'campagna',
    headingAfter: '.',
    lead: 'Raccontateci il vostro brand e i vostri obiettivi. Rispondiamo a ogni richiesta entro due giorni lavorativi, dicendo chiaramente se facciamo al caso vostro.',
    email: 'Email',
    location: 'Sede',
    locationValue: 'Dubai, EAU — attivi in tutto il mondo',
  },

  form: {
    optional: '(facoltativo)',
    name: 'Nome',
    email: 'Email di lavoro',
    company: 'Azienda',
    budget: 'Budget',
    budgetPlaceholder: 'Scegliete una fascia',
    budgets: ['Sotto 10k', '10k – 25k', '25k – 50k', '50k+', 'Ancora da definire'],
    message: 'Che cosa volete ottenere?',
    messagePlaceholder: 'Destinazione, pubblico, tempistiche — tutto quello che già sapete.',
    submit: 'Invia richiesta',
    sending: 'Invio in corso…',
    preferEmailBefore: 'Preferite l’email? Scrivete a',
    errName: 'Indicateci il vostro nome.',
    errEmail: 'Controllate questo indirizzo.',
    errMessage: 'Una o due frasi sul vostro brand ci aiutano a rispondere come si deve.',
    sentTitle: 'Grazie, è in viaggio.',
    sentBodyBefore:
      'Rispondiamo a ogni richiesta entro due giorni lavorativi. Se il vostro programma di posta non si è aperto, scrivete a',
    sendAnother: 'Invia un’altra richiesta',
    subjectPrefix: 'Richiesta di progetto',
  },

  footer: {
    tagline:
      'Influencer marketing per i brand del turismo. Trasformiamo i creator in partner di lungo periodo, da una base a Dubai.',
    pages: 'Pagine',
    legal: 'Legale',
    whatWeDo: 'Cosa facciamo',
    legalNotice: 'Note legali',
    privacy: 'Informativa privacy',
    rights: 'Tutti i diritti riservati.',
  },

  languageSwitcher: {
    label: 'Lingua',
    current: 'Lingua attuale',
    change: 'Cambia lingua',
  },

  notFound: {
    heading: 'Questa pagina ha preso un’altra strada.',
    body: 'Il link è rotto oppure la pagina è stata spostata. Tutto quello che facciamo è sulla home.',
    back: 'Torna alla home',
    email: 'Scriveteci invece',
  },

  forBrands: {
    title: 'Creator a cui il vostro pubblico',
    titleAccent: 'crede già.',
    lead: 'Non vi mancano persone disposte a pubblicare qualcosa sulla vostra destinazione. Vi mancano persone il cui consiglio cambia davvero una decisione di prenotazione. Quella differenza è tutto il lavoro.',
    cta: 'Parliamo del vostro brand',
    problemHeading: 'Perché la maggior parte dei budget influencer delude.',
    problemLead: 'Raramente è colpa del creator. Quasi sempre è l’impianto attorno a lui.',
    wrongHeading: 'Cosa succede di solito',
    rightHeading: 'Come lo gestiamo noi',
    wrong: [
      'Si sceglie in base ai follower, poi ci si chiede perché non si sia mosso nulla',
      'Un post eccellente, e nessun diritto di usarlo altrove',
      'Creator che non sono mai stati nella destinazione che stanno vendendo',
      'Una campagna, nessuna relazione, e il trimestre dopo si riparte da zero',
    ],
    right: [
      'Si sceglie in base alla coerenza del pubblico e ai risultati dimostrabili',
      'Diritti d’uso ed esclusiva definiti prima della prima inquadratura',
      'Creator con una storia reale e verificabile nella vostra area',
      'Collaborazioni che diventano più economiche e migliori man mano che durano',
    ],
    deliverablesHeading: 'Cosa ricevete davvero.',
    deliverables: [
      {
        title: 'Una rosa che potete difendere internamente',
        body: 'Ogni creator arriva con la motivazione: chi è davvero il suo pubblico, quali vostre destinazioni copre in modo credibile e che risultati ha portato la sua ultima campagna paragonabile. Nessun elenco di nomi senza argomenti.',
      },
      {
        title: 'Condizioni negoziate prima che qualcuno giri',
        body: 'Diritti d’uso, finestre di esclusiva, numero di consegne, condizioni per le riprese aggiuntive e piano di pagamento si definiscono prima. Nel marketing con i creator le sorprese costose nascono quasi sempre da ciò che nessuno ha messo per iscritto.',
      },
      {
        title: 'Un solo interlocutore, non dodici caselle di posta',
        body: 'Curiamo calendario, brief, approvazioni e solleciti. Il vostro team rivede e approva; non coordina otto liberi professionisti su cinque fusi orari.',
      },
      {
        title: 'Report che reggono in una riunione di budget',
        body: 'Risultati rispetto agli obiettivi concordati all’inizio, con gli insuccessi nominati con la stessa chiarezza dei successi. Se un creator ha reso meno del previsto, sta nel report.',
      },
    ],
    engagementHeading: 'Come si svolge una collaborazione.',
    engagementLead:
      'Tempistiche indicative per una prima campagna. Le collaborazioni più lunghe le comprimono parecchio, perché la verifica è già fatta.',
    engagement: [
      {
        when: 'Settimana 1',
        what: 'Perimetro e obiettivi',
        body: 'Definiamo che cosa significa successo in numeri, quali mercati contano e che cosa avete già provato. Se riteniamo che il marketing con i creator non sia lo strumento adatto, lo diciamo qui.',
      },
      {
        when: 'Settimane 2–3',
        what: 'Rosa e condizioni',
        body: 'Ricevete una rosa con le motivazioni e i costi indicativi. Negoziamo con i creator scelti e riportiamo condizioni firmate.',
      },
      {
        when: 'Settimane 4–8',
        what: 'Produzione e pubblicazione',
        body: 'Brief, riprese, giri di revisione e calendario. Voi approvate; noi curiamo tutto ciò che sta attorno all’approvazione.',
      },
      {
        when: 'Dopo',
        what: 'Risultati e passi successivi',
        body: 'Un report rispetto agli obiettivi concordati, più un consiglio su quali creator convenga tenere nel lungo periodo.',
      },
    ],
    ctaTitle: 'Diteci cosa volete muovere.',
    ctaBody:
      'Prenotazioni, notorietà in un nuovo mercato, un lancio con una data precisa. Portate l’obiettivo e vi diremo onestamente se i creator sono la leva giusta.',
    ctaSecondary: 'Chi siamo',
  },

  forCreators: {
    title: 'Basta proporsi ai brand.',
    titleAccent: 'Cominciate a ricevere brief.',
    lead: 'Non siete diventati creator di viaggio per scrivere solleciti su fatture non pagate. Curiamo noi la parte commerciale, così il vostro tempo va dove siete davvero bravi.',
    cta: 'Candidatevi al roster',
    splitHeading: 'Chi fa che cosa.',
    splitLead: 'La divisione è volutamente noiosa, ed è il motivo per cui queste collaborazioni durano.',
    weHandleHeading: 'Curiamo noi',
    youHandleHeading: 'Curate voi',
    weHandle: [
      'Trovare brief in linea con quello che già fate',
      'Compensi, diritti d’uso ed esclusiva, negoziati come si deve',
      'Contratti, fatturazione e solleciti sui pagamenti in ritardo',
      'Scadenze, revisioni e le conversazioni scomode con il cliente',
    ],
    youHandle: [
      'Il lavoro vero e proprio, con la vostra voce',
      'Essere dove avete detto, quando avete detto',
      'Avvisarci per tempo se qualcosa salta',
      'Dire di no ai brief che vi costerebbero il pubblico',
    ],
    criteriaHeading: 'Cosa cerchiamo.',
    criteriaLead: 'Il numero di follower non è in questa lista. Non lo è mai stato.',
    criteria: [
      {
        title: 'Un pubblico definito, di qualunque dimensione',
        body: 'Un creator con 8.000 persone che gli credono su una regione è più facile da collocare di uno con 400.000 che non gli credono su niente in particolare. Abbiamo ingaggiato entrambi. Il piccolo rende più spesso.',
      },
      {
        title: 'Viaggi veri dietro ai contenuti',
        body: 'I brand controllano sempre di più. Se la vostra copertura delle destinazioni non regge a un’occhiata al vostro stesso profilo, quella conversazione non conviene a nessuno dei due.',
      },
      {
        title: 'Interazioni che si comportano come persone',
        body: 'Guardiamo la qualità dei commenti, le curve di crescita e la provenienza del pubblico. Le interazioni comprate si vedono subito e chiudono il discorso.',
      },
      {
        title: 'Rispondete ai messaggi',
        body: 'Poco affascinante, ed è di gran lunga il motivo più frequente per cui un creator esce dalla nostra lista. I brand ingaggiano chi risponde.',
      },
    ],
    joinHeading: 'Come entrare.',
    steps: [
      {
        title: 'Mandateci il vostro lavoro',
        body: 'I vostri profili, le destinazioni che coprite e due o tre lavori di cui andate davvero fieri. A questo punto non serve un media kit.',
      },
      {
        title: 'Guardiamo con attenzione',
        body: 'Pubblico, storia, coerenza con i brand con cui lavoriamo. Ricevete una risposta in ogni caso, di solito entro due settimane.',
      },
      {
        title: 'Entrate nel roster',
        body: 'Vi contattiamo quando arriva un brief adatto. Nessuna esclusiva, nessun costo, nessun obbligo di accettare.',
      },
    ],
    honestNote:
      'Diciamo di no più spesso che di sì, e vi spieghiamo perché. Un no oggi non è un no per sempre: diversi creator nel roster si sono candidati due volte.',
    ctaTitle: 'Mandateci il vostro lavoro.',
    ctaBody:
      'Profili, le regioni che coprite e un paio di lavori di cui andate fieri. Per cominciare basta questo.',
    ctaSecondary: 'Chi siamo',
  },

  about: {
    title: 'Base a Dubai.',
    titleAccent: 'Metodo europeo.',
    lead: 'Dubai ci mette a poche ore di volo dai mercati che interessano ai nostri clienti e nella stessa settimana lavorativa della maggior parte di loro. Il modo in cui lavoriamo, invece, viene da tutt’altra parte.',
    whyHeading: 'Perché esistiamo.',
    why1: 'Nel turismo l’influencer marketing è diventato bravissimo a sembrare impegnato. Si prenotano campagne, escono i post, gli screenshot finiscono in una presentazione, e dopo nessuno sa dire se qualcosa abbia mosso una prenotazione.',
    why2: 'Siamo partiti dall’estremo opposto: che cosa dovrebbe vedere un brand prima di rinnovare una collaborazione con un creator per un secondo anno? Quella domanda esclude gran parte di ciò che il settore vende. Esclude gli acquisti a peso di follower, le sponsorizzazioni isolate e i report costruiti sulle impression.',
    why3: 'Quello che resta è più lento, più piccolo e molto più duraturo. È il mestiere che facciamo.',
    principlesHeading: 'Come lavoriamo.',
    principlesLead: 'Quattro posizioni che teniamo anche quando sono scomode.',
    principles: [
      {
        title: 'Meglio perdere il brief che allungare la lista',
        body: 'Se non abbiamo tre creator davvero adatti, lo diciamo invece di aggiungerne un quarto che quasi lo è. Ogni tanto ci costa un incarico. Non ci ha mai fatto perdere un cliente.',
      },
      {
        title: 'Il numero sul profilo è il numero meno interessante',
        body: 'Provenienza del pubblico, qualità dei commenti, forma della crescita e risultati ripetuti dicono che cosa produrrà una collaborazione. Il numero di follower dice soprattutto quanto costerà.',
      },
      {
        title: 'Tutto ciò che costa è un dettaglio che nessuno ha scritto',
        body: 'Diritti d’uso, esclusiva, riprese aggiuntive, giri di approvazione. Li definiamo prima della produzione: per questo dalle nostre campagne raramente nascono fatture contestate.',
      },
      {
        title: 'Un report con dentro solo buone notizie non è un report',
        body: 'Diciamo che cosa ha reso meno del previsto e che cosa faremmo diversamente. I brand restano con le agenzie che dicono la verità nel secondo trimestre.',
      },
    ],
    hubHeading: 'Una base, una rete, nessun ufficio nel mezzo.',
    hubLead:
      'Al centro siamo volutamente piccoli. La portata viene dalla rete di creator, non da una catena di filiali da mantenere.',
    hubBody:
      'In concreto: un team a Dubai che conosce ogni cliente, e creator verificati nei luoghi che il vostro pubblico sta già guardando.',
    ctaTitle: 'Due modi per iniziare.',
    ctaBody:
      'I brand ci dicono che cosa vogliono muovere. I creator ci mandano il loro lavoro. Entrambi partono dallo stesso breve messaggio.',
    ctaBrands: 'Rappresento un brand',
    ctaCreators: 'Sono un creator',
  },

  contact: {
    title: 'Diteci che cosa',
    titleAccent: 'volete muovere.',
    lead: 'Prenotazioni, notorietà in un nuovo mercato, un lancio con una data precisa. Oppure il vostro lavoro, se siete creator in cerca di brief. Si parte da qui in entrambi i casi.',
    reachHeading: 'Contatto diretto',
    responseTime: 'Ogni richiesta riceve risposta entro due giorni lavorativi',
    nextHeading: 'Che cosa succede dopo',
    next: [
      {
        title: 'Ricevete la risposta di una persona, non un numero di ticket',
        body: 'Entro due giorni lavorativi, da chi seguirebbe davvero il vostro progetto.',
      },
      {
        title: 'Ve lo diciamo se non siamo adatti',
        body: 'Se il marketing con i creator non muoverà l’obiettivo che descrivete, ve lo diciamo invece di vendervi una campagna.',
      },
      {
        title: 'Poi una call, se ha senso',
        body: 'Trenta minuti, senza presentazione. Chiediamo obiettivo, mercato e fascia di budget, e ricevete una risposta chiara su che cosa è realistico.',
      },
    ],
    doorsHeading: 'Non sapete ancora cosa scrivere?',
    doorBrands: 'Rappresento un brand',
    doorBrandsBody: 'Cosa ricevete e come si svolge una collaborazione.',
    doorCreators: 'Sono un creator',
    doorCreatorsBody: 'Cosa cerchiamo e come candidarsi.',
  },

  legalNotice: {
    heading: 'Note legali',
    intro:
      'Questa pagina è predisposta ma non ancora completa. Le voci contrassegnate qui sotto vanno compilate con i dati societari registrati prima della pubblicazione.',
    companyHeading: 'Società',
    companyName: 'ragione sociale e forma giuridica registrate',
    companyAddress: 'indirizzo, Dubai, Emirati Arabi Uniti',
    contactHeading: 'Contatti',
    phone: 'Telefono',
    phoneValue: 'numero di telefono',
    registrationHeading: 'Registrazione',
    licence: 'Numero di licenza commerciale',
    licenceValue: 'numero di licenza',
    authority: 'Autorità che l’ha rilasciata',
    authorityValue: 'autorità competente',
    responsible: 'Responsabile dei contenuti',
    responsibleValue: 'nome della persona responsabile',
    creditsHeading: 'Crediti fotografici',
    credits:
      'Fotografie da Unsplash con licenza Unsplash, che consente l’uso commerciale senza obbligo di attribuzione.',
    pendingPrefix: 'da fornire',
  },

  privacy: {
    heading: 'Informativa privacy',
    intro:
      'Questa pagina è predisposta ma non ancora completa. Descrive ciò che il sito fa attualmente. Le voci contrassegnate richiedono i dati societari registrati e il testo andrebbe rivisto da una persona qualificata prima della pubblicazione.',
    responsibleHeading: 'Chi è il titolare',
    responsibleBefore: 'MH Consulting,',
    responsibleAddress: 'indirizzo registrato, Dubai',
    responsibleAfter: 'Domande sui vostri dati:',
    formHeading: 'Il modulo di richiesta',
    formBody:
      'Quando usate il modulo di contatto trattiamo nome, indirizzo email e, facoltativamente, azienda e fascia di budget insieme al vostro messaggio. Li usiamo soltanto per rispondere alla richiesta. Al momento il modulo consegna i dati al vostro programma di posta, quindi il messaggio ci arriva come una normale email.',
    analyticsHeading: 'Statistiche',
    analyticsBody:
      'Il sito pubblicato usa Vercel Web Analytics, che registra visualizzazioni aggregate senza cookie e senza costruire un profilo dei singoli visitatori.',
    externalHeading: 'Contenuti esterni',
    externalBody:
      'Le fotografie sono caricate da Unsplash, i dati della mappa dal CDN jsDelivr, mentre i caratteri sono serviti da questo sito. Quando il browser richiede un’immagine o i dati della mappa, quel fornitore riceve il vostro indirizzo IP, necessario per consegnare il file.',
    rightsHeading: 'I vostri diritti',
    rightsBody:
      'Potete chiedere quali dati abbiamo su di voi, chiederne la rettifica o la cancellazione. Scrivete all’indirizzo indicato sopra e vi risponderemo.',
  },
}
