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
          this.props.navigation.navigate(getNavigationScreen("1_32"))
        }
      >
        <View style={styles.View_40_15}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c30/fdbb/7229bb4566f4f730c29495a4264ae2dc"
            }}
            style={styles.ImageBackground_40_16}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dca/6df3/f16b8a5e62044bb59c769fb2b7702185"
            }}
            style={styles.ImageBackground_40_17}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b264/28e9/63777e08289583807cc65645d05d42a7"
            }}
            style={styles.ImageBackground_40_18}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_40_19}>
        <View style={styles.View_40_20}>
          <View style={styles.View_40_21}>
            <View style={styles.View_40_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac17/4c10/5e3d20c227c3d24e20666adddb223b2a"
                }}
                style={styles.ImageBackground_40_23}
              />
              <View style={styles.View_40_24}>
                <Text style={styles.Text_40_24}>2021</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_40_25}>
            <View style={styles.View_40_26}>
              <Text style={styles.Text_40_26}>
                Swapnil Srivastava (Global Head of Analytics) One of the top 40
                Data Scientists under 40 in India by Analytics India Magazine
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_40_27}>
        <View style={styles.View_40_28}>
          <View style={styles.View_40_29}>
            <View style={styles.View_40_30}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac17/4c10/5e3d20c227c3d24e20666adddb223b2a"
                }}
                style={styles.ImageBackground_40_31}
              />
              <View style={styles.View_40_32}>
                <Text style={styles.Text_40_32}>2020</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_40_33}>
            <View style={styles.View_40_34}>
              <Text style={styles.Text_40_34}>
                Evalueserve’s Usecasehub identified as one of the top 10 Data
                Science products built  in India, by Analytics India Magazine{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_40_35}>
        <View style={styles.View_40_36}>
          <View style={styles.View_40_37}>
            <View style={styles.View_40_38}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac17/4c10/5e3d20c227c3d24e20666adddb223b2a"
                }}
                style={styles.ImageBackground_40_39}
              />
              <View style={styles.View_40_40}>
                <Text style={styles.Text_40_40}>2019</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_40_41}>
            <View style={styles.View_40_42}>
              <Text style={styles.Text_40_42}>
                Evalueserve recognized as one of the 11 Best Firms In India for
                Data Scientists to work for, by Analytics India Magazine in 2020
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_40_43}>
        <View style={styles.View_40_44}>
          <View style={styles.View_40_45}>
            <Text style={styles.Text_40_45}>
              Swapnil Srivatsava - Global Head of Analytics
            </Text>
          </View>
          <View style={styles.View_40_46}>
            <Text style={styles.Text_40_46}>
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
          <View style={styles.View_40_47}>
            <Text style={styles.Text_40_47}>Read more</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_40_48}>
        <View style={styles.View_40_49}>
          <View style={styles.View_40_50}>
            <Text style={styles.Text_40_50}>Leadership message</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/c133/b2e06e085daff46ede5d83ebcc2ce0bf"
            }}
            style={styles.ImageBackground_40_51}
          />
        </View>
      </View>
      <View style={styles.View_40_52}>
        <View style={styles.View_40_53}>
          <View style={styles.View_40_54}>
            <Text style={styles.Text_40_54}>nalytics</Text>
          </View>
          <View style={styles.View_40_55}>
            <Text style={styles.Text_40_55}>ustomer</Text>
          </View>
          <View style={styles.View_40_56}>
            <Text style={styles.Text_40_56}>nsights &amp;</Text>
          </View>
          <View style={styles.View_40_57}>
            <Text style={styles.Text_40_57}>ata</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_40_58}>
        <View style={styles.View_40_59}>
          <View style={styles.View_40_60}>
            <Text style={styles.Text_40_60}>A</Text>
          </View>
          <View style={styles.View_40_61}>
            <Text style={styles.Text_40_61}>C</Text>
          </View>
          <View style={styles.View_40_62}>
            <Text style={styles.Text_40_62}>I</Text>
          </View>
          <View style={styles.View_40_63}>
            <Text style={styles.Text_40_63}>D</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_40_64}>
        <Text style={styles.Text_40_64}>
          Welcome to the world of DA Knowledge{" "}
        </Text>
      </View>
      <View style={styles.View_82_43}>
        <View style={styles.View_I82_43_1_4}>
          <View style={styles.View_I82_43_1_5} />
          <View style={styles.View_I82_43_1_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92a5/0a89/5a75434412dfa946273f700061e75d54"
              }}
              style={styles.ImageBackground_I82_43_1_7}
            />
            <View style={styles.View_I82_43_1_10}>
              <Text style={styles.Text_I82_43_1_10}>know</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683d/1dd5/0b78d6057072114e535d11ee79608cfe"
            }}
            style={styles.ImageBackground_I82_43_1_11}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("115_119"))
          }
        >
          <View style={styles.View_I82_43_1_15}>
            <Text style={styles.Text_I82_43_1_15}>Ask the leadership</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("75_1"))
          }
        >
          <View style={styles.View_I82_43_1_14}>
            <Text style={styles.Text_I82_43_1_14}>
              Company Initiative Program
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("74_0"))
          }
        >
          <View style={styles.View_I82_43_1_13}>
            <Text style={styles.Text_I82_43_1_13}>Operations</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("64_1"))
          }
        >
          <View style={styles.View_I82_43_1_12}>
            <Text style={styles.Text_I82_43_1_12}>Sales</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("82_7"))
          }
        >
          <View style={styles.View_I82_43_82_41}>
            <Text style={styles.Text_I82_43_82_41}>Funzone</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_32"))
          }
        >
          <View style={styles.View_I82_43_20_74}>
            <Text style={styles.Text_I82_43_20_74}>Home</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_40_15: {
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
  ImageBackground_40_16: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("118.88888888888889%"),
    minHeight: hp("118.88888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-25.833333333333336%"),
    resizeMode: "cover"
  },
  ImageBackground_40_17: {
    width: wp("100%"),
    height: hp("89.44444444444444%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_40_18: {
    width: wp("86.640625%"),
    minWidth: wp("86.640625%"),
    height: hp("62.083333333333336%"),
    minHeight: hp("62.083333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.703125%"),
    top: hp("20.694444444444443%")
  },
  View_40_19: {
    width: wp("27.265625%"),
    minWidth: wp("27.265625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46875%"),
    top: hp("21.805555555555557%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_40_20: {
    width: wp("27.265625%"),
    minWidth: wp("27.265625%"),
    height: hp("16.944444444444446%"),
    minHeight: hp("16.944444444444446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-7.777777777777779%")
  },
  View_40_21: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.777777777777779%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_22: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.25%"),
    top: hp("0%")
  },
  ImageBackground_40_23: {
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
  View_40_24: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4843749999999964%"),
    top: hp("2.9166666666666643%")
  },
  Text_40_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_25: {
    width: wp("20.46875%"),
    minWidth: wp("20.46875%"),
    height: hp("7.222222222222221%"),
    minHeight: hp("7.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.796875%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_26: {
    width: wp("20.46875%"),
    minWidth: wp("20.46875%"),
    minHeight: hp("7.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_40_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_27: {
    width: wp("27.265625%"),
    minWidth: wp("27.265625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46875%"),
    top: hp("33.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_40_28: {
    width: wp("33.515625%"),
    minWidth: wp("33.515625%"),
    height: hp("17.083333333333332%"),
    minHeight: hp("17.083333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.25%"),
    top: hp("-7.916666666666664%")
  },
  View_40_29: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.916666666666664%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_30: {
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
  ImageBackground_40_31: {
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
  View_40_32: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4843749999999964%"),
    top: hp("2.9166666666666714%")
  },
  Text_40_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_33: {
    width: wp("20.46875%"),
    minWidth: wp("20.46875%"),
    height: hp("7.222222222222221%"),
    minHeight: hp("7.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.046875%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_34: {
    width: wp("20.46875%"),
    minWidth: wp("20.46875%"),
    minHeight: hp("7.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_40_34: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_35: {
    width: wp("27.265625%"),
    minWidth: wp("27.265625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46875%"),
    top: hp("44.861111111111114%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_40_36: {
    width: wp("34.296875%"),
    minWidth: wp("34.296875%"),
    height: hp("17.083333333333332%"),
    minHeight: hp("17.083333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.03125%"),
    top: hp("-7.916666666666671%")
  },
  View_40_37: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("9.166666666666666%"),
    minHeight: hp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.916666666666671%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_38: {
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
  ImageBackground_40_39: {
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
  View_40_40: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4843749999999964%"),
    top: hp("2.9166666666666643%")
  },
  Text_40_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_41: {
    width: wp("20.46875%"),
    minWidth: wp("20.46875%"),
    height: hp("7.222222222222221%"),
    minHeight: hp("7.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.828125%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_42: {
    width: wp("20.46875%"),
    minWidth: wp("20.46875%"),
    minHeight: hp("7.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_40_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_43: {
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
  View_40_44: {
    width: wp("65.703125%"),
    minWidth: wp("65.703125%"),
    height: hp("41.388888888888886%"),
    minHeight: hp("41.388888888888886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-4.166666666666657%")
  },
  View_40_45: {
    width: wp("35.78125%"),
    minWidth: wp("35.78125%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_40_45: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_46: {
    width: wp("65.703125%"),
    minWidth: wp("65.703125%"),
    minHeight: hp("12.36111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.472222222222214%")
  },
  Text_40_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_47: {
    width: wp("65.703125%"),
    minWidth: wp("65.703125%"),
    minHeight: hp("2.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.75%")
  },
  Text_40_47: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_48: {
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
  View_40_49: {
    width: wp("15.625%"),
    minWidth: wp("15.625%"),
    height: hp("23.47222222222222%"),
    minHeight: hp("23.47222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-17.1875%"),
    top: hp("0%")
  },
  View_40_50: {
    width: wp("15.46875%"),
    minWidth: wp("15.46875%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.16666666666667%")
  },
  Text_40_50: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_40_51: {
    width: wp("9.140625%"),
    minWidth: wp("9.140625%"),
    height: hp("16.25%"),
    minHeight: hp("16.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.484375%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 123.5,
    borderTopRightRadius: 123.5,
    borderBottomLeftRadius: 123.5,
    borderBottomRightRadius: 123.5
  },
  View_40_52: {
    width: wp("21.328125%"),
    minWidth: wp("21.328125%"),
    height: hp("34.166666666666664%"),
    minHeight: hp("34.166666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.90625%"),
    top: hp("19.583333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_40_53: {
    width: wp("27.578124999999996%"),
    minWidth: wp("27.578124999999996%"),
    height: hp("34.166666666666664%"),
    minHeight: hp("34.166666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11.71875%"),
    top: hp("0%")
  },
  View_40_54: {
    width: wp("20.546875%"),
    minWidth: wp("20.546875%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.34375%"),
    top: hp("25.416666666666668%")
  },
  Text_40_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_55: {
    width: wp("20.546875%"),
    minWidth: wp("20.546875%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5625%"),
    top: hp("0%")
  },
  Text_40_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_56: {
    width: wp("20.546875%"),
    minWidth: wp("20.546875%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.472222222222225%")
  },
  Text_40_56: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_57: {
    width: wp("20.546875%"),
    minWidth: wp("20.546875%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.03125%"),
    top: hp("16.944444444444446%")
  },
  Text_40_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_58: {
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
  View_40_59: {
    width: wp("3.9843749999999996%"),
    minWidth: wp("3.9843749999999996%"),
    height: hp("34.166666666666664%"),
    minHeight: hp("34.166666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.0625%"),
    top: hp("0%")
  },
  View_40_60: {
    width: wp("3.9843749999999996%"),
    minWidth: wp("3.9843749999999996%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.41666666666667%")
  },
  Text_40_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_61: {
    width: wp("3.9843749999999996%"),
    minWidth: wp("3.9843749999999996%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_40_61: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_62: {
    width: wp("3.9843749999999996%"),
    minWidth: wp("3.9843749999999996%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.472222222222225%")
  },
  Text_40_62: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_63: {
    width: wp("3.9843749999999996%"),
    minWidth: wp("3.9843749999999996%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.944444444444443%")
  },
  Text_40_63: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_64: {
    width: wp("65.15625%"),
    minWidth: wp("65.15625%"),
    minHeight: hp("8.472222222222223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.484375%"),
    top: hp("21.805555555555557%")
  },
  Text_40_64: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_43: {
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
  View_I82_43_1_4: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I82_43_1_5: {
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I82_43_1_6: {
    width: wp("9.728031158447266%"),
    height: hp("5.9722137451171875%"),
    top: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.859375%")
  },
  ImageBackground_I82_43_1_7: {
    width: wp("3.96406352519989%"),
    height: hp("5.9722137451171875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I82_43_1_10: {
    width: wp("5.607700347900391%"),
    top: hp("1.2031724717881946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.120330810546875%")
  },
  Text_I82_43_1_10: {
    color: "rgba(18, 19, 19, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I82_43_1_11: {
    width: wp("11.015625%"),
    height: hp("4.583333333333333%"),
    top: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.734375%"),
    resizeMode: "cover"
  },
  View_I82_43_1_15: {
    flexGrow: 1,
    width: wp("10.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.546875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_43_1_15: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_43_1_14: {
    flexGrow: 1,
    width: wp("15.234375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.03125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_43_1_14: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_43_1_13: {
    flexGrow: 1,
    width: wp("6.171875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_43_1_13: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_43_1_12: {
    flexGrow: 1,
    width: wp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.453125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_43_1_12: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_43_82_41: {
    flexGrow: 1,
    width: wp("4.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_43_82_41: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_43_20_74: {
    flexGrow: 1,
    width: wp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.296875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_43_20_74: {
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
