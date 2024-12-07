'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export interface Project {
  id: string;
  name: string;
  industry: string;
  timeline: string;
  achievements: string[];
  image: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project.name}
          </h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {project.industry}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {project.timeline}
        </p>
        <ul className="space-y-2 mb-4">
          {project.achievements.map((achievement, index) => (
            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              {achievement}
            </li>
          ))}
        </ul>
        <Link
          href={`/case-studies/${project.id}`}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          View Case Study
        </Link>
      </div>
    </motion.div>
  );
}