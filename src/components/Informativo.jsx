const Informativo = () => {
  return (
    <section className="h-full lg:h-[30vh] w-full mt-20 grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full w-full">
        <div className="border-l-[1rem] border-[#FE043C] h-full w-full flex flex-col justify-center px-[10%]">
          <h3 className="font-sans text-text-200 text-sm font-normal ">
            La excelencia está en la diversidad y el modo de progresar es
            conocer y comparar las diversidades de productos, culturas y
            técnicas.
          </h3>
          <span className="font-sans mt-3 text-text-100 text-sm font-bold ">
            Alain Ducasse
          </span>
        </div>
      </div>
      <div className="h-full mt-5 lg:mt-0 w-full">
        <div className="h-full w-full flex flex-col justify-center px-[10%] border-r-[1rem] border-[#FE043C]">
        <h3 className="font-sans text-text-200 text-sm font-normal ">
          La cocina es un lenguaje mediante el cual se puede expresar armonía,
          felicidad, belleza, poesía, complejidad, magia, humor, provocación,
          cultura.
        </h3>
        <span className="font-sans mt-3 text-text-100 text-sm font-bold ">
          Ferran Adrià
        </span>
        </div>
      </div>
    </section>
  );
};

export default Informativo;
