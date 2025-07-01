import { Gamepad2, Play, Youtube, Instagram, Facebook, Tv, Trophy, Sun, AppWindow } from "lucide-react"

export const navItems = [
  { icon: Tv, label: "DESENHOS", href: "/desenhos" },
  { icon: Gamepad2, label: "JOGOS", href: "/jogos" },
  { icon: Play, label: "VÍDEOS", href: "/videos" },
  { icon: Trophy, label: "LIGA TOON", href: "/liga-toon" },
  { icon: Sun, label: "CAMPEÕES DO CLIMA", href: "/campeoes-do-clima" },
  { icon: AppWindow, label: "APLICAÇÕES", href: "/aplicacoes" },
]

export const characters = [
  // Original Characters
  { name: "Planeta Terra", color: "bg-green-500", query: "planet earth cartoon style" },
  { name: "Gumball", color: "bg-blue-300", query: "gumball watterson from the amazing world of gumball" },
  { name: "Darwin", color: "bg-orange-400", query: "darwin watterson from the amazing world of gumball" },
  { name: "Robin", color: "bg-red-500", query: "robin from teen titans go" },
  { name: "Estelar", color: "bg-pink-400", query: "starfire from teen titans go" },
  { name: "Pardo", color: "bg-amber-700", query: "grizzly from we bare bears" },
  { name: "Panda", color: "bg-gray-300", query: "panda from we bare bears" },
  { name: "Polar", color: "bg-white", query: "ice bear from we bare bears" },
  { name: "Finn", color: "bg-sky-400", query: "finn the human from adventure time" },
  { name: "Jake", color: "bg-yellow-400", query: "jake the dog from adventure time" },
  { name: "Steven Universo", color: "bg-rose-300", query: "steven universe character" },
  { name: "Garnet", color: "bg-purple-600", query: "garnet from steven universe" },

  // Added Characters
  { name: "Mordecai", color: "bg-blue-500", query: "mordecai from regular show" },
  { name: "Rigby", color: "bg-orange-800", query: "rigby from regular show" },
  { name: "Florzinha", color: "bg-pink-500", query: "blossom from powerpuff girls" },
  { name: "Lindinha", color: "bg-cyan-400", query: "bubbles from powerpuff girls" },
  { name: "Docinho", color: "bg-lime-500", query: "buttercup from powerpuff girls" },
  { name: "Dexter", color: "bg-orange-500", query: "dexter from dexter's laboratory" },
  { name: "Dee Dee", color: "bg-pink-300", query: "dee dee from dexter's laboratory" },
  { name: "Johnny Bravo", color: "bg-yellow-300", query: "johnny bravo character" },
  { name: "Coragem", color: "bg-fuchsia-300", query: "courage the cowardly dog" },
  { name: "Ben Tennyson", color: "bg-green-600", query: "ben 10 character" },
  { name: "Samurai Jack", color: "bg-gray-200", query: "samurai jack character" },
  { name: "Du", color: "bg-yellow-200", query: "ed from ed edd n eddy" },
  { name: "Dudu", color: "bg-orange-300", query: "edd from ed edd n eddy" },
  { name: "Edu", color: "bg-green-300", query: "eddy from ed edd n eddy" },
  { name: "Mac", color: "bg-red-400", query: "mac from fosters home for imaginary friends" },
  { name: "Bloo", color: "bg-blue-600", query: "bloo from fosters home for imaginary friends" },
  { name: "Chowder", color: "bg-purple-400", query: "chowder cartoon character" },
  { name: "Clarêncio", color: "bg-lime-300", query: "clarence cartoon character" },
  { name: "Craig", color: "bg-yellow-600", query: "craig from craig of the creek" },
]

