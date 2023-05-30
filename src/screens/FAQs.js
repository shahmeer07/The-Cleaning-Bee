import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { DARK_GRAY, YELLOW, BLUE } from "../constants/constants";

const questions = [
  {
    id: 1,
    question: "How do I book a maid service through The Cleaning Bee app?",
    answer:
      "To book a maid service, simply download the app from the App Store or Google Play Store. Create an account, browse through our pool of maids, select your preferred cleaning schedule, and proceed with the booking process.",
  },
  {
    id: 2,
    question: "Can I choose a specific maid for my cleaning service?",
    answer:
      "Yes, our app allows you to browse through the profiles of our trusted and experienced maids. You can view their ratings, reviews, and availability to choose the maid that best suits your preferences.",
  },
  {
    id: 3,
    question: "What services are included in a standard cleaning?",
    answer:
      "Our standard cleaning service includes dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning, and general tidying up. You can customize your cleaning requirements and discuss any specific needs with your selected maid.",
  },
  {
    id: 4,
    question: "How does The Cleaning Bee ensure the safety of its customers?",
    answer:
      "We prioritize your safety and peace of mind. Every maid in our network undergoes a rigorous screening process, including background checks, to ensure their reliability and trustworthiness. We take the security of our customers' homes seriously.",
  },
  {
    id: 5,
    question: "Can I reschedule or cancel my cleaning appointment?",
    answer:
      "Yes, you can easily reschedule or cancel your cleaning appointment through the app. We understand that plans can change, and we offer flexibility to accommodate your needs. Please refer to our rescheduling and cancellation policies for any applicable charges.",
  },
  {
    id: 6,
    question:
      "What if I have specific cleaning instructions or areas of focus?",
    answer:
      "During the booking process, you can provide specific cleaning instructions or areas of focus in the app. You can communicate directly with your selected maid to discuss your requirements and ensure they are addressed.",
  },
  {
    id: 7,
    question:
      "Are cleaning supplies and equipment provided by The Cleaning Bee?",
    answer:
      "Our maids come fully equipped with their own cleaning supplies and equipment. You don't need to worry about providing anything. However, if you have specific preferences or requirements, you can discuss them with your maid in advance.",
  },
  {
    id: 8,
    question: "Is The Cleaning Bee available in my area?",
    answer:
      "We strive to expand our services to different areas. You can check the availability of The Cleaning Bee in your specific location by entering your address or ZIP code during the booking process.",
  },
  {
    id: 9,
    question: "How do I provide feedback or report an issue?",
    answer:
      "We value your feedback and are here to assist you. You can provide feedback or report any issues through the app's customer support feature. Our team will promptly address your concerns and ensure your satisfaction.",
  },
];

export default function FAQs() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 45,
          fontWeight: "bold",
          color: DARK_GRAY,
          marginTop: 30,
        }}
      >
        FAQs
      </Text>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        {questions.map((data) => (
          <View style={styles.content}>
            <Text style={styles.head}>{data.question}</Text>
            <Text style={styles.text}>{data.answer}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 25,
  },
  content: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
  },
  head: {
    backgroundColor: BLUE,
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
    color: DARK_GRAY,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 20,
  },
  text: {
    color: DARK_GRAY,
    fontSize: 15,
    margin: 10,
  },
});
