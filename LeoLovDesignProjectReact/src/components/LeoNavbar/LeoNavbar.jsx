import style from"../LeoNavbar/LeoNavbar.module.scss"


function LeoNavbar() {

    return (
     
        <div  className={style.LeoNavbar}>
        <ul>
            <li><a href="#">Hjem |</a></li>
            <li><a href="#">Advokaterne | </a></li>
            <li><a href="#">Om LeoLov |</a></li>
            <li><a href="#">Kontakt</a></li>
        </ul>
        <h2><div>Leo</div>-Lov</h2>
        </div>
    )
  }
  
  export default LeoNavbar
  