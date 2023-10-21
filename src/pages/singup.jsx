import Image from "next/image";
import Ourweb from "@/components/contents/Ourweb";
import HeroService from "@/components/contents/HeroService";
import Student from "@/components/contents/student";
import FAQ from "@/components/contents/FAQ";
import Photo from "@/components/contents/Photo";
import Ads from "@/components/contents/Ads";
import Link from "next/link";
import Signup from "@/components/Signup-form";
export default function Home() {
  return (
    <>
    <Link href="/home">
    <button className="btn btn-secondary">Home</button>
    </Link>
    <Signup/>
    

      





    </>
  );
}
