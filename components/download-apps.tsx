import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { appsData } from "@/lib/data";
import { Apple } from "lucide-react";

// A simple component for the Google Play icon
const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.4V3.6C3 3.2 3.4 3 3.7 3.2L14.3 12L3.7 20.8C3.4 21 3 20.8 3 20.4Z" />
    <path
      d="M15.6 13.1L18.9 15.3C19.5 15.7 19.5 16.6 18.9 17L16.5 18.4L15.6 13.1Z"
      fillOpacity="0.7"
    />
    <path
      d="M15.6 10.9L16.5 5.6L18.9 7C19.5 7.4 19.5 8.3 18.9 8.7L15.6 10.9Z"
      fillOpacity="0.7"
    />
    <path
      d="M20.9 14.1L19.6 14.8L19.9 12.9C20.1 11.6 19.1 10.5 17.8 10.5H15.4L3.7 2.2C3.1 1.8 2.2 2.2 2.2 3V21C2.2 21.8 3.1 22.2 3.7 21.8L15.4 13.5H17.8C19.1 13.5 20.1 12.4 19.9 11.1L19.6 9.2L20.9 9.9C21.5 10.3 22 11.1 22 12C22 12.9 21.5 13.7 20.9 14.1Z"
      fillOpacity="0.5"
    />
  </svg>
);

export default function DownloadApps() {
  return (
    <section className="bg-white rounded-lg p-6 shadow-md">
      <SectionTitle>Baixe Nossos Apps</SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {appsData.slice(0, 4).map((app) => (
          <div
            key={app.name}
            className="flex items-center gap-4 "
          >
            <Image
              src={app.image}
              alt={`${app.name} icon`}
              width={100}
              height={100}
              className="rounded-2xl flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-bold text-wrap">{app.name}</h3>
              <p className="text-gray-600 mb-3 text-wrap">{app.description}</p>
              <div className="flex gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="flex-1/2 text-[12px] md:text-base rounded-md h-7 px-2 md:h-11 md:px-8"
                >
                  <Link href={app.ios_href} target="_blank">
                    <Apple className="mr-2 h-5 w-5" /> App Store
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1/2  text-[12px] md:text-base rounded-md h-7 px-2 md:h-11 md:px-8"
                >
                  <Link href={app.android_href} target="_blank">
                    <GooglePlayIcon className="mr-2 h-5 w-5" /> Google Play
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
