import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const packages = [
  { id: 'monthly', name: 'Monthly', price: '$2.99', period: '/month', features: ['Unlimited timers', 'Advanced stats', 'No ads'], popular: false },
  { id: 'annual', name: 'Annual', price: '$19.99', period: '/year', features: ['Everything in Monthly', 'Save 45%', 'Priority support'], popular: true },
];

export default function PaywallScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState('annual');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.badge}>🔓 PRO</Text>
          <Text style={styles.title}>Unlock ScreenPause Pro</Text>
          <Text style={styles.subtitle}>Get unlimited focus sessions and advanced features.</Text>
        </View>
        <View style={styles.features}>
          {['Unlimited timers', 'Advanced statistics', 'Custom categories', 'No ads', 'Priority support'].map((f, i) => (
            <View key={i} style={styles.feature}><Text style={styles.featureIcon}>✓</Text><Text style={styles.featureText}>{f}</Text></View>
          ))}
        </View>
        <View style={styles.packages}>
          {packages.map((pkg) => (
            <TouchableOpacity key={pkg.id} style={[styles.packageCard, selected === pkg.id && styles.packageCardSelected, pkg.popular && styles.packageCardPopular]} onPress={() => setSelected(pkg.id)}>
              {pkg.popular && <View style={styles.popularBadge}><Text style={styles.popularBadgeText}>BEST</Text></View>}
              <Text style={styles.packageName}>{pkg.name}</Text>
              <View style={styles.priceRow}><Text style={styles.packagePrice}>{pkg.price}</Text><Text style={styles.packagePeriod}>{pkg.period}</Text></View>
              <View style={[styles.checkCircle, selected === pkg.id && styles.checkCircleSelected]}>{selected === pkg.id && <Text style={styles.checkMark}>✓</Text>}</View>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.subscribeButton}><Text style={styles.subscribeButtonText}>Subscribe Now</Text></TouchableOpacity>
        <TouchableOpacity style={styles.restoreButton}><Text style={styles.restoreButtonText}>Restore Purchases</Text></TouchableOpacity>
        <Text style={styles.terms}>By subscribing, you agree to our Terms of Service.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1F2937' },
  closeButton: { position: 'absolute', top: 50, right: 20, zIndex: 10, width: 36, height: 36, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center' },
  closeText: { color: '#fff', fontSize: 18 },
  content: { padding: 24, paddingTop: 80 },
  header: { alignItems: 'center', marginBottom: 32 },
  badge: { backgroundColor: '#F59E0B', color: '#fff', fontSize: 12, fontWeight: '700', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginBottom: 16 },
  title: { fontSize: 32, fontWeight: '800', color: '#fff', textAlign: 'center', marginBottom: 12 },
  subtitle: { fontSize: 15, color: '#9CA3AF', textAlign: 'center' },
  features: { marginBottom: 32 },
  feature: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  featureIcon: { color: '#10B981', fontSize: 18, marginRight: 12, fontWeight: '700' },
  featureText: { color: '#fff', fontSize: 16 },
  packages: { gap: 16, marginBottom: 24 },
  packageCard: { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 20, borderWidth: 2, borderColor: 'transparent', position: 'relative' },
  packageCardSelected: { borderColor: '#F59E0B', backgroundColor: 'rgba(245, 158, 11, 0.1)' },
  packageCardPopular: { borderColor: '#F59E0B' },
  popularBadge: { position: 'absolute', top: -10, right: 16, backgroundColor: '#F59E0B', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  popularBadgeText: { color: '#fff', fontSize: 10, fontWeight: '700' },
  packageName: { fontSize: 18, fontWeight: '600', color: '#fff', marginBottom: 8 },
  priceRow: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 12 },
  packagePrice: { fontSize: 32, fontWeight: '800', color: '#fff' },
  packagePeriod: { fontSize: 14, color: '#9CA3AF', marginLeft: 4 },
  checkCircle: { position: 'absolute', top: 20, left: 20, width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: '#4B5563', alignItems: 'center', justifyContent: 'center' },
  checkCircleSelected: { backgroundColor: '#F59E0B', borderColor: '#F59E0B' },
  checkMark: { color: '#fff', fontSize: 14, fontWeight: '700' },
  subscribeButton: { backgroundColor: '#F59E0B', borderRadius: 12, paddingVertical: 16, alignItems: 'center', marginBottom: 12 },
  subscribeButtonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  restoreButton: { paddingVertical: 12, alignItems: 'center', marginBottom: 24 },
  restoreButtonText: { color: '#9CA3AF', fontSize: 14 },
  terms: { color: '#6B7280', fontSize: 11, textAlign: 'center' },
});
