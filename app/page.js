import Image from "next/image";
import styles from "./page.module.css";
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <main>
      <NavBar />
      <section id="home">
        <h1>Welcome to my Portfolio</h1>
        <p>This is a fresh Next.js template with the NavBar component.</p>
      </section>
    </main>
  );
}
