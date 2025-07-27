import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Instagram, Clock, Heart, Sparkles, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";
import footSpaImage from "@/assets/foot-spa.jpg";
import massageImage from "@/assets/massage.jpg";

const Portfolio = () => {
  const services = [
    {
      title: "Massoterapia",
      description: "Técnicas terapêuticas para relaxamento, alívio de tensões e bem-estar completo.",
      image: massageImage,
      features: ["Relaxante", "Terapêutica", "Drenagem linfática", "Reflexologia"]
    },
    {
      title: "Spa dos Pés",
      description: "Cuidados especializados para seus pés com tratamentos relaxantes e revitalizantes.",
      image: footSpaImage,
      features: ["Hidratação profunda", "Esfoliação", "Massagem relaxante", "Cuidados especiais"]
    },
    {
      title: "Plástica dos Pés",
      description: "Procedimentos estéticos avançados para deixar seus pés sempre bonitos e saudáveis.",
      image: footSpaImage,
      features: ["Remoção de calosidades", "Tratamento de unhas", "Cuidados preventivos", "Estética podal"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-spa-cream/90 via-spa-sage-light/80 to-spa-sage/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Bem-estar & Saúde</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Gerusa Barbosa
            <span className="block text-primary mt-2">Fróes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Enfermeira e Massoterapeuta especializada em cuidados terapêuticos e estéticos para o seu bem-estar completo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-floating">
              <Phone className="w-5 h-5 mr-2" />
              Agendar Consulta
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 shadow-soft">
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="secondary" className="bg-white/20 text-foreground backdrop-blur-sm">
              <Heart className="w-4 h-4 mr-1" />
              Enfermeira
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-foreground backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-1" />
              Massoterapeuta
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-foreground backdrop-blur-sm">
              <Leaf className="w-4 h-4 mr-1" />
              Spa dos Pés
            </Badge>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="mb-6">
                <Badge className="bg-accent text-accent-foreground mb-4">Sobre Mim</Badge>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Cuidando do seu bem-estar com dedicação e profissionalismo
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sou Gerusa Barbosa Fróes, enfermeira e massoterapeuta com paixão por proporcionar 
                bem-estar e qualidade de vida. Atuo no Instituto Xue em Salvador-BA, oferecendo 
                tratamentos personalizados que combinam conhecimento técnico e cuidado humano.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Especializo-me em massoterapia, spa dos pés e plástica dos pés, sempre buscando 
                as melhores técnicas para garantir resultados excepcionais e momentos únicos de relaxamento.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Instituto Xue - Salvador, BA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">(71) 9 9948-9720</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Atendimento personalizado</span>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <Card className="bg-gradient-card border-0 shadow-card overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Minha Missão</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-center leading-relaxed mb-6">
                    Proporcionar momentos únicos de bem-estar, combinando técnicas profissionais 
                    com um atendimento humanizado e acolhedor, sempre priorizando a saúde e 
                    a autoestima dos meus clientes.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">5+</div>
                      <div className="text-sm text-muted-foreground">Anos de experiência</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">Dedicação</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-accent text-accent-foreground mb-4">Serviços</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Tratamentos especializados para o seu bem-estar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços terapêuticos e estéticos, 
              sempre com foco na qualidade e no seu conforto.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-0 shadow-card hover:shadow-floating transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Saiba mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-accent text-accent-foreground mb-4">Contato</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Pronta para cuidar de você
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Entre em contato e agende seu atendimento. Estou aqui para proporcionar 
            o melhor cuidado e bem-estar que você merece.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-0 shadow-card p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Agende seu horário pelo WhatsApp</p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                (71) 9 9948-9720
              </Button>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-card p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Instagram</h3>
              <p className="text-muted-foreground mb-4">Siga para ver nossos trabalhos</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                @gerusabarbosa2025
              </Button>
            </Card>
          </div>
          
          <div className="mt-12 p-8 bg-muted/30 rounded-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Instituto Xue</h3>
            </div>
            <p className="text-muted-foreground">Salvador - Bahia</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-foreground/5 border-t border-border/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Gerusa Barbosa Fróes. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Enfermeira • Massoterapeuta • Spa dos Pés • Salvador/BA
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;