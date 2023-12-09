/**
 * Definition of props that largely map to Leaflet object options, and custome "setters"
 * That are used to map changes to props to leaflet object methods.
 * Note props and setters can't be in the same data strucutre unfortunately because it breaks Component.props typings.
 */
import type {  PropType } from 'vue';
import type L from 'leaflet';
import type { PathOptions } from 'leaflet';
export * from './utils';

export const mapProps = {
  center: {
    type: [Object, Array] as PropType<L.LatLngExpression>,
  },
  bounds: {
    type: [Array, Object] as PropType<L.LatLngBoundsExpression>,
  },
  maxBounds: {
    type: [Array, Object] as PropType<L.LatLngBoundsExpression>,
  },
  zoom: {
    type: Number,
  },
  minZoom: {
    type: Number,
  },
  maxZoom: {
    type: Number,
  },
  paddingBottomRight: {
    type: [Object, Array] as PropType<L.PointExpression>,
  },
  paddingTopLeft: {
    type: Object as PropType<L.PointExpression>,
  },
  padding: {
    type: Object as PropType<L.PointExpression>,
  },
  worldCopyJump: {
    type: Boolean,
    default: undefined,
  },
  crs: {
    type: [String, Object] as PropType<L.CRS>,
  },
  maxBoundsViscosity: {
    type: Number,
  },
  inertia: {
    type: Boolean,
    default: undefined,
  },
  inertiaDeceleration: {
    type: Number,
  },
  inertiaMaxSpeed: {
    type: Number,
  },
  easeLinearity: {
    type: Number,
  },
  zoomAnimation: {
    type: Boolean,
    default: undefined,
  },
  zoomAnimationThreshold: {
    type: Number,
  },
  fadeAnimation: {
    type: Boolean,
    default: undefined,
  },
  markerZoomAnimation: {
    type: Boolean,
    default: undefined,
  },
  noBlockingAnimations: {
    type: Boolean,
    default: undefined,
  },
} as const;

export const mapPropSetters = {
  bounds: {
    setter(leafletObject: L.Map, bounds: L.LatLngBoundsExpression | undefined) {
      if(bounds) leafletObject.fitBounds(bounds);
    }
  },
} as const;

export const layerProps = {
  options: {
    type: Object,
    default: () => ({}),
    custom: true,
  },
  pane: {
    type: String,
  },
  attribution: {
    type: String,
  },
  popupText: {
    type: [String, Number, Object]  as PropType<string | number | (() => string | number)>,
    custom: true,
  }
} as const;

export const layerPropSetters = {
  popupText: {
    setter(leafletObject: L.Layer, popupText: string | number | (() => string | number)) {
      if(popupText) {
        let _popupText = popupText;
        if(popupText instanceof Function) {
          _popupText = popupText();
        } else {
          _popupText = String(popupText);
        }
        leafletObject.bindPopup(_popupText as string);
      } else {
        leafletObject.unbindPopup();
      }
    },
    setterOptions: {
      immediate: true,
    }
  }
} as const;

export const gridLayerProps = {
  ...layerProps,
  opacity: {
    type: Number,
  },
  zIndex: {
    type: Number,
  },
  tileSize: {
    type: [Number, Array, Object] as PropType<number | L.PointExpression>,
  },
  noWrap: {
    type: Boolean,
    default: undefined,
  },
  minZoom: {
    type: Number,
  },
  maxZoom: {
    type: Number,
  },
  className: {
    type: String,
  },
} as const;

export const gridLayerPropSetters = {
  ...layerPropSetters,
} as const;

export const tileLayerProps = {
  ...gridLayerProps,
  tms: {
    type: Boolean,
    default: undefined,
  },
  subdomains: {
    type: [String, Array] as PropType<string | string[]>,
    validator: (prop: any) => {
      if (typeof prop === 'string') return true;
      if (Array.isArray(prop)) {
        return prop.every((subdomain) => typeof subdomain === 'string');
      }
      return false;
    },
  },
  detectRetina: {
    type: Boolean,
    default: undefined,
  },
  url: {
    type: String,
    required: true,
    custom: true,
  },
} as const;

export const tileLayerPropSetters = {
  ...gridLayerPropSetters
} as const;

export const interactiveLayerProps = {
  ...layerProps,
  interactive: {
    type: Boolean,
    default: undefined,
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: undefined,
  },
} as const;

export const interactiveLayerPropSetters = {
  ...layerPropSetters
} as const;

// https://leafletjs.com/reference.html#path-option
export const pathProps = {
  ...interactiveLayerProps,
  stroke: {
    type: Boolean,
    default: undefined,
  },
  color: {
    type: String,
  },
  weight: {
    type: Number,
  },
  opacity: {
    type: Number,
  },
  lineCap: {
    type: String as PropType<PathOptions['lineCap']>,
  },
  lineJoin: {
    type: String as PropType<PathOptions['lineJoin']>,
  },
  dashArray: {
    type: [String, Array] as PropType<PathOptions['dashArray']>,
  },
  dashOffset: {
    type: String,
  },
  fill: {
    type: Boolean,
    default: undefined,
  },
  fillColor: {
    type: String,
  },
  fillOpacity: {
    type: Number,
  },
  fillRule: {
    type: String as PropType<PathOptions['fillRule']>,
  },
  className: {
    type: String,
  },
} as const;

