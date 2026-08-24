export const SITE = {
  name: "Amazing Lashes & Spa",
  url: "https://amazinglashesandspa.com",
  hours: "Tuesday through Saturday, 9:30am to 7:30pm. Closed Sunday and Monday.",
  priceDisclaimer: "Prices are subject to change without notice.",
  cancellationPolicy:
    "Cancel within 24 hours and you will be charged 50% of your scheduled service. No-shows or cancellations after a confirmed appointment will be charged 100% of the scheduled service.",
};

export const LOCATIONS = [
  {
    id: "melrose",
    name: "Melrose",
    address: "6 Eastman Place, Unit 1B, Melrose, MA 02176",
    addressLine1: "6 Eastman Place, Unit 1B",
    city: "Melrose",
    state: "MA",
    zip: "02176",
    phone: "(781) 665-8889",
    phoneHref: "tel:+17816658889",
    bookingUrl: null,
  },
  {
    id: "medford",
    name: "Medford",
    address: "365 Salem Street, Medford, MA 02155",
    addressLine1: "365 Salem Street",
    city: "Medford",
    state: "MA",
    zip: "02155",
    phone: "(781) 219-3298",
    phoneHref: "tel:+17812193298",
    bookingUrl: "http://amazinglashesspa.booksy.com/h",
  },
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export const mapsHref = (address) =>
  `https://maps.google.com/?q=${encodeURIComponent(address)}`;
