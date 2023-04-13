import {
  Link,
  Text,
  Stack,
} from '@chakra-ui/react';

type Props = {
  text: string;
  textLink: string;
}

export function NavLink({ text, textLink }: Props) {
  return (
    <Stack pt='6'>
      <Text align='center'>
        {text} <Link color='pink.600'>{textLink}</Link>
      </Text>
    </Stack>
  );
}
