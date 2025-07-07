import {
  Gamepad2,
  Play,
  Youtube,
  Instagram,
  Facebook,
  Tv,
  Trophy,
  Sun,
  AppWindow,
} from "lucide-react";

export const navItems = [
  { icon: Tv, label: "DESENHOS", href: "/desenhos" },
  { icon: Gamepad2, label: "JOGOS", href: "/jogos" },
  { icon: Play, label: "VÍDEOS", href: "/videos" },
  { icon: Trophy, label: "LIGA TOON", href: "/liga-toon" },
  { icon: Sun, label: "CAMPEÕES DO CLIMA", href: "/campeoes-do-clima" },
  { icon: AppWindow, label: "APLICAÇÕES", href: "/aplicacoes" },
];

export const characters = [
  // Original Characters
  {
    name: "Rigby",
    color: "bg-orange-800",
    query: "planet earth cartoon style",
    image: "/dev-cartoon-network/home/character/char-rigby.png",
  },
  {
    name: "Mordecai",
    color: "bg-blue-500",
    query: "planet earth cartoon style",
    image: "/dev-cartoon-network/home/character/char-mordecai.png",
  },
  {
    name: "Gumball",
    color: "bg-blue-300",
    query: "gumball watterson from the amazing world of gumball",
    image: "/dev-cartoon-network/home/character/char-gumball.png",
  },
  {
    name: "Darwin",
    color: "bg-orange-400",
    query: "darwin watterson from the amazing world of gumball",
    image: "/dev-cartoon-network/home/character/char-darwin.png",
  },
  {
    name: "Robin",
    color: "bg-red-500",
    query: "robin from teen titans go",
    image: "/dev-cartoon-network/home/character/char-robin.png",
  },
  {
    name: "Estelar",
    color: "bg-pink-400",
    query: "starfire from teen titans go",
    image: "/dev-cartoon-network/home/character/char-estelar.png",
  },
  {
    name: "Mutano",
    color: "bg-green-500",
    query: "starfire from teen titans go",
    image: "/dev-cartoon-network/home/character/char-mutano.png",
  },
  {
    name: "Pardo",
    color: "bg-amber-700",
    query: "grizzly from we bare bears",
    image: "/dev-cartoon-network/home/character/char-pardo.png",
  },
  {
    name: "Panda",
    color: "bg-white",
    query: "panda from we bare bears",
    image: "/dev-cartoon-network/home/character/char-panda.png",
  },
  {
    name: "Polar",
    color: "bg-black",
    query: "ice bear from we bare bears",
    image: "/dev-cartoon-network/home/character/char-polar.png",
  },
  {
    name: "Finn",
    color: "bg-sky-500",
    query: "finn the human from adventure time",
    image: "/dev-cartoon-network/home/character/char-finn.png",
  },
  {
    name: "Jake",
    color: "bg-yellow-400",
    query: "jake the dog from adventure time",
    image: "/dev-cartoon-network/home/character/char-jake.png",
  },
  {
    name: "Steven Universo",
    color: "bg-rose-300",
    query: "steven universe character",
    image: "/dev-cartoon-network/home/character/char-steven.png",
  },
  {
    name: "Garnet",
    color: "bg-purple-600",
    query: "garnet from steven universe",
    image: "/dev-cartoon-network/home/character/char-garnet.png",
  },
  {
    name: "Jorel",
    color: "bg-red-600",
    query: "garnet from steven universe",
    image: "/dev-cartoon-network/home/character/char-irmao-do-jorel.png",
  },

  // Added Characters
  {
    name: "Florzinha",
    color: "bg-pink-500",
    query: "blossom from powerpuff girls",
    image: "/dev-cartoon-network/home/character/char-florzinha.png",
  },
  {
    name: "Lindinha",
    color: "bg-cyan-400",
    query: "bubbles from powerpuff girls",
    image: "/dev-cartoon-network/home/character/char-lindinha.png",
  },
  {
    name: "Docinho",
    color: "bg-lime-500",
    query: "buttercup from powerpuff girls",
    image: "/dev-cartoon-network/home/character/char-docinho.png",
  },
  {
    name: "Dexter",
    color: "bg-orange-500",
    query: "dexter from dexter's laboratory",
    image: "/dev-cartoon-network/home/character/char-dexter.png",
  },
  {
    name: "Dee Dee",
    color: "bg-pink-300",
    query: "dee dee from dexter's laboratory",
    image: "/dev-cartoon-network/home/character/char-dee-dee.png",
  },
  {
    name: "Johnny Bravo",
    color: "bg-yellow-300",
    query: "johnny bravo character",
    image: "/dev-cartoon-network/home/character/char-johnny-bravo.png",
  },
  {
    name: "Coragem",
    color: "bg-fuchsia-300",
    query: "courage the cowardly dog",
    image: "/dev-cartoon-network/home/character/char-coragem.png",
  },
  {
    name: "Ben Tennyson",
    color: "bg-green-600",
    query: "ben 10 character",
    image: "/dev-cartoon-network/home/character/char-ben.png",
  },
  {
    name: "Samurai Jack",
    color: "bg-gray-200",
    query: "samurai jack character",
    image: "/dev-cartoon-network/home/character/char-samurai-jack.png",
  },
  {
    name: "Du",
    color: "bg-yellow-200",
    query: "ed from ed edd n eddy",
    image: "/dev-cartoon-network/home/character/char-du.png",
  },
  {
    name: "Dudu",
    color: "bg-orange-300",
    query: "edd from ed edd n eddy",
    image: "/dev-cartoon-network/home/character/char-dudu.png",
  },
  {
    name: "Edu",
    color: "bg-green-300",
    query: "eddy from ed edd n eddy",
    image: "/dev-cartoon-network/home/character/char-edu.png",
  },
  {
    name: "Mac",
    color: "bg-red-400",
    query: "mac from fosters home for imaginary friends",
    image: "/dev-cartoon-network/home/character/char-mac.png",
  },
  {
    name: "Bloo",
    color: "bg-blue-600",
    query: "bloo from fosters home for imaginary friends",
    image: "/dev-cartoon-network/home/character/char-bloo.png",
  },
  {
    name: "Chowder",
    color: "bg-purple-400",
    query: "chowder cartoon character",
    image: "/dev-cartoon-network/home/character/char-chowder.png",
  },
  {
    name: "Clarêncio",
    color: "bg-lime-300",
    query: "clarence cartoon character",
    image: "/dev-cartoon-network/home/character/char-clarencio.png",
  },
  {
    name: "Craig",
    color: "bg-yellow-600",
    query: "craig from craig of the creek",
    image: "/dev-cartoon-network/home/character/char-craig.png",
  },

  //New characters
  {
    name: "Billy",
    color: "bg-red-500",
    query: "billy from the grim adventures of billy and mandy",
    image: "/dev-cartoon-network/home/character/char-billy.png",
  },
  {
    name: "Mandy",
    color: "bg-zinc-800",
    query: "mandy from the grim adventures of billy and mandy",
    image: "/dev-cartoon-network/home/character/char-mandy.png",
  },
  {
    name: "Puro Osso",
    color: "bg-red-900",
    query: "grim from the grim adventures of billy and mandy",
    image: "/dev-cartoon-network/home/character/char-puro-osso.png",
  },
  {
    name: "Dan Kuso",
    color: "bg-indigo-500",
    query: "dan kuso from bakugan",
    image: "/dev-cartoon-network/home/character/char-dan-kuso.png",
  },
  {
    name: "Pernalonga",
    color: "bg-gray-300",
    query: "bugs bunny looney tunes",
    image: "/dev-cartoon-network/home/character/char-pernalonga.png",
  },
  {
    name: "Patolino",
    color: "bg-yellow-500",
    query: "daffy duck looney tunes",
    image: "/dev-cartoon-network/home/character/char-patolino.png",
  },
  {
    name: "Lazlo",
    color: "bg-lime-400",
    query: "lazlo from camp lazlo",
    image: "/dev-cartoon-network/home/character/char-lazlo.png",
  },
  {
    name: "Adam Lyon",
    color: "bg-orange-300",
    query: "adam lyon from my gym partner's a monkey",
    image: "/dev-cartoon-network/home/character/char-adam-lyon.png",
  },
  {
    name: "Jake Spidermonkey",
    color: "bg-purple-500",
    query: "jake spidermonkey from my gym partner's a monkey",
    image: "/dev-cartoon-network/home/character/char-jake-macaco.png",
  },
  {
    name: "Número 1",
    color: "bg-red-700",
    query: "numbuh 1 from codename kids next door",
    image: "/dev-cartoon-network/home/character/char-numero-1.png",
  },
  {
    name: "Rex Salazar",
    color: "bg-cyan-700",
    query: "rex salazar from generator rex",
    image: "/dev-cartoon-network/home/character/char-rex.png",
  },

  //New characters
  {
    name: "A Vaca",
    color: "bg-pink-200",
    query: "cow from cow and chicken cartoon",
    image: "/dev-cartoon-network/home/character/char-vaca.png",
  },
  {
    name: "O Frango",
    color: "bg-red-400",
    query: "chicken from cow and chicken cartoon",
    image: "/dev-cartoon-network/home/character/char-frango.png",
  },
  {
    name: "Mao Mao",
    color: "bg-blue-800",
    query: "mao mao from mao mao heroes of pure heart",
    image: "/dev-cartoon-network/home/character/char-maomao.png",
  },
  {
    name: "K.O.",
    color: "bg-red-600",
    query: "k.o from ok ko let's be heroes",
    image: "/dev-cartoon-network/home/character/char-ko.png",
  },
  {
    name: "Salsicha",
    color: "bg-lime-600",
    query: "shaggy from scooby-doo",
    image: "/dev-cartoon-network/home/character/char-salsicha.png",
  },
  {
    name: "Scooby-Doo",
    color: "bg-amber-600",
    query: "scooby-doo cartoon character",
    image: "/dev-cartoon-network/home/character/char-scooby-doo.png",
  },
  {
    name: "Tulip Olsen",
    color: "bg-teal-400",
    query: "tulip olsen from infinity train",
    image: "/dev-cartoon-network/home/character/char-tulip-olsen.png",
  },
  {
    name: "Chris McLean",
    color: "bg-gray-700",
    query: "chris mclean from total drama island",
    image: "/dev-cartoon-network/home/character/char-chris-mclean.png",
  },
];

