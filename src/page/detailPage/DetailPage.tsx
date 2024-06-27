import { useNavigate } from 'react-router-dom';
import Header from '../../layout/header/Header'
import style from "./detailPage.module.css"
import { MdKeyboardArrowLeft } from "react-icons/md";


const DetailPage = () => {  

  return (
    <div>
      <Header/>
      <div className={style.detailPage_film}>
        <p className={style.detailPage_film_goBack}><MdKeyboardArrowLeft/>Go Back</p>
      <img src="https://www.hdfilmcehennemi.sh/uploads/poster/furiosa-a-mad-max-saga_list.jpg" alt="" className={style.detailPage_film_mainVideo}/>
      <div className={style.detailPage_film_detail}>
        <h2 className={style.detailPage_film_detail_title}>Lorem ipsum dolor sit - Movie Information</h2>
        <div className={style.detailPage_film_detail_card}>
          <img src="https://www.hdfilmcehennemi.sh/uploads/poster/furiosa-a-mad-max-saga_list.jpg" alt="" className={style.detailPage_film_detail_card_img}/>
          <div className={style.detailPage_film_detail_card_text}>
            <p className={style.detailPage_film_detail_card_desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At inventore aspernatur temporibus quibusdam quo. Maxime, ex? Eos voluptates vitae at cum. Rerum eum error corporis nesciunt mollitia quasi ea explicabo?</p>
            <p className={style.detailPage_film_detail_card_title_box}><span className={style.detailPage_film_detail_card_title_box_title}>Title</span>: Title</p>
            <p className={style.detailPage_film_detail_card_category_box}><span className={style.detailPage_film_detail_card_category_box_category}>Category</span>: Category</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DetailPage
