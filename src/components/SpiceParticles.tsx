const SpiceParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${15 + Math.random() * 10}s`,
    size: `${4 + Math.random() * 8}px`,
    opacity: 0.1 + Math.random() * 0.3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
            backgroundColor: `hsl(${Math.random() * 60 + 15}, ${70 + Math.random() * 20}%, ${45 + Math.random() * 20}%)`,
            animationDelay: particle.animationDelay,
            animationDuration: particle.animationDuration,
            opacity: particle.opacity,
            bottom: '-10px',
          }}
        />
      ))}
    </div>
  );
};

export default SpiceParticles;