export const bannerData = [
  {
    title: "Cartoon Network agora na MAX!",
    description:
      "Seus desenhos favoritos, onde e quando quiser. Assista tudo da Cartoon direto na plataforma MAX!",
    buttonText: "Ver na MAX",
    href: "https://www.max.com/br/pt/channel/cartoon-network",
    image: "/dev-cartoon-network/home/slider-banner-1.png",
    imageQuery:
      "cartoon network characters watching TV together with MAX logo in the background, cozy and colorful",
  },
  {
    title: "Maratona de Fim de Semana",
    description:
      "Não perca os melhores episódios dos seus desenhos favoritos, sábado e domingo!",
    buttonText: "Ver Programação",
    href: "/videos",
    image: "/dev-cartoon-network/home/slider-banner-2.jpg",
    imageQuery:
      "colorful cartoon network banner with multiple characters celebrating",
  },
  {
    title: "Copa Toon: Gumball e Darwin foram convocados? ",
    description:
      "O que esses dois aprontaram dessa vez? Não perca o novo episódio de Copa Toon.",
    buttonText: "Assistir",
    href: "https://www.youtube.com/watch?v=6F3eqBl2C8U",
    image: "/dev-cartoon-network/home/slider-banner-3.jpg",
    imageQuery: "dramatic cartoon soccer final match banner",
  },
  {
    title: "Jogue Agora: Aventura Mágica",
    description:
      "Explore mundos fantásticos e derrote monstros épicos no novo jogo do Cartoon Network.",
    buttonText: "Jogar Agora",
    href: "/jogos",
    image: "/dev-cartoon-network/home/slider-banner-4.jpg",
    imageQuery: "epic cartoon adventure game banner with fantasy characters",
  },
  {
    title: "Estreia Explosiva: Rey Mysterio!",
    description:
      "O lendário lutador chegou com tudo no Cartoon Network. Ação, máscaras e golpes incríveis te esperam!",
    buttonText: "Assistir Agora",
    href: "https://www.youtube.com/watch?v=zyOFPqHJRPA",
    image: "/dev-cartoon-network/home/slider-banner-5.jpg",
    imageQuery:
      "cartoon banner of rey mysterio in action pose, wrestling ring, colorful and intense",
  },
];

export const newsData = [
  {
    id: "news1",
    category: "NOVOS EPISÓDIOS",
    headline:
      "Aventura em Dobro! Novos Episódios de Gumball Chegam na Próxima Semana",
    snippet:
      "Prepare-se para mais confusões em Elmore! Gumball e Darwin estão de volta com uma leva de episódios inéditos que prometem muitas risadas.",
    image: "/dev-cartoon-network/home/cartoon-news-1.jpg",
    imageQuery: "gumball and darwin looking surprised in a new episode scene",
    href: "/videos",
  },
  {
    id: "news2",
    category: "JOGOS",
    headline: "Copa Toon 2025: O Torneio Começou!",
    snippet:
      "Escolha seu capitão e monte seu time dos sonhos. A nova temporada da Copa Toon já está disponível com novos personagens e estádios.",
    image: "/dev-cartoon-network/home/cartoon-news-2.jpg",
    imageQuery: "cartoon characters playing soccer in a stadium for copa toon",
    href: "/liga-toon",
  },
  {
    id: "news3",
    category: "EVENTO ESPECIAL",
    headline: "Maratona de Hora de Aventura neste Fim de Semana",
    snippet:
      "Vamos voltar para a Terra de Ooo! Reveja as melhores aventuras de Finn e Jake em uma maratona especial que vai ao ar no sábado e domingo.",
    image: "/dev-cartoon-network/home/cartoon-news-3.jpg",
    imageQuery: "finn and jake from adventure time on a movie poster",
    href: "/videos",
  },
];

export const footerLinks = [
  { label: "Termos de Uso", href: "#" },
  { label: "Política de Privacidade", href: "#" },
  { label: "Contacte-nos", href: "#" },
  { label: "Informação de Imprensa", href: "#" },
];

export const socialLinks = [
  { icon: Youtube, href: "#", name: "YouTube" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Facebook, href: "#", name: "Facebook" },
];

export const featuredShows = [
  {
    name: "O Incrível Mundo de Gumball",
    query: "the amazing world of gumball vertical poster",
    href: "/desenhos",
    image: "/dev-cartoon-network/home/desenho-1.jpg",
  },
  {
    name: "Jovens Titãs em Ação!",
    query: "teen titans go vertical poster",
    href: "/desenhos",
    image: "/dev-cartoon-network/home/desenho-2.jpg",
  },
  {
    name: "Ursos sem Curso",
    query: "we bare bears vertical poster",
    href: "/desenhos",
    image: "/dev-cartoon-network/home/desenho-3.png",
  },
  {
    name: "Steven Universo",
    query: "steven universe vertical poster",
    href: "/desenhos",
    image: "/dev-cartoon-network/home/desenho-4.jpg",
  },
  {
    name: "Hora de Aventura",
    query: "adventure time vertical poster",
    href: "/desenhos",
    image: "/dev-cartoon-network/home/desenho-5.jpg",
  },
  {
    name: "Clarêncio, o Otimista",
    query: "clarence cartoon vertical poster",
    href: "/desenhos",
    image: "/dev-cartoon-network/home/desenho-6.jpg",
  },
];

export const newEpisodes = [
  {
    show: "Jovens Titãs em Ação!",
    title: "Uma Piada que Envergonha o Superman",
    query: "teen titans go sandwich episode still",
    href: "https://www.youtube.com/watch?v=UgeHHquq07Q",
    image: "/dev-cartoon-network/home/new-ep-1.jpg",
  },
  {
    show: "O Mundo de Craig",
    title: "Uma Grande Aventura na Lavanderia",
    query: "craig of the creek treasure episode still",
    href: "https://www.youtube.com/watch?v=3t5ot7es6vo",
    image: "/dev-cartoon-network/home/new-ep-2.jpg",
  },
  {
    show: "Drama Total Kids",
    title: "Aventuras em uma Creche Muito Especial",
    query: "apple and onion city episode still",
    href: "https://www.youtube.com/watch?v=COjBXggCfWw",
    image: "/dev-cartoon-network/home/new-ep-3.jpg",
  },
  {
    show: "Irmão do Jorel",
    title: "Irmão de Jorel e seu Amor Impossível",
    query: "apple and onion city episode still",
    href: "https://www.youtube.com/watch?v=jeobdH-KUVg",
    image: "/dev-cartoon-network/home/new-ep-4.jpg",
  },
  {
    show: "Hora de Aventura",
    title: "Finn e Jake: Grandes Amigos com Personalidades Opostas",
    query: "Outra Semana no Cartoon Rosquinhas Cartoon Network Brasil",
    href: "https://www.youtube.com/watch?v=0ZMbqTPk5cs",
    image: "/dev-cartoon-network/home/new-ep-5.jpg",
  },
];

