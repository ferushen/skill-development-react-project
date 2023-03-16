import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import { Button } from 'shared/ui';
import { ButtonVariant } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';
import { Text, TextVariant } from 'shared/ui/text/Text';

import cls from './LoginForm.module.scss';


interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
	const { className } = props;
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { username, password, isLoading, error } = useSelector(getLoginState);

	// для колбэков, которые передаем в качестве пропсом, используем useCallback, чтобы не изменялась ссылка
	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUserName(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);

	return (
		<div className={cn(cls.loginForm, {}, [className])}>
			<Text title={t('Форма авторизации')} />
			{error && <Text className={cls.error} text={t('Вы ввели неверный логин или пароль')} variant={TextVariant.Error} />}
			<div className={cls.inputsWrapper}>
				<Input
					value={username}
					onChange={onChangeUsername}
					className={cls.input}
					placeholder={t('Введите логин')}
					autoFocus={true}
				/>
				<Input
					value={password}
					onChange={onChangePassword}
					className={cls.input}
					placeholder={t('Введите пароль')}
				/>
			</div>
			<Button
				onClick={onLoginClick}
				className={cls.loginBtn}
				variant={ButtonVariant.OUTLINE}
				disabled={isLoading}
			>
				{t('Войти')}
			</Button>
		</div>
	);
});