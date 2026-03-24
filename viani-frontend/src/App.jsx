import { useState, useEffect, useRef } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Vestido Midi Floral", price: 189.90, oldPrice: 237.38, badge: "-20%", category: "Feminino", color: "#c9a96e", emoji: "🌸" },
  { id: 2, name: "Camisa Social Slim", price: 249.90, oldPrice: null, badge: "Novo", category: "Masculino", color: "#8ca3b5", emoji: "✦" },
  { id: 3, name: "Tênis Casual White", price: 299.90, oldPrice: 352.82, badge: "-15%", category: "Calçados", color: "#d4cfc9", emoji: "◎" },
  { id: 4, name: "Bolsa Crossbody", price: 179.90, oldPrice: null, badge: "Novo", category: "Acessórios", color: "#b5967a", emoji: "◈" },
  { id: 5, name: "Blazer Oversize", price: 389.90, oldPrice: 459.00, badge: "-15%", category: "Feminino", color: "#a89bb0", emoji: "❋" },
  { id: 6, name: "Calça Alfaiataria", price: 319.90, oldPrice: null, badge: "Novo", category: "Masculino", color: "#7a8c7e", emoji: "▲" },
];

const categories = [
  { name: "Feminino", sub: "Nova coleção disponível", count: "124 peças", symbol: "✦" },
  { name: "Masculino", sub: "Sofisticação essencial", count: "89 peças", symbol: "◎" },
  { name: "Calçados", sub: "Conforto e forma", count: "67 peças", symbol: "◈" },
  { name: "Acessórios", sub: "O detalhe que define", count: "43 peças", symbol: "❋" },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [addedId, setAddedId] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const heroRef = useRef(null);

  const filters = ["Todos", "Feminino", "Masculino", "Calçados", "Acessórios"];
  const filtered = activeFilter === "Todos" ? products : products.filter(p => p.category === activeFilter);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* CART OVERLAY */}
      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}>
          <div className="cart-drawer" onClick={e => e.stopPropagation()}>
            <div className="cart-head">
              <h2>Seu Carrinho {cartCount > 0 && `(${cartCount})`}</h2>
              <button className="cart-close" onClick={() => setCartOpen(false)}>✕</button>
            </div>
            {cart.length === 0 ? (
              <div className="cart-empty">
                <span style={{ fontSize: "2.5rem", opacity: 0.3 }}>🛒</span>
                <p>Seu carrinho está vazio</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map(item => (
                    <div className="cart-item" key={item.id}>
                      <div className="cart-item-swatch" style={{ background: item.color + "30" }}>
                        {item.emoji}
                      </div>
                      <div className="cart-item-details">
                        <div className="cart-item-name">{item.name}</div>
                        <div className="cart-item-qty">Qtd: {item.qty}</div>
                      </div>
                      <div className="cart-item-price">
                        R$ {(item.price * item.qty).toFixed(2).replace(".", ",")}
                      </div>
                      <button className="cart-rm" onClick={() => removeFromCart(item.id)}>✕</button>
                    </div>
                  ))}
                </div>
                <div className="cart-foot">
                  <div className="cart-total">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <button className="cart-checkout">Finalizar Compra →</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* HEADER */}
      <header>
        <div className="header-inner">
          <a href="#" className="logo">VIANI</a>
          <nav>
            <a href="#">Novidades</a>
            <a href="#">Mulher</a>
            <a href="#">Homem</a>
            <a href="#">Promoções</a>
          </nav>
          <div className="header-right">
            <button className="icon-btn">🔍</button>
            <button className="icon-btn">👤</button>
            <button className="icon-btn" onClick={() => setCartOpen(true)}>
              🛒
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" ref={heroRef}></div>
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">Coleção Verão 2025</div>
          <h1 className="hero-title">VI<em>ANI</em></h1>
          <p className="hero-sub">Estilo que define quem você é</p>
          <div className="hero-actions">
            <a href="#produtos" className="btn-primary">Explorar Coleção →</a>
            <a href="#categorias" className="btn-outline">Ver Categorias</a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          {[...Array(2)].map((_, i) => (
            ["Novidades", "Frete Grátis acima de R$299", "Feminino", "Masculino", "Calçados", "Acessórios", "10% off na primeira compra"].map((t, j) => (
              <span className="marquee-item" key={`${i}-${j}`}>
                {t} <span className="marquee-dot">✦</span>
              </span>
            ))
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div id="categorias" style={{ background: "var(--light)" }}>
        <div className="section">
          <div className="section-header">
            <div>
              <div className="section-label">Explorar</div>
              <h2 className="section-title">Nossas<br />Categorias</h2>
            </div>
            <a href="#" className="section-link">Ver tudo →</a>
          </div>
        </div>
        <div className="categories-grid">
          {categories.map((cat, i) => {
            const gradients = [
              "linear-gradient(135deg, #2c2416 0%, #5c4a2a 50%, #8a6c3c 100%)",
              "linear-gradient(135deg, #1a2030 0%, #2d3a50 50%, #4a5a70 100%)",
              "linear-gradient(135deg, #251e1a 0%, #4a3a30 50%, #6e5548 100%)",
              "linear-gradient(135deg, #1e2218 0%, #3a4230 50%, #5a6248 100%)",
            ];
            return (
              <div className="cat-card" key={cat.name}>
                <div className="cat-bg" style={{ background: gradients[i] }}></div>
                <div className="cat-overlay"></div>
                <div className="cat-symbol">{cat.symbol}</div>
                <div className="cat-body">
                  <div className="cat-count">{cat.count}</div>
                  <div className="cat-name">{cat.name}</div>
                  <div className="cat-sub">{cat.sub}</div>
                  <div className="cat-arrow">Ver coleção →</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="products-bg" id="produtos">
        <div className="products-inner">
          <div className="section-header">
            <div>
              <div className="section-label">Destaques</div>
              <h2 className="section-title">Peças da<br />Semana</h2>
            </div>
            <a href="#" className="section-link">Ver todos →</a>
          </div>
          <div className="filter-bar">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn${activeFilter === f ? " active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >{f}</button>
            ))}
          </div>
          <div className="products-grid">
            {filtered.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-visual">
                  <div className="product-swatch" style={{
                    background: `linear-gradient(145deg, ${product.color}88 0%, ${product.color}cc 100%)`
                  }}></div>
                  <div className="product-symbol">{product.emoji}</div>
                  {product.badge.startsWith("-")
                    ? <div className="product-badge-sale">{product.badge}</div>
                    : <div className="product-badge-new">{product.badge}</div>
                  }
                  <button
                    className={`add-btn${addedId === product.id ? " added" : ""}`}
                    onClick={() => addToCart(product)}
                  >
                    {addedId === product.id ? "✓ Adicionado" : "+ Adicionar ao carrinho"}
                  </button>
                </div>
                <div className="product-info">
                  <div className="product-cat">{product.category}</div>
                  <div className="product-name">{product.name}</div>
                  <div className="price-row">
                    <span className="price-current">R$ {product.price.toFixed(2).replace(".", ",")}</span>
                    {product.oldPrice && (
                      <span className="price-old">R$ {product.oldPrice.toFixed(2).replace(".", ",")}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EDITORIAL QUOTE */}
      <div className="editorial">
        <div className="editorial-bg-text">VIANI</div>
        <div className="editorial-content">
          <p className="editorial-quote">
            "A moda não é apenas roupas. É a linguagem silenciosa do que você escolhe ser."
          </p>
          <div className="editorial-line"></div>
          <div className="editorial-credit">— Filosofia Viani</div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="newsletter">
        <div className="newsletter-inner">
          <div className="nl-label">Fique por dentro</div>
          <h2 className="nl-title">Novidades em<br />primeira mão</h2>
          <p className="nl-sub">Cadastre-se e ganhe 10% de desconto na sua primeira compra. Sem spam, só o essencial.</p>
          {subscribed ? (
            <div className="nl-success">
              <span style={{ color: "var(--gold)" }}>✦</span>
              Bem-vindo à família Viani. Verifique seu email.
            </div>
          ) : (
            <div className="nl-form">
              <input
                type="email" className="nl-input"
                placeholder="seu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === "Enter" && email && setSubscribed(true)}
              />
              <button
                className="nl-submit"
                onClick={() => email && setSubscribed(true)}
              >Cadastrar</button>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">VIANI</a>
            <p className="footer-tagline">Moda que acompanha seu estilo, sua essência e sua personalidade — desde 2024.</p>
          </div>
          <div className="footer-col">
            <h4>Navegar</h4>
            <ul>
              <li><a href="#">Novidades</a></li>
              <li><a href="#">Feminino</a></li>
              <li><a href="#">Masculino</a></li>
              <li><a href="#">Promoções</a></li>
              <li><a href="#">Lookbook</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Ajuda</h4>
            <ul>
              <li><a href="#">Minha Conta</a></li>
              <li><a href="#">Meus Pedidos</a></li>
              <li><a href="#">Trocas e Devoluções</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <p>Seg–Sex: 9h às 18h<br />contato@viani.com.br<br />(11) 99999-9999</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Viani. Todos os direitos reservados.</p>
          <div className="footer-social">
            <a href="#" className="social-btn">𝕏</a>
            <a href="#" className="social-btn">in</a>
            <a href="#" className="social-btn">📷</a>
          </div>
        </div>
      </footer>
    </>
  );
}