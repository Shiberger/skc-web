import Image from "next/image";
import Ourweb from "@/components/contents/Ourweb";
import HeroService from "@/components/contents/HeroService";
import Student from "@/components/contents/student";
import FAQ from "@/components/contents/FAQ";
import Photo from "@/components/contents/Photo";
import Ads from "@/components/contents/Ads";

export default function Home() {
  return (
    <>
      {/* <Ourweb /> */}
      <Student/>
      <HeroService/>
      <FAQ/>
      <Ads/>
      <Photo/>




    </>
  );
}
