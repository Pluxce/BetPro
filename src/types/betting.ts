export interface BetSelection {
  id: string;
  eventId: string;
  eventName: string;
  eventDate: Date;
  selection: string;
  sport: string;
  category: 'match' | 'player_performance' | 'high_yield';
  odds: number;
}

export interface BettingCoupon {
  id: string;
  name: string;
  description: string;
  price: number;
  riskLevel: 'faible' | 'modéré' | 'élevé';
  selections: BetSelection[];
  expirationDate: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  subscriptionType: 'free' | 'premium' | 'none';
  purchasedCoupons: string[];
}