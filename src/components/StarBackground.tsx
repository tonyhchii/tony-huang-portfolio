import { useEffect, useState } from "react";

export const StarBackground = () => {
  type Star = {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
  };

  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    generateStars();
  }, []);
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.7,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animation: star.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
