import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "./App.css";

import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Container maxWidth="sm">
				<CssBaseline />
				<Header />
				<MainContent />
				<Footer />
			</Container>
		</div>
	);
}

export default App;
