import "@fontsource/lato/700.css";
import "@fontsource/montserrat/400.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import PaperPage from "./PaperPage/PaperPage";
import ProductPage from "./ProductPage/productPage";
import PredictTitersPage from "./PredictTitersPage/PredictTitersPage";
import DesignStrainsPage from "./DesignStrainsPage/DesignStrainsPage";
import PaperListPage from "./PaperListPage/PaperListPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ScrollToTop from "./Hooks/ScrollToTop";
import ProductListPage from "./ProductListPage/ProductListPage";
import SubstrateListPage from "./SubstrateListPage.jsx/SubstrateListPage";
import ChartPage from "./ChartPage/ChartPage";
import InventoryPage from "./InventoryPage/InventoryPage";
import PathwayPage from "./PathwayPage/PathwayPage";
import UserInfo from "./UserInfoPage/UserInfo";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* static routes */}
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/predict-titers" element={<PredictTitersPage />} />
            <Route path="/design-strains" element={<DesignStrainsPage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/substrates" element={<SubstrateListPage />} />
            <Route path="/charts" element={<ChartPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/pathway" element={<PathwayPage/>} />
            <Route path='/userinfo' element={<UserInfo/>} />

            {/* dynamic routes */}
            <Route path="/database/:species" element={<PaperListPage />} />
            <Route path="/paper/:species/:slug" element={<PaperPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
