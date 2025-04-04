import { UserButton } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1>Admin</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
      {/* Admin */}
    </div>
  );
}