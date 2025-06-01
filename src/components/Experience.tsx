import { RevealOnScroll } from "./RevealOnScroll";

type ExperienceProps = {
  darkMode: boolean;
};

export const Experience = ({ darkMode }: ExperienceProps) => {
  console.log(darkMode);
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-10"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <div id="experience" className="">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                💼 Work Experience -around 5+ years
              </h3>
              <div>
                <h4 className="font-semibold">
                  Trace Software International (Group Trace) (2023 - Present)
                </h4>
                <h5 className="font-bold">Developer</h5>

                <p>Plusieurs Société & Produits :</p>
                <ul>
                  <li>
                    Logiciels d'ingénierie pour les bâtiments et l'énergie -
                    Trace Software International
                  </li>
                  <li>Contenu numérique 3D pour l'ingénierie - TraceParts</li>
                  <li>Gestion des objets et solutions BIM - BIM&CO </li>
                  <li>Les calculs carbones - Carbonz </li>
                  <li>Calculs solaires panneaux - Archelios</li>
                </ul>
                {/* // * This additional text breaks section
                <p>
                  Dans le secteur de l’énergie : solaire et carbone notamment;
                  En méthodolie Agile Scrum Backlogs, Sprints (itérations de 3
                  semaines); Une dizaine de développeurs dans l’équipe;
                </p>*/}

                <p className="font-bold">Réalisations :</p>
                <ul>
                  <li>
                    Created from scratch electrical schema builder applications.
                  </li>
                  <li>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </li>
                  <li>Realised integration of Graph QL APIs</li>
                  <li>
                    Développement des nouvelles features de scratch et
                    maintenance des applications existants dans le cadre
                    Agile/Scrum pour de multiples projets (tels que le schéma
                    électrique du bâtiment, les calculs de carbone, les calculs
                    de panneaux solaires, le Building Information Modelling)
                    écrit en Typescript, React JS (React Native, Next.js), C#,
                    .NET, Entity Framework Core ORM, NodeJS (Nest.js), Python.
                  </li>
                  <li>Authentification par JSON Web Token (JWT)</li>
                  <li>
                    Participation et animation des différents rituels agiles
                    (daily, sprint planning, sprints rétrospectifs etc.)
                  </li>
                  <li>
                    Participation à l’architecture de l’ensemble des modules, la
                    conception et au développement d'applications mobiles
                    multiplateformes en utilisant React Native
                  </li>
                  <li>
                    Réalisation des tests unitaires et d’intégration pour
                    garantir la qualité et la fiabilité des applications en
                    utilisant Vitest, Jest, Cypress
                  </li>
                  <li>
                    Collaboration avec les équipes de conception, produit et SEO
                    pour créer des interfaces utilisateur intuitives et
                    optimisées pour les moteurs de recherche
                  </li>
                  <li>Création des tickets, rédigé les user stories</li>
                  <li>
                    Maintenir et gérer le backlog, prioriser les évolutions
                  </li>
                  <li>Test des fonctionnalités livrées</li>
                  <li>
                    Suivre les développements au quotidien (méthodes SCRUM et
                    KANBAN) et valider les fonctionnalités livrées
                  </li>
                  <li>
                    Node.js pour le développement de backends et d'APIs avec des
                    frameworks Express.js, Nest.js
                  </li>
                  <li>
                    Gestion de bases de données relationnels et non
                    relationnels: PostgreSQL, MongoDB, Google Cloud Platform
                    (Firebase, Gemini API, Locations API)
                  </li>
                  <li>
                    Développement et maintenance des composants Design System
                    Storybook
                  </li>
                  <li>
                    Déploiement de plusieurs projets, packages après avoir
                    configuré pipeline Azure Devops
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">
                  BIM&CO (Group Trace) (2022-2023)
                </h4>
                <h5>Developer Fullstack</h5>
                <p>
                  Contexte et Projet : Secteur de la construction, en
                  méthodologie Agile/Scrum. Au sein de 3 squads et 9
                  développeurs. Data Management in Construction domain as
                  Autodesk/Excel Plugin
                </p>
                <p className="font-bold">Réalisations :</p>
                <ul>
                  <li>
                    Authentification par JSON Web Token (JWT) Développement
                    mobile et web, migration du legacy à code moderne en React
                    JS / React Native
                  </li>
                  <li>Integration REST APIs</li>
                  <li>
                    Participation et animation des différents rituels agiles
                    (daily, sprint planning, sprints rétrospectifs etc.)
                  </li>
                  <li>
                    Réalisation des tests unitaires et d’intégration pour
                    garantir la qualité et la fiabilité des applications en
                    utilisant Vitest, Jest, Cypress
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">
                  Global Climate Initiatives (2022)
                </h4>
                <h5>Développeur Fullstack</h5>
                <p>Integration REST APIs</p>
                <p>Carbon emission calculation and reduction</p>
                <p className="font-bold">Contexte et Projet :</p>
                <p>
                  Application des calculs des émissions et réalisation du Bilan
                  GES des Entreprise B2B. Historiquement spécialiste mondial du
                  calcul des Gaz à Effet de Serre dans le transport via TK’BLUE,
                  GCI a mis à disposition son logiciel de calcul de bilan GES
                  pour tous types d’entreprises. Au sein d’une équipe de 10
                  développeurs sur 30 au global en méthodologie Agile Scrum.
                </p>
                <p>Réalisations :</p>
                <ul>
                  <li>
                    Réalisation des tests unitaires et d’intégration pour
                    garantir la qualité et la fiabilité des applications en
                    utilisant Vitest, Jest, Cypress
                  </li>
                  <li>
                    Développement et amélioration des applications web & mobile
                    React JS / React Native / Redux / Node JS / Stripe
                  </li>
                  <li>
                    Revue de code et discussions techniques pour garantir les
                    meilleures pratiques et standards de code
                  </li>
                  <li>
                    Participation et animation des différents rituels agiles
                    (daily, sprint planning, sprints rétrospectifs etc.)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">
                  De Mars 2022 à Août 2022 - Web Première - Nice
                </h4>
                <p>Agence Web</p>
                <h5>Développeur React Native, Web & Mobile (iOS & Android)</h5>
                <p>Contexte et Projet :</p>
                <p>
                  Agence Web de communication, de création de sites internet et
                  d’applications mobiles. En méthodologie Agile Scrum, au sein
                  d’une équipe de 2 développeurs.
                </p>
                <p className="font-bold">Réalisations :</p>
                <ul>
                  <li>
                    Déploiement des app B2C e-commerce telles que Omedom
                    (gestion de biens multiples) et Scanflock (plateforme de
                    télémédecine); Réalisation des tests unitaires et
                    d’intégration pour garantir la qualité et la fiabilité des
                    applications en utilisant Vitest, Jest, Cypress
                  </li>
                  <li>
                    Développement d'applications multiplateformes (iOS, Android,
                    Web) avec React Native, au service de +10 000 users;
                  </li>
                  <li>
                    Intégration d'appels vidéo en temps réel et de la génération
                    de documents pour améliorer l'interactivité des utilisateurs
                    ;
                  </li>
                  <li>
                    Développement et amélioration des applications web & mobile
                    React JS / React Native / Redux / Node JS
                  </li>
                  <li>
                    Revue de code et discussions techniques pour garantir les
                    meilleures pratiques et standards de code
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">
                  D’Août 2018 à Mars 2022 – Déménagement en France, étude Bac
                  +5. Plusieurs projets Freelance & Formateur privé en
                  Mathématiques et Anglais – Loire Atlantique / Moscou
                </h4>
              </div>

              <div>
                <h4 className="font-semibold">
                  De Janvier 2017 à Août 2018 - 1fit.app (Codebusters) - Almaty,
                  Kazakhstan
                </h4>
                <h5>Developer</h5>
                <p>
                  Application multi-utilisateur pour tous les types de sports en
                  un seul abonnement
                </p>
                <p>
                  <strong>Contexte et Projet :</strong>
                </p>
                <p>
                  Dans le secteur du Fitness / Sport, au sein d’une équipe de 5
                  à 10 développeurs évoluant en méthodologie Agile.
                </p>
                <p>
                  <strong>Réalisations :</strong>
                </p>
                <ul>
                  <li>
                    Développement et amélioration des applications web & mobile
                    React JS / React Native / Redux / Node JS / HTML / CSS
                  </li>
                  <li>
                    Réalisation des tests unitaires et d’intégration pour
                    garantir la qualité et la fiabilité des applications en
                    utilisant Vitest, Jest, Cypress
                  </li>
                  <li>
                    Revue de code Participation et animation des différents
                    rituels agiles (daily, sprint planning, sprints
                    rétrospectifs etc.)
                  </li>
                  <li>
                    Collaboration avec les équipes produit et design pour
                    assurer une expérience utilisateur optimale ;
                  </li>
                </ul>

                <p>
                  <strong></strong>Environnement technique :
                </p>
                <p>
                  Langages : JavaScript, TypeScript, Python, SQL, Frontend &
                  Mobile : TypeScript, React Native / ReactJS / NextJS,
                  JavaScript, Redux Toolkit, Responsive Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