export const pathPropSetters = {
  ...interactiveLayerPropSetters,
  stroke: {
    setter(leafletObject: L.Path, stroke: PathOptions['stroke']) {
      leafletObject.setStyle({ stroke });
    },
  },
  color: {
    setter(leafletObject: L.Path, color: PathOptions['color']) {
      leafletObject.setStyle({ color });
    },
  },
  weight: {
    setter(leafletObject: L.Path, weight: PathOptions['weight']) {
      leafletObject.setStyle({ weight });
    },
  },
  opacity: {
    setter(leafletObject: L.Path, opacity: PathOptions['opacity']) {
      leafletObject.setStyle({ opacity });
    },
  },
  lineCap: {
    setter(leafletObject: L.Path, lineCap: PathOptions['lineCap']) {
      leafletObject.setStyle({ lineCap });
    },
  },
  lineJoin: {
    setter(leafletObject: L.Path, lineJoin: PathOptions['lineJoin']) {
      leafletObject.setStyle({ lineJoin });
    },
  },
  dashArray: {
    setter(leafletObject: L.Path, dashArray: PathOptions['dashArray']) {
      leafletObject.setStyle({ dashArray });
    },
  },
  dashOffset: {
    setter(leafletObject: L.Path, dashOffset: string) {
      leafletObject.setStyle({ dashOffset });
    },
  },
  fill: {
    setter(leafletObject: L.Path, fill: boolean) {
      leafletObject.setStyle({ fill });
    },
  },
  fillColor: {
    setter(leafletObject: L.Path, fillColor: string) {
      leafletObject.setStyle({ fillColor });
    },
  },
  fillOpacity: {
    setter(leafletObject: L.Path, fillOpacity: number) {
      leafletObject.setStyle({ fillOpacity });
    },
  },
  fillRule: {
    setter(leafletObject: L.Path, fillRule: PathOptions['fillRule']) {
      leafletObject.setStyle({ fillRule });
    },
  },
  className: {
    setter(leafletObject: L.Path, className: string) {
      leafletObject.setStyle({ className });
    },
  },
} as const;


export const markerProps = {
  ...layerProps,
  draggable: {
    type: Boolean,
    default: undefined,
  },
  icon: {
    type: [Object] as PropType<L.Icon | L.Icon<L.BaseIconOptions>>,
  },
  zIndexOffset: {
    type: Number,
  },
  latLng: {
    type: [Object, Array] as PropType<L.LatLngExpression>,
    custom: true,
    required: true,
  },
} as const;

export const markerPropsSetters = {
  ...layerPropSetters,
  latLng: {
    setter(leafletObject: L.Marker, latLng: L.LatLng) {
      if(!latLng) return;
      const oldLatLng = leafletObject.getLatLng();
      if (!oldLatLng || !oldLatLng.equals(latLng)) {
        leafletObject.setLatLng(latLng);
      }
    },
  },
  draggable: {
    setter(leafletObject: L.Marker, draggable: boolean) {
      if (leafletObject.dragging) {
        draggable ? leafletObject.dragging.enable() : leafletObject.dragging.disable();
      }
    }
  },
} as const;

export const polylineProps = {
  ...pathProps,
  smoothFactor: {
    type: Number as PropType<number>,
  },
  noClip: {
    type: Boolean,
    default: undefined,
  },
  latLngs: {
    type: Array as PropType<L.LatLngExpression[]>,
    required: true,
    custom: true,
  },
} as const;

export const polylinePropSetters = {
  ...pathPropSetters,
  noClip: {
    setter(leafletObject: L.Polygon, noClip: L.PolylineOptions['noClip']) {
      leafletObject.setStyle({ noClip } as any);
    },
  },
  latLngs: {
    setter(leafletObject: L.Polyline, latLngs: L.LatLngExpression[]) {
      leafletObject.setLatLngs(latLngs);
    },
  },
} as const;

export const polygonProps = {
  ...polylineProps,
} as const;

export const polygonPropSetters = {
  ...polylinePropSetters,
} as const;

export const controlProps = {
  options: {
    type: Object,
    default: () => ({}),
    custom: true,
  },
  position: {
    type: String as PropType<L.ControlPosition>,
    setter(leafletObject: L.Control, position: L.ControlPosition) {
      leafletObject.setPosition(position);
    },
  },
  disableClickPropagation: {
    type: Boolean,
    custom: true,
    default: true,
  },
  disableScrollPropagation: {
    type: Boolean,
    custom: true,
    default: false,
  },
} as const;

export const controlPropSetters = {
  position: {
    setter(leafletObject: L.Control, position: L.ControlPosition) {
      leafletObject.setPosition(position);
    },
  },
} as const;

export const rectangleProps = {
  ...polylineProps,
  latLngs: {
    ...polylineProps.latLngs,
    required: false,
  },
  bounds: {
    type: Object as PropType<L.LatLngBoundsExpression>,
    required: true,
  },
} as const;

export const rectanglePropSetters = {
  ...polylinePropSetters,
} as const;

export const circleMarkerProps = {
  ...pathProps,
  radius: {
    type: Number as PropType<number>,
  },
  latLng: {
    type: [Object, Array] as PropType<L.LatLngExpression>,
    required: true,
    custom: true,
  },
} as const;

export const circleMarkerPropSetters = {
  ...pathPropSetters,
  latLng: {
    setter(leafletObject: L.CircleMarker, latLng: L.LatLng) {
      if(!latLng) return;
      const oldLatLng = leafletObject.getLatLng();
      if (!oldLatLng || !oldLatLng.equals(latLng)) {
        leafletObject.setLatLng(latLng);
      }
    },
  },
};

