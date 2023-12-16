import { Suspense } from "react";
import { Container } from "./(home)/_components/container";
import { Navbar } from "./(home)/_components/navbar";
import { Sidebar, SidebarSkeleton } from "./(home)/_components/sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
          <Container>{children}</Container>
        </Suspense>
      </div>
    </>
  );
};

export default BrowseLayout;
