import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <main className="flex justify-center pt-5">
      <div className="w-80">
        <Outlet />
      </div>
    </main>
  );
}
