import React from 'react'
import './Home.css'

const randomColor = () => {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
};

const Home = () => {
  const handleMouseEnter = (e) => {
    e.target.style.color = randomColor();
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = '';
  };

  return (
    <div>
        <style>
        </style>
      <h5 className="typing">
        MORE THAN A WEBSITE
    </h5>
      <h1 className='home-title'>
        Welcome to{' '}
        <span className="highlighted-title">
            Grateful Grains
            <svg width="100%" height="13" viewBox="0 0 100 12" preserveAspectRatio="none">
            <path d="M0,6 Q25,0 50,6 T100,6" fill="transparent" stroke="teal" strokeWidth="2" />
            </svg>
        </span>
        </h1>

      <h2 className='home-subtitle'>
        {/* {["A", "Smarter", "Way", "to", "Save", "Food", "and", "Serve", "Communities."].map((word, idx) => (
          <span
            key={idx}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {word + " "}
          </span>
        ))} */}
        <p>
            A smarter way to{' '}
            <span className="svg-underline green-underline">
                save food
                <svg width="100%" height="13" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,6 Q25,0 50,6 T100,6" fill="transparent" stroke="#4CAF50" strokeWidth="2" />
                </svg>
            </span>{' '}
            and{' '}
            <span className="svg-underline blue-underline">
                serve communities
                <svg width="100%" height="13" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,6 Q25,0 50,6 T100,6" fill="transparent" stroke="#009688" strokeWidth="2" />
                </svg>
            </span>
            </p>
      </h2>
      <div className='home-buttons'>
        <h3 className='home-description'>
            With our smart food-sharing platform, you can connect, share, and reduce waste by redistributing surplus food to those who need it most — creating a sustainable impact, faster and smarter than ever.
        </h3>

        <button className="Serve-button">
            Serve Now
            <span>
                <img src="./src/assets/diet.png" height={25} width={25} alt="Fast forward icon"  style={{
                    padding: '0 12px',
                }}/>
            </span>
        </button>
      </div>
    </div>
  )
}

export default Home
