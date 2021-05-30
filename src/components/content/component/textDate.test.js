import React from 'react'
import { render } from '@testing-library/react'
import TextDate from './textDate'
import Theme from '../../../Theme' 

it('renders correctly', () => {
	const text = 'Minggu, 30 Mei 2021'
	const { getByText } = render(<Theme><TextDate text={text}/></Theme>)

	expect(getByText(text)).toBeInTheDocument()
})