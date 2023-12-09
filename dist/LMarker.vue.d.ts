import L from 'leaflet';
declare const _default: import("vue").DefineComponent<{
    readonly draggable: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly icon: {
        readonly type: import("vue").PropType<L.Icon<L.IconOptions> | L.Icon<L.BaseIconOptions>>;
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
}, {
    mapRef: import("vue").Ref<unknown>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly draggable: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly icon: {
        readonly type: import("vue").PropType<L.Icon<L.IconOptions> | L.Icon<L.BaseIconOptions>>;
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
}>>, {
    readonly options: Record<string, any>;
    readonly draggable: boolean;
}, {}>;
export default _default;
