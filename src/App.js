
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import RootLayout from "./root/RootLayout";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/blog" element={<BlogPage/>}></Route>
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
