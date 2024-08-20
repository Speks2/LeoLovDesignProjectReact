import style from "../LeoHeader/LeoHeader.module.scss"



function LeoHeader() {

    return (
      <>
        <header  className={style.LeoHeader}>
          <div>
            <h1><div>Leo</div>-Lov</h1>
          <h2>Lov og ret kan være et plaster! Hvis du ellers har knaster!</h2>
          </div> 
          <img src="src/assets/images/nastuh-abootalebi-eHD8Y1Znfpk-unsplash (1).jpg" alt="headerImage"/>
          <div>
          {/* CARDS */}
          <div className={style.CardContainer}>
          <div className={style.Card1}><h3>Familieret</h3>
           <p>
           Familieret er en ret alle har. Har du en familie har du sikkert ret til familieret. Medmindre du altid er den der tror du har ret. Så kan vi desværre ikke hjælpe dig.
           </p>
          </div>
          <div className={style.Card2}><h3>Ejendomsret</h3>
          <p>Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der solgte dig det.</p>
          </div>
          <div className={style.Card3}><h3>Konkurs</h3>
           <p>
           Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi desværre ikke. Vi er alle advokater med fede biler her så har du ingen penge får du ingen hjælp
           </p>
          </div>
          <div className={style.Card4}><h3>Selskabsret</h3>
          <p>Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab? Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette så henvend dig i dag.
          </p>
           </div>
          </div>
          </div>
        </header>
      
      </>
    )
  }
  
  export default LeoHeader
  