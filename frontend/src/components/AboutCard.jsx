function AboutCard({ title, children }) {
  return (
    <div className="glass-card rounded-3xl p-5 sm:p-7 transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/40">
      <h3 className="mb-5 text-xl font-bold">
        {title}
      </h3>

      {children}
    </div>
  );
}

export default AboutCard;