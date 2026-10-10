import { ServiceLanding } from '../../components/ServiceLanding';

export default function GroupProjectsPage() {
  return (
    <ServiceLanding
      slug="services/group-projects"
      title="Group Project Help UK 2026: Reports, Peer Review & Slides | Academia Helper"
      description="Support for collaborative projects, peer assessments and team presentations with clear role distribution and structure."
      h1="Group Work & Group Project Help UK"
      intro="Collaborative projects, peer assessments and team presentations with role distribution and fair workload planning."
      bullets={[
        'Group reports, plans and team presentations',
        'Role distribution and peer-evaluation support',
        'Conflict and non-contributing-member guidance',
        'Original, 0% AI, unlimited revisions',
      ]}
      related={[
        { name: 'Group Member Not Contributing?', href: '/blog/group-assignment-member-not-contributing/' },
        { name: 'Peer Evaluation Guide', href: '/blog/group-assignment-peer-evaluation/' },
        { name: 'Capstone Project Structure', href: '/blog/college-capstone-project-structure/' },
      ]}
      faqs={[
        { q: 'Can you help if a member is not contributing?', a: 'Yes. We help document contributions, redistribute work and draft peer evaluations.' },
        { q: 'Do you do slides for team presentations?', a: 'Yes. Slide content, structure and speaker notes for each member.' },
        { q: 'What do you need?', a: 'Brief, rubric, team size, deadline and your assigned section.' },
      ]}
    />
  );
}