export const bannerData = [
  {
    title: "Jogue Agora: Aventura Mágica",
    description: "Explore mundos fantásticos e derrote monstros épicos no novo jogo do Cartoon Network.",
    buttonText: "Jogar Agora",
    href: "/jogos",
    image: "/home/slider-banner-1.jpg",
    imageQuery: "epic cartoon adventure game banner with fantasy characters",
  },
  {
    title: "Maratona de Fim de Semana",
    description: "Não perca os melhores episódios dos seus desenhos favoritos, sábado e domingo!",
    buttonText: "Ver Programação",
    href: "/videos",
    image: "/home/slider-banner-2.jpg",
    imageQuery: "colorful cartoon network banner with multiple characters celebrating",
  },
  {
    title: "Copa Toon: Gumball e Darwin foram convocados? ",
    description: "O que esses dois aprontaram dessa vez? Não perca o novo episódio de Copa Toon.",
    buttonText: "Assistir",
    href: "https://www.youtube.com/watch?v=6F3eqBl2C8U",
    image: "/home/slider-banner-3.jpg",
    imageQuery: "dramatic cartoon soccer final match banner",
  },
]

export const newsData = [
  {
    id: "news1",
    category: "NOVOS EPISÓDIOS",
    headline: "Aventura em Dobro! Novos Episódios de Gumball Chegam na Próxima Semana",
    snippet:
      "Prepare-se para mais confusões em Elmore! Gumball e Darwin estão de volta com uma leva de episódios inéditos que prometem muitas risadas.",
    image: "/home/cartoon-news-1.webp",
    imageQuery: "gumball and darwin looking surprised in a new episode scene",
    href: "#",
  },
  {
    id: "news2",
    category: "JOGOS",
    headline: "Copa Toon 2025: O Torneio Começou!",
    snippet:
      "Escolha seu capitão e monte seu time dos sonhos. A nova temporada da Copa Toon já está disponível com novos personagens e estádios.",
    image: "/home/cartoon-news-2.webp",
    imageQuery: "cartoon characters playing soccer in a stadium for copa toon",
    href: "/jogos",
  },
  {
    id: "news3",
    category: "EVENTO ESPECIAL",
    headline: "Maratona de Hora de Aventura neste Fim de Semana",
    snippet:
      "Vamos voltar para a Terra de Ooo! Reveja as melhores aventuras de Finn e Jake em uma maratona especial que vai ao ar no sábado e domingo.",
    image: "/home/cartoon-news-3.jpg",
    imageQuery: "finn and jake from adventure time on a movie poster",
    href: "/videos",
  },
]

export const footerLinks = [
  { label: "Termos de Uso", href: "#" },
  { label: "Política de Privacidade", href: "#" },
  { label: "Contacte-nos", href: "#" },
  { label: "Informação de Imprensa", href: "#" },
]

export const socialLinks = [
  { icon: Youtube, href: "#", name: "YouTube" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Facebook, href: "#", name: "Facebook" },
]

export const featuredShows = [
  { name: "O Incrível Mundo de Gumball", query: "the amazing world of gumball vertical poster", href: "/desenhos", image: "/home/desenho-1.jpg" },
  { name: "Jovens Titãs em Ação!", query: "teen titans go vertical poster", href: "/desenhos", image: "/home/desenho-2.jpg" },
  { name: "Ursos sem Curso", query: "we bare bears vertical poster", href: "/desenhos", image: "/home/desenho-3.png" },
  { name: "Steven Universo", query: "steven universe vertical poster", href: "/desenhos", image: "/home/desenho-4.jpg" },
  { name: "Hora de Aventura", query: "adventure time vertical poster", href: "/desenhos", image: "/home/desenho-5.jpg" },
  { name: "Clarêncio, o Otimista", query: "clarence cartoon vertical poster", href: "/desenhos", image: "/home/desenho-6.jpg" },
]

