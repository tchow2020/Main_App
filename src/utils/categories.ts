import { IProducts } from "../screens/Home";

export interface ICategories {
  id: string;
  name: string;
  products: IProducts[];
}

export const categories = [
  {
    id: '1',
    name: "Moletons",
    products: [
      {
        id: '1',
        name: 'Moletom A',
        price: '400,00'
      },
      {
        id: '2',
        name: 'Moletom B',
        price: '3000,00'
      },
      {
        id: '3',
        name: 'Moletom C',
        price: '440,00'
      },
      {
        id: '4',
        name: 'Moletom D',
        price: '510,00'
      }
    ]
  },

  {
    id: '2',
    name: "Camisas",
    products: [
      {
        id: '1',
        name: 'Camisa A',
        price: '400,00'
      },
      {
        id: '2',
        name: 'Camisa B',
        price: '3000,00'
      },
      {
        id: '3',
        name: 'Camisa C',
        price: '440,00'
      },
      {
        id: '4',
        name: 'Camisa D',
        price: '510,00'
      }
    ]
  },

  {
    id: '3',
    name: "Calças",
    products: [
      {
        id: '1',
        name: 'Calça A',
        price: '400,00'
      },
      {
        id: '2',
        name: 'Calça B',
        price: '3000,00'
      },
      {
        id: '3',
        name: 'Calça C',
        price: '440,00'
      },
      {
        id: '4',
        name: 'Calça D',
        price: '510,00'
      }
    ]
  },

  {
    id: '4',
    name: "Canecas",
    products: [
      {
        id: '1',
        name: 'Caneca A',
        price: '400,00'
      },
      {
        id: '2',
        name: 'Caneca B',
        price: '3000,00'
      },
      {
        id: '3',
        name: 'Caneca C',
        price: '440,00'
      },
      {
        id: '4',
        name: 'Caneca D',
        price: '510,00'
      }
    ]
  },
]