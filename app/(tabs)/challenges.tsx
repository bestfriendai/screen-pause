import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const challenges = [
  { id: '1', title: 'Focus Novice', description: 'Complete 5 focus sessions', progress: 3, target: 5, icon: '🌱', reward: 'Beginner Badge' },
  { id: '2', title: 'Week Warrior', description: 'Maintain a 7-day streak', progress: 5, target: 7, icon: '🔥', reward: 'Warrior Badge' },
  { id: '3', title: 'Deep Work', description: 'Focus for 10 hours total', progress: 7.2, target: 10, unit: 'hrs', icon: '🧠', reward: 'Deep Worker Badge' },
  { id: '4', title: 'Early Bird', description: 'Complete 3 sessions before 9am', progress: 1, target: 3, icon: '🌅', reward: 'Early Bird Badge' },
];

export default function ChallengesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Challenges</Text>
        <Text style={styles.subtitle}>Complete challenges to earn badges</Text>
      </View>

      {challenges.map((challenge) => {
        const progress = Math.min(challenge.progress / challenge.target, 1);
        return (
          <View key={challenge.id} style={styles.challengeCard}>
            <View style={styles.challengeHeader}>
              <View style={styles.challengeIcon}>
                <Text style={styles.challengeIconText}>{challenge.icon}</Text>
              </View>
              <View style={styles.challengeInfo}>
                <Text style={styles.challengeTitle}>{challenge.title}</Text>
                <Text style={styles.challengeDescription}>{challenge.description}</Text>
              </View>
            </View>
            <View style={styles.progressSection}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
              </View>
              <Text style={styles.progressText}>
                {challenge.progress}{challenge.unit || ''} / {challenge.target}{challenge.unit || ''}
              </Text>
            </View>
            <View style={styles.rewardSection}>
              <Text style={styles.rewardLabel}>Reward:</Text>
              <Text style={styles.rewardText}>{challenge.reward}</Text>
            </View>
          </View>
        );
      })}

      <TouchableOpacity style={styles.leaderboardButton}>
        <Text style={styles.leaderboardButtonText}>View Leaderboard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  content: { padding: 16 },
  header: { marginBottom: 24 },
  title: { fontSize: 24, fontWeight: '800', color: '#1F2937', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#6B7280' },
  challengeCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12 },
  challengeHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  challengeIcon: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#FEF3C7', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  challengeIconText: { fontSize: 24 },
  challengeInfo: { flex: 1 },
  challengeTitle: { fontSize: 16, fontWeight: '700', color: '#1F2937', marginBottom: 2 },
  challengeDescription: { fontSize: 13, color: '#6B7280' },
  progressSection: { marginBottom: 8 },
  progressBar: { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4, overflow: 'hidden', marginBottom: 4 },
  progressFill: { height: '100%', backgroundColor: '#F59E0B', borderRadius: 4 },
  progressText: { fontSize: 12, color: '#6B7280', textAlign: 'right' },
  rewardSection: { flexDirection: 'row', alignItems: 'center' },
  rewardLabel: { fontSize: 12, color: '#6B7280', marginRight: 4 },
  rewardText: { fontSize: 12, fontWeight: '600', color: '#F59E0B' },
  leaderboardButton: { backgroundColor: '#F59E0B', borderRadius: 12, paddingVertical: 16, alignItems: 'center', marginTop: 12 },
  leaderboardButtonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