export const showsData = [
  {
    id: "gumball",
    name: "O Incrível Mundo de Gumball",
    posterQuery: "the amazing world of gumball vertical poster",
    bannerQuery: "the amazing world of gumball wide banner",
    description:
      "Acompanhe as desventuras de Gumball Watterson, um gato azul de 12 anos, e seu melhor amigo Darwin, um peixe dourado que virou seu irmão adotivo. Juntos, eles causam todo tipo de confusão na cidade de Elmore.",
    characters: [
      {
        name: "Gumball",
        query: "gumball watterson character",
        char: "/dev-cartoon-network/desenhos/gumball/char-gumball.png",
      },
      {
        name: "Darwin",
        query: "darwin watterson character",
        char: "/dev-cartoon-network/desenhos/gumball/char-darwin.png",
      },
      {
        name: "Anais",
        query: "anais watterson character",
        char: "/dev-cartoon-network/desenhos/gumball/char-anais.png",
      },
      {
        name: "Nicole",
        query: "nicole watterson character",
        char: "/dev-cartoon-network/desenhos/gumball/char-nicole.png",
      },
      {
        name: "Ricardo",
        query: "richard watterson character",
        char: "/dev-cartoon-network/desenhos/gumball/char-ricardo.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/gumball/show-gumball.jpg",
    banner: "/dev-cartoon-network/desenhos/gumball/show-banner-gumball.jpeg",
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
      {
        name: "Finn",
        query: "finn the human character",
        char: "/dev-cartoon-network/desenhos/hora-de-aventura/char-finn.png",
      },
      {
        name: "Jake",
        query: "jake the dog character",
        char: "/dev-cartoon-network/desenhos/hora-de-aventura/char-jake.png",
      },
      {
        name: "Marceline",
        query: "marceline the vampire queen character",
        char: "/dev-cartoon-network/desenhos/hora-de-aventura/char-marceline.png",
      },
      {
        name: "BMO",
        query: "bmo the hero character",
        char: "/dev-cartoon-network/desenhos/hora-de-aventura/char-bmo.png",
      },
      {
        name: "Rei Gelado",
        query: "ice king character",
        char: "/dev-cartoon-network/desenhos/hora-de-aventura/char-rei-gelado.png",
      },
      {
        name: "Princesa Jujuba",
        query: "princess bubblegum character",
        char: "/dev-cartoon-network/desenhos/hora-de-aventura/char-princesa-jujuba.png",
      },
      {
        name: "Princesa Caroço",
        query: "princess lump character",
        char: "/dev-cartoon-network/desenhos/hora-de-aventura/char-princesa-caroco.png",
      },
      {
        name: "Princesa de Fogo",
        query: "princess of fire character",
        char: "/dev-cartoon-network/desenhos/hora-de-aventura/char-princesa-de-fogo.png",
      },
    ],
    image:
      "/dev-cartoon-network/desenhos/hora-de-aventura/show-hora-de-aventura.jpg",
    banner:
      "/dev-cartoon-network/desenhos/hora-de-aventura/show-banner-hora-de-aventura.jpg",
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
      {
        name: "Steven",
        query: "steven universe character",
        char: "/dev-cartoon-network/desenhos/steven-universo/char-steven.png",
      },
      {
        name: "Garnet",
        query: "garnet steven universe character",
        char: "/dev-cartoon-network/desenhos/steven-universo/char-garnet.png",
      },
      {
        name: "Ametista",
        query: "amethyst steven universe character",
        char: "/dev-cartoon-network/desenhos/steven-universo/char-ametista.png",
      },
      {
        name: "Pérola",
        query: "pearl steven universe character",
        char: "/dev-cartoon-network/desenhos/steven-universo/char-perola.png",
      },
    ],
    image:
      "/dev-cartoon-network/desenhos/steven-universo/show-steven-universo.jpg",
    banner:
      "/dev-cartoon-network/desenhos/steven-universo/show-banner-steven-universo.jpg",
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
      {
        name: "Robin",
        query: "robin teen titans go character",
        char: "/dev-cartoon-network/desenhos/jovens-titas/char-robin.png",
      },
      {
        name: "Estelar",
        query: "starfire teen titans go character",
        char: "/dev-cartoon-network/desenhos/jovens-titas/char-estelar.png",
      },
      {
        name: "Ciborgue",
        query: "cyborg teen titans go character",
        char: "/dev-cartoon-network/desenhos/jovens-titas/char-ciborgue.png",
      },
      {
        name: "Ravena",
        query: "raven teen titans go character",
        char: "/dev-cartoon-network/desenhos/jovens-titas/char-ravena.png",
      },
      {
        name: "Mutano",
        query: "beast boy teen titans go character",
        char: "/dev-cartoon-network/desenhos/jovens-titas/char-mutano.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/jovens-titas/show-jovens-titas.jpg",
    banner:
      "/dev-cartoon-network/desenhos/jovens-titas/show-banner-jovens-titas.jpeg",
    details: {
      creator: "Aaron Horvath, Michael Jelenic",
      year: "2013–presente",
      episodes: "390+",
    },
  },
  {
    id: "we_bare_bears",
    name: "Ursos sem Curso",
    posterQuery: "we bare bears vertical poster",
    bannerQuery: "we bare bears wide banner",
    description:
      "Pardo, Panda e Polar são três irmãos ursos tentando se enturmar na sociedade humana da Baía de São Francisco. Eles fazem de tudo para conseguir comida, amigos e fama na internet.",
    characters: [
      {
        name: "Pardo",
        query: "grizzly we bare bears character",
        char: "/dev-cartoon-network/desenhos/ursos/char-pardo.png",
      },
      {
        name: "Panda",
        query: "panda we bare bears character",
        char: "/dev-cartoon-network/desenhos/ursos/char-panda.png",
      },
      {
        name: "Polar",
        query: "ice bear we bare bears character",
        char: "/dev-cartoon-network/desenhos/ursos/char-polar.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/ursos/show-ursos.jpg",
    banner: "/dev-cartoon-network/desenhos/ursos/show-banner-ursos.jpg",
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
      {
        name: "Mordecai",
        query: "mordecai regular show",
        char: "/dev-cartoon-network/desenhos/apenas-um-show/char-mordecai.png",
      },
      {
        name: "Rigby",
        query: "rigby regular show",
        char: "/dev-cartoon-network/desenhos/apenas-um-show/char-rigby.png",
      },
      {
        name: "Margaret",
        query: "margaret regular show",
        char: "/dev-cartoon-network/desenhos/apenas-um-show/char-margaret.png",
      },
      {
        name: "Musculoso",
        query: "musculoso regular show",
        char: "/dev-cartoon-network/desenhos/apenas-um-show/char-musculoso.png",
      },
      {
        name: "Benson",
        query: "benson regular show",
        char: "/dev-cartoon-network/desenhos/apenas-um-show/char-benson.png",
      },
      {
        name: "Pairulito",
        query: "pairulito regular show",
        char: "/dev-cartoon-network/desenhos/apenas-um-show/char-pairulito.png",
      },
      {
        name: "Saltitão",
        query: "saltitão regular show",
        char: "/dev-cartoon-network/desenhos/apenas-um-show/char-saltitao.png",
      },
    ],
    image:
      "/dev-cartoon-network/desenhos/apenas-um-show/show-apenas-um-show.jpg",
    banner:
      "/dev-cartoon-network/desenhos/apenas-um-show/show-banner-apenas-um-show.jpg",
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
      {
        name: "Dexter",
        query: "dexter cartoon character",
        char: "/dev-cartoon-network/desenhos/dexter/char-dexter.png",
      },
      {
        name: "Dee Dee",
        query: "dee dee cartoon character",
        char: "/dev-cartoon-network/desenhos/dexter/char-dee-dee.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/dexter/show-dexter.jpg",
    banner: "/dev-cartoon-network/desenhos/dexter/show-banner-dexter.jpg",
    details: {
      creator: "Genndy Tartakovsky",
      year: "1996–2003",
      episodes: "78",
    },
  },
  {
    id: "powerpuff_girls",
    name: "As Meninas Superpoderosas",
    posterQuery: "powerpuff girls vertical poster",
    bannerQuery: "powerpuff girls wide banner",
    description:
      "Florzinha, Lindinha e Docinho são três meninas com superpoderes que defendem a cidade de Townsville de vilões e monstros.",
    characters: [
      {
        name: "Florzinha",
        query: "blossom powerpuff girls",
        char: "/dev-cartoon-network/desenhos/superpoderosas/char-florzinha.png",
      },
      {
        name: "Lindinha",
        query: "bubbles powerpuff girls",
        char: "/dev-cartoon-network/desenhos/superpoderosas/char-lindinha.png",
      },
      {
        name: "Docinho",
        query: "buttercup powerpuff girls",
        char: "/dev-cartoon-network/desenhos/superpoderosas/char-docinho.png",
      },
      {
        name: "Professor Utônio",
        query: "father of girls",
        char: "/dev-cartoon-network/desenhos/superpoderosas/char-professor-utonio.png",
      },
      {
        name: "Macaco Louco",
        query: "crazy monkey character",
        char: "/dev-cartoon-network/desenhos/superpoderosas/char-macaco-louco.png",
      },
    ],
    image:
      "/dev-cartoon-network/desenhos/superpoderosas/show-superpoderosas.jpg",
    banner:
      "/dev-cartoon-network/desenhos/superpoderosas/show-banner-superpoderosas.jpg",
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
      {
        name: "Ben Tennyson",
        query: "ben tennyson",
        char: "/desenhos/ben-10/char-ben.png",
      },
      {
        name: "Gwen Tennyson",
        query: "gwen tennyson",
        char: "/dev-cartoon-network/desenhos/ben-10/char-gwen.png",
      },
      {
        name: "Max Tennyson",
        query: "max tennyson",
        char: "/dev-cartoon-network/desenhos/ben-10/char-max.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/ben-10/show-ben-10.jpg",
    banner: "/dev-cartoon-network/desenhos/ben-10/show-banner-ben-10.jpeg",
    details: {
      creator: "Man of Actbanner-ion",
      year: "2005–2008",
      episodes: "52",
    },
  },
  {
    id: "samurai_jack",
    name: "Samurai Jack",
    posterQuery: "samurai jack vertical poster",
    bannerQuery: "samurai jack wide banner",
    description:
      "Um samurai é enviado para um futuro distópico governado pelo demônio Abu. Ele busca uma maneira de voltar ao passado para destruir o mal.",
    characters: [
      {
        name: "Jack",
        query: "samurai jack character",
        char: "/dev-cartoon-network/desenhos/samurai-jack/char-samurai-jack.png",
      },
      {
        name: "Abu",
        query: "aku samurai jack",
        char: "/dev-cartoon-network/desenhos/samurai-jack/char-abu.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/samurai-jack/show-samurai-jack.jpg",
    banner:
      "/dev-cartoon-network/desenhos/samurai-jack/show-banner-samurai-jack.jpg",
    details: {
      creator: "Genndy Tartakovsky",
      year: "2001–2017",
      episodes: "62",
    },
  },
  {
    id: "johnny_bravo",
    name: "Johnny Bravo",
    posterQuery: "johnny bravo vertical poster",
    bannerQuery: "johnny bravo wide banner",
    description:
      "Johnny Bravo é um homem musculoso e vaidoso que tenta, sem sucesso, conquistar mulheres com seu jeito peculiar.",
    characters: [
      {
        name: "Johnny Bravo",
        query: "johnny bravo character",
        char: "/dev-cartoon-network/desenhos/johnny-bravo/char-johnny-bravo.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/johnny-bravo/show-johnny-bravo.jpg",
    banner:
      "/dev-cartoon-network/desenhos/johnny-bravo/show-banner-johnny-bravo.jpg",
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
      {
        name: "Coragem",
        query: "courage the cowardly dog",
        char: "/dev-cartoon-network/desenhos/coragem/char-coragem.png",
      },
      {
        name: "Muriel",
        query: "muriel bagge",
        char: "/dev-cartoon-network/desenhos/coragem/char-muriel.png",
      },
      {
        name: "Eustácio",
        query: "eustace bagge",
        char: "/dev-cartoon-network/desenhos/coragem/char-eustacio.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/coragem/show-coragem.jpg",
    banner: "/dev-cartoon-network/desenhos/coragem/show-banner-coragem.jpeg",
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
      {
        name: "Craig",
        query: "craig williams character",
        char: "/dev-cartoon-network/desenhos/craig/char-craig.png",
      },
      {
        name: "Kelsey",
        query: "kelsey craig of the creek",
        char: "/dev-cartoon-network/desenhos/craig/char-kelsey.png",
      },
      {
        name: "J.P.",
        query: "jp craig of the creek",
        char: "/dev-cartoon-network/desenhos/craig/char-jp.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/craig/show-craig.jpg",
    banner: "/dev-cartoon-network/desenhos/craig/show-banner-craig.png",
    details: {
      creator: "Matt Burnett, Ben Levin",
      year: "2018–presente",
      episodes: "80+",
    },
  },
  {
    id: "total_drama_island",
    name: "Ilha dos Desafios",
    posterQuery: "total drama island vertical poster",
    bannerQuery: "total drama island wide banner",
    description:
      "Um grupo de adolescentes compete em um reality show em uma ilha abandonada, enfrentando desafios bizarros por um prêmio em dinheiro.",
    characters: [
      {
        name: "Chris McLean",
        query: "chris mclean total drama",
        char: "/dev-cartoon-network/desenhos/ilha/char-chris-mclean.png",
      },
      {
        name: "Chef Hatchet",
        query: "chef hatchet total drama",
        char: "/dev-cartoon-network/desenhos/ilha/char-chef-hatchet.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/ilha/show-ilha.jpg",
    banner: "/dev-cartoon-network/desenhos/ilha/show-banner-ilha.jpg",
    details: {
      creator: "Tom McGillis, Jennifer Pertsch",
      year: "2007–2008",
      episodes: "27",
    },
  },
  {
    id: "chowder",
    name: "Chowder",
    posterQuery: "chowder cartoon vertical poster",
    bannerQuery: "chowder cartoon wide banner",
    description:
      "Chowder é um jovem aprendiz de cozinheiro que vive na cidade de Marzipã e sempre se mete em encrencas culinárias.",
    characters: [
      {
        name: "Chowder",
        query: "chowder cartoon character",
        char: "/dev-cartoon-network/desenhos/chowder/char-chowder.png",
      },
      {
        name: "Mung Daal",
        query: "mung daal chowder",
        char: "/dev-cartoon-network/desenhos/chowder/char-mung-daal.png",
      },
      {
        name: "Truffles",
        query: "truffles cartoon character",
        char: "/dev-cartoon-network/desenhos/chowder/char-truffles.png",
      },
      {
        name: "Shnitzel",
        query: "shnitzel cartoon character",
        char: "/dev-cartoon-network/desenhos/chowder/char-shnitzel.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/chowder/show-chowder.jpg",
    banner: "/dev-cartoon-network/desenhos/chowder/show-banner-chowder.jpg",
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
      {
        name: "Mac",
        query: "mac fosters home",
        char: "/dev-cartoon-network/desenhos/mansao-foster/char-mac.png",
      },
      {
        name: "Bloo",
        query: "bloo fosters home",
        char: "/dev-cartoon-network/desenhos/mansao-foster/char-bloo.png",
      },
      {
        name: "Frankie Foster",
        query: "frankie fosters home",
        char: "/dev-cartoon-network/desenhos/mansao-foster/char-frankie-foster.png",
      },
      {
        name: "Minguado",
        query: "minguado fosters home",
        char: "/dev-cartoon-network/desenhos/mansao-foster/char-minguado.png",
      },
      {
        name: "Eduardo",
        query: "eduardo fosters home",
        char: "/dev-cartoon-network/desenhos/mansao-foster/char-eduardo.png",
      },
      {
        name: "Coco",
        query: "coco fosters home",
        char: "/dev-cartoon-network/desenhos/mansao-foster/char-coco.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/mansao-foster/show-mansao-foster.jpg",
    banner:
      "/dev-cartoon-network/desenhos/mansao-foster/show-banner-mansao-foster.jpg",
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
      {
        name: "Mao Mao",
        query: "mao mao character",
        char: "/dev-cartoon-network/desenhos/maomao/char-maomao.png",
      },
      {
        name: "Adorabat",
        query: "adorabat character",
        char: "/dev-cartoon-network/desenhos/maomao/char-adorabat.png",
      },
      {
        name: "Texuguloso",
        query: "texuguloso character",
        char: "/dev-cartoon-network/desenhos/maomao/char-texuguloso.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/maomao/show-maomao.jpg",
    banner: "/dev-cartoon-network/desenhos/maomao/show-banner-maomao.jpg",
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
      {
        name: "K.O.",
        query: "ko ok ko character",
        char: "/dev-cartoon-network/desenhos/ok-ko/char-ko.png",
      },
      {
        name: "Enid",
        query: "enid ok ko character",
        char: "/dev-cartoon-network/desenhos/ok-ko/char-enid.png",
      },
      {
        name: "Rad",
        query: "radicles ok ko character",
        char: "/dev-cartoon-network/desenhos/ok-ko/char-rad.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/ok-ko/show-ok-ko.jpg",
    banner: "/dev-cartoon-network/desenhos/ok-ko/show-banner-ok-ko.jpg",
    details: {
      creator: "Ian Jones-Quartey",
      year: "2017–2019",
      episodes: "112",
    },
  },
  {
    id: "infinity_train",
    name: "Trem Infinito",
    posterQuery: "infinity train vertical poster",
    bannerQuery: "infinity train wide banner",
    description:
      "Passageiros com problemas emocionais embarcam em um trem misterioso com vagões infinitos, cada um contendo um universo diferente.",
    characters: [
      {
        name: "Tulip Olsen",
        query: "tulip olsen infinity train",
        char: "/dev-cartoon-network/desenhos/trem-infinito/char-tulip-olsen.png",
      },
      {
        name: "One-One",
        query: "one-one infinity train",
        char: "/dev-cartoon-network/desenhos/trem-infinito/char-one-one.png",
      },
      {
        name: "Atticus",
        query: "atticus infinity train",
        char: "/dev-cartoon-network/desenhos/trem-infinito/char-atticus.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/trem-infinito/show-trem-infinito.jpg",
    banner:
      "/dev-cartoon-network/desenhos/trem-infinito/show-banner-trem-infinito.jpg",
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
      {
        name: "Clarêncio",
        query: "clarence wendle",
        char: "/dev-cartoon-network/desenhos/clarencio/char-clarencio.png",
      },
      {
        name: "Jeff",
        query: "jeff randell",
        char: "/dev-cartoon-network/desenhos/clarencio/char-jeff.png",
      },
      {
        name: "Sumo",
        query: "ryan sumo",
        char: "/dev-cartoon-network/desenhos/clarencio/char-sumo.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/clarencio/show-clarencio.jpg",
    banner: "/dev-cartoon-network/desenhos/clarencio/show-banner-clarencio.jpg",
    details: { creator: "Skyler Page", year: "2014–2018", episodes: "130" },
  },
  // New shows added by user request
  {
    id: "knd",
    name: "KND: A Turma do Bairro",
    posterQuery: "codename kids next door vertical poster",
    bannerQuery: "codename kids next door wide banner",
    description:
      "Um grupo de cinco crianças de 10 anos opera a partir de uma casa na árvore de alta tecnologia, lutando contra a tirania de adultos e adolescentes.",
    characters: [
      {
        name: "Número 1",
        query: "Número 1 from KND",
        char: "/dev-cartoon-network/desenhos/knd/char-numero-1.png",
      },
      {
        name: "Número 2",
        query: "Número 2 from KND",
        char: "/dev-cartoon-network/desenhos/knd/char-numero-2.png",
      },
      {
        name: "Número 3",
        query: "Número 3 from KND",
        char: "/dev-cartoon-network/desenhos/knd/char-numero-3.png",
      },
      {
        name: "Número 4",
        query: "Número 4 from KND",
        char: "/dev-cartoon-network/desenhos/knd/char-numero-4.png",
      },
      {
        name: "Número 5",
        query: "Número 5 from KND",
        char: "/dev-cartoon-network/desenhos/knd/char-numero-5.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/knd/show-knd.jpg",
    banner: "/dev-cartoon-network/desenhos/knd/show-banner-knd.jpg",
    details: { creator: "Tom Warburton", year: "2002–2008", episodes: "78" },
  },
  {
    id: "cow_and_chicken",
    name: "A Vaca e o Frango",
    posterQuery: "cow and chicken vertical poster",
    bannerQuery: "cow and chicken wide banner",
    description:
      "As aventuras surreais de uma vaca e um frango que são irmãos, e seus encontros com o cara vermelho sem calças.",
    characters: [
      {
        name: "Vaca",
        query: "Cow from Cow and Chicken",
        char: "/dev-cartoon-network/desenhos/vaca-e-frango/char-vaca.png",
      },
      {
        name: "Frango",
        query: "Chicken from Cow and Chicken",
        char: "/dev-cartoon-network/desenhos/vaca-e-frango/char-frango.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/vaca-e-frango/show-vaca-e-frango.jpg",
    banner:
      "/dev-cartoon-network/desenhos/vaca-e-frango/show-banner-vaca-e-frango.jpg",
    details: { creator: "David Feiss", year: "1997–1999", episodes: "52" },
  },
  {
    id: "billy_and_mandy",
    name: "As Terríveis Aventuras de Billy e Mandy",
    posterQuery: "the grim adventures of billy and mandy vertical poster",
    bannerQuery: "the grim adventures of billy and mandy wide banner",
    description:
      "Duas crianças, o estúpido Billy e a cínica Mandy, forçam o Ceifador Sinistro a ser seu melhor amigo para sempre após vencerem uma aposta.",
    characters: [
      {
        name: "Billy",
        query: "Billy from Billy and Mandy",
        char: "/dev-cartoon-network/desenhos/billy-e-mandy/char-billy.png",
      },
      {
        name: "Mandy",
        query: "Mandy from Billy and Mandy",
        char: "/dev-cartoon-network/desenhos/billy-e-mandy/char-mandy.png",
      },
      {
        name: "Puro Osso",
        query: "Grim from Billy and Mandy",
        char: "/dev-cartoon-network/desenhos/billy-e-mandy/char-puro-osso.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/billy-e-mandy/show-billy-e-mandy.jpg",
    banner:
      "/dev-cartoon-network/desenhos/billy-e-mandy/show-banner-billy-e-mandy.jpg",
    details: { creator: "Maxwell Atoms", year: "2001–2007", episodes: "78" },
  },
  {
    id: "my_gym_partner_is_a_monkey",
    name: "Meu Amigo da Escola é um Macaco",
    posterQuery: "my gym partners a monkey vertical poster",
    bannerQuery: "my gym partners a monkey wide banner",
    description:
      "Por um erro de digitação, Adam Lyon, um humano, é transferido para a Escola de Ginástica para Animais Charles Darwin, onde faz amizade com o macaco Jake.",
    characters: [
      {
        name: "Adam Lyon",
        query: "Adam Lyon from My Gym Partner's a Monkey",
        char: "/dev-cartoon-network/desenhos/meu-amigo-da-escola/char-adam-lyon.png",
      },
      {
        name: "Jake Spidermonkey",
        query: "Jake Spidermonkey from My Gym Partner's a Monkey",
        char: "/dev-cartoon-network/desenhos/meu-amigo-da-escola/char-jake-macaco.png",
      },
    ],
    image:
      "/dev-cartoon-network/desenhos/meu-amigo-da-escola/show-meu-amigo-da-escola.jpg",
    banner:
      "/dev-cartoon-network/desenhos/meu-amigo-da-escola/show-banner-meu-amigo-da-escola.jpg",
    details: {
      creator: "Tim Cahill, Julie McNally Cahill",
      year: "2005–2008",
      episodes: "56",
    },
  },
  {
    id: "camp_lazlo",
    name: "O Acampamento de Lazlo",
    posterQuery: "camp lazlo vertical poster",
    bannerQuery: "camp lazlo wide banner",
    description:
      "Lazlo, um macaco-aranha otimista, e seus amigos Raj e Clam vivem aventuras no Acampamento Rim, um acampamento de escoteiros não muito organizado.",
    characters: [
      {
        name: "Lazlo",
        query: "Lazlo from Camp Lazlo",
        char: "/dev-cartoon-network/desenhos/lazlo/char-lazlo.png",
      },
      {
        name: "Raj",
        query: "Raj from Camp Lazlo",
        char: "/dev-cartoon-network/desenhos/lazlo/char-raj.png",
      },
      {
        name: "Clam",
        query: "Clam from Camp Lazlo",
        char: "/dev-cartoon-network/desenhos/lazlo/char-clam.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/lazlo/show-lazlo.jpg",
    banner: "/dev-cartoon-network/desenhos/lazlo/show-banner-lazlo.jpg",
    details: { creator: "Joe Murray", year: "2005–2008", episodes: "61" },
  },
  {
    id: "irmao_do_jorel",
    name: "Irmão do Jorel",
    posterQuery: "irmao do jorel vertical poster",
    bannerQuery: "irmao do jorel wide banner",
    description:
      "A história de um garoto tímido e sem nome que é sempre ofuscado pela popularidade de seu irmão mais velho, Jorel. Ele tenta encontrar sua própria identidade.",
    characters: [
      {
        name: "Irmão do Jorel",
        query: "Irmão do Jorel character",
        char: "/dev-cartoon-network/desenhos/irmao-do-jorel/char-irmao-do-jorel.png",
      },
      {
        name: "Jorel",
        query: "Jorel from Irmão do Jorel",
        char: "/dev-cartoon-network/desenhos/irmao-do-jorel/char-jorel.png",
      },
      {
        name: "Vovó Juju",
        query: "Vovó Juju from Irmão do Jorel",
        char: "/dev-cartoon-network/desenhos/irmao-do-jorel/char-vovo-juju.png",
      },
    ],
    image:
      "/dev-cartoon-network/desenhos/irmao-do-jorel/show-irmao-do-jorel.jpg",
    banner:
      "/dev-cartoon-network/desenhos/irmao-do-jorel/show-banner-irmao-do-jorel.jpg",
    details: {
      creator: "Juliano Enrico",
      year: "2014–presente",
      episodes: "104+",
    },
  },
  {
    id: "scooby_doo",
    name: "Scooby-Doo, Cadê Você!",
    posterQuery: "scooby doo where are you vertical poster",
    bannerQuery: "scooby doo where are you wide banner",
    description:
      "Quatro adolescentes e seu cão falante, Scooby-Doo, resolvem mistérios envolvendo criaturas supostamente sobrenaturais.",
    characters: [
      {
        name: "Scooby-Doo",
        query: "Scooby-Doo character",
        char: "/dev-cartoon-network/desenhos/scooby-doo/char-scooby-doo.png",
      },
      {
        name: "Salsicha",
        query: "Shaggy Rogers character",
        char: "/dev-cartoon-network/desenhos/scooby-doo/char-salsicha.png",
      },
      {
        name: "Fred",
        query: "Fred Jones character",
        char: "/dev-cartoon-network/desenhos/scooby-doo/char-fred.png",
      },
      {
        name: "Daphne",
        query: "Daphne Blake character",
        char: "/dev-cartoon-network/desenhos/scooby-doo/char-daphne.png",
      },
      {
        name: "Velma",
        query: "Velma Dinkley character",
        char: "/dev-cartoon-network/desenhos/scooby-doo/char-velma.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/scooby-doo/show-scooby-doo.jpg",
    banner:
      "/dev-cartoon-network/desenhos/scooby-doo/show-banner-scooby-doo.jpg",
    details: {
      creator: "Joe Ruby, Ken Spears",
      year: "1969–1970",
      episodes: "25",
    },
  },
  {
    id: "looney_tunes",
    name: "Looney Tunes",
    posterQuery: "looney tunes vertical poster",
    bannerQuery: "looney tunes wide banner",
    description:
      "As aventuras cômicas e caóticas de um elenco de personagens icônicos, incluindo Pernalonga, Patolino, Gaguinho e muitos outros.",
    characters: [
      {
        name: "Pernalonga",
        query: "Bugs Bunny character",
        char: "/dev-cartoon-network/desenhos/looney-tunes/char-pernalonga.png",
      },
      {
        name: "Patolino",
        query: "Daffy Duck character",
        char: "/dev-cartoon-network/desenhos/looney-tunes/char-patolino.png",
      },
      {
        name: "Gaguinho",
        query: "Porky Pig character",
        char: "/dev-cartoon-network/desenhos/looney-tunes/char-gaguinho.png",
      },
      {
        name: "Taz",
        query: "Tasmanian devil character",
        char: "/dev-cartoon-network/desenhos/looney-tunes/char-taz.png",
      },
      {
        name: "Frajola",
        query: "Sylvester the Cat character",
        char: "/dev-cartoon-network/desenhos/looney-tunes/char-frajola.png",
      },
      {
        name: "Piu-Piu",
        query: "Tweety Bird character",
        char: "/dev-cartoon-network/desenhos/looney-tunes/char-piu-piu.png",
      },
      {
        name: "Coyote",
        query: "Wile E. Coyote character",
        char: "/dev-cartoon-network/desenhos/looney-tunes/char-coyote.png",
      },
      {
        name: "Papa-Léguas",
        query: "Road Runner character",
        char: "/dev-cartoon-network/desenhos/looney-tunes/char-papa-leguas.png",
      },
      {
        name: "Marvin",
        query: "The Martian character",
        char: "/dev-cartoon-network/desenhos/looney-tunes/char-marvin.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/looney-tunes/show-looney-tunes.jpg",
    banner:
      "/dev-cartoon-network/desenhos/looney-tunes/show-banner-looney-tunes.jpg",
    details: { creator: "Vários", year: "1930–presente", episodes: "1000+" },
  },
  {
    id: "generator_rex",
    name: "Mutante Rex",
    posterQuery: "generator rex vertical poster",
    bannerQuery: "generator rex wide banner",
    description:
      "Rex é um adolescente que pode criar máquinas a partir de seu corpo. Ele trabalha para uma organização que combate mutantes perigosos chamados E.V.O.s.",
    characters: [
      {
        name: "Rex Salazar",
        query: "Rex Salazar from Generator Rex",
        char: "/dev-cartoon-network/desenhos/rex/char-rex.png",
      },
      {
        name: "Agente Seis",
        query: "Agent Six from Generator Rex",
        char: "/dev-cartoon-network/desenhos/rex/char-agente-seis.png",
      },
      {
        name: "Bobo Haha",
        query: "Bobo Haha from Generator Rex",
        char: "/dev-cartoon-network/desenhos/rex/char-bobo-haha.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/rex/show-rex.jpg",
    banner: "/dev-cartoon-network/desenhos/rex/show-banner-rex.jpg",
    details: { creator: "Man of Action", year: "2010–2013", episodes: "60" },
  },
  {
    id: "bakugan",
    name: "Bakugan: Guerreiros da Batalha",
    posterQuery: "bakugan battle brawlers vertical poster",
    bannerQuery: "bakugan battle brawlers wide banner",
    description:
      "Um grupo de amigos encontra cartas que caem do céu e se envolvem em um jogo de batalha usando criaturas místicas chamadas Bakugan.",
    characters: [
      {
        name: "Dan Kuso",
        query: "Dan Kuso from Bakugan",
        char: "/dev-cartoon-network/desenhos/bakugan/char-dan-kuso.png",
      },
      {
        name: "Shun Kazami",
        query: "Shun Kazami from Bakugan",
        char: "/dev-cartoon-network/desenhos/bakugan/char-shun-kazami.png",
      },
      {
        name: "Marucho Marukura",
        query: "Marucho Marukura from Bakugan",
        char: "/dev-cartoon-network/desenhos/bakugan/char-marucho-marukura.png",
      },
      {
        name: "Runo Misaki",
        query: "Runo Misaki from Bakugan",
        char: "/dev-cartoon-network/desenhos/bakugan/char-runo-misaki.png",
      },
      {
        name: "O Mascarado",
        query: "Mascarade from Bakugan",
        char: "/dev-cartoon-network/desenhos/bakugan/char-mascarado.png",
      },
    ],
    image: "/dev-cartoon-network/desenhos/bakugan/show-bakugan.jpg",
    banner: "/dev-cartoon-network/desenhos/bakugan/show-banner-bakugan.jpg",
    details: { creator: "Atsushi Maekawa", year: "2007–2012", episodes: "189" },
  },

  //New desenhos
  {
    id: "ed_edd_eddy",
    name: "Du, Dudu e Edu",
    posterQuery: "ed edd n eddy vertical poster",
    bannerQuery: "ed edd n eddy wide banner",
    description:
      "Três amigos trapaceiros vivem criando planos malucos para conseguir dinheiro e comprar balas de caramelo no subúrbio onde moram.",
    characters: [
      {
        name: "Du",
        query: "ed character",
        char: "/desenhos/ed-edd-eddy/char-du.png",
      },
      {
        name: "Dudu",
        query: "edd character",
        char: "/desenhos/ed-edd-eddy/char-dudu.png",
      },
      {
        name: "Edu",
        query: "eddy character",
        char: "/desenhos/ed-edd-eddy/char-edu.png",
      },
    ],
    image: "/desenhos/ed-edd-eddy/show-ed-edd-eddy.jpg",
    banner: "/desenhos/ed-edd-eddy/show-banner-ed-edd-eddy.jpg",
    details: { creator: "Danny Antonucci", year: "1999–2009", episodes: "130" },
  },
  {
    id: "eu_sou_o_maximo",
    name: "Eu Sou o Máximo",
    posterQuery: "johnny bravo vertical poster",
    bannerQuery: "johnny bravo wide banner",
    description:
      "Máximo é um sujeito musculoso, convencido e desajeitado que vive tentando conquistar mulheres — sempre sem sucesso. Com ajuda de seus amigos Babão e Bum de Fora, ele se envolve nas mais absurdas e engraçadas situações, misturando ação, comédia e muita confusão.",
    characters: [
      {
        name: "Máximo",
        query: "maximo character",
        char: "/desenhos/eu-sou-o-maximo/char-maximo.png",
      },
      {
        name: "Babão",
        query: "baboon character",
        char: "/desenhos/eu-sou-o-maximo/char-babao.png",
      },
      {
        name: "Bum de Fora",
        query: "the Red Guy character",
        char: "/desenhos/eu-sou-o-maximo/char-bum-de-fora.png",
      },
    ],
    image: "/desenhos/eu-sou-o-maximo/show-eu-sou-o-maximo.jpg",
    banner: "/desenhos/eu-sou-o-maximo/show-banner-eu-sou-o-maximo.jpg",
    details: { creator: "Van Partible", year: "1997–2004", episodes: "67" },
  },

  {
    id: "flapjack",
    name: "As Terríveis Aventuras de Flapjack",
    posterQuery: "the marvelous misadventures of flapjack vertical poster",
    bannerQuery: "the marvelous misadventures of flapjack wide banner",
    description:
      "Flapjack é um garoto criado por uma baleia falante, e junto com o Capitão Falange, embarca em aventuras perigosas em busca da Ilha Açucarada.",
    characters: [
      {
        name: "Flapjack",
        query: "flapjack character",
        char: "/desenhos/flapjack/char-flapjack.png",
      },
      {
        name: "Capitão Falange",
        query: "captain knuckles character",
        char: "/desenhos/flapjack/char-falange.png",
      },
      {
        name: "Bolha",
        query: "bubbie character",
        char: "/desenhos/flapjack/char-bolha.png",
      },
    ],
    image: "/desenhos/flapjack/show-flapjack.jpg",
    banner: "/desenhos/flapjack/show-banner-flapjack.jpg",
    details: { creator: "Thurop Van Orman", year: "2008–2010", episodes: "46" },
  },
  {
    id: "squirrel_boy",
    name: "Andy e Seu Esquilo",
    posterQuery: "squirrel boy vertical poster",
    bannerQuery: "squirrel boy wide banner",
    description:
      "Andy e seu excêntrico esquilo falante Rodney vivem diversas confusões enquanto tentam provar que sua amizade é inquebrável.",
    characters: [
      {
        name: "Andy",
        query: "andy squirrel boy",
        char: "/desenhos/squirrel-boy/char-andy.png",
      },
      {
        name: "Rodney",
        query: "rodney squirrel boy",
        char: "/desenhos/squirrel-boy/char-rodney.png",
      },
    ],
    image: "/desenhos/squirrel-boy/show-squirrel-boy.jpg",
    banner: "/desenhos/squirrel-boy/show-banner-squirrel-boy.jpg",
    details: { creator: "Everett Peck", year: "2006–2007", episodes: "26" },
  },
  {
    id: "time_squad",
    name: "Esquadrão do Tempo",
    posterQuery: "time squad cartoon vertical poster",
    bannerQuery: "time squad cartoon wide banner",
    description:
      "Um robô, um soldado e um órfão viajam no tempo para corrigir eventos históricos que saíram errado, garantindo o futuro da humanidade.",
    characters: [
      {
        name: "Otto",
        query: "otto time squad",
        char: "/desenhos/time-squad/char-otto.png",
      },
      {
        name: "Buck Tuddrussel",
        query: "buck time squad",
        char: "/desenhos/time-squad/char-buck.png",
      },
      {
        name: "Larry",
        query: "larry time squad",
        char: "/desenhos/time-squad/char-larry.png",
      },
    ],
    image: "/desenhos/time-squad/show-time-squad.jpg",
    banner: "/desenhos/time-squad/show-banner-time-squad.jpg",
    details: { creator: "Dave Wasson", year: "2001–2003", episodes: "26" },
  },
  {
    id: "young_justice",
    name: "Justiça Jovem",
    posterQuery: "young justice vertical poster",
    bannerQuery: "young justice wide banner",
    description:
      "Os jovens heróis da DC trabalham juntos como uma equipe secreta para missões perigosas, enquanto enfrentam dilemas pessoais e amadurecimento.",
    characters: [
      {
        name: "Robin",
        query: "robin young justice",
        char: "/desenhos/justica-jovem/char-robin.png",
      },
      {
        name: "Kid Flash",
        query: "kid flash young justice",
        char: "/desenhos/justica-jovem/char-kid-flash.png",
      },
      {
        name: "Miss Marte",
        query: "miss martian young justice",
        char: "/desenhos/justica-jovem/char-miss-marte.png",
      },
      {
        name: "Superboy",
        query: "superboy young justice",
        char: "/desenhos/justica-jovem/char-superboy.png",
      },
    ],
    image: "/desenhos/justica-jovem/show-justica-jovem.jpg",
    banner: "/desenhos/justica-jovem/show-banner-justica-jovem.jpg",
    details: {
      creator: "Greg Weisman, Brandon Vietti",
      year: "2010–presente",
      episodes: "98+",
    },
  },
  {
    id: "the_batman",
    name: "The Batman",
    posterQuery: "the batman animated series vertical poster",
    bannerQuery: "the batman animated series wide banner",
    description:
      "Nesta versão mais jovem do Cavaleiro das Trevas, Bruce Wayne ainda está se estabelecendo como Batman enquanto enfrenta vilões clássicos de Gotham.",
    characters: [
      {
        name: "Batman",
        query: "batman the batman animated",
        char: "/desenhos/the-batman/char-batman.png",
      },
      {
        name: "Coringa",
        query: "joker the batman animated",
        char: "/desenhos/the-batman/char-coringa.png",
      },
      {
        name: "Robin",
        query: "robin the batman animated",
        char: "/desenhos/the-batman/char-robin.png",
      },
    ],
    image: "/desenhos/the-batman/show-the-batman.jpg",
    banner: "/desenhos/the-batman/show-banner-the-batman.jpg",
    details: {
      creator: "Michael Goguen, Duane Capizzi",
      year: "2004–2008",
      episodes: "65",
    },
  },
  {
    id: "apple_onion",
    name: "Maçã e Cebola",
    posterQuery: "apple and onion vertical poster",
    bannerQuery: "apple and onion wide banner",
    description:
      "Maçã e Cebola são dois melhores amigos recém-chegados à cidade que vivem situações engraçadas e peculiares enquanto aprendem sobre amizade e comunidade.",
    characters: [
      {
        name: "Maçã",
        query: "apple apple and onion",
        char: "/desenhos/maca-cebola/char-maca.png",
      },
      {
        name: "Cebola",
        query: "onion apple and onion",
        char: "/desenhos/maca-cebola/char-cebola.png",
      },
    ],
    image: "/desenhos/maca-cebola/show-maca-cebola.jpg",
    banner: "/desenhos/maca-cebola/show-banner-maca-cebola.jpg",
    details: { creator: "George Gendi", year: "2018–2021", episodes: "76" },
  },
  {
    id: "hi_hi_puffy_amiyumi",
    name: "Hi Hi Puffy AmiYumi",
    posterQuery: "hi hi puffy amiyumi vertical poster",
    bannerQuery: "hi hi puffy amiyumi wide banner",
    description:
      "Inspirado na banda japonesa Puffy AmiYumi, o desenho mostra Ami e Yumi em aventuras malucas enquanto fazem turnês pelo mundo com seu produtor Kaz.",
    characters: [
      {
        name: "Ami",
        query: "ami puffy amiyumi",
        char: "/desenhos/hi-hi-puffy/char-ami.png",
      },
      {
        name: "Yumi",
        query: "yumi puffy amiyumi",
        char: "/desenhos/hi-hi-puffy/char-yumi.png",
      },
      {
        name: "Kaz",
        query: "kaz puffy amiyumi",
        char: "/desenhos/hi-hi-puffy/char-kaz.png",
      },
    ],
    image: "/desenhos/hi-hi-puffy/show-hi-hi-puffy.jpg",
    banner: "/desenhos/hi-hi-puffy/show-banner-hi-hi-puffy.jpg",
    details: { creator: "Sam Register", year: "2004–2006", episodes: "39" },
  },
  {
    id: "milo_lu_og",
    name: "Mike, Lu & Og",
    posterQuery: "mike lu and og vertical poster",
    bannerQuery: "mike lu and og wide banner",
    description:
      "Mike, uma garota moderna da cidade, vai morar em uma ilha remota onde vive aventuras com os nativos Lu e Og, enfrentando o choque cultural com humor.",
    characters: [
      {
        name: "Mike",
        query: "mike mike lu og",
        char: "/desenhos/mike-lu-og/char-mike.png",
      },
      {
        name: "Lu",
        query: "lu mike lu og",
        char: "/desenhos/mike-lu-og/char-lu.png",
      },
      {
        name: "Og",
        query: "og mike lu og",
        char: "/desenhos/mike-lu-og/char-og.png",
      },
    ],
    image: "/desenhos/mike-lu-og/show-mike-lu-og.jpg",
    banner: "/desenhos/mike-lu-og/show-banner-mike-lu-og.jpg",
    details: { creator: "Mikhail Shindel", year: "1999–2001", episodes: "26" },
  },
];

export const gamesData = [
  {
    id: "ben10_savage_pursuit",
    title: "Ben 10: Perseguição Selvagem",
    description:
      "Corra, pule e transforme-se nos alienígenas do Omnitrix para derrotar os inimigos e salvar o dia nesta aventura de plataforma.",
    imageQuery: "ben 10 platformer game jungle setting",
    category: "Ação",
    href: "#",
    image: "/dev-cartoon-network/jogos/game-1.webp",
  },
  {
    id: "samurai_jack_code",
    title: "Samurai Jack: Código do Samurai",
    description:
      "Empunhe sua espada mágica e enfrente os robôs de Abu em uma jornada épica para encontrar o caminho de volta ao passado.",
    imageQuery: "samurai jack fighting robots game",
    category: "Aventura",
    href: "#",
    image: "/dev-cartoon-network/jogos/game-2.jpg",
  },
  {
    id: "ppg_battle_him",
    title: "Meninas Superpoderosas: Batalha contra Ele",
    description:
      "Use os superpoderes de Florzinha, Lindinha e Docinho para lutar contra o vilão mais sinistro de Townsville, Ele.",
    imageQuery: "powerpuff girls fighting red demon game",
    category: "Ação",
    href: "#",
    image: "/dev-cartoon-network/jogos/game-3.jpg",
  },
  {
    id: "adventure_time_finn_bones",
    title: "Hora de Aventura: Finn e Ossos",
    description:
      "Navegue pelos mares, lute contra esqueletos piratas e encontre tesouros nesta aventura com Finn e Jake.",
    imageQuery: "adventure time pirate ship game",
    category: "Aventura",
    href: "#",
    image: "/dev-cartoon-network/jogos/game-4.jpg",
  },
  {
    id: "regular_show_fist_punch",
    title: "Apenas um Show: Soco de Punho",
    description:
      "Ajude Mordecai e Rigby a lutar contra inimigos em um clássico jogo de briga de rua para resgatar seus amigos.",
    imageQuery: "regular show beat em up game",
    category: "Luta",
    href: "#",
    image: "/dev-cartoon-network/jogos/game-5.png",
  },
  {
    id: "gumball_school_rush",
    title: "Gumball: Corrida na Escola",
    description:
      "Corra pelos corredores da Escola de Elmore, desvie de obstáculos e colete itens neste jogo de ritmo acelerado.",
    imageQuery: "gumball school hallway running game",
    category: "Corrida",
    href: "#",
    image: "/dev-cartoon-network/jogos/game-6.jpg",
  },
  {
    id: "dexter_runaway_robot",
    title: "Laboratório de Dexter: Robô em Fuga",
    description:
      "Controle o robô de Dexter para escapar dos perigos do laboratório enquanto Dee Dee tenta causar problemas.",
    imageQuery: "dexters lab robot escape game",
    category: "Quebra-cabeça",
    href: "#",
    image: "/dev-cartoon-network/jogos/game-7.jpg",
  },
  {
    id: "ed_edd_eddy_smash",
    title: "Du, Dudu e Edu: Pancadaria no Beco",
    description:
      "Use as invenções malucas dos Eds para competir contra as outras crianças do beco em desafios hilários.",
    imageQuery: "ed edd n eddy cul-de-sac game",
    category: "Esportes",
    href: "#",
    image: "/dev-cartoon-network/jogos/game-8.jpg",
  },
  {
    id: "courage_nightmare",
    title: "Coragem: Férias do Pesadelo",
    description:
      "Ajude Coragem a navegar por um hotel assustador e resolver quebra-cabeças para salvar Muriel de monstros.",
    imageQuery: "courage the cowardly dog scary hotel game",
    category: "Aventura",
    href: "#",
    image: "/dev-cartoon-network/jogos/game-9.jpg",
  },
  {
    id: "fosters_amazing_race",
    title: "Mansão Foster: Corrida Labiríntica",
    description:
      "Percorra os corredores da Mansão Foster, encontre amigos imaginários e complete tarefas antes que o tempo acabe.",
    imageQuery: "fosters home for imaginary friends maze game",
    category: "Quebra-cabeça",
    href: "#",
    image: "/dev-cartoon-network/jogos/game-10.png",
  },
  {
    id: "teen_titans_slash_justice",
    title: "Jovens Titãs: Golpe da Justiça",
    description:
      "Escolha seu Titã favorito e lute contra hordas de vilões em um jogo de ação e combate frenético.",
    imageQuery: "teen titans go fighting game",
    category: "Luta",
    href: "#",
    image: "/dev-cartoon-network/jogos/game-11.png",
  },
  {
    id: "steven_heap_of_trouble",
    title: "Steven Universo: Monte de Problemas",
    description:
      "Ajude Steven a empilhar itens e resolver quebra-cabeças baseados em física para limpar seu quarto.",
    imageQuery: "steven universe physics puzzle game",
    category: "Aventura",
    href: "#",
    image: "/dev-cartoon-network/jogos/game-12.jpg",
  },
  {
    id: "billy_mandy_grim_escape",
    title: "Billy & Mandy: Fuga do Submundo",
    description:
      "Ajude Billy e Mandy a escapar do submundo usando as habilidades do Puro Osso para superar armadilhas e derrotar criaturas sombrias.",
    imageQuery: "grim adventures of billy and mandy underworld platform game",
    category: "Aventura",
    href: "#",
    image: "/dev-cartoon-network/jogos/game-13.jpg",
  },
];

export const videosData = [
  {
    id: "gumball_funny_moments",
    title: "Grandes Momentos de Gumball",
    show: "O Incrível Mundo de Gumball",
    thumbnailQuery: "gumball and darwin laughing hysterically",
    duration: "14:38",
    youtubeUrl: "https://www.youtube.com/watch?v=WmPIPYYqLC8",
    image: "/dev-cartoon-network/videos/video-1.jpg",
  },
  {
    id: "adventure_time_bacon_pancakes",
    title: "Canção: Bacon Pancakes",
    show: "Hora de Aventura",
    thumbnailQuery: "jake the dog making bacon pancakes",
    duration: "3:28",
    youtubeUrl: "https://www.youtube.com/watch?v=dmOHqxrMTuw&t=27s",
    image: "/dev-cartoon-network/videos/video-2.jpg",
  },
  {
    id: "regular_show_best_of_benson",
    title: "O final mais épico de todos os finais ao som de Heroes",
    show: "Apenas um Show",
    thumbnailQuery: "benson from regular show yelling",
    duration: "3:31",
    youtubeUrl: "https://www.youtube.com/watch?v=muWvHpVrxPc",
    image: "/dev-cartoon-network/videos/video-3.jpg",
  },
  {
    id: "teen_titans_go_waffles",
    title: "Cancão: Waffles!",
    show: "Jovens Titãs em Ação!",
    thumbnailQuery: "cyborg and beast boy singing about waffles",
    duration: "1:45",
    youtubeUrl: "https://www.youtube.com/watch?v=6KE0VrVaAWU",
    image: "/dev-cartoon-network/videos/video-4.jpg",
  },
  {
    id: "steven_universe_stronger_than_you",
    title: "Canção: Mais Forte que Você",
    show: "Steven Universo",
    thumbnailQuery: "garnet from steven universe singing",
    duration: "2:51",
    youtubeUrl: "https://www.youtube.com/watch?v=ECt6xk3eEbU",
    image: "/dev-cartoon-network/videos/video-5.jpg",
  },
  {
    id: "we_bare_bears_burrito",
    title: "O Fofo Espirro do Panda",
    show: "Ursos sem Curso",
    thumbnailQuery: "grizzly bear hugging a giant burrito",
    duration: "3:36",
    youtubeUrl: "https://www.youtube.com/watch?v=iMU6lIm9OV8",
    image: "/dev-cartoon-network/videos/video-6.jpg",
  },
  {
    id: "powerpuff_girls_intro",
    title: "Abertura Estendida",
    show: "As Meninas Superpoderosas",
    thumbnailQuery: "powerpuff girls classic intro screen",
    duration: "1:59",
    youtubeUrl: "https://www.youtube.com/watch?v=rkrLS3gD2VM",
    image: "/dev-cartoon-network/videos/video-7.jpg",
  },
  {
    id: "dexters_lab_omelette_du_fromage",
    title: "Omelette du Fromage",
    show: "O Laboratório de Dexter",
    thumbnailQuery: "dexter saying omelette du fromage",
    duration: "1:40",
    youtubeUrl: "https://www.youtube.com/watch?v=rAxePCJrblM",
    image: "/dev-cartoon-network/videos/video-8.jpg",
  },
  {
    id: "courage_king_ramses",
    title: "A Maldição do Rei Ramsés",
    show: "Coragem, o Cão Covarde",
    thumbnailQuery: "king ramses curse from courage the cowardly dog",
    duration: "2:42",
    youtubeUrl: "https://www.youtube.com/watch?v=kKnC674-ZDU",
    image: "/dev-cartoon-network/videos/video-9.jpg",
  },
  {
    id: "ben_10_first_transformation",
    title: "Tudo Molhado",
    show: "Ben 10",
    thumbnailQuery: "ben 10 first transforming into heatblast",
    duration: "5:19",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "/dev-cartoon-network/videos/video-10.jpg",
  },
  {
    id: "samurai_jack_vs_shinobi",
    title: "Samurai Jack vs. Shinobi",
    show: "Samurai Jack",
    thumbnailQuery: "samurai jack fighting a robot ninja in the dark",
    duration: "3:56",
    youtubeUrl: "https://www.youtube.com/watch?v=Qp-L_Xei-Lg&t=12s",
    image: "/dev-cartoon-network/videos/video-11.jpg",
  },
  {
    id: "johnny_bravo_do_the_monkey",
    title: "Johnny Seja Mau",
    show: "Johnny Bravo",
    thumbnailQuery: "johnny bravo dancing with a monkey",
    duration: "1:29",
    youtubeUrl: "https://www.youtube.com/watch?v=_AVKJ6ExGGw",
    image: "/dev-cartoon-network/videos/video-12.jpg",
  },
];

export const ligaToonTeams = [
  {
    name: "Titãs de Jump City",
    logoQuery: "teen titans go logo",
    captain: "Robin",
    image: "/dev-cartoon-network/copa-toon/cp-1.png",
  },
  {
    name: "Guerreiros de Ooo",
    logoQuery: "adventure time logo",
    captain: "Finn",
    image: "/dev-cartoon-network/copa-toon/cp-2.png",
  },
  {
    name: "Elmore Streamers",
    logoQuery: "gumball logo",
    captain: "Gumball",
    image: "/dev-cartoon-network/copa-toon/cp-3.png",
  },
  {
    name: "Crystal Gems FC",
    logoQuery: "steven universe star logo",
    captain: "Garnet",
    image: "/dev-cartoon-network/copa-toon/cp-4.png",
  },
  {
    name: "Vila dos Heróis",
    logoQuery: "ben 10 logo",
    captain: "Ben Tennyson",
    image: "/dev-cartoon-network/copa-toon/cp-5.png",
  },
  {
    name: "Sombra do Medo",
    logoQuery: "billy e mandy logo",
    captain: "Puro Osso",
    image: "/dev-cartoon-network/copa-toon/cp-6.png",
  },
  {
    name: "Toon KND United",
    logoQuery: "knd a turma do bairro logo",
    captain: "Nº 1",
    image: "/dev-cartoon-network/copa-toon/cp-7.png",
  },
  {
    name: "Macacos da Escola",
    logoQuery: "meu amigo da escola é um macaco logo",
    captain: "Jake Spidermonkey",
    image: "/dev-cartoon-network/copa-toon/cp-8.png",
  },
  {
    name: "Patrulha Park Side",
    logoQuery: "craig of the creek logo",
    captain: "Craig",
    image: "/dev-cartoon-network/copa-toon/cp-9.png",
  },
  {
    name: "Liga Irmão do Jorel",
    logoQuery: "irmão do jorel logo",
    captain: "Irmão do Jorel",
    image: "/dev-cartoon-network/copa-toon/cp-10.png",
  },
];

export const climateTips = [
  {
    title: "Recicle seu Lixo",
    description:
      "Separe plástico, papel, metal e vidro. Pequenos gestos fazem uma grande diferença!",
    iconQuery: "recycle symbol green",
    characterQuery: "gumball watterson holding a recycling bin",
    image: "/dev-cartoon-network/campeoes-do-clima/cc-finn.png",
    icon: "/dev-cartoon-network/campeoes-do-clima/cc-1.png",
  },
  {
    title: "Economize Água",
    description:
      "Feche a torneira ao escovar os dentes. Banhos mais curtos também ajudam o planeta!",
    iconQuery: "water drop blue",
    characterQuery: "jake the dog turning off a faucet",
    image: "/dev-cartoon-network/campeoes-do-clima/cc-jake.png",
    icon: "/dev-cartoon-network/campeoes-do-clima/cc-2.png",
  },
  {
    title: "Plante uma Árvore",
    description:
      "Árvores limpam o ar e são lares para animais. Que tal começar um pequeno jardim?",
    iconQuery: "green tree simple",
    characterQuery: "steven universe planting a tree",
    image: "/dev-cartoon-network/campeoes-do-clima/cc-princesa-jujuba.png",
    icon: "/dev-cartoon-network/campeoes-do-clima/cc-3.png",
  },
  {
    title: "Use Menos Energia",
    description:
      "Apague as luzes ao sair de um cômodo e desligue aparelhos da tomada.",
    iconQuery: "lightning bolt yellow",
    characterQuery: "blossom powerpuff girls turning off a light switch",
    image: "/dev-cartoon-network/campeoes-do-clima/cc-princesa-caroco.png",
    icon: "/dev-cartoon-network/campeoes-do-clima/cc-4.png",
  },
];

export const appsData = [
  {
    name: "Cartoon Network Arcade",
    image: "/dev-cartoon-network/aplicacoes/app-1.png",
    description:
      "Se divirta com minigames dos seus desenhos favoritos como Ben 10, Gumball, Hora de Aventura e muito mais. jogue, colecione figurinhas e descubra surpresas em um só lugar!",
    iconQuery: "colorful arcade app icon",
    screenshots: [
      "/dev-cartoon-network/aplicacoes/app-1-1.jpg",
      "/dev-cartoon-network/aplicacoes/app-1-2.jpeg",
      "/dev-cartoon-network/aplicacoes/app-1-3.jpg",
    ],
    ios_href:
      "https://www.warnerbros.com/games-and-apps/cartoon-network-arcade",
    android_href:
      "https://www.warnerbros.com/games-and-apps/cartoon-network-arcade",
  },
  {
    name: "Copa Toon",
    image: "/dev-cartoon-network/aplicacoes/app-2.png",
    description:
      "Monte sua equipe dos sonhos com personagens como Darwin, Ravena e Jake, e dispute o maior torneio da Copa Toon! Domine habilidades, marque gols e lidere sua equipe rumo ao topo da tabela!",
    iconQuery: "soccer ball cartoon app icon",
    screenshots: [
      "/dev-cartoon-network/aplicacoes/app-2-1.jpg",
      "/dev-cartoon-network/aplicacoes/app-2-2.jpg",
      "/dev-cartoon-network/aplicacoes/app-2-3.jpg",
    ],
    ios_href:
      "https://play.google.com/store/apps/details?id=com.turner.tooncup&hl=pt_BR",
    android_href:
      "https://play.google.com/store/apps/details?id=com.turner.tooncup&hl=pt_BR",
  },
  {
    name: "Cartoon Network App",
    image: "/dev-cartoon-network/aplicacoes/app-3.png",
    description:
      "O app Cartoon Network reúne os melhores episódios do Cartoon Network e Cartoonito, disponíveis no dia seguinte à exibição, além de minisódios divertidos em um só lugar!",
    iconQuery: "microphone app icon",
    screenshots: [
      "/dev-cartoon-network/aplicacoes/app-3-1.png",
      "/dev-cartoon-network/aplicacoes/app-3-2.png",
      "/dev-cartoon-network/aplicacoes/app-3-3.png",
    ],
    ios_href:
      "https://play.google.com/store/apps/details?id=com.turner.cnvideoapp&hl=pt_BR",
    android_href:
      "https://play.google.com/store/apps/details?id=com.turner.cnvideoapp&hl=pt_BR",
  },
  {
    name: "Ben 10: Alien Evolution",
    image: "/dev-cartoon-network/aplicacoes/app-4.jpeg",
    description:
      "Psyphon e seus alienígenas ameaçam Undertown, e Ben precisa vencê-los! Supere obstáculos, colete poderes e use o Omnitrix para se transformar e enfrentar os inimigos. Ajude Ben a salvar a cidade!",
    iconQuery: "ben 10 omnitrix app icon",
    screenshots: [
      "/dev-cartoon-network/aplicacoes/app-4-1.png",
      "/dev-cartoon-network/aplicacoes/app-4-2.png",
      "/dev-cartoon-network/aplicacoes/app-4-3.png",
    ],
    ios_href:
      "https://play.google.com/store/apps/details?id=com.globalfun.ben10ae.google",
    android_href:
      "https://play.google.com/store/apps/details?id=com.globalfun.ben10ae.google",
  },
  {
    name: "Gumball Ghoststory!",
    image: "/dev-cartoon-network/aplicacoes/app-5.png",
    description:
      "Fantasmas invadiram Elmore, e Gumball e Darwin precisam usar aspiradores especiais para resgatar seus amigos em locais como a escola, o parque e sua casa.",
    iconQuery: "ben 10 omnitrix app icon",
    screenshots: [
      "/dev-cartoon-network/aplicacoes/app-5-1.jpg",
      "/dev-cartoon-network/aplicacoes/app-5-2.jpeg",
      "/dev-cartoon-network/aplicacoes/app-5-3.jpg",
    ],
    ios_href:
      "https://play.google.com/store/apps/details?id=com.globalfun.gumghost.google&hl=pt_BR",
    android_href:
      "https://play.google.com/store/apps/details?id=com.globalfun.gumghost.google&hl=pt_BR",
  },
  {
    name: "Clarence For President",
    image: "/dev-cartoon-network/aplicacoes/app-6.png",
    description:
      "Clarence quer ser presidente da classe e precisa derrotar seus colegas rivais. Ajude-o a explorar a escola, a vizinhança e o parque, coletando moedas, power-ups e vencendo desafios para conquistar a eleição!",
    iconQuery: "ben 10 omnitrix app icon",
    screenshots: [
      "/dev-cartoon-network/aplicacoes/app-6-1.jpg",
      "/dev-cartoon-network/aplicacoes/app-6-2.jpg",
      "/dev-cartoon-network/aplicacoes/app-6-3.jpg",
    ],
    ios_href:
      "https://play.google.com/store/apps/details/Clarence_for_President?id=com.globalfun.clarence.google&hl=pt_BR",
    android_href:
      "https://play.google.com/store/apps/details/Clarence_for_President?id=com.globalfun.clarence.google&hl=pt_BR",
  },
  {
    name: "Bloons Adventure Time TD",
    image: "/dev-cartoon-network/aplicacoes/app-7.png",
    description:
      "Os bloons invadiram a Terra de Ooo! Ajude Finn, Jake e seus aliados a estourá-los em Bloons Adventure Time TD, com heróis, armas e desafios em 50 mapas!",
    iconQuery: "ben 10 omnitrix app icon",
    screenshots: [
      "/dev-cartoon-network/aplicacoes/app-7-1.png",
      "/dev-cartoon-network/aplicacoes/app-7-2.jpeg",
      "/dev-cartoon-network/aplicacoes/app-7-3.jpeg",
    ],
    ios_href:
      "https://play.google.com/store/apps/details?id=com.ninjakiwi.btdadventuretime&hl=pt_BR",
    android_href:
      "https://play.google.com/store/apps/details?id=com.ninjakiwi.btdadventuretime&hl=pt_BR",
  },
  {
    name: "We Bare Bears Match3 Repairs",
    image: "/dev-cartoon-network/aplicacoes/app-8.jpeg",
    description:
      "Ajude Pardo, Panda e Polar em We Bare Bears: Match3 Repairs! Combine peças, vença desafios e personalize a caverna com reforços divertidos.",
    iconQuery: "ben 10 omnitrix app icon",
    screenshots: [
      "/dev-cartoon-network/aplicacoes/app-8-1.jpeg",
      "/dev-cartoon-network/aplicacoes/app-8-2.jpg",
      "/dev-cartoon-network/aplicacoes/app-8-3.jpg",
    ],
    ios_href:
      "https://play.google.com/store/apps/details?id=com.sundaytoz.astove.wbb",
    android_href:
      "https://play.google.com/store/apps/details?id=com.sundaytoz.astove.wbb",
  },
  {
    name: "DC Super Hero Girls Blitz",
    image: "/aplicacoes/app-9.png",
    description:
      "Sou Barbara Gordon, a Batgirl! Junto com as DC Super Hero Girls, combatemos vilões e curtimos desafios pela cidade. Pule, dance e nos ajude a ganhar estrelas para melhorar nosso esconderijo secreto!",
    iconQuery: "ben 10 omnitrix app icon",
    screenshots: [
      "/dev-cartoon-network/aplicacoes/app-9-1.jpg",
      "/dev-cartoon-network/aplicacoes/app-9-2.jpg",
      "/dev-cartoon-network/aplicacoes/app-9-3.jpg",
    ],
    ios_href:
      "https://play.google.com/store/apps/details?id=com.budgestudios.googleplay.DCSuperHeroGirls",
    android_href:
      "https://play.google.com/store/apps/details?id=com.budgestudios.googleplay.DCSuperHeroGirls",
  },
  {
    name: "Looney Tunes™ Mundo Insano",
    image: "/dev-cartoon-network/aplicacoes/app-10.jpg",
    description:
      "Junte-se ao Pernalonga, Patolino e outros personagens clássicos em Looney Tunes™ Mundo Insano! Colecione toons como Taz e Piu-Piu para batalhas malucas nesse universo vibrante!",
    iconQuery: "ben 10 omnitrix app icon",
    screenshots: [
      "/dev-cartoon-network/aplicacoes/app-10-1.jpg",
      "/dev-cartoon-network/aplicacoes/app-10-2.jpg",
      "/dev-cartoon-network/aplicacoes/app-10-3.jpg",
    ],
    ios_href:
      "https://play.google.com/store/apps/details?id=com.aqupepgames.projectpepe&hl=pt_BR",
    android_href:
      "https://play.google.com/store/apps/details?id=com.aqupepgames.projectpepe&hl=pt_BR",
  },
];
