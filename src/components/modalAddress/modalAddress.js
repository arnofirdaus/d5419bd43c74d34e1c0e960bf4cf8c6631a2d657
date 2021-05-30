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
	position: fixed;
	display: flex;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background: ${props => props.isShowOverlay ? 'rgba(0,0,0,0.5)' : 'transparent' } ;
	margin-top: ${props => props.isShow ? '0' : '100vh'};
	transition-property: margin-top;
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

const ContainerResult = styled.div`
	margin-top: ${props => props.theme.spaces.small};
	height: calc(100% - 210px);
	overflow-y: auto;
	overflow-x: hidden;
`

const data = [
	{
		name: "Kulina",
		address: "Jl. Tulodong Atas No.28, RT.6/RW.3, Senayan, Kebayoran Baru, South Jakarta City, Jakarta 12190"
	},
	{
		name: "Pancoran Riverside Appartment",
		address: "Jalan Pengadegan, Pancoran South Jakarta"
	},
	{
		name: "Jalan Tulodong atas 28",
		address: "Jalan Tulodong atas 28, Senayan, Kebayoran Baru"
	},
	{
		name: "Block71 Jakarta",
		address: "Ariobimo Sentral, South Jakarta, RT.9/RW/4, East Jakarta"
	}
]

const ModalAddress = () => {
	const [overlay, setOverlay] = useState(false)
	const [showList, setShowList] = useState(false)
	const [dataAddress, setListAddress] = useState(data)
	const state = useSelector((state) => state.address)
	const dispatch = useDispatch()
	const { showModal, setAddress } = bindActionCreators(addressAction, dispatch)

	const onChangeAddress = () => e => {
		if(e.target.value.length > 3){
			setAddress(e.target.value)
		}else{
			setAddress()
		}
	}
	
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

	useEffect(() => {
		setShowList(state.address ? true : false)

		if(state.address){
			const dataAddress = data.filter(
				(e) => e.name?.toLowerCase().match(state.address.toLowerCase()) 
					|| e.address?.toLowerCase().match(state.address.toLowerCase()))
					
			setListAddress(dataAddress)
		} 

	}, [state.address])

/* Logical component */
	return(
		<Container isShow={state.isModalShow} isShowOverlay={overlay}>
			<Panel>
				<ContainerClose >
					<CloseIcon style={{color: "#424749"}} onClick={() => handleClose()}	/>
				</ContainerClose>

				<TextTitle>Cek makanan yang tersedia di lokasi kamu!</TextTitle>
				<InputAddress onChangeAddress={onChangeAddress}/>

				<ContainerResult>
					{showList && <ListAddress dataAddress={dataAddress}/>}
				</ContainerResult>

				<ContainerFooter>
					powered by Google
				</ContainerFooter>

			</Panel>
		</Container>

	)
}

export default ModalAddress