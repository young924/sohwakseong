import React from "react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./Router";
import GlobalStyle from "./GlobalStyle";
import { ReactQueryDevtools } from "react-query/devtools";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: "tracked",
      refetchOnWindowFocus: false,
      retry: 2,
      retryDelay: 500,
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <GlobalStyle>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Router />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </RecoilRoot>
    </GlobalStyle>
  );
}

export default App;
