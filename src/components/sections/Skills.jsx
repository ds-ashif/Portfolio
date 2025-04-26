import React from 'react';
import { FaCode, FaReact, FaJava, FaDatabase, FaGitAlt, FaGithub, FaJs } from 'react-icons/fa';
import { DiCss3, DiHtml5 } from 'react-icons/di';
import { SiCplusplus, SiRedux } from 'react-icons/si';
import { BsFileCode, BsCpu, BsTerminal } from 'react-icons/bs';
import FadeInAnimation from '../animations/FadeInAnimation';
import SkillBar from '../animations/SkillBar';
import HexagonSkill from '../animations/HexagonSkill';
import '../../styles/Skills.css';

const Skills = () => {
  const majorSkills = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'HTML', icon: <DiHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <DiCss3 />, color: '#1572B6' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'SQL', icon: <FaDatabase />, color: '#4479A1' },
    // { name: 'Linux', icon: <FaLinux />, color: '#FCC624' }
  ];

  const skillCategories = [
    {
      title: 'Languages',
      icon: <FaCode />,
      description: 'Programming languages I am proficient in',
      skills: [
        { name: 'C++', level: 85, icon: <SiCplusplus /> },
        { name: 'Java', level: 80, icon: <FaJava /> },
        { name: 'HTML', level: 90, icon: <DiHtml5 /> },
        { name: 'CSS', level: 88, icon: <DiCss3 /> },
        { name: 'JavaScript', level: 88, icon: <FaJs /> },
        { name: 'SQL', level: 75, icon: <FaDatabase /> }
        // { name: 'Linux', level:60, icon: <FaLinux /> }
      ]
    },
    {
      title: 'Libraries & Frameworks',
      icon: <FaReact />,
      description: 'Technologies and tools I use for development',
      skills: [
        { name: 'React', level: 87, icon: <FaReact /> },
        { name: 'Redux', level: 78, icon: <SiRedux /> },
        { name: 'NodeJs', level: 72, icon: <FaJava /> },
        { name: 'Git', level: 85, icon: <FaGitAlt /> },
        { name: 'GitHub', level: 88, icon: <FaGithub /> }
      ]
    },
    {
      title: 'Coursework',
      icon: <BsFileCode />,
      description: 'Academic subjects I have excelled in',
      skills: [
        { name: 'Data Structures', level: 90, icon: <BsTerminal /> },
        { name: 'Algorithms (DSA)', level: 85, icon: <BsFileCode /> },
        { name: 'Operating Systems', level: 82, icon: <BsCpu /> },
        { name: 'Database Management', level: 80, icon: <FaDatabase /> },
        { name: 'OOP', level: 90, icon: <FaCode /> }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <FadeInAnimation>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-description">
            My technical toolkit includes a variety of programming languages, frameworks, and technologies
          </p>
        </FadeInAnimation>
        <br></br>
        <br></br>
        <FadeInAnimation>
          <div className="hexagon-skills-container">
            {majorSkills.map((skill, index) => (
              <HexagonSkill 
                key={index}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </FadeInAnimation>
        <br></br>
        <br></br>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <FadeInAnimation 
              key={index} 
              direction={index % 2 === 0 ? 'left' : 'right'} 
              delay={0.2 * index}
            >
              <div className="skill-category">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <p className="category-description">{category.description}</p>
                <div className="skill-bars">
                  {category.skills.map((skill, skillIndex) => (
                    <div className="skill-item-container" key={skillIndex}>
                      <SkillBar
                        name={skill.name}
                        level={skill.level}
                        delay={0.1 * skillIndex}
                        icon={skill.icon}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </FadeInAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 