import { Link } from "react-router-dom";
import Claudia from "../assets/claudia.jpeg";
import "./Home.css";
import Predios from "../assets/predio.jpg";
import contabilidade from "../assets/contabilidade.jpg";
import QrCode from "../assets/qrcode-pix.png";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>Seu Imposto de Renda aqui</h1>
          <p>Claudia Nascimento</p>
          <Link to="/saiba-mais" className="btn">Saiba Mais</Link>
        </div>
        <div className="hero-img">
          <img src={Claudia}alt="Claudia Nascimento" />
        </div>
      </section>

      {/* Quem Somos */}
      <section className="quem-somos">
        <h2>Quem Somos</h2>
        <p>
          Somos a IR Fácil, uma plataforma digital dedicada a transformar a
          experiência de prestação de serviços para empreendedores locais. Nossa
          missão é empoderar profissionais autônomos a ampliarem sua
          visibilidade e automatizarem processos.
        </p>
      </section>

      {/* O que fazemos */}
      <section className="o-que-fazemos">
        <h2>O Que Fazemos</h2>
        <div className="cards">
          <div className="card">
            <h3>Apresentação de Serviços</h3>
            <p>
              Apresentamos os tipos de declaração e serviços de forma clara,
              com preços transparentes.
            </p>
          </div>
          <div className="card">
            <h3>Atendimento Direto</h3>
            <p>
              Contato rápido via WhatsApp ou formulário — suporte humanizado.
            </p>
          </div>
          <div className="card">
            <h3>Contabilidade Interna</h3>
            <p>
              Gerenciamento de contas empresariais e mapeamento da economia.
            </p>
          </div>
        </div>
      </section>

      {/* Frase + imagem */}
      <section className="motivacional">
        <h2>O sucesso acontece para aqueles que trabalham.</h2>
        <img src={Predios} alt="Prédios empresariais" />
      </section>

      {/* Preços */}
      <section className="precos">
        <h2>Preços</h2>
        <div className="cards">
          <div className="card">
            <h3>R$200</h3>
            <p><strong>Contador:</strong> demonstrações contábeis, custos e lucros.</p>
          </div>
          <div className="card">
            <h3>A partir de R$100</h3>
            <p><strong>Imposto de Renda:</strong> cálculos de rendimentos e deduções.</p>
          </div>
          <div className="card">
            <h3>R$50</h3>
            <p>
              <strong>Abertura de Empresa:</strong> documentação necessária e regularização.
            </p>
          </div>
        </div>
        <p className="pix">Pagamento somente no Pix: clau.cristina1992@gmail.com</p>
        <div className="qr-code">
          <img src={QrCode} alt="QR Code Pix" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-img">
          <img src={contabilidade} alt="Contabilidade" />
        </div>
        <div>
          <h3>Vamos fazer isso juntos.</h3>
          <p><strong><CiLocationOn /> Localização:</strong> Rua Palmeiras, 86 - Curitiba, PR</p>
          <p><strong><FaPhone /> Contato:</strong>  (41) 99116-8814 
          </p>
          <p>
          <strong> <MdEmail /> Email:</strong>
           claudiacfnascimento@hotmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}
