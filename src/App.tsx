import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./libs/react-query";
//
import { ThemeProvider } from "./theme";
import { AppRoutes } from "./pages";
import { EmptyLayout } from "./components/Layouts";
import { Spinner } from "./components/Elements";

function App() {
  return (
    <Suspense
      fallback={
        <EmptyLayout>
          <Spinner />
        </EmptyLayout>
      }
    >
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ThemeProvider>
            <Router>
              <AppRoutes />
            </Router>
          </ThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
