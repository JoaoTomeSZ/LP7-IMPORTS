import {useState} from 'react'
import camisas from "../../data/imagens_formatadas.json"

const Galery = () => {
const [filtro, setFiltro] = useState("")
const [filtroDescricao, setFiltroDescricao] = useState("todos")

     const camisasFiltradas = camisas.filter((camisa) => {
    const correspondeTexto = camisa.time.toLowerCase().includes(filtro.toLowerCase());
    const correspondeDescricao = 
      filtroDescricao === 'todos' || camisa.descricao === filtroDescricao;
    return correspondeTexto && correspondeDescricao;
  });

  return (
     <div className="p-4 min-h-screen ">
      <input
        type="text"
        placeholder="Filtrar por time..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="p-2 border rounded mb-4 w-full text-white"
      />

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFiltroDescricao('todos')}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
        >
          Todos
        </button>
        <button
          onClick={() => setFiltroDescricao('brasileirao')}
          className="bg-green-300 hover:bg-green-400 px-4 py-2 rounded"
        >
          Brasileirão
        </button>
        <button
          onClick={() => setFiltroDescricao('internacionais')}
          className="bg-blue-300 hover:bg-blue-400 px-4 py-2 rounded"
        >
          Internacionais
        </button>
      </div>

      <div className="grid lg:grid-cols-5 gap-4">
        {camisasFiltradas.map((img) => (
            
          <div key={img.id} className='text-center flex flex-col justify-center items-center'>
             <p className="text-center text-white text-2xl">{img.time}</p>
            <img src={img.arquivo} alt={img.time} className="md:w-[250px] h-auto rounded-4xl" />     
          </div>
        ))}
      </div>
    </div>
  )
}

export default Galery