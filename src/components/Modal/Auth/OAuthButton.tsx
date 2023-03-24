import { auth } from '@/firebase/clientApp';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const OAuthButton:React.FC = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	
	return (
		<Flex direction='column' width='100%' mb={4}>
			<Button variant='oath' mb={4} isLoading={loading} onClick={()=> signInWithGoogle()}>
				<Image alt='Continue with Google' src='/images/googlelogo.png' height='20px' mr={4}/>
				Continue with Google
			</Button>
			<Button>Some other provider</Button>
			{error && <Text>{error.message}</Text>}			
		</Flex>
	) 
}
export default OAuthButton;