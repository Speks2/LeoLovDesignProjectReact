import style from "./LeoBody.module.scss"



function LeoBody() {

    return (
        <div className={style.LeoBody}>
              {/* INTET PROBLEMER */}
            <div className={style.Intet}>
            <img src="\src\assets\images\brock-wegner-o4jSaomEvJk-unsplash (1).jpg" alt="Money" />
                <div>
                <h2>INTET PROBLEMER</h2>
                <p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.
                 Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
                </div>
                
            </div>
             {/* EVIG GARANTI  */}
            <div className={style.Garanti}>
            
                <div>
                    <h2>EVIG GARANTI</h2>
                <p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.


                 Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
                </div>
                <img src="\src\assets\images\armando-arauz-v_BWg0OnFmk-unsplash (1).jpg" alt="City" />
            </div>

              {/* MØD HOLDET */}
              <div className={style.Holdet}>
                <h2>MØD HOLDET</h2>
                <img src="\src\assets\images\Ellipse 1.png" alt="pic1"/>
                <p>John Harbinger ”Jeg er den mest successfulde advokat i firmaet. I hvert fald mere end Peter.”</p>
                <img src="\src\assets\images\Ellipse 2.png" alt="pic2" />
                <p> Peter Parker “Jeg holder af kaffe og så er jeg helt enormt succesfuld. Meget mere end John”</p>
                <img src="\src\assets\images\Ellipse 3.png" alt="pic3" />
                <p>Elise Li “Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg altid sagt.”</p>
                <img src="\src\assets\images\Ellipse 4.png" alt="pic4" />
                <p>Morten Nate “Jeg er født på landet. På landet er der ingen ret og lov. Det er det vilde vest derude.”</p>
            </div>  
            
            {/* HER BOR VI */}
            <div className={style.BorVi}>
            <img src="src\assets\images\leolov-location.PNG" alt="map" />
                <div>
                <h2>HER BOR VI</h2>
                <p>Vi har valgt at bosætte os i solen! 

                   Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi rigtig meget. 

                   “Hvis du har råd til at tage til Sechellerne har du råd til os”. Det er et af vores utallige motto´er.
                </p>
                <p>Leo-Lov ApS 
                   Maldive rd. 22 
                   Seychelles</p>
                </div>
                
            </div>
           
        </div>
    )
  }
  
  export default LeoBody
  