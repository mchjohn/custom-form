import {
  Stack,
  Button,
} from '@chakra-ui/react';

type Props = {
  title: string
}

export function SubmitButton({ title }: Props) {
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
        type='submit'
      >
        {title}
      </Button>
    </Stack>
  );
}
