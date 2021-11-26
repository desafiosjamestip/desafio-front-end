const categories = ['Acessórios de Tecnologia',
'Artesanato',
'Artigos para Festa',
'Áudio',
'Automotivo',
'Brinquedos',
'Câmeras e Drones',
'Casa e Construção',
'Celular e Smartphone',
'Colchões',
'Comércio e Indústria',
'Cursos',
'Eletrodomésticos',
'Eletroportáteis',
'Esporte e Lazer',
'Ferramentas',
'Filmes e Séries',
'Games',
'Informática',
'Instrumentos Musicais'
];

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#333',
  }
};

export const getLocalProducts = JSON.parse(localStorage.getItem('listProducts'));


export default categories;