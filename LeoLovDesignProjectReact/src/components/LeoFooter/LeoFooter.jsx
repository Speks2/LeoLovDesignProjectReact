import style from "../LeoFooter/LeoFooter.module.scss"



function LeoFooter() {

    return (
      <>
        <footer className={style.LeoFooter}>
            <div>
                <h3>Adresse</h3> 
                <p>
                Find os her: 

                Maldive rd. 22,
                Seychelle Islands
                </p>
            </div>
            <div>
                <h3>Kontakt</h3>
                <p>
                Kontakt os her:

                email@mail.dk
                Tlf: 0192 3023
                </p>
            </div>
            <div>
                <h3>Politik</h3>
                <p>
                Vores politikker:

                Privatlivspolitk
                Cookiepolitik
                Generalle betingelse 
                </p>
            </div>
              <div>
                <h3>Soldiale medier</h3>
                <img src="\src\assets\images\Vector-1.png" alt="Facebook"/>
                <img src="\src\assets\images\Vector.png" alt="Instagram" />
              </div>
        </footer>
      </>
    )
  }
  
  export default LeoFooter
  