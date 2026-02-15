import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';

export default function TimerSessionScreen() {
  const { id, category } = useLocalSearchParams<{ id: string; category: string }>();
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(parseInt(id || '25') * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = 1 - timeLeft / (parseInt(id || '25') * 60);

  return (
    <View style={styles.container}>
      <View style={styles.timerCircle}>
        <View style={[styles.progressRing, { transform: [{ rotate: `${progress * 360}deg` }] }]} />
        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
        <Text style={styles.categoryText}>{category || 'Focus'}</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.button, isRunning && styles.pauseButton]}
          onPress={() => setIsRunning(!isRunning)}
        >
          <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stopButton} onPress={() => router.back()}>
          <Text style={styles.stopButtonText}>Stop</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.motivationCard}>
        <Text style={styles.motivationText}>Stay focused! You're doing great! 💪</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1F2937', alignItems: 'center', justifyContent: 'center', padding: 24 },
  timerCircle: { width: 280, height: 280, borderRadius: 140, backgroundColor: '#374151', alignItems: 'center', justifyContent: 'center', marginBottom: 40 },
  progressRing: { position: 'absolute', width: 260, height: 260, borderRadius: 130, borderWidth: 8, borderColor: '#F59E0B', borderTopColor: 'transparent' },
  timerText: { fontSize: 64, fontWeight: '800', color: '#fff' },
  categoryText: { fontSize: 16, color: '#9CA3AF', marginTop: 4 },
  controls: { flexDirection: 'row', gap: 16, marginBottom: 32 },
  button: { backgroundColor: '#F59E0B', borderRadius: 12, paddingHorizontal: 40, paddingVertical: 16 },
  pauseButton: { backgroundColor: '#EF4444' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  stopButton: { backgroundColor: '#374151', borderRadius: 12, paddingHorizontal: 32, paddingVertical: 16 },
  stopButtonText: { color: '#9CA3AF', fontSize: 18, fontWeight: '600' },
  motivationCard: { backgroundColor: '#374151', borderRadius: 12, padding: 16 },
  motivationText: { color: '#fff', fontSize: 14, textAlign: 'center' },
});
