import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        <Link className="fs-1 text-white" href="/iddia/futbol/editor-yorumlari/comments">
          Go to Editorler
        </Link>
      </div>
    </main>
  );
}
