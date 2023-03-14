import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { Button } from 'shared/ui';
import { ButtonVariant } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
	const { className } = props;
	const { t } = useTranslation();

	const [value, setValue] = useState('');

	const onChange = (val: string) => {
		setValue(val);
	};

	return (
		<div className={cn(cls.loginForm, {}, [className])}>
			<div className={cls.inputsWrapper}>
				<Input
					autofocus
					className={cls.input}
					value={value}
					onChange={onChange}
					placeholder={t('Введите логин')}
				/>
				<Input
					className={cls.input}
					placeholder={t('Введите пароль')}
				/>
			</div>
			<Button
				className={cls.loginBtn}
				variant={ButtonVariant.OUTLINE}
			>
				{t('Войти')}
			</Button>
		</div>
	);
};