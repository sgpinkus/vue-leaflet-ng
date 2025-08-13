import L from 'leaflet';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly draggable: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly icon: {
        readonly type: import("vue").PropType<L.Icon | L.Icon<L.BaseIconOptions>>;
    };
    readonly zIndexOffset: {
        readonly type: NumberConstructor;
    };
    readonly latLng: {
        readonly type: import("vue").PropType<L.LatLngExpression>;
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
        readonly type: import("vue").PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
}>, {
    mapRef: import("vue").Ref<unknown, unknown>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly draggable: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly icon: {
        readonly type: import("vue").PropType<L.Icon | L.Icon<L.BaseIconOptions>>;
    };
    readonly zIndexOffset: {
        readonly type: NumberConstructor;
    };
    readonly latLng: {
        readonly type: import("vue").PropType<L.LatLngExpression>;
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
        readonly type: import("vue").PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
}>> & Readonly<{}>, {
    readonly options: Record<string, any>;
    readonly draggable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
