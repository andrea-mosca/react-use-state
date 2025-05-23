export default function CardLanguage({ language }) {
  if (!language) return null;

  return (
    <div className="container">
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title fs-1 fw-bold">{language.title}</h5>
          <p className="card-text">{language.description}</p>
        </div>
      </div>
    </div>
  );
}
