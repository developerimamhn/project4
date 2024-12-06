import Image from "next/image";
import Header from "./Header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <div className="">
      <header className="">
        <Header/>
      </header>
      <main className="">
        <Body/>
      </main>
      <footer className="">
        <Footer/>
      </footer>
    </div>
  );
}
