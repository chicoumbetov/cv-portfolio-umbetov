import type React from "react";

type ExperienceProps = {
  darkMode: boolean;
};

export const Experience: React.FC<ExperienceProps> = () => {
  return (
    <section id="experience" className="py-20 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
      
      <div className="space-y-8">
        {/* Trace Software International */}
        <div className="p-6 rounded-xl border border-white/10 bg-gray-900/50 hover:border-white/20 transition-all">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold">Développeur Fullstack (TypeScript / .NET / Python)</h3>
            <span className="text-emerald-400 font-medium">Août 2023 – Aujourd'hui</span>
          </div>
          <h4 className="text-gray-400 font-semibold mb-3">Trace Software International (Group Trace) — Le Havre (Full remote)</h4>
          <p className="text-gray-300 text-sm mb-4">
            Développement de logiciels d'ingénierie pour les bâtiments, les calculs de carbone et solaires (Archelios, Carbonz, BIM&CO). Conception de schémas électriques augmentant la performance de 40% et pilotage des rituels Agile/Scrum.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
            <li>Création from scratch d'applications de construction de schémas électriques (React, Python, C#, .NET)[cite: 1, 3].</li>
            <li>Développement et maintenance micro-frontend avec module federation et design systems Storybook.</li>
            <li>Intégration d'APIs GraphQL/REST et authentification sécurisée par JWT.</li>
            <li>Gestion des bases de données PostgreSQL, MongoDB et services cloud GCP/Firebase.</li>
            <li>Mise en place de pipelines CI/CD sous Azure DevOps et tests automatisés (Vitest, Jest, Cypress)[cite: 1, 3].</li>
          </ul>
        </div>

        {/* BIM&CO */}
        <div className="p-6 rounded-xl border border-white/10 bg-gray-900/50 hover:border-white/20 transition-all">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold">Développeur Fullstack</h3>
            <span className="text-emerald-400 font-medium">Août 2022 – Août 2023</span>
          </div>
          <h4 className="text-gray-400 font-semibold mb-3">BIM&CO (Group Trace) — Paris (Full remote)</h4>
          <p className="text-gray-300 text-sm mb-4">
            Évolution au sein de 3 squads sur la solution de gestion de données BIM avancée Onfly (Revit, AutoCAD, Excel). Migration de code legacy vers React moderne et optimisation des performances de 20%.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
            <li>Migration et refonte d'interfaces web complexes en React JS / React Native.</li>
            <li>Amélioration de l'expérience utilisateur UX et refonte de la gestion des autorisations[cite: 1, 3].</li>
            <li>Intégration de composants modulaires et tests d'intégration rigoureux.</li>
          </ul>
        </div>

        {/* Global Climate Initiatives */}
        <div className="p-6 rounded-xl border border-white/10 bg-gray-900/50 hover:border-white/20 transition-all">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold">Développeur Fullstack</h3>
            <span className="text-emerald-400 font-medium">Mars 2022 – Août 2022</span>
          </div>
          <h4 className="text-gray-400 font-semibold mb-3">Global Climate Initiatives (Tk'blue) — Nice</h4>
          <p className="text-gray-300 text-sm mb-4">
            Conception d'une application de calculs des émissions et réalisation du Bilan GES des entreprises B2B. Développement d'outils d'impact environnemental au sein d'une équipe agile de 10 développeurs.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
            <li>Développement d'applications web & mobile (React, Redux, Node.js, Stripe).</li>
            <li>Revue de code et application stricte des meilleures pratiques et standards d'architecture.</li>
          </ul>
        </div>

        {/* Web Première */}
        <div className="p-6 rounded-xl border border-white/10 bg-gray-900/50 hover:border-white/20 transition-all">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold">Développeur React Native, Web & Mobile</h3>
            <span className="text-emerald-400 font-medium">Mars 2022 – Août 2022</span>
          </div>
          <h4 className="text-gray-400 font-semibold mb-3">Web Première — Nice</h4>
          <p className="text-gray-300 text-sm mb-4">
            Agence web spécialisée dans la création de sites internet et d'applications mobiles multiplateformes. Pilotage technique de projets e-commerce et de solutions de télémédecine grand public.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
            <li>Déploiement des apps B2C Omedom (gestion immobilière) et Scanflock pour plus de 10 000 utilisateurs[cite: 1, 3].</li>
            <li>Intégration d'appels vidéo en temps réel et de modules de génération dynamique de documents[cite: 1, 3].</li>
          </ul>
        </div>

        {/* 1fit.app */}
        <div className="p-6 rounded-xl border border-white/10 bg-gray-900/50 hover:border-white/20 transition-all">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold">Développeur Web & Mobile</h3>
            <span className="text-emerald-400 font-medium">Janvier 2017 – Août 2018</span>
          </div>
          <h4 className="text-gray-400 font-semibold mb-3">1fit.app (Codebusters) — Almaty, Kazakhstan</h4>
          <p className="text-gray-300 text-sm mb-4">
            Participation au développement de la plateforme multisport leader d'abonnements unifiés. Optimisation des parcours utilisateurs et des performances de l'écosystème web et mobile.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
            <li>Développement fullstack d'interfaces avec React JS, React Native, Redux et Node.js.</li>
            <li>Collaboration transversale avec les équipes produit pour garantir une expérience fluide.</li>
          </ul>
        </div>

        {/* Karavan App */}
        <div className="p-6 rounded-xl border border-white/10 bg-gray-900/50 hover:border-white/20 transition-all">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold">Fondateur & Développeur Full Stack (Projet Personnel)</h3>
            <span className="text-emerald-400 font-medium">2023 – 2024</span>
          </div>
          <h4 className="text-gray-400 font-semibold mb-3">Karavan App (ex ImmiGuide) — Europe / Kazakhstan</h4>
          <p className="text-gray-300 text-sm mb-4">
            Application de logistique collaborative P2P connectant voyageurs et expéditeurs de colis urgents. Responsable de l'intégralité du cycle produit, de la conception UX/UI au déploiement des microservices cloud.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
            <li>Architecture e-commerce cross-platform avec backend scalable (Node.js, MongoDB, WebSockets).</li>
            <li>Intégration d'analytics, de monitoring, de notifications automatisées et de briques d'intelligence artificielle[cite: 1, 3].</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
