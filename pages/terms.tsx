import { InfoPage } from '../components/InfoPage';

export default function Terms() {
  return (
    <InfoPage
      path="/terms/"
      title="Terms of Service | Academia Helper"
      description="The terms for using the Academia Helper website, guides, free tools and support services."
      h1="Terms of Service"
      intro="Last updated: 8 October 2026."
    >
      <h2>Using the site</h2>
      <p>Guides and tools are for general information and study support. They are not legal or professional advice, and grading or policy rules vary by institution. Check your own university&apos;s regulations.</p>
      <h2>Academic integrity</h2>
      <p>You are responsible for following your institution&apos;s academic-integrity rules. Our materials and services must not be submitted as your own assessed work where your institution does not allow that.</p>
      <h2>Support services</h2>
      <p>Before buying support, request the scope, price, timing and cancellation terms in writing. Check that the proposed assistance is permitted for your assessment. These website guidelines do not replace the terms of an individual service agreement.</p>
      <h2>Calculators</h2>
      <p>Results are estimates. We are not responsible for decisions made on them; confirm against your institution&apos;s official regulations.</p>
      <h2>Liability and contact</h2>
      <p>To the extent the law allows, we are not liable for indirect or consequential loss. Questions: <a href="mailto:academiahelp0@gmail.com">academiahelp0@gmail.com</a>.</p>
    </InfoPage>
  );
}
