export {};

declare global {
  interface Window {
    paypal: typeof import("@paypal/paypal-js")["paypal"];
  }
}