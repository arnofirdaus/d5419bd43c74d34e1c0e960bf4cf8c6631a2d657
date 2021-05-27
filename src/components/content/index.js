import React, { useState } from 'react'
import styled from "styled-components"
import ButtonAdd from './component/buttonAdd';
import Rating from './component/rating';
import TextDate from './component/textDate';

const Container = styled.div`
	flex: 1;
	padding: ${props => props.theme.spaces.medium};
`

const ContainerMenu = styled.div`
	flex: 1;
	flex-direction: column;
`

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

const Content = () => {
	return(
		<Container>
			<ContainerMenu>
				<TextDate />
				<CardMenu>
					<img src="/assets/image-1.jpg" width="100%"/>
					<MenuContent>
						<Rating />
						<TextTitle>Roasted Chicken with Scrambled Egg</TextTitle>
						<TextSubTitle>by Kulina &#8226; Uptown Lunch</TextSubTitle>

						<ContainerPrice>
							<TextPrice>Rp. 35,000</TextPrice>
							<ButtonAdd />
						</ContainerPrice>
					</MenuContent>
				</CardMenu>

				<CardMenu>
					<img src="/assets/image-1.jpg" width="100%"/>
					<MenuContent>
						<Rating />
						<TextTitle>Roasted Chicken with Scrambled Egg</TextTitle>
						<TextSubTitle>by Kulina &#8226; Uptown Lunch</TextSubTitle>

						<ContainerPrice>
							<TextPrice>Rp. 35,000</TextPrice>
							<ButtonAdd />
						</ContainerPrice>
					</MenuContent>
				</CardMenu>
				
			</ContainerMenu>
		</Container>
	)
}

export default Content