import style from './mainPage.module.css';
import mainImg from '../../assets/mainPageImg/mainImg.jpg';
import infoCardImg1 from "../../assets/mainPageImg/infoCardImg1.jpg";
import infoCardImg2 from "../../assets/mainPageImg/infoCardImg2.jpg";
import { MdKeyboardArrowRight } from 'react-icons/md';
import MainPageInfoCard from '../../components/mainPageInfoCard/MainPageInfoCard';
import MainPageAccardion from '../../components/mainPageAccardion/MainPageAccardion';
import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div className={style.mainPage}>
            <section className={style.mainPage_head}>
                <img src={mainImg} alt="netflix" className={style.mainPage_head_mainImg} />
                <Header />
                <div className="container">
                    <div className={style.mainPage_head_header_textBox}>
                        <h2 className={style.mainPage_head_header_textBox_headText}>{t('welcomeBack')}</h2>
                        <p className={style.mainPage_head_header_textBox_bigText}>{t('unlimitedMovies')}</p>
                        <p className={style.mainPage_head_header_textBox_title}>{t('watchAnywhere')}</p>
                        <button className={style.mainPage_head_header_textBox_btn}>
                            {t('watchNow')} <MdKeyboardArrowRight />
                        </button>
                    </div>
                </div>
            </section>
            <MainPageInfoCard cardPosition='mainPageInfoCard_container' MainText={t('enjoyOnYourTV')} desc={t('unlimitedMovies')} image={infoCardImg1} />
            <MainPageInfoCard cardPosition='mainPageInfoCard_container-reserve' MainText={t('downloadShows')} desc={t('watchAnywhere')} image={infoCardImg1} />
            <MainPageInfoCard cardPosition='mainPageInfoCard_container' MainText={t('watchEverywhere')} desc={t('unlimitedMovies')} image={infoCardImg1} />
            <MainPageInfoCard cardPosition='mainPageInfoCard_container-reserve' MainText={t('createProfiles')} desc={t('watchAnywhere')} image={infoCardImg2} />
            <MainPageAccardion />
            <div className="container"><Footer /></div>
        </div>
    );
};

export default MainPage;
