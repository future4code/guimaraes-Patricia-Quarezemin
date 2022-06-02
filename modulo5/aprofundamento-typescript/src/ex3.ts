//Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui:
//um autor e um texto. Observe o seguinte array de posts:

// const posts = [
//     {
//       autor: "Alvo Dumbledore",
//       texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//       autor: "Severo Snape",
//       texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//       autor: "Hermione Granger",
//       texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//       autor: "Dobby",
//       texto: "Dobby é um elfo livre!"
//     },
//     {
//       autor: "Lord Voldemort",
//       texto: "Avada Kedavra!"
//     }
//   ]

//a) crie um type para representar o post. 

type postRedeSocial = {
    autor: string,
    texto: string
}

//Utilize esse mesmo tipo criado acima para fazer a tipagem do array post:

const posts: postRedeSocial []= [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]


//b) Observe abaixo a função buscarPostsPorAutor(), escrita em Javascript:

function buscarPostsPorAuto(posts: postRedeSocial[], autorInformado: string) : postRedeSocial[]{
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

  console.log(buscarPostsPorAuto(posts, 'Dobby'))

// Quais são as entradas e saídas dessa função? 
//R: As entradas e saídas são strings.
//Copie a função para o mesmo arquivo .ts do array de posts e faça a tipagem necessária.