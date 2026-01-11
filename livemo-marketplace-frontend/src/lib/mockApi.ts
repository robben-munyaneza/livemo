import type { Listing } from "./marketplaceApi";

type LoginResponse = {
  user: { id: string; email: string; name?: string };
};

type RegisterResponse = {
  user: { id: string; email: string; name?: string };
};

type CheckoutResponse = {
  orderId: string;
};

export type DemoCartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl?: string;
  quantity: number;
};

const livestockImages = [
  "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1546447147-3fc2b8181a5a?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1501706362039-c6e80948c76a?auto=format&fit=crop&w=1600&q=60",
];

const productImages = [
  "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1585314062604-1a357de8b000?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1580915411954-282cb1c96f1f?auto=format&fit=crop&w=1600&q=60",
];

const sellers = [
  { id: "s1", farmName: "Kigali Hills Farm", location: "Kigali" },
  { id: "s2", farmName: "Musanze Dairy Co.", location: "Musanze" },
  { id: "s3", farmName: "Eastern Plains Ranch", location: "Nyagatare" },
];

function money(n: number) {
  return Math.round(n * 100) / 100;
}

function makeMockListings(): Listing[] {
  const livestockTypes = ["cattle", "goat", "sheep", "poultry"] as const;

  const livestock: Listing[] = Array.from({ length: 24 }).map((_, i) => {
    const t = livestockTypes[i % livestockTypes.length];
    const seller = sellers[i % sellers.length];
    const certifications = ["Vaccinated", "Dewormed", "Health Certified"].slice(0, (i % 3) + 1);

    const title =
      t === "cattle"
        ? `Holstein Cow (Grade A) #${i + 1}`
        : t === "goat"
          ? `Boer Goat (Healthy) #${i + 1}`
          : t === "sheep"
            ? `Dorper Sheep (Ready Now) #${i + 1}`
            : `Poultry Lot (Layers) #${i + 1}`;

    return {
      id: `LIV-${i + 1}`,
      type: "livestock",
      title,
      price: money(220 + i * 18 + (i % 4) * 9.5),
      location: seller.location,
      imageUrl: livestockImages[i % livestockImages.length],
      description:
        "Verified listing with transparent details. Health status available on request. Delivery coordination supported.",
      certifications,
      ageMonths: 6 + (i % 12) * 2,
      seller,
    };
  });

  const categories = ["feed", "veterinary", "equipment", "supplements"] as const;
  const brands = ["AgriPlus", "FarmCare", "HerdStrong", "VetPro"];

  const products: Listing[] = Array.from({ length: 24 }).map((_, i) => {
    const cat = categories[i % categories.length];
    const brand = brands[i % brands.length];

    const title =
      cat === "feed"
        ? `${brand} Premium Feed (50kg)`
        : cat === "veterinary"
          ? `${brand} Dewormer (Multi-species)`
          : cat === "equipment"
            ? `${brand} Farm Equipment Kit`
            : `${brand} Mineral Supplements`;

    return {
      id: `PROD-${i + 1}`,
      type: "product",
      title,
      price: money(10 + i * 2.75),
      location: "Rwanda",
      imageUrl: productImages[i % productImages.length],
      description:
        "Quality farm product designed for reliability. Suitable for smallholders and commercial operations.",
      certifications: cat === "veterinary" ? ["Quality Assured"] : undefined,
    };
  });

  return [...livestock, ...products];
}

const MOCK_LISTINGS: Listing[] = makeMockListings();

function parseUrl(pathWithQuery: string) {
  const base = "http://mock.local";
  return new URL(pathWithQuery.startsWith("/") ? `${base}${pathWithQuery}` : `${base}/${pathWithQuery}`);
}

function matchesRange(v: number | undefined, min?: number, max?: number) {
  if (v === undefined) return true;
  if (min !== undefined && v < min) return false;
  if (max !== undefined && v > max) return false;
  return true;
}

