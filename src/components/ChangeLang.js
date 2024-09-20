import React, { useState, useEffect } from 'react';
import i18n from '../i18n';
import flagLao from '../assets/img/laos-flag.png'; // Import Lao flag
import flagEng from '../assets/img/us-flag.png'; // Import English flag

export default function ChangeLang() {
  const languageList = [
    {
      key: 'la',
      name: 'Lao',
      flag: flagLao,
    },
    {
      key: 'en',
      name: 'Eng',
      flag: flagEng,
    },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languageList[0]); // Set initial language

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage.key); // Change language when selectedLanguage changes
  }, [selectedLanguage]);

  const handleChangeLanguage = (lang) => {
    setSelectedLanguage(lang); // Update selected language
  };

  return (
    <div>
      {languageList.map((lang) => (
        <button key={lang.key} onClick={() => handleChangeLanguage(lang)}>
          <img src={lang.flag} alt={lang.name} style={{ marginRight: 5 }} />
          {lang.name}
        </button>
      ))}
    </div>
  );
}
