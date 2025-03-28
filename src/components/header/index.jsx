import enZnak from "../../svg/en.svg";
import uaZnak from "../../svg/ua.svg";
import dolarZnak from "../../svg/dolar.svg";
import Button from "../../components/button";
import { useEffect, useState } from "react";
import "./style.scss";

const Header = () => {
  const [currency, setCurrency] = useState(
    localStorage.getItem("currency") || "usd"
  );
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const currencies = [
    { value: "usd", label: "USD", icon: dolarZnak },
    { value: "uah", label: "UAH", icon: dolarZnak },
    { value: "eur", label: "EUR", icon: dolarZnak },
  ];

  const languages = [
    { value: "en", label: "EN", icon: enZnak },
    { value: "ua", label: "UA", icon: uaZnak },
  ];

  return (
    <header className="header">
      <button text="empty" className="btn-header btn-header__logo"></button>

      <div className="btn_contain__head flex gap-2">
        <div
          className={`dropdown-container ${currencyOpen ? "open" : ""}`}
          onClick={() => setCurrencyOpen(!currencyOpen)}
        >
          <button className="btn-header ">
            <img
              src={currencies.find((cur) => cur.value === currency)?.icon}
              alt={currency}
            />
            {currency.toUpperCase()}
          </button>
          <div className="absolute">
            {currencies.map((option) => (
              <div
                key={option.value}
                onClick={() => setCurrency(option.value)}
                className="flex"
              >
                <img src={option.icon} alt={option.label} />
                {option.label}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`dropdown-container ${languageOpen ? "open" : ""}`}
          onClick={() => setLanguageOpen(!languageOpen)}
        >
          <button className="btn-header flex items-center">
            <img
              src={languages.find((lang) => lang.value === language)?.icon}
              alt={language}
            />
            {language.toUpperCase()}
          </button>
          <div className="absolute">
            {languages.map((option) => (
              <div
                key={option.value}
                onClick={() => setLanguage(option.value)}
                className="flex items-center"
              >
                <img src={option.icon} alt={option.label} className="w-5 h-5" />
                {option.label}
              </div>
            ))}
          </div>
        </div>
        <button className="btn-header">
          <img src={enZnak} alt="EN" />
        </button>
      </div>
    </header>
  );
};

export default Header;
