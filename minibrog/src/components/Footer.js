// Formato de Uso de CSS para evitar vazar a outras páginas
import styles from './Footer.module.css'; // Alteração aqui para importar 'styles' em vez de 'style'
const Footer = () => {
 return (
   <footer className={styles.footer}> {/* Alteração aqui para usar 'styles.footer' */}
     <h3> Mini blog feito por: André Demetrio Matricula: 202104333481.</h3>
     <p> Mini Blog &copy; 2023</p>
   </footer>
 );
};
export default Footer;
