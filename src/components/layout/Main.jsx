import { useState } from "react";
import LanguagesBtnList from "../languages/LanguagesBtnList";
import CardLanguage from "../languages/CardLanguage";

export default function Main() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <main>
      <LanguagesBtnList onSelectLanguage={setSelectedLanguage} />

      {selectedLanguage ? (
        <CardLanguage language={selectedLanguage} />
      ) : (
        <div className="container">
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title fs-1 fw-bold">
                nessun linguaggio selezionato
              </h5>
              <p className="card-text">seleziona un linguaggio</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
