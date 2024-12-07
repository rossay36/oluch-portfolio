'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from '@/components/ProjectCard';

const projects: Project[] = [
  {
    id: 'enterprise-crm',
    name: 'Enterprise CRM Implementation',
    industry: 'Technology',
    timeline: 'Jan 2022 - Jun 2023',
    achievements: [
      'Led implementation of Salesforce CRM for 500+ users',
      'Reduced customer response time by 45%',
      'Achieved 98% user adoption rate',
    ],
    image: 'https://media.istockphoto.com/id/1367616997/photo/customer-feedback-experience-review-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=2e_mca5307fKUijLSLVjc9mwcUfpROlCb-PSMvnWsqY=',
    description:
      'Enterprise-wide CRM implementation project for a Fortune 500 company.',
  },
  {
    id: 'hospital-automation',
    name: 'Hospital Automation System',
    industry: 'Healthcare',
    timeline: 'Mar 2021 - Dec 2021',
    achievements: [
      'Automated 75% of manual processes',
      'Reduced patient wait times by 30%',
      'Implemented across 5 hospital locations',
    ],
    image: 'https://media.istockphoto.com/id/1577693972/photo/close-up-view-of-industrial-robot-manipulators-on-rail.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZBnDQES-NqsNv2yFNRqq_ui77HA5AH-Q2CZazD9XC7A=',
    description: 'End-to-end hospital automation system implementation.',
  },
  {
    id: 'smart-city',
    name: 'Smart City Infrastructure',
    industry: 'Infrastructure',
    timeline: 'Jul 2020 - Feb 2021',
    achievements: [
      'Deployed IoT sensors across 50 sq km',
      'Reduced energy consumption by 25%',
      'Implemented real-time monitoring system',
    ],
    image: 'https://media.istockphoto.com/id/1460170484/photo/transportation-and-technology-concept-its-mobility-as-a-service-telecommunication-iot-ict.webp?a=1&b=1&s=612x612&w=0&k=20&c=ByC7TdeT_q27P5_9XGG141inAK8PU_yYRIVrBIWM3iE=',
    description: 'Smart city infrastructure project for municipal government.',
  },
];

const industries = [...new Set(projects.map((project) => project.industry))];

export default function Projects() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');

  const filteredProjects = selectedIndustry
    ? projects.filter((project) => project.industry === selectedIndustry)
    : projects;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl mt-10 tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Featured Projects
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Explore my portfolio of successful projects across various
              industries, consistently delivering excellence and measurable
              results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedIndustry('')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                !selectedIndustry
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100'
              }`}
            >
              All Projects
            </button>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedIndustry === industry
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
