import logo from '../../svg/logo.svg';

const Header = () => {
  const desclogo = 'Essa é o logotipo do Blog.';
  return (
    <>
      <header className="flex-space-between">
        <div className="logo">
          <img src={logo} alt={desclogo} />
        </div>
        <div className="search">
          <input type="text" name="search" className="input-search" />
        </div>
        <ul className="menu">
          <li className="nav-link">
            <a href="#">Categorias</a>
          </li>
          <li className="nav-link">
            <a href="#">Sobre nós</a>
          </li>
          <li className="nav-link">
            <a href="#">Contato</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
