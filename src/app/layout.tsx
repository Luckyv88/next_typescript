import Navbar from "@/Component/Navbar";
import Link from "next/link";
import React from "react";

export default function demoLayout({children}:{children:React.ReactNode})
{
   return(
    <html lang="eng"> 
      <body>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
   );

}