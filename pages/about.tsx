import { InfoPage, orgJsonLd } from '../components/InfoPage';

export default function About() {
  return (
    <InfoPage
      path="/about/"
      title="About Academia Helper | Study Guides, Tools & Academic Support"
      description="Study guides, free calculators and contact information for Academia Helper. Learn how to use our educational resources."
      h1="About Academia Helper"
      intro="Academia Helper publishes free study guides and calculators for university students in the UK, USA and Australia, and offers academic support services alongside them."
      jsonLd={[orgJsonLd, { '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About Academia Helper', url: 'https://www.academiahelper.com/about/' }]}
    >
      <h2>What we do</h2>
      <p>We write practical explainers on referencing, dissertations, research methods, grading systems and university rules, and we build free tools such as grade calculators and planners. Our guides are written for students who need a clear answer, not a sales pitch.</p>
      <h2>How our guides are made</h2>
      <p>Guides are published under the Academia Helper organisation byline. A byline does not imply an independent expert review. Use the sources listed on each page and check current university rules before acting. Read our <a href="/editorial-policy/">editorial standards and corrections guidance</a>.</p>
      <h2>Academic integrity</h2>
      <p>Use these resources to develop your own understanding and writing. Before seeking feedback, tutoring or proofreading, check what your institution permits for the specific assessment. Do not submit someone else&apos;s work as your own.</p>
      <h2>Contact</h2>
      <p>Email <a href="mailto:academiahelp0@gmail.com">academiahelp0@gmail.com</a> or use the <a href="/contact/">contact page</a>.</p>
    </InfoPage>
  );
}
