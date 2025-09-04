import React from "react";
import "./Contato.css";
import contato from "../assets/contato.jpg"

export default function Contato() {
  const whatsappNumber = "5541991168814";
  const whatsappText = encodeURIComponent("Olá, gostaria de informações sobre Imposto de Renda.");
  const instagramUrl = "https://instagram.com/seu_instagram_aqui"; // troca aqui
  const email = "claudiafcnascimento@hotmail.com";

  return (
    <section className="contato-page" aria-labelledby="contato-title">
      <div className="contato-content">
        <h2 id="contato-title">Fale Conosco</h2>
        <p className="contato-sub">
          Entre em contato diretamente pelos canais abaixo — responderemos o mais rápido possível.
        </p>

        <div className="contato-actions" role="navigation" aria-label="opções de contato">
          <a
            className="contact-btn contact-whatsapp"
            href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* ícone WhatsApp (SVG inline) */}
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.37 0 .03 5.34.03 12a11.65 11.65 0 001.82 6.13L0 24l5.94-1.86A11.9 11.9 0 0012 24c6.63 0 11.97-5.34 11.97-12 0-3.2-1.25-6.2-3.45-8.52z" fill="#25D366"/>
              <path d="M17.2 14.03c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.8 1.04-.98 1.26-.18.21-.36.24-.68.08-.32-.16-1.36-.5-2.58-1.6-.96-.85-1.6-1.9-1.79-2.21-.18-.32-.02-.49.13-.65.13-.13.29-.34.43-.51.14-.16.18-.27.29-.45.11-.18.05-.34-.03-.5-.08-.16-.71-1.7-.98-2.33-.26-.61-.53-.53-.71-.54l-.6-.01c-.2 0-.52.07-.8.34-.28.27-1.07 1.04-1.07 2.53 0 1.49 1.1 2.93 1.25 3.13.14.2 2.16 3.45 5.23 4.84 3.07 1.4 3.07.93 3.62.87.56-.05 1.82-.74 2.08-1.45.26-.71.26-1.32.18-1.45-.08-.13-.29-.2-.61-.36z" fill="#fff"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          <a
            className="contact-btn contact-email"
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M2 6.5v11c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-11C22 5.7 21.3 5 20.5 5h-17C2.7 5 2 5.7 2 6.5z" fill="#fff"/>
              <path d="M3 7.3l8.2 5.4c.6.4 1.4.4 2 0L22 7.3" stroke="#0077cc" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Email</span>
          </a>
        </div>

        <p className="contato-note">Ao clicar você será direcionado para o aplicativo correspondente.</p>
      </div>

      <div className="contato-illustration" aria-hidden="true">
        <img src={contato} alt="" />
      </div>
    </section>
  );
}
