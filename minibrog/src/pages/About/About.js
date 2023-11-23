import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h2>About <span>Mini Blog</span> </h2>
      <p>Este Projeto Bem-vindo ao Miniblog, um espaço dedicado ao compartilhamento de conhecimento, criações e projetos inspiradores! Aqui, acreditamos que cada jornada de aprendizado e cada experiência única merecem ser celebradas e compartilhadas.

        Nosso Miniblog foi concebido com a visão de criar uma comunidade vibrante, onde entusiastas, criativos e curiosos podem se reunir para explorar uma variedade de tópicos. Desde estudos acadêmicos até experimentos criativos, passando por projetos inovadores, nosso objetivo é fornecer um ambiente acolhedor para que você possa contar suas histórias, insights e descobertas.

        Queremos ser o ponto de encontro para mentes curiosas que buscam inspiração e desejam compartilhar suas próprias jornadas. Seja você um estudante apaixonado, um desenvolvedor talentoso, um artista visionário ou alguém com uma paixão única, o Miniblog está aberto para você expressar suas ideias, aprendizados e conquistas.

        Junte-se a nós enquanto exploramos, aprendemos e celebramos as incríveis façanhas que a comunidade Miniblog tem a oferecer. Estamos ansiosos para conhecer você e descobrir as histórias fascinantes que tornam cada um de nós único. Bem-vindo ao Miniblog, onde o conhecimento se encontra com a criatividade, e as experiências são compartilhadas para inspirar. em um blog feito com ReactJS no front-end e Firebase no back-end</p>
      <Link to="/posts/create" className={styles.botao}>Criar Post </Link>
    </div>
  );
}

export default About;
