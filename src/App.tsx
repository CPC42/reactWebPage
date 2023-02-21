import { useState } from "react";
import "./App.css";
import HomePage from "./Homepage/Home.tsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
