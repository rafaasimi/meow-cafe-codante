import styles from './hero.module.scss';
import heroImg from '../../assets/image-hero-desktop.png';

export default function Hero() {
  return (
    <main className={`container ${styles.mainContainer}`}>
      <div className={styles.info}>
        <span>Sabor inesquecível</span>
        <h1>Meow Café</h1>
        <p>
          Um lugar perfeito para pais de pets e amantes de café. Nossa cafeteria
          tem um espaço confortável para você e seu melhor amigo.
        </p>
      </div>

      <div className={styles.heroImage}>
        <img src={heroImg} alt="" />
      </div>
    </main>
  );
}
