import React from 'react';
import styles from './avatargamer.module.css';

const AvatarGamer = () => {
  return (
    <section className="py-32 px-6 text-center relative bg-[url('/img/fundo-game.svg')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/60 before:backdrop-blur-sm">
      <div className={styles.avatarWrapper}>
        <img 
          src="img/balao.png" 
          alt="Balão de fala" 
          className={`w-48 md:w-80 ${styles.balao}`} 
        />
        <img 
          src="img/avata_tidi_gamer.png" 
          alt="Avatar do mentor" 
          className={`w-40 md:w-52 ${styles.avatar}`} 
        />
      </div>
    </section>
  );
};

export default AvatarGamer;
