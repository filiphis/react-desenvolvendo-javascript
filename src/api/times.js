import { v4 as uuidv4 } from "uuid";

const getTimes = () => {
  const times = [
    {
      id: uuidv4(),
      description: "Programação",
      cor: "rgb(87, 194, 120)",
      corSecundaria: "rgb(217, 247, 233, 0.75)",
    },
    {
      id: uuidv4(),
      description: "Front-end",
      cor: "#82CFFA",
      corSecundaria: "rgb(232, 248, 255, 0.75)",
    },
    {
      id: uuidv4(),
      description: "Data Science",
      cor: "#A6D157",
      corSecundaria: "rgb(240, 248, 226, 0.75)",
    },
    {
      id: uuidv4(),
      description: "Dev Ops",
      cor: "#E06B69",
      corSecundaria: "rgb(253, 231, 232, 0.75)",
    },
    {
      id: uuidv4(),
      description: "Ux e Design",
      cor: "#DB6EBF",
      corSecundaria: "rgb(250, 233, 245, 0.75)",
    },
    {
      id: uuidv4(),
      description: "Mobile",
      cor: "#FFBA05",
      corSecundaria: "rgb(255, 245, 217, 0.75)",
    },
    {
      id: uuidv4(),
      description: "Inovação e Gestão",
      cor: "#FF8A29",
      corSecundaria: "rgb(255, 238, 223, 0.75)",
    },
  ];

  return times;
};

const getColaboradores = () => {
  const colaboradores = [
    {
      id: uuidv4(),
      nome: "Luiz",
      cargo: "Desenvolvedor Front-end Jr.",
      imagem: "",
      time: "Front-end",
      ehFavorito: true,
    },
  ];

  return colaboradores;
};

export { getTimes, getColaboradores };
