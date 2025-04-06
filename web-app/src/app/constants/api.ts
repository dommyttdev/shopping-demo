const DEFAULT_URL = "https://5bb75e0f-076a-4c47-9420-5cbbf2ee9223.mock.pstmn.io"
export const BASE_URL = process.env.API_ROOT || DEFAULT_URL

export const Functions = {
    FeaturedProducts: "FeaturedProducts",
    NewArrivalsProducts: "NewArrivalsProducts"
    // エンドポイントをここに追加
} as const;

export type FunctionKey = keyof typeof Functions;

export const FunctionEndpoints: Record<FunctionKey, string> = {
    FeaturedProducts: "/products/featured",
    NewArrivalsProducts: "/products/new-arrivals"
    // エンドポイントのパスをここに追加
};
