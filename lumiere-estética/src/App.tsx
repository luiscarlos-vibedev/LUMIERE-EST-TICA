/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MessageCircle, 
  MapPin, 
  Instagram, 
  ChevronLeft, 
  ChevronRight, 
  Fingerprint,
  Star,
  Plus,
  ShieldCheck,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const RESULTS_CASES = [
  {
    title: "Case 01 - Rinomodelação Estruturada",
    description: "Foco na correção do dorso e ponta nasal.",
    before: "https://i.imgur.com/zHuKq9L.png",
    after: "https://i.imgur.com/JjoHL7b.png",
  },
  {
    title: "Case 02 - Full Face Rejuvenation",
    description: "Protocolo de bioestimuladores e preenchimento para rejuvenescimento natural.",
    before: "https://i.imgur.com/QX7XD61.png",
    after: "https://i.imgur.com/CbQtKsw.png",
  },
  {
    title: "Case 03 - Escultura Labial",
    description: "Definição de contorno e volume com foco em hidratação.",
    before: "https://i.imgur.com/2J2EJmv.png",
    after: "https://i.imgur.com/Z1Y2ZZY.png",
  },
  {
    title: "Case 04 - Contorno Mandibular",
    description: "Definição do ângulo da mandíbula e redução de papada.",
    before: "https://i.imgur.com/6dvZ27c.png",
    after: "https://i.imgur.com/7eTMowi.png",
  },
  {
    title: "Case 05 - Escultura e Projeção de Mento",
    description: "Definição do terço inferior da face, projetando o queixo para um perfil mais harmônico, equilibrado e imponente.",
    before: "https://i.imgur.com/iI63BGu.png",
    after: "https://i.imgur.com/tFoiO0v.png",
  },
  {
    title: "Case 06 - Arquitetura de Olhar",
    description: "Tratamento especializado para rejuvenescimento e abertura do olhar.",
    before: "https://i.imgur.com/lCkMUji.png",
    after: "https://i.imgur.com/3t6EI1y.png",
  },
];

interface ComparisonCardProps {
  title: string;
  description: string;
  before: string;
  after: string;
  key?: string | number;
}

function ComparisonCard({ title, description, before, after }: ComparisonCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#C5A059]/30 flex flex-col group h-full"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <div className="relative aspect-square overflow-hidden bg-clinic-off-white">
        <ReactCompareSlider
          handle={
            <div className="flex flex-col items-center justify-center h-full w-[2px] bg-clinic-gold relative">
              <div className="w-10 h-10 rounded-full bg-clinic-gold/90 flex items-center justify-center border-2 border-white shadow-lg pointer-events-none">
                 <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>
          }
          itemOne={
            <div className="relative h-full w-full">
              <ReactCompareSliderImage src={before} alt="Antes" className="object-cover h-full w-full" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-white/90">Antes</div>
            </div>
          }
          itemTwo={
            <div className="relative h-full w-full">
              <ReactCompareSliderImage src={after} alt="Depois" className="object-cover h-full w-full" referrerPolicy="no-referrer" />
              <div className="absolute top-4 right-4 bg-clinic-gold/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-white font-medium">Depois</div>
            </div>
          }
        />
      </div>
      <div className="p-8 text-center flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-semibold text-[#2D2D2D] mb-3 group-hover:text-clinic-gold transition-colors">{title}</h3>
        <p className="text-sm text-clinic-gray leading-relaxed font-light">{description}</p>
      </div>
    </motion.div>
  );
}

const PROCEDURES = [
  {
    title: "Harmonização Facial",
    description: "Procedimentos que realçam a beleza natural, equilibrando as proporções do rosto com técnicas modernas.",
    image: "https://i.postimg.cc/8zN8sJXT/Design-sem-nome.webp",
  },
  {
    title: "Harmonização Corporal",
    description: "Tratamentos personalizados para modelar o corpo e realçar curvas com segurança e precisão.",
    image: "https://i.postimg.cc/PxZKmKP5/Design-sem-nome-(1).webp",
  },
  {
    title: "Emagrecimento",
    description: "Programas especializados para ajudar na perda de peso, com foco em saúde e estética.",
    image: "https://i.postimg.cc/4yftm1cj/Design-sem-nome-(2).webp",
  },
  {
    title: "Preenchimento Labial",
    description: "Realce o contorno e o volume dos lábios com naturalidade e segurança.",
    image: "https://i.postimg.cc/SxMXQPPv/Design-sem-nome-(3).webp",
  },
  {
    title: "Harmonização de Glúteos",
    description: "Procedimento estético que define e valoriza a região dos glúteos, realçando a silhueta corporal.",
    image: "https://i.postimg.cc/Fzw92rhT/Design-sem-nome-(4).webp",
  },
  {
    title: "Lipo de Papada",
    description: "Procedimento estético minimamente invasivo que remove o excesso de gordura abaixo do queixo.",
    image: "https://i.postimg.cc/d3C1QkHy/Design-sem-nome-(5).webp",
  },
];

