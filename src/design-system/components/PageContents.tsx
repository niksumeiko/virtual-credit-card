import { PropsWithChildren } from 'react';

export const PageContents = ({ children }: PropsWithChildren) => (
    <div className="flex flex-col space-y-12">{children}</div>
);
