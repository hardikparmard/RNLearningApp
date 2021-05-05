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
import { Text, View, Image, FlatList } from "react-native";
import { styles } from "./App.styles";

const winnersIcon = require("./images/winnersIcon.png");

const Container = View;

const Separator = () => {
  return <View style={styles.separator} />;
};

const Dot = View;

const BandView = View;

const TeamNameView = () => {
  return (
    <Container style={styles.bodyContainer}>
      <Container style={styles.myTeamNameContainer}>
        <Text style={styles.myTeamName}>Punjab Kings</Text>
      </Container>
      <Container style={styles.oppTeamNameContainer}>
        <Text style={styles.oppTeamName}>Delhi Capitals</Text>
      </Container>
    </Container>
  );
};

const TeamView = (props: {
  isHomeTeam: boolean;
  name: string;
  flag: string;
}) => {
  return (
    <Container
      style={[
        styles.teamContainer,
        props.isHomeTeam
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" },
      ]}
    >
      <BandView
        style={props.isHomeTeam ? styles.myTeamBand : styles.oppTeamBand}
      />
      <Image
        style={[
          styles.teamImage,
          props.isHomeTeam ? { marginRight: 8 } : { marginLeft: 8 },
        ]}
        source={{
          uri: props.flag,
        }}
      />
      <Text style={styles.teamShortName}>{props.name}</Text>
    </Container>
  );
};

const TeamDetailView = () => {
  return (
    <Container style={styles.teamsContainer}>
      <TeamView
        isHomeTeam={true}
        name="PBKS"
        flag="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/PBKS-CR1@2x.png"
      />
      <Container style={styles.matchStatusContainer}>
        <Dot style={styles.dot} />
        <Text style={styles.matchStatusText}>COMPLETED</Text>
      </Container>
      <TeamView
        isHomeTeam={false}
        name="DC"
        flag="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DC-CR3@2x.png"
      />
    </Container>
  );
};

const StatView = (props: { value: string; title: string }) => {
  return (
    <Container style={styles.teamCountContainer}>
      <Text style={styles.teamCountValue}>{props.value}</Text>
      <Text style={styles.teamCountText}>{props.title}</Text>
    </Container>
  );
};

const WinningView = () => {
  return (
    <Container style={styles.winningContainer}>
      <Text style={styles.winningText}>You won $234</Text>
      <Image style={styles.cupImage} source={winnersIcon} />
    </Container>
  );
};

const BottomView = () => {
  return (
    <Container style={styles.bottomContainer}>
      <Container style={styles.leftView}>
        <StatView value="3" title="Teams" />
        <StatView value="14" title="Contests" />
      </Container>
      <Container style={styles.rightView}>
        <WinningView />
      </Container>
    </Container>
  );
};

const MatchCard: React.FC<{
  title: string;
}> = ({ title }) => {
  return (
    <Container style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Separator />
      <TeamNameView />
      <TeamDetailView />
      <BottomView />
    </Container>
  );
};

const App = () => {
  const DATA = [
    {
      teamName: "VIVO IPL",
      id: 1,
    },
    {
      teamName: "VIVO IPL",
      id: 2,
    },
    {
      teamName: "VIVO IPL",
      id: 3,
    },
  ];

  return (
    <FlatList
      data={DATA}
      renderItem={(info) => <MatchCard title={info.item.teamName} />}
      keyExtractor={(item) => item.id.toString()}
      contentInsetAdjustmentBehavior="always"
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}
      style={{
        flex: 1,
        paddingVertical: 16,
      }}
    />
  );
};

export default App;
