import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #ff6262;
  border-radius: 0.1em;
  color: #ff6262;
	font-size: 15px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
	:hover, :focus {
  color: #fff;
	background: #ff6262;
  outline: 0;
}
	`

const InputComment = styled.input `
    width: 100%;
		border: 1px solid;
		:hover, :focus {
  	outline: 0;
}
`

export default function SecaoComentario (props) {

	const [inputValue, setInputValue] = useState("")

	const onChangeComentario = (event) => {
		setInputValue(event.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={inputValue}
				onChange={onChangeComentario}
			/>
			<Button onClick={() => {props.enviarComentario(inputValue)}} >Enviar</Button>
		</CommentContainer>
	)
}
