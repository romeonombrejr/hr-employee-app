import Image from 'next/image';
import { SignedOut, SignInButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 text-center">Hey there! 👋</h1>

      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/df_lp-logo.svg"
          alt="Project Logo"
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>

      {/* Sign In Button */}
      <div className="mb-8">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>

      {/* Footer */}
      <footer className="mt-auto fixed bottom-8">
        <p className="text-gray-500 text-sm">
          A project by Romeo C. Nombre Jr.
        </p>
      </footer>
    </main>
  );
}