const REVIEWS = [
  {
    name: "Chirle Cristina",
    text: "Maravilhoso atendimento, me senti acolhida e saí sem nem uma dúvida ❤️",
  },
  {
    name: "Almeida",
    text: "Fui atendido pela Camila, que espetáculo de profissional, me explicou todas as etapas e super atenciosa e alto astral. A clínica é linda e trata o cliente como se estivesse num hotel 5 estrelas. Parabéns!!",
  },
  {
    name: "Henrique Fuckner",
    text: "Excelente clínica e estrutura. Fui atendido pela esteticista Lara, um ótimo atendimento e realização dos procedimentos estéticos. Vi resultados nas primeiras sessões.",
  },
  {
    name: "Gislaine da Costa",
    text: "Lugar incrível, profissionais super capacitadas, ambiente acolhedor e um cafezinho servido com todo afeto!",
  },
  {
    name: "Ana Flávia Rossato",
    text: "Fui muito bem atendida, um cafezinho muito bom. Ótimas profissionais, simpáticas e falam com muita propriedade sobre cada procedimento.",
  },
];

const GALLERY_IMAGES = [
  "https://i.imgur.com/r68ouy1.jpeg",
  "https://i.imgur.com/JQt9gMI.jpeg",
  "https://i.imgur.com/ofh8cUB.jpeg",
  "https://i.imgur.com/XbOPXG0.jpeg",
  "https://i.imgur.com/990wZKK.jpeg",
  "https://i.postimg.cc/4NJ62Xmj/image.webp",
];

const FAQ_DATA = [
  {
    question: "Como funciona a primeira consulta de avaliação?",
    answer: "Acreditamos na individualidade. Realizamos uma análise facial completa e tecnológica para entender suas proporções e desejos, criando um protocolo exclusivo focado em resultados naturais e harmônicos."
  },
  {
    question: "Os procedimentos são dolorosos?",
    answer: "Sua experiência deve ser de total conforto. Utilizamos os melhores anestésicos tópicos do mercado e, quando necessário, anestesia local técnica, garantindo que sua jornada seja tranquila e praticamente indolor."
  },
  {
    question: "Em quanto tempo verei os resultados finais?",
    answer: "Isso varia conforme o protocolo. Procedimentos com ácido hialurônico oferecem resultados imediatos, enquanto bioestimuladores de colágeno atingem o pico de performance entre 30 e 60 dias após a aplicação."
  },
  {
    question: "Vou ficar com aparência artificial?",
    answer: "O nosso pilar é a naturalidade. Trabalhamos com a filosofia de 'Beleza Inteligente', onde o objetivo é realçar seus melhores traços e suavizar imperfeições, sem alterar sua identidade ou expressões faciais."
  },
  {
    question: "Quais marcas de produtos a clínica utiliza?",
    answer: "Trabalhamos exclusivamente com as marcas líderes mundiais (como Galderma e Allergan), garantindo que todos os produtos possuam certificação de pureza, segurança e longevidade clínica comprovada."
  },
  {
    question: "Existe algum tempo de recuperação (downtime)?",
    answer: "A maioria dos nossos procedimentos permite o retorno imediato às atividades sociais. Em casos específicos, pode haver um leve inchaço ou pequenos pontos de hematoma que regridem rapidamente com os cuidados pós-procedimento indicados."
  },
  {
    question: "Com qual frequência devo realizar as manutenções?",
    answer: "Para manter a constância dos resultados e o estímulo de colágeno ativo, recomendamos revisões a cada 6 ou 12 meses, dependendo das características da sua pele e do protocolo adotado."
  },
  {
    question: "A clínica realiza procedimentos em homens?",
    answer: "Com certeza. Possuímos protocolos de 'Masculinização Facial' focados em ângulos de mandíbula, queixo e projeção, respeitando as características e a anatomia específica do rosto masculino."
  }
];

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <img 
    src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" 
    alt="WhatsApp" 
    className={`${className} invert brightness-0 grayscale-0`}
    style={{ filter: "brightness(0) invert(1)" }}
    referrerPolicy="no-referrer"
  />
);

