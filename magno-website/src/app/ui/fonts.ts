import {Inter} from 'next/font/google'
import {Open_Sans} from "next/font/google";

export const inter = Inter ({weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ['latin']})
export const openSans = Open_Sans ({weight: ["300", "400", "500", "600", "700", "800"], subsets: ['latin']})
/* Para usar en algún lado

* import {inter} from "@/app/ui/fonts";
* import {openSans} from "@/app/ui/fonts";

* `${inter.className}`
*/