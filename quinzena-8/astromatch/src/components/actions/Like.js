import React from 'react';

const Like = ({ userId, modifySuperficialChoices }) => (
  <button
    type="button"
    onClick={() => modifySuperficialChoices(userId, 'add_like_user')}
  >
    <img src="images/misc/like.png" alt="Like User" />
  </button>
);

export default Like;
