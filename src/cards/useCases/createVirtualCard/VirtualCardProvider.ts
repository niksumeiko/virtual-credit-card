import { createGenericContext } from '../../../common/context';
import type { VirtualCard } from '../../domain/VirtualCardService';

type Adapter = () => Promise<VirtualCard>;

type Factory = () => Adapter;

export const { useContext, createContextProvider: provideVirtualCard } =
    createGenericContext<Factory>();

export function useVirtualCardAdapterFactory() {
    return useContext().value;
}
