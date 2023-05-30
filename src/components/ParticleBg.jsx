import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from 'react';

function ParticleBg({children}) {

  const particlesInit = useCallback( (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    loadFull(engine);
  }, []);

  /* const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []); */

  return (
    <Particles
      init={particlesInit}
      /* loaded={particlesLoaded} */
      options={{
        background: {
          color: "",
          size: "contain",
          repeat: "no-repeat",
        },
        fullScreen: {
          enable: false,
          zIndex: -10,
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
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            grab: {
              distance: 200,
            },
          },
        },
        particles: {
          color: {
            value: "#C00B62",
          },
          links: {
            color: "#C00B62",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticleBg;