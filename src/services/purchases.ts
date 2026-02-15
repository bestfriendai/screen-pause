import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export interface Package { identifier: string; packageType: 'MONTHLY' | 'ANNUAL'; storeProduct: { productId: string } }

class Purchases {
  private static instance: Purchases;
  static getSharedInstance() { if (!Purchases.instance) Purchases.instance = new Purchases(); return Purchases.instance; }
  async isPro() { return false; }
  async purchasePackage(_pkg: Package) { Alert.alert('Premium', 'Demo'); return false; }
  async restorePurchases() { return null; }
}
export const purchases = Purchases.getSharedInstance();
export function useSubscription() {
  const [isPro, setIsPro] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => { setIsLoading(false); }, []);
  return { isPro, isLoading, purchase: () => {}, restore: () => Promise.resolve(false), refresh: () => {} };
}
