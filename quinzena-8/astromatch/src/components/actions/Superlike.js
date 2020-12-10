import React from 'react';

const SuperLike = ({ userId, modifySuperficialChoices }) => (
  <button
    type="button"
    onClick={() => modifySuperficialChoices(userId, 'add_superlike_user')}
  >
    <img src="images/misc/superlike.png" alt="Superlike User" />
  </button>
);

export default SuperLike;
