var orders = [
  {
    orderId: "ORD001",
    customer: "John Doe",
    items: "item1:2,item2:1,item3:5",
    orderDate: "2023-12-01",
    deliveryDate: "2023-12-05",
    deliveryAddress: "123, Main Street, Springfield, USA",
  },
  {
    orderId: "ORD002",
    customer: "Jane Smith",
    items: "itemA:3,itemB:4",
    orderDate: "2023-11-15",
    deliveryDate: "2023-11-20",
    deliveryAddress: "Flat 4B, Elmwood Apartments, New York, USA",
  },
  {
    orderId: "ORD003",
    customer: "Alice Johnson",
    items: "itemX:1",
    orderDate: "2023-10-10",
    deliveryDate: "2023-10-15",
    deliveryAddress: "456, Pine Lane, Denver, USA",
  },
];

function transformFormat(order) {
  var addressParts = order.deliveryAddress.split(",").map((d) => d.trim());
  var formattedOrder = {
    orderId: order.orderId,
    customer: order.customer,
    totalItems: order.items
      .split(",")
      .map((o) => o.split(":")[1])
      .map(Number)
      .reduce((accu, current) => {
        return accu + current;
      }, 0),
    orderDate: order.orderDate,
    deliveryDate: order.deliveryDate,
    deliveryDuration:
      order.deliveryDate.split("-")[2] - order.orderDate.split("-")[2],
    deliveryCountry: addressParts[3],
    deliveryCity: addressParts[2],
    deliveryStreet: addressParts[1],
    buildingNumber: addressParts[0],
  };

  return formattedOrder;
}

console.log(orders.map((order) => transformFormat(order)));
