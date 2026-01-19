import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Briefcase, GraduationCap, Award, Code, Download, Moon, Sun, BadgeCheck } from 'lucide-react';

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Personal Information - CUSTOMIZE THIS
  const profile = {
    name: "Nanthawat Eiamsamarng",
    title: "Application Support",
    email: "nanthawat.esa@gmail.com",
    phone: "080-443-2667",
    location: "99/80 Atoll Bali, Luang Phaeng Rd, Khlong Luang Phaeng, Chachoengsao, Chachoengsao City, 24000",
    linkedin: "https://www.linkedin.com/in/nanthawat-eiamsamarng-2054872b0/",
    github: "https://github.com/YuukiAiN0",
    summary: "Experienced Application Support professional with a strong background in IT support, technical documentation, and system enablement. Proven expertise in resolving hardware, software, and network issues, delivering comprehensive training programs, and conducting quality assurance testing. Skilled in business process mapping, workflow design, and creating user-friendly technical documentation. Passionate about leveraging technology to improve productivity and user experience."
  };

  const experience = [
    {
      title: "IT Support",
      company: "TechSpace Co., Ltd.",
      period: "Oct 2024 - Apr 2025",
      description: [
        "Provided helpdesk and on-site technical support, resolving hardware, software, and network issues.",
        "Delivered training sessions on FortiSASE security solutions and Slack collaboration tools, improving team productivity and security awareness.",
        "Created and maintained IT knowledge base documentation, technical articles, and video tutorials to enhance self-service support capabilities."
      ]
    },
    {
      title: "Appika Enablement Specialist",
      company: "TechSpace Co., Ltd.",
      period: "May 2025 - Sep 2025",
      description: [
        "Developed and maintained comprehensive technical documentation, user guides, and training materials for Appika Business Management Software.",
        "Designed and delivered role-based training programs for marketing, sales, and operations teams.",
        "Conducted UI/UX quality assurance testing and collaborated with product development teams to identify pain points.",
      ]
    }
  ];

  const education = [
    {
      degree: "Vocational Certificate in Information Technology",
      school: "Intrachai Commercial College",
      period: "2020 - 2023",
      gpa: "3.7/4.0"
    },
    {
      degree: "Diploma in Information Technology",
      school: "Kanchanaphisek Technical College Mahanakorn",
      period: "2024 - 2025",
      gpa: "3.7/4.0"
    }
  ];

  const skills = {
    "Hard Skills": ["Business Process Mapping & Workflow Design", "System Configuration", "Technical Documentation", "System Testing & Quality Assurance"],
    "Soft Skills": ["Time Management & Prioritization", "Team Collaboration & Leadership", "Training & Presentation Delivery", "Problem-Solving & Analytical Thinking"],
    "Tools": ["Trello", "Slack", "Figma"]
  };

  const projects = [
    {
      name: "KTCM Chatbot",
      tech: "Dialogflow ES, Vercel",
      description: "AI-powered conversational chatbot for Kanchanaphisek Technical College Mahanakorn, providing automated student support for admissions inquiries, course information, campus facilities, and general institutional queries through natural language processing.",
      link: "https://ktcm-chatbot.vercel.app"
    },
    {
      name: "Personal Discord Bot (On-Going)",
      tech: "Discord.py, ...",
      description: "...",
      link: "#"
    }
  ];

  const awards = [
    {
      awardname: "4th Place - IT Skills Competition in Programming and Networking through DevOps Processes",
      participate: "Information Technology Competition at Kanchanaphisek Technical College Mahanakorn",
      time: "04/10/2025 - 06/10/2025",
    }
  ];

  const certifications = [
    {
      name: "TOEIC",
      score: "690",
      date: "2023",
    }
  ];

  const handleDownload = () => {
    alert('PDF download would be implemented with a backend endpoint');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {profile.name}
          </h1>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={18} />
              Download PDF
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-8 mb-8`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-2">{profile.name}</h2>
              <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">{profile.title}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-2">
                  <Mail size={16} />
                  {profile.email}
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={16} />
                  {profile.phone}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  {profile.location}
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </header>

        {/* Section Navigation */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-4 mb-8`}>
          <div className="flex flex-wrap gap-2">
            {['about', 'experience', 'skills', 'projects', 'education', 'awards', 'certifications',].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                  activeSection === section
                    ? 'bg-blue-600 text-white'
                    : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-8`}>
          {activeSection === 'about' && (
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-blue-600" />
                About Me
              </h3>
              <p className="text-lg leading-relaxed">{profile.summary}</p>
            </div>
          )}

          {activeSection === 'experience' && (
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="text-blue-600" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experience.map((job, idx) => (
                  <div key={idx} className={`border-l-4 border-blue-600 pl-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded`}>
                    <h4 className="text-xl font-semibold">{job.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{job.period}</p>
                    <ul className="list-disc list-inside space-y-1">
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'skills' && (
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code className="text-blue-600" />
                Technical Skills
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
                    <h4 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code className="text-blue-600" />
                Featured Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                  <div key={idx} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg hover:shadow-xl transition-shadow`}>
                    <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{project.tech}</p>
                    <p className="mb-4">{project.description}</p>
                    <a href={project.link} className="text-blue-600 dark:text-blue-400 hover:underline">
                      View Project →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'education' && (
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-blue-600" />
                Education
              </h3>
              {education.map((edu, idx) => (
                <div key={idx} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.school}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                  <p className="mt-2">GPA: {edu.gpa}</p>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'certifications' && (
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BadgeCheck className="text-blue-600" />
                Certifications
              </h3>
              {certifications.map((cert, idx) => (
                <div key={idx} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                  <h4 className="text-xl font-semibold">{cert.name}</h4>
                  {cert.score && <p className="text-blue-600 dark:text-blue-400 font-medium">Score: {cert.score}</p>}
                  {cert.date && <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>}
                </div>
              ))}
            </div>
          )}

          {activeSection === 'award' && (
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-blue-600" />
                Awards
              </h3>
              {awards.map((award, idx) => (
                <div key={idx} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                  <h4 className="text-xl font-semibold">{award.awardname}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{award.participate}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{award.time}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}