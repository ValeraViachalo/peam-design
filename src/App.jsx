import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { ScrollProvider } from "./helpers/scrollProvider";
import { Header } from "@C/Header/Header";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Slider from "./pages/Home/Slider/Slider";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer/Footer";

const queryC = new QueryClient();

function App() {
  const element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        // {
        //   path: 'blog',
        //   element: <Blog />,
        // },
        // {
        //   path: 'blogs',
        //   children: [
        //     {
        //       path: ":blogId?",
        //       element: <BlogDetails />,
        //     },
        //   ],
        // }
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  const location = useLocation();

  return (
    <QueryClientProvider client={queryC}>
      <main>
        <ScrollProvider>
          <Header />
          <AnimatePresence mode="wait" initial={false}>
            {React.cloneElement(element, { key: location.pathname })}
          </AnimatePresence>
          <Footer />
        </ScrollProvider>
      </main>
    </QueryClientProvider>
  );
}

export default App;
