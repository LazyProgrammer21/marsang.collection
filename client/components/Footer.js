import toskaLogo from "../assets/images/toskalogo_color.svg";

const Footer = () => (
  <div className="dark-bg">
    <div className="wrapper region-lg flex split-pair align-center">
      <div className="flex gap-2">
        <img src={toskaLogo} alt="toska" />
        <a href="/" className="text-link">
          Contact
        </a>
        <a href="mailto:me@e-comm.com" className="text-link">
          me@e-comm.com
        </a>
      </div>
      <div>Copyleft TEJ Center 2022</div>
    </div>
  </div>
);

export default Footer;
