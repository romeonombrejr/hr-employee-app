import Image from 'next/image';
import { SignedOut, SignInButton } from '@clerk/nextjs';
import { Button } from '@radix-ui/themes';
import { Separator, Tooltip } from "radix-ui";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Hey there! 👋</h1>

        <Separator.Root className="bg-gray-300 h-[1px] w-full mb-6" />

        {/* Logo with Tooltip */}
        <div className="mb-6">
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <div className="inline-block">
                  <Image
                    src="/df_lp-logo.svg"
                    alt="Project Logo"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="text-white p-2 rounded shadow-md text-sm"
                  side="bottom"
                  sideOffset={5}
                >
                  <span>Our Awesome Project</span>
                  <Tooltip.Arrow className="fill-gray-900" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        {/* Sign In Button with Tooltip */}
        <SignedOut>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <SignInButton mode="modal">
                  <Button>
                    Sign In
                  </Button>
                </SignInButton>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="text-white p-2 rounded shadow-md text-sm"
                  side="top"
                  sideOffset={5}
                >
                  <span>Click to Sign In</span>
                  <Tooltip.Arrow className="fill-gray-900" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </SignedOut>
      </div>

      {/* Footer */}
      <footer className="mt-8">
        <p className="text-sm">
          A project by Romeo C. Nombre Jr.
        </p>
      </footer>
    </main>
  );
}
