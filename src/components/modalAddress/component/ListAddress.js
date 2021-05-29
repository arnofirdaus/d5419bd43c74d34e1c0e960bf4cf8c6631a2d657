import React from 'react'
import styled from 'styled-components'
import RoomIcon from '@material-ui/icons/Room';

const Container = styled.div`
	display: flex;
	padding: ${props => props.theme.spaces.medium};
	border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
	margin-top: ${props => props.theme.spaces.small};
`

const ContainerTitle = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	margin-left: ${props => props.theme.spaces.small};
`

const ItemTitle = styled.div`
	color: ${props => props.theme.colors.black};
	font-weight: bold;
	font-size: ${props => props.theme.fontSizes.medium};

`
const ItemSubTitle = styled.div`
	color: ${props => props.theme.colors.grey};
	font-size: ${props => props.theme.fontSizes.small};
`

const ContainerResult = styled.div`
	margin-top: ${props => props.theme.spaces.small};
	height: calc(100% - 210px);
	overflow: auto;
`

const ListAddress = () => {

	return(
		<ContainerResult>

			<Container>
				<RoomIcon style={{margin: "auto", color: "#6e7679"}}/>
				<ContainerTitle>
					<ItemTitle>Kulina</ItemTitle>
					<ItemSubTitle>Jalan tudlongo no.4</ItemSubTitle>
				</ContainerTitle>
			</Container>

		</ContainerResult>
	)
}

export default ListAddress