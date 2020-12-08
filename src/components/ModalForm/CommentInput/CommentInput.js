//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledRequireMessage } from './CommentInput.styles';
import { StyledCommentInput, StyledCommentLabel } from './CommentInput.styles';

const CommentInput = ({ comment, onChangeTransactionInfo }) => (
	<StyledCommentLabel>
		<StyledCommentInput
			required
			type="text"
			name="comment"
			placeholder="Комментарий"
			value={comment}
			autoComplete="off"
			onChange={onChangeTransactionInfo}
		/>
	</StyledCommentLabel>
);

CommentInput.propTypes = {
	comment: PropTypes.string.isRequired,
	onChangeTransactionInfo: PropTypes.func.isRequired,
};

export default CommentInput;
