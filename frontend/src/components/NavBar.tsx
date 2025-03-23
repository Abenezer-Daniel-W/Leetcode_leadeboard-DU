export function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl md:btn-md lg:btn-lg xl:btn-xl">
          AlgoClub
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex space-x-4">
          <li className="active">
            <a
              className="btn btn-ghost text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl font-bold hover:bg-gray-200 bg-gray-200"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a className="btn btn-ghost text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl hover:bg-gray-200">
              Discussion
            </a>
          </li>
          <li>
            <a className="btn btn-ghost text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl hover:bg-gray-200">
              Events
            </a>
          </li>
          <li>
            <button className="btn btn-warning rounded-lg px-4 py-2 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl">
              Invite
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
