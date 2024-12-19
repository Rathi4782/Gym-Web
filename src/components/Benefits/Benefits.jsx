// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Benefits.css';
import phoneImage from '../../assets/phone-image.png'; // Replace with actual path to phone image
import icon1 from '../../assets/icon1.png'; // Replace with the icon images
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';

const WorkoutFeatures = () => {
  const features = [
    {
      id: 1,
      title: 'Effortless Workout Logging',
      description: 'Easily log your workouts and monitor your progress over time with our intuitive logging feature.',
      icon: icon1,
    },
    {
      id: 2,
      title: 'Accurate Rep Counting',
      description: 'Count your reps accurately with our app, ensuring consistency and improved performance.',
      icon: icon2,
    },
    {
      id: 3,
      title: 'Personalized Workout Plans',
      description: 'AI-powered workout plans tailored to your fitness level, goals, and progress.',
      icon: icon3,
    },
    {
      id: 4,
      title: 'Calorie Calculation & Personalized Diet Plans',
      description: 'Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness.',
      icon: icon4,
    },
  ];

  return (
    <>
    <div className="benefits-container">
    <div className="programs-header" style={{gap:'2rem'}}>
        <span className='stroke-text'>Discover</span>
        <span>The FitClub</span>
        <span className='stroke-text'>Benefits</span>
        </div>
    <div className="workout-container">
      <div className="workout-features left">
        {features.slice(0, 2).map((feature) => (
          <div className="feature-card" key={feature.id}>
            <img src={feature.icon} alt="icon" className="feature-icon" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="workout-phone">
        <img src={phoneImage} alt="phone" className="phone-image" />
      </div>

      <div className="workout-features right">
        {features.slice(2).map((feature) => (
          <div className="feature-card" key={feature.id}>
            <img src={feature.icon} alt="icon" className="feature-icon" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default WorkoutFeatures;
