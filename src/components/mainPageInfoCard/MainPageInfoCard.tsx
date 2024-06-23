import style from "./mainPageInfoCard.module.css"
import React from "react";

interface MyComponent{
  MainText:string;
  desc:string;
  image:string;
  cardPosition:string;
}

const MainPageInfoCard:React.FC<MyComponent> = ({MainText,desc,image,cardPosition}) => {
  return (
    <div className={style.mainPageInfoCard}>
      <div className="container">
    <div className={`${style.mainPageInfoCard_container} ${style[cardPosition]}`}>
        <div className={style.mainPageInfoCard_textBox}>
          <h2 className={style.mainPageInfoCard_textBox_title}>{MainText}</h2> 
          <p className={style.mainPageInfoCard_textBox_desc}>{desc}</p>
        </div>
        <img src={image} alt="" className={style.mainPageInfoCard_img}/>
      </div>
    </div>
    </div>
  )
}

export default MainPageInfoCard
