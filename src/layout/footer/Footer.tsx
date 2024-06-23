import style from "./footer.module.scss"

const Footer = () => {
    return (
      <div className={style.footer}>
        <p className={style.footer_title}>Questions? Contact us.</p>
        <section className={style.footer_linkBox}>
          <ul className={style.footer_linkBox_ul}>
              <li className={style.footer_linkBox_ul_li}>FAQ</li>
              <li className={style.footer_linkBox_ul_li}>Investor Relations</li>
              <li className={style.footer_linkBox_ul_li}>Privacy</li>
              <li className={style.footer_linkBox_ul_li}>Speed Test</li> 
          </ul>
          <ul className={style.footer_linkBox_ul}>
              <li className={style.footer_linkBox_ul_li}>Help Center</li>
              <li className={style.footer_linkBox_ul_li}>Jobs</li>
              <li className={style.footer_linkBox_ul_li}>Cookie Preferences</li>
              <li className={style.footer_linkBox_ul_li}>Legal Notices</li>
          </ul>
          <ul className={style.footer_linkBox_ul}>
              <li className={style.footer_linkBox_ul_li}>Account</li>
              <li className={style.footer_linkBox_ul_li}>Ways to Watch</li>
              <li className={style.footer_linkBox_ul_li}>Corporate Information</li>
              <li className={style.footer_linkBox_ul_li}>Only on Netflix</li>
              </ul>
          <ul className={style.footer_linkBox_ul}>
              <li className={style.footer_linkBox_ul_li}>Media Center</li>
              <li className={style.footer_linkBox_ul_li}>Terms of Use</li>
              <li className={style.footer_linkBox_ul_li}>Contact Us</li>
          </ul>
        </section>
        <p>@ Netflix Azerbaijan</p>
      </div>
    )
  }
  
  export default Footer
  