const FAQItem = ({ question, answer }: { question: string, answer: string, key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg md:text-xl font-medium text-clinic-dark group-hover:text-clinic-gold transition-colors duration-300 pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="shrink-0"
        >
          <Plus className={`w-6 h-6 ${isOpen ? 'text-clinic-gold' : 'text-clinic-gold/50'}`} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-clinic-gray leading-relaxed text-base md:text-lg">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Procedimentos', href: '#procedimentos' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Clínica', href: '#clinica' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`${
      scrolled 
        ? "bg-white/80 backdrop-blur-md h-16 shadow-sm" 
        : "bg-white h-20 shadow-none"
    } sticky top-0 w-full transition-all duration-400 ease-in-out border-b border-black/5 z-[100] flex items-center`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <nav className="flex items-center justify-between gap-4 md:gap-8 relative h-full">
          {/* Logo - Decoupled from header height */}
          <div className="relative shrink-0 w-40 md:w-64 h-10 flex items-center">
            <img 
              src="https://i.imgur.com/d2iAGC8.png" 
              alt="Lumiere Estética Logo" 
              className="absolute top-1/2 left-0 -translate-y-1/2 h-24 md:h-40 w-auto object-contain max-w-none" 
              style={{ filter: "brightness(0.05)" }} 
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-14">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-[#2D2D2D] hover:text-clinic-gold transition-colors duration-300 tracking-wide uppercase font-inter"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-clinic-green text-white px-10 py-3.5 rounded-full text-[13px] font-bold shadow-lg shadow-clinic-green/20 hover:shadow-clinic-green/40 transition-all duration-300 flex items-center"
            >
              Agendar Consulta
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#2D2D2D]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="pt-8 pb-4 flex flex-col gap-6 border-t border-black/5 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-[#2D2D2D] hover:text-clinic-gold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="bg-clinic-green text-white px-6 py-5 rounded-full text-center font-bold text-lg"
              onClick={() => setIsOpen(false)}
            >
              Agendar Consulta
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleItems = isMobile ? 1 : 3;
  const maxSlide = Math.max(0, GALLERY_IMAGES.length - visibleItems);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) > maxSlide ? 0 : prev + 1);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1) < 0 ? maxSlide : prev - 1);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [maxSlide, isMobile]);

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start text-white px-6 md:px-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-[35%_center] sm:bg-[20%_center] md:bg-[85%_center]"
          style={{ backgroundImage: 'url("https://i.imgur.com/43NFwX0.jpeg")' }}
          aria-hidden="true"
        />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start text-left">
          <motion.h1 
            className="text-[50px] font-serif mb-6 leading-[1.1] text-shadow-glow max-w-2xl font-bold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Clínica de Harmonização Facial e Corporal de Alta Performance
          </motion.h1>

          <motion.p 
            className="text-[20px] font-sans max-w-2xl opacity-100 mb-10 leading-relaxed font-medium text-shadow-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            A clínica referência em Curitiba para quem busca resultados naturais e protocolos exclusivos.
          </motion.p>

          <motion.a
            href="#"
            className="elementor-button bg-clinic-green text-white shadow-[0_20px_50px_rgba(0,0,0,0.35),0_10px_30px_rgba(34,162,37,0.5)] px-12 py-5 text-xl font-bold transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5),0_15px_40px_rgba(34,162,37,0.6)]"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsAppIcon className="w-8 h-8 mr-3" />
            Agendar Consulta
          </motion.a>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl text-clinic-dark mb-8">Sobre Nós</h2>
          <div className="space-y-6 text-clinic-gray text-lg leading-relaxed">
            <p>
              Na Lumiere Estética, nossa missão é transformar vidas com experiências estéticas únicas e inovadoras, elevando a autoestima e proporcionando bem-estar.
            </p>
            <p>
              Estamos localizados na cidade de Curitiba, somos especializados em harmonização facial e corporal, emagrecimento, preenchimento labial e harmonização de glúteos.
            </p>
            <p>
              Oferecemos procedimentos personalizados que combinam tecnologia de ponta e excelência, visando alcançar resultados satisfatórios e de excelência para cada cliente.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="#"
              className="elementor-button bg-clinic-green text-white hover:bg-clinic-green/90"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Agendar Consulta
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://i.postimg.cc/4NJ62Xmj/image.webp" 
            alt="Lumiere Estética Clínica" 
            className="w-full h-full object-cover aspect-[4/5]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Procedimentos */}
      <section id="procedimentos" className="py-24 bg-clinic-teal">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-white italic text-3xl md:text-5xl text-center mb-16 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nossos Procedimentos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROCEDURES.map((proc, index) => (
              <motion.div 
                key={proc.title}
                className="clinic-card flex flex-col cursor-pointer bg-white group transition-colors duration-700 shadow-[12px_12px_25px_-5px_rgba(0,0,0,0.4)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  backgroundColor: "rgba(252, 251, 248, 1)"
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                <div className="h-72 overflow-hidden rounded-t-2xl">
                  <img 
                    src={proc.image} 
                    alt={proc.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-12 flex flex-col flex-grow text-center">
                  <h3 className="text-2xl text-clinic-dark mb-4 font-medium transition-colors duration-500 group-hover:text-clinic-gold">{proc.title}</h3>
                  <p className="text-clinic-gray text-base leading-relaxed flex-grow font-light">
                    {proc.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="#"
              className="elementor-button bg-clinic-green text-white hover:bg-clinic-green/90 shadow-[0_10px_30px_rgba(34,162,37,0.2)]"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Agendar Consulta
            </a>
          </div>
        </div>
      </section>

      {/* Resultados - A Arte da Transformação */}
      <section id="resultados" className="py-24 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl font-serif text-[#2D2D2D] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              A Arte da Transformação
            </motion.h2>
            <motion.p 
              className="text-lg text-clinic-gray font-sans max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Protocolos exclusivos onde a ciência encontra a harmonia facial.
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {RESULTS_CASES.map((result) => (
              <ComparisonCard 
                key={result.title} 
                title={result.title}
                description={result.description}
                before={result.before}
                after={result.after}
              />
            ))}
          </motion.div>

          <div className="mt-20 text-center">
            <motion.a
              href="#"
              className="elementor-button bg-clinic-green text-white shadow-xl shadow-clinic-green/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Quero meu protocolo exclusivo
            </motion.a>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-24 px-6 bg-clinic-off-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl text-clinic-dark text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            O que dizem nossos pacientes?
          </motion.h2>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-black/5">
            <h4 className="text-center text-xl font-serif mb-10">Avaliações da Lumiere Estética</h4>
            <div className="space-y-8 divide-y divide-black/10">
              {REVIEWS.map((review, i) => (
                <div key={review.name} className={i === 0 ? "" : "pt-8"}>
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="font-semibold text-clinic-dark">{review.name}</h5>
                    <div className="flex text-yellow-400 gap-0.5">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                    </div>
                  </div>
                  <p className="text-clinic-gray italic">"{review.text}"</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://maps.app.goo.gl/KF7bzeHpGkkbU6yb6"
              target="_blank"
              className="elementor-button bg-clinic-green text-white hover:bg-clinic-green/90"
            >
              Ver mais Avaliações!
            </a>
          </div>
        </div>
      </section>

      {/* Galeria / Nossa Clínica - Estética Boutique */}
      <section id="clinica" className="py-24 bg-[#F9F7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D2D2D] mb-6">Conheça Nossa Clínica</h2>
            <p className="text-base text-clinic-gray font-sans leading-relaxed">
              Nossa clínica foi planejada com todo cuidado para garantir conforto e bem-estar, em um ambiente sofisticado, acolhedor e altamente funcional.
            </p>
          </motion.div>

          {/* Luxury Carousel Container */}
          <div className="relative mb-16">
            <div className="overflow-hidden px-4 md:px-0">
              <motion.div 
                className="flex gap-6"
                animate={{ x: `-${currentSlide * (100 / visibleItems)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {GALLERY_IMAGES.map((img, i) => (
                  <motion.div 
                    key={i} 
                    className={`shrink-0 transition-all duration-500 rounded-[2rem] border-[1px] border-[#C5A059] overflow-hidden shadow-xl
                      ${isMobile ? 'w-full' : 'w-[calc(33.333%-16px)]'} 
                      h-[450px] aspect-[3/4]`}
                  >
                    <img 
                      src={img} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                      alt={`Ambiente Boutique ${i + 1}`}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Micro Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#C5A059] hover:bg-[#F9F7F2] transition-colors z-20 border border-[#C5A059]/20"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#C5A059] hover:bg-[#F9F7F2] transition-colors z-20 border border-[#C5A059]/20"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Discrete Pagination Dots */}
            <div className="mt-12 flex justify-center gap-3">
              {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === i ? "bg-[#C5A059] w-8 shadow-sm" : "bg-[#C5A059]/20 w-1.5 hover:bg-[#C5A059]/40"}`}
                />
              ))}
            </div>
          </div>

          <motion.a
            href="#"
            className="elementor-button bg-clinic-green text-white shadow-xl shadow-clinic-green/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            Agendar minha visita
          </motion.a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D2D2D] mb-6">Esclarecendo sua Jornada de Beleza</h2>
            <p className="text-clinic-gray font-sans">Tudo o que você precisa saber antes de iniciar sua transformação na Lumiere.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5"
          >
            {FAQ_DATA.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Como Chegar */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-clinic-dark mb-4">Como Chegar:</h2>
          <p className="text-clinic-gray text-lg mb-10">
            R. Dr. Alexandre Gutierrez, 826 – sala 1.709 – Água Verde, Curitiba <br />
            AGENDE SUA CONSULTA: Tel: (41) 9 9990-8946 | <span className="text-clinic-teal font-medium cursor-pointer">WhatsApp</span>
          </p>

          <div className="rounded-3xl overflow-hidden h-96 mb-10 shadow-lg border border-black/5">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.7303!2d-49.2882!3d-25.4412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce411bd139db3%3A0x675a026384!2sLumiere%20Est%C3%A9tica!5e0!3m2!1spt-BR!2sbr!4v1713545000000" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
          </div>

          <a
            href="https://maps.app.goo.gl/KF7bzeHpGkkbU6yb6"
            target="_blank"
            className="elementor-button bg-clinic-green text-white hover:bg-clinic-green/90"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Calcular Rota
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-footer-cyan pt-24 pb-12 text-clinic-off-white px-6 border-t border-footer-gold/20 text-shadow-footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          
          {/* Coluna 1: Sobre */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="shrink-0">
                <img 
                  src="https://i.imgur.com/d2iAGC8.png" 
                  alt="Lumiere Estética Logo" 
                  className="h-14 w-auto object-contain brightness-0 invert" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p className="text-sm font-light leading-relaxed text-white max-w-[260px]">
              Referência em harmonização e estética avançada em Curitiba.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-8">
            <h4 className="text-white text-xs font-serif font-bold uppercase tracking-[0.4em]">Navegação</h4>
            <nav className="flex flex-col gap-4">
              {[
                { name: "Início", href: "#" },
                { name: "Procedimentos", href: "#procedimentos" },
                { name: "Resultados", href: "#resultados" },
                { name: "Clínica", href: "#clinica" },
                { name: "FAQ", href: "#faq" }
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Contatos e Endereço */}
          <div className="space-y-8">
            <h4 className="text-white text-xs font-serif font-bold uppercase tracking-[0.4em]">Contato</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 text-white">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 text-white">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
              <a 
                href="https://maps.app.goo.gl/KF7bzeHpGkkbU6yb6" 
                target="_blank" 
                className="block text-sm font-medium text-white/90 hover:text-white transition-all duration-300 leading-relaxed"
              >
                R. Dr. Alexandre Gutierrez, 826<br />
                Água Verde, Curitiba - PR
              </a>
            </div>
          </div>

          {/* Coluna 4: Legal */}
          <div className="space-y-8">
            <h4 className="text-white text-xs font-serif font-bold uppercase tracking-[0.4em]">Jurídico</h4>
            <div className="flex flex-col gap-4">
              {["Política de Privacidade", "Termos de Uso"].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300"
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center gap-2 mt-4">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span className="text-[10px] uppercase tracking-widest text-white font-bold">LGPD Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/10">
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold">
            © 2026 Lumiere Estética. Todos os direitos reservados. 
            <span className="mx-2 md:mx-4">|</span> 
            DESENVOLVIDO POR HENRY THIAGO
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-[#22A225] text-white h-16 w-16 hover:w-auto rounded-full shadow-[0_20px_50px_rgba(34,162,37,0.3)] hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center group px-0 hover:px-8 overflow-hidden border-none cursor-pointer"
        aria-label="WhatsApp"
      >
        <div className="flex items-center justify-center pointer-events-none">
          <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:opacity-100 group-hover:mr-4 transition-all duration-500 font-bold tracking-tight text-white text-lg">
            Fale conosco!
          </span>
          <div className="w-8 h-8 flex items-center justify-center shrink-0">
             <WhatsAppIcon className="w-8 h-8" />
          </div>
        </div>
      </button>
    </div>
  );
}
