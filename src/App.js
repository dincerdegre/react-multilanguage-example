import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';
import './App.css';

function App() {
  const {t,i18n} = useTranslation();
  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <LanguageSelector onChangeLanguage={changeLanguageHandler} defaultLanguageValue={i18n.language} />
        <p>
          {t('welcome_title')}
        </p>

      </header>
    </div>
  );
}

export default App;
