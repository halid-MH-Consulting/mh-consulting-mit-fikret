/*
  Englisch ist die Quellsprache. Diese Datei definiert zugleich die Form:
  de.ts und it.ts werden gegen `Dictionary` typisiert, fehlende oder
  ueberzaehlige Schluessel fallen dadurch beim Tippen auf.

  Struktur folgt den Komponenten, nicht der Grammatik. Wer eine Zeile auf der
  Seite sucht, findet sie unter dem Namen des Abschnitts.
*/
export const en = {
  common: {
    skipToContent: 'Skip to content',
    startProject: 'Start a project',
    readOn: 'Read on',
    backHome: 'Back to MH Consulting',
    lastUpdated: 'Last updated',
  },

  nav: {
    home: 'MH Consulting, home',
    main: 'Main',
    mobile: 'Mobile',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    forBrands: 'For brands',
    forCreators: 'For creators',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
  },

  meta: {
    home: {
      title: 'MH Consulting — Influencer Marketing for Travel Brands | Dubai',
      description:
        'MH Consulting is a Dubai-based influencer marketing agency turning creators into long-term brand partners. Specialists in travel, tourism, hotels, airlines, eSIM, VPN and travel tech. Working globally.',
      ogTitle: 'MH Consulting — Influencer Marketing for Travel Brands',
      ogDescription:
        'Dubai-based influencer marketing agency turning creators into long-term brand partners.',
    },
    forBrands: {
      title: 'For brands — creator partnerships that survive the first campaign | MH Consulting',
      description:
        'For tourism boards, hotels, airlines and travel tech: how MH Consulting builds creator partnerships around business outcomes instead of one-off sponsored posts.',
      ogTitle: 'For brands — MH Consulting',
      ogDescription:
        'Creator partnerships built around business outcomes, for travel brands that think beyond a single campaign.',
    },
    forCreators: {
      title: 'For creators — join the MH Consulting roster | MH Consulting',
      description:
        'For travel creators: we negotiate the terms, chase the invoices and turn one-off brand deals into partnerships that come back. What we look for and how to apply.',
      ogTitle: 'For creators — MH Consulting',
      ogDescription:
        'We negotiate the terms, chase the invoices and turn one-off brand deals into partnerships that come back.',
    },
    about: {
      title: 'About — a Dubai hub with European habits | MH Consulting',
      description:
        'MH Consulting is an influencer marketing agency for travel brands, based in Dubai and working worldwide. How we think about creators, evidence and long-term partnerships.',
      ogTitle: 'About MH Consulting',
      ogDescription:
        'An influencer marketing agency for travel brands, based in Dubai and working worldwide.',
    },
    contact: {
      title: 'Contact — tell us what you are trying to move | MH Consulting',
      description:
        'Talk to MH Consulting about a creator campaign, or apply to the roster. We reply to every enquiry within two working days, from Dubai.',
      ogTitle: 'Contact MH Consulting',
      ogDescription:
        'Talk to us about a creator campaign, or apply to the roster. Every enquiry gets an answer within two working days.',
    },
    legalNotice: {
      title: 'Legal notice — MH Consulting',
      description: 'Company information for MH Consulting, Dubai.',
    },
    privacy: {
      title: 'Privacy policy — MH Consulting',
      description: 'How MH Consulting handles personal data.',
    },
  },

  hero: {
    location: 'Dubai, UAE — working worldwide',
    line1: 'We manage the',
    words: ['creators', 'partnerships', 'campaigns', 'right deals'],
    line3: 'brands',
    line3Accent: 'actually want.',
    lead: 'MH Consulting is the link between travel creators and the sponsors who want their audience. No noise, no inflated numbers, just deals that make sense on both ends.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'See what we do',
    caption:
      'One hub in Dubai, creators on six continents, matched to the destination they actually know.',
  },

  industries: {
    label: 'Industries we serve',
    items: [
      'Travel Brands',
      'Tourism Boards',
      'Airlines',
      'Hotels',
      'Travel Tech',
      'eSIM Companies',
      'VPN Companies',
      'Travel Apps',
    ],
  },

  core: {
    line1: 'Not one-off promotions.',
    line2: 'Not random sponsorships.',
    line3: 'Real partnerships.',
    lead: 'We connect ambitious brands with carefully selected content creators, then keep those relationships running long enough that trust, reach and revenue compound.',
  },

  audience: {
    srHeading: 'Choose your path',
    brands: {
      kicker: 'For brands',
      title: 'You need creators your audience believes.',
      body: 'Tourism boards, hotels, airlines, travel tech, eSIM and VPN. What you get, how an engagement runs, and what it costs you in time.',
    },
    creators: {
      kicker: 'For creators',
      title: 'You need briefs, not another pitch email.',
      body: 'We negotiate the terms, chase the invoices and bring you work that fits what you already make. What we look for, and how to apply.',
    },
  },

  services: {
    heading: 'Four ways we build partnerships that perform.',
    lead: 'Every engagement starts with the same question: which creator would this audience actually believe?',
    label: 'Services',
    items: [
      {
        title: 'Build Brand Awareness',
        tagline: 'Get known by the right audiences',
        description:
          'We position your brand in front of engaged travel audiences through creators whose voice genuinely fits your story, not whoever has the biggest number.',
        capabilities: ['Market Research', 'Content Strategy', 'Travel Marketing Expertise'],
      },
      {
        title: 'Creator Discovery',
        tagline: 'The right creators, carefully vetted',
        description:
          'We shortlist creators from an international roster and screen every one of them for authenticity, audience quality and brand fit before they reach you.',
        capabilities: ['Authenticity Screening', 'Audience Analysis', 'Brand Fit Matching'],
      },
      {
        title: 'High Impact Campaigns',
        tagline: 'From concept to measurable results',
        description:
          'We run campaigns end to end: concept, negotiation, timelines, deliverables and reporting. You get one point of contact instead of twelve inboxes.',
        capabilities: ['Campaign Management', 'Negotiation', 'Transparent Reporting'],
      },
      {
        title: 'Consulting',
        tagline: 'Strategy for the long game',
        description:
          'We help you build a creator programme that outlives a single campaign, with the structure and standards to keep it running after we hand it over.',
        capabilities: ['Creator Programmes', 'Channel Strategy', 'Team Enablement'],
      },
    ],
  },

  whyUs: {
    heading: 'What makes us different.',
    points: [
      {
        title: 'Quality over quantity',
        body: 'We measure creators by trust and fit, never by follower counts. Fewer, better partnerships that actually convert.',
      },
      {
        title: 'International creator network',
        body: 'A curated global roster spanning the destinations and audiences your brand cares about.',
      },
      {
        title: 'Carefully vetted creators',
        body: 'Every partner is screened for authenticity and audience quality before we recommend them.',
      },
      {
        title: 'Performance-driven strategy',
        body: 'Campaigns built around business outcomes and transparent reporting, not vanity metrics.',
      },
      {
        title: 'Transparent communication',
        body: 'You always know what is happening, why, and what it is delivering.',
      },
      {
        title: 'Dubai based, European expertise',
        body: 'Global reach with the rigour and standards of European marketing experience.',
      },
    ],
  },

  network: {
    heading: 'One hub in Dubai. Creators everywhere your audience is.',
    lead: 'We match the right voice to the right destination, so the recommendation comes from someone who has actually been there.',
    mapLabel:
      'World map showing the MH Consulting creator network, with a hub in Dubai connecting to London, New York, Singapore, Cape Town, Sydney, Tokyo, São Paulo and Bali',
    hub: 'Dubai (hub)',
  },

  process: {
    heading: 'A clear process, from first idea to lasting partnership.',
    steps: [
      {
        title: 'Research & strategy',
        body: 'We study your market, audience and goals to define a creator strategy that fits your brand.',
      },
      {
        title: 'Creator discovery',
        body: 'We shortlist and vet creators from our international network for authenticity and fit.',
      },
      {
        title: 'Negotiation & planning',
        body: 'We handle outreach, negotiation and campaign planning so terms and content align with results.',
      },
      {
        title: 'Campaign management',
        body: 'We run the campaign end to end, keeping creators, timelines and deliverables on track.',
      },
      {
        title: 'Performance & partnership',
        body: 'We analyse results, report transparently and grow the best collaborations into long-term partnerships.',
      },
    ],
  },

  stats: {
    srHeading: 'MH Consulting by the numbers',
    items: ['Countries reached', 'Campaigns delivered', 'Vetted creators', 'Brand collaborations'],
    note: 'Placeholder figures — replace with live performance data before launch.',
  },

  /*
    Unter der Ueberschrift stehen nur noch die Markenzeichen selbst,
    keine Zitate mehr.
  */
  testimonials: {
    heading: 'Trusted by brands that think long term.',
  },

  faq: {
    heading: 'Questions, answered.',
    leadBefore: 'Still unsure whether we are the right fit?',
    leadLink: 'Ask us directly',
    items: [
      {
        q: 'Do you only work with travel brands?',
        a: 'Travel, tourism, hotels, airlines, travel tech, eSIM and VPN companies are our core focus, but we also support ambitious brands from other industries that value real creator partnerships.',
      },
      {
        q: 'How do you choose creators?',
        a: 'We vet every creator for authenticity, audience quality and brand fit. Follower count is never the deciding factor; trust and relevance are.',
      },
      {
        q: 'What does a partnership look like?',
        a: 'Rather than one-off sponsored posts, we build ongoing relationships between your brand and creators, so your presence compounds in trust and reach over time.',
      },
      {
        q: 'Where are you based and who do you work with?',
        a: 'We are based in Dubai and work globally, combining international reach with European marketing standards.',
      },
      {
        q: 'How do you measure success?',
        a: 'We define success around your business goals and report transparently on the metrics that matter, not vanity likes.',
      },
    ],
  },

  finalCta: {
    headingBefore: "Let's build your next",
    headingAccent: 'campaign',
    headingAfter: 'together.',
    lead: 'Tell us about your brand and your goals. We reply to every enquiry within two working days, with a straight answer on whether we are the right fit.',
    email: 'Email',
    location: 'Location',
    locationValue: 'Dubai, UAE — working worldwide',
  },

  form: {
    optional: '(optional)',
    name: 'Name',
    email: 'Work email',
    company: 'Company',
    budget: 'Budget',
    budgetPlaceholder: 'Select a range',
    budgets: ['Under 10k', '10k – 25k', '25k – 50k', '50k+', 'Not sure yet'],
    message: 'What are you trying to achieve?',
    messagePlaceholder: 'Destination, audience, timing — whatever you already know.',
    submit: 'Send enquiry',
    sending: 'Sending…',
    preferEmailBefore: 'Prefer email? Write to',
    errName: 'Please tell us your name.',
    errEmail: 'Please check this address.',
    errMessage: 'A sentence or two about your brand helps us reply properly.',
    sentTitle: 'Thanks, that is on its way.',
    sentBodyBefore:
      'We reply to every enquiry within two working days. If your mail client did not open, write to',
    sendAnother: 'Send another',
    subjectPrefix: 'Project enquiry',
  },

  footer: {
    tagline:
      'Influencer marketing for travel brands. We turn creators into long-term brand partners, from a hub in Dubai.',
    pages: 'Pages',
    legal: 'Legal',
    whatWeDo: 'What we do',
    legalNotice: 'Legal notice',
    privacy: 'Privacy policy',
    rights: 'All rights reserved.',
  },

  languageSwitcher: {
    label: 'Language',
    current: 'Current language',
    change: 'Change language',
  },

  notFound: {
    heading: 'This page took a different route.',
    body: 'The link is broken or the page has moved. Everything about what we do is on the home page.',
    back: 'Back to the home page',
    email: 'Email us instead',
  },

  forBrands: {
    title: 'Creators your audience',
    titleAccent: 'already trusts.',
    lead: 'You are not short of people willing to post about your destination. You are short of people whose recommendation actually changes a booking decision. That difference is the whole job.',
    cta: 'Talk to us about your brand',
    problemHeading: 'Why most influencer budgets disappoint.',
    problemLead: 'It is rarely the creator. It is almost always the setup around them.',
    wrongHeading: 'What usually happens',
    rightHeading: 'How we run it',
    wrong: [
      'Booking by follower count, then wondering why nothing moved',
      'A brilliant post, and no rights to use it anywhere else',
      'Creators who have never been to the destination they are selling',
      'One campaign, no relationship, starting from zero next quarter',
    ],
    right: [
      'Booking on audience fit and evidence of past performance',
      'Usage and exclusivity agreed before the first frame is shot',
      'Creators with genuine, checkable history in your region',
      'Partnerships that get cheaper and better the longer they run',
    ],
    deliverablesHeading: 'What you actually get.',
    deliverables: [
      {
        title: 'A shortlist you can defend internally',
        body: 'Every creator comes with the reasoning: who their audience actually is, which of your destinations they credibly cover, and what their last comparable campaign delivered. No lists of names without arguments.',
      },
      {
        title: 'Terms negotiated before anyone films',
        body: 'Usage rights, exclusivity windows, deliverable counts, reshoot conditions and payment schedule are settled up front. The expensive surprises in creator marketing almost always come from what nobody wrote down.',
      },
      {
        title: 'One point of contact, not twelve inboxes',
        body: 'We run scheduling, briefing, approvals and chasing. Your team reviews and approves; it does not project-manage eight freelancers across five time zones.',
      },
      {
        title: 'Reporting you can take to a budget meeting',
        body: 'Results against the goals we agreed at the start, with the misses named as clearly as the wins. If a creator underperformed, that is in the report.',
      },
    ],
    engagementHeading: 'How an engagement runs.',
    engagementLead:
      'Indicative timing for a first campaign. Longer partnerships compress this considerably, because the vetting is already done.',
    engagement: [
      {
        when: 'Week 1',
        what: 'Scope and goals',
        body: 'We agree what success means in numbers, which markets matter, and what you already tried. If we think creator marketing is the wrong tool for the goal, we say so here.',
      },
      {
        when: 'Weeks 2–3',
        what: 'Shortlist and terms',
        body: 'You get a shortlist with reasoning and indicative costs. We negotiate with your chosen creators and bring back signed terms.',
      },
      {
        when: 'Weeks 4–8',
        what: 'Production and publishing',
        body: 'Briefing, shooting, review rounds and scheduling. You approve; we handle everything around the approval.',
      },
      {
        when: 'After',
        what: 'Results and what comes next',
        body: 'A report against the agreed goals, plus a recommendation on which creators are worth keeping for the long run.',
      },
    ],
    ctaTitle: 'Tell us what you are trying to move.',
    ctaBody:
      'Bookings, awareness in a new market, a launch with a date attached. Bring the goal and we will tell you honestly whether creators are the right lever for it.',
    ctaSecondary: 'Who we are',
  },

  forCreators: {
    title: 'Stop pitching brands.',
    titleAccent: 'Start getting briefed.',
    lead: 'You did not become a travel creator to write follow-up emails about unpaid invoices. We handle the commercial side so you can spend your time on the part you are actually good at.',
    cta: 'Apply to the roster',
    splitHeading: 'Who does what.',
    splitLead: 'The split is deliberately boring, and it is the reason these partnerships last.',
    weHandleHeading: 'We handle',
    youHandleHeading: 'You handle',
    weHandle: [
      'Finding briefs that fit what you already make',
      'Rates, usage rights and exclusivity, argued properly',
      'Contracts, invoicing and chasing late payments',
      'Deadlines, revisions and the awkward client conversations',
    ],
    youHandle: [
      'The work itself, in your own voice',
      'Being where you said you would be, when you said',
      'Telling us early when something slips',
      'Saying no to briefs that would cost you your audience',
    ],
    criteriaHeading: 'What we look for.',
    criteriaLead: 'Follower count is not on this list. It never has been.',
    criteria: [
      {
        title: 'A defined audience, whatever its size',
        body: 'A creator with 8,000 people who trust them on one region is easier to place than one with 400,000 who trust them on nothing in particular. We have booked both. The small one performs more often.',
      },
      {
        title: 'Real travel behind the content',
        body: 'Brands increasingly check. If your destination coverage does not survive a look at your own timeline, neither of us wants that conversation.',
      },
      {
        title: 'Engagement that behaves like people',
        body: 'We look at comment quality, follower growth curves and audience geography. Bought engagement shows up quickly and ends the conversation.',
      },
      {
        title: 'You answer messages',
        body: 'Unglamorous, and the single most common reason a creator drops off our list. Brands book people who reply.',
      },
    ],
    joinHeading: 'How to join.',
    steps: [
      {
        title: 'Send us your work',
        body: 'Your profiles, the destinations you cover, and two or three pieces you are actually proud of. No media kit needed at this stage.',
      },
      {
        title: 'We look properly',
        body: 'Audience, history, fit with the brands we work with. You get an answer either way, usually within two weeks.',
      },
      {
        title: 'You go on the roster',
        body: 'We come to you when a brief fits. No exclusivity, no fee, no obligation to accept anything we send.',
      },
    ],
    honestNote:
      'We say no more often than we say yes, and we tell you why. A rejection now is not a rejection forever; several creators on the roster applied twice.',
    ctaTitle: 'Send us your work.',
    ctaBody:
      'Profiles, the regions you cover, and a couple of pieces you are proud of. That is enough to start.',
    ctaSecondary: 'Who we are',
  },

  about: {
    title: 'A Dubai base.',
    titleAccent: 'European habits.',
    lead: 'Dubai puts us a short flight from the markets our clients care about and in the same working week as most of them. The way we run things comes from somewhere else entirely.',
    whyHeading: 'Why we exist.',
    why1: 'Influencer marketing in travel got very good at looking busy. Campaigns are booked, posts go up, screenshots go into a deck, and nobody can say afterwards whether any of it changed a booking.',
    why2: 'We started from the opposite end: what would a brand need to see before renewing a creator partnership for a second year? That question rules out most of what the industry sells. It rules out follower-count buying, one-off sponsorships and reporting built on impressions.',
    why3: 'What is left is slower, smaller and considerably more durable. That is the business we are in.',
    principlesHeading: 'How we work.',
    principlesLead: 'Four positions we hold even when they are inconvenient.',
    principles: [
      {
        title: 'We would rather lose the brief than pad the list',
        body: 'If we do not have three creators who genuinely fit, we say so instead of adding a fourth who nearly does. This costs us work occasionally. It has never cost us a client.',
      },
      {
        title: 'The number on the profile is the least interesting number',
        body: 'Audience geography, comment quality, growth shape and repeat performance tell you what a partnership will do. Follower count mostly tells you what it will cost.',
      },
      {
        title: 'Everything expensive is a detail nobody wrote down',
        body: 'Usage rights, exclusivity, reshoots, approval rounds. We settle these before production, which is why our campaigns rarely produce invoices anyone argues about.',
      },
      {
        title: 'A report that only contains good news is not a report',
        body: 'We name what underperformed and what we would do differently. Brands stay with agencies that tell them the truth in quarter two.',
      },
    ],
    hubHeading: 'One hub, one network, no offices in between.',
    hubLead:
      'We are deliberately small at the centre. The reach comes from the creator network, not from a chain of branch offices that each need feeding.',
    hubBody:
      'Practically: one team in Dubai that knows every account, and vetted creators in the places your audience is already looking at.',
    ctaTitle: 'Two ways in.',
    ctaBody:
      'Brands tell us what they are trying to move. Creators send us their work. Both start with the same short message.',
    ctaBrands: 'I represent a brand',
    ctaCreators: 'I am a creator',
  },

  contact: {
    title: 'Tell us what you are',
    titleAccent: 'trying to move.',
    lead: 'Bookings, awareness in a new market, a launch with a date attached. Or your own work, if you are a creator looking for briefs. Both start here.',
    reachHeading: 'Reach us directly',
    responseTime: 'Every enquiry answered within two working days',
    nextHeading: 'What happens next',
    next: [
      {
        title: 'You get a human reply, not a ticket number',
        body: 'Within two working days, from the person who would actually run your account.',
      },
      {
        title: 'We say if we are the wrong fit',
        body: 'If creator marketing will not move the goal you describe, we tell you that instead of selling you a campaign.',
      },
      {
        title: 'Then a call, if it makes sense',
        body: 'Thirty minutes, no deck. We ask about the goal, the market and the budget range, and you get a straight answer on what is realistic.',
      },
    ],
    doorsHeading: 'Not sure what to write yet?',
    doorBrands: 'I represent a brand',
    doorBrandsBody: 'What you get, and how an engagement runs.',
    doorCreators: 'I am a creator',
    doorCreatorsBody: 'What we look for, and how to apply.',
  },

  legalNotice: {
    heading: 'Legal notice',
    intro:
      'This page is prepared but not yet complete. The entries marked below must be filled in with the registered company details before the site goes live.',
    companyHeading: 'Company',
    companyName: 'registered company name and legal form',
    companyAddress: 'street address, Dubai, United Arab Emirates',
    contactHeading: 'Contact',
    phone: 'Phone',
    phoneValue: 'phone number',
    registrationHeading: 'Registration',
    licence: 'Trade licence number',
    licenceValue: 'licence number',
    authority: 'Issuing authority',
    authorityValue: 'issuing authority',
    responsible: 'Responsible for content',
    responsibleValue: 'name of the responsible person',
    creditsHeading: 'Image credits',
    credits:
      'Photography sourced from Unsplash under the Unsplash License, which permits commercial use without attribution.',
    pendingPrefix: 'to be supplied',
  },

  privacy: {
    heading: 'Privacy policy',
    intro:
      'This page is prepared but not yet complete. It describes what the site currently does. The marked entries need the registered company details, and the text should be reviewed by someone qualified before launch.',
    responsibleHeading: 'Who is responsible',
    responsibleBefore: 'MH Consulting,',
    responsibleAddress: 'registered address, Dubai',
    responsibleAfter: 'Questions about your data:',
    formHeading: 'The enquiry form',
    formBody:
      'When you use the contact form we process the name, email address, and optionally company and budget range you enter, together with your message. We use this only to answer your enquiry. At present the form hands your entries to your own email programme, so the message reaches us as an ordinary email.',
    analyticsHeading: 'Analytics',
    analyticsBody:
      'The production site uses Vercel Web Analytics, which records aggregated page views without cookies and without building a profile of individual visitors.',
    externalHeading: 'External content',
    externalBody:
      'Photographs load from Unsplash, the world map data loads from the jsDelivr CDN, and fonts are served from this site itself. When your browser fetches an image or the map data, that provider receives your IP address, as it must to deliver the file.',
    rightsHeading: 'Your rights',
    rightsBody:
      'You can ask what data we hold about you, ask for it to be corrected, or ask us to delete it. Write to the address above and we will respond.',
  },
}

/*
  Bewusst ohne `as const`: mit Literaltypen waere "Deutsch" nicht dem Typ
  "English" zuweisbar und de.ts/it.ts liessen sich gar nicht erst tippen.
  So beschreibt Dictionary die Form, nicht den englischen Inhalt.
*/
export type Dictionary = typeof en
