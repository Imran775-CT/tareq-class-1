export default function Home() {
  return (
    <div className="main h-100vh bg-cover bg-center">
      <div className="navbar h-75px w-100vh m-auto">
        <div className="icon w-200px h-70 float-left">
          <h2 className="decoration-orange pt-10px pl-20px float-left font-sans text-3xl">
            PraRoz
          </h2>
        </div>

        <div className="menu w-400px h-70px float-left">
          <ul className="  float-left flex items-center justify-center">
            <li className=" list my-0 scroll-mx-0 list-none text-sm">
              <a
                className="font-sans font-bold decoration-white decoration-0 ease-in-out hover:text-blue-600"
                href="#"
              >
                HOME{" "}
              </a>
            </li>
            <li className="my-0 scroll-mx-0 list-none text-sm">
              <a
                className="font-sans font-bold decoration-white decoration-0 ease-in-out hover:text-blue-600"
                href="#"
              >
                ABOUT
              </a>
            </li>
            <li className="my-0 scroll-mx-0 list-none text-sm">
              <a
                className="font-sans font-bold decoration-white decoration-0 ease-in-out hover:text-blue-600"
                href="#"
              >
                SERVICE
              </a>
            </li>
            <li className="my-0 scroll-mx-0 list-none text-sm">
              <a
                className="font-sans font-bold decoration-white decoration-0 ease-in-out hover:text-blue-600"
                href="#"
              >
                DESIGN
              </a>
            </li>
            <li className="my-0 scroll-mx-0 list-none text-sm">
              <a
                className="font-sans font-bold decoration-white decoration-0 ease-in-out hover:text-blue-600"
                href="#"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>

        <div className="search w-330px ml-270px float-left">
          <input
            className="srch outline-none w-200px h-40px border-2-solid-tomato mt-30px border-r-[none] bg-transparent font-sans decoration-white text-xs float-left p-10px rounded-r-lg rounded-l "
            type="search"
            name=""
            placeholder="Type to text"
          />
          <a href="#">
            <button className="btn w-100px h-40px bg-orange border-2px-solid-orange mt-13px decoration-white text-xs rounded-r rounded-b-md bg-black-500 hover:bg-red-500 outline-none">Search</button>
          </a>
        </div>
      </div>
    </div>
  );
}
