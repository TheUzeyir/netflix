import style from "./header.module.scss";
import { useTranslation } from 'react-i18next';
import { ChangeEvent } from 'react';

const Header = () => {
  const { t,i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <div className={style.header}>
      <div className={style.mainPage_head_header}>
        <p className={style.mainPage_head_logoImg}>NETFLIX</p>
        <div className={style.mainPage_head_header_btn}>
          <select
            name="language"
            id="language-select"
            className={style.mainPage_head_header_btn_selectBox}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="tr">Turkish</option>
          </select>
          <button className={style.mainPage_head_header_btn_signOut}>{t('signIn')}</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
