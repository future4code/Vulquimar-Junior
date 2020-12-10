import React from 'react';

function refreshPage() { window.parent.location = window.parent.location.href; }

const Rewind = () => (
  <button type="button" onClick={() => refreshPage()} >
    <img id="slider-nav-item" src="images/misc/rewind.png" alt="Rewind User" />
  </button>
);

export default Rewind;
