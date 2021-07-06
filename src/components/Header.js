import { makeStyles } from "@material-ui/core";
import React from "react";

const Header = () => {
	const classes = useStyles();
	return (
		<header>
			<h1 className={classes.header}>Todo App ReactJs</h1>
		</header>
	);
};

// styled components
const useStyles = makeStyles((theme) => ({
	header: {
		background: "black",
		color: "white",
		padding: theme.spacing(4),
		textAlign: "center",
	},
}));

export default Header;
