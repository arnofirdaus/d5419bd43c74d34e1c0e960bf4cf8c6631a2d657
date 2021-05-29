import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RoomIcon from '@material-ui/icons/Room';
import { useSelector } from 'react-redux';

const Container = styled.div`
	display: flex;
	padding: ${props => props.theme.spaces.medium} ${props => props.theme.spaces.small};
	border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
	margin-top: ${props => props.theme.spaces.small};
`

const ContainerTitle = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	margin-left: ${props => props.theme.spaces.medium};
	overflow: hidden;
`

const ItemTitle = styled.div`
	color: ${props => props.theme.colors.black};
	font-weight: bold;
	font-size: ${props => props.theme.fontSizes.medium};

`
const ItemSubTitle = styled.div`
	color: ${props => props.theme.colors.grey};
	font-size: ${props => props.theme.fontSizes.small};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 100%;

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

const ListAddress = () => {
	const state = useSelector(state => state.address)
	const [showList, setShowList] = useState(false)

	useEffect(() => {
		setShowList(state.address ? true : false)
	}, [state.address])

	return (
		<ContainerResult>
			{
				state.address && showList && 
				data.filter(
					(e) => e.name?.toLowerCase().match(state.address) 
						|| e.address?.toLowerCase().match(state.address.toLowerCase())
					).map((e, i) =>
					<Container key={i}>
						<RoomIcon style={{ margin: "auto", color: "#6e7679", background: "#e2e4e4", borderRadius: '100%', fontSize: '22px', padding: '4px' }} />
						<ContainerTitle>
							<ItemTitle>{e.name}</ItemTitle>
							<ItemSubTitle>{e.address}</ItemSubTitle>
						</ContainerTitle>
					</Container>
				)
			}

		</ContainerResult>
	)
}

export default ListAddress