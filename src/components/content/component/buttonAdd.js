import React from "react"
import styled from "styled-components"
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { cartAction } from "../../../actions";

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

const ButtonAdd = () => {
	const dispatch = useDispatch()
	const timeoutModal = 3; 
	const { showCart } = bindActionCreators(cartAction, dispatch)

	const handleShowCart = (show) => {
		showCart(show)
		setTimeout(() => showCart(false), timeoutModal * 1000);
	}

	return (
		<Button onClick={() => handleShowCart(true)}>
			Add 
			<AddIcon style={{marginLeft: "2px", fontSize: "16px", fontWeight: "bold", color: "white", verticalAlign: "text-top"}}/>
		</Button>
	)
}

export default ButtonAdd