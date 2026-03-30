import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin13: ["SHIELD1"],
  pin14: ["SHIELD2"],
  pin15: ["SHIELD3"],
  pin16: ["SHIELD4"],
  pin17: ["GND_A"],
  pin18: ["VBUS_A"],
  pin19: ["GND_B"],
  pin20: ["VBUS_B"],
  pin21: ["CC2"],
  pin22: ["SBU2"],
  pin23: ["DP_B"],
  pin24: ["DM_A"],
  pin25: ["DP_A"],
  pin26: ["DM_B"],
  pin27: ["CC1"],
  pin28: ["SBU1"]
} as const

export const HX_USB3_1TYPE_C_16P_FS = (
  props: ChipProps<typeof pinLabels>,
) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C41427498"
  ]
}}
      manufacturerPartNumber="HX_USB3_1TYPE_C_16P_FS"
      footprint={<footprint>
        <hole pcbX="3.2499299999999494mm" pcbY="0.20039335000001302mm" diameter="1.1000232mm" />
<hole pcbX="-3.2499299999999494mm" pcbY="0.20039335000001302mm" diameter="1.1000232mm" />
<platedhole  portHints={["pin15"]} pcbX="4.899914000000081mm" pcbY="-2.7000326500000256mm" holeWidth="0.5999987999999999mm" holeHeight="1.7999964mm" outerWidth="0.9999979999999999mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin14"]} pcbX="-4.899913999999967mm" pcbY="-2.7000326500000256mm" holeWidth="0.5999987999999999mm" holeHeight="1.7999964mm" outerWidth="0.9999979999999999mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="4.899914000000081mm" pcbY="0.2999613499999896mm" holeWidth="0.5999987999999999mm" holeHeight="1.7999964mm" outerWidth="0.9999979999999999mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin13"]} pcbX="-4.899913999999967mm" pcbY="0.2999613499999896mm" holeWidth="0.5999987999999999mm" holeHeight="1.7999964mm" outerWidth="0.9999979999999999mm" outerHeight="2.1999956mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="-3.160013999999933mm" pcbY="2.1297773499999266mm" width="0.5500115999999999mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-2.3599139999998897mm" pcbY="2.1297773499999266mm" width="0.5500115999999999mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="3.1600140000000465mm" pcbY="2.1300313499999675mm" width="0.5500115999999999mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="2.359914000000117mm" pcbY="2.1297773499999266mm" width="0.5500115999999999mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="1.7499330000000555mm" pcbY="2.1297773499999266mm" width="0.25001219999999996mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-1.7500600000000759mm" pcbY="2.1297773499999266mm" width="0.25001219999999996mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="0.7499350000000504mm" pcbY="2.1297773499999266mm" width="0.25001219999999996mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="0.2499360000000479mm" pcbY="2.1297773499999266mm" width="0.25001219999999996mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-0.25006299999984094mm" pcbY="2.1297773499999266mm" width="0.25001219999999996mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-0.7500619999999572mm" pcbY="2.1297773499999266mm" width="0.25001219999999996mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-1.2500609999999597mm" pcbY="2.1297773499999266mm" width="0.25001219999999996mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="1.2499339999999393mm" pcbY="2.1297773499999266mm" width="0.25001219999999996mm" height="1.2400026mm" shape="rect" />
<silkscreenpath route={[{"x":4.499991000000136,"y":-5.19962124999995},{"x":4.499991000000136,"y":-3.9996236499999895}]} />
<silkscreenpath route={[{"x":2.7234388000000536,"y":-3.9996236499999895},{"x":2.7234388000000536,"y":-5.19962124999995}]} />
<silkscreenpath route={[{"x":2.8504388000000063,"y":-3.9996236499999895},{"x":2.698038800000063,"y":-3.9996236499999895}]} />
<silkscreenpath route={[{"x":-2.7248612000000776,"y":-3.9996236499999895},{"x":-2.7248612000000776,"y":-5.19962124999995}]} />
<silkscreenpath route={[{"x":-4.499990999999909,"y":-3.9996236499999895},{"x":4.499991000000136,"y":-3.9996236499999895}]} />
<silkscreenpath route={[{"x":4.499991000000136,"y":-3.9996236499999895},{"x":4.693920000000048,"y":-3.9996236499999895}]} />
<silkscreenpath route={[{"x":-4.499990999999909,"y":-3.9996236499999895},{"x":-4.693919999999935,"y":-3.9996236499999895}]} />
<silkscreenpath route={[{"x":-4.499990999999909,"y":-5.19962124999995},{"x":-4.499990999999909,"y":-3.9996236499999895}]} />
<silkscreenpath route={[{"x":-4.499990999999909,"y":-5.19962124999995},{"x":4.499991000000136,"y":-5.19962124999995}]} />
<silkscreenpath route={[{"x":4.999990000000139,"y":-1.0242930500000966},{"x":4.999990000000139,"y":-1.3757782499999394}]} />
<silkscreenpath route={[{"x":4.999990000000139,"y":1.850326549999977},{"x":4.999990000000139,"y":1.6242157499998484}]} />
<silkscreenpath route={[{"x":-4.999990000000025,"y":-1.0242930500000966},{"x":-4.999990000000025,"y":-1.3757782499999394}]} />
<silkscreenpath route={[{"x":-4.999990000000025,"y":1.850326549999977},{"x":-4.999990000000025,"y":1.6242157499998484}]} />
<silkscreenpath route={[{"x":3.691128000000049,"y":1.850326549999977},{"x":4.999990000000139,"y":1.850326549999977}]} />
<silkscreenpath route={[{"x":-4.999990000000025,"y":1.850326549999977},{"x":-3.691128000000049,"y":1.850326549999977}]} />
<courtyardoutline outline={[{"x":-5.658168000000046,"y":2.98810734999995},{"x":5.636832000000027,"y":2.98810734999995},{"x":5.636832000000027,"y":-5.462092650000045},{"x":-5.658168000000046,"y":-5.462092650000045},{"x":-5.658168000000046,"y":2.98810734999995}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C41427498.obj?uuid=1dde4ae83a0d4233ba2401203b32e887",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C41427498.step?uuid=1dde4ae83a0d4233ba2401203b32e887",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 1.3810492000000358, z: -0.20000260000000014 },
      }}
      {...props}
    />
  )
}
