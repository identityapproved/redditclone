import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

const OAuthButton:React.FC = () => {
	
	return (
		<Flex direction='column' width='100%' mb={4}>
			<Button variant='oath' mb={4}>
				<Image src='/images/googlelogo.png' height='20px' mr={4}/>
				Continue with Google
			</Button>
			<Button>Some other provider</Button>
			
		</Flex>
	) 
}
export default OAuthButton;