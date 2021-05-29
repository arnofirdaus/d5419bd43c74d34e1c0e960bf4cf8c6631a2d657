import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import ListAddress from './component/ListAddress';
import InputAddress from './component/inputAddress';

const Container = styled.div`
	position: absolute;
	display: flex;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background: rgba(0,0,0,0.5);
	
`

const Panel = styled.div`
	position: absolute;
	border-radius: 10px 10px 0 0;
	top: 110px;
	height: calc(100% - 110px);
	background: white;
	overflow: hidden;
	padding: ${props => props.theme.spaces.medium};
	width: calc(100% - ${props => props.theme.spaces.medium} * 2);
`

const TextTitle = styled.div`
	font-size: ${props => props.theme.fontSizes.veryLarge};
	font-weight: bold;
	color: ${props => props.theme.colors.black};
	margin-top: ${props => props.theme.spaces.medium};

`

const ContainerClose = styled.div`
	text-align: right;
`

const ContainerFooter = styled.div`
	font-size: ${props => props.theme.fontSizes.small};
	text-align: center;
	color: ${props => props.theme.colors.black};
`

const ModalAddress = () => {

	const handleClose = () => {
		console.log('close')
	}

	return(
		<Container>
			<Panel>
				<ContainerClose >
					<CloseIcon style={{color: "#424749"}} onClick={() => handleClose()}	/>
				</ContainerClose>

				<TextTitle>Cek makanan yang tersedia di lokasi kamu!</TextTitle>
				<InputAddress />

				<ListAddress />

				<ContainerFooter>
					powered by Google
				</ContainerFooter>

			</Panel>
		</Container>

	)
}

export default ModalAddress