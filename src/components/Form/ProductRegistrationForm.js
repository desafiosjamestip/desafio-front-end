/* eslint-disable react/destructuring-assignment */
import React from "react";

import { FormBase } from "../../styles/formBase.js";

export default class ProductRegistrationForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert(`A name was submitted: ${this.state.value}`);
		event.preventDefault();
	}

	render() {
		return (
			<FormBase>
				<form>
					<p>
						Código do produto:
						<input type="text" />
					</p>
					<p>
						Categoria do produto:
						<input type="text" />
					</p>
					<p>
						Nome do produto:
						<input type="text" />
					</p>
					<p>
						Nome do Fornecedor:
						<input type="text" />
					</p>
					<p>
						Valor do produto
						<input type="text" />
					</p>
				</form>
			</FormBase>
		);
	}
}
