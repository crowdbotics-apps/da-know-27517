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
        style={styles.ImageBackground_115_120}
      />
      <View style={styles.View_115_121}>
        <View style={styles.View_115_122} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2f/86b9/5281a7c76f38a61d8fd701667f929c55"
          }}
          style={styles.ImageBackground_115_123}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2f/86b9/5281a7c76f38a61d8fd701667f929c55"
          }}
          style={styles.ImageBackground_115_124}
        />
      </View>
      <View style={styles.View_115_125}>
        <View style={styles.View_I115_125_1_4}>
          <View style={styles.View_I115_125_1_5} />
          <View style={styles.View_I115_125_1_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92a5/0a89/5a75434412dfa946273f700061e75d54"
              }}
              style={styles.ImageBackground_I115_125_1_7}
            />
            <View style={styles.View_I115_125_1_10}>
              <Text style={styles.Text_I115_125_1_10}>know</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683d/1dd5/0b78d6057072114e535d11ee79608cfe"
            }}
            style={styles.ImageBackground_I115_125_1_11}
          />
        </View>
        <View style={styles.View_I115_125_1_15}>
          <Text style={styles.Text_I115_125_1_15}>Ask the leadership</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("75_1"))
          }
        >
          <View style={styles.View_I115_125_1_14}>
            <Text style={styles.Text_I115_125_1_14}>
              Company Initiative Program
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("74_0"))
          }
        >
          <View style={styles.View_I115_125_1_13}>
            <Text style={styles.Text_I115_125_1_13}>Operations</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("64_1"))
          }
        >
          <View style={styles.View_I115_125_1_12}>
            <Text style={styles.Text_I115_125_1_12}>Sales</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("82_7"))
          }
        >
          <View style={styles.View_I115_125_82_41}>
            <Text style={styles.Text_I115_125_82_41}>Funzone</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_32"))
          }
        >
          <View style={styles.View_I115_125_20_74}>
            <Text style={styles.Text_I115_125_20_74}>Home</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_115_126}>
        <Text style={styles.Text_115_126}>ASK THE LEADERSHIP</Text>
      </View>
      <View style={styles.View_115_127}>
        <Text style={styles.Text_115_127}>Event Calendar</Text>
      </View>
      <View style={styles.View_115_128}>
        <Text style={styles.Text_115_128}>Today </Text>
      </View>
      <View style={styles.View_115_129}>
        <Text style={styles.Text_115_129}>On 28th this month</Text>
      </View>
      <View style={styles.View_115_130}>
        <Text style={styles.Text_115_130}>No Events</Text>
      </View>
      <View style={styles.View_115_131}>
        <Text style={styles.Text_115_131}>Click here</Text>
      </View>
      <View style={styles.View_115_132}>
        <Text style={styles.Text_115_132}>Virtual DA meet</Text>
      </View>
      <View style={styles.View_115_133}>
        <Text style={styles.Text_115_133}>On 30th next month</Text>
      </View>
      <View style={styles.View_115_134}>
        <Text style={styles.Text_115_134}>Virtual DA meet</Text>
      </View>
      <View style={styles.View_115_135}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ec/04f2/b0dad42d6c66966015d8411d8bc70504"
          }}
          style={styles.ImageBackground_115_136}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5a2/62ea/5bd04ffb4183cb59e6a9db7402c1f70e"
          }}
          style={styles.ImageBackground_115_137}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/752f/e740/1797d41ff8244a9fdcb37ab4bac74092"
          }}
          style={styles.ImageBackground_115_138}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beb8/eb08/69663181c40360e7b90e0a8e8b85adb9"
          }}
          style={styles.ImageBackground_115_139}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_140}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/704e/5ed6/3f811940f836f2e1783a075ab157c2aa"
          }}
          style={styles.ImageBackground_115_141}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8f/6af9/436b28d8dd59d6b6bc79c8517da5d704"
          }}
          style={styles.ImageBackground_115_142}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e16b/8576/725d29f17621add9cbd139d908ea6bcc"
          }}
          style={styles.ImageBackground_115_143}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/092e/1c59/30fbd5eb662938ab6c48aeaddd15cd85"
          }}
          style={styles.ImageBackground_115_144}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f453/292e/77070ebc3199a88335d3fd69eed6bd82"
          }}
          style={styles.ImageBackground_115_145}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/355b/c086/41ed6402349d14af052ebd0bc0eed556"
          }}
          style={styles.ImageBackground_115_146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bde/ce4a/5f8a2843f08d6e5613d0175c6774c93b"
          }}
          style={styles.ImageBackground_115_147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eec0/2c2c/c1b4823a636f56e246b7da5bb0ed4c7b"
          }}
          style={styles.ImageBackground_115_148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_149}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aae6/e88b/f49745f171f2f6e4ba1125987cbbc8bf"
          }}
          style={styles.ImageBackground_115_150}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_151}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_152}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_153}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e9/ca22/c44ea89449c09d05a104562d55a28e49"
          }}
          style={styles.ImageBackground_115_154}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_155}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8f/6af9/436b28d8dd59d6b6bc79c8517da5d704"
          }}
          style={styles.ImageBackground_115_156}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_157}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e16b/8576/725d29f17621add9cbd139d908ea6bcc"
          }}
          style={styles.ImageBackground_115_158}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_159}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/092e/1c59/30fbd5eb662938ab6c48aeaddd15cd85"
          }}
          style={styles.ImageBackground_115_160}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4f9/9198/39411d91770f5ee56b2fb2634c95a29c"
          }}
          style={styles.ImageBackground_115_161}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78dd/5c64/f2a52652814676ecab394bd2015237fb"
          }}
          style={styles.ImageBackground_115_162}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_163}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/355b/c086/41ed6402349d14af052ebd0bc0eed556"
          }}
          style={styles.ImageBackground_115_164}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_165}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f93b/9bba/0584b51c8156988664646ac6c7616524"
          }}
          style={styles.ImageBackground_115_166}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_167}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec79/adfd/a138e8af5cc23941772449273b6db053"
          }}
          style={styles.ImageBackground_115_168}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_169}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aae6/e88b/f49745f171f2f6e4ba1125987cbbc8bf"
          }}
          style={styles.ImageBackground_115_170}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_171}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_172}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_173}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_174}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b7a/9975/94e35d92c8d85d9b7e9623651b3f4a66"
          }}
          style={styles.ImageBackground_115_175}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce66/dcb1/fb720a0abde9fb909b7ce0ada4837d79"
          }}
          style={styles.ImageBackground_115_176}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8076/b043/7efe578c511c45719d56761f3b4bac94"
          }}
          style={styles.ImageBackground_115_177}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a925/a1ee/0ae0938df64e7dff564c3c3a670325eb"
          }}
          style={styles.ImageBackground_115_178}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f4/cf61/dbb321594efe2cdada14e81cb36e7751"
          }}
          style={styles.ImageBackground_115_179}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/092e/1c59/30fbd5eb662938ab6c48aeaddd15cd85"
          }}
          style={styles.ImageBackground_115_180}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78e9/e7ac/e99dd041e7ce8db76b91d6f22eb1b01e"
          }}
          style={styles.ImageBackground_115_181}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f453/292e/77070ebc3199a88335d3fd69eed6bd82"
          }}
          style={styles.ImageBackground_115_182}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_183}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/355b/c086/41ed6402349d14af052ebd0bc0eed556"
          }}
          style={styles.ImageBackground_115_184}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e24/b826/04f4068aeca1e2a1b0edb70d5180c6d9"
          }}
          style={styles.ImageBackground_115_185}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dbc/5ffd/619bcd234cdef22666d3b0e9a15bbb9c"
          }}
          style={styles.ImageBackground_115_186}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_187}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b22/b74c/00eacb4f76b1059c604e52de75278b46"
          }}
          style={styles.ImageBackground_115_188}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad24/f10f/1a269c1f89448e3dfd0823d56715e64b"
          }}
          style={styles.ImageBackground_115_189}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae18/a73f/4d51f7df7af4e269b0cee69f0f7e7e0f"
          }}
          style={styles.ImageBackground_115_190}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8f/6af9/436b28d8dd59d6b6bc79c8517da5d704"
          }}
          style={styles.ImageBackground_115_191}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_192}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3a0/3ceb/ed1a478aed5254266055edd4c5d4f3e4"
          }}
          style={styles.ImageBackground_115_193}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ab1/6d90/d7527e2560294b449c7e0fc80aab9a0b"
          }}
          style={styles.ImageBackground_115_194}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79e2/d57c/7b3eccc176a1575b277c4b9a34a014e6"
          }}
          style={styles.ImageBackground_115_195}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6771/0557/82a3ac0285f6a3bf3bddb15bc0b9781b"
          }}
          style={styles.ImageBackground_115_196}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79e2/d57c/7b3eccc176a1575b277c4b9a34a014e6"
          }}
          style={styles.ImageBackground_115_197}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8217/7eac/9f65dfd5a391d5676ed7f4d6685cf5fe"
          }}
          style={styles.ImageBackground_115_198}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1285/2bab/4d4d9f064850e46d71ba8161e806ee3b"
          }}
          style={styles.ImageBackground_115_199}
        />
        <View style={styles.View_115_200}>
          <Text style={styles.Text_115_200}>MAY</Text>
        </View>
      </View>
      <View style={styles.View_115_201}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bef8/7d90/d67019dc7a7a070f237ff739316ff5e7"
          }}
          style={styles.ImageBackground_115_202}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/752f/e740/1797d41ff8244a9fdcb37ab4bac74092"
          }}
          style={styles.ImageBackground_115_203}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44e7/39a0/b93685050c58debefd85db423aa07c45"
          }}
          style={styles.ImageBackground_115_204}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_205}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_206}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8f/6af9/436b28d8dd59d6b6bc79c8517da5d704"
          }}
          style={styles.ImageBackground_115_207}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e16b/8576/725d29f17621add9cbd139d908ea6bcc"
          }}
          style={styles.ImageBackground_115_208}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/092e/1c59/30fbd5eb662938ab6c48aeaddd15cd85"
          }}
          style={styles.ImageBackground_115_209}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddb8/b91f/2db7f432e3c3fcaf4d12fa28a9786060"
          }}
          style={styles.ImageBackground_115_210}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/355b/c086/41ed6402349d14af052ebd0bc0eed556"
          }}
          style={styles.ImageBackground_115_211}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bde/ce4a/5f8a2843f08d6e5613d0175c6774c93b"
          }}
          style={styles.ImageBackground_115_212}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a925/6d0d/7b45515e039795c34a4239888916f8a0"
          }}
          style={styles.ImageBackground_115_213}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_214}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aae6/e88b/f49745f171f2f6e4ba1125987cbbc8bf"
          }}
          style={styles.ImageBackground_115_215}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_216}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_217}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_218}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_219}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce40/6a73/8699070ff4fee25fc6d90896adf68598"
          }}
          style={styles.ImageBackground_115_220}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bebe/693d/13bd9317e0d746c8aa09ae28a3f2b065"
          }}
          style={styles.ImageBackground_115_221}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_222}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e16b/8576/725d29f17621add9cbd139d908ea6bcc"
          }}
          style={styles.ImageBackground_115_223}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_224}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/092e/1c59/30fbd5eb662938ab6c48aeaddd15cd85"
          }}
          style={styles.ImageBackground_115_225}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_226}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f453/292e/77070ebc3199a88335d3fd69eed6bd82"
          }}
          style={styles.ImageBackground_115_227}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_228}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/355b/c086/41ed6402349d14af052ebd0bc0eed556"
          }}
          style={styles.ImageBackground_115_229}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_230}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/208e/7e4b/5760a98da94ebc47f0f6501119e60739"
          }}
          style={styles.ImageBackground_115_231}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_232}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd0/3734/87030e60845881770ebf09f7ffd7f500"
          }}
          style={styles.ImageBackground_115_233}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e13/bebd/d2315f38b276d4ab546e37c2106a1aa5"
          }}
          style={styles.ImageBackground_115_234}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab67/8185/611fe19edeb71ed90d9e0fca7823d9bd"
          }}
          style={styles.ImageBackground_115_235}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_236}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267d/15cf/15b558af9068a98aab5348a59ca8473c"
          }}
          style={styles.ImageBackground_115_237}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_238}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_239}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_240}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8f/6af9/436b28d8dd59d6b6bc79c8517da5d704"
          }}
          style={styles.ImageBackground_115_241}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_242}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e16b/8576/725d29f17621add9cbd139d908ea6bcc"
          }}
          style={styles.ImageBackground_115_243}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_244}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/092e/1c59/30fbd5eb662938ab6c48aeaddd15cd85"
          }}
          style={styles.ImageBackground_115_245}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_246}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f453/292e/77070ebc3199a88335d3fd69eed6bd82"
          }}
          style={styles.ImageBackground_115_247}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db33/e6ed/226944a2237226a5713718422b850b15"
          }}
          style={styles.ImageBackground_115_248}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/087b/8223/78f2de1ad1d17555dfb56085ab72f43f"
          }}
          style={styles.ImageBackground_115_249}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_250}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/304c/6f54/468942681affb48cddf9254db49bcb31"
          }}
          style={styles.ImageBackground_115_251}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b100/8bcc/3b2a258733d6e9635e0eaf084de79940"
          }}
          style={styles.ImageBackground_115_252}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b22/b74c/00eacb4f76b1059c604e52de75278b46"
          }}
          style={styles.ImageBackground_115_253}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3926/7636/469bd203213f4d1c0f7491ebb5df6017"
          }}
          style={styles.ImageBackground_115_254}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c426/490b/80b0d53b3f5b780b9c9539c3821c0d91"
          }}
          style={styles.ImageBackground_115_255}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a68e/fc7a/ed030a528e92bf8bb54a91fe418886bf"
          }}
          style={styles.ImageBackground_115_256}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ab1/6d90/d7527e2560294b449c7e0fc80aab9a0b"
          }}
          style={styles.ImageBackground_115_257}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79e2/d57c/7b3eccc176a1575b277c4b9a34a014e6"
          }}
          style={styles.ImageBackground_115_258}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6771/0557/82a3ac0285f6a3bf3bddb15bc0b9781b"
          }}
          style={styles.ImageBackground_115_259}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79e2/d57c/7b3eccc176a1575b277c4b9a34a014e6"
          }}
          style={styles.ImageBackground_115_260}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8217/7eac/9f65dfd5a391d5676ed7f4d6685cf5fe"
          }}
          style={styles.ImageBackground_115_261}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea0a/32e4/ed5860974390e855c4caf776ad373aa7"
          }}
          style={styles.ImageBackground_115_262}
        />
        <View style={styles.View_115_263}>
          <Text style={styles.Text_115_263}>JUNE</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b3e/85dd/8b482886aff692de72b0d9ee76a964f5"
        }}
        style={styles.ImageBackground_115_264}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_115_120: {
    width: wp("100%"),
    height: hp("89.44444444444444%"),
    top: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_115_121: {
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
  View_115_122: {
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
  ImageBackground_115_123: {
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
  ImageBackground_115_124: {
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
  View_115_125: {
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
  View_I115_125_1_4: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I115_125_1_5: {
    width: wp("100%"),
    height: hp("10.555555555555555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I115_125_1_6: {
    width: wp("9.728031158447266%"),
    height: hp("5.9722137451171875%"),
    top: hp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.859375%")
  },
  ImageBackground_I115_125_1_7: {
    width: wp("3.96406352519989%"),
    height: hp("5.9722137451171875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I115_125_1_10: {
    width: wp("5.607700347900391%"),
    top: hp("1.203206380208333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.120330810546875%")
  },
  Text_I115_125_1_10: {
    color: "rgba(18, 19, 19, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I115_125_1_11: {
    width: wp("11.015625%"),
    height: hp("4.583333333333333%"),
    top: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.734375%"),
    resizeMode: "cover"
  },
  View_I115_125_1_15: {
    flexGrow: 1,
    width: wp("10.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.546875%"),
    top: hp("5.416666666666667%")
  },
  Text_I115_125_1_15: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I115_125_1_14: {
    flexGrow: 1,
    width: wp("15.234375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.03125%"),
    top: hp("5.416666666666667%")
  },
  Text_I115_125_1_14: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I115_125_1_13: {
    flexGrow: 1,
    width: wp("6.171875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I115_125_1_13: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I115_125_1_12: {
    flexGrow: 1,
    width: wp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.453125%"),
    top: hp("5.416666666666667%")
  },
  Text_I115_125_1_12: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I115_125_82_41: {
    flexGrow: 1,
    width: wp("4.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.0625%"),
    top: hp("5.416666666666667%")
  },
  Text_I115_125_82_41: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I115_125_20_74: {
    flexGrow: 1,
    width: wp("3.359375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.296875%"),
    top: hp("5.416666666666667%")
  },
  Text_I115_125_20_74: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_126: {
    width: wp("14.531250000000002%"),
    minWidth: wp("14.531250000000002%"),
    minHeight: hp("3.0555555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.328125%"),
    top: hp("19.583333333333332%")
  },
  Text_115_126: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_127: {
    width: wp("9.53125%"),
    minWidth: wp("9.53125%"),
    minHeight: hp("3.0555555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.78125%"),
    top: hp("19.583333333333332%")
  },
  Text_115_127: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_128: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("3.0555555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.78125%"),
    top: hp("60.138888888888886%")
  },
  Text_115_128: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_129: {
    width: wp("11.71875%"),
    minWidth: wp("11.71875%"),
    minHeight: hp("3.0555555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.78125%"),
    top: hp("73.05555555555556%")
  },
  Text_115_129: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_130: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("2.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.78125%"),
    top: hp("64.16666666666667%")
  },
  Text_115_130: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_131: {
    width: wp("5.546875%"),
    minWidth: wp("5.546875%"),
    minHeight: hp("2.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.40625%"),
    top: hp("74.86111111111111%")
  },
  Text_115_131: {
    color: "rgba(124, 108, 170, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_132: {
    width: wp("8.828125%"),
    minWidth: wp("8.828125%"),
    minHeight: hp("2.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.78125%"),
    top: hp("77.08333333333334%")
  },
  Text_115_132: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_133: {
    width: wp("12.265625%"),
    minWidth: wp("12.265625%"),
    minHeight: hp("3.0555555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.28125%"),
    top: hp("60.138888888888886%")
  },
  Text_115_133: {
    color: "rgba(9, 93, 173, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_134: {
    width: wp("8.828125%"),
    minWidth: wp("8.828125%"),
    minHeight: hp("2.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.28125%"),
    top: hp("64.16666666666667%")
  },
  Text_115_134: {
    color: "rgba(50, 48, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_135: {
    width: wp("20.390625%"),
    minWidth: wp("20.390625%"),
    height: hp("28.13523186577691%"),
    minHeight: hp("28.13523186577691%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.78125%"),
    top: hp("25.555555555555554%")
  },
  ImageBackground_115_136: {
    width: wp("1.953125%"),
    minWidth: wp("1.953125%"),
    height: hp("3.4722222222222223%"),
    minHeight: hp("3.4722222222222223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.359375%"),
    top: hp("22.361111111111118%")
  },
  ImageBackground_115_137: {
    width: wp("1.953125%"),
    minWidth: wp("1.953125%"),
    height: hp("3.4722222222222223%"),
    minHeight: hp("3.4722222222222223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("22.361111111111118%")
  },
  ImageBackground_115_138: {
    width: wp("20.390625%"),
    height: hp("4.953585730658637%"),
    top: hp("3.057183159722225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_115_139: {
    width: wp("20.390625%"),
    height: hp("4.953585730658637%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_115_140: {
    width: wp("0.3034677729010582%"),
    height: hp("1.3296756479475234%"),
    top: hp("10.201551649305554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.710832595825195%")
  },
  ImageBackground_115_141: {
    width: wp("0.5364340916275978%"),
    height: hp("1.3623722394307454%"),
    top: hp("13.482259114583332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1801528930664134%")
  },
  ImageBackground_115_142: {
    width: wp("0.5333686619997025%"),
    height: hp("1.3514730665418837%"),
    top: hp("13.509385850694446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0860748291015625%")
  },
  ImageBackground_115_143: {
    width: wp("0.5456303060054779%"),
    height: hp("1.324225001864963%"),
    top: hp("13.509385850694446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.016563415527344%")
  },
  ImageBackground_115_144: {
    width: wp("0.5333681032061577%"),
    height: hp("1.3460234800974529%"),
    top: hp("13.509385850694446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.940910339355469%")
  },
  ImageBackground_115_145: {
    width: wp("0.5578913539648056%"),
    height: hp("1.3787200715806749%"),
    top: hp("13.46028645833334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.834568023681634%")
  },
  ImageBackground_115_146: {
    width: wp("0.5395000800490379%"),
    height: hp("1.3296745883093941%"),
    top: hp("13.509385850694446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.73129653930664%")
  },
  ImageBackground_115_147: {
    width: wp("0.570152997970581%"),
    height: hp("1.3678219583299425%"),
    top: hp("13.476562500000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.603515625%")
  },
  ImageBackground_115_148: {
    width: wp("0.5609568208456039%"),
    height: hp("1.3787200715806749%"),
    top: hp("16.795247395833332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1770820617675781%")
  },
  ImageBackground_115_149: {
    width: wp("0.30346835032105446%"),
    height: hp("1.3296756479475234%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8163280487060547%")
  },
  ImageBackground_115_150: {
    width: wp("0.6191983446478844%"),
    height: hp("1.3732715447743733%"),
    top: hp("16.78439670138889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.273061752319343%")
  },
  ImageBackground_115_151: {
    width: wp("0.30346835032105446%"),
    height: hp("1.3296756479475234%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.893939971923821%")
  },
  ImageBackground_115_152: {
    width: wp("0.30346835032105446%"),
    height: hp("1.3296756479475234%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.326164245605469%")
  },
  ImageBackground_115_153: {
    width: wp("0.30346835032105446%"),
    height: hp("1.3296756479475234%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.7018051147461%")
  },
  ImageBackground_115_154: {
    width: wp("0.5425649136304855%"),
    height: hp("1.356923712624444%"),
    top: hp("16.78439670138889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.143194198608398%")
  },
  ImageBackground_115_155: {
    width: wp("0.3034677729010582%"),
    height: hp("1.3296756479475234%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.613868713378906%")
  },
  ImageBackground_115_156: {
    width: wp("0.5333692580461502%"),
    height: hp("1.3514730665418837%"),
    top: hp("16.817084418402775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.049125671386719%")
  },
  ImageBackground_115_157: {
    width: wp("0.3034677729010582%"),
    height: hp("1.3296756479475234%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.492229461669922%")
  },
  ImageBackground_115_158: {
    width: wp("0.5456297099590302%"),
    height: hp("1.3242260615030925%"),
    top: hp("16.817084418402775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.930557250976562%")
  },
  ImageBackground_115_159: {
    width: wp("0.3034689463675022%"),
    height: hp("1.3296756479475234%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.39202880859375%")
  },
  ImageBackground_115_160: {
    width: wp("0.5333681032061577%"),
    height: hp("1.3460234800974529%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.842620849609375%")
  },
  ImageBackground_115_161: {
    width: wp("0.30346842482686043%"),
    height: hp("1.3296767075856526%"),
    top: hp("20.119493272569446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9410476684570312%")
  },
  ImageBackground_115_162: {
    width: wp("0.5578915029764175%"),
    height: hp("1.3787200715806749%"),
    top: hp("20.07052951388889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3978099822998047%")
  },
  ImageBackground_115_163: {
    width: wp("0.30346835032105446%"),
    height: hp("1.3296767075856526%"),
    top: hp("20.119493272569446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8745880126953125%")
  },
  ImageBackground_115_164: {
    width: wp("0.5394991859793663%"),
    height: hp("1.3296767075856526%"),
    top: hp("20.119493272569446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.322118759155266%")
  },
  ImageBackground_115_165: {
    width: wp("0.30346835032105446%"),
    height: hp("1.3296767075856526%"),
    top: hp("20.119493272569446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.76518440246582%")
  },
  ImageBackground_115_166: {
    width: wp("0.570152997970581%"),
    height: hp("1.3678228855133057%"),
    top: hp("20.092366536458332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.21888542175293%")
  },
  ImageBackground_115_167: {
    width: wp("0.3034677729010582%"),
    height: hp("1.3296767075856526%"),
    top: hp("20.119493272569446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.689521789550781%")
  },
  ImageBackground_115_168: {
    width: wp("0.5609561875462532%"),
    height: hp("1.3787200715806749%"),
    top: hp("20.103217230902782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.14012336730957%")
  },
  ImageBackground_115_169: {
    width: wp("0.5364340916275978%"),
    height: hp("1.3623722394307454%"),
    top: hp("20.092366536458332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.463674545288086%")
  },
  ImageBackground_115_170: {
    width: wp("0.6191983446478844%"),
    height: hp("1.3732715447743733%"),
    top: hp("20.092366536458332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.125762939453125%")
  },
  ImageBackground_115_171: {
    width: wp("0.5364340916275978%"),
    height: hp("1.3623722394307454%"),
    top: hp("20.092366536458332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.49530029296875%")
  },
  ImageBackground_115_172: {
    width: wp("0.3034689463675022%"),
    height: hp("1.3296767075856526%"),
    top: hp("20.119493272569446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.129798889160156%")
  },
  ImageBackground_115_173: {
    width: wp("0.5364340916275978%"),
    height: hp("1.3623722394307454%"),
    top: hp("20.092366536458332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.290882110595703%")
  },
  ImageBackground_115_174: {
    width: wp("0.5364340916275978%"),
    height: hp("1.3623722394307454%"),
    top: hp("20.08680555555556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.943805694580078%")
  },
  ImageBackground_115_175: {
    width: wp("0.54563008248806%"),
    height: hp("1.3623722394307454%"),
    top: hp("23.400065104166668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.864410400390625%")
  },
  ImageBackground_115_176: {
    width: wp("0.5333688110113144%"),
    height: hp("1.3405738936530218%"),
    top: hp("23.42746310763889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5050888061523438%")
  },
  ImageBackground_115_177: {
    width: wp("0.5364340916275978%"),
    height: hp("1.3623722394307454%"),
    top: hp("23.400065104166668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7734508514404297%")
  },
  ImageBackground_115_178: {
    width: wp("0.5456303060054779%"),
    height: hp("1.3242239422268338%"),
    top: hp("23.42746310763889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.414100646972649%")
  },
  ImageBackground_115_179: {
    width: wp("0.5364340916275978%"),
    height: hp("1.3623722394307454%"),
    top: hp("23.400065104166668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.640625%")
  },
  ImageBackground_115_180: {
    width: wp("0.5333686619997025%"),
    height: hp("1.3460245397355821%"),
    top: hp("23.42190212673611%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.350673675537109%")
  },
  ImageBackground_115_181: {
    width: wp("0.5364340916275978%"),
    height: hp("1.3623722394307454%"),
    top: hp("23.400065104166668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.59145545959472%")
  },
  ImageBackground_115_182: {
    width: wp("0.5578913539648056%"),
    height: hp("1.3787200715806749%"),
    top: hp("23.378228081597225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.253543853759759%")
  },
  ImageBackground_115_183: {
    width: wp("0.5364340916275978%"),
    height: hp("1.3623722394307454%"),
    top: hp("23.400065104166668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.521896362304688%")
  },
  ImageBackground_115_184: {
    width: wp("0.5395000800490379%"),
    height: hp("1.3296745883093941%"),
    top: hp("23.42746310763889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.174819946289062%")
  },
  ImageBackground_115_185: {
    width: wp("0.5364340916275978%"),
    height: hp("1.3623722394307454%"),
    top: hp("23.400065104166668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.369606018066406%")
  },
  ImageBackground_115_186: {
    width: wp("0.570152997970581%"),
    height: hp("1.3678208986918132%"),
    top: hp("23.394775390625004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.02252960205078%")
  },
  ImageBackground_115_187: {
    width: wp("0.5364340916275978%"),
    height: hp("1.3623722394307454%"),
    top: hp("23.400065104166668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.28125%")
  },
  ImageBackground_115_188: {
    width: wp("0.5609561875462532%"),
    height: hp("1.3787221908569336%"),
    top: hp("23.400065104166668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.934593200683594%")
  },
  ImageBackground_115_189: {
    width: wp("0.5333686619997025%"),
    height: hp("1.3514730665418837%"),
    top: hp("26.729600694444446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8123207092285227%")
  },
  ImageBackground_115_190: {
    width: wp("0.6191981956362724%"),
    height: hp("1.3732715447743733%"),
    top: hp("26.70247395833334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4652442932128835%")
  },
  ImageBackground_115_191: {
    width: wp("0.5333686619997025%"),
    height: hp("1.3514730665418837%"),
    top: hp("26.729600694444446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8745880126953125%")
  },
  ImageBackground_115_192: {
    width: wp("0.30346835032105446%"),
    height: hp("1.3296767075856526%"),
    top: hp("26.80555555555556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.499931335449212%")
  },
  ImageBackground_115_193: {
    width: wp("0.5149766802787781%"),
    height: hp("1.1934378412034776%"),
    top: hp("5.814615885416668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1954879760742188%")
  },
  ImageBackground_115_194: {
    width: wp("0.7295504212379456%"),
    height: hp("1.1552916632758248%"),
    top: hp("5.836317274305557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.006385803222656%")
  },
  ImageBackground_115_195: {
    width: wp("0.5119113996624947%"),
    height: hp("1.1552916632758248%"),
    top: hp("5.836317274305557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.016563415527344%")
  },
  ImageBackground_115_196: {
    width: wp("0.9502542018890382%"),
    height: hp("1.1552916632758248%"),
    top: hp("5.836317274305557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.711008071899421%")
  },
  ImageBackground_115_197: {
    width: wp("0.5119108408689499%"),
    height: hp("1.1552916632758248%"),
    top: hp("5.836317274305557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.852973937988274%")
  },
  ImageBackground_115_198: {
    width: wp("0.4444741830229759%"),
    height: hp("1.1552916632758248%"),
    top: hp("5.836317274305557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.820198059082031%")
  },
  ImageBackground_115_199: {
    width: wp("0.51497682929039%"),
    height: hp("1.1934378412034776%"),
    top: hp("5.814615885416668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.670978546142578%")
  },
  View_115_200: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("3.0555555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.671874999999993%"),
    top: hp("0.972222222222225%")
  },
  Text_115_200: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_201: {
    width: wp("20.390625%"),
    minWidth: wp("20.390625%"),
    height: hp("25.833333333333336%"),
    minHeight: hp("25.833333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.28125%"),
    top: hp("25.555555555555554%")
  },
  ImageBackground_115_202: {
    width: wp("1.953125%"),
    minWidth: wp("1.953125%"),
    height: hp("3.4722222222222223%"),
    minHeight: hp("3.4722222222222223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.21875%"),
    top: hp("22.361111111111118%")
  },
  ImageBackground_115_203: {
    width: wp("20.390625%"),
    height: hp("4.953586790296766%"),
    top: hp("3.057183159722225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_115_204: {
    width: wp("20.390625%"),
    height: hp("4.953586790296766%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_115_205: {
    width: wp("0.30346930027008057%"),
    height: hp("1.329676310221354%"),
    top: hp("10.201551649305554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.077856063842773%")
  },
  ImageBackground_115_206: {
    width: wp("0.5364352464675903%"),
    height: hp("1.3623714447021484%"),
    top: hp("10.174153645833332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.934768676757812%")
  },
  ImageBackground_115_207: {
    width: wp("0.5333709716796875%"),
    height: hp("1.3514730665418837%"),
    top: hp("10.206976996527775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.82536506652832%")
  },
  ImageBackground_115_208: {
    width: wp("0.5456304550170898%"),
    height: hp("1.3242276509602864%"),
    top: hp("10.206976996527775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.761985778808594%")
  },
  ImageBackground_115_209: {
    width: wp("0.533367395401001%"),
    height: hp("1.346024407280816%"),
    top: hp("10.201551649305554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.64643096923828%")
  },
  ImageBackground_115_210: {
    width: wp("0.5578915774822235%"),
    height: hp("1.3623735639784071%"),
    top: hp("13.476562500000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1709403991699219%")
  },
  ImageBackground_115_211: {
    width: wp("0.5394995212554932%"),
    height: hp("1.3296752505832248%"),
    top: hp("13.509385850694446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.076910018920898%")
  },
  ImageBackground_115_212: {
    width: wp("0.570152997970581%"),
    height: hp("1.3678211636013455%"),
    top: hp("13.476562500000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.970577239990234%")
  },
  ImageBackground_115_213: {
    width: wp("0.5609560012817383%"),
    height: hp("1.3732708825005424%"),
    top: hp("13.492838541666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.931697845458984%")
  },
  ImageBackground_115_214: {
    width: wp("0.3034675121307373%"),
    height: hp("1.3296752505832248%"),
    top: hp("13.509385850694446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.552547454833984%")
  },
  ImageBackground_115_215: {
    width: wp("0.6191980838775635%"),
    height: hp("1.3732730017768011%"),
    top: hp("13.476562500000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.009281158447266%")
  },
  ImageBackground_115_216: {
    width: wp("0.3004026412963867%"),
    height: hp("1.3296752505832248%"),
    top: hp("13.509385850694446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.639362335205078%")
  },
  ImageBackground_115_217: {
    width: wp("0.3034687042236328%"),
    height: hp("1.3296752505832248%"),
    top: hp("13.509385850694446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.068496704101562%")
  },
  ImageBackground_115_218: {
    width: wp("0.3034698963165283%"),
    height: hp("1.3296752505832248%"),
    top: hp("13.509385850694446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.407363891601562%")
  },
  ImageBackground_115_219: {
    width: wp("0.5364346504211426%"),
    height: hp("1.3623725043402777%"),
    top: hp("13.482123480902782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.84876251220703%")
  },
  ImageBackground_115_220: {
    width: wp("0.3034685552120209%"),
    height: hp("1.3296773698594835%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9502506256103516%")
  },
  ImageBackground_115_221: {
    width: wp("0.5333687365055084%"),
    height: hp("1.3514730665418837%"),
    top: hp("16.817084418402775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3855361938476562%")
  },
  ImageBackground_115_222: {
    width: wp("0.30346840620040894%"),
    height: hp("1.3296773698594835%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8378047943115234%")
  },
  ImageBackground_115_223: {
    width: wp("0.5456304550170898%"),
    height: hp("1.3242255316840277%"),
    top: hp("16.817084418402775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2730712890625%")
  },
  ImageBackground_115_224: {
    width: wp("0.3034687042236328%"),
    height: hp("1.3296773698594835%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.75908088684082%")
  },
  ImageBackground_115_225: {
    width: wp("0.5333691835403442%"),
    height: hp("1.3460254669189453%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.209682464599609%")
  },
  ImageBackground_115_226: {
    width: wp("0.30346930027008057%"),
    height: hp("1.3296773698594835%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.695663452148438%")
  },
  ImageBackground_115_227: {
    width: wp("0.5578911304473877%"),
    height: hp("1.3787206013997395%"),
    top: hp("16.768120659722225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.152397155761719%")
  },
  ImageBackground_115_228: {
    width: wp("0.3034687042236328%"),
    height: hp("1.3296773698594835%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.610797882080078%")
  },
  ImageBackground_115_229: {
    width: wp("0.5395007133483887%"),
    height: hp("1.3296720716688368%"),
    top: hp("16.817084418402775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.058328628540039%")
  },
  ImageBackground_115_230: {
    width: wp("0.3034675121307373%"),
    height: hp("1.3296773698594835%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.510597229003906%")
  },
  ImageBackground_115_231: {
    width: wp("0.570152997970581%"),
    height: hp("1.3678264617919922%"),
    top: hp("16.78439670138889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.961189270019531%")
  },
  ImageBackground_115_232: {
    width: wp("0.3034698963165283%"),
    height: hp("1.3296773698594835%"),
    top: hp("16.81179470486111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.39202880859375%")
  },
  ImageBackground_115_233: {
    width: wp("0.5609560012817383%"),
    height: hp("1.3787227206759982%"),
    top: hp("16.795247395833332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.845691680908203%")
  },
  ImageBackground_115_234: {
    width: wp("0.5394995957612991%"),
    height: hp("1.3623725043402777%"),
    top: hp("20.08680555555556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8031177520751953%")
  },
  ImageBackground_115_235: {
    width: wp("0.6191980838775635%"),
    height: hp("1.3732698228624132%"),
    top: hp("20.092230902777782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4621734619140625%")
  },
  ImageBackground_115_236: {
    width: wp("0.5364340543746948%"),
    height: hp("1.3623703850640192%"),
    top: hp("20.092230902777782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8408756256103516%")
  },
  ImageBackground_115_237: {
    width: wp("0.30346810817718506%"),
    height: hp("1.329678429497613%"),
    top: hp("20.119493272569446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.475383758544922%")
  },
  ImageBackground_115_238: {
    width: wp("0.5364340543746948%"),
    height: hp("1.3623703850640192%"),
    top: hp("20.092230902777782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.657905578613281%")
  },
  ImageBackground_115_239: {
    width: wp("0.5364346504211426%"),
    height: hp("1.3623703850640192%"),
    top: hp("20.092230902777782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.3046875%")
  },
  ImageBackground_115_240: {
    width: wp("0.5364346504211426%"),
    height: hp("1.3623725043402777%"),
    top: hp("20.08680555555556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.625167846679688%")
  },
  ImageBackground_115_241: {
    width: wp("0.5333685874938965%"),
    height: hp("1.3514730665418837%"),
    top: hp("20.119493272569446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.259675979614258%")
  },
  ImageBackground_115_242: {
    width: wp("0.5364334583282471%"),
    height: hp("1.3623703850640192%"),
    top: hp("20.092230902777782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.509660720825195%")
  },
  ImageBackground_115_243: {
    width: wp("0.5456292629241943%"),
    height: hp("1.3242255316840277%"),
    top: hp("20.119493272569446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.150300979614258%")
  },
  ImageBackground_115_244: {
    width: wp("0.5364346504211426%"),
    height: hp("1.3623703850640192%"),
    top: hp("20.092230902777782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.440101623535156%")
  },
  ImageBackground_115_245: {
    width: wp("0.5333685874938965%"),
    height: hp("1.346024407280816%"),
    top: hp("20.119493272569446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.09302520751953%")
  },
  ImageBackground_115_246: {
    width: wp("0.5364346504211426%"),
    height: hp("1.3623725043402777%"),
    top: hp("20.08680555555556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.30005645751953%")
  },
  ImageBackground_115_247: {
    width: wp("0.5578923225402832%"),
    height: hp("1.3787206013997395%"),
    top: hp("20.07052951388889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.959102630615234%")
  },
  ImageBackground_115_248: {
    width: wp("0.5364342033863068%"),
    height: hp("1.3623746236165364%"),
    top: hp("23.400065104166668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.858306884765625%")
  },
  ImageBackground_115_249: {
    width: wp("0.5394993722438812%"),
    height: hp("1.3242255316840277%"),
    top: hp("23.42746310763889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.51123046875%")
  },
  ImageBackground_115_250: {
    width: wp("0.5364340543746948%"),
    height: hp("1.3623746236165364%"),
    top: hp("23.400065104166668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7121200561523438%")
  },
  ImageBackground_115_251: {
    width: wp("0.5701524019241333%"),
    height: hp("1.3678211636013455%"),
    top: hp("23.394639756944446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.368104934692383%")
  },
  ImageBackground_115_252: {
    width: wp("0.5364346504211426%"),
    height: hp("1.3623746236165364%"),
    top: hp("23.400065104166668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.645660400390625%")
  },
  ImageBackground_115_253: {
    width: wp("0.560956597328186%"),
    height: hp("1.378724839952257%"),
    top: hp("23.400065104166668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.301626205444336%")
  },
  ImageBackground_115_254: {
    width: wp("0.5333709716796875%"),
    height: hp("1.3514730665418837%"),
    top: hp("23.42746310763889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.56690788269043%")
  },
  ImageBackground_115_255: {
    width: wp("0.619196891784668%"),
    height: hp("1.3732719421386719%"),
    top: hp("23.394639756944446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.219831466674805%")
  },
  ImageBackground_115_256: {
    width: wp("0.51497682929039%"),
    height: hp("1.1934375762939453%"),
    top: hp("5.814615885416668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1954879760742188%")
  },
  ImageBackground_115_257: {
    width: wp("0.7295504212379456%"),
    height: hp("1.1552916632758248%"),
    top: hp("5.836317274305557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.006385803222656%")
  },
  ImageBackground_115_258: {
    width: wp("0.5119115114212036%"),
    height: hp("1.1552916632758248%"),
    top: hp("5.836317274305557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.016563415527344%")
  },
  ImageBackground_115_259: {
    width: wp("0.9502559900283813%"),
    height: hp("1.1552916632758248%"),
    top: hp("5.836317274305557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.71099853515625%")
  },
  ImageBackground_115_260: {
    width: wp("0.5119109153747559%"),
    height: hp("1.1552916632758248%"),
    top: hp("5.836317274305557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.852973937988281%")
  },
  ImageBackground_115_261: {
    width: wp("0.44447422027587885%"),
    height: hp("1.1552916632758248%"),
    top: hp("5.836317274305557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.820198059082031%")
  },
  ImageBackground_115_262: {
    width: wp("0.5149781703948975%"),
    height: hp("1.1934375762939453%"),
    top: hp("5.814615885416668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.674049377441406%")
  },
  View_115_263: {
    width: wp("3.5937499999999996%"),
    minWidth: wp("3.5937499999999996%"),
    minHeight: hp("3.0555555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.4375%"),
    top: hp("0.972222222222225%")
  },
  Text_115_263: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_115_264: {
    width: wp("34.53125%"),
    minWidth: wp("34.53125%"),
    height: hp("42.22222222222222%"),
    minHeight: hp("42.22222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.703125%"),
    top: hp("28.055555555555557%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
