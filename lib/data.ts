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
  Twitter,
  TwitterIcon as TikTok,
  Mail,
  Shield,
  FileText,
  HelpCircle,
  Star,
  Gift,
  Calendar,
  Users,
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

  //New characters
  {
    name: "Máximo",
    color: "bg-amber-900",
    query: "maximo from sheesh! kaboom! cartoon network",
    image: "/dev-cartoon-network/home/character/char-maximo.png",
  },
  {
    name: "Flapjack",
    color: "bg-sky-300",
    query: "flapjack from the marvelous misadventures of flapjack",
    image: "/dev-cartoon-network/home/character/char-flapjack.png",
  },
  {
    name: "Rodney",
    color: "bg-yellow-400",
    query: "rodney from squirrel boy",
    image: "/dev-cartoon-network/home/character/char-rodney.png",
  },
  {
    name: "Buck Tuddrussel",
    color: "bg-red-800",
    query: "buck tuddrussel from time squad",
    image: "/dev-cartoon-network/home/character/char-buck-tuddrussel.png",
  },
  {
    name: "Superboy",
    color: "bg-blue-700",
    query: "superboy from young justice",
    image: "/dev-cartoon-network/home/character/char-superboy.png",
  },
  {
    name: "Batman",
    color: "bg-gray-800",
    query: "batman from the batman animated series",
    image: "/dev-cartoon-network/home/character/char-the-batman.png",
  },
  {
    name: "Maçã",
    color: "bg-red-300",
    query: "apple from apple and onion cartoon",
    image: "/dev-cartoon-network/home/character/char-maca.png",
  },
  {
    name: "Ami",
    color: "bg-pink-400",
    query: "ami from hi hi puffy amiyumi",
    image: "/dev-cartoon-network/home/character/char-ami.png",
  },
  {
    name: "Yumi",
    color: "bg-purple-700",
    query: "yumi from hi hi puffy amiyumi",
    image: "/dev-cartoon-network/home/character/char-yumi.png",
  },
  {
    name: "Mike",
    color: "bg-orange-600",
    query: "mike from mike lu and og",
    image: "/dev-cartoon-network/home/character/char-mike.png",
  },

  //New character
  {
    name: "Fred Flintstone",
    color: "bg-orange-700",
    query: "fred flintstone from the flintstones",
    image: "/dev-cartoon-network/home/character/char-fred.png",
  },
  {
    name: "Tom",
    color: "bg-gray-500",
    query: "tom from tom and jerry cartoon",
    image: "/dev-cartoon-network/home/character/char-tom.png",
  },
  {
    name: "Jerry",
    color: "bg-yellow-500",
    query: "jerry from tom and jerry cartoon",
    image: "/dev-cartoon-network/home/character/char-jerry.png",
  },
  {
    name: "Zé Colmeia",
    color: "bg-lime-600",
    query: "yogi bear cartoon character",
    image: "/dev-cartoon-network/home/character/char-ze-colmeia.png",
  },
  {
    name: "Rey Mysterio",
    color: "bg-blue-900",
    query: "rey mysterio cartoon network lucha libre",
    image: "/dev-cartoon-network/home/character/char-rey-mysterio.png",
  },
  {
    name: "Ivandoe",
    color: "bg-green-500",
    query: "ivandoe from the heroic quest of the valiant prince ivandoe",
    image: "/dev-cartoon-network/home/character/char-ivandoe.png",
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

export const footerSections = [
  {
    title: "Conteúdo",
    links: [
      { label: "Desenhos", href: "/desenhos", icon: Tv },
      { label: "Jogos", href: "/jogos", icon: Gamepad2 },
      { label: "Vídeos", href: "/videos", icon: Play },
      { label: "Liga Toon", href: "/liga-toon", icon: Trophy },
      { label: "Campeões do Clima", href: "/campeoes-do-clima", icon: Sun },
      { label: "Aplicações", href: "/aplicacoes", icon: AppWindow },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Central de Ajuda", href: "#", icon: HelpCircle },
      { label: "Contacte-nos", href: "#", icon: Mail },
      { label: "Reportar Problema", href: "#", icon: Shield },
      { label: "FAQ", href: "#", icon: FileText },
    ],
  },
  {
    title: "Comunidade",
    links: [
      { label: "Fã Clube", href: "#", icon: Star },
      { label: "Concursos", href: "#", icon: Gift },
      { label: "Eventos", href: "#", icon: Calendar },
      { label: "Fórum", href: "#", icon: Users },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "#", icon: null },
      { label: "Carreiras", href: "#", icon: null },
      { label: "Imprensa", href: "#", icon: null },
      { label: "Parceiros", href: "#", icon: null },
    ],
  },
];

export const socialLinks = [
  {
    icon: Youtube,
    href: "https://www.youtube.com/@BRCartoonNetworkvideos",
    name: "YouTube",
    color: "hover:text-red-500",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/cartoonnetworkbrasil/?hl=pt-br",
    name: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/cartoonnetworkbrasil/events",
    name: "Facebook",
    color: "hover:text-blue-500",
  },
  {
    icon: Twitter,
    href: "https://x.com/CartoonBrasil?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    name: "Twitter",
    color: "hover:text-sky-500",
  },
];

export const legalLinks = [
  { label: "Termos de Uso", href: "#" },
  { label: "Política de Privacidade", href: "#" },
  { label: "Política de Cookies", href: "#" },
  { label: "Direitos Autorais", href: "#" },
  { label: "Acessibilidade", href: "#" },
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

// Add filter categories and update showsData with category information

export const showCategories = [
  "Todos",
  "Clássicos",
  "Ação/Aventura",
  "Infantil",
  "Comédia",
  "Fantasia",
  "Sci-Fi",
  "Mistério",
];

export const showCreators = [
  "Todos",
  "Adam Muto",
  "Aaron Horvath",
  "Alex Kirwan",
  "Atsushi Maekawa",
  "Ben Bocquelet",
  "C. H. Greenblatt",
  "Craig McCracken",
  "Daniel Chong",
  "David Feiss",
  "Eddie Mort",
  "Ethan Spaulding",
  "Hugh Harman",
  "Genndy Tartakovsky",
  "Guillaume Cassuto",
  "Ian Jones-Quartey",
  "J. G. Quintel",
  "Joe Murray",
  "Joe Ruby",
  "John R. Dilworth",
  "Juliano Enrico",
  "Man of Action",
  "Matt Burnett",
  "Mauricio de Sousa",
  "Maxwell Atoms",
  "Myke Chilian",
  "Owen Dennis",
  "Parker Simmons",
  "Pendleton Ward",
  "Rebecca Sugar",
  "Skyler Page",
  "Stephen P. Neary",
  "Tim Cahill",
  "Tom McGillis",
  "Tom Warburton",
  "Van Partible",
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
    image: "/dev-cartoon-network/aplicacoes/app-9.png",
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
