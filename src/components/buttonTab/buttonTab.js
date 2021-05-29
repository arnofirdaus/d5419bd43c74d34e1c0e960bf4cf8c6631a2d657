import React, { useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
	padding: ${props => props.isShow ? props.theme.spaces.medium : '0'} ${props => props.theme.spaces.medium};
`

const ContainerButton = styled.div`
	width: 100%;
  display: flex;
	border-radius: 8px;
	overflow: hidden;
	height: ${props => props.isShow ? '35px' : '0'};
	align-item: center;

	transition-property: height;
	transition-duration: .25s;
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
	const [selected, setSelected] = useState("Lunch")
	const state = useSelector((state) => state.content)



	return(
		<Container isShow={state.isTabShow}>
			<ContainerButton isShow={state.isTabShow}>
				<Button active={selected === 'Lunch'} onClick={() => setSelected("Lunch")}>Lunch</Button>
				<Button active={selected === 'Dinner'} onClick={() => setSelected("Dinner")}>Dinner</Button>
			</ContainerButton>
		</Container>
	)
}

export default ButtonTab