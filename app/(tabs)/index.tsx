import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const presets = [
  { id: '15', label: '15 min', icon: '☕' },
  { id: '25', label: '25 min', icon: '🍅' },
  { id: '45', label: '45 min', icon: '💪' },
  { id: '60', label: '1 hour', icon: '🎯' },
];

const categories = [
  { id: 'work', label: 'Work', icon: '💼', color: '#3B82F6' },
  { id: 'study', label: 'Study', icon: '📚', color: '#8B5CF6' },
  { id: 'reading', label: 'Reading', icon: '📖', color: '#10B981' },
  { id: 'creative', label: 'Creative', icon: '🎨', color: '#EC4899' },
  { id: 'fitness', label: 'Fitness', icon: '🏃', color: '#F59E0B' },
  { id: 'mindful', label: 'Mindful', icon: '🧘', color: '#6366F1' },
];

export default function TimerScreen() {
  const router = useRouter();
  const [selectedPreset, setSelectedPreset] = useState('25');
  const [selectedCategory, setSelectedCategory] = useState('work');

  const handleStart = () => {
    router.push(`/timer/${selectedPreset}?category=${selectedCategory}`);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Focus Timer</Text>
        <Text style={styles.subtitle}>Choose duration and start focusing</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Duration</Text>
        <View style={styles.presetsGrid}>
          {presets.map((preset) => (
            <TouchableOpacity
              key={preset.id}
              style={[
                styles.presetCard,
                selectedPreset === preset.id && styles.presetCardSelected,
              ]}
              onPress={() => setSelectedPreset(preset.id)}
            >
              <Text style={styles.presetIcon}>{preset.icon}</Text>
              <Text style={[
                styles.presetLabel,
                selectedPreset === preset.id && styles.presetLabelSelected,
              ]}>
                {preset.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Category</Text>
        <View style={styles.categoryGrid}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[
                styles.categoryCard,
                { borderColor: cat.color },
                selectedCategory === cat.id && { backgroundColor: cat.color },
              ]}
              onPress={() => setSelectedCategory(cat.id)}
            >
              <Text style={styles.categoryIcon}>{cat.icon}</Text>
              <Text style={[
                styles.categoryLabel,
                selectedCategory === cat.id && styles.categoryLabelSelected,
              ]}>
                {cat.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.startButton} onPress={handleStart}>
        <Text style={styles.startButtonText}>Start Focus Session</Text>
      </TouchableOpacity>

      <View style={styles.tipCard}>
        <Text style={styles.tipIcon}>💡</Text>
        <View style={styles.tipContent}>
          <Text style={styles.tipTitle}>Pro Tip</Text>
          <Text style={styles.tipText}>
            Use ScreenPause with friends for accountability. Challenge each other to focus streaks!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  content: { padding: 16 },
  header: { marginBottom: 24, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: '800', color: '#1F2937', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#6B7280' },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1F2937', marginBottom: 12 },
  presetsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  presetCard: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  presetCardSelected: { borderColor: '#F59E0B', backgroundColor: '#FEF3C7' },
  presetIcon: { fontSize: 28, marginBottom: 8 },
  presetLabel: { fontSize: 14, fontWeight: '600', color: '#6B7280' },
  presetLabelSelected: { color: '#F59E0B' },
  categoryGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  categoryCard: {
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    borderWidth: 2,
  },
  categoryIcon: { fontSize: 24, marginBottom: 4 },
  categoryLabel: { fontSize: 11, fontWeight: '600', color: '#6B7280' },
  categoryLabelSelected: { color: '#fff' },
  startButton: {
    backgroundColor: '#F59E0B',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  startButtonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  tipCard: {
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tipIcon: { fontSize: 24, marginRight: 12 },
  tipContent: { flex: 1 },
  tipTitle: { fontSize: 14, fontWeight: '700', color: '#92400E', marginBottom: 2 },
  tipText: { fontSize: 12, color: '#92400E', lineHeight: 18 },
});
