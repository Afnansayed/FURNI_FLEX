import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router/Router.jsx";
import AuthProvider from "./Providers/AuthProvider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import CartProvider from "./Providers/CartProvider/CartProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <AuthProvider>
          <div className="max-w-[1420px] mx-auto">
            <RouterProvider router={router} />
          </div>
        </AuthProvider>
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>
);
