import React from 'react';
import './styles.css';


export default({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header-logo">
        <a href="/"> 
          <img src="http://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Nteflix"/> 
        </a>
      </div>
      <div className="header-user">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile"/>
        </a>
      </div>
    </header>
  );
}
