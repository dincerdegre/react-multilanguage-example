import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const {t,i18n} = useTranslation();
  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {t('welcome_title')}
        </p>

      </header>
    </div>
  );
}

export default App;
