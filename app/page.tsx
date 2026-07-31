import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";


export default function Home(){


return (

<>

<Navbar/>


<main>

<Hero/>


<section className="
py-20
px-6
bg-gray-50
">


<div className="
max-w-7xl
mx-auto
">


<h2 className="
text-3xl
font-bold
">

Featured Products

</h2>


<p className="
mt-3
text-gray-500
">

Products will connect to Supabase soon.

</p>


</div>


</section>


</main>


<Footer/>

<MobileNav/>


</>

);

}
