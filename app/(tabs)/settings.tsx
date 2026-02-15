import { View, Text, TouchableOpacity, StyleSheet, Switch, ScrollView, Alert, Linking } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [sounds, setSounds] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.profileCard}>
        <View style={styles.avatar}><Text style={styles.avatarText}>👤</Text></View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Focus User</Text>
          <Text style={styles.profilePlan}>Free Plan</Text>
        </View>
        <TouchableOpacity style={styles.upgradeButton} onPress={() => router.push('/paywall')}>
          <Text style={styles.upgradeButtonText}>Upgrade</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Push Notifications</Text>
              <Text style={styles.settingSubtitle}>Session reminders</Text>
            </View>
            <Switch value={notifications} onValueChange={setNotifications} trackColor={{ false: '#E5E7EB', true: '#FCD34D' }} thumbColor={notifications ? '#F59E0B' : '#F9FAFB'} />
          </View>
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Sounds</Text>
              <Text style={styles.settingSubtitle}>Timer completion sounds</Text>
            </View>
            <Switch value={sounds} onValueChange={setSounds} trackColor={{ false: '#E5E7EB', true: '#FCD34D' }} thumbColor={sounds ? '#F59E0B' : '#F9FAFB'} />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Dark Mode</Text>
            </View>
            <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ false: '#E5E7EB', true: '#FCD34D' }} thumbColor={darkMode ? '#F59E0B' : '#F9FAFB'} />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.actionRow} onPress={() => Alert.alert('Restore', 'Restore purchases')}>
            <Text style={styles.actionIcon}>🔄</Text>
            <Text style={styles.actionTitle}>Restore Purchases</Text>
            <Text style={styles.actionArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionRow} onPress={() => Linking.openURL('https://example.com/privacy')}>
            <Text style={styles.actionIcon}>📜</Text>
            <Text style={styles.actionTitle}>Privacy Policy</Text>
            <Text style={styles.actionArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionRow} onPress={() => Linking.openURL('mailto:support@screenpause.app')}>
            <Text style={styles.actionIcon}>💬</Text>
            <Text style={styles.actionTitle}>Contact Support</Text>
            <Text style={styles.actionArrow}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.version}>ScreenPause v1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  content: { padding: 16 },
  profileCard: { backgroundColor: '#fff', borderRadius: 16, padding: 16, flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 28 },
  profileInfo: { flex: 1, marginLeft: 12 },
  profileName: { fontSize: 18, fontWeight: '700', color: '#1F2937' },
  profilePlan: { fontSize: 13, color: '#F59E0B', fontWeight: '600' },
  upgradeButton: { backgroundColor: '#F59E0B', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8 },
  upgradeButtonText: { color: '#fff', fontSize: 14, fontWeight: '700' },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 14, fontWeight: '600', color: '#6B7280', marginBottom: 8, marginLeft: 4 },
  card: { backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden' },
  settingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  settingInfo: { flex: 1 },
  settingTitle: { fontSize: 16, fontWeight: '500', color: '#1F2937' },
  settingSubtitle: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  actionRow: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  actionIcon: { fontSize: 18, marginRight: 12 },
  actionTitle: { flex: 1, fontSize: 16, color: '#1F2937' },
  actionArrow: { fontSize: 24, color: '#9CA3AF' },
  version: { textAlign: 'center', fontSize: 12, color: '#9CA3AF', marginTop: 16, marginBottom: 32 },
});
