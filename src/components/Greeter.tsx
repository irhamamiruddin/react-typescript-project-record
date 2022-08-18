// import React from "react";
import ReactDOM from "react-dom/client";
import * as ReactDOMClient from "react-dom/client";
import React from "react";

// Greeter function component
function Greeter(props: any) {
	// Destructuring Props
	const { firstName, lastName } = props;
	return (
		<h1>
			Hello, {firstName} {lastName}
		</h1>
	);
}

// Props interface for class component
/* export interface Props {
	firstName: string;
	lastName: string;
}
 */

// Greeter class component
/* class Greeter extends React.Component<Props> {
	render() {
		const { firstName, lastName } = this.props;
		return (
			<h1>
				Hello, {firstName} {lastName}
			</h1>
		);
	}
} */

// For typescript support use 'as HTMLElement'
ReactDOMClient.createRoot(
	document.getElementById("root") as HTMLElement
).render(<Greeter firstName="Irham" lastName="Amiruddin" />);

export default Greeter;
