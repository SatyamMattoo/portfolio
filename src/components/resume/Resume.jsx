import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from './Experience';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { label: 'Experience', value: 'experience' },
    { label: 'Professional Skills', value: 'skills' },
    { label: 'Achievements', value: 'achievements' },
    { label: 'Education', value: 'education' },
  ];

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1+ YEAR OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {tabs.map((tab) => (
            <li
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`${
                activeTab === tab.value
                  ? 'border-designColor rounded-lg'
                  : 'border-transparent'
              } resumeLi`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {activeTab === 'education' && <Education />}
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'achievements' && <Achievement />}
      </div>
    </section>
  );
};

export default Resume;
