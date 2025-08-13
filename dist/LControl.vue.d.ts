import L from 'leaflet';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
    readonly position: {
        readonly type: import("vue").PropType<L.ControlPosition>;
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
}>, {
    root: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    mapRef: import("vue").Ref<unknown, unknown>;
}, Record<any, any>, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
    readonly position: {
        readonly type: import("vue").PropType<L.ControlPosition>;
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
}>> & Readonly<{}>, {
    readonly options: Record<string, any>;
    readonly disableClickPropagation: boolean;
    readonly disableScrollPropagation: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