export const newEpisodes = [
  {
    show: "Jovens Titãs em Ação!",
    title: "A Batalha dos Sanduíches",
    query: "teen titans go sandwich episode still",
    href: "https://www.youtube.com/watch?v=UgeHHquq07Q",
    image: "/home/new-ep-1.jpg"
  },
  {
    show: "O Mundo de Craig",
    title: "O Tesouro do Riacho",
    query: "craig of the creek treasure episode still",
    href: "https://www.youtube.com/watch?v=GYJScnU-Tr4",
    image: "/home/new-ep-2.jpg"
  },
  {
    show: "Maçã e Cebola",
    title: "Um Dia na Cidade Grande",
    query: "apple and onion city episode still",
    href: "https://www.youtube.com/watch?v=VPfk8AtX7Tg",
    image: "/home/new-ep-3.jpg"
  },
  {
    show: "Irmão do Jorel",
    title: "O Irmão do Jorel é um Menino Sereio",
    query: "apple and onion city episode still",
    href: "https://www.youtube.com/watch?v=Qgki6QnDHfE",
    image: "/home/new-ep-4.png"
  },
]

export const showsData = [
  {
    id: "gumball",
    name: "O Incrível Mundo de Gumball",
    posterQuery: "the amazing world of gumball vertical poster",
    bannerQuery: "the amazing world of gumball wide banner",
    description:
      "Acompanhe as desventuras de Gumball Watterson, um gato azul de 12 anos, e seu melhor amigo Darwin, um peixe dourado que virou seu irmão adotivo. Juntos, eles causam todo tipo de confusão na cidade de Elmore.",
    characters: [
      { name: "Gumball", query: "gumball watterson character" },
      { name: "Darwin", query: "darwin watterson character" },
      { name: "Anais", query: "anais watterson character" },
      { name: "Nicole", query: "nicole watterson character" },
      { name: "Ricardo", query: "richard watterson character" },
    ],
    details: { creator: "Ben Bocquelet", year: "2011–2019", episodes: "240" },
  },
  {
    id: "adventure_time",
    name: "Hora de Aventura",
    posterQuery: "adventure time vertical poster",
    bannerQuery: "adventure time wide banner",
    description:
      "Explore a Terra de Ooo com Finn, o humano, e seu cão mágico Jake. Eles enfrentam monstros, exploram masmorras e salvam princesas em uma jornada épica e surreal.",
    characters: [
      { name: "Finn", query: "finn the human character" },
      { name: "Jake", query: "jake the dog character" },
      { name: "Princesa Jujuba", query: "princess bubblegum character" },
      { name: "Marceline", query: "marceline the vampire queen character" },
      { name: "Rei Gelado", query: "ice king character" },
    ],
    details: { creator: "Pendleton Ward", year: "2010–2018", episodes: "283" },
  },
  {
    id: "steven_universe",
    name: "Steven Universo",
    posterQuery: "steven universe vertical poster",
    bannerQuery: "steven universe wide banner",
    description:
      "Steven é um garoto que vive com as Crystal Gems, um time de guardiãs mágicas. Ele aprende a usar os poderes herdados de sua mãe, uma Gem, para proteger a humanidade.",
    characters: [
      { name: "Steven", query: "steven universe character" },
      { name: "Garnet", query: "garnet steven universe character" },
      { name: "Ametista", query: "amethyst steven universe character" },
      { name: "Pérola", query: "pearl steven universe character" },
    ],
    details: { creator: "Rebecca Sugar", year: "2013–2019", episodes: "160" },
  },
  {
    id: "teen_titans_go",
    name: "Jovens Titãs em Ação!",
    posterQuery: "teen titans go vertical poster",
    bannerQuery: "teen titans go wide banner",
    description:
      "Veja o que os Jovens Titãs fazem quando não estão salvando o mundo. Uma visão cômica da vida de super-heróis adolescentes, cheia de piadas e situações hilárias.",
    characters: [
      { name: "Robin", query: "robin teen titans go character" },
      { name: "Estelar", query: "starfire teen titans go character" },
      { name: "Ciborgue", query: "cyborg teen titans go character" },
      { name: "Ravena", query: "raven teen titans go character" },
      { name: "Mutano", query: "beast boy teen titans go character" },
    ],
    details: { creator: "Aaron Horvath, Michael Jelenic", year: "2013–presente", episodes: "390+" },
  },
  {
    id: "we_bare_bears",
    name: "Ursos sem Curso",
    posterQuery: "we bare bears vertical poster",
    bannerQuery: "we bare bears wide banner",
    description:
      "Pardo, Panda e Polar são três irmãos ursos tentando se enturmar na sociedade humana da Baía de São Francisco. Eles fazem de tudo para conseguir comida, amigos e fama na internet.",
    characters: [
      { name: "Pardo", query: "grizzly we bare bears character" },
      { name: "Panda", query: "panda we bare bears character" },
      { name: "Polar", query: "ice bear we bare bears character" },
    ],
    details: { creator: "Daniel Chong", year: "2015–2019", episodes: "140" },
  },
  // Adding 15 more shows to reach 20
  {
    id: "regular_show",
    name: "Apenas um Show",
    posterQuery: "regular show vertical poster",
    bannerQuery: "regular show wide banner",
    description:
      "Dois amigos, um gaio-azul chamado Mordecai e um guaxinim chamado Rigby, trabalham como jardineiros em um parque e tentam de tudo para evitar o trabalho.",
    characters: [
      { name: "Mordecai", query: "mordecai regular show" },
      { name: "Rigby", query: "rigby regular show" },
    ],
    details: { creator: "J. G. Quintel", year: "2010–2017", episodes: "261" },
  },
  {
    id: "dexters_lab",
    name: "O Laboratório de Dexter",
    posterQuery: "dexter's laboratory vertical poster",
    bannerQuery: "dexter's laboratory wide banner",
    description:
      "Dexter é um menino gênio com um laboratório secreto, mas sua irmã mais velha, Dee Dee, sempre consegue entrar e estragar suas invenções.",
    characters: [
      { name: "Dexter", query: "dexter cartoon character" },
      { name: "Dee Dee", query: "dee dee cartoon character" },
    ],
    details: { creator: "Genndy Tartakovsky", year: "1996–2003", episodes: "78" },
  },
  {
    id: "powerpuff_girls",
    name: "As Meninas Superpoderosas",
    posterQuery: "powerpuff girls vertical poster",
    bannerQuery: "powerpuff girls wide banner",
    description:
      "Florzinha, Lindinha e Docinho são três meninas com superpoderes que defendem a cidade de Townsville de vilões e monstros.",
    characters: [
      { name: "Florzinha", query: "blossom powerpuff girls" },
      { name: "Lindinha", query: "bubbles powerpuff girls" },
      { name: "Docinho", query: "buttercup powerpuff girls" },
    ],
    details: { creator: "Craig McCracken", year: "1998–2005", episodes: "78" },
  },
  {
    id: "ben_10",
    name: "Ben 10",
    posterQuery: "ben 10 vertical poster",
    bannerQuery: "ben 10 wide banner",
    description:
      "Ben Tennyson, um garoto de 10 anos, descobre um relógio alienígena, o Omnitrix, que lhe permite se transformar em 10 alienígenas diferentes.",
    characters: [
      { name: "Ben Tennyson", query: "ben tennyson" },
      { name: "Gwen Tennyson", query: "gwen tennyson" },
      { name: "Max Tennyson", query: "max tennyson" },
    ],
    details: { creator: "Man of Action", year: "2005–2008", episodes: "52" },
  },
  {
    id: "samurai_jack",
    name: "Samurai Jack",
    posterQuery: "samurai jack vertical poster",
    bannerQuery: "samurai jack wide banner",
    description:
      "Um samurai é enviado para um futuro distópico governado pelo demônio Abu. Ele busca uma maneira de voltar ao passado para destruir o mal.",
    characters: [
      { name: "Jack", query: "samurai jack character" },
      { name: "Abu", query: "aku samurai jack" },
    ],
    details: { creator: "Genndy Tartakovsky", year: "2001–2017", episodes: "62" },
  },
  {
    id: "johnny_bravo",
    name: "Johnny Bravo",
    posterQuery: "johnny bravo vertical poster",
    bannerQuery: "johnny bravo wide banner",
    description:
      "Johnny Bravo é um homem musculoso e vaidoso que tenta, sem sucesso, conquistar mulheres com seu jeito peculiar.",
    characters: [{ name: "Johnny Bravo", query: "johnny bravo character" }],
    details: { creator: "Van Partible", year: "1997–2004", episodes: "67" },
  },
  {
    id: "courage",
    name: "Coragem, o Cão Covarde",
    posterQuery: "courage the cowardly dog vertical poster",
    bannerQuery: "courage the cowardly dog wide banner",
    description:
      "Coragem é um cão medroso que vive com seus donos idosos em Lugar Nenhum, e precisa defendê-los de eventos bizarros e paranormais.",
    characters: [
      { name: "Coragem", query: "courage the cowardly dog" },
      { name: "Muriel", query: "muriel bagge" },
      { name: "Eustácio", query: "eustace bagge" },
    ],
    details: { creator: "John R. Dilworth", year: "1999–2002", episodes: "52" },
  },
  {
    id: "craig_of_the_creek",
    name: "O Mundo de Craig",
    posterQuery: "craig of the creek vertical poster",
    bannerQuery: "craig of the creek wide banner",
    description:
      "Craig e seus amigos, Kelsey e J.P., vivem aventuras em um riacho onde as crianças do bairro criaram sua própria sociedade.",
    characters: [
      { name: "Craig", query: "craig williams character" },
      { name: "Kelsey", query: "kelsey craig of the creek" },
      { name: "J.P.", query: "jp craig of the creek" },
    ],
    details: { creator: "Matt Burnett, Ben Levin", year: "2018–presente", episodes: "80+" },
  },
  {
    id: "total_drama_island",
    name: "Ilha dos Desafios",
    posterQuery: "total drama island vertical poster",
    bannerQuery: "total drama island wide banner",
    description:
      "Um grupo de adolescentes compete em um reality show em uma ilha abandonada, enfrentando desafios bizarros por um prêmio em dinheiro.",
    characters: [
      { name: "Chris McLean", query: "chris mclean total drama" },
      { name: "Chef Hatchet", query: "chef hatchet total drama" },
    ],
    details: { creator: "Tom McGillis, Jennifer Pertsch", year: "2007–2008", episodes: "27" },
  },
  {
    id: "chowder",
    name: "Chowder",
    posterQuery: "chowder cartoon vertical poster",
    bannerQuery: "chowder cartoon wide banner",
    description:
      "Chowder é um jovem aprendiz de cozinheiro que vive na cidade de Marzipã e sempre se mete em encrencas culinárias.",
    characters: [
      { name: "Chowder", query: "chowder cartoon character" },
      { name: "Mung Daal", query: "mung daal chowder" },
    ],
    details: { creator: "C. H. Greenblatt", year: "2007–2010", episodes: "49" },
  },
  {
    id: "fosters_home",
    name: "A Mansão Foster para Amigos Imaginários",
    posterQuery: "fosters home for imaginary friends vertical poster",
    bannerQuery: "fosters home wide banner",
    description:
      "Mac é um garoto que leva seu amigo imaginário, Bloo, para uma casa especial onde amigos imaginários vivem quando suas crianças crescem.",
    characters: [
      { name: "Mac", query: "mac fosters home" },
      { name: "Bloo", query: "bloo fosters home" },
    ],
    details: { creator: "Craig McCracken", year: "2004–2009", episodes: "79" },
  },
  {
    id: "mao_mao",
    name: "Mao Mao: Heróis de Coração Puro",
    posterQuery: "mao mao heroes of pure heart vertical poster",
    bannerQuery: "mao mao heroes of pure heart wide banner",
    description:
      "O xerife Mao Mao, um gato heroico, e seus amigos defendem o pacífico Vale do Coração Puro de monstros e vilões.",
    characters: [
      { name: "Mao Mao", query: "mao mao character" },
      { name: "Adorabat", query: "adorabat character" },
    ],
    details: { creator: "Parker Simmons", year: "2019–2020", episodes: "40" },
  },
  {
    id: "ok_ko",
    name: "OK, K.O.! Vamos ser Heróis",
    posterQuery: "ok ko lets be heroes vertical poster",
    bannerQuery: "ok ko lets be heroes wide banner",
    description:
      "K.O. é um garoto otimista que trabalha em uma loja de suprimentos para heróis e sonha em se tornar o maior herói do mundo.",
    characters: [
      { name: "K.O.", query: "ko ok ko character" },
      { name: "Enid", query: "enid ok ko character" },
      { name: "Rad", query: "radicles ok ko character" },
    ],
    details: { creator: "Ian Jones-Quartey", year: "2017–2019", episodes: "112" },
  },
  {
    id: "infinity_train",
    name: "Trem Infinito",
    posterQuery: "infinity train vertical poster",
    bannerQuery: "infinity train wide banner",
    description:
      "Passageiros com problemas emocionais embarcam em um trem misterioso com vagões infinitos, cada um contendo um universo diferente.",
    characters: [
      { name: "Tulip Olsen", query: "tulip olsen infinity train" },
      { name: "One-One", query: "one-one infinity train" },
    ],
    details: { creator: "Owen Dennis", year: "2019–2021", episodes: "40" },
  },
  {
    id: "clarence",
    name: "Clarêncio, o Otimista",
    posterQuery: "clarence cartoon vertical poster",
    bannerQuery: "clarence cartoon wide banner",
    description:
      "Clarêncio é um menino alegre e otimista que vê o lado bom de tudo e vive aventuras cotidianas com seus amigos Jeff e Sumo.",
    characters: [
      { name: "Clarence", query: "clarence wendle" },
      { name: "Jeff", query: "jeff randell" },
      { name: "Sumo", query: "ryan sumo" },
    ],
    details: { creator: "Skyler Page", year: "2014–2018", episodes: "130" },
  },
]

