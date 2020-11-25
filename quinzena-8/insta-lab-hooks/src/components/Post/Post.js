import React, { useState } from 'react';
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles';
import IconeComContador from '../IconeComContador/IconeComContador';
import SecaoComentario from '../SecaoComentario/SecaoComentario';
import iconeCoracaoBranco from '../../img/favorite-white.svg';
import iconeCoracaoPreto from '../../img/favorite.svg';
import iconeComentario from '../../img/comment_icon.svg';



export default function Post(props) {

  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [usuarioComentario, setUsuarioComentario] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])

  const onClickCurtida = () => {
      setNumeroCurtidas(numeroCurtidas + 1)
  };

  const onClickComentario = () => {
    setUsuarioComentario(!usuarioComentario)
  };

  const enviarComentario = (comentario) => {
    const todosComentarios = [...comentarios, comentario]

    setComentarios(todosComentarios)
    setUsuarioComentario("")
    setNumeroComentarios(numeroComentarios + 1)
  }

  const iconeCurtida = numeroCurtidas ? iconeCoracaoPreto : iconeCoracaoBranco;

  const caixaDeComentario = usuarioComentario ?
    <SecaoComentario enviarComentario={enviarComentario} /> : comentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}
