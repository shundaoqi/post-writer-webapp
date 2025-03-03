import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

const SiteFooter = () => {
  return (
    <footer>
      <div className="container py-10 md:py-0 md:h-24">
        <p className="text-center text-sm md:text-left">
          Built by {""}
          <Link
            href={siteConfig.links.x}
            className="underline underline-poffset-4 font-medium"
          >
            ShunShimazaki
          </Link>
          . Hosted On {""}
          <Link
            href={"https://Vercel.com"}
            className="underline underline-poffset-4 font-medium"
          >
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
