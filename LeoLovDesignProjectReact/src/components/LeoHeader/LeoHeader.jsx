import style from "../LeoHeader/LeoHeader.module.scss"



function LeoHeader() {

    return (
      <>
        <header  className={style.LeoHeader}>
          <h1><div>Leo</div>-Lov</h1>
          <h2>Lov og ret kan være et plaster! Hvis du ellers har knaster!</h2>
          <img src="src/assets/images/nastuh-abootalebi-eHD8Y1Znfpk-unsplash (1).jpg" alt="headerImage"/>
        </header>
      </>
    )
  }
  
  export default LeoHeader
  