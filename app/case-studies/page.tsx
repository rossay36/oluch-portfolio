'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const caseStudies = [
  {
    id: 'enterprise-crm',
    title: 'Enterprise CRM Implementation',
    overview:
      'Transforming customer relationship management for a Fortune 500 company through strategic Salesforce implementation.',
    image:
      'https://media.istockphoto.com/id/1367616997/photo/customer-feedback-experience-review-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=2e_mca5307fKUijLSLVjc9mwcUfpROlCb-PSMvnWsqY=',
    results: [
      '45% faster response time',
      '98% user adoption',
      '30% increase in sales efficiency',
    ],
    industry: 'Technology',
  },
  {
    id: 'hospital-automation',
    title: 'Hospital Automation System',
    overview:
      'Revolutionizing healthcare delivery through comprehensive process automation across multiple hospital locations.',
    image:
      'https://media.istockphoto.com/id/1577693972/photo/close-up-view-of-industrial-robot-manipulators-on-rail.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZBnDQES-NqsNv2yFNRqq_ui77HA5AH-Q2CZazD9XC7A=',
    results: [
      '75% process automation',
      '30% reduced wait times',
      '40% staff efficiency increase',
    ],
    industry: 'Healthcare',
  },
  {
    id: 'smart-city',
    title: 'Smart City Infrastructure',
    overview:
      'Implementing cutting-edge IoT solutions to create a more sustainable and efficient urban environment.',
    image:
      'https://media.istockphoto.com/id/1460170484/photo/transportation-and-technology-concept-its-mobility-as-a-service-telecommunication-iot-ict.webp?a=1&b=1&s=612x612&w=0&k=20&c=ByC7TdeT_q27P5_9XGG141inAK8PU_yYRIVrBIWM3iE=',
    results: [
      '25% energy savings',
      '40% improved response times',
      '60% better resource allocation',
    ],
    industry: 'Infrastructure',
  },
];

export default function CaseStudies() {
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
              Case Studies
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Explore how I delivered exceptional results through strategic
              planning, risk management, and teamwork.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {study.title}
                      </h2>
                      <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {study.industry}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {study.overview}
                    </p>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Results
                      </h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600 dark:text-gray-300"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      View Full Case Study
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
