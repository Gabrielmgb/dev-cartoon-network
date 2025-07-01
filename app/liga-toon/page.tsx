import Image from "next/image"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ligaToonTeams } from "@/lib/data"

export default function LigaToonPage() {
  const leaderboard = [...ligaToonTeams]
    .map((team, i) => ({ ...team, points: (4 - i) * 3, played: 3 }))
    .sort((a, b) => b.points - a.points)

  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-green-600 to-red-500 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative">
            <Image
              src="/aplicacoes/copa-toon-logo-2.png?width=200&height=200"
              alt="Liga Toon Logo"
              width={150}
              height={150}
              className="mx-auto mb-4 drop-shadow-lg"
            />
            <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wider drop-shadow-2xl">Liga Toon</h1>
            <p className="mt-4 text-xl max-w-2xl mx-auto">O maior campeonato de futebol do universo dos desenhos!</p>
            <Button asChild size="lg" className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg">
              <Link href="#">Jogue Copa Toon Agora!</Link>
            </Button>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Teams Section */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Times em Destaque</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {ligaToonTeams.map((team) => (
                  <Card key={team.name} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Image
                        src={`/placeholder.svg?width=100&height=100&query=${encodeURIComponent(team.logoQuery)}`}
                        alt={`${team.name} Logo`}
                        width={80}
                        height={80}
                        className="mx-auto mb-4"
                      />
                      <h3 className="text-xl font-bold">{team.name}</h3>
                      <p className="text-sm text-gray-500">Capitão: {team.captain}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Leaderboard Section */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Tabela de Classificação</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">#</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead className="text-right">Pts</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leaderboard.map((team, index) => (
                        <TableRow key={team.name}>
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell>{team.name}</TableCell>
                          <TableCell className="text-right">{team.points}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
