import { Box, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'

export function ChallengeCard({ titleChallenge, descriptionChallenge }) {
	return (
		<LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
			<Box as="time" fontWeight="bold" color="blue.300" dateTime="2021-01-15 15:30:00 +0000 UTC">
				{titleChallenge}
			</Box>

			<Text mb="3">{descriptionChallenge}</Text>
			<Box as="a" color="teal.400" href="#" fontWeight="bold">
        Some inner link
			</Box>
		</LinkBox>
	)
}
