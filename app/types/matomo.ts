// types/matomo.d.ts
export {};

declare global {
  interface Window {
    _paq: Array<any>;
    _mtm?: Array<any>;
  }
}
