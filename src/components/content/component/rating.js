import React from "react"
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import styled from "styled-components"

const TextRating = styled.div`
	color: ${props => props.theme.colors.grey};
	font-size: ${props => props.theme.fontSizes.medium};
	font-weight: bold;
	margin-bottom: ${props => props.theme.spaces.verySmall};
	flex: 1;
`

const Rating = () => {

	return (
		<TextRating>
			4.5
			<StarIcon fontSize={"small"} style={{color: "#f9423a", verticalAlign: "bottom", marginLeft: "4px"}}/>
			<StarIcon fontSize={"small"} style={{color: "#f9423a", verticalAlign: "bottom"}}/>
			<StarIcon fontSize={"small"} style={{color: "#f9423a", verticalAlign: "bottom"}}/>
			<StarIcon fontSize={"small"} style={{color: "#f9423a", verticalAlign: "bottom"}}/>
			<StarHalfIcon fontSize={"small"} style={{color: "#f9423a", verticalAlign: "bottom"}}/>
		</TextRating>
	)
}

export default Rating