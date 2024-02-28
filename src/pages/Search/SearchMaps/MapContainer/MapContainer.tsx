import styles from "./MapContainer.module.css";

const MapContainer = () => {
  return (
    <div className={styles.container}>
      <iframe
        title="google_maps"
        className={styles.map}
        src={`https://www.google.com/maps/embed/v1/search?q=España&key=AIzaSyBMdN9W3YXq9zRIR76zO7r5VlHUaLsHKgE`}
      ></iframe>
    </div>
  );
};
export default MapContainer;
