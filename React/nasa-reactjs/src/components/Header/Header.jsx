import './Header.css'
const Header = () => {
  return (
    <header className="header">
      <img
        className="logo"
        src={'https://api.nasa.gov/assets/img/favicons/favicon-192.png'}
        alt="LOGO NASA"
      />
      <h2 className="title">NASA API</h2>
    </header>
  );
};

export default Header;
