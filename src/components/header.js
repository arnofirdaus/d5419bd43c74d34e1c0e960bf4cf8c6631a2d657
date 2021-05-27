import React from "react"
import styled from "styled-components"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Container = styled.div`
  width: flex;
	padding: ${props => props.theme.space.small};
`;

const Header = () => {
	return(
		<Container>
			<ArrowBackIcon />
		</Container>
	)
}

export default Header