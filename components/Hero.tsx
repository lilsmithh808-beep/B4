"use client";

import {motion} from "framer-motion";


export default function Hero(){

return (

<section className="
max-w-7xl
mx-auto
px-6
py-20
">


<div className="
grid
lg:grid-cols-2
gap-12
items-center
">


<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

>


<h1 className="
text-5xl
md:text-7xl
font-bold
leading-tight
">


Shop

<span className="
text-pink-500
">

 beautifully

</span>


</h1>


<p className="
mt-6
text-gray-500
text-lg
">

A premium shopping experience
designed for modern customers.

</p>


<button className="
mt-8
bg-pink-500
text-white
px-8
py-4
rounded-full
">

Explore Store

</button>


</motion.div>



<div className="
h-[500px]
rounded-[32px]
bg-pink-100
flex
items-center
justify-center
">

<span className="
text-pink-500
font-bold
text-3xl
">

Narcos Bay

</span>


</div>


</div>


</section>

);

}
