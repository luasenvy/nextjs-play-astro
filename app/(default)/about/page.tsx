import Aboutsection from "@/components/Aboutsection";
import CTAsection from "@/components/CTAsection";
import Team from "@/components/Team";
import Breadcrumb from "@/components/layout/Breadcrumb";

export default function AboutPage() {
  return (
    <>
      <Breadcrumb>About Us Page</Breadcrumb>
      <Aboutsection />
      <CTAsection />
      <Team />
    </>
  );
}
