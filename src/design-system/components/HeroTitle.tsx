import type { ReactNode } from 'react';
import cx from 'classnames';

interface Props {
    disabled?: boolean;
    title: ReactNode;
}

export const HeroTitle = ({ disabled, title }: Props) => (
    <h2 className="-mt-11 mb-8 text-4xl font-extrabold leading-[3.5rem] tracking-wide text-center">
        <span
            className={cx('px-4 py-1', {
                'bg-yellow-50': disabled,
                'bg-amber-100': !disabled,
            })}
        >
            <span
                className={cx(
                    'bg-clip-text bg-gradient-to-r  uppercase text-transparent',
                    {
                        'from-gray-500 to-gray-800': disabled,
                        'from-indigo-600 to-pink-500': !disabled,
                    },
                )}
            >
                {title}
            </span>
        </span>
    </h2>
);
