import React from 'react'
import styled from 'styled-components'
import RoomIcon from '@material-ui/icons/Room';

const ContainerInput = styled.div`
	display: flex;
	margin-top: ${props => props.theme.spaces.medium};
	border: 1px solid ${props => props.theme.colors.lightGrey};
	padding-left: ${props => props.theme.spaces.small};
	border-radius: 5px;
`

const Input = styled.input`
	&:focus {
		outline: none;
	}
	flex: 1;
	height: 40px;
	border: none;
	margin-left: ${props => props.theme.spaces.small};
	font-size: ${props => props.theme.fontSizes.large};
	color: ${props => props.theme.colors.black};

`

const InputAddress = ({onChangeAddress}) => {
	return(
		<ContainerInput>
			<RoomIcon style={{margin: "auto", color: "#f9423a"}}/>
			<Input onChange={onChangeAddress()} placeholder="Type here"/> 
		</ContainerInput>
	)
}


export default InputAddress