import banner from "/bannerImage.jpg"

const BigImage = () => {
  return (
    <div className="lg:flex hidden justify-center items-center lg:items-end lg:w-full max-w-[650px] w-[300px]">
        <img src={banner} alt="" className="object-contain rounded-4xl"/>
    </div>
  )
}

export default BigImage