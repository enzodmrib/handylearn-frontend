import jsLogo from '@/assets/jsLogo.png'
import reactLogo from '@/assets/reactLogo.png'
import nodeLogo from '@/assets/nodeLogo.png'

export const courses: Course[] = [
  {
    id: 'js',
    name: "Fundamentos Javascript",
    img: jsLogo,
    isFinished: false,
    modules: [
      {
        name: "Módulo 01",
        description: "Neste módulo, iremos abordar Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        classes: [
          {
            name: "Aula 01",
            type: "VIDEO",
            contentLink: ""
          },
          {
            name: "Aula 02",
            type: "DOCUMENT",
            contentLink: ""
          },
          {
            name: "Aula 03",
            type: "VIDEO",
            contentLink: ""
          },
        ],
        test: {
          grade: null,
          questions: [
            {
              text: "Qual é...?",
              alternatives: [
                {
                  isCorrect: false,
                  text: "Alternativa 01"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 02"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 03"
                },
              ]
            },
            {
              text: "Qual é...?",
              alternatives: [
                {
                  isCorrect: false,
                  text: "Alternativa 01"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 02"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 03"
                },
              ]
            },
            {
              text: "Qual é...?",
              alternatives: [
                {
                  isCorrect: false,
                  text: "Alternativa 01"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 02"
                },
                {
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

  {
    id: 'reactjs',
    name: "ReactJs",
    img: reactLogo,
    isFinished: false,
    modules: [
      {
        name: "Módulo 01",
        description: "Neste módulo, iremos abordar Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        classes: [
          {
            name: "Aula 01",
            type: "VIDEO",
            contentLink: ""
          },
          {
            name: "Aula 02",
            type: "DOCUMENT",
            contentLink: ""
          },
          {
            name: "Aula 03",
            type: "VIDEO",
            contentLink: ""
          },
        ],
        test: {
          grade: null,
          questions: [
            {
              text: "Qual é...?",
              alternatives: [
                {
                  isCorrect: false,
                  text: "Alternativa 01"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 02"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 03"
                },
              ]
            },
            {
              text: "Qual é...?",
              alternatives: [
                {
                  isCorrect: false,
                  text: "Alternativa 01"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 02"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 03"
                },
              ]
            },
            {
              text: "Qual é...?",
              alternatives: [
                {
                  isCorrect: false,
                  text: "Alternativa 01"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 02"
                },
                {
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

  {
    id: 'nodejs',
    name: "NodeJS",
    img: nodeLogo,
    isFinished: false,
    modules: [
      {
        name: "Módulo 01",
        description: "Neste módulo, iremos abordar Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        classes: [
          {
            name: "Aula 01",
            type: "VIDEO",
            contentLink: ""
          },
          {
            name: "Aula 02",
            type: "DOCUMENT",
            contentLink: ""
          },
          {
            name: "Aula 03",
            type: "VIDEO",
            contentLink: ""
          },
        ],
        test: {
          grade: null,
          questions: [
            {
              text: "Qual é...?",
              alternatives: [
                {
                  isCorrect: false,
                  text: "Alternativa 01"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 02"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 03"
                },
              ]
            },
            {
              text: "Qual é...?",
              alternatives: [
                {
                  isCorrect: false,
                  text: "Alternativa 01"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 02"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 03"
                },
              ]
            },
            {
              text: "Qual é...?",
              alternatives: [
                {
                  isCorrect: false,
                  text: "Alternativa 01"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 02"
                },
                {
                  isCorrect: false,
                  text: "Alternativa 03"
                },
              ]
            },
          ]
        }
      }
    ],
  }
]