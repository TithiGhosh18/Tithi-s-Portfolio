import React from 'react';
import Project from './Project';
import SQLEase from '../assets/SQLEase.png';
import HealthyFi from '../assets/HealthyFi.png';
import WeatherWiz from '../assets/WeatherWiz.png';
import ExternalLinkButton from './ExternalLinkButton';
const projects = [
  {
    title: 'SQLEase',
    description: 'SQLEase is an intelligent web application that allows users to upload CSV files and ask questions in plain English to generate accurate SQL queries. It supports multi-table joins and works with both single and multiple datasets. Built using React (Vite + Tailwind) for the frontend and Flask + SQLite for the backend, SQLEase integrates the Gemini API to translate natural language questions into SQL queries dynamically.',
    github: 'https://github.com/TithiGhosh18/SQLEase',
    demo: 'https://sql-ease.vercel.app/',
    image: SQLEase,
    tech: ['react', 'javascript', 'tailwind','flask','streamlit'],
  },
  {
    title: 'HealthyFi',
    description: 'HealthyFi is a medicine recommendation system that helps users identify possible diseases based on their symptoms and receive personalized suggestions. Users can input their symptoms through a simple interface, and the system predicts the likely disease using a machine learning model. It then provides the disease definition, recommended medications, precautions, and lifestyle tips — all in one place, making health advice accessible and efficient.',
    github: 'https://github.com/TithiGhosh18/HealthyFi',
    demo: 'https://healthyfi-rtwp.onrender.com/',
    image: HealthyFi,
    tech: ['html', 'javascript', 'css','flask'],
  },
  {
    title: 'WeatherWiz',
    description: 'HealthyFi is a medicine recommendation system that helps users identify possible diseases based on their symptoms and receive personalized suggestions. Users can input their symptoms through a simple interface, and the system predicts the likely disease using a machine learning model. It then provides the disease definition, recommended medications, precautions, and lifestyle tips — all in one place, making health advice accessible and efficient.',
    github: 'https://github.com/TithiGhosh18/WeatherWiz',
    demo: 'https://weather-wiz-gamma.vercel.app/',
    image: WeatherWiz,
    tech: ['html', 'javascript', 'css'],
  }
];

export default function ProjectsSection() {
  return (
    <div className="w-full h-[900px] py-10 text-white font-mono">
      <div className="text-center mb-10">
        <p className="text-gray-400">Explore</p>
        <h2 className="text-4xl font-bold text-cyan-500">Featured Projects</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 items-center text-center justify-center">
        {projects.map((proj, idx) => (
          <Project key={idx} project={proj} />
        ))}
      </div>
      
    </div>
  );
}
