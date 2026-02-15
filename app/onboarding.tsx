import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const { width } = Dimensions.get('window');
const slides = [
  { icon: '⏱️', title: 'Focus Timer', description: 'Use the Pomodoro technique to stay focused. Set timers for work, study, or any task.' },
  { icon: '📊', title: 'Track Progress', description: 'See your daily, weekly, and monthly focus time. Build streaks and track your improvement.' },
  { icon: '🏆', title: 'Challenge Friends', description: 'Compete with friends on leaderboards. Complete challenges to earn badges and stay accountable.' },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => currentSlide < slides.length - 1 ? setCurrentSlide(currentSlide + 1) : router.replace('/(tabs)');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={() => router.replace('/(tabs)')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <View key={index} style={[styles.slide, { width, transform: [{ translateX: -index * width }] }]}>
            <Text style={styles.icon}>{slide.icon}</Text>
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.description}>{slide.description}</Text>
          </View>
        ))}
      </View>
      <View style={styles.pagination}>
        {slides.map((_, i) => <View key={i} style={[styles.dot, i === currentSlide && styles.activeDot]} />)}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={nextSlide}>
          <Text style={styles.nextButtonText}>{currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F59E0B' },
  skipButton: { position: 'absolute', top: 50, right: 20, zIndex: 10, padding: 8 },
  skipText: { color: 'rgba(255,255,255,0.7)', fontSize: 16, fontWeight: '600' },
  slidesContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  slide: { position: 'absolute', alignItems: 'center', paddingHorizontal: 40 },
  icon: { fontSize: 80, marginBottom: 32 },
  title: { fontSize: 28, fontWeight: '800', color: '#fff', textAlign: 'center', marginBottom: 16 },
  description: { fontSize: 16, color: 'rgba(255,255,255,0.8)', textAlign: 'center', lineHeight: 24 },
  pagination: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: 40 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.3)' },
  activeDot: { backgroundColor: '#fff', width: 24 },
  footer: { paddingHorizontal: 24, paddingBottom: 40 },
  nextButton: { backgroundColor: '#fff', borderRadius: 12, paddingVertical: 16, alignItems: 'center' },
  nextButtonText: { color: '#F59E0B', fontSize: 18, fontWeight: '700' },
});
