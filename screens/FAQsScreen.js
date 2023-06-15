import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";

const FAQsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
        <Text style={styles.title}>FAQs</Text>
        <Image
          style={{
            width: 40,
            height: 40,
            marginTop: 2,
          }}
          source={require("../assets/bee-128.png")}
        />
      </View>
      <ScrollView>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            Q: How do I place an order for cleaning packages?
          </Text>
          <Text style={styles.answer}>
            A: To place an order for cleaning packages, simply navigate to the
            desired package screen (Cleaning Packages, Laundry Packages, or Dry
            Cleaning Packages), browse through the available options, and select
            the package you want. Then, follow the prompts to provide any
            necessary details and complete the checkout process.
          </Text>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            Q: Can I schedule the cleaning service for a specific date and time?
          </Text>
          <Text style={styles.answer}>
            A: Yes, you can schedule the cleaning service for a specific date
            and time. During the checkout process, you will have the option to
            choose your preferred date and time slot based on availability. Our
            team will make arrangements to ensure the cleaning service is
            performed according to your chosen schedule.
          </Text>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            Q: What is included in the cleaning packages?
          </Text>
          <Text style={styles.answer}>
            A: Our cleaning packages include a comprehensive range of services
            to meet your specific needs. They typically include tasks such as
            dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning,
            and more. You can find detailed information about the specific tasks
            included in each package on the respective package screen.
          </Text>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            Q: How long does a cleaning service typically take?
          </Text>
          <Text style={styles.answer}>
            A: The duration of a cleaning service depends on various factors
            such as the size of your home or space and the specific package you
            choose. Typically, our cleaning services range from 1 to 4 hours.
            However, for larger or more extensive cleaning projects, the
            duration may be longer. Rest assured, our team works efficiently to
            ensure a thorough and timely cleaning experience.
          </Text>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            Q: How do I hire a maid for a month?
          </Text>
          <Text style={styles.answer}>
            A: To hire a maid for a month, navigate to the "Hire for a Month"
            screen and select the desired options. Provide details such as the
            number of hours required per day, the specific tasks you need
            assistance with, and any other relevant information. Once you
            complete the booking process, our team will assign a dedicated maid
            for your specified duration.
          </Text>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            Q: Can I customize the cleaning supplies in my order?
          </Text>
          <Text style={styles.answer}>
            A: Yes, you can customize your order of cleaning supplies. On the
            cleaning supplies product screen, you can select the individual
            items you need and specify the quantity for each item. This way, you
            can tailor your order to include the exact cleaning supplies you
            require.
          </Text>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            Q: How long does it take to receive my cleaning supplies order?
          </Text>
          <Text style={styles.answer}>
            A: We strive to process and deliver your cleaning supplies order as
            quickly as possible. The estimated delivery time depends on various
            factors such as your location and the shipping method chosen.
            Typically, you can expect to receive your order within 2-7 business
            days. You will receive a confirmation email with tracking
            information once your order is shipped.
          </Text>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color : "white",
    backgroundColor : "#088F8F",
    padding : 10,
    borderRadius : 15,
  },
  answer: {
    fontSize: 16,
    lineHeight: 22,
    padding : 10,
    // color : "#088F8F",
  },
});

export default FAQsScreen;
