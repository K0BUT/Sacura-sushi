import React from "react";
import sushiImage from "../../assets/sushi.jpg";
import Logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="лого" />
          <h1>САКУРА</h1>
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="Блюда японской кухни" />
      </div>
    </React.Fragment>
  );
};

export default Header;
