export type ProductCategory = "clays" | "haircare" | "skincare";

export interface Product {
  slug: string;
  title: string;
  botanical: string;
  category: ProductCategory;
  /** grid-*.png — the branded catalog photo, used in card grids, the homepage carousel, and the product detail page */
  gridImage: string;
  /** n-*.png — a blank "your brand" pouch mockup, used only on the custom packaging & labeling page */
  packagingImage: string;
  description: string;
}

export interface CategoryInfo {
  key: ProductCategory;
  eyebrow: string;
  name: string;
  shortName: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { key: "clays", eyebrow: "Category 01", name: "Cosmetic Clays & Mineral Bases", shortName: "Cosmetic Clays" },
  { key: "haircare", eyebrow: "Category 02", name: "Botanical Hair Care Actives & Colorants", shortName: "Hair Care Actives" },
  { key: "skincare", eyebrow: "Category 03", name: "Phyto-Actives & Skincare Botanicals", shortName: "Skincare Botanicals" },
];

// slugs whose asset filename doesn't match the slug directly
const ASSET_KEY_OVERRIDES: Record<string, string> = {
  "aloe-vera": "aloevera",
  "gotu-kola": "gotukola",
  "kaolin-clay": "kaolin",
  "multani-mitti": "multani",
  "rose-petal": "rosepetal",
};

function assetKey(slug: string): string {
  return ASSET_KEY_OVERRIDES[slug] ?? slug;
}

interface RawProduct {
  slug: string;
  title: string;
  botanical: string;
  category: ProductCategory;
  description: string;
}

