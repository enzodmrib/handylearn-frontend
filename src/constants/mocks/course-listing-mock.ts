import jsLogo from '@/assets/jsLogo.png'
import reactLogo from '@/assets/reactLogo.png'
import nodeLogo from '@/assets/nodeLogo.png'

export const courses: Course[] = [
  {
    id: 1,
    code: 'js',
    name: "Fundamentos Javascript",
    img: jsLogo,
    modules: [
      {
        id: 1,
        name: "Módulo 01",
        description: "Neste módulo, iremos abordar Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        classes: [
          {
            id: 1,
            name: "Aula 01",
            type: "VIDEO",
            contentLink: ""
          },
          {
            id: 2,
            name: "Aula 02",
            type: "DOCUMENT",
            contentLink: ""
          },
          {
            id: 3,
            name: "Aula 03",
            type: "VIDEO",
            contentLink: ""
          },
        ],
        test: {
          id: 1,
          questions: [
            {
              id: 1,
              text: "Qual é...?",
              alternatives: [
                {
                  id: 1,
                  isCorrect: false,
                  text: "Alternativa 01"
                },
                {
                  id: 2,
                  isCorrect: false,
                  text: "Alternativa 02"
                },
                {
                  id: 3,
                  isCorrect: false,
                  text: "Alternativa 03"
                },
              ]
            },
            {
              id: 2,
              text: "Qual é...?",
              alternatives: [
                {
                  id: 1,
                  isCorrect: false,
                  text: "Alternativa 01"
                },
                {
                  id: 2,
                  isCorrect: false,
                  text: "Alternativa 02"
                },
                {
                  id: 3,
                  isCorrect: false,
                  text: "Alternativa 03"
                },
              ]
            },
            {
              id: 3,
              text: "Qual é...?",
              alternatives: [
                {
                  id: 1,
                  isCorrect: false,
                  text: "Alternativa 01"
                },
                {
                  id: 2,
                  isCorrect: false,
                  text: "Alternativa 02"
                },
                {
                  id: 3,
                  isCorrect: false,
                  text: "Alternativa 03"
                },
              ]
            },
          ]
        }
      }
    ],
  },
]