export const gamesData = [
  {
    id: "ben10_savage_pursuit",
    title: "Ben 10: Perseguição Selvagem",
    description:
      "Corra, pule e transforme-se nos alienígenas do Omnitrix para derrotar os inimigos e salvar o dia nesta aventura de plataforma.",
    imageQuery: "ben 10 platformer game jungle setting",
    category: "Ação",
    href: "#",
  },
  {
    id: "samurai_jack_code",
    title: "Samurai Jack: Código do Samurai",
    description:
      "Empunhe sua espada mágica e enfrente os robôs de Abu em uma jornada épica para encontrar o caminho de volta ao passado.",
    imageQuery: "samurai jack fighting robots game",
    category: "Aventura",
    href: "#",
  },
  {
    id: "ppg_battle_him",
    title: "Meninas Superpoderosas: Batalha contra Ele",
    description:
      "Use os superpoderes de Florzinha, Lindinha e Docinho para lutar contra o vilão mais sinistro de Townsville, Ele.",
    imageQuery: "powerpuff girls fighting red demon game",
    category: "Ação",
    href: "#",
  },
  {
    id: "adventure_time_finn_bones",
    title: "Hora de Aventura: Finn e Ossos",
    description:
      "Navegue pelos mares, lute contra esqueletos piratas e encontre tesouros nesta aventura com Finn e Jake.",
    imageQuery: "adventure time pirate ship game",
    category: "Aventura",
    href: "#",
  },
  {
    id: "regular_show_fist_punch",
    title: "Apenas um Show: Soco de Punho",
    description:
      "Ajude Mordecai e Rigby a lutar contra inimigos em um clássico jogo de briga de rua para resgatar seus amigos.",
    imageQuery: "regular show beat em up game",
    category: "Luta",
    href: "#",
  },
  {
    id: "gumball_school_rush",
    title: "Gumball: Corrida na Escola",
    description:
      "Corra pelos corredores da Escola de Elmore, desvie de obstáculos e colete itens neste jogo de ritmo acelerado.",
    imageQuery: "gumball school hallway running game",
    category: "Corrida",
    href: "#",
  },
  {
    id: "dexter_runaway_robot",
    title: "Laboratório de Dexter: Robô em Fuga",
    description:
      "Controle o robô de Dexter para escapar dos perigos do laboratório enquanto Dee Dee tenta causar problemas.",
    imageQuery: "dexters lab robot escape game",
    category: "Quebra-cabeça",
    href: "#",
  },
  {
    id: "ed_edd_eddy_smash",
    title: "Du, Dudu e Edu: Pancadaria no Beco",
    description:
      "Use as invenções malucas dos Eds para competir contra as outras crianças do beco em desafios hilários.",
    imageQuery: "ed edd n eddy cul-de-sac game",
    category: "Esportes",
    href: "#",
  },
  {
    id: "courage_nightmare",
    title: "Coragem: Férias do Pesadelo",
    description:
      "Ajude Coragem a navegar por um hotel assustador e resolver quebra-cabeças para salvar Muriel de monstros.",
    imageQuery: "courage the cowardly dog scary hotel game",
    category: "Aventura",
    href: "#",
  },
  {
    id: "fosters_amazing_race",
    title: "Mansão Foster: Corrida Labiríntica",
    description:
      "Percorra os corredores da Mansão Foster, encontre amigos imaginários e complete tarefas antes que o tempo acabe.",
    imageQuery: "fosters home for imaginary friends maze game",
    category: "Quebra-cabeça",
    href: "#",
  },
  {
    id: "teen_titans_slash_justice",
    title: "Jovens Titãs: Golpe da Justiça",
    description: "Escolha seu Titã favorito e lute contra hordas de vilões em um jogo de ação e combate frenético.",
    imageQuery: "teen titans go fighting game",
    category: "Luta",
    href: "#",
  },
  {
    id: "steven_heap_of_trouble",
    title: "Steven Universo: Monte de Problemas",
    description: "Ajude Steven a empilhar itens e resolver quebra-cabeças baseados em física para limpar seu quarto.",
    imageQuery: "steven universe physics puzzle game",
    category: "Quebra-cabeça",
    href: "#",
  },
]

