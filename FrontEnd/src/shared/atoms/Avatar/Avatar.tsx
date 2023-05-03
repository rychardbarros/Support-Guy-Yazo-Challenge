import { Center, Heading } from '@chakra-ui/react'
import { Image, Flex } from './Avatar.styled'

export function Avatar() {
	return (
		<Center flexDirection="column">
			<Image
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9h7hpVIHaLYalBISnldpCoxOrybqBo0CUi_m-r-Yqh0LFxefLXSdj-Ikbo6lyFHjDfc&usqp=CAU"
				objectFit="cover"
				alt="Dan Abramov"
			/>
			<Heading color="orange.400">Alucard Bestial</Heading>
		</Center>
	)
}
