import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { CompanyDetailPage } from "../components/site/CompanyDetailPage";

export const Route = createFileRoute("/companies/$companyId")({
  component: CompanyDetailRoute,
});

function CompanyDetailRoute() {
  const { companyId } = Route.useParams();

  return (
    <>
      <Header />
      <CompanyDetailPage />
      <Footer />
    </>
  );
}