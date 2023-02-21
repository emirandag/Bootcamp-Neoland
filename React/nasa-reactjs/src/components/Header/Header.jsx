import './Header.css'
const Header = () => {
  return (
    <header className="header">
      <h2 className="title">NASA API</h2>
      <img
        className="logo"
        src={'https://api.nasa.gov/assets/img/favicons/favicon-192.png'}
        alt="LOGO NASA"
      />
    </header>
  );
};

export default Header;
