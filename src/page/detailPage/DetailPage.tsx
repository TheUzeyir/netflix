import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../layout/header/Header'
import style from "./detailPage.module.css"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useEffect,useState} from 'react';
import data from "../../data.json";

interface DataItem {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
}

const DetailPage:React.FC= () => {  
  const [product, setProduct] = useState<DataItem | null>(null);
  const navigate=useNavigate()
  const {id}=useParams<{id:string}>()
  const productId = parseInt(id ?? '', 10);

  useEffect(() => {
    const getProduct = () => {
      const productData = data.find(item => item.id === productId);
      setProduct(productData ?? null);
    };
    getProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header/>
      <div className={style.detailPage_film}>
        <p className={style.detailPage_film_goBack} onClick={() => navigate(-1)}>
          <MdKeyboardArrowLeft /> Go Back
        </p>
      <img src={product.thumbnail} alt={product.title} className={style.detailPage_film_mainVideo}/>
      <div className={style.detailPage_film_detail}>
        <h2 className={style.detailPage_film_detail_title}>{product.title} - Movie Information</h2>
        <div className={style.detailPage_film_detail_card}>
          <img src={product.thumbnail} alt={product.title} className={style.detailPage_film_detail_card_img}/>
          <div className={style.detailPage_film_detail_card_text}>
            <p className={style.detailPage_film_detail_card_desc}>{product.description}</p>
            <p className={style.detailPage_film_detail_card_title_box}><span className={style.detailPage_film_detail_card_title_box_title}>Title</span>: {product.title}</p>
            <p className={style.detailPage_film_detail_card_category_box}><span className={style.detailPage_film_detail_card_category_box_category}>Category</span>: {product.category}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DetailPage