import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dca/6df3/f16b8a5e62044bb59c769fb2b7702185"
        }}
        style={styles.ImageBackground_74_15}
      />
      <View style={styles.View_74_16}>
        <View style={styles.View_74_17} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2f/86b9/5281a7c76f38a61d8fd701667f929c55"
          }}
          style={styles.ImageBackground_74_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2f/86b9/5281a7c76f38a61d8fd701667f929c55"
          }}
          style={styles.ImageBackground_74_19}
        />
      </View>
      <View style={styles.View_74_20}>
        <Text style={styles.Text_74_20}>
          Coming soon, a global Agile Compliance Framework that provides a
          standardized process to report and control the project management and
          account governance practices. The tool lays down the importance of
          actively managing DA client engagements across different teams and
          geographies. Inputs provided on this tool are the main source of
          information to update the Account Governance Dashboard consumed by our
          senior management to keep track of the accounts performance and take
          informed strategic decisions on time
        </Text>
      </View>
      <View style={styles.View_74_38}>
        <Text style={styles.Text_74_38}>
          Agile framework - &quot;Coming Soon&quot;
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12a1/adb6/48912d669fff128055a7c3e51049c2be"
        }}
        style={styles.ImageBackground_82_0}
      />
      <View style={styles.View_82_103}>
        <View style={styles.View_I82_103_1_4}>
          <View style={styles.View_I82_103_1_5} />
          <View style={styles.View_I82_103_1_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92a5/0a89/5a75434412dfa946273f700061e75d54"
              }}
              style={styles.ImageBackground_I82_103_1_7}
            />
            <View style={styles.View_I82_103_1_10}>
              <Text style={styles.Text_I82_103_1_10}>know</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683d/1dd5/0b78d6057072114e535d11ee79608cfe"
            }}
            style={styles.ImageBackground_I82_103_1_11}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("115_119"))
          }
        >
          <View style={styles.View_I82_103_1_15}>
            <Text style={styles.Text_I82_103_1_15}>Ask the leadership</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("75_1"))
          }
        >
          <View style={styles.View_I82_103_1_14}>
            <Text style={styles.Text_I82_103_1_14}>
              Company Initiative Program
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I82_103_1_13}>
          <Text style={styles.Text_I82_103_1_13}>Operations</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("64_1"))
          }
        >
          <View style={styles.View_I82_103_1_12}>
            <Text style={styles.Text_I82_103_1_12}>Sales</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("82_7"))
          }
        >
          <View style={styles.View_I82_103_82_41}>
            <Text style={styles.Text_I82_103_82_41}>Funzone</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_32"))
          }
        >
          <View style={styles.View_I82_103_20_74}>
            <Text style={styles.Text_I82_103_20_74}>Home</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_74_15: {
    width: wp("100%"),
    height: hp("89.44444444444444%"),
    top: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_74_16: {
    width: wp("93.203125%"),
    minWidth: wp("93.203125%"),
    height: hp("81.80555555555556%"),
    minHeight: hp("81.80555555555556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.359375%"),
    top: hp("14.305555555555555%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_74_17: {
    width: wp("93.203125%"),
    minWidth: wp("93.203125%"),
    height: hp("81.80555555555556%"),
    minHeight: hp("81.80555555555556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_74_18: {
    width: wp("31.640625%"),
    minWidth: wp("31.640625%"),
    height: hp("56.388888888888886%"),
    minHeight: hp("56.388888888888886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11.09375%"),
    top: hp("47.5%"),
    resizeMode: "cover"
  },
  ImageBackground_74_19: {
    width: wp("31.640625%"),
    minWidth: wp("31.640625%"),
    height: hp("56.388888888888886%"),
    minHeight: hp("56.388888888888886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.359375%"),
    top: hp("-13.333333333333334%"),
    resizeMode: "cover"
  },
  View_74_20: {
    width: wp("87.34375%"),
    minWidth: wp("87.34375%"),
    minHeight: hp("12.083333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.406249999999999%"),
    top: hp("24.86111111111111%")
  },
  Text_74_20: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_74_38: {
    width: wp("26.640625%"),
    minWidth: wp("26.640625%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("18.47222222222222%")
  },
  Text_74_38: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_0: {
    width: wp("84.453125%"),
    minWidth: wp("84.453125%"),
    height: hp("38.88888888888889%"),
    minHeight: hp("38.88888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.59375%"),
    top: hp("42.36111111111111%"),
    resizeMode: "cover"
  },
  View_82_103: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.555555555555555%"),
    minHeight: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I82_103_1_4: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I82_103_1_5: {
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I82_103_1_6: {
    width: wp("9.728031158447266%"),
    height: hp("5.9722137451171875%"),
    top: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.859375%")
  },
  ImageBackground_I82_103_1_7: {
    width: wp("3.96406352519989%"),
    height: hp("5.9722137451171875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I82_103_1_10: {
    width: wp("5.607700347900391%"),
    top: hp("1.2031724717881946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.120330810546875%")
  },
  Text_I82_103_1_10: {
    color: "rgba(18, 19, 19, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I82_103_1_11: {
    width: wp("11.015625%"),
    height: hp("4.583333333333333%"),
    top: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.734375%"),
    resizeMode: "cover"
  },
  View_I82_103_1_15: {
    flexGrow: 1,
    width: wp("10.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.546875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_103_1_15: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_103_1_14: {
    flexGrow: 1,
    width: wp("15.234375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.03125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_103_1_14: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_103_1_13: {
    flexGrow: 1,
    width: wp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_103_1_13: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_103_1_12: {
    flexGrow: 1,
    width: wp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.453125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_103_1_12: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_103_82_41: {
    flexGrow: 1,
    width: wp("4.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_103_82_41: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_103_20_74: {
    flexGrow: 1,
    width: wp("3.359375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.296875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_103_20_74: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
