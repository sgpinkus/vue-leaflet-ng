import L from 'leaflet';
declare const _default: import("vue").DefineComponent<{
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
}, {
    root: import("vue").Ref<HTMLInputElement | undefined>;
    mapRef: import("vue").Ref<unknown>;
}, Record<any, any>, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    readonly options: Record<string, any>;
    readonly disableClickPropagation: boolean;
    readonly disableScrollPropagation: boolean;
}, {}>;
export default _default;
