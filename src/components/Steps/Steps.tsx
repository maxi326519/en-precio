import styles from "./Steps.module.css";

interface Props {
  step: number;
}

export default function Steps({ step }: Props) {
  return (
    <div className={styles.steps}>
      <div className={styles.point}>
        <div className={step === 1 ? styles.active : styles.inactive}>1</div>
        <span>Ubicacion</span>
      </div>
      <div
        className={`${styles.bar} ${
          step === 1 ? styles.active : styles.inactive
        }`}
      ></div>
      <div className={styles.point}>
        <div className={step === 2 ? styles.active : styles.inactive}>2</div>
        <span>Características</span>
      </div>
      <div
        className={`${styles.bar} ${
          step === 2 ? styles.active : styles.inactive
        }`}
      ></div>
      <div className={styles.point}>
        <div className={step === 3 ? styles.active : styles.inactive}>3</div>
        <span>Galería</span>
      </div>
      <div
        className={`${styles.bar} ${
          step === 3 ? styles.active : styles.inactive
        }`}
      ></div>
      <div className={styles.point}>
        <div className={step === 4 ? styles.active : styles.inactive}>4</div>
        <span>Publicar</span>
      </div>
    </div>
  );
}
