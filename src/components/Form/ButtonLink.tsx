import {
  Link,
  Text,
  Stack,
} from '@chakra-ui/react';

export function ButtonLink() {
  return (
    <Stack pt='6'>
      <Text align='center'>
        Já tem conta? <Link color='pink.600'>Entrar</Link>
      </Text>
    </Stack>
  );
}
