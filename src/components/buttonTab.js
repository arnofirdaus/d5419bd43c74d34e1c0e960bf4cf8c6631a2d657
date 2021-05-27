import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
	padding: ${props => props.theme.spaces.small};
`

const ContainerButton = styled.div`
	width: 100%;
  display: flex;
	border-radius: 8px;
	overflow: hidden;
	height: 35px;
	align-item: center;
`

const Button = styled.div`
	flex: 1;
  line-height: 35px;
	color: ${props => props.active ? props.theme.colors.white : props.theme.colors.grey};
	font-weight: bold;
	font-size: ${props => props.theme.fontSizes.small};
	text-align: center;
	background: ${props => props.active ? props.theme.colors.black : "transparent"};
	border: 1px solid ${props => props.theme.colors.lightGrey};
	
`

const ButtonTab = () => {
	const [selected, setSelected] = useState("Lunch");

	return(
		<Container>
			<ContainerButton>
				<Button active={selected === 'Lunch'} onClick={() => setSelected("Lunch")}>Lunch</Button>
				<Button active={selected === 'Dinner'} onClick={() => setSelected("Dinner")}>Dinner</Button>
			</ContainerButton>
		</Container>
	)
}

export default ButtonTab