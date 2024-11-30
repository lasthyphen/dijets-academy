export function Footer() {
  return (
    <footer className="mt-auto border-t bg-card py-12 text-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold">Dijets Academy</p>
          <p className="text-xs">
            Dijets Inc.
          </p>
        </div>
          <div className="grid grid-cols-2 gap-8 mt-12 text-sm font-medium text-gray-500 lg:grid-cols-3 lg:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-lg text-neutral-800 dark:text-neutral-100">
                Dijets
              </h3>
              <ul role="list" className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://dijets.io/ecosystem"
                    target="_blank"
                    className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-200 after:ease-&lsqb;cubic-bezier(0.65_0.05_0.36_1)&rsqb; hover:after:origin-bottom-left hover:after:scale-x-100 p-0.5 rounded-md transition duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-800 dark:focus:ring-neutral-600 focus:ring-neutral-100"
                  >
                    Get Started
                  </a>
                </li>
                <li>
                  <a
                    href="https://explorer.dijets.io"
                    target="_blank"
                    className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-200 after:ease-&lsqb;cubic-bezier(0.65_0.05_0.36_1)&rsqb; hover:after:origin-bottom-left hover:after:scale-x-100 p-0.5 rounded-md transition duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-800 dark:focus:ring-neutral-600 focus:ring-neutral-100"
                  >
                    Explorer
                  </a>
                </li>
                <li>
                  <a
                    href="https://wallet.dijets.io"
                    target="_blank"
                    className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-200 after:ease-&lsqb;cubic-bezier(0.65_0.05_0.36_1)&rsqb; hover:after:origin-bottom-left hover:after:scale-x-100 p-0.5 rounded-md transition duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-800 dark:focus:ring-neutral-600 focus:ring-neutral-100"
                  >
                    Wallet
                  </a>
                </li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-neutral-800 dark:text-neutral-100">
                Community
              </h3>
              <ul role="list" className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://github.com/Dijets-Inc"
                    target="_blank"
                    className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-200 after:ease-&lsqb;cubic-bezier(0.65_0.05_0.36_1)&rsqb; hover:after:origin-bottom-left hover:after:scale-x-100 p-0.5 rounded-md transition duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-800 dark:focus:ring-neutral-600 focus:ring-neutral-100"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://forum.dijets.io"
                    target="_blank"
                    className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-200 after:ease-&lsqb;cubic-bezier(0.65_0.05_0.36_1)&rsqb; hover:after:origin-bottom-left hover:after:scale-x-100 p-0.5 rounded-md transition duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-800 dark:focus:ring-neutral-600 focus:ring-neutral-100"
                  >
                    Forum
                  </a>
                </li>
                <li>
                  <a
                    href="https://qowalts.dijets.io"
                    target="_blank"
                    className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-200 after:ease-&lsqb;cubic-bezier(0.65_0.05_0.36_1)&rsqb; hover:after:origin-bottom-left hover:after:scale-x-100 p-0.5 rounded-md transition duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-800 dark:focus:ring-neutral-600 focus:ring-neutral-100"
                  >
                    Qowalts
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-lg text-neutral-800 dark:text-neutral-100">
                More Links
              </h3>
              <ul role="list" className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://dijets.statuspage.io/"
                    target="_blank"
                    className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-200 after:ease-&lsqb;cubic-bezier(0.65_0.05_0.36_1)&rsqb; hover:after:origin-bottom-left hover:after:scale-x-100 p-0.5 rounded-md transition duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-800 dark:focus:ring-neutral-600 focus:ring-neutral-100"
                  >
                    Network Status
                  </a>
                </li>
                <li>
                  <a
                    href="https://faucet.dijets.io"
                    className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-200 after:ease-&lsqb;cubic-bezier(0.65_0.05_0.36_1)&rsqb; hover:after:origin-bottom-left hover:after:scale-x-100 p-0.5 rounded-md transition duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-800 dark:focus:ring-neutral-600 focus:ring-neutral-100"
                  >
                    Faucet
                  </a>
                </li>
                <li>
                  <a
                    href="https://dijets-docs.vercel.app/"
                    className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-200 after:ease-&lsqb;cubic-bezier(0.65_0.05_0.36_1)&rsqb; hover:after:origin-bottom-left hover:after:scale-x-100 p-0.5 rounded-md transition duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-800 dark:focus:ring-neutral-600 focus:ring-neutral-100"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </footer>
  )
}