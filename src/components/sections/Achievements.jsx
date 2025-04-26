import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';
import '../../styles/Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: 'Coding Platforms',
      items: [
        'Solved 300+ DSA questions across various coding platforms.',
        'Achieved a 1300+ rating on Codechef weekly contests.',
        'Attained a 1400+ rating on Leetcode, solving problems across a variety of difficulty levels, improving accuracy by 30% over time.'
      ],
      icon: <FaTrophy />
    },
    {
      title: 'Hackathons',
      items: [
        'Qualified for the first round of the Adobe GenSolve Hackathon, organized in collaboration with GeeksforGeeks, among the top 5% of participants.'
        
        
      ],
      icon: <FaMedal />
    },
    {
      title: 'Extracurricular Activities',
      items: [
        'Actively Studying Spanish to improve fluency, focusing on daily conversational knowledge and cultural context.',
        'Volunteered at community Development in an NGO.',
        'Mentored underprivileged and specially-abled children, fostering their educational and personal growth.'
      ],
      icon: <FaAward />
    },
    {
      title: 'Certifications',
      items: [
        'Completed Data Structures and Algorithm summer training by SPRUCE powered by Hitbullseye.com.',
        'Cleared HackerRank Intermediate Problem Solving Test, scoring in the top 15%.',
        'Completed Generative AI with Large Language Models by DeepLearning.AI, covering AI concepts and practical use cases.'
      ],
      icon: <FaCertificate />
    }
  ];

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-content">
          {achievements.map((category, index) => (
            <div key={index} className="achievement-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <ul className="achievement-list">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="achievement-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 