import L from 'leaflet';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly center: {
        readonly type: import("vue").PropType<L.LatLngExpression>;
    };
    readonly bounds: {
        readonly type: import("vue").PropType<L.LatLngBoundsExpression>;
    };
    readonly maxBounds: {
        readonly type: import("vue").PropType<L.LatLngBoundsExpression>;
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
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly paddingTopLeft: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly padding: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly worldCopyJump: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly crs: {
        readonly type: import("vue").PropType<L.CRS>;
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
}>, void, Record<any, any>, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly center: {
        readonly type: import("vue").PropType<L.LatLngExpression>;
    };
    readonly bounds: {
        readonly type: import("vue").PropType<L.LatLngBoundsExpression>;
    };
    readonly maxBounds: {
        readonly type: import("vue").PropType<L.LatLngBoundsExpression>;
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
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly paddingTopLeft: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly padding: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly worldCopyJump: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly crs: {
        readonly type: import("vue").PropType<L.CRS>;
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
}>> & Readonly<{}>, {
    readonly worldCopyJump: boolean;
    readonly inertia: boolean;
    readonly zoomAnimation: boolean;
    readonly fadeAnimation: boolean;
    readonly markerZoomAnimation: boolean;
    readonly noBlockingAnimations: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
