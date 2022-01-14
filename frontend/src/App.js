import React from "react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./Router";
import GlobalStyle from "./GlobalStyle";

const queryClient = new QueryClient();

function App() {
  return (
    <GlobalStyle>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </RecoilRoot>
    </GlobalStyle>
  );
}

export default App;
