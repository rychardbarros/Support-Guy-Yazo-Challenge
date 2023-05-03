import { Flex, Heading, Tooltip } from '@chakra-ui/react'

export const Schedule = () => {
	return (
		<Flex width="100%" height="100vh" flexDirection="column">
			<Flex
				alignItems="center"
				bg="blue.800"
				width="100%"
				height="auto"
				justifyContent="space-around"
			>
				<Heading fontSize="1.5rem">Desafio 2 - Agenda</Heading>
				<Tooltip label="Hey, I'm here!" aria-label="A tooltip">
          Tooltip[botar icon]
				</Tooltip>
			</Flex>
		</Flex>
	)
}
