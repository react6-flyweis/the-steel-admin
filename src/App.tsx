import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { adminRoutes } from "./routes/admin.routes";
import { Loading } from "./components/loading";

const router = createBrowserRouter(adminRoutes);

export function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
