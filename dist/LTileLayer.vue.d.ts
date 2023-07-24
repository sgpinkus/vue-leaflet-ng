import L from 'leaflet';
declare const _default: import("vue").DefineComponent<{
    readonly tms: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly subdomains: {
        readonly type: import("vue").PropType<string | string[]>;
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
        readonly type: import("vue").PropType<number | L.PointExpression>;
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
        readonly type: import("vue").PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
}, {
    mapRef: import("vue").Ref<unknown>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly tms: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly subdomains: {
        readonly type: import("vue").PropType<string | string[]>;
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
        readonly type: import("vue").PropType<number | L.PointExpression>;
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
        readonly type: import("vue").PropType<string | number | (() => string | number)>;
        readonly custom: true;
    };
}>>, {
    readonly options: Record<string, any>;
    readonly tms: boolean;
    readonly detectRetina: boolean;
    readonly noWrap: boolean;
}, {}>;
export default _default;
