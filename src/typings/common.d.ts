declare namespace NCommon {
  type PickValueType<T extends object, K extends keyof T> = T[K]
}
