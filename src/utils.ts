import type L from 'leaflet';
import { pickBy } from 'lodash';
import { watch, type SetupContext } from 'vue';

export declare type ListenersAndAttrs = {
  listeners: L.LeafletEventHandlerFnMap;
  attrs: Record<string, unknown>;
};

/**
 * Custom props are props used by the wrapper other are passed to leaflet.
 */
export function filterLeafletProps(props: Record<string, any>, propDef: any) {
  return pickBy(props, (v: any, k: string) =>
   !propDef[k]?.custom && v !== undefined
  );
}

const capitalizeFirstLetter = (s: string) => {
  if (!s || typeof s.charAt !== 'function') {
    return s;
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export function watchersFromPropSetters(props: Record<string, any>, propSetters: Record<string, any>, leafletObject: L.Class) {
  for(const key of Object.keys(props)) {
    const { setter: customSetter, setterOptions } = propSetters[key] ?? {};
    const setterMethodName = 'set' + capitalizeFirstLetter(key);
    const leafletSetter = Reflect.get(leafletObject, setterMethodName);
    if(customSetter) {
      watch(
        () => props[key],
        (newVal) => {
          customSetter && customSetter(leafletObject, newVal);
        },
        setterOptions,
      );
    } else if(leafletSetter && leafletSetter instanceof Function) {
      watch(
        () => props[key],
        (newVal) => {
          leafletSetter.call(leafletObject, newVal);
        },
        setterOptions,
      );
    }
  }
}

export function remapEvents(contextAttrs: SetupContext['attrs'], leafletObject: L.Evented): ListenersAndAttrs {
  const listeners: L.LeafletEventHandlerFnMap & Record<string, unknown> = {};
  const attrs: Record<string, unknown> = {};
  for (const attrName in contextAttrs) {
    if (
      attrName.startsWith('on') &&
      !attrName.startsWith('onUpdate') &&
      attrName !== 'onReady'
    ) {
      const eventName = attrName.slice(2).toLocaleLowerCase();
      listeners[eventName] = contextAttrs[attrName];
    } else {
      attrs[attrName] = contextAttrs[attrName];
    }
  }
  leafletObject.on(listeners);
  return { listeners, attrs };
}

function eventPromise<T>(et: EventTarget, eventName = 'ready', propName = 'object'): Promise<T> {
  return new Promise((resolve) => {
    et.addEventListener(eventName, (e: any) => {
        if(!e.detail?.object) throw new Error('This should never happen.');
        resolve(e.detail.object as T);
      });
  });
}

export function eventablePromise<T>() {
  const et = new EventTarget();
  const promise = eventPromise<T>(et);
  const ready = (object: T) => {
    et.dispatchEvent(new CustomEvent('ready', { detail: { object } }));
  };
  return { promise, ready };
}