export const videosData = [
  {
    id: "gumball_funny_moments",
    title: "Melhores Momentos de Gumball",
    show: "O Incrível Mundo de Gumball",
    thumbnailQuery: "gumball and darwin laughing hysterically",
    duration: "8:22",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "adventure_time_bacon_pancakes",
    title: "Canção: Bacon Pancakes",
    show: "Hora de Aventura",
    thumbnailQuery: "jake the dog making bacon pancakes",
    duration: "1:30",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "teen_titans_go_waffles",
    title: "A Canção dos Waffles",
    show: "Jovens Titãs em Ação!",
    thumbnailQuery: "cyborg and beast boy singing about waffles",
    duration: "2:05",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "steven_universe_stronger_than_you",
    title: "Canção: Mais Forte que Você",
    show: "Steven Universo",
    thumbnailQuery: "garnet from steven universe singing",
    duration: "2:55",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "we_bare_bears_burrito",
    title: "Pardo e o Burrito Gigante",
    show: "Ursos sem Curso",
    thumbnailQuery: "grizzly bear hugging a giant burrito",
    duration: "4:15",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "regular_show_best_of_benson",
    title: "Benson Perdendo a Paciência",
    show: "Apenas um Show",
    thumbnailQuery: "benson from regular show yelling",
    duration: "11:03",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "powerpuff_girls_intro",
    title: "Abertura Clássica",
    show: "As Meninas Superpoderosas",
    thumbnailQuery: "powerpuff girls classic intro screen",
    duration: "1:01",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "dexters_lab_omelette_du_fromage",
    title: "Omelette du Fromage",
    show: "O Laboratório de Dexter",
    thumbnailQuery: "dexter saying omelette du fromage",
    duration: "0:45",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "courage_king_ramses",
    title: "A Maldição do Rei Ramsés",
    show: "Coragem, o Cão Covarde",
    thumbnailQuery: "king ramses curse from courage the cowardly dog",
    duration: "3:30",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "ben_10_first_transformation",
    title: "A Primeira Transformação de Ben",
    show: "Ben 10",
    thumbnailQuery: "ben 10 first transforming into heatblast",
    duration: "5:10",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "samurai_jack_vs_shinobi",
    title: "Samurai Jack vs. Shinobi",
    show: "Samurai Jack",
    thumbnailQuery: "samurai jack fighting a robot ninja in the dark",
    duration: "6:20",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "johnny_bravo_do_the_monkey",
    title: "Dança do Macaco com Johnny Bravo",
    show: "Johnny Bravo",
    thumbnailQuery: "johnny bravo dancing with a monkey",
    duration: "1:50",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
]

export const ligaToonTeams = [
  { name: "Titãs de Jump City", logoQuery: "teen titans go logo", captain: "Robin" },
  { name: "Guerreiros de Ooo", logoQuery: "adventure time logo", captain: "Finn" },
  { name: "Elmore Streamers", logoQuery: "gumball logo", captain: "Gumball" },
  { name: "Crystal Gems FC", logoQuery: "steven universe star logo", captain: "Garnet" },
]

export const climateTips = [
  {
    title: "Recicle seu Lixo",
    description: "Separe plástico, papel, metal e vidro. Pequenos gestos fazem uma grande diferença!",
    iconQuery: "recycle symbol green",
    characterQuery: "gumball watterson holding a recycling bin",
  },
  {
    title: "Economize Água",
    description: "Feche a torneira ao escovar os dentes. Banhos mais curtos também ajudam o planeta!",
    iconQuery: "water drop blue",
    characterQuery: "jake the dog turning off a faucet",
  },
  {
    title: "Plante uma Árvore",
    description: "Árvores limpam o ar e são lares para animais. Que tal começar um pequeno jardim?",
    iconQuery: "green tree simple",
    characterQuery: "steven universe planting a tree",
  },
  {
    title: "Use Menos Energia",
    description: "Apague as luzes ao sair de um cômodo e desligue aparelhos da tomada.",
    iconQuery: "lightning bolt yellow",
    characterQuery: "blossom powerpuff girls turning off a light switch",
  },
]

export const appsData = [
  {
    name: "Cartoon Network Arcade",
    image: "/home/app-1.png",
    description: "Jogue dezenas de minigames dos seus shows favoritos em um único app!",
    iconQuery: "colorful arcade app icon",
    screenshots: [
      "screenshot of a gumball mini-game",
      "screenshot of a teen titans go mini-game",
      "screenshot of a ben 10 mini-game",
    ],
    ios_href: "#",
    android_href: "#",
  },
  {
    name: "Copa Toon",
    image: "/home/app-2.png",
    description: "Monte seu time com seus personagens preferidos e dispute o maior torneio de futebol do universo!",
    iconQuery: "soccer ball cartoon app icon",
    screenshots: [
      "screenshot of a cartoon soccer match",
      "screenshot of a character selection screen in a soccer game",
      "screenshot of a goal celebration in a cartoon soccer game",
    ],
    ios_href: "#",
    android_href: "#",
  },
  {
    name: "CN Sayin'",
    image: "/home/app-3.jpeg",
    description: "Grave sua voz sobre clipes de desenhos e crie seus próprios memes hilários!",
    iconQuery: "microphone app icon",
    screenshots: [
      "screenshot of a voice recording interface over a cartoon clip",
      "screenshot of a library of cartoon clips to choose from",
      "screenshot of a finished video meme ready to be shared",
    ],
    ios_href: "#",
    android_href: "#",
  },
  {
    name: "Ben 10: Alien Experience",
    image: "/home/app-4.png",
    description: "Use realidade aumentada para se transformar nos alienígenas do Omnitrix e lutar contra vilões.",
    iconQuery: "ben 10 omnitrix app icon",
    screenshots: [
      "screenshot of an augmented reality alien fighting in a real world environment",
      "screenshot of a user selecting an alien from the omnitrix interface",
      "screenshot of a 3d model of an alien on a table",
    ],
    ios_href: "#",
    android_href: "#",
  },
]
