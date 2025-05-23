import languages from "../../data/languages";

export default function CardLanguage() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{languages[0].title}</h5>
          <p className="card-text">{languages[0].description}</p>
        </div>
      </div>
    </div>
  );
}
