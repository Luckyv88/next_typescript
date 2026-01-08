import Navbar from "@/Component/Navbar";
import "./globals.css";
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