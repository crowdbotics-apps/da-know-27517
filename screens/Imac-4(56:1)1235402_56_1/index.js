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
        style={styles.ImageBackground_56_18}
      />
      <View style={styles.View_56_107}>
        <View style={styles.View_56_63} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2f/86b9/5281a7c76f38a61d8fd701667f929c55"
          }}
          style={styles.ImageBackground_56_106}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2f/86b9/5281a7c76f38a61d8fd701667f929c55"
          }}
          style={styles.ImageBackground_56_108}
        />
      </View>
      <View style={styles.View_56_44}>
        <Text style={styles.Text_56_44}>
          Swapnil Srivatsava - Global Head of Analytics says...
        </Text>
      </View>
      <View style={styles.View_56_45}>
        <Text style={styles.Text_56_45}>
          As digital marketing reaches across industries and sectors, especially
          in B2B businesses as B2C business have embraced this for quite some
          time, more and more companies are using digital technologies to
          achieve specific objectives. However if countless organizations are
          incorporating technology into their processes, then why are only 1/3
          of digital initiatives achieving success in improving and sustaining a
          company’s overall performance? What can organizations do to create a
          successful digital marketing transformation? Building a digital
          marketing strategy is more than just adopting various use cases.
          Developing a robust strategy ensures that your technology is being
          used to achieve specific business, brand or marketing objectives.
          Regardless of industry, companies are finding that investing in
          long-term digital marketing strategies can bring benefits to their
          organization. Technology has proved itself time and time again that it
          is not just a passing fad, but a concrete investment for organizations
          of any size and industry. However, the hardest thing to do is start
          the digital marketing journey. Some good questions to ask yourself is:
          Where are you right now? Reviewing your current digital marketing
          efforts and solutions can help you understand where you are on your
          digital marketing journey. You can start this step by reviewing
          consumer insights, which helps you begin to map and identify gaps in
          your customer journey. Then, you can undertake a competitive audit.
          Where do you need to be? Creating and aligning your digital marketing
          strategy will help you ensure that your digital marketing journey will
          be precise and purposeful. Incorporating technology into your
          organization is more than just adding a couple use cases. How will you
          measure the impact? ROI is one of the most grating terms heard in
          meetings. When you request additional budgets for building a new
          capability  or for working on a new use case, would you ever invest
          without thinking of returns? No. Ensuring that your digital marketing
          journey brings impact and success to your organization, regardless of
          which step you are on, will ensure that there will be no wasted
          efforts.
        </Text>
      </View>
      <View style={styles.View_56_47}>
        <View style={styles.View_56_49}>
          <Text style={styles.Text_56_49}>Leadership message</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/c133/b2e06e085daff46ede5d83ebcc2ce0bf"
          }}
          style={styles.ImageBackground_56_50}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e46d/acfb/380a567239b5de0c05cf15a64e8ac418"
        }}
        style={styles.ImageBackground_56_67}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac22/1f3e/cd4f37edc12a6668f68464d144fd4df4"
        }}
        style={styles.ImageBackground_56_69}
      />
      <View style={styles.View_82_73}>
        <View style={styles.View_I82_73_1_4}>
          <View style={styles.View_I82_73_1_5} />
          <View style={styles.View_I82_73_1_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92a5/0a89/5a75434412dfa946273f700061e75d54"
              }}
              style={styles.ImageBackground_I82_73_1_7}
            />
            <View style={styles.View_I82_73_1_10}>
              <Text style={styles.Text_I82_73_1_10}>know</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683d/1dd5/0b78d6057072114e535d11ee79608cfe"
            }}
            style={styles.ImageBackground_I82_73_1_11}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("115_119"))
          }
        >
          <View style={styles.View_I82_73_1_15}>
            <Text style={styles.Text_I82_73_1_15}>Ask the leadership</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("75_1"))
          }
        >
          <View style={styles.View_I82_73_1_14}>
            <Text style={styles.Text_I82_73_1_14}>
              Company Initiative Program
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("74_0"))
          }
        >
          <View style={styles.View_I82_73_1_13}>
            <Text style={styles.Text_I82_73_1_13}>Operations</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("64_1"))
          }
        >
          <View style={styles.View_I82_73_1_12}>
            <Text style={styles.Text_I82_73_1_12}>Sales</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("82_7"))
          }
        >
          <View style={styles.View_I82_73_82_41}>
            <Text style={styles.Text_I82_73_82_41}>Funzone</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_32"))
          }
        >
          <View style={styles.View_I82_73_20_74}>
            <Text style={styles.Text_I82_73_20_74}>Home</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_56_18: {
    width: wp("100%"),
    height: hp("89.44444444444444%"),
    top: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_56_107: {
    width: wp("93.203125%"),
    minWidth: wp("93.203125%"),
    height: hp("81.80555555555556%"),
    minHeight: hp("81.80555555555556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4375000000000004%"),
    top: hp("13.88888888888889%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_56_63: {
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
  ImageBackground_56_106: {
    width: wp("31.640625%"),
    minWidth: wp("31.640625%"),
    height: hp("56.388888888888886%"),
    minHeight: hp("56.388888888888886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11.093750000000002%"),
    top: hp("47.5%"),
    resizeMode: "cover"
  },
  ImageBackground_56_108: {
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
  View_56_44: {
    width: wp("55.859375%"),
    minWidth: wp("55.859375%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.890625000000004%"),
    top: hp("17.916666666666668%")
  },
  Text_56_44: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_45: {
    width: wp("60.390625%"),
    minWidth: wp("60.390625%"),
    minHeight: hp("62.638888888888886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.890625000000004%"),
    top: hp("23.88888888888889%")
  },
  Text_56_45: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_47: {
    width: wp("15.46875%"),
    minWidth: wp("15.46875%"),
    height: hp("29.72222222222222%"),
    minHeight: hp("29.72222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("18.055555555555554%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_56_49: {
    width: wp("15.46875%"),
    minWidth: wp("15.46875%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_56_49: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_56_50: {
    width: wp("9.140625%"),
    minWidth: wp("9.140625%"),
    height: hp("16.25%"),
    minHeight: hp("16.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.359375%"),
    top: hp("6.666666666666668%"),
    resizeMode: "cover",
    borderTopLeftRadius: 123.5,
    borderTopRightRadius: 123.5,
    borderBottomLeftRadius: 123.5,
    borderBottomRightRadius: 123.5
  },
  ImageBackground_56_67: {
    width: wp("2.96875%"),
    height: hp("10.833333333333334%"),
    top: hp("15.694444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.4375%")
  },
  ImageBackground_56_69: {
    width: wp("3.2031249999999996%"),
    height: hp("11.666666666666666%"),
    top: hp("77.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.21875%")
  },
  View_82_73: {
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
  View_I82_73_1_4: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I82_73_1_5: {
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I82_73_1_6: {
    width: wp("9.728031158447266%"),
    height: hp("5.9722137451171875%"),
    top: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.859375%")
  },
  ImageBackground_I82_73_1_7: {
    width: wp("3.96406352519989%"),
    height: hp("5.9722137451171875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I82_73_1_10: {
    width: wp("5.607700347900391%"),
    top: hp("1.2031724717881946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.120330810546875%")
  },
  Text_I82_73_1_10: {
    color: "rgba(18, 19, 19, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I82_73_1_11: {
    width: wp("11.015625%"),
    height: hp("4.583333333333333%"),
    top: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.734375%"),
    resizeMode: "cover"
  },
  View_I82_73_1_15: {
    flexGrow: 1,
    width: wp("10.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.546875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_73_1_15: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_73_1_14: {
    flexGrow: 1,
    width: wp("15.234375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.03125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_73_1_14: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_73_1_13: {
    flexGrow: 1,
    width: wp("6.171875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_73_1_13: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_73_1_12: {
    flexGrow: 1,
    width: wp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.453125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_73_1_12: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_73_82_41: {
    flexGrow: 1,
    width: wp("4.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_73_82_41: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_73_20_74: {
    flexGrow: 1,
    width: wp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.296875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_73_20_74: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 13,
    fontWeight: "700",
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
