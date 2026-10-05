import { CompanyCredentials, AdhesiveProduct, TrainingProgram } from '../types';

export const COMPANY_INFO: CompanyCredentials = {
  name: "SRI ENTERPRISES",
  shortName: "SE",
  tagline: "Bonding Industries, Building Futures",
  clearPositioning: "Delivering Industrial Adhesive Solutions & Career-Ready Training Programs",
  oneLineClarity: "We empower industries with reliable adhesive products and individuals with employability skills.",
  introduction: "We are a dynamic organization delivering reliable industrial adhesive solutions for the printing industry while empowering students and professionals through impactful soft skills and placement training programs.",
  address: {
    line1: "No. 13/A, 6th Cross, 14th 'A' Main",
    line2: "N.S. Palya, B.T.M Layout 2nd Stage",
    area: "B.T.M Layout 2nd Stage",
    city: "Bengaluru",
    pincode: "560076",
    fullFormatted: "No. 13/A, 6th Cross, 14th 'A' Main, N.S. Palya, B.T.M Layout 2nd Stage, Bengaluru - 560076, Karnataka, India"
  },
  gstin: "29HGCPS2781B1Z6",
  phone: "+91 99453 25192",
  phoneRaw: "9945325192",
  whatsappNumber: "919945325192",
  email: "info@srienterprises.in"
};

