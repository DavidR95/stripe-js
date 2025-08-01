import {StripeElementBase} from './base';
import {StripeError} from '../stripe';
import {ApplePayOption, ApplePayUpdateOption} from './apple-pay';

export type StripeExpressCheckoutElement = StripeElementBase & {
  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: StripeExpressCheckoutElementReadyEvent) => any
  ): StripeExpressCheckoutElement;
  once(
    eventType: 'ready',
    handler: (event: StripeExpressCheckoutElementReadyEvent) => any
  ): StripeExpressCheckoutElement;
  off(
    eventType: 'ready',
    handler?: (event: StripeExpressCheckoutElementReadyEvent) => any
  ): StripeExpressCheckoutElement;

  /**
   * Triggered when a button on the element is clicked.
   */
  on(
    eventType: 'click',
    handler: (event: StripeExpressCheckoutElementClickEvent) => any
  ): StripeExpressCheckoutElement;
  once(
    eventType: 'click',
    handler: (event: StripeExpressCheckoutElementClickEvent) => any
  ): StripeExpressCheckoutElement;
  off(
    eventType: 'click',
    handler?: (event: StripeExpressCheckoutElementClickEvent) => any
  ): StripeExpressCheckoutElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'expressCheckout'}) => any
  ): StripeExpressCheckoutElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'expressCheckout'}) => any
  ): StripeExpressCheckoutElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'expressCheckout'}) => any
  ): StripeExpressCheckoutElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'expressCheckout'}) => any
  ): StripeExpressCheckoutElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'expressCheckout'}) => any
  ): StripeExpressCheckoutElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'expressCheckout'}) => any
  ): StripeExpressCheckoutElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'expressCheckout'}) => any
  ): StripeExpressCheckoutElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'expressCheckout'}) => any
  ): StripeExpressCheckoutElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'expressCheckout'}) => any
  ): StripeExpressCheckoutElement;

  /**
   * Triggered when the element fails to load.
   */
  on(
    eventType: 'loaderror',
    handler: (event: {
      elementType: 'expressCheckout';
      error: StripeError;
    }) => any
  ): StripeExpressCheckoutElement;
  once(
    eventType: 'loaderror',
    handler: (event: {
      elementType: 'expressCheckout';
      error: StripeError;
    }) => any
  ): StripeExpressCheckoutElement;
  off(
    eventType: 'loaderror',
    handler?: (event: {
      elementType: 'expressCheckout';
      error: StripeError;
    }) => any
  ): StripeExpressCheckoutElement;

  /**
   * Triggered when a buyer authorizes a payment within a supported payment method.
   */
  on(
    eventType: 'confirm',
    handler: (event: StripeExpressCheckoutElementConfirmEvent) => any
  ): StripeExpressCheckoutElement;
  once(
    eventType: 'confirm',
    handler: (event: StripeExpressCheckoutElementConfirmEvent) => any
  ): StripeExpressCheckoutElement;
  off(
    eventType: 'confirm',
    handler?: (event: StripeExpressCheckoutElementConfirmEvent) => any
  ): StripeExpressCheckoutElement;

  /**
   * Triggered when a payment interface is dismissed (e.g., a buyer closes the payment interface)
   */
  on(
    eventType: 'cancel',
    handler: (event: {elementType: 'expressCheckout'}) => any
  ): StripeExpressCheckoutElement;
  once(
    eventType: 'cancel',
    handler: (event: {elementType: 'expressCheckout'}) => any
  ): StripeExpressCheckoutElement;
  off(
    eventType: 'cancel',
    handler?: (event: {elementType: 'expressCheckout'}) => any
  ): StripeExpressCheckoutElement;

  /**
   * Triggered when a buyer selects a different shipping address.
   */
  on(
    eventType: 'shippingaddresschange',
    handler: (
      event: StripeExpressCheckoutElementShippingAddressChangeEvent
    ) => any
  ): StripeExpressCheckoutElement;
  once(
    eventType: 'shippingaddresschange',
    handler: (
      event: StripeExpressCheckoutElementShippingAddressChangeEvent
    ) => any
  ): StripeExpressCheckoutElement;
  off(
    eventType: 'shippingaddresschange',
    handler?: (
      event: StripeExpressCheckoutElementShippingAddressChangeEvent
    ) => any
  ): StripeExpressCheckoutElement;

  /**
   * Triggered when a buyer selects a different shipping rate.
   */
  on(
    eventType: 'shippingratechange',
    handler: (event: StripeExpressCheckoutElementShippingRateChangeEvent) => any
  ): StripeExpressCheckoutElement;
  once(
    eventType: 'shippingratechange',
    handler: (event: StripeExpressCheckoutElementShippingRateChangeEvent) => any
  ): StripeExpressCheckoutElement;
  off(
    eventType: 'shippingratechange',
    handler?: (
      event: StripeExpressCheckoutElementShippingRateChangeEvent
    ) => any
  ): StripeExpressCheckoutElement;

  /**
   * Updates the options the `ExpressCheckoutElement` was initialized with.
   * Updates are merged into the existing configuration.
   */
  update(
    options: StripeExpressCheckoutElementUpdateOptions
  ): StripeExpressCheckoutElement;
};

