//Core
import React, { useState } from 'react';
//Components
import Transactions from 'components/Transactions';
import ModalForm from 'components/ModalForm';

const HomePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleToggleModalOpen = () => setIsModalOpen(prevState => !prevState);

	return (
		<>
			<Transactions isModalOpen={isModalOpen} onToggleModalOpen={handleToggleModalOpen} />

			{isModalOpen && <ModalForm onToggleModalOpen={handleToggleModalOpen} />}
		</>
	);
};

export default HomePage;
