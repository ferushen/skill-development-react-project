import { memo, useCallback } from 'react';
import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import { Button, ButtonVariant } from '@/shared/ui/button';

import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';

interface CodeProps {
	className?: string;
	text: string;
}

export const Code = memo((props: CodeProps) => {
	const { className, text } = props;

	const mods: Mods = {};

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<pre className={cn(cls.code, mods, [className])}>
			<Button
				className={cls.copyBtn}
				variant={ButtonVariant.Clear}
				onClick={onCopy}
			>
				<CopyIcon className={cls.copyIcon} />
			</Button>
			<code>
				{text}
			</code>
		</pre>
	);
});