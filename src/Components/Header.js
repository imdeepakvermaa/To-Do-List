
const Header = () => {
  return (
    <div className="flex justify-between items-center bg-stone-900 px-24 ">
        <div>
            <h1 className=" text-4xl p-4 text-white font-bold">
                To-Do List
            </h1>

        </div>

        <div>

            <button className="text-bold text-white text-3xl ">Mode</button>

        </div>
      
    </div>
  )
}

export default Header;
