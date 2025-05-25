import languages from "../../data/languages";

export default function LanguagesBtnList({
  onSelectLanguage,
  selectedLanguage,
}) {
  return (
    <div className="container py-5">
      <ul className="d-flex gap-2 flex-wrap">
        {languages.map((language) => (
          <li key={language.id}>
            <button
              type="button"
              className={`btn ${
                selectedLanguage?.id === language.id
                  ? "btn-warning"
                  : "btn-primary"
              }`}
              onClick={() => {
                onSelectLanguage(language);
              }}
            >
              {language.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
