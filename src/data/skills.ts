import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    label: 'Data & Analytics',
    meta: 'Technical',
    skills: ['Python', 'Pandas', 'NumPy', 'R', 'SQL', 'Power BI', 'Data Visualization'],
  },
  {
    label: 'Big Data',
    meta: 'Technical',
    skills: ['Apache Spark', 'PySpark', 'Databricks', 'Spark SQL'],
  },
  {
    label: 'AI / ML',
    meta: 'Technical',
    skills: [
      'Machine Learning',
      'Computer Vision',
      'Recommendation Systems',
      'TensorFlow / Keras',
      'Scikit-learn',
    ],
  },
  {
    label: 'Development',
    meta: 'Technical',
    skills: ['Django', 'HTML', 'CSS', 'Git', 'GitHub'],
  },
  {
    label: 'Tools & Environment',
    meta: 'Technical',
    skills: ['Linux', 'Jupyter', 'RStudio', 'VS Code'],
  },
  {
    label: 'Mathematical & Analytical Thinking',
    meta: 'Analytical',
    skills: [
      'Mathematical Reasoning',
      'Logical Thinking',
      'Quantitative Thinking',
      'Problem Solving',
      'Data Interpretation',
    ],
  },
  {
    label: 'Creative & Content',
    meta: 'Creative',
    skills: [
      'Graphic Design',
      'Branding',
      'AI-Assisted Video Creation',
      'Visual Storytelling',
      'Content Creation',
    ],
  },
  {
    label: 'Business & Brand',
    meta: 'Business',
    skills: [
      'Social Media Management',
      'Marketing',
      'Sales',
      'Product Presentation',
      'Website Management',
      'Business / Customer Data Handling',
    ],
  },
];

export const TOOLKIT_ORDER: SkillGroup['meta'][] = ['Technical', 'Analytical', 'Creative', 'Business'];

export const TOOLKIT_DEK: Record<SkillGroup['meta'], string> = {
  Technical: 'What I build with.',
  Analytical: "The Mathematics foundation underneath all of it.",
  Creative: "What I bring to Al Ras'al and other creative work.",
  Business: 'What running a real brand has taught me.',
};
