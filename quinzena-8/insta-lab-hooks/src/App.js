import React from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  return (
    <AppContainer>
      <Post
        nomeUsuario={'Vulquimar Silva'}
        fotoUsuario={'https://media-exp1.licdn.com/dms/image/C4D03AQHrBYDgXlZSvg/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=zPa_WI9g8wsC0Nba0zpSAYk0EO5bHjATUbHGG6SGwLU'}
        fotoPost={'https://picsum.photos/200/150'}
      />
    </AppContainer>
  );
}


export default App;
