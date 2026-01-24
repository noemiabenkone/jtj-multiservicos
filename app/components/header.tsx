

export default function Header() {
    return(
        <header className=" flex items-center justify-around p-3 shadow-lg">
        <h1 className="text-3xl ">
          J<span className="text-green-600 text-3xl font-bold">T</span>J <span className="ml-2 font-semibold">Multiserviços</span>
        </h1>
        
        <button className="bg-green-600 text-white hover:bg-green-500 px-4 py-2 rounded-lg font-medium transition cursor-pointer ">
          Agendar agora
        </button>
      </header>
    );
}