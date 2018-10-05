export function getProperties(parent, args, context, info) {
  let properties = {
    properties: [
      {
        name: 'Test Property 1 - Villa',
        address: '123, Santa Clara, CA 1231',
        price: 873412,
        price_formatted: '873412 $',
        is_available_for_rent: false,
        city: 'Santa Clara'
      },
      {
        name: 'Test Property 2 - Studio',
        address: '123, Texas, TX 123121',
        price: 10000,
        price_formatted: '10000 $',
        is_available_for_rent: true,
        city: 'Texas'
      }
    ]
  }
  return properties;
}
