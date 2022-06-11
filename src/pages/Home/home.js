import React from "react";

import imagemAside from "../../assets/imagem.png";
import BoxForm from "../../components/BoxForm/BoxForm.js";
import { Button } from "../../components/Button/Button.js";
import ProductRegistrationForm from "../../components/Form/ProductRegistrationForm.js";
import { IconFomr } from "../../components/icon/iconForm.js";
import { Title } from "../../components/Title/Title.js";
import AsideBase from "../../styles/aside.js";
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
						<Button>Cadastrar</Button>
					</div>
				</BoxForm>
			</MainForm>
			<AsideBase>
				<img
					src={imagemAside}
					alt="Homem abrindo uma encomenda e uma frase: Fature mais com menos estoque com o James Tip."
				/>
			</AsideBase>
		</Base>
	);
}
