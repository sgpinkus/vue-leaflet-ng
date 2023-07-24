/**
 * Definition of props that largely map to Leaflet object options, and custome "setters"
 * That are used to map changes to props to leaflet object methods.
 * Note props and setters can't be in the same data strucutre unfortunately because it breaks Component.props typings.
 */
import type { PropType } from 'vue';
import type L from 'leaflet';
import type { PathOptions } from 'leaflet';
export * from './utils';
export declare const mapProps: {
    readonly center: {
        readonly type: PropType<L.LatLngExpression>;
    };
    readonly bounds: {
        readonly type: PropType<L.LatLngBoundsExpression>;
    };
    readonly maxBounds: {
        readonly type: PropType<L.LatLngBoundsExpression>;
    };
    readonly zoom: {
        readonly type: NumberConstructor;
    };
    readonly minZoom: {
        readonly type: NumberConstructor;
    };
    readonly maxZoom: {
        readonly type: NumberConstructor;
    };
    readonly paddingBottomRight: {
        readonly type: PropType<L.PointExpression>;
    };
    readonly paddingTopLeft: {
        readonly type: PropType<L.PointExpression>;
    };
    readonly padding: {
        readonly type: PropType<L.PointExpression>;
    };
    readonly worldCopyJump: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly crs: {
        readonly type: PropType<L.CRS>;
    };
    readonly maxBoundsViscosity: {
        readonly type: NumberConstructor;
    };
    readonly inertia: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly inertiaDeceleration: {
        readonly type: NumberConstructor;
    };
    readonly inertiaMaxSpeed: {
        readonly type: NumberConstructor;
    };
    readonly easeLinearity: {
        readonly type: NumberConstructor;
    };
    readonly zoomAnimation: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly zoomAnimationThreshold: {
        readonly type: NumberConstructor;
    };
    readonly fadeAnimation: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly markerZoomAnimation: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly noBlockingAnimations: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
};
export declare const mapPropSetters: {
    readonly bounds: {
        readonly setter: (leafletObject: L.Map, bounds: L.LatLngBoundsExpression | undefined) => void;
    };
};
export declare const layerProps: {
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
    readonly pane: {
        readonly type: StringConstructor;
    };
    readonly attribution: {
        readonly type: StringConstructor;
    };
    readonly popupText: {
        readonly type: PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
};
export declare const layerPropSetters: {
    readonly popupText: {
        readonly setter: (leafletObject: L.Layer, popupText: string | number | (() => string | number)) => void;
        readonly setterOptions: {
            readonly immediate: true;
        };
    };
};
export declare const gridLayerProps: {
    readonly opacity: {
        readonly type: NumberConstructor;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
    };
    readonly tileSize: {
        readonly type: PropType<number | L.PointExpression>;
    };
    readonly noWrap: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly minZoom: {
        readonly type: NumberConstructor;
    };
    readonly maxZoom: {
        readonly type: NumberConstructor;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
    readonly pane: {
        readonly type: StringConstructor;
    };
    readonly attribution: {
        readonly type: StringConstructor;
    };
    readonly popupText: {
        readonly type: PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
};
export declare const gridLayerPropSetters: {
    readonly popupText: {
        readonly setter: (leafletObject: L.Layer, popupText: string | number | (() => string | number)) => void;
        readonly setterOptions: {
            readonly immediate: true;
        };
    };
};
export declare const tileLayerProps: {
    readonly tms: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly subdomains: {
        readonly type: PropType<string | string[]>;
        readonly validator: (prop: any) => boolean;
    };
    readonly detectRetina: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly url: {
        readonly type: StringConstructor;
        readonly required: true;
        readonly custom: true;
    };
    readonly opacity: {
        readonly type: NumberConstructor;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
    };
    readonly tileSize: {
        readonly type: PropType<number | L.PointExpression>;
    };
    readonly noWrap: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly minZoom: {
        readonly type: NumberConstructor;
    };
    readonly maxZoom: {
        readonly type: NumberConstructor;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
    readonly pane: {
        readonly type: StringConstructor;
    };
    readonly attribution: {
        readonly type: StringConstructor;
    };
    readonly popupText: {
        readonly type: PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
};
export declare const tileLayerPropSetters: {
    readonly popupText: {
        readonly setter: (leafletObject: L.Layer, popupText: string | number | (() => string | number)) => void;
        readonly setterOptions: {
            readonly immediate: true;
        };
    };
};
export declare const interactiveLayerProps: {
    readonly interactive: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly bubblingMouseEvents: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
    readonly pane: {
        readonly type: StringConstructor;
    };
    readonly attribution: {
        readonly type: StringConstructor;
    };
    readonly popupText: {
        readonly type: PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
};
export declare const interactiveLayerPropSetters: {
    readonly popupText: {
        readonly setter: (leafletObject: L.Layer, popupText: string | number | (() => string | number)) => void;
        readonly setterOptions: {
            readonly immediate: true;
        };
    };
};
export declare const pathProps: {
    readonly stroke: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly color: {
        readonly type: StringConstructor;
    };
    readonly weight: {
        readonly type: NumberConstructor;
    };
    readonly opacity: {
        readonly type: NumberConstructor;
    };
    readonly lineCap: {
        readonly type: PropType<L.LineCapShape | undefined>;
    };
    readonly lineJoin: {
        readonly type: PropType<L.LineJoinShape | undefined>;
    };
    readonly dashArray: {
        readonly type: PropType<string | number[] | undefined>;
    };
    readonly dashOffset: {
        readonly type: StringConstructor;
    };
    readonly fill: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly fillColor: {
        readonly type: StringConstructor;
    };
    readonly fillOpacity: {
        readonly type: NumberConstructor;
    };
    readonly fillRule: {
        readonly type: PropType<L.FillRule | undefined>;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly interactive: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly bubblingMouseEvents: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
    readonly pane: {
        readonly type: StringConstructor;
    };
    readonly attribution: {
        readonly type: StringConstructor;
    };
    readonly popupText: {
        readonly type: PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
};
export declare const pathPropSetters: {
    readonly stroke: {
        readonly setter: (leafletObject: L.Path, stroke: PathOptions['stroke']) => void;
    };
    readonly color: {
        readonly setter: (leafletObject: L.Path, color: PathOptions['color']) => void;
    };
    readonly weight: {
        readonly setter: (leafletObject: L.Path, weight: PathOptions['weight']) => void;
    };
    readonly opacity: {
        readonly setter: (leafletObject: L.Path, opacity: PathOptions['opacity']) => void;
    };
    readonly lineCap: {
        readonly setter: (leafletObject: L.Path, lineCap: PathOptions['lineCap']) => void;
    };
    readonly lineJoin: {
        readonly setter: (leafletObject: L.Path, lineJoin: PathOptions['lineJoin']) => void;
    };
    readonly dashArray: {
        readonly setter: (leafletObject: L.Path, dashArray: PathOptions['dashArray']) => void;
    };
    readonly dashOffset: {
        readonly setter: (leafletObject: L.Path, dashOffset: string) => void;
    };
    readonly fill: {
        readonly setter: (leafletObject: L.Path, fill: boolean) => void;
    };
    readonly fillColor: {
        readonly setter: (leafletObject: L.Path, fillColor: string) => void;
    };
    readonly fillOpacity: {
        readonly setter: (leafletObject: L.Path, fillOpacity: number) => void;
    };
    readonly fillRule: {
        readonly setter: (leafletObject: L.Path, fillRule: PathOptions['fillRule']) => void;
    };
    readonly className: {
        readonly setter: (leafletObject: L.Path, className: string) => void;
    };
    readonly popupText: {
        readonly setter: (leafletObject: L.Layer, popupText: string | number | (() => string | number)) => void;
        readonly setterOptions: {
            readonly immediate: true;
        };
    };
};
export declare const markerProps: {
    readonly draggable: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
        readonly setter: (leafletObject: L.Marker, draggable: boolean) => void;
    };
    readonly icon: {
        readonly type: PropType<L.Icon<L.IconOptions> | L.Icon<L.BaseIconOptions>>;
    };
    readonly zIndexOffset: {
        readonly type: NumberConstructor;
    };
    readonly latLng: {
        readonly type: PropType<L.LatLngExpression>;
        readonly custom: true;
        readonly required: true;
    };
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
    readonly pane: {
        readonly type: StringConstructor;
    };
    readonly attribution: {
        readonly type: StringConstructor;
    };
    readonly popupText: {
        readonly type: PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
};
export declare const markerPropsSetters: {
    readonly latLng: {
        readonly setter: (leafletObject: L.Marker, latLng: L.LatLng) => void;
    };
    readonly popupText: {
        readonly setter: (leafletObject: L.Layer, popupText: string | number | (() => string | number)) => void;
        readonly setterOptions: {
            readonly immediate: true;
        };
    };
};
export declare const polylineProps: {
    readonly smoothFactor: {
        readonly type: PropType<number>;
    };
    readonly noClip: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
        readonly setter: (leafletObject: L.Polygon, noClip: L.PolylineOptions['noClip']) => void;
    };
    readonly latLngs: {
        readonly type: PropType<L.LatLngExpression[]>;
        readonly required: true;
        readonly custom: true;
        readonly setter: (leafletObject: L.Polyline, latLngs: L.LatLngExpression[]) => void;
    };
    readonly stroke: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly color: {
        readonly type: StringConstructor;
    };
    readonly weight: {
        readonly type: NumberConstructor;
    };
    readonly opacity: {
        readonly type: NumberConstructor;
    };
    readonly lineCap: {
        readonly type: PropType<L.LineCapShape | undefined>;
    };
    readonly lineJoin: {
        readonly type: PropType<L.LineJoinShape | undefined>;
    };
    readonly dashArray: {
        readonly type: PropType<string | number[] | undefined>;
    };
    readonly dashOffset: {
        readonly type: StringConstructor;
    };
    readonly fill: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly fillColor: {
        readonly type: StringConstructor;
    };
    readonly fillOpacity: {
        readonly type: NumberConstructor;
    };
    readonly fillRule: {
        readonly type: PropType<L.FillRule | undefined>;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly interactive: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly bubblingMouseEvents: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
    readonly pane: {
        readonly type: StringConstructor;
    };
    readonly attribution: {
        readonly type: StringConstructor;
    };
    readonly popupText: {
        readonly type: PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
};
export declare const polylinePropSetters: {
    readonly noClip: {
        readonly setter: (leafletObject: L.Polygon, noClip: L.PolylineOptions['noClip']) => void;
    };
    readonly latLngs: {
        readonly setter: (leafletObject: L.Polyline, latLngs: L.LatLngExpression[]) => void;
    };
    readonly stroke: {
        readonly setter: (leafletObject: L.Path, stroke: PathOptions['stroke']) => void;
    };
    readonly color: {
        readonly setter: (leafletObject: L.Path, color: PathOptions['color']) => void;
    };
    readonly weight: {
        readonly setter: (leafletObject: L.Path, weight: PathOptions['weight']) => void;
    };
    readonly opacity: {
        readonly setter: (leafletObject: L.Path, opacity: PathOptions['opacity']) => void;
    };
    readonly lineCap: {
        readonly setter: (leafletObject: L.Path, lineCap: PathOptions['lineCap']) => void;
    };
    readonly lineJoin: {
        readonly setter: (leafletObject: L.Path, lineJoin: PathOptions['lineJoin']) => void;
    };
    readonly dashArray: {
        readonly setter: (leafletObject: L.Path, dashArray: PathOptions['dashArray']) => void;
    };
    readonly dashOffset: {
        readonly setter: (leafletObject: L.Path, dashOffset: string) => void;
    };
    readonly fill: {
        readonly setter: (leafletObject: L.Path, fill: boolean) => void;
    };
    readonly fillColor: {
        readonly setter: (leafletObject: L.Path, fillColor: string) => void;
    };
    readonly fillOpacity: {
        readonly setter: (leafletObject: L.Path, fillOpacity: number) => void;
    };
    readonly fillRule: {
        readonly setter: (leafletObject: L.Path, fillRule: PathOptions['fillRule']) => void;
    };
    readonly className: {
        readonly setter: (leafletObject: L.Path, className: string) => void;
    };
    readonly popupText: {
        readonly setter: (leafletObject: L.Layer, popupText: string | number | (() => string | number)) => void;
        readonly setterOptions: {
            readonly immediate: true;
        };
    };
};
export declare const polygonProps: {
    readonly smoothFactor: {
        readonly type: PropType<number>;
    };
    readonly noClip: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
        readonly setter: (leafletObject: L.Polygon, noClip: L.PolylineOptions['noClip']) => void;
    };
    readonly latLngs: {
        readonly type: PropType<L.LatLngExpression[]>;
        readonly required: true;
        readonly custom: true;
        readonly setter: (leafletObject: L.Polyline, latLngs: L.LatLngExpression[]) => void;
    };
    readonly stroke: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly color: {
        readonly type: StringConstructor;
    };
    readonly weight: {
        readonly type: NumberConstructor;
    };
    readonly opacity: {
        readonly type: NumberConstructor;
    };
    readonly lineCap: {
        readonly type: PropType<L.LineCapShape | undefined>;
    };
    readonly lineJoin: {
        readonly type: PropType<L.LineJoinShape | undefined>;
    };
    readonly dashArray: {
        readonly type: PropType<string | number[] | undefined>;
    };
    readonly dashOffset: {
        readonly type: StringConstructor;
    };
    readonly fill: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly fillColor: {
        readonly type: StringConstructor;
    };
    readonly fillOpacity: {
        readonly type: NumberConstructor;
    };
    readonly fillRule: {
        readonly type: PropType<L.FillRule | undefined>;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly interactive: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly bubblingMouseEvents: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
    readonly pane: {
        readonly type: StringConstructor;
    };
    readonly attribution: {
        readonly type: StringConstructor;
    };
    readonly popupText: {
        readonly type: PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
};
export declare const polygonPropSetters: {
    readonly noClip: {
        readonly setter: (leafletObject: L.Polygon, noClip: L.PolylineOptions['noClip']) => void;
    };
    readonly latLngs: {
        readonly setter: (leafletObject: L.Polyline, latLngs: L.LatLngExpression[]) => void;
    };
    readonly stroke: {
        readonly setter: (leafletObject: L.Path, stroke: PathOptions['stroke']) => void;
    };
    readonly color: {
        readonly setter: (leafletObject: L.Path, color: PathOptions['color']) => void;
    };
    readonly weight: {
        readonly setter: (leafletObject: L.Path, weight: PathOptions['weight']) => void;
    };
    readonly opacity: {
        readonly setter: (leafletObject: L.Path, opacity: PathOptions['opacity']) => void;
    };
    readonly lineCap: {
        readonly setter: (leafletObject: L.Path, lineCap: PathOptions['lineCap']) => void;
    };
    readonly lineJoin: {
        readonly setter: (leafletObject: L.Path, lineJoin: PathOptions['lineJoin']) => void;
    };
    readonly dashArray: {
        readonly setter: (leafletObject: L.Path, dashArray: PathOptions['dashArray']) => void;
    };
    readonly dashOffset: {
        readonly setter: (leafletObject: L.Path, dashOffset: string) => void;
    };
    readonly fill: {
        readonly setter: (leafletObject: L.Path, fill: boolean) => void;
    };
    readonly fillColor: {
        readonly setter: (leafletObject: L.Path, fillColor: string) => void;
    };
    readonly fillOpacity: {
        readonly setter: (leafletObject: L.Path, fillOpacity: number) => void;
    };
    readonly fillRule: {
        readonly setter: (leafletObject: L.Path, fillRule: PathOptions['fillRule']) => void;
    };
    readonly className: {
        readonly setter: (leafletObject: L.Path, className: string) => void;
    };
    readonly popupText: {
        readonly setter: (leafletObject: L.Layer, popupText: string | number | (() => string | number)) => void;
        readonly setterOptions: {
            readonly immediate: true;
        };
    };
};
export declare const controlProps: {
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
    readonly position: {
        readonly type: PropType<L.ControlPosition>;
        readonly setter: (leafletObject: L.Control, position: L.ControlPosition) => void;
    };
    readonly disableClickPropagation: {
        readonly type: BooleanConstructor;
        readonly custom: true;
        readonly default: true;
    };
    readonly disableScrollPropagation: {
        readonly type: BooleanConstructor;
        readonly custom: true;
        readonly default: false;
    };
};
export declare const controlPropSetters: {
    readonly position: {
        readonly setter: (leafletObject: L.Control, position: L.ControlPosition) => void;
    };
};
export declare const rectangleProps: {
    readonly latLngs: {
        readonly required: false;
        readonly type: PropType<L.LatLngExpression[]>;
        readonly custom: true;
        readonly setter: (leafletObject: L.Polyline, latLngs: L.LatLngExpression[]) => void;
    };
    readonly bounds: {
        readonly type: PropType<L.LatLngBoundsExpression>;
        readonly required: true;
    };
    readonly smoothFactor: {
        readonly type: PropType<number>;
    };
    readonly noClip: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
        readonly setter: (leafletObject: L.Polygon, noClip: L.PolylineOptions['noClip']) => void;
    };
    readonly stroke: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly color: {
        readonly type: StringConstructor;
    };
    readonly weight: {
        readonly type: NumberConstructor;
    };
    readonly opacity: {
        readonly type: NumberConstructor;
    };
    readonly lineCap: {
        readonly type: PropType<L.LineCapShape | undefined>;
    };
    readonly lineJoin: {
        readonly type: PropType<L.LineJoinShape | undefined>;
    };
    readonly dashArray: {
        readonly type: PropType<string | number[] | undefined>;
    };
    readonly dashOffset: {
        readonly type: StringConstructor;
    };
    readonly fill: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly fillColor: {
        readonly type: StringConstructor;
    };
    readonly fillOpacity: {
        readonly type: NumberConstructor;
    };
    readonly fillRule: {
        readonly type: PropType<L.FillRule | undefined>;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly interactive: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly bubblingMouseEvents: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
    readonly pane: {
        readonly type: StringConstructor;
    };
    readonly attribution: {
        readonly type: StringConstructor;
    };
    readonly popupText: {
        readonly type: PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
};
export declare const rectanglePropSetters: {
    readonly noClip: {
        readonly setter: (leafletObject: L.Polygon, noClip: L.PolylineOptions['noClip']) => void;
    };
    readonly latLngs: {
        readonly setter: (leafletObject: L.Polyline, latLngs: L.LatLngExpression[]) => void;
    };
    readonly stroke: {
        readonly setter: (leafletObject: L.Path, stroke: PathOptions['stroke']) => void;
    };
    readonly color: {
        readonly setter: (leafletObject: L.Path, color: PathOptions['color']) => void;
    };
    readonly weight: {
        readonly setter: (leafletObject: L.Path, weight: PathOptions['weight']) => void;
    };
    readonly opacity: {
        readonly setter: (leafletObject: L.Path, opacity: PathOptions['opacity']) => void;
    };
    readonly lineCap: {
        readonly setter: (leafletObject: L.Path, lineCap: PathOptions['lineCap']) => void;
    };
    readonly lineJoin: {
        readonly setter: (leafletObject: L.Path, lineJoin: PathOptions['lineJoin']) => void;
    };
    readonly dashArray: {
        readonly setter: (leafletObject: L.Path, dashArray: PathOptions['dashArray']) => void;
    };
    readonly dashOffset: {
        readonly setter: (leafletObject: L.Path, dashOffset: string) => void;
    };
    readonly fill: {
        readonly setter: (leafletObject: L.Path, fill: boolean) => void;
    };
    readonly fillColor: {
        readonly setter: (leafletObject: L.Path, fillColor: string) => void;
    };
    readonly fillOpacity: {
        readonly setter: (leafletObject: L.Path, fillOpacity: number) => void;
    };
    readonly fillRule: {
        readonly setter: (leafletObject: L.Path, fillRule: PathOptions['fillRule']) => void;
    };
    readonly className: {
        readonly setter: (leafletObject: L.Path, className: string) => void;
    };
    readonly popupText: {
        readonly setter: (leafletObject: L.Layer, popupText: string | number | (() => string | number)) => void;
        readonly setterOptions: {
            readonly immediate: true;
        };
    };
};
