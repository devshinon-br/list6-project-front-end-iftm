import React from 'react';

import Container from './components/Container';

const cardsData = [
  { title: 'Plano de desenvolvimento institucional', icon: '' },
  { title: 'Pesquisa Pública processos IFTM', icon: '' },
  { title: 'Licitações e Contratos', icon: '' },
  { title: 'Receitas e Depesas', icon: '' },
  { title: 'Dados abertos', icon: '' },
  { title: 'Transparência e prestação de contas', icon: '' },
  { title: 'Servidores', icon: '' },
  { title: 'Perguntas Frequentes', icon: '' }]

function App() {
  return (
    <div>
      <Container
        title="Acesso à Informação"
        subtitle="Veja dados de transparência e governança"
        cards={cardsData}>
      </Container>
    </div>
  );
}

export default App;
