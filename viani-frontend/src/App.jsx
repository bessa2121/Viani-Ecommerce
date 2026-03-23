import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <header>
        <div className="container">
          <a href="#" className="logo">VIANI</a>
          <nav>
            <ul>
              <li><a href="#">Novidades</a></li>
              <li><a href="#">Mulher</a></li>
              <li><a href="#">Homem</a></li>
              <li><a href="#">Promoções</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <div className="cart-icon">🛒
              <span className="cart-count">3</span>
            </div>
            <div className="user-icon">👤</div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>VIANI</h1>
          <p>Estilo que define quem você é</p>
          <a href="#" className="cta-button">Explorar Coleção</a>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2 className="section-title">Categorias</h2>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-image">👗</div>
            <div className="category-content">
              <h3>Feminino</h3>
              <p>Peças elegantes para todos os momentos</p>
            </div>
          </div>
          <div className="category-card">
            <div className="category-image">👔</div>
            <div className="category-content">
              <h3>Masculino</h3>
              <p>Sofisticação em cada detalhe</p>
            </div>
          </div>
          <div className="category-card">
            <div className="category-image">👟</div>
            <div className="category-content">
              <h3>Calçados</h3>
              <p>Conforto e estilo combinados</p>
            </div>
          </div>
          <div className="category-card">
            <div className="category-image">👜</div>
            <div className="category-content">
              <h3>Acessórios</h3>
              <p>Detalhes que fazem a diferença</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2 className="section-title">Destaques da Semana</h2>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image">
              <span className="product-badge">-20%</span>
            </div>
            <div className="product-info">
              <h3 className="product-title">Vestido Midi Floral</h3>
              <div className="product-price">R$ 189,90</div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="product-badge">Novo</span>
            </div>
            <div className="product-info">
              <h3 className="product-title">Camisa Social Slim</h3>
              <div className="product-price">R$ 249,90</div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="product-badge">-15%</span>
            </div>
            <div className="product-info">
              <h3 className="product-title">Tênis Casual White</h3>
              <div className="product-price">R$ 299,90</div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="product-badge">Novo</span>
            </div>
            <div className="product-info">
              <h3 className="product-title">Bolsa Crossbody</h3>
              <div className="product-price">R$ 179,90</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Receba novidades em primeira mão</h2>
          <p>Cadastre-se e ganhe 10% de desconto na primeira compra</p>
          <form className="newsletter-form">
            <input type="email" className="newsletter-input" placeholder="Digite seu email" />
            <button type="submit" className="cta-button">Cadastrar</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>VIANI</h3>
            <p>Moda que acompanha seu estilo e personalidade.</p>
          </div>
          <div className="footer-section">
            <h3>Links Úteis</h3>
            <ul>
              <li><a href="#" style={{color: '#888', textDecoration: 'none'}}>Novidades</a></li>
              <li><a href="#" style={{color: '#888', textDecoration: 'none'}}>Promoções</a></li>
              <li><a href="#" style={{color: '#888', textDecoration: 'none'}}>Contato</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Atendimento</h3>
            <p>Seg-Sex: 9h às 18h<br />contato@viani.com.br<br />(11) 99999-9999</p>
          </div>
          <div className="footer-section">
            <h3>Siga-nos</h3>
            <div style={{display: 'flex', gap: '1rem'}}>
              <a href="#" style={{color: '#888', fontSize: '1.5rem'}}>📘</a>
              <a href="#" style={{color: '#888', fontSize: '1.5rem'}}>📷</a>
              <a href="#" style={{color: '#888', fontSize: '1.5rem'}}>🐦</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Viani. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App