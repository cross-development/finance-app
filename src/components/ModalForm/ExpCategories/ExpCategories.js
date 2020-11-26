//Core
import React from 'react';
import PropTypes from 'prop-types';
//Data
import categoriesList from 'data/categoriesList.json';
//Styles
import { StyledLabel, StyledSelect } from './ExpCategories.styles';

const ExpCategories = ({ categories, onChangeCategory }) => (
	<StyledLabel>
		<StyledSelect name="categoryId" value={categories} onChange={onChangeCategory}>
			<option value="" disabled>
				Выберите категорию
			</option>

			{categoriesList.map(({ id, categoryId, label }) => (
				<option key={id} value={categoryId}>
					{label}
				</option>
			))}
		</StyledSelect>
	</StyledLabel>
);

ExpCategories.propTypes = {
	categories: PropTypes.string.isRequired,
	onChangeCategory: PropTypes.func.isRequired,
};

export default ExpCategories;
