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
        style={styles.ImageBackground_75_16}
      />
      <View style={styles.View_75_17}>
        <View style={styles.View_75_18} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2f/86b9/5281a7c76f38a61d8fd701667f929c55"
          }}
          style={styles.ImageBackground_75_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2f/86b9/5281a7c76f38a61d8fd701667f929c55"
          }}
          style={styles.ImageBackground_75_20}
        />
      </View>
      <View style={styles.View_75_21}>
        <Text style={styles.Text_75_21}>
          Social media campaigns, Flyers, Videos
        </Text>
      </View>
      <View style={styles.View_75_22}>
        <Text style={styles.Text_75_22}>Marketing Update</Text>
      </View>
      <View style={styles.View_75_35}>
        <Text style={styles.Text_75_35}>March 8, 2021</Text>
      </View>
      <View style={styles.View_75_37}>
        <Text style={styles.Text_75_37}>March 8, 2021</Text>
      </View>
      <View style={styles.View_75_39}>
        <Text style={styles.Text_75_39}>March 8, 2021</Text>
      </View>
      <View style={styles.View_75_36}>
        <Text style={styles.Text_75_36}>
          Evalueserve &amp; Qualityline Partnership
        </Text>
      </View>
      <View style={styles.View_75_38}>
        <Text style={styles.Text_75_38}>
          Evalueserve’s Pharma Forecast Application
        </Text>
      </View>
      <View style={styles.View_75_40}>
        <Text style={styles.Text_75_40}>
          Evalueserve’s Pharma Forecast Application
        </Text>
      </View>
      <View style={styles.View_75_33}>
        <Text style={styles.Text_75_33}>
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
      <View style={styles.View_115_118}>
        <View style={styles.View_75_29}>
          <Text style={styles.Text_75_29}>Accelerator Bench Program</Text>
        </View>
        <View style={styles.View_86_291}>
          <Text style={styles.Text_86_291}>
            Coming soon, a global Agile Compliance Framework that provides a
            standardized process to report and control the project management
            and account governance practices. The tool lays down the importance
            of actively managing DA client engagements across different teams
            and geographies. Inputs provided on this tool are the main source of
            information to update the Account Governance Dashboard consumed by
            our senior management to keep track of the accounts performance and
            take informed strategic decisions on time
          </Text>
        </View>
      </View>
      <View style={styles.View_75_34}>
        <Text style={styles.Text_75_34}>Training and Development Update</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dd2/fa39/3f6244bd2df3a20bdd1f27b6884ecd76"
        }}
        style={styles.ImageBackground_75_27}
      />
      <View style={styles.View_82_118}>
        <View style={styles.View_I82_118_1_4}>
          <View style={styles.View_I82_118_1_5} />
          <View style={styles.View_I82_118_1_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92a5/0a89/5a75434412dfa946273f700061e75d54"
              }}
              style={styles.ImageBackground_I82_118_1_7}
            />
            <View style={styles.View_I82_118_1_10}>
              <Text style={styles.Text_I82_118_1_10}>know</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683d/1dd5/0b78d6057072114e535d11ee79608cfe"
            }}
            style={styles.ImageBackground_I82_118_1_11}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("115_119"))
          }
        >
          <View style={styles.View_I82_118_1_15}>
            <Text style={styles.Text_I82_118_1_15}>Ask the leadership</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I82_118_1_14}>
          <Text style={styles.Text_I82_118_1_14}>
            Company Initiative Program
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("74_0"))
          }
        >
          <View style={styles.View_I82_118_1_13}>
            <Text style={styles.Text_I82_118_1_13}>Operations</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("64_1"))
          }
        >
          <View style={styles.View_I82_118_1_12}>
            <Text style={styles.Text_I82_118_1_12}>Sales</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("82_7"))
          }
        >
          <View style={styles.View_I82_118_82_41}>
            <Text style={styles.Text_I82_118_82_41}>Funzone</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_32"))
          }
        >
          <View style={styles.View_I82_118_20_74}>
            <Text style={styles.Text_I82_118_20_74}>Home</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea8c/3b26/da407f5871cdea3ea1d7f8f84ac4926b"
        }}
        style={styles.ImageBackground_115_116}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea8c/3b26/da407f5871cdea3ea1d7f8f84ac4926b"
        }}
        style={styles.ImageBackground_115_117}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_75_16: {
    width: wp("100%"),
    height: hp("89.44444444444444%"),
    top: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_75_17: {
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
  View_75_18: {
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
  ImageBackground_75_19: {
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
  ImageBackground_75_20: {
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
  View_75_21: {
    width: wp("27.968749999999996%"),
    minWidth: wp("27.968749999999996%"),
    minHeight: hp("12.083333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.406249999999999%"),
    top: hp("24.86111111111111%")
  },
  Text_75_21: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_75_22: {
    width: wp("26.640625%"),
    minWidth: wp("26.640625%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("18.47222222222222%")
  },
  Text_75_22: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_75_35: {
    width: wp("7.265625000000001%"),
    minWidth: wp("7.265625000000001%"),
    minHeight: hp("2.361111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.624999999999996%"),
    top: hp("29.02777777777778%")
  },
  Text_75_35: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_75_37: {
    width: wp("7.265625000000001%"),
    minWidth: wp("7.265625000000001%"),
    minHeight: hp("2.361111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.624999999999996%"),
    top: hp("33.88888888888889%")
  },
  Text_75_37: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_75_39: {
    width: wp("7.265625000000001%"),
    minWidth: wp("7.265625000000001%"),
    minHeight: hp("2.361111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.624999999999996%"),
    top: hp("42.083333333333336%")
  },
  Text_75_39: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_75_36: {
    width: wp("27.968749999999996%"),
    minWidth: wp("27.968749999999996%"),
    minHeight: hp("2.361111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("29.02777777777778%")
  },
  Text_75_36: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_75_38: {
    width: wp("18.046875%"),
    minWidth: wp("18.046875%"),
    minHeight: hp("5.416666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("33.88888888888889%")
  },
  Text_75_38: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_75_40: {
    width: wp("18.046875%"),
    minWidth: wp("18.046875%"),
    minHeight: hp("5.416666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("42.083333333333336%")
  },
  Text_75_40: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_75_33: {
    width: wp("25.3125%"),
    minWidth: wp("25.3125%"),
    minHeight: hp("12.083333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.4375%"),
    top: hp("24.86111111111111%")
  },
  Text_75_33: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_118: {
    width: wp("26.640625%"),
    minWidth: wp("26.640625%"),
    height: hp("18.47222222222222%"),
    minHeight: hp("18.47222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.34375%"),
    top: hp("18.47222222222222%")
  },
  View_75_29: {
    width: wp("26.640625%"),
    minWidth: wp("26.640625%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_75_29: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_86_291: {
    width: wp("25.156250000000004%"),
    minWidth: wp("25.156250000000004%"),
    minHeight: hp("12.083333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15625%"),
    top: hp("6.388888888888889%")
  },
  Text_86_291: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_75_34: {
    width: wp("24.140625%"),
    minWidth: wp("24.140625%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.28125%"),
    top: hp("18.47222222222222%")
  },
  Text_75_34: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_75_27: {
    width: wp("25.46875%"),
    minWidth: wp("25.46875%"),
    height: hp("16.25%"),
    minHeight: hp("16.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.28125%"),
    top: hp("57.36111111111111%"),
    resizeMode: "cover"
  },
  View_82_118: {
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
  View_I82_118_1_4: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I82_118_1_5: {
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I82_118_1_6: {
    width: wp("9.728031158447266%"),
    height: hp("5.9722137451171875%"),
    top: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.859375%")
  },
  ImageBackground_I82_118_1_7: {
    width: wp("3.96406352519989%"),
    height: hp("5.9722137451171875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I82_118_1_10: {
    width: wp("5.607700347900391%"),
    top: hp("1.2031724717881946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.120330810546875%")
  },
  Text_I82_118_1_10: {
    color: "rgba(18, 19, 19, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I82_118_1_11: {
    width: wp("11.015625%"),
    height: hp("4.583333333333333%"),
    top: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.734375%"),
    resizeMode: "cover"
  },
  View_I82_118_1_15: {
    flexGrow: 1,
    width: wp("10.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.546875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_118_1_15: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_118_1_14: {
    flexGrow: 1,
    width: wp("15.546874999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.03125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_118_1_14: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_118_1_13: {
    flexGrow: 1,
    width: wp("6.171875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_118_1_13: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_118_1_12: {
    flexGrow: 1,
    width: wp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.453125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_118_1_12: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_118_82_41: {
    flexGrow: 1,
    width: wp("4.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_118_82_41: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_118_20_74: {
    flexGrow: 1,
    width: wp("3.359375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.296875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_118_20_74: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_115_116: {
    width: wp("0.0000017989636091897412%"),
    minWidth: wp("0.0000017989636091897412%"),
    height: hp("74.02777777777779%"),
    minHeight: hp("74.02777777777779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.078125%"),
    top: hp("18.47222222222222%")
  },
  ImageBackground_115_117: {
    width: wp("0.0000017989636091897412%"),
    minWidth: wp("0.0000017989636091897412%"),
    height: hp("74.02777777777779%"),
    minHeight: hp("74.02777777777779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.171875%"),
    top: hp("18.47222222222222%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
