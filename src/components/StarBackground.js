import React, { useRef, useEffect } from "react";

const STAR_COUNT = 100;
const STAR_COLOR = "#fff";
const STAR_SIZE = 1.5;
const STAR_SPEED = 0.2;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createStars(width, height) {
  return Array.from({ length: STAR_COUNT }).map(() => ({
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    radius: randomBetween(0.5, STAR_SIZE),
    speed: randomBetween(0.05, STAR_SPEED),
  }));
}

export default function StarBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let stars = createStars(width, height);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#18181b";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = STAR_COLOR;
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();

        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = randomBetween(0, width);
        }
      });

      animationRef.current = requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars = createStars(width, height);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100vw",
        height: "100vh",
        display: "block",
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
}