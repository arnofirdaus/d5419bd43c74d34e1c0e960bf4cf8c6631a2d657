import React from "react"
import styled from "styled-components"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addressAction } from "../../actions";
import Address from "./component/address";

const Container = styled.div`
  display: flex;
	padding: ${props => props.theme.spaces.small};
`

/* Logical component */
const Header = () => {
	const dispatch = useDispatch()
	const { showModal } = bindActionCreators(addressAction, dispatch)

	const handleShowModal = () => {
		showModal(true)
	}

	return(
		<Container>
			<ArrowBackIcon style={{color: "#424749", marginTop: "4px"}}/>
			<Address handleShowModal={handleShowModal}/>
		</Container>
	)
}

export default Header