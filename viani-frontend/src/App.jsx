import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
  <header className="site-header">
    <div className="brand">
      <img className="brand-logo" src="./images/logo.jpg" alt="Logo La Brigabi" />
      <div>
        <h1 className="brand-title">La Brigabi</h1>
        <p className="brand-subtitle">Onde cada doce é um momento de felicidade!</p>
      </div>
    </div>

    <nav className="main-nav" aria-label="Navegação principal">
      <a href="#sobre">Sobre Nós</a>
      <a href="#produtos">Produtos</a>
      <a href="#depoimentos">Depoimentos</a>
      <a href="#encomendas" className="btn cta">Encomendar</a>
    </nav>
  </header>

  <button className="sidebar-toggle" aria-label="Abrir menu lateral">
    <span aria-hidden="true">&#9776;</span>
  </button>

  <aside className="sidebar" aria-label="Menu lateral">
    <button className="sidebar-close" aria-label="Fechar menu lateral">&times;</button>

    <div className="sidebar-logo">
      <img src="./images/logo.jpg" alt="Logo La Brigabi" />
      <p className="sidebar-slogan">Doces artesanais com carinho</p>
    </div>

    <div className="sidebar-social" aria-label="Redes sociais">
      <a href="https://instagram.com/seuusuario" target="_blank" rel="noopener" title="Instagram">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" />
      </a>
      <a href="https://wa.me/5511999999999" target="_blank" rel="noopener" title="WhatsApp">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" />
      </a>
      <a href="mailto:contato@labrigabi.com" target="_blank" rel="noopener" title="E-mail">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/maildotru.svg" alt="E-mail" />
      </a>
    </div>

    <div className="sidebar-video">
      <div className="anuncio">
        <video src="./anuncio.mp4" autoPlay loop muted playsInline aria-label="Vídeo de apresentação La Brigabi"></video>
      </div>
    </div>

    <div className="sidebar-info">
      <p><strong>Telefone:</strong> (11) 99999-9999</p>
      <p><strong>E-mail:</strong> contato@labrigabi.com</p>
      <p><strong>Endereço:</strong> Vila Matilde – São Paulo, SP</p>
      <p><strong>Atendimento:</strong> Seg–Sáb · 9h às 19h</p>
    </div>
  </aside>
  <div className="sidebar-overlay" aria-hidden="true"></div>

  <section className="hero" aria-labelledby="hero-title">
    <div className="hero-inner">
      <h2 id="hero-title">Doces artesanais feitos sob encomenda</h2>
      <p>Desde 2023, criando bolos, doces e sobremesas com ingredientes selecionados, atendimento personalizado e entrega do jeitinho que você precisa.</p>
      <div className="hero-cta">
        <a className="btn cta" href="https://wa.me/5511999999999?text=Olá%20La%20Brigabi!%20Quero%20fazer%20uma%20encomenda." target="_blank" rel="noopener">Pedir pelo WhatsApp</a>
        <a className="btn ghost" href="#produtos">Ver produtos</a>
      </div>
    </div>
  </section>

  <section className="features" aria-label="Diferenciais">
    <div className="feature">
      <span className="feature-ico" aria-hidden="true">🧁</span>
      <h3>100% Artesanal</h3>
      <p>Feitos à mão, com carinho em cada detalhe.</p>
    </div>
    <div className="feature">
      <span className="feature-ico" aria-hidden="true">📦</span>
      <h3>Sob Encomenda</h3>
      <p>Personalizamos sabores, tamanhos e acabamentos.</p>
    </div>
    <div className="feature">
      <span className="feature-ico" aria-hidden="true">🥛</span>
      <h3>Ingredientes Selecionados</h3>
      <p>Qualidade que dá para ver e provar.</p>
    </div>
    <div className="feature">
      <span className="feature-ico" aria-hidden="true">🤝</span>
      <h3>Atendimento Próximo</h3>
      <p>Profissionalismo e atenção do início à entrega.</p>
    </div>
  </section>

  <section id="sobre" className="card">
    <h2>Sobre Nós</h2>
    <p>Fundada em 2023, nossa doceria artesanal nasceu com um propósito simples, mas muito especial: transformar momentos comuns em lembranças inesquecíveis. Localizados no coração da Vila Matilde, em São Paulo, dedicamo-nos a criar bolos, doces e sobremesas sob encomenda, sempre com ingredientes frescos, selecionados e preparados com o cuidado que você merece.</p>
    <p>Cada receita que sai da nossa cozinha carrega não apenas sabor, mas também a essência de um trabalho feito com paixão e dedicação. Como empresa autônoma, valorizamos o atendimento próximo e personalizado, onde cada detalhe é pensado para refletir o seu gosto e tornar cada pedido verdadeiramente único.</p>
    <p>Seja para um aniversário, um casamento, uma comemoração especial ou simplesmente para adoçar o seu dia, oferecemos produtos que unem beleza, sabor e qualidade. Do clássico ao criativo, nossas criações são feitas à mão, de forma artesanal, garantindo um toque caseiro que conquista à primeira mordida.</p>
    <p>Mais do que vender doces, nossa missão é entregar felicidade. É por isso que colocamos profissionalismo e amor em cada etapa — da escolha dos ingredientes à finalização da entrega. Aqui, cada produto é mais do que um doce: é um pedaço da nossa história, feito especialmente para fazer parte da sua.</p>
  </section>

  <section id="produtos">
    <header className="section-head">
      <h2>Produtos</h2>
      <p>Explore nossa variedade de doces, bolos e sobremesas. Trabalhamos sob encomenda e ajustamos a receita ao seu gosto.</p>
      <div className="filters" role="tablist" aria-label="Filtro de categorias">
        <button className="filter-btn active" data-filter="all" role="tab" aria-selected="true">Todos</button>
        <button className="filter-btn" data-filter="morango" role="tab">Morangos do Amor</button>
        <button className="filter-btn" data-filter="doces" role="tab">Doces</button>
        <button className="filter-btn" data-filter="ovos" role="tab">Ovos de Páscoa</button>
        <button className="filter-btn" data-filter="bolos" role="tab">Bolos Artesanais</button>
      </div>
    </header>

    <div className="produtos-grid">
      <h3 className="category-title">Morangos do Amor</h3>
      <div className="grid-list" data-category="morango">
        <article className="produto-item" data-cat="morango">
          <figure className="produto-zoom">
            <div className="produto-foto">
              <img src="./images/amor.jpg" loading="lazy" alt="Morangos do amor com cobertura de chocolate" />
            </div>
            <figcaption className="produto-legenda">Caixa com 6 – a partir de R$ 39</figcaption>
          </figure>
          <a className="btn mini" target="_blank" rel="noopener"
             href="https://wa.me/5511999999999?text=Quero%20encomendar%20Morangos%20do%20Amor%20(6%20un).">Pedir no WhatsApp</a>
        </article>

        <article className="produto-item" data-cat="morango">
          <figure className="produto-zoom">
            <div className="produto-foto">
              <img src="./images/morango-1.jpg" loading="lazy" alt="Morangos do amor decorados" />
            </div>
            <figcaption className="produto-legenda">Caixa com 12 – a partir de R$ 69</figcaption>
          </figure>
          <a className="btn mini" target="_blank" rel="noopener"
             href="https://wa.me/5511999999999?text=Quero%20encomendar%20Morangos%20do%20Amor%20(12%20un).">Pedir no WhatsApp</a>
        </article>

        <article className="produto-item" data-cat="morango">
          <figure className="produto-zoom">
            <div className="produto-foto">
              <img src="./images/morango-2.jpg" loading="lazy" alt="Morangos do amor com confeitos" />
            </div>
            <figcaption className="produto-legenda">Personalizado – sob consulta</figcaption>
          </figure>
          <a className="btn mini" target="_blank" rel="noopener"
             href="https://wa.me/5511999999999?text=Quero%20um%20kit%20de%20Morangos%20do%20Amor%20personalizado.">Pedir no WhatsApp</a>
        </article>
      </div>

      <h3 className="category-title">Doces</h3>
      <div className="grid-list" data-category="doces">
        <article className="produto-item" data-cat="doces">
          <figure className="produto-zoom">
            <div className="produto-foto">
              <img src="./images/doce-1.jpg" loading="lazy" alt="Brigadeiros gourmet sortidos" />
            </div>
            <figcaption className="produto-legenda">Brigadeiros gourmet – a partir de R$ 120/kg</figcaption>
          </figure>
          <a className="btn mini" target="_blank" rel="noopener"
             href="https://wa.me/5511999999999?text=Quero%20brigadeiros%20gourmet.">Pedir no WhatsApp</a>
        </article>

        <article className="produto-item" data-cat="doces">
          <figure className="produto-zoom">
            <div className="produto-foto">
              <img src="./images/doce-2.jpg" loading="lazy" alt="Beijinhos tradicionais" />
            </div>
            <figcaption className="produto-legenda">Beijinhos – a partir de R$ 110/kg</figcaption>
          </figure>
          <a className="btn mini" target="_blank" rel="noopener"
             href="https://wa.me/5511999999999?text=Quero%20beijinhos.">Pedir no WhatsApp</a>
        </article>

        <article className="produto-item" data-cat="doces">
          <figure className="produto-zoom">
            <div className="produto-foto">
              <img src="./images/doce-3.jpg" loading="lazy" alt="Casadinhos com chocolate" />
            </div>
            <figcaption className="produto-legenda">Casadinhos – a partir de R$ 120/kg</figcaption>
          </figure>
          <a className="btn mini" target="_blank" rel="noopener"
             href="https://wa.me/5511999999999?text=Quero%20casadinhos.">Pedir no WhatsApp</a>
        </article>
      </div>

      <h3 className="category-title">Ovos de Páscoa</h3>
      <div className="grid-list" data-category="ovos">
        <article className="produto-item" data-cat="ovos">
          <figure className="produto-zoom">
            <div className="produto-foto">
              <img src="./images/ovo-1.jpg" loading="lazy" alt="Ovo de colher de brigadeiro" />
            </div>
            <figcaption className="produto-legenda">Ovo de colher – a partir de R$ 59</figcaption>
          </figure>
          <a className="btn mini" target="_blank" rel="noopener"
             href="https://wa.me/5511999999999?text=Quero%20ovo%20de%20colher.">Pedir no WhatsApp</a>
        </article>

        <article className="produto-item" data-cat="ovos">
          <figure className="produto-zoom">
            <div className="produto-foto">
              <img src="./images/ovo-2.jpg" loading="lazy" alt="Ovo recheado com confeitos" />
            </div>
            <figcaption className="produto-legenda">Recheado – a partir de R$ 69</figcaption>
          </figure>
          <a className="btn mini" target="_blank" rel="noopener"
             href="https://wa.me/5511999999999?text=Quero%20ovo%20recheado.">Pedir no WhatsApp</a>
        </article>

        <article className="produto-item" data-cat="ovos">
          <figure className="produto-zoom">
            <div className="produto-foto">
              <img src="./images/ovo-3.jpg" loading="lazy" alt="Ovo decorado premium" />
            </div>
            <figcaption className="produto-legenda">Premium – sob consulta</figcaption>
          </figure>
          <a className="btn mini" target="_blank" rel="noopener"
             href="https://wa.me/5511999999999?text=Quero%20um%20ovo%20premium.">Pedir no WhatsApp</a>
        </article>
      </div>

      <h3 className="category-title">Bolos Artesanais</h3>
      <div className="grid-list" data-category="bolos">
        <article className="produto-item" data-cat="bolos">
          <figure className="produto-zoom">
            <div className="produto-foto">
              <img src="./images/bolo-1.jpg" loading="lazy" alt="Bolo de chocolate com morangos" />
            </div>
            <figcaption className="produto-legenda">Bolo de chocolate – a partir de R$ 89</figcaption>
          </figure>
          <a className="btn mini" target="_blank" rel="noopener"
             href="https://wa.me/5511999999999?text=Quero%20um%20bolo%20de%20chocolate.">Pedir no WhatsApp</a>
        </article>

        <article className="produto-item" data-cat="bolos">
          <figure className="produto-zoom">
            <div className="produto-foto">
              <img src="./images/bolo-2.jpg" loading="lazy" alt="Bolo de chantilly decorado" />
            </div>
            <figcaption className="produto-legenda">Bolo decorado – a partir de R$ 119</figcaption>
          </figure>
          <a className="btn mini" target="_blank" rel="noopener"
             href="https://wa.me/5511999999999?text=Quero%20um%20bolo%20decorado.">Pedir no WhatsApp</a>
        </article>

        <article className="produto-item" data-cat="bolos">
          <figure className="produto-zoom">
            <div className="produto-foto">
              <img src="./images/bolo-3.jpg" loading="lazy" alt="Bolo naked cake com frutas" />
            </div>
            <figcaption className="produto-legenda">Naked cake – sob consulta</figcaption>
          </figure>
          <a className="btn mini" target="_blank" rel="noopener"
             href="https://wa.me/5511999999999?text=Quero%20um%20naked%20cake.">Pedir no WhatsApp</a>
        </article>
      </div>
    </div>

    <div className="section-cta">
      <a className="btn cta" href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20uma%20encomenda." target="_blank" rel="noopener">Fazer encomenda agora</a>
    </div>
  </section>

  <section id="depoimentos" className="testimonials card">
    <h2>O que dizem nossos clientes</h2>
    <div className="testi-list">
      <blockquote className="testi">
        <p>“Os morangos do amor foram o sucesso da festa! Entrega pontual e capricho impecável.”</p>
        <cite>— Vanessa, Vila Matilde</cite>
      </blockquote>
      <blockquote className="testi">
        <p>“Bolo delicioso e lindo! Atendimento super atencioso do começo ao fim.”</p>
        <cite>— Rafael, Penha</cite>
      </blockquote>
      <blockquote className="testi">
        <p>“Doces artesanais de verdade. Dá para sentir a qualidade em cada mordida.”</p>
        <cite>— Bianca, Tatuapé</cite>
      </blockquote>
    </div>
  </section>

  <section id="encomendas" className="card">
    <h2>Encomendas</h2>
    <p>Faça sua encomenda personalizada e surpreenda a todos com nossos deliciosos produtos. Responderemos o quanto antes.</p>

    <form className="order-form" action="#" method="post" autoComplete="on" noValidate>
      <div className="form-row">
        <label htmlFor="nome">Seu nome</label>
        <input id="nome" name="nome" type="text" required placeholder="Seu nome completo" />
      </div>

      <div className="form-row">
        <label htmlFor="email">Seu e-mail</label>
        <input id="email" name="email" type="email" required placeholder="voce@email.com" />
      </div>

      <div className="form-row">
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" rows="4" placeholder="Conte o que você quer encomendar (data, sabor, tamanho...)"></textarea>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn cta">Enviar pedido</button>
        <a className="btn ghost" target="_blank" rel="noopener"
           href="https://wa.me/5511999999999?text=Olá!%20Quero%20fazer%20uma%20encomenda.">Falar no WhatsApp</a>
      </div>
    </form>
  </section>

  <section className="cta-strip" aria-label="Chamada para ação">
    <p>Pronto para adoçar o seu momento?</p>
    <a className="btn light" href="https://wa.me/5511999999999?text=Olá!%20Quero%20um%20orçamento." target="_blank" rel="noopener">Pedir orçamento</a>
  </section>

  <footer className="site-footer">
    <div className="footer-grid">
      <div>
        <h4>La Brigabi</h4>
        <p>Doceria artesanal na Vila Matilde, SP. Bolos, doces e sobremesas sob encomenda desde 2023.</p>
      </div>
      <div>
        <h4>Contato</h4>
        <ul>
          <li><a href="mailto:contato@labrigabi.com">contato@labrigabi.com</a></li>
          <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener">(11) 99999-9999</a></li>
          <li>Vila Matilde – São Paulo, SP</li>
        </ul>
      </div>
      <div>
        <h4>Links</h4>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#encomendas">Encomendas</a></li>
        </ul>
      </div>
    </div>
    <p className="copy">&copy; 2025 La Brigabi. Todos os direitos reservados.</p>
  </footer>
</div>

  )
}

export default App
