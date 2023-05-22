import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';

import { Button } from 'shared/ui/button/Button';
import { Input, InputVariant } from 'shared/ui/input/Input';
import { HStack } from 'shared/ui/stack';

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

	// TODO: реализовать валидацию комментария
	const error = useSelector(getAddCommentFormError);

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
			<HStack
				className={cn(cls.wrapper, {}, [className])}
				justify={'between'}
				gap={12}
				max
			>
				<Input
					className={cls.input}
					variant={InputVariant.Poured}
					maxWidth
					placeholder={t('enter_comment_text')}
					value={text}
					onChange={onCommentTextChange}
				/>
				<Button onClick={onSend}>{t('send')}</Button>
			</HStack>
		</DynamicModuleLoader>
	);
});

export default AddCommentForm;