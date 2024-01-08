import React from "react";
import { Link } from "react-router-dom";

function CheckoutSuccess({ setCart }) {
  React.useEffect(() => {
    setCart([]);
  }, [setCart]);

  return (
    <div>
      <h1>Takk for din bestilling!</h1>
      <p>Vi setter pris på din støtte.</p>
      <p>Din bestilling vil bli behandlet og sendt så snart som mulig.</p>
      <p>Ta gjerne kontakt med oss hvis du har spørsmål.</p>
      <Link to="/">
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Back to store
        </button>
      </Link>
      .
    </div>
  );
}

export default CheckoutSuccess;
