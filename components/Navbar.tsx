"use client";

import Link from "next/link";
import {
Search,
ShoppingBag,
Heart,
User
} from "lucide-react";


export default function Navbar(){

return (

<header className="
sticky top-0 z-50
bg-white/90
backdrop-blur
border-b
">

<div className="
max-w-7xl
mx-auto
px-6
h-20
flex
items-center
justify-between
">


<Link
href="/"
className="
text-2xl
font-bold
text-pink-500
">

Narcos Bay

</Link>


<nav className="
hidden md:flex
gap-8
">

<Link href="/">
Home
</Link>

<Link href="/shop">
Shop
</Link>

<Link href="/collections">
Collections
</Link>

<Link href="/contact">
Contact
</Link>


</nav>


<div className="
flex
gap-5
">

<Search size={20}/>

<Heart size={20}/>

<ShoppingBag size={20}/>

<User size={20}/>

</div>


</div>

</header>

);

}
