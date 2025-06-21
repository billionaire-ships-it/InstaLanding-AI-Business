export {};

declare global {
  interface Window {
    paypal: any; // Or use PayPal namespace if typed
  }
}
