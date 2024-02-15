import type { ComponentProps, PropsWithChildren } from 'react';
import cx from 'classnames';

interface Props extends ComponentProps<'div'> {
    variant: keyof typeof classNameByVariant;
    title?: string;
}

const classNameByVariant = {
    error: 'rounded bg-red-100 py-2 px-4 mt-2',
    info: 'rounded border-s-4 border-blue-300/40 bg-sky-50 p-4',
};

export const Alert = ({
    children,
    title,
    variant,
    className,
    ...props
}: PropsWithChildren<Props>) => (
    <div {...props} role="alert" className={cx(className, classNameByVariant[variant])}>
        {title && <span className="block text-sm text-gray-700 pb-1">{title}</span>}
        {children}
    </div>
);
