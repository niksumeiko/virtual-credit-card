import type { ComponentProps } from 'react';

export const Button = (props: ComponentProps<'button'>) => (
    <div className="text-center">
        <button
            {...props}
            className="grow-0 px-4 py-3 text-sm font-medium tracking-wider text-black uppercase transition-colors duration-300 transform bg-transparent border border-gray-300 rounded-md hover:bg-sky-50 focus:bg-sky-50 focus:outline-none"
        >
            {props.children}
        </button>
    </div>
);