export const ADHESIVE_PRODUCTS: AdhesiveProduct[] = [
  {
    id: "se-bind-800",
    name: "SE-Bind 800 (Hot Melt Spine Glue)",
    category: "Printing & Binding",
    description: "High-yield EVA-based hot melt adhesive engineered for high-speed perfect binding, magazine spine bonding, and paperback book manufacturing.",
    viscosity: "4,500 – 6,000 mPa.s @ 170°C",
    openTime: "6 – 10 seconds",
    applicationTemp: "160°C – 180°C",
    suitableSubstrates: ["Coated Art Paper", "Bond Paper", "Wood-free Paper", "Duplex Board"],
    keyBenefit: "Zero spine cracking even under sub-zero handling, excellent page pull strength exceeding 9.5 N/cm.",
    packagingOptions: "25 Kg Granule Bags / 500 Kg Pallet"
  },
  {
    id: "se-flex-side",
    name: "SE-Flex Side Glue (Side Application Adhesive)",
    category: "Printing & Binding",
    description: "Fast-setting hot melt adhesive formulated specifically for edge/side creasing on automatic book binding production lines.",
    viscosity: "2,200 – 3,000 mPa.s @ 160°C",
    openTime: "3 – 5 seconds",
    applicationTemp: "150°C – 170°C",
    suitableSubstrates: ["Cardstock", "Laminated Covers", "Embossed Paperboard"],
    keyBenefit: "Ultra-thin film capability preventing cover flare with transparent, neat squeeze-out line.",
    packagingOptions: "25 Kg Bags / 50 Kg Drums"
  },
  {
    id: "se-lam-ultra",
    name: "SE-Lam Ultra (Water-Based Film-to-Paper)",
    category: "Lamination & Film",
    description: "Premium synthetic polymer emulsion for dry and wet lamination of thermal and non-thermal BOPP, PET, and metallized films onto paper board.",
    viscosity: "1,200 – 1,800 mPa.s @ 25°C",
    openTime: "Controlled curing window",
    applicationTemp: "Ambient (20°C – 35°C)",
    suitableSubstrates: ["BOPP Film", "MetPET Films", "Bleached Kraft", "Duplex Board"],
    keyBenefit: "Optical clarity with zero tunneling or delamination during downstream creasing, foiling, and die-cutting.",
    packagingOptions: "50 Kg Carboy / 220 Kg Industrial Drum"
  },
  {
    id: "se-pack-lock",
    name: "SE-PackLock 520 (Carton & Corrugated Sealing)",
    category: "Packaging & Carton",
    description: "High-tack dispersion adhesive developed for folder gluers, rigid box wraps, window patching, and automated carton sealing.",
    viscosity: "1,800 – 2,500 mPa.s @ 25°C",
    openTime: "8 – 14 seconds",
    applicationTemp: "Ambient roller application",
    suitableSubstrates: ["Virgin Kraft Paper", "Grey Board", "Corrugated Flutes", "Varnished Paper"],
    keyBenefit: "Substrate fiber-tear adhesion within 12 seconds, clean machine running with zero splatter.",
    packagingOptions: "35 Kg Buckets / 200 Kg Barrels"
  },
  {
    id: "se-case-maker",
    name: "SE-CaseMaker Jelly Glue (Animal Protein Gel)",
    category: "Specialty Adhesives",
    description: "Eco-friendly, biodegradable cake adhesive for high-speed hardcase book cover making, luxury rigid gift boxes, and ring binders.",
    viscosity: "Dilutable with warm water",
    openTime: "15 – 25 seconds",
    applicationTemp: "60°C – 65°C",
    suitableSubstrates: ["Book Cloth", "Rexine", "Art Leather", "Kappa Board"],
    keyBenefit: "Fast tack with no paper warping or wrinkling, fully non-toxic and biodegradable formula.",
    packagingOptions: "20 Kg Carton (Dry Bricks)"
  },
  {
    id: "se-cold-disp",
    name: "SE-ColdGel 410 (Cold Binding Adhesive)",
    category: "Printing & Binding",
    description: "Specially formulated water-borne PVAc adhesive for manual padding, notebook spine gluing, and stationery binding.",
    viscosity: "6,000 – 8,000 mPa.s @ 25°C",
    openTime: "15 – 20 minutes",
    applicationTemp: "Ambient application",
    suitableSubstrates: ["Uncoated Writing Paper", "Ledger Paper", "Straw Board"],
    keyBenefit: "Flexible film once dried; leaves no residue and cleans easily with tap water before drying.",
    packagingOptions: "10 Kg & 50 Kg Containers"
  }
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "campus-to-corporate",
    title: "Campus to Corporate Placement Readiness",
    category: "Campus Placement",
    duration: "40 Hours (5 Days Intensive or 4-Week Modular)",
    targetAudience: "Final & Pre-Final Year Engineering, MCA, MBA & Degree College Students",
    description: "A comprehensive transformational bootcamp transforming academic students into high-confidence, industry-ready professionals ready for top-tier hiring drives.",
    modules: [
      "Aptitude Mastery: Quantitative, Logical Reasoning & Verbal Ability",
      "Corporate Communication & Professional Email Etiquette",
      "Live Group Discussion (GD) Simulations & Body Language Labs",
      "Personal Interview Mastery: HR, Technical & Situational Behavioral Q&A",
      "Modern Resume Optimization & LinkedIn Personal Branding"
    ],
    keyOutcomes: [
      "94% mock interview qualification rate among trained batches",
      "Elimination of stage fear and stuttering in executive presentations",
      "ATS-compliant resume tailored to target industry requirements"
    ]
  },
  {
    id: "executive-soft-skills",
    title: "Executive Soft Skills & Workplace Communication",
    category: "Corporate Soft Skills",
    duration: "16 Hours (2 Full-Day Corporate Workshop)",
    targetAudience: "Early-Career Engineers, Associates, Sales Representatives & Team Leads",
    description: "Targeted professional refinement covering interpersonal dynamics, workplace conflict management, assertive communication, and client negotiation tactics.",
    modules: [
      "The Art of Assertive & Professional Dialogue in Cross-Functional Teams",
      "Client Management & Difficult Conversation De-escalation",
      "Effective Stakeholder Presentation & Slide Deck Delivery",
      "Time Architecture, Focus Management & Emotional Intelligence at Work"
    ],
    keyOutcomes: [
      "Noticeable improvement in team collaboration and task turnaround",
      "Professional demeanor during high-stakes client calls and reviews"
    ]
  },
  {
    id: "technical-interview-bridge",
    title: "Technical Interview & Problem Solving Bridge",
    category: "Technical Transition",
    duration: "24 Hours (Modular Evening / Weekend Cohort)",
    targetAudience: "Fresh STEM Graduates seeking IT & Core Engineering Roles",
    description: "Bridges the gap between classroom theory and real-world technical assessments, teaching structured problem decomposition and whiteboarding.",
    modules: [
      "Deconstructing Complex Problem Statements in Live Time",
      "System Design & Coding Whiteboard Communication",
      "Domain-Specific Technical Viva & Project Explanation Strategy",
      "Handling 'I don't know' with intellectual honesty & curiosity"
    ],
    keyOutcomes: [
      "Clear, articulate technical articulation under pressure",
      "Confidence in walking recruiters through academic projects and codebases"
    ]
  },
  {
    id: "leadership-communication",
    title: "Leadership Communication & Influential Speaking",
    category: "Leadership & Communication",
    duration: "12 Hours (Executive Masterclass)",
    targetAudience: "Mid-level Managers, Section Heads, Team Leads & Aspiring Executives",
    description: "Empowering emerging managers with the vocabulary, vocal presence, and psychological tools to lead teams and persuade senior decision-makers.",
    modules: [
      "Executive Presence & Persuasive Speaking Techniques",
      "Giving Constructive Performance Feedback Without Defensiveness",
      "Leading High-Impact Meetings with Crisp Action Items",
      "Storytelling for Leaders: Inspiring Action with Vision"
    ],
    keyOutcomes: [
      "Elevated managerial gravitas and team morale",
      "Clarity and brevity in boardroom executive summaries"
    ]
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    client: "Pradeep Hegde",
    role: "Plant Operations Head",
    company: "Richkraft Offset & Commercial Printers, Bengaluru",
    division: "Industrial Adhesives",
    quote: "Switching to Sri Enterprises' SE-Bind 800 hot melt for our high-speed binding lines cut our spine rejection rates to virtually zero during peak textbook runs. Their prompt delivery and technical support right here in Bengaluru are exceptional.",
    highlight: "Zero spine delamination across 400,000+ textbook run"
  },
  {
    client: "Dr. K. Srinivasan",
    role: "Dean of Placement & Student Affairs",
    company: "Engineering & Technical Institute, Karnataka",
    division: "Career Training",
    quote: "The campus-to-corporate training conducted by Sri Enterprises transformed our pre-final year students. The practical GD simulations and one-on-one interview drills directly boosted our tier-1 placement offers by 38% in the first quarter.",
    highlight: "+38% Placement conversion in campus recruitment"
  },
  {
    client: "Rajeshwar Rao",
    role: "Production Director",
    company: "Apex Packaging & Box Works, Peenya Industrial Area",
    division: "Industrial Adhesives",
    quote: "We require high-shear lamination glue that can handle heavy solid ink coverage without silvering or peeling during subsequent creasing. SE-Lam Ultra delivered exactly what we needed with zero machine downtime.",
    highlight: "Seamless MetPET lamination on heavy-gauge boards"
  }
];