const RAW: RawProduct[] = [
  // Cosmetic Clays & Mineral Bases
  { slug: "multani-mitti", title: "Fuller's Earth (Multani Mitti) Powder", botanical: "Solum Fullonum", category: "clays", description: "Mineral-rich clay stone-ground into an ultra-fine powder, valued for oil absorption and skin clarifying properties. A staple base for face masks, cleansing bars, and detox skincare lines." },
  { slug: "bentonite", title: "Bentonite Clay Powder", botanical: "Bentonite", category: "clays", description: "Highly absorbent volcanic clay milled fine for detoxifying masks, cleansers, and mineral-rich soap bases." },
  { slug: "kaolin-clay", title: "White Kaolin Clay Powder", botanical: "Kaolin", category: "clays", description: "Ultra-gentle white clay suited for sensitive skin formulations, masks, and soap bases. Naturally mild with excellent oil-absorbing properties." },
  { slug: "red-kaolin", title: "Red Kaolin (Illite) Clay Powder", botanical: "Illite", category: "clays", description: "Iron-rich red clay valued for gentle exfoliation and circulation-boosting facial and body treatments." },
  { slug: "pink-kaolin", title: "Pink Kaolin (Rose) Clay Powder", botanical: "Kaolin", category: "clays", description: "A blend of white kaolin and red clay, prized for its mild, balanced action on sensitive and normal skin types." },
  { slug: "charcoal", title: "Activated Charcoal Powder", botanical: "Charcoal Powder", category: "clays", description: "Fine activated charcoal powder for deep-pore detoxifying cleansers, masks, and whitening formulations. Consistently milled for smooth formulation blending." },

  // Botanical Hair Care Actives & Colorants
  { slug: "henna", title: "Natural Henna Powder", botanical: "Lawsonia Inermis", category: "haircare", description: "Sun-dried and triple-sifted henna leaf powder, prized for natural hair conditioning and rich color deposit. Sourced from certified farms and processed without synthetic additives, ready for private-label hair care and temporary tattoo formulations." },
  { slug: "neutral-henna", title: "Neutral Henna (Cassia) Powder", botanical: "Cassia Obovata", category: "haircare", description: "A color-neutral conditioning powder that strengthens and adds shine to hair without altering natural tone." },
  { slug: "indigo", title: "Indigo Powder", botanical: "Indigofera Tinctoria", category: "haircare", description: "Natural dye powder used alongside henna for deep, chemical-free hair coloring. Processed to retain consistent tone strength batch after batch." },
  { slug: "amla", title: "Indian Gooseberry (Amla) Powder", botanical: "Phyllanthus Emblica", category: "haircare", description: "Vitamin C-rich gooseberry powder used across hair strengthening oils, tonics, and skin brightening formulations. Cold-processed to preserve antioxidant potency." },
  { slug: "reetha", title: "Soapnut (Reetha) Powder", botanical: "Sapindus Mukorossi", category: "haircare", description: "Natural saponin-rich powder used as a gentle, sulfate-free cleansing base for shampoos and body washes." },
  { slug: "shikakai", title: "Shikakai Powder", botanical: "Acacia Concinna", category: "haircare", description: "Traditional cleansing pod powder gentle enough for daily use, formulated into natural shampoos and scalp treatments. Retains its saponin content through low-heat processing." },
  { slug: "bhringraj", title: "False Daisy (Bhringraj) Powder", botanical: "Eclipta Prostrata", category: "haircare", description: "Revered in Ayurveda for hair growth support, this finely milled powder integrates into oils, masks, and scalp serums for global haircare brands." },
  { slug: "brahmi", title: "Water Hyssop (Brahmi) Powder", botanical: "Bacopa Monnieri", category: "haircare", description: "Traditional cognitive and hair-care herb, milled into a fine powder for scalp oils, tonics, and calming skin formulations." },
  { slug: "hibiscus", title: "Hibiscus Powder", botanical: "Hibiscus Rosa-Sinensis", category: "haircare", description: "Nutrient-dense flower and leaf powder traditionally used to nourish hair follicles and add natural vibrancy." },
  { slug: "fenugreek", title: "Fenugreek (Methi) Powder", botanical: "Trigonella Foenum-Graecum", category: "haircare", description: "Mucilage-rich seed powder valued for deep conditioning and scalp nourishment in hair care formulations." },
  { slug: "spikenard", title: "Spikenard (Jatamansi) Powder", botanical: "Nardostachys Jatamansi", category: "haircare", description: "Aromatic root powder used in traditional scalp treatments for its calming, soothing properties." },
  { slug: "nutgrass", title: "Nutgrass (Nagarmotha) Powder", botanical: "Cyperus Rotundus", category: "haircare", description: "Traditional rhizome powder used in skin-brightening and cooling formulations across Ayurvedic skincare." },
  { slug: "ginger-lily", title: "Spiked Ginger Lily (Kapur Kachri) Powder", botanical: "Hedychium Spicatum", category: "haircare", description: "Fragrant rhizome powder used in traditional formulations for its clarifying and aromatic properties." },
  { slug: "neem", title: "Neem Leaf Powder", botanical: "Azadirachta Indica", category: "haircare", description: "Pure neem leaf powder with natural antibacterial properties, widely used in acne treatments, scalp care, and herbal cleansers. Batch-tested for consistent potency." },
  { slug: "tulsi", title: "Holy Basil (Tulsi) Leaf Powder", botanical: "Ocimum Sanctum", category: "haircare", description: "Revered purifying leaf powder used across cleansers and scalp tonics for its antibacterial properties." },
  { slug: "aloe-vera", title: "Aloe Vera Powder", botanical: "Aloe Barbadensis", category: "haircare", description: "Dehydrated aloe concentrate offering soothing, hydrating benefits across skin and hair formulations." },
  { slug: "rose-petal", title: "Rose Petal Powder", botanical: "Rosa Damascena", category: "haircare", description: "Delicately milled rose petal powder used in brightening masks and naturally fragranced skincare bases." },
  { slug: "wild-turmeric", title: "Wild Turmeric (Kasturi Manjal) Powder", botanical: "Curcuma Aromatica", category: "haircare", description: "Kasturi Manjal, prized for its brightening and cosmetic-grade properties, milled fine for masks, cleansers, and skincare formulations." },

  // Phyto-Actives & Skincare Botanicals
  { slug: "white-sandalwood", title: "White Sandalwood Powder", botanical: "Santalum Album", category: "skincare", description: "Prized cosmetic-grade wood powder with cooling, soothing properties for masks and traditional skincare." },
  { slug: "red-sandalwood", title: "Red Sandalwood Powder", botanical: "Pterocarpus Santalinus", category: "skincare", description: "Rich pigmented wood powder traditionally used for skin brightening and natural tinting in cosmetic bases." },
  { slug: "turmeric", title: "Regular Turmeric (Cosmetic Grade) Powder", botanical: "Curcuma Longa", category: "skincare", description: "Cosmetic-grade turmeric powder valued for its brightening and clarifying properties in face masks." },
  { slug: "white-turmeric", title: "White Turmeric (Kachur Sugandhi) Powder", botanical: "Curcuma Zedoaria", category: "skincare", description: "Aromatic rhizome powder used in traditional skincare for its clarifying and cooling properties." },
  { slug: "gotu-kola", title: "Gotu Kola (Cica) Powder", botanical: "Centella Asiatica", category: "skincare", description: "Mandukaparni leaf powder valued for its skin-calming and rejuvenating properties, formulated into serums, masks, and scalp treatments." },
  { slug: "manjistha", title: "Indian Madder (Manjistha) Powder", botanical: "Rubia Cordifolia", category: "skincare", description: "Traditional root powder used in Ayurvedic skincare for its purifying and complexion-enhancing properties." },
  { slug: "moringa", title: "Moringa Leaf Powder", botanical: "Moringa Oleifera", category: "skincare", description: "Nutrient-dense moringa leaf powder rich in antioxidants, formulated into revitalizing masks, serums, and wellness-driven skincare lines." },
  { slug: "licorice", title: "Licorice Root (Mulethi) Powder", botanical: "Glycyrrhiza Glabra", category: "skincare", description: "Root powder valued for its brightening, soothing properties in skin-clarifying formulations." },
  { slug: "lotus", title: "Lotus Petal Powder", botanical: "Nelumbo Nucifera", category: "skincare", description: "Delicate petal powder with calming, antioxidant-rich properties for premium facial care lines." },
  { slug: "orange", title: "Orange Peel Powder", botanical: "Citrus Aurantium Dulcis", category: "skincare", description: "Vitamin C-rich peel powder used in exfoliating masks and brightening skincare formulations." },
  { slug: "lemon", title: "Lemon Peel Powder", botanical: "Citrus Limon", category: "skincare", description: "Citrus peel powder valued for its natural brightening and clarifying action in cosmetic formulations." },
  { slug: "pomegranate", title: "Pomegranate Peel Powder", botanical: "Punica Granatum", category: "skincare", description: "Antioxidant-rich peel powder used in anti-aging masks and rejuvenating skincare formulations." },
  { slug: "beetroot", title: "Beetroot Powder", botanical: "Beta Vulgaris", category: "skincare", description: "Naturally pigmented root powder used for its nourishing properties and as a natural cosmetic tint." },
  { slug: "ashwagandha", title: "Ashwagandha Root (Cosmetic Grade) Powder", botanical: "Withania Somnifera", category: "skincare", description: "Cosmetic-grade adaptogenic root powder used in skin and scalp formulations for its restorative, calming properties." },
  { slug: "shatavari", title: "Shatavari Root (Cosmetic Grade) Powder", botanical: "Asparagus Racemosus", category: "skincare", description: "Cosmetic-grade adaptogenic root powder valued for its nourishing, restorative skincare properties." },
  { slug: "frankincense", title: "Indian Frankincense (Boswellia Serrata) Powder", botanical: "Boswellia Serrata", category: "skincare", description: "Resin-derived powder valued in traditional and modern formulations for its restorative properties." },
  { slug: "vetiver", title: "Vetiver (Khus) Root Powder", botanical: "Chrysopogon Zizanioides", category: "skincare", description: "Aromatic root powder used in traditional cooling formulations and natural fragrance bases." },
  { slug: "sarsaparilla", title: "Indian Sarsaparilla (Anantmool) Powder", botanical: "Hemidesmus Indicus", category: "skincare", description: "Traditional root powder used in purifying, cooling formulations across Ayurvedic skincare." },
];

export const PRODUCTS: Product[] = RAW.map((p) => ({
  ...p,
  gridImage: `/assets/grid-${assetKey(p.slug)}.png`,
  packagingImage: `/assets/n-${assetKey(p.slug)}.png`,
}));

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

/** The curated set featured in the homepage carousel. */
export const FEATURED_SLUGS = [
  "multani-mitti",
  "henna",
  "wild-turmeric",
  "gotu-kola",
  "ashwagandha",
  "amla",
];

export const FEATURED_PRODUCTS: Product[] = FEATURED_SLUGS.map(
  (slug) => getProduct(slug)!
);
