import banner from "/camisasBrasil.PNG"

const BigImage = () => {
  return (
    <div className="flex justify-center items-end">
        <img src={banner} alt="" className="object-contain rounded-4xl"/>
    </div>
  )
}

export default BigImage