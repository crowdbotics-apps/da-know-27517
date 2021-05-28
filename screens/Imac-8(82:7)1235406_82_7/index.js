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
        style={styles.ImageBackground_82_22}
      />
      <View style={styles.View_82_23}>
        <View style={styles.View_82_24} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2f/86b9/5281a7c76f38a61d8fd701667f929c55"
          }}
          style={styles.ImageBackground_82_25}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2f/86b9/5281a7c76f38a61d8fd701667f929c55"
          }}
          style={styles.ImageBackground_82_26}
        />
      </View>
      <View style={styles.View_82_133}>
        <View style={styles.View_I82_133_1_4}>
          <View style={styles.View_I82_133_1_5} />
          <View style={styles.View_I82_133_1_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92a5/0a89/5a75434412dfa946273f700061e75d54"
              }}
              style={styles.ImageBackground_I82_133_1_7}
            />
            <View style={styles.View_I82_133_1_10}>
              <Text style={styles.Text_I82_133_1_10}>know</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683d/1dd5/0b78d6057072114e535d11ee79608cfe"
            }}
            style={styles.ImageBackground_I82_133_1_11}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("115_119"))
          }
        >
          <View style={styles.View_I82_133_1_15}>
            <Text style={styles.Text_I82_133_1_15}>Ask the leadership</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("75_1"))
          }
        >
          <View style={styles.View_I82_133_1_14}>
            <Text style={styles.Text_I82_133_1_14}>
              Company Initiative Program
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("74_0"))
          }
        >
          <View style={styles.View_I82_133_1_13}>
            <Text style={styles.Text_I82_133_1_13}>Operations</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("64_1"))
          }
        >
          <View style={styles.View_I82_133_1_12}>
            <Text style={styles.Text_I82_133_1_12}>Sales</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I82_133_82_41}>
          <Text style={styles.Text_I82_133_82_41}>Funzone</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_32"))
          }
        >
          <View style={styles.View_I82_133_20_74}>
            <Text style={styles.Text_I82_133_20_74}>Home</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_82_170}>
        <View style={styles.View_82_169}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4a4/d339/b146a76f38952e0e33c80f771bc49eea"
            }}
            style={styles.ImageBackground_82_151}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3643/5260/b5d3d6e48b3eff6bd356266e4541cfeb"
            }}
            style={styles.ImageBackground_82_149}
          />
        </View>
        <View style={styles.View_82_167}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3643/5260/b5d3d6e48b3eff6bd356266e4541cfeb"
            }}
            style={styles.ImageBackground_82_159}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4a4/d339/b146a76f38952e0e33c80f771bc49eea"
            }}
            style={styles.ImageBackground_82_160}
          />
        </View>
        <View style={styles.View_82_166}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3643/5260/b5d3d6e48b3eff6bd356266e4541cfeb"
            }}
            style={styles.ImageBackground_82_164}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4a4/d339/b146a76f38952e0e33c80f771bc49eea"
            }}
            style={styles.ImageBackground_82_165}
          />
        </View>
        <View style={styles.View_82_168}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee9c/0f88/5f49243a09174d6d954d50d040c5fe9b"
            }}
            style={styles.ImageBackground_82_153}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c89/973f/7476773c9d434c09f291abc553d341a5"
            }}
            style={styles.ImageBackground_82_157}
          />
        </View>
      </View>
      <View style={styles.View_82_189}>
        <View style={styles.View_82_184}>
          <Text style={styles.Text_82_184}>
            Chelsea Leicester PMSales Persistent SSRians GlobalButterParty{" "}
          </Text>
        </View>
        <View style={styles.View_82_185}>
          <Text style={styles.Text_82_185}>
            277.1K 149.2K 238.4K 40.9K 62.9K
          </Text>
        </View>
        <View style={styles.View_82_183}>
          <Text style={styles.Text_82_183}>#trendinghashtags</Text>
        </View>
      </View>
      <View style={styles.View_82_190}>
        <View style={styles.View_82_219}>
          <View style={styles.View_82_191}>
            <Text style={styles.Text_82_191}>
              The Woman in the Window (2021) Spiral: From the Book of Saw (2021)
              Those Who Wish Me Dead (2021) 60% Oxygen (2021) 88% The Mitchells
              vs. The Machines (2021){" "}
            </Text>
          </View>
          <View style={styles.View_82_193}>
            <Text style={styles.Text_82_193}>#trendingbingemoviestowatch</Text>
          </View>
        </View>
        <View style={styles.View_82_218}>
          <View style={styles.View_82_195}>
            <Text style={styles.Text_82_195}>
              Zero Fail by Carol Leonnig The Anthropocene Reviewed by John Green
              The Psychology of Money by Morgan Housel Ikigai byHéctor García
              Atomic habits by James Clear
            </Text>
          </View>
          <View style={styles.View_82_196}>
            <Text style={styles.Text_82_196}>#trendingbookstoread</Text>
          </View>
        </View>
        <View style={styles.View_82_220}>
          <View style={styles.View_82_221}>
            <Text style={styles.Text_82_221}>
              Cybersecurity Mesh Blockchain Hybrid Clouds Edge Computing
              Artificial Intelligence
            </Text>
          </View>
          <View style={styles.View_82_222}>
            <Text style={styles.Text_82_222}>#trendingtechnologies</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_82_171}>
        <Text style={styles.Text_82_171}>QUIZ</Text>
      </View>
      <View style={styles.View_82_172}>
        <Text style={styles.Text_82_172}>
          This Hong-Kong based company recently introduced a robot that can
          sing, speak, joke, and even make art. What is the name of the company?
        </Text>
      </View>
      <View style={styles.View_82_186}>
        <Text style={styles.Text_82_186}>
          Biswanath - #48 Sri Vidhya - #48 Chandran - #48 Shruti Ajey - #48
          Sachin - #48
        </Text>
      </View>
      <View style={styles.View_82_223}>
        <Text style={styles.Text_82_223}>
          {" "}
          Happy birthday..!! Jasmine Aswanth Sujay
        </Text>
      </View>
      <View style={styles.View_82_188}>
        <Text style={styles.Text_82_188}>Leaderboard</Text>
      </View>
      <View style={styles.View_82_224}>
        <Text style={styles.Text_82_224}>
          It&#39;s your day, so is the treat!
        </Text>
      </View>
      <View style={styles.View_82_179}>
        <Text style={styles.Text_82_179}>Rethink Robotics</Text>
      </View>
      <View style={styles.View_82_180}>
        <Text style={styles.Text_82_180}>Grey Orange</Text>
      </View>
      <View style={styles.View_82_181}>
        <Text style={styles.Text_82_181}>Locus Robotics</Text>
      </View>
      <View style={styles.View_82_182}>
        <Text style={styles.Text_82_182}>Hanson Robotics</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("115_414"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c303/1a23/9a58c4d29b242bd56cdd42892e1e64b9"
          }}
          style={styles.ImageBackground_82_175}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("115_379"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c303/1a23/9a58c4d29b242bd56cdd42892e1e64b9"
          }}
          style={styles.ImageBackground_82_176}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("115_328"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c303/1a23/9a58c4d29b242bd56cdd42892e1e64b9"
          }}
          style={styles.ImageBackground_82_177}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("82_225"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c303/1a23/9a58c4d29b242bd56cdd42892e1e64b9"
          }}
          style={styles.ImageBackground_82_178}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_82_22: {
    width: wp("100%"),
    height: hp("89.44444444444444%"),
    top: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_82_23: {
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
  View_82_24: {
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
  ImageBackground_82_25: {
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
  ImageBackground_82_26: {
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
  View_82_133: {
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
  View_I82_133_1_4: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I82_133_1_5: {
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I82_133_1_6: {
    width: wp("9.728031158447266%"),
    height: hp("5.9722137451171875%"),
    top: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.859375%")
  },
  ImageBackground_I82_133_1_7: {
    width: wp("3.96406352519989%"),
    height: hp("5.9722137451171875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I82_133_1_10: {
    width: wp("5.607700347900391%"),
    top: hp("1.203206380208333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.120330810546875%")
  },
  Text_I82_133_1_10: {
    color: "rgba(18, 19, 19, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I82_133_1_11: {
    width: wp("11.015625%"),
    height: hp("4.583333333333333%"),
    top: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.734375%"),
    resizeMode: "cover"
  },
  View_I82_133_1_15: {
    flexGrow: 1,
    width: wp("10.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.546875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_133_1_15: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_133_1_14: {
    flexGrow: 1,
    width: wp("15.234375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.03125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_133_1_14: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_133_1_13: {
    flexGrow: 1,
    width: wp("6.171875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_133_1_13: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_133_1_12: {
    flexGrow: 1,
    width: wp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.453125%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_133_1_12: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_133_82_41: {
    flexGrow: 1,
    width: wp("4.765625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_133_82_41: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I82_133_20_74: {
    flexGrow: 1,
    width: wp("3.359375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.296875%"),
    top: hp("5.416666666666667%")
  },
  Text_I82_133_20_74: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_170: {
    width: wp("28.203129768371582%"),
    minWidth: wp("28.203129768371582%"),
    height: hp("71.35518391927084%"),
    minHeight: hp("71.35518391927084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("19.583333333333332%")
  },
  View_82_169: {
    width: wp("28.203125%"),
    minWidth: wp("28.203125%"),
    height: hp("15.199586020575628%"),
    minHeight: hp("15.199586020575628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_82_151: {
    width: wp("13.990527391433716%"),
    minWidth: wp("13.990527391433716%"),
    height: hp("15.199586020575628%"),
    minHeight: hp("15.199586020575628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.21259880065918%"),
    top: hp("0%")
  },
  ImageBackground_82_149: {
    width: wp("13.046722412109373%"),
    minWidth: wp("13.046722412109373%"),
    height: hp("15.199586020575628%"),
    minHeight: hp("15.199586020575628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_82_167: {
    width: wp("28.203129768371582%"),
    minWidth: wp("28.203129768371582%"),
    height: hp("15.199615690443252%"),
    minHeight: hp("15.199615690443252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.389255099826386%")
  },
  ImageBackground_82_159: {
    width: wp("13.046722412109373%"),
    minWidth: wp("13.046722412109373%"),
    height: hp("15.199586020575628%"),
    minHeight: hp("15.199586020575628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_82_160: {
    width: wp("13.990527391433716%"),
    minWidth: wp("13.990527391433716%"),
    height: hp("15.199586020575628%"),
    minHeight: hp("15.199586020575628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.21259880065918%"),
    top: hp("0%")
  },
  View_82_166: {
    width: wp("28.203129768371582%"),
    minWidth: wp("28.203129768371582%"),
    height: hp("15.199625227186415%"),
    minHeight: hp("15.199625227186415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56.15553114149306%")
  },
  ImageBackground_82_164: {
    width: wp("13.046722412109373%"),
    minWidth: wp("13.046722412109373%"),
    height: hp("15.199586020575628%"),
    minHeight: hp("15.199586020575628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0000678168402856727%")
  },
  ImageBackground_82_165: {
    width: wp("13.990527391433716%"),
    minWidth: wp("13.990527391433716%"),
    height: hp("15.199586020575628%"),
    minHeight: hp("15.199586020575628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.21259880065918%"),
    top: hp("0%")
  },
  View_82_168: {
    width: wp("28.20312023162842%"),
    minWidth: wp("28.20312023162842%"),
    height: hp("15.002191331651476%"),
    minHeight: hp("15.002191331651476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.766276041666668%")
  },
  ImageBackground_82_153: {
    width: wp("13.046722412109373%"),
    minWidth: wp("13.046722412109373%"),
    height: hp("15.002188152737087%"),
    minHeight: hp("15.002188152737087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_82_157: {
    width: wp("13.879491090774538%"),
    minWidth: wp("13.879491090774538%"),
    height: hp("15.002188152737087%"),
    minHeight: hp("15.002188152737087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.32363510131836%"),
    top: hp("0%")
  },
  View_82_189: {
    width: wp("26.875%"),
    minWidth: wp("26.875%"),
    height: hp("16.805555555555557%"),
    minHeight: hp("16.805555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.75%"),
    top: hp("19.583333333333332%")
  },
  View_82_184: {
    width: wp("14.785598516464232%"),
    minWidth: wp("14.785598516464232%"),
    minHeight: hp("12.36111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.444444444444446%")
  },
  Text_82_184: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_185: {
    width: wp("5.13147234916687%"),
    minWidth: wp("5.13147234916687%"),
    minHeight: hp("12.36111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.43851089477539%"),
    top: hp("4.444444444444446%")
  },
  Text_82_185: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_183: {
    width: wp("26.875%"),
    minWidth: wp("26.875%"),
    minHeight: hp("2.9166666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_82_183: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_190: {
    width: wp("26.875%"),
    minWidth: wp("26.875%"),
    height: hp("53.75%"),
    minHeight: hp("53.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.75%"),
    top: hp("38.05555555555556%")
  },
  View_82_219: {
    width: wp("26.875%"),
    minWidth: wp("26.875%"),
    height: hp("16.805555555555557%"),
    minHeight: hp("16.805555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_82_191: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("12.36111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.444444444444443%")
  },
  Text_82_191: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_193: {
    width: wp("26.875%"),
    minWidth: wp("26.875%"),
    minHeight: hp("2.9166666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_82_193: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_218: {
    width: wp("26.875%"),
    minWidth: wp("26.875%"),
    height: hp("16.805555555555557%"),
    minHeight: hp("16.805555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.47222222222222%")
  },
  View_82_195: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("12.36111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.44444444444445%")
  },
  Text_82_195: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_196: {
    width: wp("26.875%"),
    minWidth: wp("26.875%"),
    minHeight: hp("2.9166666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_82_196: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_220: {
    width: wp("26.875%"),
    minWidth: wp("26.875%"),
    height: hp("16.805555555555557%"),
    minHeight: hp("16.805555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.94444444444444%")
  },
  View_82_221: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("12.36111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.444444444444443%")
  },
  Text_82_221: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_222: {
    width: wp("26.875%"),
    minWidth: wp("26.875%"),
    minHeight: hp("2.9166666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_82_222: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_171: {
    width: wp("3.515625%"),
    minWidth: wp("3.515625%"),
    minHeight: hp("3.0555555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.8125%"),
    top: hp("19.583333333333332%")
  },
  Text_82_171: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_172: {
    width: wp("24.140625%"),
    minWidth: wp("24.140625%"),
    minHeight: hp("7.916666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.8125%"),
    top: hp("24.583333333333332%")
  },
  Text_82_172: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_186: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("12.36111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("58.05555555555556%")
  },
  Text_82_186: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_223: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("12.36111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("79.44444444444444%")
  },
  Text_82_223: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_188: {
    width: wp("24.140625%"),
    minWidth: wp("24.140625%"),
    minHeight: hp("2.9166666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.8125%"),
    top: hp("53.61111111111111%")
  },
  Text_82_188: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_224: {
    width: wp("24.140625%"),
    minWidth: wp("24.140625%"),
    minHeight: hp("2.9166666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.8125%"),
    top: hp("75%")
  },
  Text_82_224: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_179: {
    width: wp("8.28125%"),
    minWidth: wp("8.28125%"),
    minHeight: hp("2.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.15625%"),
    top: hp("33.75%")
  },
  Text_82_179: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_180: {
    width: wp("8.28125%"),
    minWidth: wp("8.28125%"),
    minHeight: hp("2.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.15625%"),
    top: hp("38.05555555555556%")
  },
  Text_82_180: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_181: {
    width: wp("8.28125%"),
    minWidth: wp("8.28125%"),
    minHeight: hp("2.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.15625%"),
    top: hp("42.638888888888886%")
  },
  Text_82_181: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_182: {
    width: wp("8.28125%"),
    minWidth: wp("8.28125%"),
    minHeight: hp("2.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.15625%"),
    top: hp("47.083333333333336%")
  },
  Text_82_182: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_175: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    height: hp("2.7777777777777777%"),
    minHeight: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.046875%"),
    top: hp("33.611111111111114%")
  },
  ImageBackground_82_176: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    height: hp("2.7777777777777777%"),
    minHeight: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.046875%"),
    top: hp("38.05555555555556%")
  },
  ImageBackground_82_177: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    height: hp("2.7777777777777777%"),
    minHeight: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.046875%"),
    top: hp("42.5%")
  },
  ImageBackground_82_178: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    height: hp("2.7777777777777777%"),
    minHeight: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.046875%"),
    top: hp("46.94444444444444%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
