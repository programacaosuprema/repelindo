import './App.css';
import logo from './assets/TJA.jpg'; // Ajuste o caminho para sua imagem.
import macaquinho from './assets/macaquinho.jpg'; // Substitua pelo nome correto da sua imagem.
import insta from './assets/instagram.png'; // Substitua pelo nome correto da sua imagem.
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="nav-logo">
            <img src={logo} alt="Logo" className="App-logo" />
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Produtos</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
          <div className="hamburger-icon" onClick={toggleMenu}>
            &#9776;
          </div>
        </nav>
      </header>
      <main className="App-main">
        <div className="main-content">
          <h1>Proteção <span >para toda a sua</span> família</h1>
          <p>Descubra o melhor para você e sua família! Nosso produto combina qualidade, inovação e confiança para oferecer exatamente o que você precisa. Escolha o melhor, escolha <strong>REPELINDO</strong>.</p>
          <div className="buttons">
            <button className="btn-primary">Saiba Mais</button>
            <button className="btn-secondary">Entre em Contato</button>
          </div>
        </div>
        <div className="main-image">
          <img src={macaquinho} alt="Proteção para a família" />
        </div>
      </main>
      {/* Footer */}
      <footer className="App-footer">
        <div className="social-media">
          <a href="https://www.instagram.com/repelindo.tja/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <p>Nos siga no Instagram</p>
            <img src={insta} alt="Instagram" className="social-icon-img" />
          </a>
        </div>
        <p>&copy; 2024 Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
