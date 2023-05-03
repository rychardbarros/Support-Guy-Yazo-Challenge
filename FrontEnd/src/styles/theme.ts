// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
export const customTheme = extendTheme({
	styles: {
		global: {
			// styles for the `body`
			body: {
				/* 	bg: '#161A2B', */
				bg: '#16182D',
				color: 'white',
			},
			button: {
				cursor: 'pointer',
			},
			// styles for the `a`
			a: {
				color: 'teal.500',
				_hover: {
					textDecoration: 'underline',
				},
			},
		},
	},
})
