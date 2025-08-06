import React from "react";

interface IDeleteCellRenderer {
	onClick: () => void;
}

const DeleteCellRenderer: React.FC<IDeleteCellRenderer> = ({ onClick }) => {
	return (
		<button
			className="btn btn-danger btn-sm"
			onClick={onClick}
			title="Delete Character"
		>
			Delete
		</button>
	);
};

export default DeleteCellRenderer;
