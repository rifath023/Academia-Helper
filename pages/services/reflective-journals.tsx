import { ServiceLanding } from '../../components/ServiceLanding';

export default function ReflectiveJournalsPage() {
  return (
    <ServiceLanding
      slug="services/reflective-journals"
      title="Reflective Journal Help UK 2026: Gibbs & Critical Reflection | Academia Helper"
      description="Reflective journal and reflective essay help linking theory to practice with Gibbs, Rolfe and other models. Original and rubric-matched."
      h1="Reflective Journal Help UK"
      intro="Personal reflection tasks linking academic theory to practice, using Gibbs, Rolfe and critical reflective frameworks."
      bullets={[
        'Reflective essays, journals and placement reflections',
        'Gibbs, Rolfe, Kolb and critical reflection models',
        'Theory-to-practice linkage with citations',
        'Original, 0% AI, unlimited revisions',
      ]}
      related={[
        { name: 'Reflective Essay Guide', href: '/blog/reflective-essay-university/' },
        { name: 'Critical Reflective Writing', href: '/blog/critical-reflective-writing/' },
        { name: 'Gibbs Reflective Cycle Example', href: '/blog/gibbs-reflective-cycle-example/' },
      ]}
      faqs={[
        { q: 'Can you use Gibbs cycle?', a: 'Yes. We structure reflections with Gibbs, Rolfe or your required model and link to theory.' },
        { q: 'Is first-person allowed?', a: 'Yes, where your rubric allows it. We follow your brief on voice and style.' },
        { q: 'What do you need?', a: 'Brief, rubric, word count, deadline, placement details and required models.' },
      ]}
    />
  );
}
