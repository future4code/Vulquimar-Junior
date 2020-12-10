import React from 'react';
import LikedPerson from './LikedPerson';

const UserPage = ({ activeUserImage, likedUsers, superLikedUsers }) => (
  <div id="lonely">
    <p>Nenhuma novidade em seu perfil 🤔</p>

    <span className="pulse">
      <img src={`/images/users/${activeUserImage}`} alt="Você" />
    </span>

    <div id="liked-people">
      <p>
        {likedUsers.length > 0
          ? "Pessoas que você deu like!"
          : ''}
      </p>

      {likedUsers.map(item => (
        <LikedPerson key={item.id} person={item} />
      ))}

      <p>{superLikedUsers.length > 0 ? 'Pessoas que você deu super like!' : ''}</p>

      {superLikedUsers.map(item => (
        <LikedPerson key={item.id} person={item} />
      ))}
    </div>
  </div>
);

export default UserPage;
