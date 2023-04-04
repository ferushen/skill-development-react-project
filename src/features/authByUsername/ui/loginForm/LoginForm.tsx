import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

import { Button } from 'shared/ui';
import { ButtonVariant } from 'shared/ui/button/Button';
import { Input, InputVariant } from 'shared/ui/input/Input';
import { Text, TextVariant } from 'shared/ui/text/Text';

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

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<div className={cn(cls.loginForm, {}, [className])}>
				<Text title={t('login_form')} />
				{error && <Text className={cls.error} text={t('incorrect_login_or_password')} variant={TextVariant.Error} />}
				<div className={cls.inputsWrapper}>
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
				</div>
				<Button
					onClick={onLoginClick}
					className={cls.loginBtn}
					variant={ButtonVariant.OUTLINE}
					disabled={isLoading}
				>
					{t('login')}
				</Button>
			</div>
		</DynamicModuleLoader>
	);
});

export default LoginForm;