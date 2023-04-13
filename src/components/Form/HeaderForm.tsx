import {
  Link,
  Text,
  Stack,
  Heading,
} from '@chakra-ui/react';

export function HeaderForm() {
  return (
    <Stack align='center'>
      <Heading fontSize='4xl' textAlign='center'>
        Cadastre-se
      </Heading>
      <Text fontSize='lg' color='gray.600'>
        e aproveite todos os recursos
      </Text>
    </Stack>
  );
}
