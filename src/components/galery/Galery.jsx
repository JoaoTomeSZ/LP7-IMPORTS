import { useState } from 'react'
import camisas from "../../data/imagens_formatadas.json"

const Galery = () => {
  const [filtro, setFiltro] = useState("")
  const [filtroDescricao, setFiltroDescricao] = useState("todos")
  const [paginaAtual, setPaginaAtual] = useState(1)
  const camisasPorPagina = 10

  const camisasFiltradas = camisas.filter((camisa) => {
    const correspondeTexto = camisa.time.toLowerCase().includes(filtro.toLowerCase());
    const correspondeDescricao =
      filtroDescricao === 'todos' || camisa.descricao === filtroDescricao;
    return correspondeTexto && correspondeDescricao;
  });

  const totalPaginas = Math.ceil(camisasFiltradas.length / camisasPorPagina)
  const indiceInicio = (paginaAtual - 1) * camisasPorPagina
  const camisasVisiveis = camisasFiltradas.slice(indiceInicio, indiceInicio + camisasPorPagina)

  const mudarPagina = (pagina) => {
    setPaginaAtual(pagina)
  }

  return (
    <div className="p-4 min-h-screen">
      <input
        type="text"
        placeholder="Filtrar por time..."
        value={filtro}
        onChange={(e) => {
          setFiltro(e.target.value)
          setPaginaAtual(1)
        }}
        className="p-2 border rounded mb-4 w-full text-white"
      />

      <div className="flex gap-2 mb-4">
        {["todos", "brasileirao", "internacionais"].map((tipo) => (
          <button
            key={tipo}
            onClick={() => {
              setFiltroDescricao(tipo)
              setPaginaAtual(1)
            }}
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
          >
            {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-4">
        {camisasVisiveis.map((img) => (
          <div key={img.id} className="text-center flex flex-col justify-center items-center">
            <p className="text-center text-white text-2xl">{img.time}</p>
            <img src={img.arquivo} alt={img.time} className="md:w-[250px] h-auto rounded-4xl" />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8 flex-wrap">
        {[...Array(totalPaginas).keys()].map((num) => {
          const pagina = num + 1
          return (
            <button
              key={pagina}
              onClick={() => mudarPagina(pagina)}
              className={`px-3 py-2 rounded ${
                paginaAtual === pagina ? 'bg-yellow-600 text-white' : 'bg-yellow-400 hover:bg-yellow-500'
              }`}
            >
              {pagina}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Galery