export type ExpressPaymentType =
  | 'google_pay'
  | 'apple_pay'
  | 'amazon_pay'
  | 'link'
  | 'paypal'
  | 'klarna';

export type ExpressCheckoutPartialAddress = {
  city: string;
  state: string;
  postal_code: string;
  country: string;
};

export type ExpressCheckoutAddress = ExpressCheckoutPartialAddress & {
  line1: string;
  line2: string | null;
};

export type BillingDetails = {
  name: string;
  email?: string;
  phone?: string;
  address: ExpressCheckoutAddress;
};

export type ShippingAddress = {
  name: string;
  address: ExpressCheckoutAddress;
};

export type LineItem = {
  name: string;
  amount: number;
};

export type DeliveryUnit = 'hour' | 'day' | 'business_day' | 'week' | 'month';

export type DeliveryEstimate = {
  unit: DeliveryUnit;
  value: number;
};

export type ShippingRate = {
  id: string;
  amount: number;
  displayName: string;
  deliveryEstimate?:
    | string
    | {
        maximum?: DeliveryEstimate;
        minimum?: DeliveryEstimate;
      };
};

export type LayoutOption = {
  maxColumns?: number;
  maxRows?: number;
  overflow?: 'auto' | 'never';
};

export type ExpressCheckoutPaymentMethodOptionWithAlways =
  | 'always'
  | ExpressCheckoutPaymentMethodOption;
export type ExpressCheckoutPaymentMethodOption = 'auto' | 'never';

export type ExpressCheckoutPaymentMethodsOption = {
  amazonPay?: ExpressCheckoutPaymentMethodOption;
  applePay?: ExpressCheckoutPaymentMethodOptionWithAlways;
  googlePay?: ExpressCheckoutPaymentMethodOptionWithAlways;
  link?: ExpressCheckoutPaymentMethodOption;
  paypal?: ExpressCheckoutPaymentMethodOption;
  klarna?: ExpressCheckoutPaymentMethodOption;
};

export type ExpressCheckoutWalletsOption = {
  applePay?: ExpressCheckoutPaymentMethodOptionWithAlways;
  googlePay?: ExpressCheckoutPaymentMethodOptionWithAlways;
};

export type ApplePayButtonTheme = 'black' | 'white' | 'white-outline';

export type GooglePayButtonTheme = 'black' | 'white';

export type PayPalButtonTheme = 'gold' | 'blue' | 'silver' | 'white' | 'black';

export type ButtonThemeOption = {
  applePay?: ApplePayButtonTheme;
  googlePay?: GooglePayButtonTheme;
  paypal?: PayPalButtonTheme;
};

export type ApplePayButtonType =
  | 'add-money'
  | 'book'
  | 'buy'
  | 'check-out'
  | 'contribute'
  | 'donate'
  | 'order'
  | 'plain'
  | 'reload'
  | 'rent'
  | 'subscribe'
  | 'support'
  | 'tip'
  | 'top-up';

export type GooglePayButtonType =
  | 'book'
  | 'buy'
  | 'checkout'
  | 'donate'
  | 'order'
  | 'pay'
  | 'plain'
  | 'subscribe';

export type PayPalButtonType = 'paypal' | 'buynow' | 'checkout' | 'pay';

export type ButtonTypeOption = {
  applePay?: ApplePayButtonType;
  googlePay?: GooglePayButtonType;
  paypal?: PayPalButtonType;
};

export interface StripeExpressCheckoutElementOptions {
  /**
   * An array of two-letter ISO country codes representing which countries
   * are eligible shipping locations.
   */
  allowedShippingCountries?: string[];

  applePay?: ApplePayOption;

  /**
   * Whether the billing address should be collected in the payment interface.
   */
  billingAddressRequired?: boolean;

  /**
   * Provide information about your business that will be displayed in the payment interface.
   * This information will be retrieved from your Stripe account if not provided.
   */
  business?: {name: string};

  /**
   * Manually sets the height of the buttons shown.
   */
  buttonHeight?: number;

  /**
   * Controls the color of each button.
   */
  buttonTheme?: ButtonThemeOption;

  /**
   * Specifies the type of each button.
   */
  buttonType?: ButtonTypeOption;

  /**
   * Whether the email address should be collected in the payment interface.
   */
  emailRequired?: boolean;

  /**
   * Specifies how buttons should be laid out in relation to each other.
   */
  layout?: LayoutOption;

  lineItems?: Array<LineItem>;

  /**
   * Override the order in which payment methods are displayed in the Express Checkout Element.
   * By default, the Express Checkout Element will use a dynamic ordering that optimizes payment method display for each user.
   */
  paymentMethodOrder?: string[];

  /**
   * Control payment method display in the Express Checkout Element.
   */
  paymentMethods?: ExpressCheckoutPaymentMethodsOption;

