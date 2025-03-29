import Image from "next/image";
import styles from "./page.module.css";
import NavBar from './components/navbar';

export default function Home() {
  return (
    <main className="pt-16">
      <NavBar />
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl">I'm a passionate developer creating amazing web experiences</p>
        </div>
      </section>
    </main>
  );
}
