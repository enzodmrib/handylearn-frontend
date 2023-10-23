import jsLogo from '@/assets/jsLogo.png'
import reactLogo from '@/assets/reactLogo.png'
import nodeLogo from '@/assets/nodeLogo.png'

export const courses = [
  {
    id: 'js',
    name: "Fundamentos Javascript",
    img: jsLogo,
  },

  {
    id: 'reactjs',
    name: "ReactJs",
    img: reactLogo,
  },

  {
    id: 'nodejs',
    name: "NodeJS",
    img: nodeLogo,
  },
]

export const modules = [
  {
    id: 1,
    name: 'Módulo 01',
    description: "Neste módulo, iremos abordar Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
  },
  {
    id: 2,
    name: 'Módulo 02',
    description: "Neste módulo, iremos abordar Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
  },
  {
    id: 3,
    name: 'Módulo 03',
    description: "Neste módulo, iremos abordar Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
  },
]

export const classes: {
  id: number;
  moduleId: number;
  name: string;
  type: "VIDEO" | "DOCUMENT" | "TEST";
  contentLink: string;
}[] = [
    {
      id: 1,
      moduleId: 1,
      name: 'Aula 01',
      type: "VIDEO",
      contentLink: "https://www.youtube.com/embed/W6NZfCO5SIk"
    },
    {
      id: 2,
      moduleId: 1,
      name: 'Aula 02',
      type: "DOCUMENT",
      contentLink: "https://medium.com/womakerscode/10-dicas-para-se-tornar-ninja-em-javascript-31a963ad17a1"
    },
    {
      id: 3,
      moduleId: 1,
      name: 'Aula 03',
      type: "VIDEO",
      contentLink: "https://www.youtube.com/embed/W6NZfCO5SIk"
    },
    {
      id: 4,
      moduleId: 1,
      name: 'Teste',
      type: "TEST",
      contentLink: ""
    },
  ]