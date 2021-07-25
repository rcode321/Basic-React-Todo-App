import React from "react";

import TodoItem from "./TodoItem";
import todosData from "../todosData";

const MainContent = () => {
	const todoitem = todosData.map((item) => <TodoItem key={item.id} items={item} />);

	return (
		<main>
			<h2>This is main content. of our todo app project</h2>
			{todoitem}
		</main>
	);
};

export default MainContent;
