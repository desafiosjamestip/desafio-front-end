import { ReactNode } from 'react';

import { ProductProvider } from './Product/index';

interface ProviderProps {
    children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
    return (
        <ProductProvider>
            {children}
        </ProductProvider>
    )
};

export default Providers;