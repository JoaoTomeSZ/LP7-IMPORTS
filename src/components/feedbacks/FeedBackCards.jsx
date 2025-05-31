
const FeedBackCards = ({feedbacks}) => {
  
  return (
    <div className="md:grid md:grid-cols-3 grid-cols-1 gap-6 p-4 w-full mt-5 justify-items-center hidden">
  {feedbacks.map((item, index) => (
    <div
      key={index}
      className="bg-gray-200 border border-blue-500 rounded-3xl w-full max-w-[250px] lg:max-w-[400px] min-h-full h-full p-6 shadow-md"
    >
      <div className="flex items-center gap-4">
        <img
          src={item.avatar}
          alt={`Avatar of ${item.name}`}
          className="w-24 h-24 rounded-full bg-white"
        />
        <h2 className="text-black text-xl font-bold">{item.name}</h2>
      </div>
      <p className="text-black mt-4 text-justify">{item.message}</p>
      <p>⭐⭐⭐⭐⭐</p>
    </div>
  ))}
</div>
  );
};

export default FeedBackCards;
