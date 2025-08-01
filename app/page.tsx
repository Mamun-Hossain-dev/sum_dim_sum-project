import Banner from "@/components/banner/Banner";
import OurStory from "@/components/ourStory/OurStory";
import Tradition from "@/components/tradition/Tradition";
import CallToActionBanner from "@/components/CallToActionBanner";
import TalkOfTheTown from "@/components/TalkOfTheTown";

export default function Home() {
  return (
    <main>
      <Banner />
      <OurStory />
      <Tradition />
      <CallToActionBanner />
      <TalkOfTheTown />
    </main>
  );
}
