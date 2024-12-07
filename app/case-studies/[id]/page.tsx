'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const caseStudiesData = {
  'enterprise-crm': {
    title: 'Enterprise CRM Implementation',
    industry: 'Technology',
    duration: '18 months',
    client: 'Fortune 500 Technology Company',
    challenge: `The client's legacy CRM system was causing significant inefficiencies, with disconnected data silos, manual processes, and poor user adoption. This resulted in delayed customer response times and missed business opportunities.`,
    approach: [
      {
        title: 'Discovery & Planning',
        description:
          'Conducted extensive stakeholder interviews and process mapping to identify pain points and requirements.',
      },
      {
        title: 'Solution Design',
        description:
          'Developed a customized Salesforce implementation strategy aligned with business objectives.',
      },
      {
        title: 'Implementation',
        description:
          'Executed a phased rollout approach with continuous feedback and improvements.',
      },
      {
        title: 'Change Management',
        description:
          'Implemented comprehensive training and support programs to ensure high user adoption.',
      },
    ],
    results: [
      '45% reduction in customer response time',
      '98% user adoption rate across 500+ users',
      '30% increase in sales team efficiency',
      '25% improvement in customer satisfaction scores',
    ],
    technologies: ['Salesforce', 'Jira', 'Tableau', 'MuleSoft'],
    image:
      'https://media.istockphoto.com/id/1367616997/photo/customer-feedback-experience-review-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=2e_mca5307fKUijLSLVjc9mwcUfpROlCb-PSMvnWsqY=',
  },
  'hospital-automation': {
    title: 'Hospital Automation System',
    industry: 'Healthcare',
    duration: '12 months',
    client: 'Regional Healthcare Network',
    challenge: `Manual processes were causing delays in patient care, increasing the risk of errors, and creating significant administrative overhead across multiple hospital locations.`,
    approach: [
      {
        title: 'Process Analysis',
        description:
          'Mapped current workflows and identified automation opportunities.',
      },
      {
        title: 'System Design',
        description:
          'Designed an integrated automation solution considering regulatory requirements.',
      },
      {
        title: 'Implementation',
        description:
          'Rolled out the system across 5 hospital locations with minimal disruption.',
      },
      {
        title: 'Training & Support',
        description:
          'Provided comprehensive training to medical and administrative staff.',
      },
    ],
    results: [
      '75% reduction in manual processes',
      '30% decrease in patient wait times',
      '40% improvement in staff efficiency',
      '50% reduction in documentation errors',
    ],
    technologies: ['Epic Systems', 'RPA', 'HL7', 'Microsoft Azure'],
    image:
      'https://media.istockphoto.com/id/1577693972/photo/close-up-view-of-industrial-robot-manipulators-on-rail.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZBnDQES-NqsNv2yFNRqq_ui77HA5AH-Q2CZazD9XC7A=',
  },
  'smart-city': {
    title: 'Smart City Infrastructure',
    industry: 'Infrastructure',
    duration: '8 months',
    client: 'Municipal Government',
    challenge: `The city faced increasing operational costs and inefficient resource utilization, leading to sustainability concerns and citizen dissatisfaction with public services.`,
    approach: [
      {
        title: 'Infrastructure Assessment',
        description:
          'Evaluated existing infrastructure and identified smart city opportunities.',
      },
      {
        title: 'Solution Architecture',
        description:
          'Designed an IoT-based smart city platform for real-time monitoring and control.',
      },
      {
        title: 'Deployment',
        description:
          'Implemented sensors and systems across 50 sq km of city area.',
      },
      {
        title: 'Monitoring & Optimization',
        description:
          'Established a central command center for real-time monitoring and response.',
      },
    ],
    results: [
      '25% reduction in energy consumption',
      '40% improvement in emergency response times',
      '60% better resource allocation',
      '35% increase in citizen satisfaction',
    ],
    technologies: ['IoT Sensors', 'AWS IoT', 'Data Analytics', 'Smart Grid'],
    image:
      'https://media.istockphoto.com/id/1460170484/photo/transportation-and-technology-concept-its-mobility-as-a-service-telecommunication-iot-ict.webp?a=1&b=1&s=612x612&w=0&k=20&c=ByC7TdeT_q27P5_9XGG141inAK8PU_yYRIVrBIWM3iE=',
  },
};

export default function CaseStudy() {
  const params = useParams();
  const id = params.id as string;
  const study = caseStudiesData[id as keyof typeof caseStudiesData];

  if (!study) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Case Studies
            </Link>
            <div className="grid mt-10 md:grid-cols-2 gap-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {study.title}
                </h1>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {study.industry}
                  </span>
                  <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {study.duration}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Client: {study.client}
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Challenge
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {study.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {study.approach.map((step, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Results & Impact
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {study.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg"
                >
                  <p className="text-gray-900 dark:text-white font-medium">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-4">
              {study.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
