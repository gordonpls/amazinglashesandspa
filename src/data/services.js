// Transcribed from the live site's service pages (screenshots + text exports
// in assets and references/webpages/). Items with a `description` render as
// an expandable accordion row; items without one render as a compact price row.

export const SERVICE_CATEGORIES = [
  {
    id: "lashes",
    name: "Eyelash Extensions",
    groups: [
      {
        items: [
          { name: "Amazing Look Full Set", price: "$260" },
          { name: "Signature 2D Full Set", price: "$300" },
          { name: "Xtreme Lashes Volumation Full Set", price: "$350" },
        ],
      },
      {
        title: "Refills",
        items: [
          { name: "One Week Refill", price: "$70", note: "2D & Volumation $80" },
          { name: "Two to Three Week Refill", price: "$85", note: "2D & Volumation $100" },
          { name: "Three to Four Week Refill", price: "$100", note: "2D & Volumation $120" },
          { name: "Over Four Week Refill", price: "Priced as new set" },
        ],
      },
      {
        items: [{ name: "Lash Removal", price: "$40" }],
      },
    ],
  },
  {
    id: "facials",
    name: "Facials",
    groups: [
      {
        items: [
          {
            name: "Signature Deep Cleansing Facial",
            price: "$138",
            time: "60 min",
            description:
              "Ideal for firming and supporting a healthy, refreshed complexion, this treatment uses steam and a multi-step exfoliation process to renew and revitalize. Deep cleansing includes extractions to clear congestion and remove impurities, followed by a relaxing massage. The service finishes with toner and an SPF moisturizer to hydrate, nourish, and protect. Suitable for all types, and especially helpful for those with acne-prone or oily concerns.",
          },
          {
            name: "Anti-Acne Treatment",
            price: "$199",
            time: "75 min",
            description:
              "This hydro dermabrasion treatment procedure uses dual diamond tips to perform a hydrating exfoliation that peels off dead skin layers and refreshes the skin without any irritation. Depending on skin type, serum and oxygen are then infused into the skin using ultrasound to boost collagen production. This treatment helps to reduce mild acne scars and improve skin texture and color, reduces wrinkles and fine lines, provides hydration, and boosts blood flow.",
          },
          {
            name: "Anti-Aging Treatment",
            price: "$199",
            time: "75 min",
            description:
              "Hydro dermabrasion anti-aging treatment infuses oxygen with serum to boost collagen production. This procedure uses dual diamond tips and low vacuum suction to gently exfoliate, peel off dead skin layers and refresh the skin without irritation. This treatment helps to improve skin texture and color, reduces wrinkles and fine lines, provides hydration, and boosts blood flow.",
          },
          {
            name: "Ultrasonic Therapy",
            price: "$199",
            time: "75 min",
            description:
              "This treatment uses two ultrasound probes to generate gentle vibrations to the face and eyes, providing improvement of blood circulation along with infusion of serums into the skin. This treatment is targeted to stimulate the skin by diminishing the dark circles around the eyes, lessening the depth of fine lines and wrinkles, and reducing puffiness and dullness of the skin.",
            note: "An average of 4 to 8 treatments are required for the desired results.",
          },
          {
            name: "ThermaLift Facial Treatment",
            price: "$199",
            time: "75 min",
            description:
              "A targeted skin tightening treatment that uses controlled radio frequency energy to gently warm the deeper layers of the skin. The heat signals your skin to make fresh collagen and elastin, improving firmness and smoothing the look of lines. Regenerating collagen production is the key to tightening and regaining youthfulness in mature skin.",
            bullets: [
              "Lift and slim double chin",
              "Contour jawline area",
              "Reduce eye dark circles and puffiness",
              "Lift up eyebrows",
              "Diminish the appearance of crow's feet and nasolabial folds",
              "Reduce stretch marks",
            ],
            note: "On average, 4 to 10 treatments are required for desired results.",
          },
          {
            name: "VI Peel",
            price: "From $350",
            time: "45 min",
            description:
              "Our skin will stop producing as much collagen causing our elasticity to loosen over time. The VI peel is engineered to help promote rapid cell turnover and fade pigmentation. The peel treatment will reveal a renewed, brighter and more youthful skin tone. It is effective against wrinkles, uneven skin tone, sun damage and hyperpigmentation.",
            note: "One section is $400. Three sections are $350 each.",
          },
          {
            name: "Microneedling",
            price: "$299",
            time: "45 min",
            description:
              "Microneedling is a minimally invasive skin-rejuvenation procedure that uses a needling device to create controlled injury, stimulating the skin's natural healing response to produce new collagen and elastin. Microneedling can reduce the appearance of scars, including acne scars, fine lines and wrinkles, hyperpigmentation, dark spots, and stretch marks.",
          },
          {
            name: "Lutronic Clarity II Laser Facial",
            price: "$299",
            time: "45 min",
            description:
              "The supercharged laser facial delivers a fast penetration of carbon dioxide deep into the skin containing serum to enhance the skin cells' renewal process and upgrade the skin's self protection. This facial helps correct and prevent breakouts, rosacea, and hyperpigmentation. In addition, it revitalizes, smooths, and tightens contours as well as reversing signs of aging. Suitable for all skin types, except highly sensitive.",
          },
          {
            name: "Hands and Hydration Rejuvenation",
            price: "$100",
            time: "45 min",
            description:
              "This hydro dermabrasion rejuvenation procedure uses diamond tips to gently exfoliate and refresh the skin followed by an ultrasound infusion with serum.",
          },
          {
            name: "Dermaplaning",
            price: "$99",
            time: "45 min",
            description:
              "A gentle exfoliation that removes dead skin cells and fine vellus hair (“peach fuzz”) with a sterile surgical blade, leaving your skin ultra-smooth, radiant, and perfectly prepped for better product absorption and flawless makeup. The treatment is followed by a hydrating mask and moisturizer with SPF to replenish and calm the skin. Ideal for all skin types with no downtime.",
          },
          {
            name: "Back Facial Treatment",
            price: "$169",
            time: "60 min",
            description:
              "This hydro dermabrasion back facial uses the dual diamond tips and low vacuum suction to gently exfoliate and refresh the skin followed by an application of a layer of serum to oxygenate and rejuvenate the skin.",
          },
        ],
      },
    ],
  },
  {
    id: "laser",
    name: "Laser Hair Removal",
    footnote:
      "Any package of 3 is 30% off. Any package of 6 is 40% off. Any package of 9 is 50% off.",
    groups: [
      {
        title: "Face & Neck",
        items: [
          { name: "Full Face", price: "$190" },
          { name: "Upper Lip, Chin, Ear, Areola or Small Area", price: "$100" },
          { name: "Extended Chin", price: "$110" },
          { name: "Sideburns", price: "$130" },
          { name: "Neck", price: "$160" },
          { name: "Back of Neck", price: "$100" },
        ],
      },
      {
        title: "Arms & Hands",
        items: [
          { name: "Full Arms", price: "$210" },
          { name: "Upper Arms", price: "$140", note: "With elbows $150" },
          { name: "Lower Arms", price: "$140", note: "With elbows $150" },
          { name: "Under Arm", price: "$160" },
          { name: "Shoulders", price: "$170" },
          { name: "Hands", price: "$110" },
        ],
      },
      {
        title: "Back & Torso",
        items: [
          { name: "Full Back", price: "$260" },
          { name: "Upper Back", price: "$160" },
          { name: "Lower Back", price: "$160" },
          { name: "Happy Trail", price: "$110" },
        ],
      },
      {
        title: "Legs & Feet",
        items: [
          { name: "Full Legs", price: "$370" },
          { name: "Upper Legs", price: "$200", note: "With knees $210" },
          { name: "Lower Legs", price: "$200", note: "With knees $210" },
          { name: "Feet and Toes", price: "$110" },
        ],
      },
      {
        title: "Bikini & Intimate",
        items: [
          { name: "Brazilian", price: "$190" },
          { name: "Bikini", price: "$160" },
          { name: "Buttocks", price: "$150" },
          { name: "Inner Thighs", price: "$100" },
        ],
      },
    ],
  },
  {
    id: "microblading",
    name: "Microblading",
    groups: [
      {
        items: [
          { name: "Strokes", price: "$600" },
          { name: "Powder", price: "$500" },
          { name: "Combo", price: "$680" },
        ],
      },
      {
        title: "Eyebrow Color Boost",
        items: [
          { name: "6 to 12 Month Boost", price: "$300" },
          { name: "12 to 24 Month Boost", price: "$380" },
          { name: "Over 2 Years", price: "Priced at consultation" },
        ],
      },
      {
        items: [
          { name: "Lip Blush", price: "$700" },
          { name: "Lip Blush, 6 to 24 Month Boost", price: "$380" },
          { name: "Lip Blush, Over 2 Years", price: "Priced at consultation" },
          { name: "Eye Liner", price: "$600" },
          { name: "Eye Liner, 6 to 24 Month Boost", price: "$300" },
          { name: "Eye Liner, Over 2 Years", price: "Priced at consultation" },
        ],
      },
    ],
  },
  {
    id: "waxing",
    name: "Waxing",
    groups: [
      {
        title: "Face",
        items: [
          { name: "Eyebrows", price: "$18" },
          { name: "Lip", price: "$12" },
          { name: "Chin", price: "$12" },
          { name: "Eyebrows, Lip & Chin", price: "$39" },
          { name: "Full Face", price: "$50" },
        ],
      },
      {
        title: "Body",
        items: [
          { name: "Underarms", price: "$23" },
          { name: "Full Arms", price: "$53" },
          { name: "Half Arms", price: "$35" },
          { name: "Full Legs", price: "$65" },
          { name: "Half Legs", price: "$50" },
          { name: "Chest Wax", price: "$50" },
          { name: "Back Wax", price: "$50" },
        ],
      },
      {
        title: "Bikini",
        items: [
          { name: "Basic Bikini", price: "$35" },
          { name: "Complete Bikini", price: "$68" },
        ],
      },
    ],
  },
];
