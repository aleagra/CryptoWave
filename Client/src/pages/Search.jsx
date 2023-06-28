import { useContext, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CoinContext } from "../context/CoinContext";
import Navbar from "../componentes/Navbar";
import Wrapper from "../wrapper/Wrapper";

function Search() {
  const { coins } = useContext(CoinContext);
  let { buscar } = useParams();
  const [mostrarResultados, setMostrarResultados] = useState(true);
  const monedasFiltradas = coins.filter((Element) => {
    return Element.CoinInfo.FullName.trim()
      .toLowerCase()
      .includes(buscar.toLowerCase());
  });

  useEffect(() => {
    if (monedasFiltradas.length === 0) {
      setMostrarResultados(false);
    } else {
      setMostrarResultados(true);
    }
  }, [monedasFiltradas]);
  return (
    <>
      <Navbar />
      <div className="flex w-full items-center bg-background pt-[8rem]">
        <div className="m-auto w-[100%] text-left text-sm text-white">
          {mostrarResultados && (
            <div className="grid grid-cols-5 pl-6 text-lg font-semibold text-secondary max-lg:grid-cols-4 max-lg:text-sm">
              <div className="">Coin</div>
              <div className="text-center">Last price</div>
              <div className="text-center ">24h change</div>
              <div className="text-center max-lg:hidden ">Volume</div>
              <div className="text-center">Trade</div>
            </div>
          )}

          <div className="my-5 border-opacity-30">
            {monedasFiltradas.length > 0 ? (
              monedasFiltradas.map((Element) => {
                const numericValue = parseFloat(
                  Element.DISPLAY?.USD.CHANGE24HOUR.substring(1)
                );
                return (
                  <div
                    className="grid grid-cols-5 place-items-center rounded-md py-5 pl-6 hover:bg-white/20 max-lg:grid-cols-4 max-lg:rounded-none max-lg:py-4 max-lg:pl-4"
                    key={Element.CoinInfo.Id}
                  >
                    <div className="flex w-full items-center gap-2 max-lg:gap-1">
                      <img
                        className="h-6 w-6"
                        src={
                          "https://www.cryptocompare.com" +
                          Element.CoinInfo.ImageUrl
                        }
                        alt={Element.CoinInfo.FullName}
                      />

                      <span className="text-xl max-lg:text-sm">
                        {Element.CoinInfo.FullName}
                      </span>

                      <span className="text-lg uppercase text-secondary max-lg:hidden ">
                        {Element.CoinInfo.Internal}
                      </span>
                    </div>

                    <div className="text-center text-xl font-bold max-lg:text-sm">
                      {Element.DISPLAY?.USD.PRICE}
                    </div>

                    <div className="text-center ">
                      <span
                        className={`text-center text-lg font-bold max-sm:text-xs ${
                          numericValue > 0 ? "text-[#00A68C]" : "text-[#D9475A]"
                        }`}
                      >
                        {Element.DISPLAY?.USD.CHANGE24HOUR}
                      </span>
                    </div>

                    <div className="text-center text-lg max-lg:hidden max-lg:text-sm">
                      {Element.DISPLAY?.USD.VOLUME24HOURTO}
                    </div>

                    <div className="flex items-center justify-center">
                      <NavLink to="/Exchange">
                        <button className="w-[8rem] rounded-md bg-main p-2 uppercase max-2xl:text-sm max-lg:w-[4rem]">
                          Buy
                        </button>
                      </NavLink>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex w-full justify-center text-white">
                {" "}
                <span className="text-xl">No se encontraron resultados.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Wrapper(Search);
