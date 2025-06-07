// src/components/Particles.jsx
import { useEffect, useState } from "react";

const createParticleStyle = () => ({
  "--size": `${Math.random() * 1 + 1}px`, // ⬅️ size reduced to 1–3px
  "--top": `${Math.random() * 100}%`,
  "--left": `${Math.random() * 100}%`,
  "--blur": `${Math.random() * 8 + 4}px`, // stronger blur for shine
  "--spread": `${Math.random() * 2}px`,
  "--duration": `${Math.random() * 2 + 1.5}s`,
  "--delay": `${Math.random() * 2}s`,
  "--iteration": "infinite",
  "--opacity": `${Math.random() * 0.6 + 0.4}`, // make them more visible
});


const Particles = ({ count = 30 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, () => createParticleStyle());
    setParticles(generated);
  }, [count]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {particles.map((style, index) => (
       <div
  key={index}
  className="absolute rounded-full animate-sparkle"
  style={{
    top: style["--top"],
    left: style["--left"],
    width: style["--size"],
    height: style["--size"],
    animationDuration: style["--duration"],
    animationDelay: style["--delay"],
    animationIterationCount: style["--iteration"],
    boxShadow: `0 0 ${style["--blur"]} ${style["--spread"]} rgba(255, 255, 255, 0.9)`, // brighter white glow
    backgroundColor: "rgba(255, 255, 255, 0.8)", // white core
    opacity: 0,
    "--opacity": style["--opacity"],
  }}
/>

      ))}
    </div>
  );
};

export default Particles;
