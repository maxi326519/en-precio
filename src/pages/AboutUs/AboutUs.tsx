import Navbar from "../../components/Navbar/Navbar";

import styles from "./AboutUs.module.css";
import homeWave from "../../assets/svg/home-wave.svg";
import Footer from "../../components/Footer/Footer";

export default function AboutUs() {
  return (
    <div className={styles.about}>
      <Navbar opaque={true} />
      <div className={styles.content}>
        <h2>Sobre nosotros</h2>
        <p>
          ¿Estás cansado de buscar propiedades y encontrarte con precios que
          simplemente no cuadran? ¡Entonces has llegado al lugar adecuado!
          Bienvenido a ENPRECIO.COM.AR, donde te ofrecemos una solución simple y
          efectiva: ¡solo encontrarás propiedades en valor de mercado aquí!
        </p>
        <p>
          Sabemos lo frustrante que puede ser navegar por un mar de anuncios
          inflados y precios poco realistas. Es por eso que hemos creado
          ENPRECIO.COM.AR, un refugio para aquellos que buscan una alternativa
          confiable y transparente en el mundo inmobiliario.
        </p>
        <p>
          ¿Qué nos hace diferentes? No solo te prometemos propiedades a precios
          justos, ¡te mostramos la evidencia! Nuestra base de datos está
          respaldada por valores de cierre de operaciones y lo que el mercado
          está realmente pagando. Así que puedes dejar atrás la incertidumbre y
          la decepción, y comenzar a buscar tu próxima propiedad con confianza.
        </p>
        <p>
          Desde tu primer departamento hasta la casa de tus sueños, estamos aquí
          para ayudarte a encontrar exactamente lo que necesitas al precio
          adecuado. Deja de perder tiempo y energía en propiedades fuera de tu
          alcance, y únete a la comunidad de ENPRECIO.COM.AR, donde la
          transparencia y la honestidad son nuestro compromiso principal.
        </p>
        <p>
          Estamos aquí para simplificar tu búsqueda y hacerte sentir seguro en
          cada paso del camino. ¡Así que adelante, descubre lo que somos y
          encuentra tu próximo hogar con nosotros!
        </p>
      </div>
      <img className={styles.wave} src={homeWave} alt="wave" />
      <Footer blue={true} />
    </div>
  );
}
