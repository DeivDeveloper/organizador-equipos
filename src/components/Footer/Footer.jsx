import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://www.facebook.com/aluracursoslatam/">
          <img src="/img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://x.com/aluraonline">
          <img src="/img/x.png" alt="X" />
        </a>
        <a href="https://www.instagram.com/aluralatam/">
          <img src="/img/instagram.png" alt="Instagram" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="org" />
      <strong>Desarrollado por David Serna</strong>
    </footer>
  );
};

export default Footer;
