import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=0123456789" target="blank" className="whatsapp-button-link" >
      <div className="whatsapp-button">
        <span className="iconify" data-icon="akar-icons:whatsapp-fill"></span>
        <div className="whatsapp-button__content">
          <p>  Charlemos por tu</p>
          <p>  plan de trabajo</p>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
