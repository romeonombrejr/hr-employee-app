import { UserButton } from '@clerk/nextjs';

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1>Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
      {/* Dashboard content */}
    </div>
  );
}