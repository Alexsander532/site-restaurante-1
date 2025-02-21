import React, { useState, useEffect } from 'react';
import { Fish, MapPin, Phone, Clock, Instagram, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';
import { WhatsAppLogo } from './components/WhatsAppLogo';

const heroItems = [
  {
    title: 'FILÉ DE TILÁPIA',
    description: 'Acompanhado com Arroz à grega, batata frita e queijo.',
    image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'PEIXE GRELHADO',
    description: 'Peixe grelhado na brasa com arroz, farofa especial e vinagrete.',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'SALMÃO AO MOLHO',
    description: 'Salmão grelhado ao molho de maracujá com purê e legumes.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'PESCADA AMARELA',
    description: 'Pescada amarela frita com arroz, pirão e salada tropical.',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'ROBALO GRELHADO',
    description: 'Robalo grelhado com risoto de limão siciliano e aspargos.',
    image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&q=80&w=800'
  }
];

const menuItems = [
  {
    title: 'FILÉ DE TILÁPIA',
    description: 'Acompanhado com Arroz à grega, batata frita e queijo.',
    image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800',
    price: 'R$ 89,90',
    category: 'Peixes Grelhados'
  },
  {
    title: 'TRAÍRA SEM ESPINHA',
    description: 'Traíra sem espinha acompanhada com arroz, farofa e vinagrete.',
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=800',
    price: 'R$ 79,90',
    category: 'Peixes Fritos'
  },
  {
    title: 'CASCUDO',
    description: 'Cascudo acompanhado arroz, fritas, pirão e salada.',
    image: 'https://images.unsplash.com/photo-1579631542720-3a87824fff86?auto=format&fit=crop&q=80&w=800',
    price: 'R$ 69,90',
    category: 'Peixes Fritos'
  },
  {
    title: 'SALMÃO GRELHADO',
    description: 'Salmão grelhado com risoto de limão siciliano e legumes.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    price: 'R$ 99,90',
    category: 'Peixes Grelhados'
  },
  {
    title: 'PEIXE NA BRASA',
    description: 'Peixe do dia grelhado na brasa com arroz, farofa e vinagrete.',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80&w=800',
    price: 'R$ 84,90',
    category: 'Peixes Grelhados'
  },
  {
    title: 'ROBALO AO MOLHO',
    description: 'Robalo ao molho de camarão com arroz e legumes.',
    image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&q=80&w=800',
    price: 'R$ 109,90',
    category: 'Especiais'
  },
  {
    title: 'MOQUECA DE PEIXE',
    description: 'Moqueca de peixe com arroz, pirão e farofa.',
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a44?auto=format&fit=crop&q=80&w=800',
    price: 'R$ 129,90',
    category: 'Especiais'
  },
  {
    title: 'CAMARÃO',
    description: 'Camarão com arroz e batata palha.',
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=800',
    price: 'R$ 139,90',
    category: 'Especiais'
  }
];

const restaurantPhotos = [
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800'
];

const whatsappLink = "https://wa.me/5511999999999";

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % restaurantPhotos.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const categories = ['Todos', ...new Set(menuItems.map(item => item.category))];
  const filteredMenuItems = selectedCategory === 'Todos' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Fish className="h-8 w-8 text-red-800" />
                <span className="ml-2 text-xl font-bold text-red-800">Tradição do Mar</span>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="md:hidden bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
                <WhatsAppLogo className="h-5 w-5 mr-2" />
                FALE
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#cardapio" className="text-gray-700 hover:text-red-800">CARDÁPIO</a>
              <a href="#sobre" className="text-gray-700 hover:text-red-800">SOBRE NÓS</a>
              <a href="#contato" className="text-gray-700 hover:text-red-800">CONTATO</a>
              <a href="#localizacao" className="text-gray-700 hover:text-red-800">LOCALIZAÇÃO</a>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden md:flex bg-green-500 text-white px-6 py-2 rounded-full items-center">
              <WhatsAppLogo className="h-5 w-5 mr-2" />
              FALE CONOSCO
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 bg-red-800 overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="flex items-center justify-between">
            <div className="w-1/2 text-white pr-8">
              <div className="relative h-[200px]">
                {heroItems.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                      index === activeHeroSlide
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{item.title}</h1>
                    <p className="text-lg md:text-xl mb-8">{item.description}</p>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg inline-flex items-center">
                      <WhatsAppLogo className="h-5 w-5 mr-2" />
                      SAIBA MAIS
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/2 relative h-[400px]">
              {heroItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute top-0 right-0 w-full h-full transition-all duration-500 ${
                    index === activeHeroSlide
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <section id="cardapio" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-800">NOSSO CARDÁPIO</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-red-800 text-white'
                    : 'bg-white text-red-800 border border-red-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredMenuItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-red-800 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-red-800">{item.title}</h3>
                  <p className="text-gray-600 mb-4 h-12">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-800">{item.price}</span>
                    <a 
                      href={whatsappLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-green-500 text-white px-6 py-2 rounded-full inline-flex items-center transform transition-all duration-300 hover:bg-green-600 hover:scale-105"
                    >
                      <WhatsAppLogo className="h-5 w-5 mr-2" />
                      PEÇA JÁ
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-4 md:py-8 bg-white" style={{ scrollMarginTop: '80px' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-red-800">SOBRE NÓS</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Com um ambiente familiar trabalhamos com muito amor e dedicação todos os dias, para proporcionar momentos
              de alegria e confraternização com respeito e dignidade, trazendo o melhor há mais de 23 anos.
            </p>
          </div>
        </div>
      </section>

      {/* Restaurant Photos */}
      <section className="py-6 md:py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-800">
            VEJA FOTOS DO NOSSO RESTAURANTE
          </h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="flex overflow-hidden rounded-xl shadow-2xl">
              <div className="flex transition-all duration-700" 
                   style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {restaurantPhotos.map((photo, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img src={photo} alt={`Restaurant ${index + 1}`} 
                         className="w-full h-64 md:h-96 object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-red-800" />
            </button>
            <button 
              onClick={() => setActiveSlide(prev => Math.min(restaurantPhotos.length - 1, prev + 1))}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-red-800" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-20 bg-white pt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-red-800">CONTATO</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl text-orange-500 mb-6">
                Estamos aqui para te atender! Mergulhe em uma experiência gastronômica única, onde o peixe é o protagonista.
              </h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center">
                  <Instagram className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
                  <span className="ml-4 text-sm md:text-base">@tradicaodomar</span>
                </div>
                <div className="flex items-center">
                  <Facebook className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
                  <span className="ml-4 text-sm md:text-base">/TradicaodoMar</span>
                </div>
                <div className="flex items-center">
                  <WhatsAppLogo className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
                  <span className="ml-4 text-sm md:text-base">(11) 99999-9999</span>
                </div>
              </div>
            </div>
            <form className="space-y-4 md:space-y-6">
              <input
                type="text"
                placeholder="Digite Aqui seu Nome"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm md:text-base"
              />
              <input
                type="email"
                placeholder="Seu E-mail"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm md:text-base"
              />
              <input
                type="tel"
                placeholder="Seu Telefone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm md:text-base"
              />
              <textarea
                placeholder="Qual a sua dúvida?"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm md:text-base"
              ></textarea>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full bg-green-500 text-white py-3 rounded-lg text-sm md:text-base flex items-center justify-center">
                <WhatsAppLogo className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </a>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4">Horário de Funcionamento</h4>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span className="text-sm md:text-base">Seg - Dom: 11:00 - 23:00</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4">Contato</h4>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-sm md:text-base">(11) 99999-9999</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4">Endereço</h4>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-sm md:text-base">Rua do Peixe, 123 - São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 animate-bounce"
      >
        <WhatsAppLogo className="h-6 w-6" />
      </a>
    </div>
  );
}

export default App;