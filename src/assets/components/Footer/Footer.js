import React from 'react';
import heartIcon from '../../img/svg/heart.svg';
import './styles/css/styles.css';

const Footer = () => {
  return (
    <section 
      id="footer" 
      className="pt-5">
      <div 
        className="mx-auto text-center mt-5">
        <span>Feito de
          <img 
            width="20"
            className="mx-2"
            alt="Heart icon" src={heartIcon} />
            por
            <a 
              href="https://instagram.com/iamcaio_a" 
              rel="noopener noreferrer"
              target="_blank" 
              style={{color: '#FFAA00', textDecoration: 'none', marginLeft: '7px'}}
              data-tip="Perfil no instagram"
              data-place="bottom"
              >
              Caio Augusto
            </a>
        </span>
      </div>
    </section>
  );
};

export default Footer;
