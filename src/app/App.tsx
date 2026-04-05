import React from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useState } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "Box Braids",
      description: "Tranças individuais clássicas, perfeitas para um visual elegante e duradouro.",
      image: "https://images.unsplash.com/photo-1658497730270-b5f4fef00ae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxib3glMjBicmFpZHMlMjBoYWlyc3R5bGV8ZW58MXx8fHwxNzc1MzUxNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "4-6 horas",
      price: "R$ 250-400"
    },
    {
      title: "Cornrows",
      description: "Tranças rentes ao couro cabeludo com designs criativos e personalizados.",
      image: "https://images.unsplash.com/photo-1650560884644-7713e21bd062?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jucm93JTIwYnJhaWRzfGVufDF8fHx8MTc3NTM1MTQ4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "2-4 horas",
      price: "R$ 150-280"
    },
    {
      title: "Goddess Braids",
      description: "Tranças grossas e volumosas para um visual poderoso e sofisticado.",
      image: "https://images.unsplash.com/photo-1705798610943-f5fdd403f738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxnb2RkZXNzJTIwYnJhaWRzfGVufDF8fHx8MTc3NTM1MTQ4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3-5 horas",
      price: "R$ 280-450"
    },
    {
      title: "Tranças Coloridas",
      description: "Adicione cor e personalidade com jumbo colorido em diversos tons.",
      image: "https://images.unsplash.com/photo-1643724826608-e058dc582491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3Jucm93JTIwYnJhaWRzfGVufDF8fHx8MTc3NTM1MTQ4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "4-6 horas",
      price: "R$ 300-500"
    },
    {
      title: "Tranças Nagô",
      description: "Estilo tradicional africano com padrões geométricos únicos.",
      image: "https://images.unsplash.com/photo-1757866332825-42368c1105e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjb3Jucm93JTIwYnJhaWRzfGVufDF8fHx8MTc3NTM1MTQ4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3-5 horas",
      price: "R$ 200-350"
    },
    {
      title: "Tranças com Alongamento",
      description: "Adicione comprimento e volume com jumbo de alta qualidade.",
      image: "https://images.unsplash.com/photo-1572955304453-f03b104b55e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxib3glMjBicmFpZHMlMjBoYWlyc3R5bGV8ZW58MXx8fHwxNzc1MzUxNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "5-7 horas",
      price: "R$ 350-550"
    }
  ];

  return (
    <div className="size-full overflow-y-auto bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">✨</span>
              </div>
              <div className="ml-3">
                <h1 className="text-2xl text-gray-900">Studio Pérola Negra</h1>
                <p className="text-sm text-gray-600">Especialistas em Tranças Afro</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition">Início</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition">Serviços</a>
              <a href="#gallery" className="text-gray-700 hover:text-purple-600 transition">Galeria</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition">Contato</a>
            </nav>

            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {menuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-purple-600">Início</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-purple-600">Serviços</a>
              <a href="#gallery" className="block py-2 text-gray-700 hover:text-purple-600">Galeria</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-purple-600">Contato</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1702236240794-58dc4c6895e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnJhaWRzJTIwc2Fsb258ZW58MXx8fHwxNzc1MzUxNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Studio Pérola Negra"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h2 className="text-5xl md:text-6xl mb-4">Beleza Autêntica, Arte nas Tranças</h2>
          <p className="text-xl md:text-2xl mb-8">
            Especialistas em tranças afro com mais de 10 anos de experiência
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition inline-block"
            >
              Ver Serviços
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-purple-900 px-8 py-4 rounded-full transition inline-block"
            >
              Agendar Horário
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-gray-900 mb-6">Sobre o Studio</h2>
              <p className="text-lg text-gray-700 mb-4">
                O Studio Pérola Negra nasceu do amor pela cultura afro e pela arte de trançar.
                Com profissionais altamente qualificados, oferecemos serviços personalizados
                que valorizam a beleza natural e a identidade de cada cliente.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nossa missão é proporcionar não apenas um penteado incrível, mas uma experiência
                de cuidado, respeito e empoderamento.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl mb-2">10+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl mb-2">5000+</div>
                  <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl mb-2">50+</div>
                  <div className="text-sm text-gray-600">Estilos Diferentes</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763048208932-cbe149724374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhZnJpY2FuJTIwYnJhaWRzJTIwc2Fsb258ZW58MXx8fHwxNzc1MzUxNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ambiente do Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600">
              Descubra o estilo perfeito para você
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="relative h-72 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <div className="text-gray-600">
                      <span className="mr-2">⏱️</span>
                      {service.duration}
                    </div>
                    <div className="text-purple-600">
                      {service.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Galeria de Trabalhos</h2>
            <p className="text-xl text-gray-600">
              Confira alguns dos nossos trabalhos recentes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1658497730270-b5f4fef00ae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              "https://images.unsplash.com/photo-1650560884644-7713e21bd062?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              "https://images.unsplash.com/photo-1572955304453-f03b104b55e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              "https://images.unsplash.com/photo-1757866332840-230be07b786e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              "https://images.unsplash.com/photo-1643724826608-e058dc582491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              "https://images.unsplash.com/photo-1705798610943-f5fdd403f738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              "https://images.unsplash.com/photo-1563721572928-e933046895f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              "https://images.unsplash.com/photo-1757866332825-42368c1105e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
            ].map((img, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                <ImageWithFallback
                  src={img}
                  alt={`Trabalho ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600">
              Agende seu horário e venha nos visitar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl mb-6">Informações de Contato</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div>Araucária, PR</div>
                      <div className="text-purple-100">Brasil</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>(41) 99999-9999</div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>contato@perola negra.com.br</div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div>Segunda a Sexta: 9h - 19h</div>
                      <div className="text-purple-100">Sábado: 9h - 17h</div>
                      <div className="text-purple-100">Domingo: Fechado</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="mb-4">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition">
                      <span>📷</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition">
                      <span>📱</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition">
                      <span>💬</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm text-gray-700 mb-2">Serviço Desejado</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                  >
                    <option>Selecione um serviço</option>
                    <option>Box Braids</option>
                    <option>Cornrows</option>
                    <option>Goddess Braids</option>
                    <option>Tranças Coloridas</option>
                    <option>Tranças Nagô</option>
                    <option>Tranças com Alongamento</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none resize-none"
                    placeholder="Conte-nos mais sobre o que você deseja..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-lg transition"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">✨</span>
                </div>
                <span className="ml-2 text-xl">Studio Pérola Negra</span>
              </div>
              <p className="text-gray-400">
                Especialistas em tranças afro, valorizando a beleza e cultura.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-purple-400 transition">Início</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition">Serviços</a></li>
                <li><a href="#gallery" className="hover:text-purple-400 transition">Galeria</a></li>
                <li><a href="#contact" className="hover:text-purple-400 transition">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Receba novidades e promoções exclusivas
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-600 outline-none"
                />
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition">
                  Enviar
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Studio Pérola Negra. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}