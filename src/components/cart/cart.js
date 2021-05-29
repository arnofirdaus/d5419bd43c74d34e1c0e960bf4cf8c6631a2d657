import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Container = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
	background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
	padding: ${props => props.theme.spaces.medium} ${props => props.theme.spaces.small};
`

const ContainerAlert = styled.div`
	background: ${props => props.theme.colors.brown};
	border-radius: 5px;
	width: calc(100% - ${props => props.theme.spaces.small} * 2); 
	display: flex;
`

const ContainerText = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${props => props.theme.spaces.small} ${props => props.theme.spaces.medium};
	flex-grow: 1;

`

const TextTitle = styled.div`
	color: white;
	font-size: ${props => props.theme.fontSizes.medium};
	font-weight: bold;
`

const TextSubTitle = styled.div`
	color: ${props => props.theme.colors.white};
	font-size: ${props => props.theme.fontSizes.small};
`

const ContainerIcon = styled.div`
	margin: auto;
	padding-right: ${props => props.theme.fontSizes.verySmall};
	color: white;
`

const Cart = () => {
	return(
		<Container>
			<ContainerAlert>
				<ContainerText>
					<TextTitle>5 Items | Rp 125,000</TextTitle>
					<TextSubTitle>Termasuk ongkos kirim</TextSubTitle>
				</ContainerText>
				<ContainerIcon>
					<ShoppingCartOutlinedIcon />
					<ChevronRightIcon />
				</ContainerIcon>
			</ContainerAlert>
		</Container>
	)

}


export default Cart