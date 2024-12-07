'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: 'Agile Project Management', icon: '🔄' },
  { name: 'Risk Management', icon: '🎯' },
  { name: 'Stakeholder Communication', icon: '🤝' },
  { name: 'Budget Management', icon: '💰' },
  { name: 'Team Leadership', icon: '👥' },
  { name: 'Strategic Planning', icon: '📋' },
];

const certifications = [
  { name: 'Project Management Professional (PMP)', year: '2020' },
  { name: 'PRINCE2 Practitioner', year: '2019' },
  { name: 'Certified Scrum Master', year: '2018' },
];

export default function About() {
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
              About Me
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Experienced Project Manager with a passion for delivering
              excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="prose dark:prose-invert max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Who I Am
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              With over 8+ years of experience in project management, I've
              successfully led diverse teams across various industries. My
              approach combines traditional project management methodologies
              with modern, agile practices to ensure optimal results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What I Do Best
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl mb-2 block">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Obtained in {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
