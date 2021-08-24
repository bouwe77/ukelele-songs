import Ukelele from "react-ukelele";
import styles from "./Chord.module.css";

export function Chord({ chord }) {
  return (
    <div className={styles.chord}>
      <div>
        <Ukelele width={200} height={200} chord={chord} />
      </div>
      <div className={styles["chord-name"]}>
        <h3>{chord}</h3>
      </div>
    </div>
  );
}
