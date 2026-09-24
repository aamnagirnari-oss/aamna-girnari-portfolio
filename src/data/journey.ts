import type { JourneyStep } from './types';

export const journeySteps: JourneyStep[] = [
  {
    step: 'B.Sc.',
    title: 'Mathematics',
    description:
      'Where the analytical habit started — proof, logic, and getting comfortable with quantitative problems before any of it had a name like "data science".',
  },
  {
    step: 'M.Sc.',
    title: 'Big Data Analytics',
    description:
      'Currently in Part 2. This is where Mathematics turned into tools: Python, SQL, Spark, and a lot of learning by building rather than only reading.',
  },
  {
    step: '→',
    title: 'Data, Big Data & AI Projects',
    description:
      'Applying that foundation to real datasets — from enterprise-scale processing with PySpark and Databricks to a bioinformatics dataset with millions of records.',
  },
  {
    step: '→',
    title: 'Research',
    description:
      "A research review presentation at my college's National Research Conference, placing 2nd in the GitHub component.",
  },
  {
    step: '→',
    title: 'Entrepreneurship & Real-World Business Work',
    description:
      'Hands-on work building and running my own brand, Al Ras\u2019al — website, content, marketing and business data, alongside the academic side.',
  },
  {
    step: '→',
    title: 'First Professional Internship',
    description:
      "The next step — bringing the analytical, technical and business threads above into a professional data role. Currently searching.",
  },
];

// Optional, deliberately small — not a major part of the professional story.
export const additionalAcademicBackground = {
  title: 'Additional Academic Background',
  description:
    'My earlier education also included coursework and practicals in Physics and Chemistry, alongside Mathematics. It isn\u2019t central to my internship focus, but it\u2019s part of a broad scientific foundation.',
  note: '[Add specific coursework or qualification details if relevant]',
};
