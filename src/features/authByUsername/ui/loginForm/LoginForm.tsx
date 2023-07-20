import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import { Button, ButtonVariant } from '@/shared/ui/button';
import { Input, InputVariant } from '@/shared/ui/input';
import { Text, TextVariant } from '@/shared/ui/text';
import { VStack } from '@/shared/ui/stack';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
	className?: string;
	onSuccess: () => void;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer
};

const LoginForm = memo((props: LoginFormProps) => {
	const { className, onSuccess } = props;
	const { t } = useTranslation();

	const dispatch = useAppDispatch();
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

	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUsername({ username, password }));
		if (result.meta.requestStatus === 'fulfilled') {
			onSuccess();
		}
	}, [dispatch, password, username, onSuccess]);

	useEffect(() => {
		const handleClickLogin = (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				onLoginClick();
			}
		};

		window.addEventListener('keydown', handleClickLogin);

		return () => {
			// очищаем прослушку на кнопки
			window.removeEventListener('keydown', handleClickLogin);
		};
	}, [onLoginClick]);

	// TODO: переделать дизайн инпутов

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<VStack
				className={cn(cls.loginForm, {}, [className])}
				align={'center'}
				gap={40}
			>
				<Text title={t('login_form')} />
				{error && <Text className={cls.error} text={t('incorrect_login_or_password')} variant={TextVariant.Error} />}
				<VStack
					align={'center'}
					gap={20}
				>
					<Input
						value={username}
						variant={InputVariant.OutlineRounded}
						placeholder={t('enter_login')}
						autoFocus={true}
						onChange={onChangeUsername}
					/>
					<Input
						value={password}
						variant={InputVariant.OutlineRounded}
						placeholder={t('enter_password')}
						onChange={onChangePassword}
					/>
				</VStack>
				<Button
					onClick={onLoginClick}
					className={cls.loginBtn}
					variant={ButtonVariant.Outline}
					disabled={isLoading ? 'with_opacity' : undefined}
				>
					{t('login')}
				</Button>
			</VStack>
		</DynamicModuleLoader>
	);
});

export default LoginForm;