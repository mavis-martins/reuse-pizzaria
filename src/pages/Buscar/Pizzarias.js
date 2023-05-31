import styles from './pizzarias.module.css';
import { AppStore, BannerHome, GoogleStore } from '../../assets/images';
import SearchBar from '../../components/layout/searchBar';
import Pizzaria from '../../components/layout/Pizzaria';
import PizzaApi from '../../components/layout/PizzariaApi';

function Pizzarias (){
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.banner_Pizzerias} src={BannerHome} alt='Banner Principal'/>
                <div className={styles.banner_Text}>Pegue uma fatia</div>
                <img className={styles.app_Store} src={AppStore} alt="imagem para download no App Store" />
                <img className ={styles.app_Google} src={GoogleStore} alt="imagem para download no Google Store" />

            <div>
                <SearchBar />
                <p className={styles.Cardapio}>NOSSO CARDÁPIO</p>
                <div className={styles.div_Container}>
                <button>Todas </button>
                <button>Brasileiras</button>
                <button>Italianas</button>
                </div>

                <div>
                    <p className={styles.Populares}>POPULARES</p>
                    <PizzaApi />
                </div>
            </div>
            </div>

            
        
        </div>
    )
}

export default Pizzarias;