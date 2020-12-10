import React from 'react';
import Logo from './Logo';

function refreshPage() { window.parent.location = window.parent.location.href; }

const Header = () => (
  <header>
    <div className="fl">
      <button type="button">
        <img src="/images/misc/user.png" alt="Configurações do Usuário" />
      </button>
    </div>

    <div className="fl"  onClick={() => refreshPage()} style={{cursor: "pointer"}}>
      <Logo />
    </div>

    <div className="fl">
      <button type="button">
        <img src="/images/misc/messages.png" alt="Visualizar mensagens" />
      </button>
    </div>
  </header>
);

export default Header;
