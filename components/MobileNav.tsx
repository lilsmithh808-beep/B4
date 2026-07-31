import {
Home,
ShoppingBag,
Heart,
User
} from "lucide-react";


export default function MobileNav(){

return (

<nav className="
fixed
bottom-0
left-0
right-0
bg-white
border-t
md:hidden
h-16
flex
items-center
justify-around
">


<Home/>

<ShoppingBag/>

<Heart/>

<User/>


</nav>

);

}
