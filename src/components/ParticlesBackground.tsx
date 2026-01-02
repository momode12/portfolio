import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

interface ParticlesBackgroundProps {
  darkMode: boolean;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ darkMode }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // Particles loaded
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="fixed inset-0 z-0 pointer-events-none"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.8,
            },
            bubble: {
              distance: 250,
              size: 10,
              duration: 2,
              opacity: 0.9,
            },
          },
        },
        particles: {
          color: {
            value: darkMode 
              ? ["#ffffff", "#22c55e", "#10b981", "#34d399"] 
              : ["#1f2937", "#166534", "#15803d", "#22c55e"],
          },
          links: {
            enable: false, // Pas de lignes, effet plus spatial
          },
          move: {
            enable: true,
            speed: { min: 0.5, max: 1.5 },
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 150,
          },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            animation: {
              enable: true,
              speed: 0.8,
              sync: false,
              startValue: "random",
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 3,
              sync: false,
            },
          },
          // Effet d'étoiles scintillantes
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
              color: {
                value: darkMode ? "#ffffff" : "#22c55e",
              },
            },
          },
          // Orbites subtiles
          orbit: {
            enable: true,
            opacity: 0.3,
            radius: 15,
            width: 1,
            animation: {
              enable: true,
              speed: 2,
            },
          },
        },
        detectRetina: true,
        smooth: true,
        // Effet de profondeur avec plusieurs couches
        emitters: {
          direction: "none",
          life: {
            count: 0,
            duration: 0.1,
            delay: 0.1,
          },
          rate: {
            delay: 0.15,
            quantity: 1,
          },
          size: {
            width: 0,
            height: 0,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;