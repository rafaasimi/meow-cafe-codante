import styles from './header.module.scss';

import logoImg from '../../assets/logo.png';

export default function Header() {
  return (
    <header className={`container ${styles.headerContainer}`}>
      <div className={styles.logo}>
        <img src={logoImg} alt="Meow Café" />
        <span>Meow Café</span>
      </div>

      <div className={styles.nav}>
        <menu>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
        </menu>
      </div>

      <div className={styles.actions}>
        <button>Login</button>
        <a href="#">Delivery</a>
      </div>
    </header>
  );
}
