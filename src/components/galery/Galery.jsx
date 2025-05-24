import { useState } from 'react';
import shirts from "../../data/imagens_formatadas.json";

const Gallery = () => {
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const shirtsPerPage = 10;

  const filteredShirts = shirts.filter((shirt) => {
    const matchesText = shirt.time.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = categoryFilter === "all" || shirt.descricao === categoryFilter;
    return matchesText && matchesCategory;
  });

  const totalPages = Math.ceil(filteredShirts.length / shirtsPerPage);
  const startIndex = (currentPage - 1) * shirtsPerPage;
  const visibleShirts = filteredShirts.slice(startIndex, startIndex + shirtsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 min-h-screen">
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

      <div className="flex gap-2 mb-4">
        {["all", "brasileirao", "internacionais"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setCategoryFilter(type);
              setCurrentPage(1);
            }}
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-4">
        {visibleShirts.map((shirt) => (
          <div key={shirt.id} className="text-center flex flex-col justify-center items-center">
            <p className="text-center text-white text-2xl">{shirt.time}</p>
            <img src={shirt.arquivo} alt={shirt.time} className="md:w-[250px] h-auto rounded-4xl" />
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
              className={`px-3 py-2 rounded ${
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
