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
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("40_0"))
        }
      >
        <View style={styles.View_4_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c30/fdbb/7229bb4566f4f730c29495a4264ae2dc"
            }}
            style={styles.ImageBackground_27_5}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dca/6df3/f16b8a5e62044bb59c769fb2b7702185"
            }}
            style={styles.ImageBackground_1_34}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5c6/82d4/1590b37160e1b081f276c13b0d9a3918"
            }}
            style={styles.ImageBackground_4_1}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bf1/f157/20b5899daf1a7ede6b93401f593a4afb"
            }}
            style={styles.ImageBackground_4_0}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_20_10}>
        <View style={styles.View_20_21}>
          <View style={styles.View_20_5}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac17/4c10/5e3d20c227c3d24e20666adddb223b2a"
              }}
              style={styles.ImageBackground_18_0}
            />
            <View style={styles.View_18_1}>
              <Text style={styles.Text_18_1}>2021</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_20_20}>
          <View style={styles.View_18_2}>
            <Text style={styles.Text_18_2}>
              Swapnil Srivastava (Global Head of Analytics) One of the top 40
              Data Scientists under 40 in India by Analytics India Magazine
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_20_9}>
        <View style={styles.View_20_19}>
          <View style={styles.View_20_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac17/4c10/5e3d20c227c3d24e20666adddb223b2a"
              }}
              style={styles.ImageBackground_18_5}
            />
            <View style={styles.View_18_6}>
              <Text style={styles.Text_18_6}>2020</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_20_18}>
          <View style={styles.View_18_7}>
            <Text style={styles.Text_18_7}>
              Evalueserve’s Usecasehub identified as one of the top 10 Data
              Science products built  in India, by Analytics India Magazine{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_20_8}>
        <View style={styles.View_20_17}>
          <View style={styles.View_20_7}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac17/4c10/5e3d20c227c3d24e20666adddb223b2a"
              }}
              style={styles.ImageBackground_18_10}
            />
            <View style={styles.View_18_11}>
              <Text style={styles.Text_18_11}>2019</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_20_16}>
          <View style={styles.View_18_12}>
            <Text style={styles.Text_18_12}>
              Evalueserve recognized as one of the 11 Best Firms In India for
              Data Scientists to work for, by Analytics India Magazine in 2020
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_20_15}>
        <View style={styles.View_20_1}>
          <View style={styles.View_18_20}>
            <Text style={styles.Text_18_20}>
              Swapnil Srivatsava - Global Head of Analytics
            </Text>
          </View>
          <View style={styles.View_18_21}>
            <Text style={styles.Text_18_21}>
              “ As digital marketing reaches across industries and sectors,
              especially in B2B businesses as B2C business have embraced this
              for quite some time, more and more companies are using digital
              technologies to achieve specific objectives. However if countless
              organizations are incorporating technology into their processes,
              then why are only 1/3 of digital initiatives achieving success in
              improving and sustaining a company’s overall performance? What can
              organizations do to create a successful ......{" "}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("56_1"))
            }
          >
            <View style={styles.View_20_0}>
              <Text style={styles.Text_20_0}>Read more</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_20_14}>
        <View style={styles.View_20_2}>
          <View style={styles.View_18_17}>
            <Text style={styles.Text_18_17}>Leadership message</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/c133/b2e06e085daff46ede5d83ebcc2ce0bf"
            }}
            style={styles.ImageBackground_18_19}
          />
        </View>
      </View>
      <View style={styles.View_20_12}>
        <View style={styles.View_20_3}>
          <View style={styles.View_4_7}>
            <Text style={styles.Text_4_7}>nalytics</Text>
          </View>
          <View style={styles.View_4_8}>
            <Text style={styles.Text_4_8}>ustomer</Text>
          </View>
          <View style={styles.View_4_9}>
            <Text style={styles.Text_4_9}>nsights &amp;</Text>
          </View>
          <View style={styles.View_4_10}>
            <Text style={styles.Text_4_10}>ata</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_20_13}>
        <View style={styles.View_4_5}>
          <View style={styles.View_1_27}>
            <Text style={styles.Text_1_27}>A</Text>
          </View>
          <View style={styles.View_1_28}>
            <Text style={styles.Text_1_28}>C</Text>
          </View>
          <View style={styles.View_1_29}>
            <Text style={styles.Text_1_29}>I</Text>
          </View>
          <View style={styles.View_1_30}>
            <Text style={styles.Text_1_30}>D</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_82_58}>
        <View style={styles.View_I82_58_1_4}>
          <View style={styles.View_I82_58_1_5} />
          <View style={styles.View_I82_58_1_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92a5/0a89/5a75434412dfa946273f700061e75d54"
              }}
              style={styles.ImageBackground_I82_58_1_7}
            />
            <View style={styles.View_I82_58_1_10}>
              <Text style={styles.Text_I82_58_1_10}>know</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683d/1dd5/0b78d6057072114e535d11ee79608cfe"
            }}
            style={styles.ImageBackground_I82_58_1_11}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("115_119"))
          }
        >
          <View style={styles.View_I82_58_1_15}>
            <Text style={styles.Text_I82_58_1_15}>Ask the leadership</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("75_1"))
          }
        >
          <View style={styles.View_I82_58_1_14}>
            <Text style={styles.Text_I82_58_1_14}>
              Company Initiative Program
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("74_0"))
          }
        >
          <View style={styles.View_I82_58_1_13}>
            <Text style={styles.Text_I82_58_1_13}>Operations</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("64_1"))
          }
        >
          <View style={styles.View_I82_58_1_12}>
            <Text style={styles.Text_I82_58_1_12}>Sales</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("82_7"))
          }
        >
          <View style={styles.View_I82_58_82_41}>
            <Text style={styles.Text_I82_58_82_41}>Funzone</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I82_58_20_74}>
          <Text style={styles.Text_I82_58_20_74}>Home</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_4_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("89.44444444444444%"),
    minHeight: hp("89.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.555555555555555%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_27_5: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("118.88888888888889%"),
    minHeight: hp("118.88888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1_34: {
    width: wp("100%"),
    height: hp("89.44444444444444%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1: {
    width: wp("16.5625%"),
    minWidth: wp("16.5625%"),
    height: hp("16.25%"),
    minHeight: hp("16.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.4375%"),
    top: hp("21.944444444444443%")
  },
  ImageBackground_4_0: {
    width: wp("28.671875000000004%"),
    minWidth: wp("28.671875000000004%"),
    height: hp("47.77777777777778%"),
    minHeight: hp("47.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.734375%"),
    top: hp("3.6111111111111107%")
  },
  View_20_10: {
    width: wp("27.265625%"),
    minWidth: wp("27.265625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.21875%"),
    top: hp("21.805555555555557%")
  },
  View_20_21: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_20_5: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_18_0: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_18_1: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4843749999999964%"),
    top: hp("2.9166666666666643%")
  },
  Text_18_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_20: {
    width: wp("20.46875%"),
    minWidth: wp("20.46875%"),
    height: hp("7.222222222222221%"),
    minHeight: hp("7.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.796875%"),
    top: hp("0.6944444444444429%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_18_2: {
    width: wp("23.046875%"),
    minWidth: wp("23.046875%"),
    minHeight: hp("7.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_18_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_9: {
    width: wp("27.265625%"),
    minWidth: wp("27.265625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.21875%"),
    top: hp("33.33333333333333%")
  },
  View_20_19: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_20_6: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_18_5: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_18_6: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4843749999999964%"),
    top: hp("2.9166666666666714%")
  },
  Text_18_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_18: {
    width: wp("20.46875%"),
    minWidth: wp("20.46875%"),
    height: hp("7.222222222222221%"),
    minHeight: hp("7.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.796875%"),
    top: hp("0.5555555555555642%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_18_7: {
    width: wp("22.890625%"),
    minWidth: wp("22.890625%"),
    minHeight: hp("7.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_18_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_8: {
    width: wp("27.265625%"),
    minWidth: wp("27.265625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.21875%"),
    top: hp("44.861111111111114%")
  },
  View_20_17: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_20_7: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_18_10: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_18_11: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4843749999999964%"),
    top: hp("2.9166666666666643%")
  },
  Text_18_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_16: {
    width: wp("20.46875%"),
    minWidth: wp("20.46875%"),
    height: hp("7.222222222222221%"),
    minHeight: hp("7.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.796875%"),
    top: hp("0.55555555555555%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_18_12: {
    width: wp("23.359375%"),
    minWidth: wp("23.359375%"),
    minHeight: hp("7.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_18_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_15: {
    width: wp("65.703125%"),
    minWidth: wp("65.703125%"),
    height: hp("19.166666666666668%"),
    minHeight: hp("19.166666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.21875%"),
    top: hp("69.02777777777777%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_20_1: {
    width: wp("65.703125%"),
    minWidth: wp("65.703125%"),
    height: hp("19.166666666666668%"),
    minHeight: hp("19.166666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_18_20: {
    width: wp("35.78125%"),
    minWidth: wp("35.78125%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_18_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_21: {
    width: wp("65.703125%"),
    minWidth: wp("65.703125%"),
    minHeight: hp("12.36111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.805555555555557%")
  },
  Text_18_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_0: {
    width: wp("65.703125%"),
    minWidth: wp("65.703125%"),
    minHeight: hp("2.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.527777777777786%")
  },
  Text_20_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_14: {
    width: wp("15.46875%"),
    minWidth: wp("15.46875%"),
    height: hp("23.47222222222222%"),
    minHeight: hp("23.47222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.328125%"),
    top: hp("69.02777777777777%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_20_2: {
    width: wp("15.46875%"),
    minWidth: wp("15.46875%"),
    height: hp("23.47222222222222%"),
    minHeight: hp("23.47222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_18_17: {
    width: wp("15.46875%"),
    minWidth: wp("15.46875%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.16666666666667%")
  },
  Text_18_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_18_19: {
    width: wp("9.140625%"),
    minWidth: wp("9.140625%"),
    height: hp("16.25%"),
    minHeight: hp("16.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.359375%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 123.5,
    borderTopRightRadius: 123.5,
    borderBottomLeftRadius: 123.5,
    borderBottomRightRadius: 123.5
  },
  View_20_12: {
    width: wp("22.03125%"),
    minWidth: wp("22.03125%"),
    height: hp("34.166666666666664%"),
    minHeight: hp("34.166666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.203125%"),
    top: hp("19.583333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_20_3: {
    width: wp("21.953125%"),
    minWidth: wp("21.953125%"),
    height: hp("34.166666666666664%"),
    minHeight: hp("34.166666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_7: {
    width: wp("20.546875%"),
    minWidth: wp("20.546875%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.40625%"),
    top: hp("25.416666666666668%")
  },
  Text_4_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_8: {
    width: wp("20.546875%"),
    minWidth: wp("20.546875%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.40625%"),
    top: hp("0%")
  },
  Text_4_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_9: {
    width: wp("20.546875%"),
    minWidth: wp("20.546875%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.472222222222225%")
  },
  Text_4_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_10: {
    width: wp("20.546875%"),
    minWidth: wp("20.546875%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.40625%"),
    top: hp("16.944444444444446%")
  },
  Text_4_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_13: {
    width: wp("3.9843749999999996%"),
    minWidth: wp("3.9843749999999996%"),
    height: hp("34.166666666666664%"),
    minHeight: hp("34.166666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.171875%"),
    top: hp("20.694444444444443%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_5: {
    width: wp("4.53125%"),
    minWidth: wp("4.53125%"),
    height: hp("34.166666666666664%"),
    minHeight: hp("34.166666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.546875%"),
    top: hp("0%")
  },
  View_1_27: {
    width: wp("3.9843749999999996%"),
    minWidth: wp("3.9843749999999996%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.546875%"),
    top: hp("25.41666666666667%")
  },
  Text_1_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_28: {
    width: wp("3.9843749999999996%"),
    minWidth: wp("3.9843749999999996%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.546875%"),
    top: hp("0%")
  },
  Text_1_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_29: {
    width: wp("3.9843749999999996%"),
    minWidth: wp("3.9843749999999996%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.472222222222225%")
  },
  Text_1_29: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_30: {
    width: wp("3.9843749999999996%"),
    minWidth: wp("3.9843749999999996%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.546875%"),
    top: hp("16.944444444444443%")
  },
  Text_1_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_58: {
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
  View_I82_58_1_4: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I82_58_1_5: {
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I82_58_1_6: {
    width: wp("9.728031158447266%"),
    height: hp("5.9722137451171875%"),
    top: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.859375%")
  },
  ImageBackground_I82_58_1_7: {
    width: wp("3.96406352519989%"),
    height: hp("5.9722137451171875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I82_58_1_10: {
    width: wp("5.607700347900391%"),
    top: hp("1.2031724717881946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.120330810546875%")
  },
  Text_I82_58_1_10: {
    color: "rgba(18, 19, 19, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I82_58_1_11: {
    width: wp("11.015625%"),
    height: hp("4.583333333333333%"),
    top: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.734375%"),
    resizeMode: "cover"
  },
  View_I82_58_1_15: {
    flexGrow: 1,
    width: wp("10.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.546875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_58_1_15: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_58_1_14: {
    flexGrow: 1,
    width: wp("15.234375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.03125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_58_1_14: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_58_1_13: {
    flexGrow: 1,
    width: wp("6.171875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_58_1_13: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_58_1_12: {
    flexGrow: 1,
    width: wp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.453125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_58_1_12: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_58_82_41: {
    flexGrow: 1,
    width: wp("4.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_58_82_41: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_58_20_74: {
    flexGrow: 1,
    width: wp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.296875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_58_20_74: {
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
