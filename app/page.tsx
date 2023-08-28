import HomeContainer from "@/container/home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeContainer />
    </main>
  );
}
