import { useState } from "react";
import style from "./mainPageAccardion.module.scss";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
 
const MainPageAccardion = () => {
  const {t}=useTranslation()
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const navigate=useNavigate()

  const toggleOpenAcc = (index:number) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const accData = [
    {
      id: 1,
      title: t('whatIsNetflix'),
      content:t('whatIsNetflixDesc')},
    {
      id: 2,
      title: t('howMuchDoesNetflixCost'),
      content:t('howMuchDoesNetflixCostDesc')},
    {
      id: 3,
      title: t('whereCanIWatch'),
      content:t('whereCanIWatchDesc')},
    {
      id: 4,
      title: t('howDoICancel'),
      content:t('howDoICancelDesc')},
    {
      id: 5,
      title: t('whatCanIWatchOnNetflix'),
      content:t('whatCanIWatchOnNetflixDesc')},
    {
      id: 6,
      title: t('isNetflixGoodForKids'),
      content:t('whyAmISeeingThisLanguage')},
    {
      id: 7,
      title: t('whyAmISeeingThisLanguage'),
      content:t('whyAmISeeingThisLanguageDesc')},
  ];

  return (
    <div className={style.MainPageAccardion}>
        <div className="container">
        <h2 className={style.MainPageAccardion_title}>{t('frequentlyAskedQuestions')}</h2>
        <div className={style.MainPageAccardion_card_container}>
            {accData.map((item, index) => (
            <div className={style.MainPageAccardion_card} key={item.id}>
                <div
                className={style.MainPageAccardion_card_box}
                onClick={() => toggleOpenAcc(index)}
                >
                <h3 className={style.MainPageAccardion_card_title}>{item.title}</h3>
                {openIndexes.includes(index) ? (
                    <FaMinus className={style.MainPageAccardion_card_box_icon} />
                ) : (
                    <FaPlus className={style.MainPageAccardion_card_box_icon} />
                )}
                </div>
                {openIndexes.includes(index) && (
                <p className={style.MainPageAccardion_card_desc}>{item.content}</p>
                )}
            </div>
            ))}
        <button className={style.MainPageAccardion_btn}  onClick={()=>navigate('/productPage')}>Watch Now <MdKeyboardArrowRight/></button>
        </div>
        </div>
    </div>
  );
};

export default MainPageAccardion;
