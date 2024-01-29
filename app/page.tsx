import Image from "next/image";
import Header from "./header";
import Servis from "./servis";
import Card from "./card";
import Footer from "./footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Servis />
      <Card />
      <Footer />
    </div>
  );
}
