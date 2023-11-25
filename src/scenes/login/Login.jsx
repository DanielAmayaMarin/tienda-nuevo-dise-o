import img from "../../assets/login.svg";

const Login = () => {
  return (
    <section className="w-full h-[80vh] flex items-center justify-center">
      <div className="h-[80%] w-[70%] flex flex-col md:flex-row shadow-3xl">
        <div className="h-full w-full flex flex-col md:w-1/2">
          <div className="w-full h-[20%] flex items-end justify-center">
            <h1 className="uppercase font-sans font-bold text-[32px] text-text-100">Inisio de sesión</h1>
          </div>
          <div className="w-full h-[80%] flex flex-col items-center justify-center gap-3 p-20">
            <form className="w-full h-full">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-text-100"
                >
                  Ingrese su correo
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-primary border border-border text-gray-900 text-sm rounded-lg focus:ring-borderScondary focus:border-borderScondary block w-full p-2.5"
                  placeholder="Correo"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-text-100"
                >
                  Ingrese su contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="bg-primary border border-border text-gray-900 text-sm rounded-lg focus:ring-borderScondary focus:border-borderScondary block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-text-100"
                >
                  Recuerdame
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-botton-100 hover:bg-botton-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
        <div className="h-full w-full md:w-1/2 bg-[#F2F2F2] p-[85px]">
          <div className="w-full h-full p-5">
            <img
              className="object-cover rounded-t-xl w-full"
              src={img}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
