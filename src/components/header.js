import React from "react"
import styled from "styled-components"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExpandMore from '@material-ui/icons/ExpandMore';

const Container = styled.div`
  display: flex;
	padding: ${props => props.theme.spaces.small};
`

const ContainerText = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: ${props => props.theme.spaces.medium};
`

const ContainerAddress = styled.div`
  display: flex;
`

const TextTitle = styled.span`
	color: ${props => props.theme.colors.black};
	font-size: ${props => props.theme.fontSizes.medium};
	font-weight: bold;
`

const TextSubTitle = styled.span`
	color: ${props => props.theme.colors.grey};
	font-size: ${props => props.theme.fontSizes.verySmall};
	text-transform: uppercase;
`

const Header = () => {
	return(
		<Container>
			<ArrowBackIcon style={{color: "#424749", marginTop: "4px"}}/>
			<ContainerText>
				<TextSubTitle>Alamat Pengantaran</TextSubTitle>
				<ContainerAddress>
					<TextTitle>
						Tokopedia Tower
					</TextTitle>
					<ExpandMore style={{color: "#f9423a"}} />
				</ContainerAddress>
			</ContainerText>

		</Container>
	)
}

export default Header