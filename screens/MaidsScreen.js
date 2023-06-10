import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../CartReducer";
const MaidsScreen = () => {
  const [package1Visible, setPackage1Visible] = useState(false);
  const [package2Visible, setPackage2Visible] = useState(false);
  const [package3Visible, setPackage3Visible] = useState(false);
  const package1Name = "Sophia Rodriguez";
  const package2Name = "Emily Chen";
  const package3Name = "Lele Pons";
  const cart = useSelector((state) => state.cart.cart);
  const togglePackage1 = () => {
    setPackage1Visible(!package1Visible);
    setPackage2Visible(false);
    setPackage3Visible(false);
  };

  const togglePackage2 = () => {
    setPackage1Visible(false);
    setPackage2Visible(!package2Visible);
    setPackage3Visible(false);
  };

  const togglePackage3 = () => {
    setPackage1Visible(false);
    setPackage2Visible(false);
    setPackage3Visible(!package3Visible);
  };
  const dispatch = useDispatch();

  const handleAddToCart = (packageId, price, packageName) => {
    dispatch(addToCart({ id: packageId, price, packageName }));
  };
  const handleRemoveFromCart = (packageId) => {
    dispatch(removeFromCart({ id: packageId }));
  };
  const renderPackage1Details = () => {
    if (package1Visible) {
      return (
        <View style={styles.packageDetailsContainer}>
          <Image
            source={{
              uri: "https://w7.pngwing.com/pngs/735/384/png-transparent-maid-service-cleaner-commercial-cleaning-janitor-maid-company-building-service-thumbnail.png",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Sophia is a dedicated and detail-oriented maid with years of
            experience in the cleaning industry. She takes pride in her work and
            goes above and beyond to ensure every corner of your space is
            spotless. With her friendly demeanor and excellent organizational
            skills, Sophia will transform your home into a clean and inviting
            sanctuary.
          </Text>
          {cart.find((item) => item.id === 101000) ? (
            <Pressable
              style={styles.removeButton}
              onPress={() => handleRemoveFromCart(101000)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Remove from Cart"
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.addButton}
              onPress={() => handleAddToCart(101000, 400, "Sophia Rodriguez")}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Add to Cart"
            >
              <Text style={styles.addButtonText}>Add</Text>
            </Pressable>
          )}
        </View>
      );
    }
    return null;
  };

  const renderPackage2Details = () => {
    if (package2Visible) {
      return (
        <View style={styles.packageDetailsContainer}>
          <Image
            source={{
              uri: "https://w7.pngwing.com/pngs/707/89/png-transparent-female-housekeeper-illustration-maid-cleaning-the-maid-smiled-hand-people-cartoon-thumbnail.png",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Meet Emily, a reliable and efficient maid who brings a meticulous
            approach to every cleaning task. With her keen eye for detail, she
            specializes in deep cleaning and is known for tackling even the
            toughest cleaning challenges. Emily's professionalism and commitment
            to delivering outstanding results will leave you impressed and
            satisfied with a sparkling clean environment.
          </Text>
          {cart.find((item) => item.id === 201000) ? (
            <Pressable
              style={styles.removeButton}
              onPress={() => handleRemoveFromCart(201000)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Remove from Cart"
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.addButton}
              onPress={() => handleAddToCart(201000, 600, "Emily Chen")}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Add to Cart"
            >
              <Text style={styles.addButtonText}>Add</Text>
            </Pressable>
          )}
        </View>
      );
    }
    return null;
  };

  const renderPackage3Details = () => {
    if (package3Visible) {
      return (
        <View style={styles.packageDetailsContainer}>
          <Image
            source={{
              uri: "https://w7.pngwing.com/pngs/707/89/png-transparent-female-housekeeper-illustration-maid-cleaning-the-maid-smiled-hand-people-cartoon-thumbnail.png",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Lele is a trustworthy and hardworking maid who understands the
            importance of a clean and well-maintained space. With his strong
            work ethic and friendly nature, he quickly establishes a rapport
            with clients, ensuring their comfort and satisfaction. Lele's
            expertise in organizing and his attention to detail make him the
            perfect choice for creating a tidy and clutter-free home.
          </Text>
          {cart.find((item) => item.id === 301000) ? (
            <Pressable
              style={styles.removeButton}
              onPress={() => handleRemoveFromCart(301000)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Remove from Cart"
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.addButton}
              onPress={() => handleAddToCart(301000, 800, package3Name)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Add to Cart"
            >
              <Text style={styles.addButtonText}>Add</Text>
            </Pressable>
          )}
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Pressable
          style={styles.packageButton}
          onPress={togglePackage1}
          android_ripple={{ color: "#FF9800" }}
          accessibilityLabel="101000"
        >
          <Text style={styles.packageButtonText}>Sophia Rodriguez</Text>
        </Pressable>

        {renderPackage1Details()}

        <Pressable
          style={styles.packageButton}
          onPress={togglePackage2}
          android_ripple={{ color: "#FF9800" }}
          accessibilityLabel="201000"
        >
          <Text style={styles.packageButtonText}>Emily Chen</Text>
        </Pressable>

        {renderPackage2Details()}

        <Pressable
          style={styles.packageButton}
          onPress={togglePackage3}
          android_ripple={{ color: "#FF9800" }}
          accessibilityLabel="301000"
        >
          <Text style={styles.packageButtonText}>Lele Pons</Text>
        </Pressable>

        {renderPackage3Details()}
      </ScrollView>
      <Footer />
    </View>
  );
};

export default MaidsScreen;

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  packageButton: {
    width: windowWidth * 0.8,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  packageButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  packageDetailsContainer: {
    width: windowWidth * 0.8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FF9800",
  },
  packageImage: {
    width: windowWidth * 0.8,
    aspectRatio: 1,
    borderRadius: 10,
  },
  packageText: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "justify",
    color: "#FFF",
    fontFamily: "Lato",
  },
  addButton: {
    width: windowWidth * 0.6,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  addButtonText: {
    color: "#FF9800",
    fontSize: 16,
    fontWeight: "bold",
  },
  removeButton: {
    width: windowWidth * 0.6,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  removeButtonText: {
    color: "#FF9800",
    fontSize: 16,
    fontWeight: "bold",
  },
});
