import React from 'react'
import styled from 'styled-components'
import RoomIcon from '@material-ui/icons/Room';

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

const ListAddress = ({dataAddress}) => {
	return (
			dataAddress?.map((e, i) =>
				<Container key={i}>
					<RoomIcon style={{ margin: "auto", color: "#6e7679", background: "#e2e4e4", borderRadius: '100%', fontSize: '22px', padding: '4px' }} />
					<ContainerTitle>
						<ItemTitle>{e.name}</ItemTitle>
						<ItemSubTitle>{e.address}</ItemSubTitle>
					</ContainerTitle>
				</Container>
			)
	)
}

export default ListAddress