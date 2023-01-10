import React, { useEffect } from "react";
import "./App.css";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { useGlobal } from "./context/GlobalContext";
import data from "../public/assets/data/data";

function App() {
  const { value, setValue } = useGlobal();
  useEffect(() => {
    setValue(data.user);
  }, []);
  console.log(typeof value);
  console.log(value?.name);
  return (
    <div className="flex">
      {value ? (
        <>
          <Sidebar />
          <Main />
        </>
      ) : (
        console.log("loading")
      )}
    </div>
  );
}

export default App;
