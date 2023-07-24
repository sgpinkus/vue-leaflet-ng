import type L from 'leaflet';
import { type SetupContext } from 'vue';
export declare type ListenersAndAttrs = {
    listeners: L.LeafletEventHandlerFnMap;
    attrs: Record<string, unknown>;
};
/**
 * Custom props are props used by the wrapper other are passed to leaflet.
 */
export declare function filterLeafletProps(props: Record<string, any>, propDef: any): any;
export declare function watchersFromPropSetters(props: Record<string, any>, propSetters: Record<string, any>, leafletObject: L.Class): void;
export declare function remapEvents(contextAttrs: SetupContext['attrs'], leafletObject: L.Evented): ListenersAndAttrs;
export declare function eventablePromise<T>(): {
    promise: Promise<T>;
    ready: (object: T) => void;
};
