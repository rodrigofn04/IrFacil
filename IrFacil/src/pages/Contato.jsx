import ContatoImg from "../assets/contato.jpg";

export default function Contato() {
  return (
    <section className="page">
      <h2>Fale Conosco</h2>
      <p>Entre em contato diretamente pelos canais abaixo:</p>

      <div className="contato-links">
        <a
          href="https://wa.me/5541991168814"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          WhatsApp
        </a>

        <a
          href="mailto:claudiafcnascimento@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Email
        </a>

        <a
          href="https://www.instagram.com/claudia24cristina"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Instagram
        </a>
      </div>
      <div className="contato-img">
        <img src={ContatoImg} alt="" />
      </div>
    </section>
  );
}
