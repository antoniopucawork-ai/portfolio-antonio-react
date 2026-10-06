import { useLanguage } from "../../context/useLanguage";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <p>{t.footer.message}</p>

        <small>{t.footer.copyright}</small>
      </div>
    </footer>
  );
}

export default Footer;
