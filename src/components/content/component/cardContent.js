import React from 'react'
import styled from "styled-components"

import ButtonAdd from './buttonAdd';
import Rating from './rating';

const CardMenu = styled.div`
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
	margin-bottom: ${props => props.theme.spaces.large};
`

const MenuContent = styled.div`
	padding: ${props => props.theme.spaces.medium};
`

const TextTitle = styled.div`
	color: ${props => props.theme.colors.black};
	font-size: ${props => props.theme.fontSizes.medium};
	font-weight: bold;
	margin-bottom: ${props => props.theme.spaces.verySmall};
`

const TextSubTitle = styled.div`
	color: ${props => props.theme.colors.grey};
	font-size: ${props => props.theme.fontSizes.small};
	font-weight: bold;
`

const ContainerPrice = styled.div`
	display: flex;
	width: 100%;
	margin-top: ${props => props.theme.spaces.large};
`

const TextPrice = styled.div`
	flex-grow: 1;
	color: ${props => props.theme.colors.black};
	font-size: ${props => props.theme.fontSizes.medium};
	font-weight: bold;
	margin-bottom: ${props => props.theme.spaces.verySmall};
	line-height: 30px;
`

const CardContent = ({data, onClickAdd}) => {
	return(
		<CardMenu>
			<img src={data.image} width="100%" alt="menu"/>
			<MenuContent>
				<Rating />
				<TextTitle>{data.title}</TextTitle>
				<TextSubTitle>{data.subtitle}</TextSubTitle>

				<ContainerPrice>
					<TextPrice>{data.price}</TextPrice>
					<ButtonAdd onClickAdd={onClickAdd}/>
				</ContainerPrice>
			</MenuContent>
		</CardMenu>
	)
}

export default CardContent