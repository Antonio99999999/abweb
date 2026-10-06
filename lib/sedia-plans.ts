import data from "@/content/sedia-plans.json";

export type SediaPlanId = "base" | "pro" | "premium";

export type SediaPlan = {
  id: SediaPlanId;
  name: string;
  monthlyPrice: number;
  tagline: string;
  features: string[];
  highlighted?: boolean;
};

export const SEDIA_PLANS: SediaPlan[] = data.plans as SediaPlan[];
export const SEDIA_ANNUAL_FREE_MONTHS: number = data.annualFreeMonths;
export const SEDIA_INCLUDED_IN_ALL_PLANS: string[] = data.includedInAllPlans;

export function annualMonthlyPrice(plan: SediaPlan) {
  return (plan.monthlyPrice * (12 - SEDIA_ANNUAL_FREE_MONTHS)) / 12;
}
