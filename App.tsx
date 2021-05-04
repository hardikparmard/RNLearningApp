/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

const winnersIcon = require("./images/winnersIcon.png");

const Section: React.FC<{
  title: string;
}> = ({ title }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <View style={styles.separator} />

      <View style={styles.bodyContainer}>
        <View style={styles.myTeamNameContainer}>
          <Text style={styles.myTeamName}>Punjab Kings</Text>
        </View>
        <View style={styles.oppTeamNameContainer}>
          <Text style={styles.oppTeamName}>Delhi Capitals</Text>
        </View>
      </View>
      <View style={styles.teamsContainer}>
        <View style={styles.homeTeamContainer}>
          <View style={styles.myTeamBand} />
          <Image
            style={styles.myTeamImage}
            source={{
              uri:
                "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/PBKS-CR1@2x.png",
            }}
          />
          <Text style={styles.teamShortName}>PBKS</Text>
        </View>
        <View style={styles.matchStatusContainer}>
          <View style={styles.dot} />
          <Text style={styles.matchStatusText}>COMPLETED</Text>
        </View>
        <View style={styles.awayTeamContainer}>
          <View style={styles.oppTeamBand} />
          <Image
            style={styles.oppTeamImage}
            source={{
              uri:
                "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DC-CR3@2x.png",
            }}
          />
          <Text style={styles.teamShortName}>DC</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.leftView}>
          <View style={styles.teamCountContainer}>
            <Text style={styles.teamCountValue}>2</Text>
            <Text style={styles.teamCountText}>Teams</Text>
          </View>
          <View style={styles.contestCountContainer}>
            <Text style={styles.teamCountValue}>14</Text>
            <Text style={styles.teamCountText}>Contests</Text>
          </View>
        </View>
        <View style={styles.rightView}>
          <View style={styles.winningContainer}>
            <Text style={styles.winningText}>You won $234</Text>
            <Image style={styles.cupImage} source={winnersIcon} />
          </View>
        </View>
      </View>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Section title="VIVO IPL" />
          <Section title="VIVO IPL" />
          <Section title="VIVO IPL" />
          <Section title="VIVO IPL" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    margin: 16,
    borderRadius: 8,
    borderColor: Colors.black,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  sectionTitle: {
    marginTop: 8,
    marginHorizontal: 12,
    fontSize: 12,
    fontWeight: "400",
    color: "#808080",
  },
  separator: {
    backgroundColor: "#F5F5F5",
    height: 1,
    marginHorizontal: 12,
    marginTop: 8,
  },
  bodyContainer: {
    flexDirection: "row",
    marginHorizontal: 12,
  },
  myTeamNameContainer: {
    marginTop: 8,
    flex: 1,
    alignItems: "flex-start",
  },
  oppTeamNameContainer: {
    marginTop: 8,
    flex: 1,
    alignSelf: "flex-end",
  },
  myTeamName: {
    fontSize: 13,
    fontWeight: "400",
    flex: 1,
    alignItems: "flex-start",
  },
  oppTeamName: {
    fontSize: 13,
    fontWeight: "400",
    flex: 1,
    alignSelf: "flex-end",
  },
  teamsContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 8,
  },
  homeTeamContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  matchStatusContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  awayTeamContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row-reverse",
  },
  teamShortName: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  dot: {
    backgroundColor: "#109E38",
    height: 5,
    width: 5,
    borderRadius: 2.5,
    marginHorizontal: 4,
  },
  matchStatusText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#109E38",
  },
  bottomContainer: {
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    paddingVertical: 8,
    marginTop: 8,
    alignItems: "flex-end",
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
  },
  teamCountContainer: {
    flexDirection: "row",
    marginStart: 12,
    alignItems: "center",
  },
  teamCountValue: {
    fontSize: 13,
    fontWeight: "600",
  },
  teamCountText: {
    fontSize: 13,
    fontWeight: "400",
    color: "#808080",
    marginStart: 2,
  },
  contestCountContainer: {
    flexDirection: "row",
    marginStart: 12,
  },
  winningContainer: {
    flexDirection: "row",
    marginHorizontal: 12,
    alignItems: "flex-end",
  },
  leftView: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
  },
  rightView: {
    alignItems: "flex-end",
    flex: 1,
  },
  myTeamImage: {
    height: 30,
    width: 30,
    marginRight: 8,
  },
  oppTeamImage: {
    height: 30,
    width: 30,
    marginLeft: 8,
  },
  myTeamBand: {
    height: 18,
    width: 22,
    borderTopEndRadius: 9,
    borderBottomEndRadius: 9,
    marginRight: -12,
    marginLeft: -16,
    backgroundColor: "#ffdbb1",
  },
  oppTeamBand: {
    height: 18,
    width: 22,
    borderTopStartRadius: 9,
    borderBottomStartRadius: 9,
    marginLeft: -12,
    marginRight: -16,
    backgroundColor: "#8da4cf",
  },
  cupImage: {
    height: 18,
    width: 18,
    marginRight: -4,
    marginLeft: 4,
  },
  winningText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#109E38",
  },
});

export default App;