function listFilter(list: Listing[], url: URL) {
  const type = url.searchParams.get("type")?.toLowerCase();
  const location = url.searchParams.get("location")?.toLowerCase();
  const certification = url.searchParams.get("certification")?.toLowerCase();
  const category = url.searchParams.get("category")?.toLowerCase();
  const brand = url.searchParams.get("brand")?.toLowerCase();

  const minPrice = url.searchParams.get("minPrice");
  const maxPrice = url.searchParams.get("maxPrice");
  const minAge = url.searchParams.get("minAge");
  const maxAge = url.searchParams.get("maxAge");

  const minPriceN = minPrice ? Number(minPrice) : undefined;
  const maxPriceN = maxPrice ? Number(maxPrice) : undefined;
  const minAgeN = minAge ? Number(minAge) : undefined;
  const maxAgeN = maxAge ? Number(maxAge) : undefined;

  return list.filter((l) => {
    if (type && !l.title.toLowerCase().includes(type) && l.type !== "product") return false;
    if (location && (l.location ?? "").toLowerCase().includes(location) === false) return false;
    if (certification && !(l.certifications ?? []).some((c) => c.toLowerCase().includes(certification))) return false;
    if (l.type === "product") {
      if (brand && !inferBrand(l).toLowerCase().includes(brand)) return false;
      if (category && inferCategory(l) !== category) return false;
    }
    if (!matchesRange(l.price, minPriceN, maxPriceN)) return false;
    if (!matchesRange(l.ageMonths, minAgeN, maxAgeN)) return false;
    return true;
  });
}

function inferBrand(l: Listing) {
  const first = l.title.split(" ")[0];
  return first || "Livemo";
}

function inferCategory(l: Listing): string {
  const t = l.title.toLowerCase();
  if (t.includes("feed")) return "feed";
  if (t.includes("deworm") || t.includes("veter") || t.includes("vaccine")) return "veterinary";
  if (t.includes("equipment") || t.includes("kit")) return "equipment";
  if (t.includes("mineral") || t.includes("supplement")) return "supplements";
  return "supplies";
}

export function getDemoCartItems(): DemoCartItem[] {
  const items = MOCK_LISTINGS.filter((l) => l.type === "product").slice(0, 2);
  const livestock = MOCK_LISTINGS.find((l) => l.type === "livestock");
  const cart: DemoCartItem[] = [];

  items.forEach((p, idx) =>
    cart.push({ id: p.id, title: p.title, price: p.price, imageUrl: p.imageUrl, quantity: idx === 0 ? 2 : 1 })
  );

  if (livestock) {
    cart.push({ id: livestock.id, title: livestock.title, price: livestock.price, imageUrl: livestock.imageUrl, quantity: 1 });
  }

  return cart;
}

function maybeDelay(ms = 250) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function mockApiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = parseUrl(path);
  const method = (options.method ?? "GET").toUpperCase();

  await maybeDelay(180);

  if (method === "POST" && url.pathname === "/auth/login") {
    const body = typeof options.body === "string" ? safeJsonParse(options.body) : null;
    const email = (body?.email as string | undefined) ?? "demo@livemo.com";
    const res: LoginResponse = { user: { id: "u_demo", email, name: "Demo User" } };
    return res as unknown as T;
  }

  if (method === "POST" && url.pathname === "/auth/register") {
    const body = typeof options.body === "string" ? safeJsonParse(options.body) : null;
    const email = (body?.email as string | undefined) ?? "demo@livemo.com";
    const name = (body?.name as string | undefined) ?? "Demo User";
    const res: RegisterResponse = { user: { id: "u_demo", email, name } };
    return res as unknown as T;
  }

  if (method === "POST" && url.pathname === "/checkout") {
    const res: CheckoutResponse = { orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}` };
    return res as unknown as T;
  }

  if (method === "GET" && url.pathname === "/marketplace/livestock") {
    const list = listFilter(
      MOCK_LISTINGS.filter((l) => l.type === "livestock"),
      url
    );
    return list as unknown as T;
  }

  if (method === "GET" && url.pathname === "/marketplace/products") {
    const list = listFilter(
      MOCK_LISTINGS.filter((l) => l.type === "product"),
      url
    );
    return list as unknown as T;
  }

  const listingMatch = url.pathname.match(/^\/marketplace\/listings\/(.+)$/);
  if (method === "GET" && listingMatch) {
    const id = decodeURIComponent(listingMatch[1]);
    const item = MOCK_LISTINGS.find((l) => l.id === id);
    if (!item) throw new Error("Mock listing not found");
    return item as unknown as T;
  }

  throw new Error(`Mock route not implemented: ${method} ${url.pathname}`);
}

function safeJsonParse(value: string) {
  try {
    return JSON.parse(value) as any;
  } catch {
    return null;
  }
}
