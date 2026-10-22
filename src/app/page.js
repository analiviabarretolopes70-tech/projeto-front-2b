import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.titulo}>Meu título</h1>
<<<<<<< HEAD
        <p>Página pricipal</p>

      <Image src='/image.png' alt="IFRO" width={300} height={300} loading="eager"/>
=======
        <p>Página principal</p>
        <Image src='/image.png' alt="IFRO" width={300} height={300} loading="eager" />
>>>>>>> 70735134c49d8b7f461d243ce44a2c6713196d77
      </main>
    </div>
  );
}
