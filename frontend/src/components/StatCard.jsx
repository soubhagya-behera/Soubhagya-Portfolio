function StatCard({ title, value }) {
  return (
    <div className="glass-card rounded-2xl py-4 px-4 text-center transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/40">
      <h3 className="text-3xl font-bold text-cyanGlow">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {title}
      </p>
    </div>
  );
}

export default StatCard;