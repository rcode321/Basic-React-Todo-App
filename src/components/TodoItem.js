import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import { makeStyles } from "@material-ui/core/styles";

const TtodoItem = (props) => {
	console.log(props);
	const classes = useStyles();

	const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<div className={classes.bgCheckbox}>
			<FormControl component="fieldset">
				<FormGroup aria-label="position" row>
					<FormControlLabel
						value="start"
						control={<Checkbox color="secondary" />}
						label={props.todos.text}
						labelPlacement="end"
						onChange={handleChange}
						checked={checked}
					/>
				</FormGroup>
			</FormControl>
		</div>
	);
};

// styled components
const useStyles = makeStyles((theme) => ({
	bgCheckbox: {
		background: "grey",
		color: "white",
		padding: theme.spacing(4),
		textAlign: "center",
	},
}));

export default TtodoItem;
