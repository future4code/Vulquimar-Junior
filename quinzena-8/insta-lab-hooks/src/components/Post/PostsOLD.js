import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'



export default function Post(props) {

  const [comentario, setComentario] = useState("")
  const [enviaComentario, setEnviaComentario] = useState([])
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)

  const onClickCurtida = () => {
    setNumeroCurtidas(numeroCurtidas + 1)
  };

  const onClickComentario = () => {
    setComentario(!comentario)
  };

  const enviarComentario = (comentario) => {
    const copiaComentario = [...enviaComentario, comentario]

    setEnviaComentario(copiaComentario)
    setComentario("")
  }

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
