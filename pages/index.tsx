import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import HeroMap from "@/components/Map";
import FieldInfo from "@/components/FieldInfo";

export default function Home() {
  return (
    <>
      <TopBar title="Dreamerz Lab"></TopBar>
      <NavBar></NavBar>
      <main>
        <HeroMap></HeroMap>
        <FieldInfo title="Selected Field Information" />
      </main>
    </>
  );
}
