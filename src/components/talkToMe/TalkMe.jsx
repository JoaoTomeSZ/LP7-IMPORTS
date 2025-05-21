import {useState} from 'react'
import {IoLogoWhatsapp } from "react-icons/io5";
const TalkMe = () => {
    const [Form, setForm] = useState({
        name: "",
        address: "",
        itens: ""
    })

    const handleChange = (e) => {
        setForm({...Form, [e.target.name]: e.target.value})
    }

    const sendMessage = (e) => {
        e.preventDefault()

        const number = "6299156322"
        const text = `Olá! Gostaria de fazer um pedido:\n\n->Nome: ${Form.name} \n-> Endereço: ${Form.address}\n-> Peças desejadas:\n${Form.itens}`;
        const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`
        window.open(url, "_blank", "noopener,noreferrer")
    }

  return (
        <div className='flex justify-center items-center max-w-full w-full'>

            <form onSubmit={sendMessage} className="space-y-8 max-w-md mx-auto p-5 border rounded-xl shadow-md  bg-gradient-to-t from-black/5 to-[#e5a0209c]">
              <h1 className='text-3xl font-semibold text-white text-left'>Faça seu pedido!</h1>
      <input
        type="text"
        name="name"
        placeholder="Nome completo"
        value={Form.name}
        onChange={handleChange}
        required
        className="border-black border-1 p-2 w-full rounded  bg-white"
      />
      <input
        type="text"
        name="address"
        placeholder="Endereço completo"
        value={Form.address}
        onChange={handleChange}
        required
        className="border-black border-1 p-2 w-full rounded  bg-white"
      />
      <textarea
        name="itens"
        placeholder="Peças que deseja (ex: camisa do Corinthians, Flamengo...)"
        value={Form.itens}
        onChange={handleChange}
        required
        className="border-black border-1 p-2 w-full h-32 rounded bg-white"
      />
      <button
        type="submit"
        className="bg-green-600 text-white py-2 px-3 flex items-center gap-2 rounded hover:bg-green-700 text-center"
      >
        Enviar pedido via WhatsApp<IoLogoWhatsapp/>
      </button>
    </form>
        </div>
  )
}

export default TalkMe