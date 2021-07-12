import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";

const TtodoItem = ({ items }) => {
	console.log(items);
	const classes = useStyles();

	const [checked, setChecked] = React.useState(items.completed);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<div className={classes.bgCheckbox}>
			<Box m={1} p={1}>
				<Box p={1} bgcolor="grey.300">
					<FormControl component="fieldset">
						<FormGroup aria-label="position" row>
							<FormControlLabel
								value="start"
								control={<Checkbox color="secondary" />}
								label={items.text}
								labelPlacement="end"
								onChange={handleChange}
								checked={checked}
							/>
						</FormGroup>
					</FormControl>
				</Box>
			</Box>
		</div>
	);
};

// styled components
const useStyles = makeStyles((theme) => ({
	bgCheckbox: {
		background: "#E8E8E8",
		color: "black",
		padding: theme.spacing(1),
	},
}));

export default TtodoItem;