export const FAQ_ITEMS = [
  {
    question: "What industrial adhesives does Sri Enterprises supply?",
    answer: "We supply a comprehensive range of industrial adhesives tailored for the printing, packaging, and bookbinding sectors. This includes EVA and metallocene hot melt adhesives for perfect binding, side gluing adhesives, water-based lamination glues (BOPP/MetPET to paperboard), carton sealing dispersions, and eco-friendly jelly glues for luxury rigid box packaging."
  },
  {
    question: "Where is Sri Enterprises located, and what is your GST registration?",
    answer: "Our registered operational facility is located at No. 13/A, 6th Cross, 14th 'A' Main, N.S. Palya, B.T.M Layout 2nd Stage, Bengaluru - 560076, Karnataka. We are a fully tax-compliant entity registered under GSTIN 29HGCPS2781B1Z6."
  },
  {
    question: "How do your career training and soft skills programs work?",
    answer: "We partner directly with universities, engineering colleges, polytechnics, and corporate organizations to deliver tailored training bootcamps. Our programs range from intensive 40-hour campus placement bootcamps (aptitude, GDs, resume craft, and mock interviews) to executive communication and team leadership workshops for corporate professionals."
  },
  {
    question: "Can we request adhesive trial samples for our press or packaging line?",
    answer: "Yes. We offer trial batches (5 Kg to 25 Kg sample packs) for industrial printers and packaging units along with on-site technical advisory to calibrate applicator roller temperatures and open-time parameters on your equipment."
  },
  {
    question: "Do you offer customized training syllabus for specific institutional batches?",
    answer: "Absolutely. We conduct pre-assessment diagnostics for college batches to identify gap areas (verbal fluency, quantitative speed, or interview anxiety) and customize the curriculum to align with upcoming recruiter patterns."
  }
];
