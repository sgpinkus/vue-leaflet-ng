import L from 'leaflet';
declare const _default: import("vue").DefineComponent<{
    readonly radius: {
        readonly type: import("vue").PropType<number>;
    };
    readonly latLng: {
        readonly type: import("vue").PropType<L.LatLngExpression>;
        readonly required: true;
        readonly custom: true;
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
        readonly type: import("vue").PropType<L.LineCapShape | undefined>;
    };
    readonly lineJoin: {
        readonly type: import("vue").PropType<L.LineJoinShape | undefined>;
    };
    readonly dashArray: {
        readonly type: import("vue").PropType<string | number[] | undefined>;
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
        readonly type: import("vue").PropType<L.FillRule | undefined>;
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
        readonly type: import("vue").PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
}, {
    mapRef: import("vue").Ref<unknown>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly radius: {
        readonly type: import("vue").PropType<number>;
    };
    readonly latLng: {
        readonly type: import("vue").PropType<L.LatLngExpression>;
        readonly required: true;
        readonly custom: true;
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
        readonly type: import("vue").PropType<L.LineCapShape | undefined>;
    };
    readonly lineJoin: {
        readonly type: import("vue").PropType<L.LineJoinShape | undefined>;
    };
    readonly dashArray: {
        readonly type: import("vue").PropType<string | number[] | undefined>;
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
        readonly type: import("vue").PropType<L.FillRule | undefined>;
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
        readonly type: import("vue").PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
}>>, {
    readonly stroke: boolean;
    readonly fill: boolean;
    readonly interactive: boolean;
    readonly bubblingMouseEvents: boolean;
    readonly options: Record<string, any>;
}, {}>;
export default _default;