  /**
   * Whether the phone number should be collected in the payment interface.
   */
  phoneNumberRequired?: boolean;

  /**
   * Whether the shipping address should be collected in the payment interface.
   */
  shippingAddressRequired?: boolean;

  shippingRates?: Array<ShippingRate>;

  /**
   * @deprecated
   * Use `paymentMethods` instead.
   *
   * Control wallets display in the Express Checkout Element.
   */
  wallets?: ExpressCheckoutWalletsOption;
}

/*
 * Updatable options for an `Elements` instance
 */
export interface StripeExpressCheckoutElementUpdateOptions {
  /**
   * An array of two-letter ISO country codes representing which countries
   * are eligible shipping locations.
   */
  allowedShippingCountries?: string[];

  /**
   * Whether the billing address should be collected in the payment interface.
   */
  billingAddressRequired?: boolean;

  /**
   * Manually sets the height of the buttons shown.
   */
  buttonHeight?: number;

  /**
   * Whether the email address should be collected in the payment interface.
   */
  emailRequired?: boolean;

  /**
   * Specifies how buttons should be laid out in relation to each other.
   */
  layout?: LayoutOption;

  /**
   * Override the order in which payment methods are displayed in the Pay Button Element.
   * By default, the Express Checkout Element will use a dynamic ordering that optimizes payment method display for each user.
   */
  paymentMethodOrder?: string[];

  /**
   * Whether the phone number should be collected in the payment interface.
   */
  phoneNumberRequired?: boolean;

  /**
   * Whether the shipping address should be collected in the payment interface.
   */
  shippingAddressRequired?: boolean;
}

export type AvailablePaymentMethods = {
  amazonPay: boolean;
  applePay: boolean;
  googlePay: boolean;
  link: boolean;
  paypal: boolean;
  klarna: boolean;
};

export interface StripeExpressCheckoutElementReadyEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'expressCheckout';

  /**
   * The list of payment methods that could possibly show in the element, or undefined if no payment methods can show.
   */
  availablePaymentMethods: undefined | AvailablePaymentMethods;
}

export type ClickResolveDetails = {
  /**
   * @deprecated
   * An array of two-letter ISO country codes representing which countries
   * are eligible shipping locations.
   */
  allowedShippingCountries?: string[];

  /**
   * @deprecated
   * Whether the billing address should be collected in the payment interface.
   */
  billingAddressRequired?: boolean;

  /**
   * @deprecated
   * Provide information about your business that will be displayed in the payment interface.
   * This information will be retrieved from your Stripe account if not provided.
   */
  business?: {name: string};

  /**
   * @deprecated
   * Whether the email address should be collected in the payment interface.
   */
  emailRequired?: boolean;

  lineItems?: Array<LineItem>;

  /**
   * @deprecated
   * Whether the phone number should be collected in the payment interface.
   */
  phoneNumberRequired?: boolean;

  /**
   * @deprecated
   * Whether the shipping address should be collected in the payment interface.
   */
  shippingAddressRequired?: boolean;

  shippingRates?: Array<ShippingRate>;

  applePay?: ApplePayOption;
};

export interface StripeExpressCheckoutElementClickEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'expressCheckout';

  /**
   * The payment method associated with the button that was clicked.
   */
  expressPaymentType: ExpressPaymentType;

  /**
   * Callback to configure the details shown on a payment interface, including which fields to collect.
   * This must be called within 1 second of the 'click' event being emitted.
   */
  resolve: (resolveDetails?: ClickResolveDetails) => void;

  /**
   * Callback to allow for cancellation of the payment interface.
   * This must be called within 1 second of the 'click' event being emitted.
   */
  reject: () => void;
}

export interface StripeExpressCheckoutElementConfirmEvent {
  /**
   * Callback when a payment is unsuccessful. Optionally, specifying a reason will show a more detailed error in the payment interface.
   */
  paymentFailed: (payload?: {
    reason?:
      | 'fail'
      | 'invalid_shipping_address'
      | 'invalid_billing_address'
      | 'invalid_payment_data'
      | 'address_unserviceable';
    message?: string;
  }) => void;

  billingDetails?: BillingDetails;

  shippingAddress?: ShippingAddress;

  shippingRate?: ShippingRate;

  expressPaymentType: ExpressPaymentType;
}

export type ChangeResolveDetails = {
  lineItems?: Array<LineItem>;
  shippingRates?: Array<ShippingRate>;
  applePay?: ApplePayUpdateOption;
};

export interface StripeExpressCheckoutElementShippingAddressChangeEvent {
  name: string;
  address: ExpressCheckoutPartialAddress;
  resolve: (resolveDetails?: ChangeResolveDetails) => void;
  reject: () => void;
}

export interface StripeExpressCheckoutElementShippingRateChangeEvent {
  shippingRate: ShippingRate;
  resolve: (resolveDetails?: ChangeResolveDetails) => void;
  reject: () => void;
}
