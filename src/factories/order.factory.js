
class Shopify {
  constructor(props) {
    this.customer = props.customer;
    this.shippingAddress = props.shipping_address;
    this.shippingDetails = props.shipping_lines;
    this.billingAddress = props.billing_address;
    this.payment = props.payment_details;
    this.paymentStatus = props.financial_status;
    this.fulfillments = props.fulfillments;
    this.fulfillmentStatus = props.fulfillment_status;
    this.currency = props.currency;
    this.appId = props.app_id;
    this.orderId = props.id;
    this.orderName = props.name;
    this.orderNumber = props.order_number;
    this.phone = props.phone;
    this.note = props.note;
    this.items = props.line_items;

    this.discount = props.total_discounts;
    this.discountDetails = props.total_discounts_set;

    this.itemsPrice = props.total_line_items_price;
    this.itemsPriceDetails = props.total_line_items_price_set;

    this.totalPrice = props.total_price;
    this.totalPriceDetails = props.total_price_set;

    this.tax = props.total_tax;
    this.taxDetails = props.total_tax_set;

    this.cancelledAt = props.cancelled_at;
    this.closedAt = props.closed_at;
    this.createdAt = props.created_at;
    this.processedAt = props.processed_at;

    this.statusUrl = props.order_status_url;
    this.source = 'shopify';
  }
}


class OrderFactory {
  static createOrder(provider, data) {
    if (!provider) throw new Error('');
    if (provider === 'shopify') {
      return new Shopify(data);
    }
    return {};
  }
}


module.exports = OrderFactory;
