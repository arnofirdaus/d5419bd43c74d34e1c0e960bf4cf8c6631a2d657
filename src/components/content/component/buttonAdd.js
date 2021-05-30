import React from "react"
import styled from "styled-components"
import AddIcon from '@material-ui/icons/Add';

const Button = styled.div`
	background: ${props => props.theme.colors.red};
	border-radius: 4px;
	color: ${props => props.theme.colors.white};
	font-size: ${props => props.theme.fontSizes.small};
	font-weight: bold;
	padding: 0 ${props => props.theme.spaces.large};
	height: 30px;
	line-height: 30px;
	text-transform: uppercase;
`

const ButtonAdd = ({onClickAdd}) => {
	return (
		<Button onClick={onClickAdd}>
			Add 
			<AddIcon style={{marginLeft: "2px", fontSize: "16px", fontWeight: "bold", color: "white", verticalAlign: "text-top"}}/>
		</Button>
	)
}

export default ButtonAdd