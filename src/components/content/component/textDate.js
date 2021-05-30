import React from "react"
import styled from "styled-components"

const Text = styled.div`
	color: ${props => props.theme.colors.black};
	font-size: ${props => props.theme.fontSizes.medium};
	font-weight: bold;
	margin-bottom: ${props => props.theme.spaces.medium};
`

const TextDate = ({text}) => {
	return (
		<Text>{text}</Text>
	)
}

export default TextDate