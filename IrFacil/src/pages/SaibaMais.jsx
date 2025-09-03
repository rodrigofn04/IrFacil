import "./SaibaMais.css";
import SaibaMaisImg from "../assets/SaibaMais.jpg"


export default function SaibaMais() {
  return (
    <section className="page">
      <h2>Sobre a IR fácil</h2>
      <p>
        A IR fácil nasceu para simplificar o Imposto de Renda. Com atendimento
        humano, interface intuitiva e preços justos, ajudamos você a cumprir
        suas obrigações fiscais sem complicações.
      </p>
      <img src= {SaibaMaisImg} alt="" />
    </section>
  );
}
