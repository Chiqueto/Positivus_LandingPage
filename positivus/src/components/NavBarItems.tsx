import { tv, VariantProps } from 'tailwind-variants'

const navVariants = tv({
  base: '',

  variants: {
      variant: {
          hidden: 'hidden lg:flex lg:relative lg:top-auto lg:right-auto lg:space-x-0 lg:text-left',
          opened: 'absolute top-7 right-10 z-10 space-x-1 text-end flex lg:lg:relative lg:top-auto lg:right-auto lg:space-x-0 lg:text-left'
      },

  },

  defaultVariants: {
      variant: 'hidden',
  }
})

interface NavBarItemsProps extends VariantProps <typeof navVariants> {
  
}

export function NavBarItems({ variant, ...props}:NavBarItemsProps) {
  return (
    <div {...props} className={navVariants({variant})}> 
    {/* className="absolute top-7 right-10 z-10 space-x-1 text-end flex lg:lg:relative lg:top-auto lg:right-auto lg:space-x-0 lg:text-left */}
      <ul className="flex items-center flex-col text-lg bg-zinc-100 gap-4 lg:flex-row lg:bg-transparent lg:justify-end lg:gap-4 xl:gap-10">
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>
          <div className="px-1 py-1 m-2 text-center border-solid border border-black rounded-xl sm:px-5 sm:py-3 lg:px-7 lg:py-5 lg:m-0">
            Request a quote
          </div>
        </li>
      </ul>
    </div>
  );
}
