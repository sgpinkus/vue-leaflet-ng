import L from 'leaflet';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly smoothFactor: {
        readonly type: import("vue").PropType<number>;
    };
    readonly noClip: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly latLngs: {
        readonly type: import("vue").PropType<L.LatLngExpression[]>;
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
        readonly type: import("vue").PropType<L.PathOptions["lineCap"]>;
    };
    readonly lineJoin: {
        readonly type: import("vue").PropType<L.PathOptions["lineJoin"]>;
    };
    readonly dashArray: {
        readonly type: import("vue").PropType<L.PathOptions["dashArray"]>;
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
        readonly type: import("vue").PropType<L.PathOptions["fillRule"]>;
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
}>, {
    mapRef: import("vue").Ref<unknown, unknown>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly smoothFactor: {
        readonly type: import("vue").PropType<number>;
    };
    readonly noClip: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly latLngs: {
        readonly type: import("vue").PropType<L.LatLngExpression[]>;
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
        readonly type: import("vue").PropType<L.PathOptions["lineCap"]>;
    };
    readonly lineJoin: {
        readonly type: import("vue").PropType<L.PathOptions["lineJoin"]>;
    };
    readonly dashArray: {
        readonly type: import("vue").PropType<L.PathOptions["dashArray"]>;
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
        readonly type: import("vue").PropType<L.PathOptions["fillRule"]>;
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
}>> & Readonly<{}>, {
    readonly stroke: boolean;
    readonly noClip: boolean;
    readonly fill: boolean;
    readonly interactive: boolean;
    readonly bubblingMouseEvents: boolean;
    readonly options: Record<string, any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
