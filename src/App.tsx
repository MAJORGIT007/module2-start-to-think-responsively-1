import elephants from "./assets/elephants.jpg";
function App() {
  return (
    <main className="mx-auto w-[90%] max-w-[980px] pt-6 text-neutral-500">
      <h1 className="mb-6 text-center text-4xl font-bold text-stone-800">
        Let's start <span className="text-yellow-600">getting a little</span>{" "}
        more fancy!
      </h1>
      <img
        src={elephants}
        alt="3 elephants"
        className="h-[15vh] object-cover object-center sm:h-full"
      />
      <div className="mt-6 flex flex-col justify-between sm:flex-row">
        <div className="mb-4 sm:mb-0 sm:w-[20%]">
          <h2 className="mb-2 text-2xl font-bold">Dolor sit</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat
          </p>
        </div>
        <div className="mb-4 sm:mb-0 sm:w-[45%]">
          <h2 className="mb-2 text-2xl font-bold">Consectetur adipiscing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
        </div>
        <div className="bg-stone-800 p-6 text-white sm:w-[25%]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col justify-between sm:flex-row">
        <div className="mb-4 sm:mb-0 sm:w-[70%]">
          <h2 className="mb-2 text-2xl font-bold">
            Deserunt mollit anim id est laborum
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="mb-6 bg-stone-800 p-6 text-white sm:w-[25%]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
