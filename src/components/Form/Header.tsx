import {
  Text,
  Stack,
  Heading,
} from '@chakra-ui/react';

type Props = {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: Props) {
  return (
    <Stack align='center'>
      <Heading fontSize='4xl' textAlign='center'>
        {title}
      </Heading>
      <Text fontSize='lg' color='gray.600'>
        {subtitle}
      </Text>
    </Stack>
  );
}
