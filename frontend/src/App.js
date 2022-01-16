import React, { Suspense } from "react";
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
        <Suspense fallback={<>로딩</>}>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </Suspense>
      </RecoilRoot>
    </GlobalStyle>
  );
}

export default App;
