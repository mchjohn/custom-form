import {
  Stack,
  Button,
} from '@chakra-ui/react';

export function ButtonForm() {
  return (
    <Stack spacing='10' pt='2'>
      <Button
        bg='pink.600'
        size="lg"
        color='blueGray.50'
        loadingText="Enviando"
        _hover={{
          bg: 'pink.500',
        }}
      >
        Cadastrar
      </Button>
    </Stack>
  );
}
