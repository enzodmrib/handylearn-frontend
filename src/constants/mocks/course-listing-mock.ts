import jsLogo from '@/assets/jsLogo.png'
import reactLogo from '@/assets/reactLogo.png'
import nodeLogo from '@/assets/nodeLogo.png'

export const courses: Course[] = [
  {
    id: 1,
    code: "js",
    name: "Fundamentos Javascript",
    img: jsLogo,
    modules: [
      {
        id: 1,
        name: "Módulo Inicial",
        description: "Este módulo introdutório aborda os conceitos fundamentais do Javascript.",
        classes: [
          {
            id: 1,
            name: "Introdução ao Javascript",
            type: "VIDEO",
            contentLink: "https://www.youtube.com/embed/Ptbk2af68e8?si=wscW2Xe2e5U5I1LL"
          },
          {
            id: 2,
            name: "Sintaxe Básica",
            type: "DOCUMENT",
            contentLink: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types"
          },
          {
            id: 3,
            name: "Controle de Fluxo",
            type: "VIDEO",
            contentLink: "https://www.youtube.com/embed/BP63NhITvao?si=Q_OGXwTzj2kV4XDy"
          },
          {
            id: 4,
            name: "Teste do Módulo Inicial",
            type: "TEST",
            contentLink: ""
          }
        ],
        test: {
          id: 1,
          questions: [
            {
              id: 1,
              text: "O que é Javascript?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Uma linguagem de programação de alto nível, interpretada e orientada a objetos."
                },
                {
                  id: 2,
                  text: "Um tipo de folha de estilo para websites."
                },
                {
                  id: 3,
                  text: "Um software de edição de imagens."
                }
              ]
            },
            {
              id: 2,
              text: "Como se declara uma variável em Javascript?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "var minhaVariavel = 10;"
                },
                {
                  id: 2,
                  text: "variavel = 10;"
                },
                {
                  id: 3,
                  text: "let = minhaVariavel;"
                }
              ]
            },
            {
              id: 3,
              text: "O que são operadores lógicos em Javascript?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "São usados para avaliar expressões lógicas."
                },
                {
                  id: 2,
                  text: "São símbolos usados para concatenar strings."
                },
                {
                  id: 3,
                  text: "São usados para realizar operações matemáticas."
                }
              ]
            },
            {
              id: 4,
              text: "O que é uma estrutura de controle 'if-else' em Javascript?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Uma estrutura usada para tomar decisões com base em condições."
                },
                {
                  id: 2,
                  text: "Uma função para realizar operações matemáticas."
                },
                {
                  id: 3,
                  text: "Uma declaração usada para criar loops."
                }
              ]
            }
          ]
        }
      },
      {
        id: 2,
        name: "Módulo de Manipulação de Dados",
        description: "Este módulo aborda a manipulação eficiente de dados em Javascript, incluindo arrays, objetos e funções.",
        classes: [
          {
            id: 5,
            name: "Trabalhando com Arrays e Objetos",
            type: "VIDEO",
            contentLink: "https://www.youtube.com/embed/XdkW62tkAgU?si=wwCOp__PKfxiDgY2"
          },
          {
            id: 6,
            name: "Funções e Escopo",
            type: "DOCUMENT",
            contentLink: "https://www.treinaweb.com.br/blog/contexto-e-escopo-no-javascript#:~:text=O%20escopo%20em%20JavaScript%20se,escopo%2C%20o%20global%20e%20local."
          },
          {
            id: 7,
            name: "Strings e Números",
            type: "VIDEO",
            contentLink: "https://www.youtube.com/embed/hZG9ODUdxHo?si=yhbjJm8-dYT7JPZf"
          },
          {
            id: 8,
            name: "Teste do Módulo de Manipulação de Dados",
            type: "TEST",
            contentLink: ""
          }
        ],
        test: {
          id: 2,
          questions: [
            {
              id: 5,
              text: "O que é um array em Javascript?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Uma estrutura de dados que armazena uma coleção de valores."
                },
                {
                  id: 2,
                  text: "Um tipo de dado usado apenas para armazenar números."
                },
                {
                  id: 3,
                  text: "Um tipo de dado que armazena um único valor."
                }
              ]
            },
            {
              id: 6,
              text: "O que é uma função em Javascript?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Um bloco de código que pode ser chamado e reutilizado."
                },
                {
                  id: 2,
                  text: "Um objeto que armazena dados."
                },
                {
                  id: 3,
                  text: "Uma forma de declarar variáveis."
                }
              ]
            },
            {
              id: 7,
              text: "O que é o escopo de uma variável em Javascript?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "O local onde a variável foi declarada."
                },
                {
                  id: 2,
                  text: "Uma função que inicia com a palavra-chave 'scope'."
                },
                {
                  id: 3,
                  text: "A forma como uma variável é representada no código."
                }
              ]
            },
            {
              id: 8,
              text: "Qual operador é usado para concatenar strings em Javascript?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "+"
                },
                {
                  id: 2,
                  text: "-"
                },
                {
                  id: 3,
                  text: "*"
                }
              ]
            }
          ]
        }
      },
      {
        id: 3,
        name: "Módulo Avançado",
        description: "Neste módulo avançado, você explorará conceitos como Programação Orientada a Objetos, manipulação do DOM e tratamento de eventos em Javascript.",
        classes: [
          {
            id: 9,
            name: "Programação Orientada a Objetos",
            type: "VIDEO",
            contentLink: "https://www.youtube.com/embed/_RKKKDlqi2Q?si=uwMode8a6hljifoQ"
          },
          {
            id: 10,
            name: "Manipulação do DOM",
            type: "DOCUMENT",
            contentLink: "https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction"
          },
          {
            id: 11,
            name: "Trabalhando com Eventos",
            type: "VIDEO",
            contentLink: "https://www.youtube.com/embed/wWnBB-mZIvY?si=vixRpFIdQZlracvR"
          },
          {
            id: 12,
            name: "Teste do Módulo Avançado",
            type: "TEST",
            contentLink: ""
          }
        ],
        test: {
          id: 3,
          questions: [
            {
              id: 9,
              text: "O que é Programação Orientada a Objetos (POO)?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Um estilo de programação que se baseia em objetos e classes."
                },
                {
                  id: 2,
                  text: "Uma técnica para otimizar códigos Javascript."
                },
                {
                  id: 3,
                  text: "Um tipo de linguagem de marcação."
                }
              ]
            },
            {
              id: 10,
              text: "O que é o DOM em Javascript?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Uma interface de programação para interagir com documentos HTML/XML."
                },
                {
                  id: 2,
                  text: "Uma função para manipular datas."
                },
                {
                  id: 3,
                  text: "Uma técnica para organizar código Javascript."
                }
              ]
            },
            {
              id: 11,
              text: "O que são eventos em Javascript?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Ações do usuário que podem ser detectadas e manipuladas."
                },
                {
                  id: 2,
                  text: "Operações matemáticas realizadas em intervalos regulares."
                },
                {
                  id: 3,
                  text: "Estruturas condicionais usadas em programação."
                }
              ]
            },
            {
              id: 12,
              text: "Como você adiciona um evento a um elemento HTML usando Javascript?",
              correctAlternativeId: 2,
              alternatives: [
                {
                  id: 1,
                  text: "document.createEvent('evento');"
                },
                {
                  id: 2,
                  text: "element.addEventListener('evento', function(){});"
                },
                {
                  id: 3,
                  text: "event.attach('evento', function(){});"
                }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    code: "react",
    name: "Fundamentos ReactJS",
    img: reactLogo,
    modules: [
      {
        id: 4,
        name: "Módulo de Introdução",
        description: "Este módulo introdutório aborda os conceitos fundamentais do ReactJS.",
        classes: [
          {
            id: 13,
            name: "Introdução ao React",
            type: "VIDEO",
            contentLink: "link_para_video_intro_react"
          },
          {
            id: 14,
            name: "Componentes e Props",
            type: "DOCUMENT",
            contentLink: "link_para_conteudo_componentes_props"
          },
          {
            id: 15,
            name: "Estado e Ciclo de Vida",
            type: "VIDEO",
            contentLink: "link_para_video_estado_ciclo_vida"
          },
          {
            id: 16,
            name: "Teste do Módulo de Introdução",
            type: "TEST",
            contentLink: ""
          }
        ],
        test: {
          id: 4,
          questions: [
            {
              id: 13,
              text: "O que é React?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Uma biblioteca JavaScript para construir interfaces de usuário."
                },
                {
                  id: 2,
                  text: "Um framework para desenvolvimento de servidores NodeJS."
                },
                {
                  id: 3,
                  text: "Um banco de dados NoSQL."
                }
              ]
            },
            {
              id: 14,
              text: "O que são Componentes em React?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Blocos de construção reutilizáveis para interfaces de usuário."
                },
                {
                  id: 2,
                  text: "Funções para manipulação de dados."
                },
                {
                  id: 3,
                  text: "Elementos HTML."
                }
              ]
            },
            {
              id: 15,
              text: "O que é Estado em React?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Um objeto que determina o comportamento de um componente."
                },
                {
                  id: 2,
                  text: "Uma função usada para criar componentes."
                },
                {
                  id: 3,
                  text: "Um tipo de dado usado para armazenar números."
                }
              ]
            },
            {
              id: 16,
              text: "Quando o método componentDidMount é chamado em um componente React?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Após o componente ser inserido no DOM."
                },
                {
                  id: 2,
                  text: "Antes do componente ser removido do DOM."
                },
                {
                  id: 3,
                  text: "Durante a renderização inicial."
                }
              ]
            }
          ]
        }
      },
      {
        id: 5,
        name: "Módulo de Gerenciamento de Estado",
        description: "Este módulo explora técnicas avançadas de gerenciamento de estado em aplicações React.",
        classes: [
          {
            id: 17,
            name: "Redux e Gerenciamento de Estado",
            type: "VIDEO",
            contentLink: "link_para_video_redux_gerenciamento_estado"
          },
          {
            id: 18,
            name: "Hooks em React",
            type: "DOCUMENT",
            contentLink: "link_para_conteudo_hooks"
          },
          {
            id: 19,
            name: "Roteamento com React Router",
            type: "VIDEO",
            contentLink: "link_para_video_react_router"
          },
          {
            id: 20,
            name: "Teste do Módulo de Gerenciamento de Estado",
            type: "TEST",
            contentLink: ""
          }
        ],
        test: {
          id: 5,
          questions: [
            {
              id: 17,
              text: "O que é Redux?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Uma biblioteca para gerenciamento de estado em aplicações JavaScript."
                },
                {
                  id: 2,
                  text: "Um framework para construção de interfaces de usuário."
                },
                {
                  id: 3,
                  text: "Uma linguagem de programação."
                }
              ]
            },
            {
              id: 18,
              text: "O que são Hooks em React?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Funções que permitem o uso de estado e outras funcionalidades React em componentes funcionais."
                },
                {
                  id: 2,
                  text: "Componentes visuais em forma de ganchos."
                },
                {
                  id: 3,
                  text: "Elementos HTML com eventos específicos."
                }
              ]
            },
            {
              id: 19,
              text: "Para que serve o React Router?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Para permitir a navegação e o roteamento em aplicações React de página única (SPA)."
                },
                {
                  id: 2,
                  text: "Para gerenciar o estado global da aplicação."
                },
                {
                  id: 3,
                  text: "Para criar componentes visuais complexos."
                }
              ]
            },
            {
              id: 20,
              text: "O que é um Middleware no contexto do Redux?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Uma extensão que adiciona funcionalidades ao Redux, como logs e tratamento de ações assíncronas."
                },
                {
                  id: 2,
                  text: "Uma função que renderiza componentes React."
                },
                {
                  id: 3,
                  text: "Um tipo de componente de layout em React."
                }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: 3,
    code: "nodejs",
    name: "Fundamentos Node.js",
    img: nodeLogo,
    modules: [
      {
        id: 1,
        name: "Módulo Inicial",
        description: "Este módulo introdutório aborda os conceitos fundamentais do Node.js.",
        classes: [
          {
            id: 1,
            name: "Introdução ao Node.js",
            type: "VIDEO",
            contentLink: "link_para_video_intro_nodejs"
          },
          {
            id: 2,
            name: "Configuração do Ambiente",
            type: "DOCUMENT",
            contentLink: "link_para_conteudo_configuracao"
          },
          {
            id: 3,
            name: "Node.js e NPM",
            type: "VIDEO",
            contentLink: "link_para_video_nodejs_npm"
          },
          {
            id: 4,
            name: "Teste do Módulo Inicial",
            type: "TEST",
            contentLink: ""
          }
        ],
        test: {
          id: 1,
          questions: [
            {
              id: 1,
              text: "O que é Node.js?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Um ambiente de execução Javascript do lado do servidor."
                },
                {
                  id: 2,
                  text: "Um framework para desenvolvimento web em Java."
                },
                {
                  id: 3,
                  text: "Um banco de dados NoSQL."
                }
              ]
            },
            {
              id: 2,
              text: "Qual a função do NPM no desenvolvimento Node.js?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Gerenciar pacotes e dependências do projeto."
                },
                {
                  id: 2,
                  text: "Fornecer uma interface gráfica para o Node.js."
                },
                {
                  id: 3,
                  text: "Criar animações em páginas web."
                }
              ]
            },
            {
              id: 3,
              text: "O que é um módulo no contexto do Node.js?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Um arquivo que encapsula funcionalidades específicas."
                },
                {
                  id: 2,
                  text: "Um componente visual em uma página web."
                },
                {
                  id: 3,
                  text: "Uma função que realiza cálculos matemáticos."
                }
              ]
            },
            {
              id: 4,
              text: "Por que o Node.js é eficiente para operações assíncronas?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Porque utiliza um modelo de E/S não bloqueante."
                },
                {
                  id: 2,
                  text: "Porque permite a execução de código em paralelo."
                },
                {
                  id: 3,
                  text: "Porque é exclusivamente síncrono."
                }
              ]
            }
          ]
        }
      },
      {
        id: 2,
        name: "Módulo de API com Express",
        description: "Este módulo explora o desenvolvimento de APIs utilizando o framework Express.js.",
        classes: [
          {
            id: 5,
            name: "Introdução ao Express.js",
            type: "VIDEO",
            contentLink: "link_para_video_intro_express"
          },
          {
            id: 6,
            name: "Rotas e Controladores",
            type: "DOCUMENT",
            contentLink: "link_para_conteudo_rotas_controladores"
          },
          {
            id: 7,
            name: "Middleware e Autenticação",
            type: "VIDEO",
            contentLink: "link_para_video_middleware_autenticacao"
          },
          {
            id: 8,
            name: "Teste do Módulo de API com Express",
            type: "TEST",
            contentLink: ""
          }
        ],
        test: {
          id: 2,
          questions: [
            {
              id: 5,
              text: "O que é o Express.js?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Um framework web para Node.js."
                },
                {
                  id: 2,
                  text: "Uma biblioteca de animações para páginas web."
                },
                {
                  id: 3,
                  text: "Um banco de dados SQL."
                }
              ]
            },
            {
              id: 6,
              text: "Qual a função das rotas em uma aplicação Express?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Definir como a aplicação responde a requisições em URLs específicas."
                },
                {
                  id: 2,
                  text: "Gerenciar a estilização de páginas web."
                },
                {
                  id: 3,
                  text: "Armazenar dados temporários no lado do cliente."
                }
              ]
            },
            {
              id: 7,
              text: "O que é middleware no contexto do Express?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Funções que têm acesso ao objeto de requisição (req), resposta (res) e à próxima função no ciclo de requisição-resposta."
                },
                {
                  id: 2,
                  text: "Um tipo de banco de dados NoSQL."
                },
                {
                  id: 3,
                  text: "Um padrão arquitetural para construção de interfaces de usuário."
                }
              ]
            },
            {
              id: 8,
              text: "Por que a autenticação é importante em APIs?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Para garantir que apenas usuários autorizados acessem recursos protegidos."
                },
                {
                  id: 2,
                  text: "Para acelerar a resposta da API."
                },
                {
                  id: 3,
                  text: "Para evitar a necessidade de conexão com o banco de dados."
                }
              ]
            }
          ]
        }
      },
      {
        id: 3,
        name: "Módulo de Banco de Dados com MongoDB",
        description: "Neste módulo, você aprenderá a integrar o MongoDB, um banco de dados NoSQL, em aplicações Node.js.",
        classes: [
          {
            id: 9,
            name: "Introdução ao MongoDB",
            type: "VIDEO",
            contentLink: "link_para_video_intro_mongodb"
          },
          {
            id: 10,
            name: "Operações CRUD com Mongoose",
            type: "DOCUMENT",
            contentLink: "link_para_conteudo_crud_mongoose"
          },
          {
            id: 11,
            name: "Trabalhando com Modelos",
            type: "VIDEO",
            contentLink: "link_para_video_modelos_mongoose"
          },
          {
            id: 12,
            name: "Teste do Módulo de Banco de Dados com MongoDB",
            type: "TEST",
            contentLink: ""
          }
        ],
        test: {
          id: 3,
          questions: [
            {
              id: 9,
              text: "O que é o MongoDB?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Um banco de dados NoSQL orientado a documentos."
                },
                {
                  id: 2,
                  text: "Um servidor de hospedagem."
                },
                {
                  id: 3,
                  text: "Um framework para criação de interfaces de usuário."
                }
              ]
            },
            {
              id: 10,
              text: "O que são operações CRUD?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Operações que envolvem criação, leitura, atualização e exclusão de dados."
                },
                {
                  id: 2,
                  text: "Operações específicas para manipulação de imagens."
                },
                {
                  id: 3,
                  text: "Operações relacionadas a animações em páginas web."
                }
              ]
            },
            {
              id: 11,
              text: "O que é o Mongoose no contexto do Node.js?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Uma biblioteca para modelagem de objetos MongoDB no Node.js."
                },
                {
                  id: 2,
                  text: "Uma linguagem de programação."
                },
                {
                  id: 3,
                  text: "Um tipo de middleware para Express."
                }
              ]
            },
            {
              id: 12,
              text: "Qual a função de um modelo (model) no Mongoose?",
              correctAlternativeId: 1,
              alternatives: [
                {
                  id: 1,
                  text: "Definir a estrutura dos documentos no MongoDB."
                },
                {
                  id: 2,
                  text: "Definir estilos para elementos HTML."
                },
                {
                  id: 3,
                  text: "Executar operações assíncronas."
                }
              ]
            }
          ]
        }
      }
    ]
  }
]