import React from "react";

interface IDeleteCellRenderer {
	onClick: () => void;
}

const DeleteCellRenderer: React.FC<IDeleteCellRenderer> = ({ onClick }) => {
	return <button onClick={onClick}>Delete</button>;
};

export default DeleteCellRenderer;
