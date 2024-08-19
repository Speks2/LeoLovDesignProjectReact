import style from"../LeoNavbar/LeoNavbar.module.scss"
<link href="https://fonts.googleapis.com/css2?family=Gilda+Display&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>



function LeoNavbar() {

    return (
     
        <div  className={style.LeoNavbar}>
        <ul>
            <li><a href="#">Hjem |</a></li>
            <li><a href="#">Advokaterne | </a></li>
            <li><a href="#">Om LeoLov |</a></li>
            <li><a href="#">Kontakt</a></li>
        </ul>
        <h2>Leo-Lov</h2>
        <link href="https://fonts.googleapis.com/css2?family=Gilda+Display&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jura:wght@300..700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet1"></link>
        </div>
    )
  }
  
  export default LeoNavbar
  