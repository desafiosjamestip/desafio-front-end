import React from "react";

import BoxForm from "../../components/BoxForm/BoxForm.js";
import { Button } from "../../components/Button/Button.js";
import ProductRegistrationForm from "../../components/Form/ProductRegistrationForm.js";
import { IconFomr } from "../../components/icon/iconForm.js";
import { Title } from "../../components/Title/Title.js";
import { AsideBase } from "../../styles/aside.js";
import { MainForm, Base } from "../../styles/main.js";

export default function home() {
	return (
		<Base>
			<MainForm>
				<BoxForm>
					<Title>
						<IconFomr />
						<h1>Cadastro do Produto</h1>
					</Title>
					<ProductRegistrationForm />
					<div>
						<Button>Voltar</Button>
						<Button>Confirmar</Button>
					</div>
				</BoxForm>
			</MainForm>
			<AsideBase>img</AsideBase>
		</Base>
	);
}
