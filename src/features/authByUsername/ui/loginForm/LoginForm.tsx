import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useDispatch, useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

import { Button } from 'shared/ui';
import { ButtonVariant } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';
import { Text, TextVariant } from 'shared/ui/text/Text';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
	className?: string;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer
};

const LoginForm = memo((props: LoginFormProps) => {
	const { className } = props;
	const { t } = useTranslation();

	const dispatch = useDispatch();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);
	const error = useSelector(getLoginError);

	// колбэки, которые передаются в качестве пропсов, оборачиваем useCallback, чтобы не изменялась ссылка
	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);

	return (
		<DynamicModuleLoader reducers={initialReducers}>
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
		</DynamicModuleLoader>
	);
});

export default LoginForm;