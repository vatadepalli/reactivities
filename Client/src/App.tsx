import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Header, List, ListItem } from "semantic-ui-react";

function App() {
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:5000/api/activities").then(({ data }) => {
			console.log(data);
			setActivities(data);
		});
	}, []);

	return (
		<div className="App">
			<Header as="h2" icon="users" content="Reactivities" />
			<List>
				{activities.map((el: any) => (
					<ListItem key={el.id}>{el.title}</ListItem>
				))}
			</List>
		</div>
	);
}

export default App;
