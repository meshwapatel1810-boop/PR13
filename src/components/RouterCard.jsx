function RouterCard({ title, description, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
}

export default RouterCard;