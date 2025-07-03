import type React from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { appsData } from "@/lib/data"
import { Apple } from "lucide-react"

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.4V3.6C3 3.2 3.4 3 3.7 3.2L14.3 12L3.7 20.8C3.4 21 3 20.8 3 20.4Z" />
    <path d="M15.6 13.1L18.9 15.3C19.5 15.7 19.5 16.6 18.9 17L16.5 18.4L15.6 13.1Z" fillOpacity="0.7" />
    <path d="M15.6 10.9L16.5 5.6L18.9 7C19.5 7.4 19.5 8.3 18.9 8.7L15.6 10.9Z" fillOpacity="0.7" />
    <path
      d="M20.9 14.1L19.6 14.8L19.9 12.9C20.1 11.6 19.1 10.5 17.8 10.5H15.4L3.7 2.2C3.1 1.8 2.2 2.2 2.2 3V21C2.2 21.8 3.1 22.2 3.7 21.8L15.4 13.5H17.8C19.1 13.5 20.1 12.4 19.9 11.1L19.6 9.2L20.9 9.9C21.5 10.3 22 11.1 22 12C22 12.9 21.5 13.7 20.9 14.1Z"
      fillOpacity="0.5"
    />
  </svg>
)

export default function AplicacoesPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">Nossos Aplicativos</h1>
          <p className="text-lg text-gray-600 mt-2">Leve a diversão do Cartoon Network para qualquer lugar!</p>
        </div>

        <div className="space-y-12">
          {appsData.map((app) => (
            <Card key={app.name} className="overflow-hidden shadow-lg">
              <CardContent className="p-0 md:flex">
                <div className="md:w-1/3 bg-gray-800 p-8 flex flex-col justify-center items-center text-center text-white">
                  <Image
                    src={app.image}
                    alt={`${app.name} icon`}
                    width={100}
                    height={100}
                    className="rounded-3xl mb-4"
                  />
                  <h2 className="text-2xl font-bold">{app.name}</h2>
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-gray-700 mb-4">{app.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {app.screenshots.map((ss, index) => (
                      <Image
                        key={index}
                        src={`/placeholder.svg?width=200&height=355&query=${encodeURIComponent(ss)}`}
                        alt={`Screenshot ${index + 1} de ${app.name}`}
                        width={150}
                        height={266}
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild variant="default" className="bg-black hover:bg-gray-800">
                      <Link href={app.ios_href}>
                        <Apple className="mr-2 h-5 w-5" /> App Store
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={app.android_href}>
                        <GooglePlayIcon className="mr-2 h-5 w-5" /> Google Play
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
