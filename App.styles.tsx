import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 4,
    marginBottom: 12,
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
    elevation: 5,
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
  teamContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  matchStatusContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  teamImage: {
    height: 30,
    width: 30,
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
