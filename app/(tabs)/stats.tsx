import { View, Text, StyleSheet, ScrollView } from 'react-native';

const mockStats = {
  todayMinutes: 45,
  weekMinutes: 180,
  monthMinutes: 720,
  streak: 5,
  sessions: 28,
  longestStreak: 12,
};

const mockHistory = [
  { id: '1', category: 'Work', duration: 25, date: 'Today' },
  { id: '2', category: 'Reading', duration: 15, date: 'Today' },
  { id: '3', category: 'Study', duration: 45, date: 'Yesterday' },
  { id: '4', category: 'Work', duration: 25, date: 'Yesterday' },
  { id: '5', category: 'Mindful', duration: 30, date: '2 days ago' },
];

const categoryIcons: Record<string, string> = {
  Work: '💼', Study: '📚', Reading: '📖', Creative: '🎨', Fitness: '🏃', Mindful: '🧘',
};

export default function StatsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{mockStats.todayMinutes}</Text>
          <Text style={styles.statLabel}>Today (min)</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{mockStats.streak}</Text>
          <Text style={styles.statLabel}>Day Streak 🔥</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{mockStats.sessions}</Text>
          <Text style={styles.statLabel}>Sessions</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{mockStats.weekMinutes}</Text>
          <Text style={styles.statLabel}>This Week</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Sessions</Text>
        {mockHistory.map((session) => (
          <View key={session.id} style={styles.sessionCard}>
            <View style={styles.sessionIcon}>
              <Text>{categoryIcons[session.category] || '⏱️'}</Text>
            </View>
            <View style={styles.sessionInfo}>
              <Text style={styles.sessionCategory}>{session.category}</Text>
              <Text style={styles.sessionDate}>{session.date}</Text>
            </View>
            <Text style={styles.sessionDuration}>{session.duration} min</Text>
          </View>
        ))}
      </View>

      <View style={styles.achievementCard}>
        <Text style={styles.achievementTitle}>🏆 Achievement Unlocked!</Text>
        <Text style={styles.achievementText}>5-day streak! Keep it up!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  content: { padding: 16 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 24 },
  statCard: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statNumber: { fontSize: 32, fontWeight: '800', color: '#F59E0B', marginBottom: 4 },
  statLabel: { fontSize: 12, color: '#6B7280' },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#1F2937', marginBottom: 12 },
  sessionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sessionIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  sessionInfo: { flex: 1 },
  sessionCategory: { fontSize: 15, fontWeight: '600', color: '#1F2937' },
  sessionDate: { fontSize: 12, color: '#6B7280' },
  sessionDuration: { fontSize: 14, fontWeight: '700', color: '#F59E0B' },
  achievementCard: { backgroundColor: '#FEF3C7', borderRadius: 12, padding: 16, alignItems: 'center' },
  achievementTitle: { fontSize: 16, fontWeight: '700', color: '#92400E', marginBottom: 4 },
  achievementText: { fontSize: 14, color: '#92400E' },
});
