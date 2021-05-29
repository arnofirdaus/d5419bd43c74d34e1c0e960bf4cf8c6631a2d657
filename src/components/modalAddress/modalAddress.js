import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import ListAddress from './component/ListAddress';
import InputAddress from './component/inputAddress';
import { useDispatch, useSelector } from 'react-redux';
import { addressAction } from '../../actions';
import { bindActionCreators } from 'redux';

const animationDuration = 350;
const Container = styled.div`
	position: absolute;
	display: flex;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background: ${props => props.isShowOverlay ? 'rgba(0,0,0,0.5)' : 'transparent' } ;
	bottom: ${props => props.isShow ? '0' : '-100%'};
	transition-property: all;
	transition-duration: ${animationDuration}ms;
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
	const [overlay, setOverlay] = useState(false)
	const state = useSelector((state) => state.address)
	const dispatch = useDispatch()
	const { showModal } = bindActionCreators(addressAction, dispatch)

	const handleClose = () => {
		showModal(false)
	}

	useEffect(() => {
		if(state.isModalShow){
			setTimeout(() => setOverlay(true), animationDuration / 2);
		}else{
			setOverlay(false)
		}
	}, [state.isModalShow])

	return(
		<Container isShow={state.isModalShow} isShowOverlay={overlay}>
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