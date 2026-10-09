import { InfoPage, orgJsonLd } from '../components/InfoPage';

export default function Contact() {
  return (
    <InfoPage
      path="/contact/"
      title="Contact Academia Helper | Questions, Corrections & Support"
      description="Email or message Academia Helper with study questions, corrections to a guide or support requests."
      h1="Contact Academia Helper"
      intro="Send us a question, a correction or a support request using the contact details below."
      jsonLd={[orgJsonLd, { '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact Academia Helper', url: 'https://www.academiahelper.com/contact/' }]}
    >
      <ul>
        <li>Email: <a href="mailto:academiahelp0@gmail.com">academiahelp0@gmail.com</a></li>
        <li>WhatsApp: <a href="https://wa.me/8801577128417" target="_blank" rel="noopener noreferrer">+880 1577 128417</a></li>
      </ul>
      <h2>Found a mistake?</h2>
      <p>Include the page URL, the statement you believe is wrong and a link to the relevant source. See our <a href="/editorial-policy/">editorial policy</a>.</p>
      <h2>Support requests</h2>
      <p>Describe the topic and the kind of feedback or explanation you need. Check your institution&apos;s rules on outside assistance first, and request written confirmation of scope, price and timing before making a payment. Do not send passwords, identity documents or confidential research data.</p>
    </InfoPage>
  );
}
