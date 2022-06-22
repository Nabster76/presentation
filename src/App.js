
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Vous possédez un magasin de Nifty NFT. Commencez à vendre et à grandir"
        description="Achetez, stockez, collectez des NFTS, échangez et gagnez des cryptos. Rejoignez plus de 25 millions de personnes utilisant Naclopop Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Découvrez une interface utilisateur futuriste de Naclopop NFT Marketplace. Couleurs constantes lisses d'une conception d'interface utilisateur fluide."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Déploiement"
        description="Naclopop est construit à l'aide d'Expo qui s'exécute nativement sur les appareils de tous les utilisateurs. Vous pouvez facilement mettre votre application entre les mains des gens"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Façon créative de mettre en valeur le place de marché"
        description="L'application contient deux écrans. Le premier écran répertorie tous les NFT tandis que le second affiche les détails d'un NFT spécifique."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold">Nabil Laaziri</span>
        </p>
      </div>
    </>
  );
}

export default App;
