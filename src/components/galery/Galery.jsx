import { useState } from 'react';
import shirts from "../../data/imagens_formatadas.json";

const Gallery = () => {
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Todas");
  const [currentPage, setCurrentPage] = useState(1);
  const [alphabeticalOrder, setAlphabeticalOrder] = useState(false);
  const shirtsPerPage = 10;

  let filteredShirts = shirts.filter((shirt) => {
    const matchesText = shirt.time.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = categoryFilter === "Todas" || shirt.descricao === categoryFilter;
    return matchesText && matchesCategory;
  });

  if (alphabeticalOrder) {
    filteredShirts.sort((a, b) => a.time.localeCompare(b.time));
  }

  const totalPages = Math.ceil(filteredShirts.length / shirtsPerPage);
  const startIndex = (currentPage - 1) * shirtsPerPage;
  const visibleShirts = filteredShirts.slice(startIndex, startIndex + shirtsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div id='galeria' className="p-4 min-h-screen scroll-mt-40">
      <input
        type="text"
        placeholder="Filter by team..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setCurrentPage(1);
        }}
        className="p-2 border rounded mb-4 w-full text-white"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        {[
          "Todas",
          "brasileirao",
          "internacionais"
        ].map((type) => (
          <button
            key={type}
            onClick={() => {
              setCategoryFilter(type);
              setCurrentPage(1);
            }}
            className="bg-[#E5A020] hover:bg-gray-400 px-4 py-2 rounded min-w-[120px] text-center cursor-pointer"
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}

        <button
          onClick={() => setAlphabeticalOrder(!alphabeticalOrder)}
          className="bg-gray-200 hover:bg-gray-400 px-4 py-2 rounded min-w-[120px] text-center cursor-pointer"
        >
          {alphabeticalOrder ? "Ordem Original" : "Ordenar A-Z"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {visibleShirts.map((shirt) => (
          <div key={shirt.id} className="text-center flex flex-col justify-center items-center">
            <p className="text-center text-white text-2xl">{shirt.time}</p>
            <p className="text-center text-[#828282] text-xl">Ano: {shirt.temporada}</p>

            <img src={shirt.arquivo} alt={shirt.time} loading='lazy' className="md:w-[250px] h-auto rounded-4xl" />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8 flex-wrap">
        {[...Array(totalPages).keys()].map((num) => {
          const page = num + 1;
          return (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`px-3 py-2 rounded min-w-[40px] ${
                currentPage === page ? 'bg-yellow-600 text-white' : 'bg-yellow-400 hover:bg-yellow-500'
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
