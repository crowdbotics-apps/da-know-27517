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
        style={styles.ImageBackground_64_16}
      />
      <View style={styles.View_64_17}>
        <View style={styles.View_64_18} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2f/86b9/5281a7c76f38a61d8fd701667f929c55"
          }}
          style={styles.ImageBackground_64_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2f/86b9/5281a7c76f38a61d8fd701667f929c55"
          }}
          style={styles.ImageBackground_64_20}
        />
      </View>
      <View style={styles.View_64_21}>
        <Text style={styles.Text_64_21}>Client</Text>
      </View>
      <View style={styles.View_68_0}>
        <Text style={styles.Text_68_0}>Usecase</Text>
      </View>
      <View style={styles.View_68_1}>
        <Text style={styles.Text_68_1}>Links</Text>
      </View>
      <View style={styles.View_68_2}>
        <Text style={styles.Text_68_2}>Client</Text>
      </View>
      <View style={styles.View_68_3}>
        <Text style={styles.Text_68_3}>
          FTE resources for editorial support, design support and primary
          research support
        </Text>
      </View>
      <View style={styles.View_68_4}>
        <Text style={styles.Text_68_4}>
          Clarivate RFP for Product Operations Services
        </Text>
      </View>
      <View style={styles.View_68_101}>
        <View style={styles.View_68_102}>
          <Text style={styles.Text_68_102}>
            Web CMS Implementation Framework
          </Text>
        </View>
        <View style={styles.View_68_105}>
          <Text style={styles.Text_68_105}>Customer Data Platform</Text>
        </View>
      </View>
      <View style={styles.View_68_111}>
        <View style={styles.View_68_112}>
          <Text style={styles.Text_68_112}>VOCCoE – CTS Dashboard</Text>
        </View>
        <View style={styles.View_68_113}>
          <Text style={styles.Text_68_113}>
            LH Network Optimization Dashboard
          </Text>
        </View>
      </View>
      <View style={styles.View_68_30}>
        <Text style={styles.Text_68_30}>Client</Text>
      </View>
      <View style={styles.View_68_31}>
        <Text style={styles.Text_68_31}>
          FTE resources for Data Harmonization and Integration Data modeling,
          designing and architecting robust data management platform Data
          loading into a DataLakehouse Data Governance and DataOps
        </Text>
      </View>
      <View style={styles.View_68_32}>
        <Text style={styles.Text_68_32}>
          RFI Response for modernizing UCB Data Platform
        </Text>
      </View>
      <View style={styles.View_68_41}>
        <Text style={styles.Text_68_41}>Client</Text>
      </View>
      <View style={styles.View_68_42}>
        <Text style={styles.Text_68_42}>
          Provide skilled resources (onshore and offshore) across four
          functionalcategories Engineering Production Enablement and Insights
          Data Governance
        </Text>
      </View>
      <View style={styles.View_68_43}>
        <Text style={styles.Text_68_43}>
          Response to McDonald’s Corporation’s RFP
        </Text>
      </View>
      <View style={styles.View_64_24}>
        <Text style={styles.Text_64_24}>RFP</Text>
      </View>
      <View style={styles.View_69_34}>
        <Text style={styles.Text_69_34}>New Logos</Text>
      </View>
      <View style={styles.View_68_97}>
        <Text style={styles.Text_68_97}>Collateral (Use Cases)</Text>
      </View>
      <View style={styles.View_68_114}>
        <Text style={styles.Text_68_114}>Dashboards</Text>
      </View>
      <View style={styles.View_69_33}>
        <View style={styles.View_68_106}>
          <View style={styles.View_68_107}>
            <Text style={styles.Text_68_107}>
              ESG Research Report Automation using Deep Learning
            </Text>
          </View>
          <View style={styles.View_68_108}>
            <Text style={styles.Text_68_108}>
              Operator Identification and Partnership to increase Customer base
            </Text>
          </View>
          <View style={styles.View_68_110}>
            <Text style={styles.Text_68_110}>
              Case Studies Pack for Modernizing UCB Data Platform
            </Text>
          </View>
        </View>
        <View style={styles.View_68_109}>
          <Text style={styles.Text_68_109}>Case Studies</Text>
        </View>
      </View>
      <View style={styles.View_69_27} />
      <View style={styles.View_69_30} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89d6/0cf1/47b82586de40c380f1135eb93ed0fe55"
        }}
        style={styles.ImageBackground_69_35}
      />
      <View style={styles.View_70_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8717/ffde/bb0871328a7e239e1b8a57ab5009613b"
          }}
          style={styles.ImageBackground_70_0}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33d0/63a3/0233bc9a92b5936cc34918157f45d826"
          }}
          style={styles.ImageBackground_70_1}
        />
      </View>
      <View style={styles.View_82_88}>
        <View style={styles.View_I82_88_1_4}>
          <View style={styles.View_I82_88_1_5} />
          <View style={styles.View_I82_88_1_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92a5/0a89/5a75434412dfa946273f700061e75d54"
              }}
              style={styles.ImageBackground_I82_88_1_7}
            />
            <View style={styles.View_I82_88_1_10}>
              <Text style={styles.Text_I82_88_1_10}>know</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683d/1dd5/0b78d6057072114e535d11ee79608cfe"
            }}
            style={styles.ImageBackground_I82_88_1_11}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("115_119"))
          }
        >
          <View style={styles.View_I82_88_1_15}>
            <Text style={styles.Text_I82_88_1_15}>Ask the leadership</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("75_1"))
          }
        >
          <View style={styles.View_I82_88_1_14}>
            <Text style={styles.Text_I82_88_1_14}>
              Company Initiative Program
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("74_0"))
          }
        >
          <View style={styles.View_I82_88_1_13}>
            <Text style={styles.Text_I82_88_1_13}>Operations</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I82_88_1_12}>
          <Text style={styles.Text_I82_88_1_12}>Sales</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("82_7"))
          }
        >
          <View style={styles.View_I82_88_82_41}>
            <Text style={styles.Text_I82_88_82_41}>Funzone</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_32"))
          }
        >
          <View style={styles.View_I82_88_20_74}>
            <Text style={styles.Text_I82_88_20_74}>Home</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_64_16: {
    width: wp("100%"),
    height: hp("89.44444444444444%"),
    top: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_64_17: {
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
  View_64_18: {
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
  ImageBackground_64_19: {
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
  ImageBackground_64_20: {
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
  View_64_21: {
    width: wp("3.5937499999999996%"),
    minWidth: wp("3.5937499999999996%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.734375%"),
    top: hp("22.77777777777778%")
  },
  Text_64_21: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_0: {
    width: wp("6.5625%"),
    minWidth: wp("6.5625%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("22.77777777777778%")
  },
  Text_68_0: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_1: {
    width: wp("3.5937499999999996%"),
    minWidth: wp("3.5937499999999996%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.421875%"),
    top: hp("22.77777777777778%")
  },
  Text_68_1: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_2: {
    width: wp("3.5937499999999996%"),
    minWidth: wp("3.5937499999999996%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.734375%"),
    top: hp("26.944444444444443%")
  },
  Text_68_2: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_3: {
    width: wp("20.625%"),
    minWidth: wp("20.625%"),
    minHeight: hp("9.86111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.078125%"),
    top: hp("26.944444444444443%")
  },
  Text_68_3: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_4: {
    width: wp("16.5625%"),
    minWidth: wp("16.5625%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.421875%"),
    top: hp("26.944444444444443%")
  },
  Text_68_4: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_101: {
    width: wp("35.546875%"),
    minWidth: wp("35.546875%"),
    height: hp("8.055555555555555%"),
    minHeight: hp("8.055555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.203125%"),
    top: hp("26.944444444444443%")
  },
  View_68_102: {
    width: wp("35.546875%"),
    minWidth: wp("35.546875%"),
    minHeight: hp("3.194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_68_102: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_105: {
    width: wp("35.546875%"),
    minWidth: wp("35.546875%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.444444444444446%")
  },
  Text_68_105: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_111: {
    width: wp("35.546875%"),
    minWidth: wp("35.546875%"),
    height: hp("8.055555555555555%"),
    minHeight: hp("8.055555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.203125%"),
    top: hp("62.916666666666664%")
  },
  View_68_112: {
    width: wp("35.546875%"),
    minWidth: wp("35.546875%"),
    minHeight: hp("3.194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_68_112: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_113: {
    width: wp("35.546875%"),
    minWidth: wp("35.546875%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.44444444444445%")
  },
  Text_68_113: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_30: {
    width: wp("3.5937499999999996%"),
    minWidth: wp("3.5937499999999996%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.656250000000001%"),
    top: hp("37.22222222222222%")
  },
  Text_68_30: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_31: {
    width: wp("20.625%"),
    minWidth: wp("20.625%"),
    minHeight: hp("17.22222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.921875000000002%"),
    top: hp("37.22222222222222%")
  },
  Text_68_31: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_32: {
    width: wp("16.5625%"),
    minWidth: wp("16.5625%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.421875%"),
    top: hp("37.22222222222222%")
  },
  Text_68_32: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_41: {
    width: wp("3.5937499999999996%"),
    minWidth: wp("3.5937499999999996%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.656250000000001%"),
    top: hp("54.861111111111114%")
  },
  Text_68_41: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_42: {
    width: wp("20.625%"),
    minWidth: wp("20.625%"),
    minHeight: hp("16.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.921875000000002%"),
    top: hp("54.861111111111114%")
  },
  Text_68_42: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_43: {
    width: wp("16.5625%"),
    minWidth: wp("16.5625%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.421875%"),
    top: hp("54.861111111111114%")
  },
  Text_68_43: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_64_24: {
    width: wp("15.46875%"),
    minWidth: wp("15.46875%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("16.25%")
  },
  Text_64_24: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_34: {
    width: wp("15.46875%"),
    minWidth: wp("15.46875%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("76.11111111111111%")
  },
  Text_69_34: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_97: {
    width: wp("15.46875%"),
    minWidth: wp("15.46875%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.203125%"),
    top: hp("22.77777777777778%")
  },
  Text_68_97: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_114: {
    width: wp("15.46875%"),
    minWidth: wp("15.46875%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.203125%"),
    top: hp("58.75%")
  },
  Text_68_114: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_33: {
    width: wp("35.546875%"),
    minWidth: wp("35.546875%"),
    height: hp("17.36111111111111%"),
    minHeight: hp("17.36111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.203125%"),
    top: hp("38.19444444444444%")
  },
  View_68_106: {
    width: wp("35.546875%"),
    minWidth: wp("35.546875%"),
    height: hp("13.194444444444445%"),
    minHeight: hp("13.194444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.166666666666664%")
  },
  View_68_107: {
    width: wp("35.546875%"),
    minWidth: wp("35.546875%"),
    minHeight: hp("3.194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_68_107: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_108: {
    width: wp("35.546875%"),
    minWidth: wp("35.546875%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.583333333333336%")
  },
  Text_68_108: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_110: {
    width: wp("35.546875%"),
    minWidth: wp("35.546875%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.583333333333343%")
  },
  Text_68_110: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_109: {
    width: wp("15.46875%"),
    minWidth: wp("15.46875%"),
    minHeight: hp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_68_109: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_27: {
    width: wp("87.5%"),
    minWidth: wp("87.5%"),
    height: hp("52.77777777777778%"),
    minHeight: hp("52.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("20.555555555555554%"),
    borderColor: "rgba(124, 108, 170, 1)",
    borderWidth: 1
  },
  View_69_30: {
    width: wp("87.5%"),
    minWidth: wp("87.5%"),
    height: hp("11.666666666666666%"),
    minHeight: hp("11.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("80.41666666666667%"),
    borderColor: "rgba(217, 213, 231, 1)",
    borderWidth: 1
  },
  ImageBackground_69_35: {
    width: wp("0.0000012123081205572817%"),
    minWidth: wp("0.0000012123081205572817%"),
    height: hp("49.30555555555556%"),
    minHeight: hp("49.30555555555556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.6875%"),
    top: hp("22.36111111111111%")
  },
  View_70_2: {
    width: wp("84.44686889648438%"),
    minWidth: wp("84.44686889648438%"),
    height: hp("4.089882108900282%"),
    minHeight: hp("4.089882108900282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.734375%"),
    top: hp("84.16666666666667%")
  },
  ImageBackground_70_0: {
    width: wp("41.24374866485596%"),
    minWidth: wp("41.24374866485596%"),
    height: hp("4.089882108900282%"),
    minHeight: hp("4.089882108900282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_70_1: {
    width: wp("41.24374866485596%"),
    minWidth: wp("41.24374866485596%"),
    height: hp("3.498573833041721%"),
    minHeight: hp("3.498573833041721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.203125%"),
    top: hp("0.27777777777777146%")
  },
  View_82_88: {
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
  View_I82_88_1_4: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I82_88_1_5: {
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I82_88_1_6: {
    width: wp("9.728031158447266%"),
    height: hp("5.9722137451171875%"),
    top: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.859375%")
  },
  ImageBackground_I82_88_1_7: {
    width: wp("3.96406352519989%"),
    height: hp("5.9722137451171875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I82_88_1_10: {
    width: wp("5.607700347900391%"),
    top: hp("1.2031724717881946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.120330810546875%")
  },
  Text_I82_88_1_10: {
    color: "rgba(18, 19, 19, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I82_88_1_11: {
    width: wp("11.015625%"),
    height: hp("4.583333333333333%"),
    top: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.734375%"),
    resizeMode: "cover"
  },
  View_I82_88_1_15: {
    flexGrow: 1,
    width: wp("10.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.546875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_88_1_15: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_88_1_14: {
    flexGrow: 1,
    width: wp("15.234375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.03125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_88_1_14: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_88_1_13: {
    flexGrow: 1,
    width: wp("6.171875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_88_1_13: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_88_1_12: {
    flexGrow: 1,
    width: wp("2.890625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.453125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_88_1_12: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_88_82_41: {
    flexGrow: 1,
    width: wp("4.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_88_82_41: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_88_20_74: {
    flexGrow: 1,
    width: wp("3.359375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.296875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_88_20_74: {
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
