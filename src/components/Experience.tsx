import React, { useState } from 'react';
import { Calendar, Building2, ArrowUpRight, Code2, ChevronDown, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ExperienceItem } from 'src/data/experience';
import { experiences } from 'src/data/experience';
import BlinkingUnderscore from './BlinkingUnderscore';

const TimelineCard: React.FC<{
    experience: ExperienceItem;
    isExpanded: boolean;
    onToggle: () => void;
}> = ({ experience, isExpanded, onToggle }) => {
    const isWork = experience.type === 'work';

    return (
        <div className="pl-8">
            <div
                className={`
          border-4 ${isWork ? 'border-white' : 'border-white/50'} 
          hover:border-pink-500 transition-colors p-6 bg-black
          ${isExpanded ? 'border-pink-500' : ''}
        `}
            >
                {/* Header - Always visible */}
                <div
                    onClick={onToggle}
                    className="w-full text-left space-y-4 cursor-pointer"
                >
                    <div className="flex items-center justify-between">
                        <h3 className={`text-2xl font-bold ${!isWork && 'text-gray-400'}`}>
                            {experience.position}
                        </h3>
                        <ChevronDown
                            className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                        {isWork ? <Building2 size={20} /> : <GraduationCap size={20} />}
                        {experience.url ? (
                            <a
                                href={experience.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500 transition-colors flex items-center gap-1"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {experience.company}
                                <ArrowUpRight size={16} />
                            </a>
                        ) : (
                            <span>{experience.company}</span>
                        )}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={20} />
                        <span>{experience.period}</span>
                    </div>
                </div>

                {/* Expandable Content - Using simple CSS transition instead of AnimatePresence */}
                <div
                    className={`
            overflow-hidden transition-all duration-300 ease-in-out
            ${isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}
          `}
                >
                    <div className="pt-6 border-t border-white/20">
                        <p className="text-lg text-gray-300 mb-6">
                            {experience.description}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Code2 className="text-pink-500" />
                                <h4 className="text-lg font-bold">
                                    {isWork ? 'TECHNOLOGIES' : 'FOCUS AREAS'}
                                </h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className={`
                      px-3 py-1 text-sm border-2 
                      ${isWork ? 'border-white' : 'border-white/50'}
                      hover:border-pink-500 transition-colors
                    `}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const workExperiences = experiences.filter(exp => exp.type === 'work');
    const educationExperiences = experiences.filter(exp => exp.type === 'education');

    const TimelineSection: React.FC<{
        items: ExperienceItem[];
        title: string;
    }> = ({ items, title }) => (
        <div className="relative mb-20">
            <h3 className="text-2xl font-bold mb-12 pl-8">
                {title}<BlinkingUnderscore fontSize='1.5rem' />
            </h3>

            {/* Timeline line */}
            <div
                className="absolute left-0 top-0 bottom-0 w-px bg-white/50"
                aria-hidden="true"
            />

            <div className="space-y-16">
                {items.map((exp) => (
                    <motion.div
                        key={exp.id}
                        initial={false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >

                        {/* Timeline dot with date */}
                        <div className="absolute left-[-12px] flex flex-col items-center">
                            <div
                                className={`
                  w-6 h-6 rounded-full border-4 border-white
                  ${exp.type === 'work' ? 'bg-pink-500' : 'bg-gray-500'}
                `}
                                aria-hidden="true"
                            />
                        </div>

                        <TimelineCard
                            experience={exp}
                            isExpanded={expandedId === exp.id}
                            onToggle={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <div>
            <TimelineSection items={workExperiences} title="WORK EXPERIENCE" />
            <TimelineSection items={educationExperiences} title="EDUCATION" />
        </div>
    );
};

export default Experience;