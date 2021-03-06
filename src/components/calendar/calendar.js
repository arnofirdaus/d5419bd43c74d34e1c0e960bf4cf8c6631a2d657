import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
	padding: ${props => props.theme.spaces.small};
	border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
`

const ContainerScroll = styled.div`
	display: flex;
	overflow-x: auto;
`

const ContainerDate = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: ${props => props.theme.spaces.small};
	padding: 8px 14px;
	background: ${props => props.selected ? props.theme.colors.black : 'transparent'};
	border-radius: 100%;
	cursor: pointer;

`

const TextDay = styled.span`
	font-size: ${props => props.theme.fontSizes.verySmall};
	color: ${props => props.selected 
		? props.theme.colors.white 
		: props.disabled 
		? props.theme.colors.lightGrey 
		: props.theme.colors.black
	};
`

const TextDate = styled.span`
	font-size: ${props => props.theme.fontSizes.small};
	color: ${props => props.selected 
		? props.theme.colors.white 
		: props.disabled 
		? props.theme.colors.lightGrey 
		: props.theme.colors.black
	};
	font-weight: bold;
`

const Calendar = () => {
	const [selected, setSelected] = useState(13);

	const dates = [
		{day: "SEN", date: 10},
		{day: "SEL", date: 11},
		{day: "RAB", date: 12},
		{day: "KAM", date: 13},
		{day: "JUM", date: 14},
		{day: "SAB", date: 15, disabled: true},
		{day: "MIN", date: 16, disabled: true},
		{day: "SEN", date: 17},
		{day: "SEL", date: 18},
		{day: "RAB", date: 19},
		{day: "KAM", date: 20},
		{day: "JUM", date: 21},
		{day: "SAB", date: 22, disabled: true},
		{day: "MIN", date: 23, disabled: true},
	]
	return(
		<Container>
			<ContainerScroll>
			{
				dates.map((data, i) => {
					let isSelected = data.date === selected
					return (
						<ContainerDate key={i} selected={isSelected} onClick={() => !data.disabled ? setSelected(data.date) : null}>
								<TextDay disabled={data.disabled} selected={isSelected}>{data.day}</TextDay>
								<TextDate disabled={data.disabled} selected={isSelected}>{data.date}</TextDate>
						</ContainerDate>
					)
				})
			}
			</ContainerScroll>
		</Container>
	)
}

export default Calendar