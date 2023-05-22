import { Flex, FlexProps } from '../flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => {
	return (
		<Flex direction={'row'} align={'center'} {...props} />
	);
};