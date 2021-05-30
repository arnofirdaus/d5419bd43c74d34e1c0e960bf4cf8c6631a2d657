import React, { useState } from 'react'
import styled from "styled-components"
import TextDate from './component/textDate';
import { contentAction } from "../../actions"
import { bindActionCreators } from "redux"
import { useDispatch } from 'react-redux';
import CardContent from './component/cardContent';

const Container = styled.div`
	flex: ;
	padding: ${props => props.theme.spaces.medium};
	overflow: auto;
`

const ContainerMenu = styled.div`
	flex: 1;
	flex-direction: column;
`

/* Logical component */
const Content = () => {
	const [y, setY] = useState(0)
	const dispatch = useDispatch()
	const { showTab, showCart } = bindActionCreators(contentAction, dispatch)
	const timeoutModal = 3; 

	const handleShowCart = () => {
		showCart(true)
		setTimeout(() => showCart(false), timeoutModal * 1000);
	}

  const handleScroll = (e) => {
		if(e.target.scrollTop > y){
			showTab(false)
		}else{
			showTab(true)
		}
		setY(e.target.scrollTop)
  }

	const content = [
		{
			title: 'Roasted Chicken with Scrambled Egg',
			subtitle: 'by Kulina &#8226; Uptown Lunch',
			image: process.env.PUBLIC_URL + "/assets/image-1.jpg",
			price: 'Rp. 35,000'
		},
		{
			title: 'Roasted Chicken with Scrambled Egg',
			subtitle: 'by Kulina &#8226; Uptown Lunch',
			image: process.env.PUBLIC_URL + "/assets/image-2.jpg",
			price: 'Rp. 35,000'
		},
		{
			title: 'Roasted Chicken with Scrambled Egg',
			subtitle: 'by Kulina &#8226; Uptown Lunch',
			image: process.env.PUBLIC_URL + "/assets/image-3.jpg",
			price: 'Rp. 35,000'
		},
		{
			title: 'Roasted Chicken with Scrambled Egg',
			subtitle: 'by Kulina &#8226; Uptown Lunch',
			image: process.env.PUBLIC_URL + "/assets/image-1.jpg",
			price: 'Rp. 35,000'
		},
		{
			title: 'Roasted Chicken with Scrambled Egg',
			subtitle: 'by Kulina &#8226; Uptown Lunch',
			image: process.env.PUBLIC_URL + "/assets/image-2.jpg",
			price: 'Rp. 35,000'
		},
		{
			title: 'Roasted Chicken with Scrambled Egg',
			subtitle: 'by Kulina &#8226; Uptown Lunch',
			image: process.env.PUBLIC_URL + "/assets/image-3.jpg",
			price: 'Rp. 35,000'
		},
	]

	return(
		<Container onScroll={handleScroll}>
			<ContainerMenu>
				<TextDate text={'Kamis, 13 Maret 2021'}/>
				{
					content.map((data, i) => <CardContent data={data} key={i} onClickAdd={handleShowCart}/>)
				}
			</ContainerMenu>
		</Container>
	)
}

export default Content