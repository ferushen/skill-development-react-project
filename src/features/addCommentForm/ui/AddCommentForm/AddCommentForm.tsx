import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';

import { Button } from 'shared/ui/button/Button';
import { Input, InputVariant } from 'shared/ui/input/Input';

import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
	className?: string;
	onCommentSend: (text: string) => void;
}

const reducers: ReducersList = {
	addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
	const { className, onCommentSend } = props;
	const { t } = useTranslation();

	const dispatch = useAppDispatch();
	const text = useSelector(getAddCommentFormText);
	const error = useSelector(getAddCommentFormError);

	const mods: Mods = {};

	const onCommentTextChange = useCallback((value: string) => {
		dispatch(addCommentFormActions.setText(value));
	}, [dispatch]);

	const onSend = useCallback(() => {
		if (text) {
			onCommentSend(text);
			onCommentTextChange('');
		}
	}, [onCommentSend, onCommentTextChange, text]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={cn(cls.addCommentForm, mods, [className])}>
				<Input
					className={cls.input}
					variant={InputVariant.MaxWidth}
					placeholder={t('enter_comment_text')}
					value={text}
					onChange={onCommentTextChange}
				/>
				<Button onClick={onSend}>{t('send')}</Button>
			</div>
		</DynamicModuleLoader>
	);
});

export default AddCommentForm;