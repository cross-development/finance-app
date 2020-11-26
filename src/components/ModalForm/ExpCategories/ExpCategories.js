//Core
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StyledLabel, StyledSelect } from './ExpCategories.styles';

const ExpCategories = ({ transactionType, categories, onChangeCategory }) => {
	const { categories: categoryList } = useSelector(state => state.transactions);

	const memoCategories = useMemo(
		() =>
			categoryList.reduce((acc, item) => {
				if (transactionType === item.type) {
					const option = (
						<option key={item.id} value={item.id}>
							{item.name}
						</option>
					);

					acc.push(option);
				}

				return acc;
			}, []),
		[categoryList, transactionType],
	);

	return (
		<StyledLabel>
			<StyledSelect name="categoryId" value={categories} onChange={onChangeCategory}>
				<option value="" disabled>
					Выберите категорию
				</option>

				{memoCategories}
			</StyledSelect>
		</StyledLabel>
	);
};

ExpCategories.propTypes = {
	categories: PropTypes.string.isRequired,
	onChangeCategory: PropTypes.func.isRequired,
};

export default ExpCategories;
