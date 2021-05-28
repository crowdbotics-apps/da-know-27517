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
        style={styles.ImageBackground_82_226}
      />
      <View style={styles.View_82_227}>
        <View style={styles.View_82_228} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2f/86b9/5281a7c76f38a61d8fd701667f929c55"
          }}
          style={styles.ImageBackground_82_229}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2f/86b9/5281a7c76f38a61d8fd701667f929c55"
          }}
          style={styles.ImageBackground_82_230}
        />
      </View>
      <View style={styles.View_82_231}>
        <View style={styles.View_I82_231_1_4}>
          <View style={styles.View_I82_231_1_5} />
          <View style={styles.View_I82_231_1_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92a5/0a89/5a75434412dfa946273f700061e75d54"
              }}
              style={styles.ImageBackground_I82_231_1_7}
            />
            <View style={styles.View_I82_231_1_10}>
              <Text style={styles.Text_I82_231_1_10}>know</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683d/1dd5/0b78d6057072114e535d11ee79608cfe"
            }}
            style={styles.ImageBackground_I82_231_1_11}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("115_119"))
          }
        >
          <View style={styles.View_I82_231_1_15}>
            <Text style={styles.Text_I82_231_1_15}>Ask the leadership</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("75_1"))
          }
        >
          <View style={styles.View_I82_231_1_14}>
            <Text style={styles.Text_I82_231_1_14}>
              Company Initiative Program
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("74_0"))
          }
        >
          <View style={styles.View_I82_231_1_13}>
            <Text style={styles.Text_I82_231_1_13}>Operations</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("64_1"))
          }
        >
          <View style={styles.View_I82_231_1_12}>
            <Text style={styles.Text_I82_231_1_12}>Sales</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("82_7"))
          }
        >
          <View style={styles.View_I82_231_82_41}>
            <Text style={styles.Text_I82_231_82_41}>Funzone</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_32"))
          }
        >
          <View style={styles.View_I82_231_20_74}>
            <Text style={styles.Text_I82_231_20_74}>Home</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_82_261}>
        <Text style={styles.Text_82_261}>QUIZ</Text>
      </View>
      <View style={styles.View_115_279}>
        <Text style={styles.Text_115_279}>
          This Hong-Kong based company recently introduced a robot that can
          sing, speak, joke, and even make art. What is the name of the company?
        </Text>
      </View>
      <View style={styles.View_115_294}>
        <Text style={styles.Text_115_294}>
          Its a right answer, your score is #48. You are in the FIRST place
          now!!
        </Text>
      </View>
      <View style={styles.View_115_280}>
        <Text style={styles.Text_115_280}>Rethink Robotics</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c303/1a23/9a58c4d29b242bd56cdd42892e1e64b9"
        }}
        style={styles.ImageBackground_115_284}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd1/214f/85d71ec358127bac4cef3918f7973830"
        }}
        style={styles.ImageBackground_115_449}
      />
      <View style={styles.View_115_281}>
        <Text style={styles.Text_115_281}>Grey Orange</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c303/1a23/9a58c4d29b242bd56cdd42892e1e64b9"
        }}
        style={styles.ImageBackground_115_285}
      />
      <View style={styles.View_115_282}>
        <Text style={styles.Text_115_282}>Locus Robotics</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c303/1a23/9a58c4d29b242bd56cdd42892e1e64b9"
        }}
        style={styles.ImageBackground_115_286}
      />
      <View style={styles.View_115_283}>
        <Text style={styles.Text_115_283}>Hanson Robotics</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c303/1a23/9a58c4d29b242bd56cdd42892e1e64b9"
        }}
        style={styles.ImageBackground_115_287}
      />
      <View style={styles.View_115_296}>
        <Text style={styles.Text_115_296}>
          Biswanath - #48 Sri Vidhya - #48 Chandran - #48 Shruti Ajey - #48
          Sachin - #48
        </Text>
      </View>
      <View style={styles.View_115_297}>
        <Text style={styles.Text_115_297}>LEADERBOARD</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dda/f0de/b1d21c0eb2753c626d3ba3413740175a"
        }}
        style={styles.ImageBackground_115_315}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_82_226: {
    width: wp("100%"),
    height: hp("89.44444444444444%"),
    top: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_82_227: {
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
  View_82_228: {
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
  ImageBackground_82_229: {
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
  ImageBackground_82_230: {
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
  View_82_231: {
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
  View_I82_231_1_4: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I82_231_1_5: {
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I82_231_1_6: {
    width: wp("9.728031158447266%"),
    height: hp("5.9722137451171875%"),
    top: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.859375%")
  },
  ImageBackground_I82_231_1_7: {
    width: wp("3.96406352519989%"),
    height: hp("5.9722137451171875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I82_231_1_10: {
    width: wp("5.607700347900391%"),
    top: hp("1.203206380208333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.120330810546875%")
  },
  Text_I82_231_1_10: {
    color: "rgba(18, 19, 19, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I82_231_1_11: {
    width: wp("11.015625%"),
    height: hp("4.583333333333333%"),
    top: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.734375%"),
    resizeMode: "cover"
  },
  View_I82_231_1_15: {
    flexGrow: 1,
    width: wp("10.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.546875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_231_1_15: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_231_1_14: {
    flexGrow: 1,
    width: wp("15.234375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.03125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_231_1_14: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_231_1_13: {
    flexGrow: 1,
    width: wp("6.171875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_231_1_13: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_231_1_12: {
    flexGrow: 1,
    width: wp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.453125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_231_1_12: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_231_82_41: {
    flexGrow: 1,
    width: wp("4.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_231_82_41: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_231_20_74: {
    flexGrow: 1,
    width: wp("3.359375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.296875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_231_20_74: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_261: {
    width: wp("3.515625%"),
    minWidth: wp("3.515625%"),
    minHeight: hp("3.0555555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.328125%"),
    top: hp("19.583333333333332%")
  },
  Text_82_261: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_279: {
    width: wp("87.421875%"),
    minWidth: wp("87.421875%"),
    minHeight: hp("3.888888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.328125%"),
    top: hp("24.86111111111111%")
  },
  Text_115_279: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_294: {
    width: wp("87.421875%"),
    minWidth: wp("87.421875%"),
    minHeight: hp("3.888888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.328125%"),
    top: hp("57.36111111111111%")
  },
  Text_115_294: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_280: {
    width: wp("9.6875%"),
    minWidth: wp("9.6875%"),
    minHeight: hp("2.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.515625%"),
    top: hp("29.72222222222222%")
  },
  Text_115_280: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_115_284: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    height: hp("2.7777777777777777%"),
    minHeight: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.406249999999999%"),
    top: hp("29.86111111111111%")
  },
  ImageBackground_115_449: {
    width: wp("0.9375%"),
    minWidth: wp("0.9375%"),
    height: hp("1.6666666666666667%"),
    minHeight: hp("1.6666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.00000000000001%"),
    top: hp("30.416666666666664%")
  },
  View_115_281: {
    width: wp("9.6875%"),
    minWidth: wp("9.6875%"),
    minHeight: hp("2.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.609375%"),
    top: hp("29.583333333333332%")
  },
  Text_115_281: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_115_285: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    height: hp("2.7777777777777777%"),
    minHeight: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.5%"),
    top: hp("29.86111111111111%")
  },
  View_115_282: {
    width: wp("9.6875%"),
    minWidth: wp("9.6875%"),
    minHeight: hp("2.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.703125%"),
    top: hp("29.72222222222222%")
  },
  Text_115_282: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_115_286: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    height: hp("2.7777777777777777%"),
    minHeight: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.59375%"),
    top: hp("29.86111111111111%")
  },
  View_115_283: {
    width: wp("9.6875%"),
    minWidth: wp("9.6875%"),
    minHeight: hp("2.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.796875%"),
    top: hp("29.72222222222222%")
  },
  Text_115_283: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_115_287: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    height: hp("2.7777777777777777%"),
    minHeight: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.6875%"),
    top: hp("29.86111111111111%")
  },
  View_115_296: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("12.36111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.828125%"),
    top: hp("75.27777777777777%")
  },
  Text_115_296: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_297: {
    width: wp("24.140625%"),
    minWidth: wp("24.140625%"),
    minHeight: hp("2.9166666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.8125%"),
    top: hp("70.83333333333334%")
  },
  Text_115_297: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_115_315: {
    width: wp("24.168226718902588%"),
    height: hp("7.699492772420248%"),
    top: hp("47.638888888888886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
