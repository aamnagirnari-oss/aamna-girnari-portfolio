import type { EntrepreneurshipArea } from './types';

export const entrepreneurshipIntro =
  "Al Ras'al is my own brand/business. I haven't just designed a logo for it — I've worked hands-on across most sides of actually running it.";

export const entrepreneurshipAreas: EntrepreneurshipArea[] = [
  {
    label: 'Website',
    items: [
      'Built the site with Django, Python, HTML and CSS',
      'Maintain and update it on an ongoing basis (content, pages, product presentation)',
    ],
  },
  {
    label: 'Social Media & Content',
    items: [
      'Manage the brand\u2019s social media presence',
      'Create product and brand content',
      'Handle day-to-day content and posting',
    ],
  },
  {
    label: 'Marketing & Sales',
    items: [
      'Promotional and marketing content for the brand',
      'Sales and customer-facing communication',
      'Product presentation, online and offline',
    ],
  },
  {
    label: 'Design',
    items: [
      'Logo and visual identity',
      'Product graphics and social media creatives',
    ],
  },
  {
    label: 'Business & Customer Data',
    items: [
      'Worked with business and customer data at a few-thousand-customer scale',
      '[Add exact data-management responsibilities — e.g. specific tools, record-keeping process, or reporting]',
    ],
  },
];

export const businessDataNote =
  "I've handled and organised business and customer data for Al Ras'al at a few-thousand-customer scale — the specific tasks and tools are listed above and can be walked through in detail on request.";

export const websiteDistinction = {
  development:
    'Building pages, templates and functionality in Django — the technical, code side.',
  management:
    'Keeping the live site updated, presenting products, and managing its day-to-day content — the ongoing, operational side.',
};
